
import { Play, BookOpen, Gamepad2 } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";

const Hero = () => {
  return (
    <div className="relative min-h-screen bg-gradient-to-br from-amber-50 via-orange-50 to-red-50 overflow-hidden">
      {/* Decorative elements */}
      {/* <div className="absolute inset-0 opacity-10">
        <div className="absolute top-20 left-10 text-6xl rotate-12">⚖️</div>
        <div className="absolute top-40 right-20 text-4xl -rotate-12">🕊️</div>
        <div className="absolute bottom-32 left-20 text-5xl rotate-45">💪</div>
        <div className="absolute bottom-20 right-10 text-4xl -rotate-45">🌟</div>
      </div> */}
      
      <div className="relative container mx-auto px-4 py-20">
        <div className="max-w-4xl mx-auto text-center">
          <div className="mb-8">
            <h1 className="text-5xl md:text-7xl font-bold text-amber-900 mb-6 leading-tight">
              Adinkra
              <span className="block text-red-700">deira</span>
            </h1>
            <div className="w-32 h-2 bg-gradient-to-r from-amber-600 to-red-600 mx-auto mb-8"></div>
          </div>
          
          <p className="text-xl md:text-2xl text-gray-700 mb-12 leading-relaxed max-w-3xl mx-auto">
            Uma plataforma digital interativa que promove 
            <span className="font-semibold text-amber-800"> educação antirracista </span>
            através dos símbolos sagrados Adinkra, 
            valorizando a sabedoria ancestral africana.
          </p>
          
          <div className="grid md:grid-cols-3 gap-6 mb-12 max-w-3xl mx-auto">
            <div className="bg-white/70 backdrop-blur-sm rounded-lg p-6 shadow-lg transform hover:scale-105 transition-transform">
              <BookOpen className="mx-auto text-amber-600 mb-4" size={48} />
              <h3 className="font-bold text-amber-900 mb-2">Aprenda</h3>
              <p className="text-sm text-gray-700">
                Descubra os significados profundos dos símbolos Adinkra
              </p>
            </div>
            
            <div className="bg-white/70 backdrop-blur-sm rounded-lg p-6 shadow-lg transform hover:scale-105 transition-transform">
              <Gamepad2 className="mx-auto text-amber-600 mb-4" size={48} />
              <h3 className="font-bold text-amber-900 mb-2">Jogue</h3>
              <p className="text-sm text-gray-700">
                Divirta-se com este jogo educativo interativo
              </p>
            </div>
            
            <div className="bg-white/70 backdrop-blur-sm rounded-lg p-6 shadow-lg transform hover:scale-105 transition-transform">
              <Play className="mx-auto text-amber-600 mb-4" size={48} />
              <h3 className="font-bold text-amber-900 mb-2">Explore</h3>
              <p className="text-sm text-gray-700">
                Navegue por narrativas decoloniais inspiradoras
              </p>
            </div>
          </div>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link to="/game">
              <Button size="lg" className="bg-amber-600 hover:bg-amber-700 text-white px-8 py-3 text-lg">
                <Gamepad2 className="mr-2" size={20} />
                Jogar Agora
              </Button>
            </Link>
            
            <Link to="/about">
              <Button 
                size="lg" 
                variant="outline" 
                className="border-amber-600 text-amber-600 hover:bg-amber-50 px-8 py-3 text-lg"
              >
                <BookOpen className="mr-2" size={20} />
                Saiba Mais
              </Button>
            </Link>
          </div>
          
          <div className="mt-16 bg-gradient-to-r from-amber-100 to-orange-100 rounded-lg p-8 max-w-2xl mx-auto">
            <h2 className="text-2xl font-bold text-amber-900 mb-4">
              Educação que Transforma
            </h2>
            <p className="text-gray-700 leading-relaxed">
              Através dos símbolos Adinkra, conectamos passado e presente, 
              promovendo uma educação inclusiva que valoriza a diversidade 
              e combate o racismo estrutural por meio da intencionalidade pedagógica e da diversão.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
