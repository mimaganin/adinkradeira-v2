import { ArrowLeft, RotateCcw, Download } from "lucide-react";
import { Link } from "react-router-dom";
import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { toast } from "@/hooks/use-toast";
import JSZip from "jszip";
import "adinkra-icons/css/icons.css";

// Arrays de cartas disponíveis
const adinkras = [
  "adinkra1.png",
  "adinkra2.png", 
  "adinkra3.png",
  "adinkra4.png",
  "adinkra5.png",
  "adinkra6.png",
  "adinkra7.png",
  "adinkra8.png",
  "adinkra9.png",
  "adinkra10.png",
  "adinkra12.png",
];

const scenarios = [
  "scenario1.png",
  "scenario2.png",
  "scenario3.png",
  "scenario4.png",
  "scenario5.png",
  "scenario6.png"
];

const characters = [
  "character1.png",
  "character2.png",
  "character3.png",
  "character4.png",
  "character5.png",
  "character6.png"
];

const missions = [
  "mission1.png",
  "mission2.png",
  "mission3.png",
  "mission4.png",
  "mission5.png",
  "mission6.png"
];

interface CardPile {
  id: string;
  title: string;
  backImage: string;
  cards: string[];
  currentCard: string | null;
  isFlipped: boolean;
}

const Game = () => {
  const [cardPiles, setCardPiles] = useState<CardPile[]>([
    {
      id: 'symbols-pile',
      title: 'Símbolos Adinkra',
      backImage: '/images/adinkra-back.png',
      cards: adinkras,
      currentCard: null,
      isFlipped: false
    },
    {
      id: 'scenarios-pile',
      title: 'Cenários',
      backImage: '/images/scenario-back.png',
      cards: scenarios,
      currentCard: null,
      isFlipped: false
    },
    {
      id: 'characters-pile',
      title: 'Personagens',
      backImage: '/images/character-back.png',
      cards: characters,
      currentCard: null,
      isFlipped: false
    },
    {
      id: 'missions-pile',
      title: 'Missões',
      backImage: '/images/mission-back.png',
      cards: missions,
      currentCard: null,
      isFlipped: false
    }
  ]);

  const getRandomItem = (array: string[]) => {
    const randomIndex = Math.floor(Math.random() * array.length);
    return array[randomIndex];
  };

  const flipCard = (pileId: string) => {
    console.log('Clicou na carta:', pileId);
    
    setCardPiles(prevPiles => 
      prevPiles.map(pile => {
        if (pile.id === pileId) {
          const newCard = getRandomItem(pile.cards);
          console.log('Carta sorteada:', newCard, 'Estava virada:', pile.isFlipped);
          
          if (!pile.isFlipped) {
            // Primeira vez: vira a carta e mostra nova carta
            return { ...pile, isFlipped: true, currentCard: newCard };
          } else {
            // Já está virada: apenas troca a carta, mantém virada
            return { ...pile, currentCard: newCard };
          }
        }
        return pile;
      })
    );

    toast({
      title: "Carta revelada! 🎴",
      description: "Use as cartas reveladas para criar sua narrativa única!",
    });
  };

  const resetAllCards = () => {
    setCardPiles(prevPiles => 
      prevPiles.map(pile => ({
        ...pile,
        isFlipped: false,
        currentCard: null
      }))
    );

    toast({
      title: "Cartas resetadas! 🔄",
      description: "Todas as cartas foram viradas para baixo. Comece uma nova narrativa!",
    });
  };

  const handleDownloadCards = async () => {
  toast({
    title: "Gerando arquivo ZIP... ⏳",
    description: "Aguarde enquanto preparamos as cartas para download.",
  });

  const zip = new JSZip();
  const imageFolder = zip.folder("cartas");

  const allImages = [
    ...adinkras,
    ...scenarios,
    ...characters,
    ...missions,
    "adinkra-back.png",
    "scenario-back.png",
    "character-back.png",
    "mission-back.png"
  ];

  try {
    await Promise.all(
      allImages.map(async (filename) => {
        const response = await fetch(`/images/${filename}`);
        const blob = await response.blob();
        imageFolder?.file(filename, blob);
      })
    );

    const content = await zip.generateAsync({ type: "blob" });

    const link = document.createElement("a");
    link.href = URL.createObjectURL(content);
    link.download = "cartas-adinkradeira.zip";
    link.click();

    toast({
      title: "Download iniciado! 📥",
      description: "Você está baixando as cartas para imprimir e jogar fisicamente!",
    });
  } catch (error) {
    toast({
      title: "Erro ao gerar o ZIP ❌",
      description: "Verifique sua conexão e tente novamente.",
    });
    console.error("Erro ao gerar zip:", error);
  }
};

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

        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-8">
            <h1 className="text-4xl md:text-5xl font-bold text-amber-900 mb-4">
              Adinkradeira - Jogo de Narrativas
            </h1>
            <p className="text-lg text-gray-700 mb-6">
              Crie narrativas decoloniais e antirracistas através dos símbolos Adinkra! 
              Clique nas cartas para revelar elementos da sua história.
            </p>
            <div className="w-24 h-1 bg-gradient-to-r from-amber-600 to-red-600 mx-auto"></div>
          </div>

          <div className="bg-white/70 backdrop-blur-sm rounded-lg p-6 mb-8 shadow-lg">
            <div className="flex flex-wrap justify-between items-center gap-3">
              <div className="text-amber-900">
                <p className="font-semibold">
                  Jogue online ou imprima as cartas para jogar fisicamente!
                </p>
              </div>
              
              <div className="flex gap-3">
                <Button 
                  onClick={handleDownloadCards}
                  className="bg-green-600 hover:bg-green-700 text-white"
                >
                  <Download size={16} className="mr-2" />
                  Baixar Cartas
                </Button>
                
                <Button 
                  onClick={resetAllCards}
                  className="bg-amber-600 hover:bg-amber-700 text-white"
                >
                  <RotateCcw size={16} className="mr-2" />
                  Resetar Cartas
                </Button>
              </div>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
            {cardPiles.map((pile) => (
              <div key={pile.id} className="text-center">
                <h3 className="text-xl font-bold text-amber-900 mb-4">{pile.title}</h3>
                <div 
                  className="relative w-full aspect-[3/4] max-w-xs mx-auto cursor-pointer transform transition-all duration-300 hover:scale-105"
                  onClick={() => flipCard(pile.id)}
                >
                  <div className="card-flip-container">
                    <div className={`card-inner ${pile.isFlipped ? 'is-flipped' : ''}`}>
                      {/* Verso da carta */}
                      <div className="card-face card-back">
                        <img 
                          src={pile.backImage} 
                          alt={`${pile.title} - Verso`}
                          className="w-full h-full object-cover rounded-lg shadow-lg"
                          onError={(e) => {
                            (e.target as HTMLImageElement).src = `https://images.unsplash.com/photo-1472396961693-142e6e269027?w=400&h=600&fit=crop`;
                          }}
                        />
                      </div>
                      {/* Frente da carta */}
                      <div className="card-face card-front">
                        {pile.currentCard && (
                          <img 
                            src={`/images/${pile.currentCard}`}
                            alt={`${pile.title} - Carta revelada`}
                            className="w-full h-full object-cover rounded-lg shadow-lg"
                            onError={(e) => {
                              (e.target as HTMLImageElement).src = `https://images.unsplash.com/photo-1472396961693-142e6e269027?w=400&h=600&fit=crop`;
                            }}
                          />
                        )}
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            <div className="bg-white/70 backdrop-blur-sm rounded-lg p-8 shadow-lg">
              <h2 className="text-2xl font-bold text-amber-900 mb-6">
                Como Jogar
              </h2>
              <div className="space-y-4 text-gray-700">
                <div className="flex items-start gap-3">
                  <div className="text-2xl">1️⃣</div>
                  <p><strong>Clique nas cartas</strong> para revelar elementos da sua narrativa</p>
                </div>
                <div className="flex items-start gap-3">
                  <div className="text-2xl">2️⃣</div>
                  <p><strong>Combine os elementos</strong> revelados para criar uma história única</p>
                </div>
                <div className="flex items-start gap-3">
                  <div className="text-2xl">3️⃣</div>
                  <p><strong>Explore narrativas</strong> decoloniais e antirracistas</p>
                </div>
                <div className="flex items-start gap-3">
                  <div className="text-2xl">4️⃣</div>
                  <p><strong>Compartilhe</strong> sua criação com outros jogadores</p>
                </div>
              </div>
            </div>

            <div className="bg-white/70 backdrop-blur-sm rounded-lg p-8 shadow-lg">
              <h2 className="text-2xl font-bold text-amber-900 mb-6">
                Elementos do Jogo
              </h2>
              <div className="space-y-3 text-gray-700">
                <div className="flex items-center gap-3">
                  <i className="adk text-4xl adk-sankofa-two"></i>
                  <div>
                    <strong>Símbolos Adinkra:</strong> Sabedoria ancestral africana
                  </div>
                </div>
                <div className="flex items-center gap-3">
                  <div className="text-2xl">🌍</div>
                  <div>
                    <strong>Cenários:</strong> Ambientes diversos para suas histórias
                  </div>
                </div>
                <div className="flex items-center gap-3">
                  <div className="text-2xl">👥</div>
                  <div>
                    <strong>Personagens:</strong> Protagonistas únicos e diversos
                  </div>
                </div>
                <div className="flex items-center gap-3">
                  <div className="text-2xl">🎯</div>
                  <div>
                    <strong>Missões:</strong> Objetivos e desafios para suas narrativas
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <style>{`
        .card-flip-container {
          perspective: 1000px;
          width: 100%;
          height: 100%;
        }

        .card-inner {
          position: relative;
          width: 100%;
          height: 100%;
          transform-style: preserve-3d;
          transition: transform 0.6s ease-in-out;
        }

        .card-inner.is-flipped {
          transform: rotateY(180deg);
        }

        .card-face {
          position: absolute;
          width: 100%;
          height: 100%;
          backface-visibility: hidden;
          border-radius: 0.5rem;
        }

        .card-back {
          transform: rotateY(0deg);
        }

        .card-front {
          transform: rotateY(180deg);
        }
      `}</style>
    </div>
  );
};

export default Game;
