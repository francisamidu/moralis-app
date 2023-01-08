import React from "react";
import {
  BsLock as ILock,
  BsShieldLock as IShieldLock,
  BsSpeedometer as ISpeed,
} from "react-icons/bs";

const features = [
  {
    name: "Our Security",
    description:
      "We protect your money, your data and our systems. Security has always been at the hear of everything we do",
    icon: (
      <ILock className="text-[2.5rem] p-3 rounded-xl  bg-green-100 text-green-600" />
    ),
  },
  {
    name: "100% Safeguarded funds",
    description:
      "With our top class security and reputed wallets we connect to, you can rest assured your money is in safe hands.",
    icon: (
      <IShieldLock className="text-[2.5rem] p-3 rounded-xl  bg-orange-100 text-orange-600" />
    ),
  },
  {
    name: "As fast as it gets",
    description:
      "With crypto you can send and receive money to an country in literally minutes. Experience truly instant transfers!!",
    icon: (
      <ISpeed className="text-[2.5rem] p-3 rounded-xl  bg-yellow-100 text-yellow-600" />
    ),
  },
];
const Transfers = () => {
  return (
    <section className="p-6 sm:py-64">
      <div className="transfers grid grid-cols-1 md:max-w-screen-xl md:mx-auto">
        <div className="sm:col-start-1 sm:col-end-2 col-start-1 col-end-2 rounded-xl sm:relative flex flex-col sm:block">
          {features.map((feature, index) => (
            <div
              key={index}
              className={`sm:absolute shadow p-6 rounded-md bg-white z-5 sm:max-w-[300px] w-full mb-4 sm:mb-0
                     ${
                       index === 0
                         ? "sm:-top-44 sm:left-24"
                         : index === 1
                         ? "sm:-top-16 sm:right-10 shadowed"
                         : "sm:-bottom-36 sm:left-24"
                     }
                     `}
            >
              {feature.icon}
              <h1 className="font-bold text-2xl my-4">{feature.name}</h1>
              <p className="text">{feature.description}</p>
            </div>
          ))}
        </div>
        <div className="sm:col-start-2 sm:col-end-3 col-start-1 col-end-2 pr-10 ml-6">
          <div className="sm:w-3/5 mr-auto">
            <h1 className="font-bold text-3xl">
              Keep your <span className="text-blue-500">world close</span>
            </h1>
            <p className="mt-4">
              With crypto digital payments are the new norm. Send funds to any
              account with zero pain.
            </p>
            <p className="mt-2">
              Transfers between crypto accounts are secure and instant.
            </p>
          </div>
          <div className="relative hidden sm:block">
            <p className="rotated bottom-14 left-72">02. Seamless Transfers</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Transfers;
