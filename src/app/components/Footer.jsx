"use client";
import { useState } from "react";

const Footer = () => {
  const [count, setCount] = useState(0);

  return (
    <footer>
      <div>
        <p onClick={() => setCount(count + 1)}>{count}</p>
        <p className="font-bold text-lg">&copy;Made by Davina</p>
      </div>
    </footer>
  );
};

export default Footer;
