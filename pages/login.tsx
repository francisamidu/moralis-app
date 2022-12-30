import { MetaMaskConnector } from "wagmi/connectors/metaMask";
import { signIn } from "next-auth/client";
import { useAccount, useConnect, useSignMessage, useDisconnect } from "wagmi";
import { useAuthRequestChallengeEvm } from "@moralisweb3/next";
import Head from "next/head";
import { toast } from "react-toastify";

function SignIn() {
  const { connectAsync } = useConnect();
  const { disconnectAsync } = useDisconnect();
  const { isConnected } = useAccount();
  const { signMessageAsync } = useSignMessage();
  const { requestChallengeAsync } = useAuthRequestChallengeEvm();

  const handleAuth = async () => {
    try {
      if (isConnected) {
        await disconnectAsync();
      }

      const { account, chain } = await connectAsync({
        connector: new MetaMaskConnector(),
      });

      const { message } = await requestChallengeAsync({
        address: account,
        chainId: chain.id,
      });

      const signature = await signMessageAsync({ message });

      // redirect user after success authentication to '/user' page
      await signIn("moralis-auth", {
        message,
        signature,
        callbackUrl: "/user",
      });
    } catch (error) {
      toast.error(error.message);
    }
  };

  return (
    <>
      <Head>
        <title>Authenticate</title>
      </Head>
      <div className="main">
        <h3>Web3 Authentication</h3>
        <button className="button" onClick={() => handleAuth()}>
          Authenticate via Metamask
        </button>
      </div>
    </>
  );
}

export default SignIn;
