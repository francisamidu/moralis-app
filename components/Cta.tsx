import Link from "next/link";
import React from "react";
import shared from "../shared.json";

const Cta = () => {
  return (
    <section className="bg-white p-4">
      <div className="md:max-w-screen-lg md:mx-auto bg-main rounded-md p-10 flex flex-col sm:flex-row items-center justify-between">
        <div>
          <h1 className="font-bold text-white text-center sm:text-left text-3xl">
            Are you excited for {shared.name}?
          </h1>
          <p className="text-[#dadada] mt-5 text-center sm:text-left ">
            Jump on the Web3 bandwagon in under 3 minutes... For Free. Its that
            easy
          </p>
        </div>
        <Link
          href="/login"
          className="button mt-4 sm:mt-0 py-4 shadow-transparent hover:shadow-none hover:transform-none"
        >
          Get Started
        </Link>
      </div>
    </section>
  );
};

export default Cta;
