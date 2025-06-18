
import { ArrowLeft } from "lucide-react";
import { Link } from "react-router-dom";

const About = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-amber-50 via-orange-50 to-red-50">
      <div className="container mx-auto px-4 py-8">
        <Link 
          to="/" 
          className="inline-flex items-center gap-2 text-amber-800 hover:text-amber-600 transition-colors mb-8"
        >
          <ArrowLeft size={20} />
          Voltar ao início
        </Link>
        
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-12">
            <h1 className="text-4xl md:text-5xl font-bold text-amber-900 mb-6">
              Sobre os Símbolos Adinkra
            </h1>
            <div className="w-24 h-1 bg-gradient-to-r from-amber-600 to-red-600 mx-auto mb-8"></div>
          </div>

          <div className="grid md:grid-cols-2 gap-8 items-center mb-12">
            <div className="bg-white/70 backdrop-blur-sm rounded-lg p-6 shadow-lg">
              <h2 className="text-2xl font-bold text-amber-900 mb-4">
                História e Origem
              </h2>
              <p className="text-gray-700 leading-relaxed mb-4">
                Os símbolos Adinkra têm origem no povo Akan de Gana e Costa do Marfim, 
                representando conceitos e provérbios que transmitem sabedoria ancestral 
                através de gerações.
              </p>
              <p className="text-gray-700 leading-relaxed">
                Cada símbolo carrega significados profundos sobre valores, 
                filosofia de vida e conhecimento tradicional africano.
              </p>
            </div>
            
            <div className="bg-white/70 backdrop-blur-sm rounded-lg p-6 shadow-lg">
              <h2 className="text-2xl font-bold text-amber-900 mb-4">
                Significado Cultural
              </h2>
              <p className="text-gray-700 leading-relaxed mb-4">
                Tradicionalmente utilizados em tecidos e cerâmicas, os símbolos Adinkra 
                servem como uma forma de comunicação visual que transcende barreiras 
                linguísticas.
              </p>
              <p className="text-gray-700 leading-relaxed">
                Eles representam uma filosofia de vida baseada na harmonia, 
                sabedoria e respeito pela natureza e ancestralidade.
              </p>
            </div>
          </div>

          <div className="bg-gradient-to-r from-amber-100 to-orange-100 rounded-lg p-8 mb-12">
            <h2 className="text-3xl font-bold text-amber-900 mb-6 text-center">
              Principais Símbolos
            </h2>
            
            <div className="grid md:grid-cols-3 gap-6">
              <div className="text-center bg-white/50 rounded-lg p-4">
                <div className="text-4xl mb-3">⚖️</div>
                <h3 className="font-bold text-amber-800 mb-2">Adinkrahene</h3>
                <p className="text-sm text-gray-700">
                  Símbolo da liderança e carisma
                </p>
              </div>
              
              <div className="text-center bg-white/50 rounded-lg p-4">
                <div className="text-4xl mb-3">🕊️</div>
                <h3 className="font-bold text-amber-800 mb-2">Sankofa</h3>
                <p className="text-sm text-gray-700">
                  Olhar para o passado para construir o futuro
                </p>
              </div>
              
              <div className="text-center bg-white/50 rounded-lg p-4">
                <div className="text-4xl mb-3">💪</div>
                <h3 className="font-bold text-amber-800 mb-2">Dwennimmen</h3>
                <p className="text-sm text-gray-700">
                  Força e humildade
                </p>
              </div>
            </div>
          </div>

          <div className="bg-white/70 backdrop-blur-sm rounded-lg p-8 shadow-lg">
            <h2 className="text-3xl font-bold text-amber-900 mb-6">
              Importância Educativa
            </h2>
            <p className="text-gray-700 leading-relaxed mb-4">
              O estudo dos símbolos Adinkra contribui para uma educação antirracista 
              e decolonial, valorizando conhecimentos ancestrais africanos e 
              promovendo a diversidade cultural.
            </p>
            <p className="text-gray-700 leading-relaxed">
              Através desta plataforma, buscamos democratizar o acesso a essa 
              rica herança cultural, permitindo que pessoas de todas as idades 
              possam aprender e se inspirar com essa sabedoria milenar.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
