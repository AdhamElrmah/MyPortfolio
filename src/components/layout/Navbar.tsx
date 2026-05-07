import React, { useState, useRef, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Link, useNavigate, useLocation } from "react-router-dom";
import { MenuToggle } from "../common/MenuToggle";

interface NavbarProps {
  isDark: boolean;
  toggleTheme: () => void;
  activeSection: string;
}

const menuItems = [
  { label: "HOME", href: "#home", id: "home" },
  { label: "ABOUT", href: "#about", id: "about" },
  { label: "SKILLS", href: "#skills", id: "skills" },
  { label: "PROJECTS", href: "#projects", id: "projects" },
  { label: "EXPERIENCE", href: "#experience", id: "experience" },
  { label: "EDUCATION", href: "#education", id: "education" },
  { label: "CONTACT", href: "#contact", id: "contact" },
];

export const Navbar: React.FC<NavbarProps> = ({ isDark, toggleTheme, activeSection }) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const menuRef = useRef<HTMLDivElement>(null);
  const buttonRef = useRef<HTMLButtonElement>(null);
  const navigate = useNavigate();
  const location = useLocation();

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (
        isMenuOpen &&
        menuRef.current &&
        buttonRef.current &&
        !menuRef.current.contains(event.target as Node) &&
        !buttonRef.current.contains(event.target as Node)
      ) {
        setIsMenuOpen(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, [isMenuOpen]);

  const handleNavClick = (id: string) => {
    setIsMenuOpen(false);
    if (location.pathname !== "/") {
      navigate("/", { state: { scrollTo: id } });
    } else {
      const element = document.getElementById(id);
      if (element) {
        element.scrollIntoView({ behavior: "smooth" });
      }
    }
  };

  return (
    <header className="fixed top-[40px] left-0 right-0 z-50 px-6 py-6">
      <nav className="flex items-center justify-between max-w-screen-2xl mx-auto">
        {/* Menu Button */}
        <div className="relative">
          <MenuToggle
            ref={buttonRef}
            isOpen={isMenuOpen}
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            isDark={isDark}
          />

          <AnimatePresence>
            {isMenuOpen && (
              <motion.div
                ref={menuRef}
                initial={{ opacity: 0, y: -20, scale: 0.95 }}
                animate={{ opacity: 1, y: 0, scale: 1 }}
                exit={{ opacity: 0, y: -20, scale: 0.95 }}
                transition={{ type: "spring", stiffness: 300, damping: 25 }}
                className="absolute top-full left-0 w-[200px] md:w-[240px] border-none shadow-2xl mt-2 ml-4 p-4 rounded-xl z-[100] backdrop-blur-md"
                style={{
                  backgroundColor: isDark ? "rgba(0, 0, 0, 0.8)" : "rgba(255, 255, 255, 0.8)",
                  border: isDark ? "1px solid rgba(255,255,255,0.1)" : "1px solid rgba(0,0,0,0.1)",
                }}
              >
                {menuItems.map((item, index) => (
                  <motion.button
                    key={item.label}
                    onClick={() => handleNavClick(item.id)}
                    initial={{ opacity: 0, x: -10 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: index * 0.05 }}
                    className="block w-full text-left text-lg md:text-xl font-bold tracking-tight py-1.5 px-2 cursor-pointer transition-colors duration-300"
                    style={{
                      color: activeSection === item.id
                        ? "#C3E41D"
                        : isDark
                          ? "hsl(0 0% 100%)"
                          : "hsl(0 0% 10%)",
                    }}
                    onMouseEnter={(e) => {
                      e.currentTarget.style.color = "#C3E41D";
                    }}
                    onMouseLeave={(e) => {
                      e.currentTarget.style.color = activeSection === item.id
                        ? "#C3E41D"
                        : isDark
                          ? "hsl(0 0% 100%)"
                          : "hsl(0 0% 10%)";
                    }}
                  >
                    {item.label}
                  </motion.button>
                ))}
              </motion.div>
            )}
          </AnimatePresence>
        </div>

        {/* Signature */}
        <Link
          to="/"
          className="text-4xl"
          style={{
            color: isDark ? "hsl(0 0% 100%)" : "hsl(0 0% 10%)",
            fontFamily: "'Brush Script MT', 'Lucida Handwriting', cursive",
          }}
        >
          A
        </Link>

        {/* Theme Toggle */}
        <button
          type="button"
          onClick={toggleTheme}
          className="relative w-16 h-8 rounded-full hover:opacity-80 transition-opacity"
          style={{
            backgroundColor: isDark ? "hsl(0 0% 15%)" : "hsl(0 0% 90%)",
          }}
          aria-label="Toggle theme"
        >
          <div
            className="absolute top-1 left-1 w-6 h-6 rounded-full transition-transform duration-300"
            style={{
              backgroundColor: isDark ? "hsl(0 0% 100%)" : "hsl(0 0% 10%)",
              transform: isDark ? "translateX(2rem)" : "translateX(0)",
            }}
          />
        </button>
      </nav>
    </header>
  );
};
