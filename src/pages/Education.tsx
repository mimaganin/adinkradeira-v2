
import { ArrowLeft, Book, Users, Heart } from "lucide-react";
import { Link } from "react-router-dom";

const Education = () => {
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
              Educação Antirracista
            </h1>
            <div className="w-24 h-1 bg-gradient-to-r from-amber-600 to-red-600 mx-auto mb-8"></div>
            <p className="text-xl text-gray-700 max-w-2xl mx-auto">
              Promovendo narrativas decoloniais através da sabedoria ancestral africana
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8 mb-12">
            <div className="bg-white/70 backdrop-blur-sm rounded-lg p-6 shadow-lg text-center">
              <Book className="mx-auto text-amber-600 mb-4" size={48} />
              <h3 className="text-xl font-bold text-amber-900 mb-3">
                Conhecimento Ancestral
              </h3>
              <p className="text-gray-700">
                Valorizamos e compartilhamos os saberes tradicionais africanos, 
                reconhecendo sua importância na formação da identidade cultural.
              </p>
            </div>
            
            <div className="bg-white/70 backdrop-blur-sm rounded-lg p-6 shadow-lg text-center">
              <Users className="mx-auto text-amber-600 mb-4" size={48} />
              <h3 className="text-xl font-bold text-amber-900 mb-3">
                Inclusão e Diversidade
              </h3>
              <p className="text-gray-700">
                Promovemos um ambiente educativo inclusivo que celebra a 
                diversidade e combate todas as formas de discriminação racial.
              </p>
            </div>
            
            <div className="bg-white/70 backdrop-blur-sm rounded-lg p-6 shadow-lg text-center">
              <Heart className="mx-auto text-amber-600 mb-4" size={48} />
              <h3 className="text-xl font-bold text-amber-900 mb-3">
                Narrativas Afirmativas
              </h3>
              <p className="text-gray-700">
                Construímos narrativas positivas sobre a cultura africana, 
                fortalecendo a autoestima e o orgulho da identidade negra.
              </p>
            </div>
          </div>

          <div className="bg-gradient-to-r from-amber-100 to-orange-100 rounded-lg p-8 mb-12">
            <h2 className="text-3xl font-bold text-amber-900 mb-6">
              Por que Educação Decolonial?
            </h2>
            <div className="space-y-4 text-gray-700">
              <p>
                A educação decolonial busca desconstruir narrativas eurocêntricas que historicamente 
                marginalizaram conhecimentos e culturas não-europeias, especialmente africanas.
              </p>
              <p>
                Através dos símbolos Adinkra, oferecemos uma perspectiva alternativa que valoriza 
                a filosofia, ética e sabedoria ancestral africana como fonte legítima de conhecimento.
              </p>
              <p>
                Esta abordagem contribui para uma educação mais justa, diversa e representativa, 
                essencial para a construção de uma sociedade verdadeiramente igualitária.
              </p>
            </div>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            <div className="bg-white/70 backdrop-blur-sm rounded-lg p-6 shadow-lg">
              <h3 className="text-2xl font-bold text-amber-900 mb-4">
                Objetivos Pedagógicos
              </h3>
              <ul className="space-y-3 text-gray-700">
                <li className="flex items-start gap-3">
                  <span className="text-amber-600 font-bold">•</span>
                  Valorizar a cultura e história africana
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-amber-600 font-bold">•</span>
                  Promover o respeito à diversidade étnico-racial
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-amber-600 font-bold">•</span>
                  Combater o racismo e a discriminação
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-amber-600 font-bold">•</span>
                  Fortalecer a identidade e autoestima negra
                </li>
              </ul>
            </div>
            
            <div className="bg-white/70 backdrop-blur-sm rounded-lg p-6 shadow-lg">
              <h3 className="text-2xl font-bold text-amber-900 mb-4">
                Metodologia
              </h3>
              <ul className="space-y-3 text-gray-700">
                <li className="flex items-start gap-3">
                  <span className="text-amber-600 font-bold">•</span>
                  Aprendizagem lúdica e interativa
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-amber-600 font-bold">•</span>
                  Narrativas visuais e simbólicas
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-amber-600 font-bold">•</span>
                  Tecnologia educacional acessível
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-amber-600 font-bold">•</span>
                  Reflexão crítica e contextualizada
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Education;
