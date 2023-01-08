import React from "react";
import Image from "next/image";

import {
  BsWallet as IWallet,
  BsCreditCard as ICreditCard,
} from "react-icons/bs";
import { IoPieChart as IPieChart, IoImage as IImage } from "react-icons/io5";
import { IoIosCash as ICash } from "react-icons/io";
import Link from "next/link";
import {v4 as uid} from "uuid"

const features = [
  {
    id: uid(),
    name: "Wallet",
    icon: (
      <IWallet className="text-4xl text-white py-1 px-2 rounded-sm bg-[#017E48]" />
    ),
  },
  {
    id: uid(),
    name: "Transactions",
    icon: (
      <ICash className="text-4xl py-1 px-2 rounded-sm bg-[#FBA45D] text-white" />
    ),
  },
  {
    id: uid(),
    name: "NFTs",
    icon: (
      <IImage className="text-4xl py-1 px-2 rounded-sm bg-[#6595A5] text-white" />
    ),
  },
  {
    id: uid(),
    name: "Activity",
    icon: (
      <IPieChart className="text-4xl py-1 px-2 rounded-sm bg-[#8F5EC3] text-white" />
    ),
  },
  {
    id: uid(),
    name: "Balances",
    icon: (
      <ICreditCard className="text-4xl py-1 px-2 rounded-sm bg-[#C9597C] text-white" />
    ),
  },
];
const About = () => {
  return (
    <section className="p-6 pt-10 bg-[#f7f7f7]" id="about">
      <div className="flex flex-col items-center">
        <h1 className="font-bold text-3xl text-center sm:text-left w-4/5 sm:w-2/5">
          One Platform, many super powers
        </h1>
        <h2 className="text-md text my-3 text-center sm:text-left">
          The most intuitive web3 toolbox on the web. From transactions to
          account activity
        </h2>
        <div className="flex flex-row items-center justify-center mt-5">
          <Image
            alt="Dashboard"
            src="/dashboard-1.jpg"
            className="mr-4"
            width="650"
            height="500"
          />
          <div className="ml-4">
            {features.map((feature) => (
              <div
                key={feature.id}
                className="mb-2 py-2 px-3 rounded-md hover:bg-white duration-200 transition-colors flex flex-row items-center hover:cursor-pointer"
              >
                {feature.icon}
                <span className="ml-3 font-bold">{feature.name}</span>
              </div>
            ))}
          </div>
        </div>
        <Link
          href="/login"
          className="button my-7 h-12 py-3 shadow-transparent hover:shadow-[#c9c9c9]"
        >Get Started</Link>
      </div>
    </section>
  );
};

export default About;
