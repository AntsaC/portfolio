import React from "react";

export default function Header() {
  return (
    <header class="bg-blue-500 p-4 px-5 text-white">
      <div class="container mx-auto flex justify-between items-center">
        <div>
          <h1 class="text-2xl font-bold">Your Brand</h1>
        </div>
        <nav>
          <ul class="flex space-x-4">
            <li>
              <a href="#" class="hover:underline">
                Home
              </a>
            </li>
            <li>
              <a href="#" class="hover:underline">
                Projects
              </a>
            </li>
            <li>
              <a href="#" class="hover:underline">
                Services
              </a>
            </li>
            <li>
              <a href="#" class="hover:underline">
                Contact
              </a>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
}
