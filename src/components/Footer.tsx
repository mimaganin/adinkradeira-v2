
import { Heart, Code, Mail, Linkedin } from "lucide-react";
import { Link } from "react-router-dom";
import "adinkra-icons/css/icons.css";

const Footer = () => {
  return (
    <footer className="bg-amber-900 text-white">
      <div className="container mx-auto px-4 py-12">
        <div className="grid md:grid-cols-4 gap-8">
          <div className="md:col-span-2">
            <div className="flex items-center gap-2 mb-4">
              <i className="adk text-2xl adk-sankofa-two"></i>
              <span className="text-2xl font-bold">Adinkradeira</span>
            </div>
            <p className="text-amber-100 leading-relaxed mb-4">
              Promovendo educação antirracista e narrativas decoloniais 
              através da sabedoria ancestral dos símbolos Adinkra.
            </p>
            <div className="flex items-center gap-2 text-amber-200">
              <span>Criado com</span>
              <Heart size={16} className="text-red-400" />
              <span>por <a href="https://www.linkedin.com/in/mar%C3%ADlia-freitas-rossi/"> Marília Rossi - GIRA Educação</a></span>
              
            </div>
            <div className="flex items-center gap-1 text-amber-200">
              <Code size={18} className="text-red-40 mt-4" />
              <span className="text-amber-200 mt-4 text-sm"><a href="https://github.com/mimaganin/">Milena Maganin</a></span>
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
              <Link to="https://www.linkedin.com/in/mar%C3%ADlia-freitas-rossi/" className="flex items-center gap-2 text-amber-200 hover:text-white transition-colors">
                <Linkedin size={16} />
                <span>Marília Rossi</span>
              </Link>
            </div>
          </div>
        </div>
        
        <div className="border-t border-amber-800 mt-8 pt-8 text-center">
          <p className="text-amber-200">
            © 2025 Adinkradeira - GIRA Educação. Todos os direitos reservados. 
            Desenvolvido com tecnologia educacional acessível.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
