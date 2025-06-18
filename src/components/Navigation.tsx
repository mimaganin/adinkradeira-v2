
import { useState } from "react";
import { Link } from "react-router-dom";
import { Menu, X, Home, Info, GraduationCap, Gamepad2, Mail } from "lucide-react";
import { Button } from "@/components/ui/button";

const Navigation = () => {
  const [isOpen, setIsOpen] = useState(false);

  const navItems = [
    { to: "/", label: "Início", icon: Home },
    { to: "/about", label: "Sobre", icon: Info },
    { to: "/education", label: "Educação", icon: GraduationCap },
    { to: "/game", label: "Jogo", icon: Gamepad2 },
    { to: "/contact", label: "Contato", icon: Mail },
  ];

  return (
    <nav className="bg-white/90 backdrop-blur-sm shadow-lg sticky top-0 z-50">
      <div className="container mx-auto px-4">
        <div className="flex justify-between items-center py-4">
          <Link to="/" className="flex items-center gap-2">
            <div className="text-2xl">⚖️</div>
            <span className="text-2xl font-bold text-amber-900">AdinkraDeira</span>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center gap-6">
            {navItems.map((item) => (
              <Link
                key={item.to}
                to={item.to}
                className="flex items-center gap-2 text-amber-800 hover:text-amber-600 transition-colors font-medium"
              >
                <item.icon size={18} />
                {item.label}
              </Link>
            ))}
          </div>

          {/* Mobile Navigation Button */}
          <Button
            variant="ghost"
            size="sm"
            className="md:hidden"
            onClick={() => setIsOpen(!isOpen)}
          >
            {isOpen ? <X size={24} /> : <Menu size={24} />}
          </Button>
        </div>

        {/* Mobile Navigation Menu */}
        {isOpen && (
          <div className="md:hidden bg-white border-t border-amber-200 py-4">
            <div className="flex flex-col gap-4">
              {navItems.map((item) => (
                <Link
                  key={item.to}
                  to={item.to}
                  className="flex items-center gap-3 text-amber-800 hover:text-amber-600 transition-colors font-medium px-4 py-2"
                  onClick={() => setIsOpen(false)}
                >
                  <item.icon size={20} />
                  {item.label}
                </Link>
              ))}
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navigation;
