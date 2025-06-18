
import { Heart, Github, Mail } from "lucide-react";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer className="bg-amber-900 text-white">
      <div className="container mx-auto px-4 py-12">
        <div className="grid md:grid-cols-4 gap-8">
          <div className="md:col-span-2">
            <div className="flex items-center gap-2 mb-4">
              <div className="text-2xl">⚖️</div>
              <span className="text-2xl font-bold">AdinkraDeira</span>
            </div>
            <p className="text-amber-100 leading-relaxed mb-4">
              Promovendo educação antirracista e narrativas decoloniais 
              através da sabedoria ancestral dos símbolos Adinkra.
            </p>
            <div className="flex items-center gap-2 text-amber-200">
              <span>Feito com</span>
              <Heart size={16} className="text-red-400" />
              <span>para uma educação mais justa</span>
            </div>
          </div>
          
          <div>
            <h3 className="font-bold text-lg mb-4">Navegação</h3>
            <div className="space-y-2">
              <Link to="/" className="block text-amber-200 hover:text-white transition-colors">
                Início
              </Link>
              <Link to="/about" className="block text-amber-200 hover:text-white transition-colors">
                Sobre
              </Link>
              <Link to="/education" className="block text-amber-200 hover:text-white transition-colors">
                Educação
              </Link>
              <Link to="/game" className="block text-amber-200 hover:text-white transition-colors">
                Jogo
              </Link>
            </div>
          </div>
          
          <div>
            <h3 className="font-bold text-lg mb-4">Conecte-se</h3>
            <div className="space-y-2">
              <Link to="/contact" className="flex items-center gap-2 text-amber-200 hover:text-white transition-colors">
                <Mail size={16} />
                Contato
              </Link>
              <a 
                href="#" 
                className="flex items-center gap-2 text-amber-200 hover:text-white transition-colors"
              >
                <Github size={16} />
                GitHub
              </a>
            </div>
          </div>
        </div>
        
        <div className="border-t border-amber-800 mt-8 pt-8 text-center">
          <p className="text-amber-200">
            © 2024 AdinkraDeira. Todos os direitos reservados. 
            Desenvolvido com tecnologia educacional acessível.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
