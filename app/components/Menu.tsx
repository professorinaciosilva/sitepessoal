"use client";

import { useEffect, useState, useRef } from "react";
import { usePathname } from "next/navigation";

export default function Menu() {
  const [isSticky, setIsSticky] = useState(false);
  const menuRef = useRef<HTMLDivElement>(null);
  const pathname = usePathname();

  const menuItems = [
    { name: "Home", href: "/" },
    { name: "Blog", href: "/blog" },
    { name: "Livros", href: "/livros" },
    { name: "Contatos", href: "/contatos" },
  ];

  useEffect(() => {
    const handleScroll = () => {
      if (menuRef.current) {
        const { top } = menuRef.current.getBoundingClientRect();
        setIsSticky(top <= 0); // Fixa o menu quando ele alcança o topo
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div
      ref={menuRef}
      className={`${
        isSticky ? "fixed top-0 left-0 right-0 bg-blue-500 shadow-lg z-50" : "relative"
      } text-white p-4 transition-all duration-300`}
    >
      <ul className="flex gap-4 justify-center">
        {menuItems.map((item) => (
          <li key={item.name}>
            <a
              href={item.href}
              className={`hover:underline ${
                pathname === item.href ? "text-yellow-500 font-bold" : "text-blue-300"
              }`}
            >
              {item.name}
            </a>
          </li>
        ))}
      </ul>
    </div>
  );
}
