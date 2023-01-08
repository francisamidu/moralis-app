import React from "react";
import Link from "next/link";
import shared from "../shared.json";

const Header = () => {
  return (
    <section className="min-h-screen h-full">
      <div className="flex flex-col justify-center items-center">
        <h1 className="font-bold text-4xl mt-10 w-4/5 sm:w-3/5 text-center">
          {shared.description}
        </h1>
        <h2 className="text-md text-[#141d24] my-5 w-4/5 sm:w-2/5 text-center mx-auto">
          Explore the crypto world. Mint NFTs, see your transactions. Moralid is
          the your trusted friend in all of Web3.
        </h2>
        <Link href="/login" className="button">
          Get Started
        </Link>
      </div>
    </section>
  );
};

export default Header;
