import React, { useEffect, useState } from "react";

type NavLink = {
  name: string;
  icon: React.ReactNode;
};

type NavbarProps = {
  links: NavLink[];
};

function Navbar({ links }: NavbarProps) {
  const [active, setActive] = useState<string>("");

  useEffect(() => {
    const sections = links.map((link) =>
      document.getElementById(link.name.toLowerCase())
    );

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActive(entry.target.id);
          }
        });
      },
      {
        threshold: 0.3,
      }
    );

    sections.forEach((section) => {
      if (section) observer.observe(section);
    });

    return () => observer.disconnect();
  }, [links]);

  return (
    <nav className="fixed bottom-6 left-1/2 -translate-x-1/2 z-50">
      <ul
        className="flex gap-6 px-6 py-4 rounded-full shadow-lg transition-all duration-500
        bg-white/30 backdrop-blur-xl border border-white/20
        dark:bg-slate-900/40 dark:border-slate-700/50 dark:shadow-2xl"
      >
        {links.map((link) => {
          const id = link.name.toLowerCase();
          const isActive = active === id;

          return (
            <li key={link.name}>
              <a
                href={`#${id}`}
                aria-label={link.name}
                className={`flex items-center gap-2 transition-colors duration-300
                ${
                  isActive
                    ? "text-blue-500 dark:text-blue-400"
                    : "text-gray-700 hover:text-blue-500 dark:text-slate-300 dark:hover:text-blue-400"
                }`}
              >
                <span className="text-xl">{link.icon}</span>
                <span className="hidden md:inline font-medium">{link.name}</span>
              </a>
            </li>
          );
        })}
      </ul>
    </nav>
  );
}

export default Navbar;