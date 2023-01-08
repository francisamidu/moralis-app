import React, { useState } from "react";
import shared from "../shared.json";

const Footer = () => {
  const [date, _] = useState(new Date().getFullYear());
  return (
    <footer className="py-5 px-10">
      <div className="md:max-w-screen-lg md:mx-auto">
        <p className="font-bold">{shared.displayName}</p>
        <p className="mt-4">&copy;{date}. All rights reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;
