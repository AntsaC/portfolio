import React from "react";
import ContactContainer from "./ContactContainer";

export default function Footer() {
  return (
    <div className="mt-8 pb-6 text-zinc-50 text-center px-4">
      <ContactContainer />
      <p>
        Build with <span className="text-green-400">Next JS</span> and{" "}
        <span className="text-green-400">Tailwind CSS</span>, deployed by
        Vercel.
      </p>
      <p>&copy; 2023 Antsa Fiderana. All Rights Reserved.</p>
    </div>
  );
}
