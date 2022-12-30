import { getSession, signOut } from "next-auth/client";
import Moralis from "moralis";
import { EvmChain } from "@moralisweb3/common-evm-utils";
import { useEffect, useState } from "react";
import Link from "next/link";
import { toast } from "react-toastify";

// gets a prop from getServerSideProps
const User = ({ user }) => {
  const {
    user: { address },
  } = user;
  const init = async () => {
    try {
      await Moralis.start({
        apiKey: process.env.MORALIS_API_KEY,
      });
      Promise.all([getBalance(), getNFTs(), getTokens()]);
    } catch (error) {}
  };
  const [data, setData] = useState({
    balance: 0,
    nfts: 0,
    tokens: 0,
  });
  const getNFTs = async () => {
    try {
      const allNFTs = [];

      const chains = [EvmChain.ETHEREUM, EvmChain.BSC, EvmChain.POLYGON];

      for (const chain of chains) {
        const response = await Moralis.EvmApi.nft.getWalletNFTs({
          address,
          chain,
        });

        allNFTs.push(response);
      }

      setData({
        ...data,
        tokens: allNFTs.length,
      });
    } catch (error) {
      toast.error(error.message);
    }
  };
  const getBalance = async () => {
    try {
      const chain = EvmChain.ETHEREUM;

      const response = await Moralis.EvmApi.balance.getNativeBalance({
        address,
        chain,
      });

      setData({
        ...data,
        balance: Number(response.toJSON().balance),
      });
    } catch (error) {
      toast.error(error.message);
    }
  };
  const getTokens = async () => {
    try {
      const chain = EvmChain.ETHEREUM;

      const response = await Moralis.EvmApi.token.getWalletTokenBalances({
        address,
        chain,
      });

      const { length } = response.toJSON();
      setData({
        ...data,
        tokens: length,
      });
    } catch (error) {
      toast.error(error.message);
    }
  };
  useEffect(() => {
    init();
    return () => {};
  }, [undefined]);
  return (
    <>
      <div className="top">
        <Link href="/">Home</Link>
        <button
          className="button"
          onClick={() => signOut({ callbackUrl: "/signin", redirect: true })}
        >
          Sign out
        </button>
      </div>
      <div className="container">
        <div className="table-container" role="table" aria-label="Information">
          <div className="flex-table header" role="rowgroup">
            <div className="flex-row first" role="columnheader">
              Label
            </div>
            <div className="flex-row" role="columnheader">
              Data
            </div>
          </div>
          <div className="flex-table row" role="rowgroup">
            <div className="flex-row" role="cell">
              Web3 Account
            </div>
            <div className="flex-row" role="cell">
              {`${address.slice(0, 10)}....`}
            </div>
          </div>
          <div className="flex-table row" role="rowgroup">
            <div className="flex-row" role="cell">
              Number of NFTs owned
            </div>
            <div className="flex-row" role="cell">
              {data.nfts}
            </div>
          </div>
          <div className="flex-table row" role="rowgroup">
            <div className="flex-row" role="cell">
              Number of Tokens owned
            </div>
            <div className="flex-row" role="cell">
              {data.tokens}
            </div>
          </div>
          <div className="flex-table row" role="rowgroup">
            <div className="flex-row" role="cell">
              Balance of Account
            </div>
            <div className="flex-row" role="cell">
              {data.balance}
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export const getServerSideProps = async (context) => {
  const session = await getSession(context);

  // redirect if not authenticated
  if (!session) {
    return {
      redirect: {
        destination: "/signin",
        permanent: false,
      },
    };
  }

  return {
    props: { user: session.user },
  };
};

export default User;
