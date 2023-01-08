import React from "react";
import Image from "next/image";

const Transactions = () => {
  return (
    <section className="bg-[#eef1f8] p-6">
      <div className="grid grid-cols-1 sm:grid-cols-2 md:max-w-screen-lg md:mx-auto">
        <div className="col-start-1 col-end-2 mt-10 pl-10">
          <div className="relative hidden sm:block">
            <p className="rotated">01. Smart Transactions</p>
          </div>
          <div className="sm:w-4/5 ml-auto">
            <h1 className="font-bold text-2xl">
              Web3 Financial awareness taken to another level.
            </h1>
            <p className="mt-4">
              Track your account activity in real-time, get an overview of your
              monthly outgoings.
            </p>
            <p className="mt-2">
              Wanna know what last months sent and received crypto looks like?
              Get account all your transactions under one roof.
            </p>
          </div>
        </div>
        <div className="sm:col-start-2 sm:col-end-3 col-start-1 col-end-1 row-start-1 row-end-2">
          <Image
            alt="Transactions"
            src="/transactions.jpg"
            width="650"
            height="450"
          />
        </div>
      </div>
    </section>
  );
};

export default Transactions;
