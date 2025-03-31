
import { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import { MobileNav } from "@/components/mobile-nav";
import { motion } from "framer-motion";
import { useIsMobile } from "@/hooks/use-mobile";

const navItems = [
  { name: "Home", path: "/" },
  { name: "Projects", path: "/projects" },
  { name: "About", path: "/about" },
  { name: "Blog", path: "/blog" },
  { name: "Contact", path: "/contact" },
];

export function Header() {
  const [isScrolled, setIsScrolled] = useState(false);
  const location = useLocation();
  const isMobile = useIsMobile();

  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY;
      setIsScrolled(scrollPosition > 10);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 w-full z-50 transition-all duration-300 ${
        isScrolled ? "py-3 glass" : "py-5 bg-transparent"
      }`}
    >
      <div className="container mx-auto px-4 md:px-6 flex items-center justify-between">
        <Link
          to="/"
          className="text-xl md:text-2xl font-display font-semibold relative overflow-hidden group"
        >
          <span className="inline-block transition-all duration-300 group-hover:translate-y-[-100%]">
            ES
          </span>
          <span className="absolute top-0 left-0 translate-y-full transition-all duration-300 group-hover:translate-y-0">
            ES
          </span>
        </Link>

        {/* Desktop Navigation */}
        {!isMobile && (
          <nav className="hidden md:flex items-center space-x-6">
            {navItems.map((item) => (
              <Link
                key={item.name}
                to={item.path}
                className={`relative py-1 px-1 text-sm tracking-wide transition-colors hover:text-primary ${
                  location.pathname === item.path
                    ? "text-primary"
                    : "text-muted-foreground"
                } after:absolute after:left-0 after:bottom-0 after:h-[1px] after:w-full after:origin-bottom-right after:scale-x-0 after:bg-primary after:transition-transform after:duration-300 hover:after:origin-bottom-left hover:after:scale-x-100`}
              >
                {item.name}
                {location.pathname === item.path && (
                  <motion.span
                    className="absolute bottom-0 left-0 h-0.5 w-full bg-primary"
                    layoutId="underline"
                  />
                )}
              </Link>
            ))}
          </nav>
        )}

        <div className="flex items-center">
          <MobileNav />
        </div>
      </div>
    </header>
  );
}
