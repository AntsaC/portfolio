import React from "react";

export default function Header() {
  return (
    <header className=" p-4 px-10 text-white">
      <div className="container mx-auto flex justify-between items-center">
        <div>
          <h1 className="text-2xl font-bold">#Ina_leka_zao</h1>
        </div>
        <nav>
          <ul className="flex space-x-4">
            <NavLink text={"Home"} />
            <NavLink text={"Projects"} />
            <NavLink text={"Experiences"} />
            <NavLink text={"Contact"} />
          </ul>
        </nav>
      </div>
    </header>
  );
}

function NavLink({ text }) {
  return (
    <li>
      <a
        href="#"
        className="hover:text-emerald-400  transition-all duration-300 ease-in-out"
      >
        {text}
      </a>
    </li>
  );
}
