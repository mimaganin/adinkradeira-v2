
import { ArrowLeft, RotateCcw, Trophy } from "lucide-react";
import { Link } from "react-router-dom";
import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { toast } from "@/hooks/use-toast";

interface AdinkraCard {
  id: number;
  symbol: string;
  name: string;
  meaning: string;
  description: string;
}

const adinkraCards: AdinkraCard[] = [
  {
    id: 1,
    symbol: "⚖️",
    name: "Adinkrahene",
    meaning: "Liderança",
    description: "Símbolo da liderança, carisma e grandeza"
  },
  {
    id: 2,
    symbol: "🕊️",
    name: "Sankofa",
    meaning: "Voltar e buscar",
    description: "Olhar para o passado para construir o futuro"
  },
  {
    id: 3,
    symbol: "💪",
    name: "Dwennimmen",
    meaning: "Força",
    description: "Força e humildade"
  },
  {
    id: 4,
    symbol: "🌟",
    name: "Nkyinkyim",
    meaning: "Adaptabilidade",
    description: "Iniciativa, dinamismo e versatilidade"
  },
  {
    id: 5,
    symbol: "🔄",
    name: "Mpatapo",
    meaning: "Reconciliação",
    description: "Símbolo da reconciliação e pacificação"
  },
  {
    id: 6,
    symbol: "🛡️",
    name: "Eban",
    meaning: "Proteção",
    description: "Símbolo do amor, segurança e proteção"
  }
];

const Game = () => {
  const [cards, setCards] = useState<(AdinkraCard & { isFlipped: boolean; isMatched: boolean })[]>([]);
  const [flippedCards, setFlippedCards] = useState<number[]>([]);
  const [score, setScore] = useState(0);
  const [moves, setMoves] = useState(0);
  const [gameComplete, setGameComplete] = useState(false);

  useEffect(() => {
    initializeGame();
  }, []);

  const initializeGame = () => {
    const duplicatedCards = [...adinkraCards, ...adinkraCards]
      .map(card => ({ ...card, isFlipped: false, isMatched: false }))
      .sort(() => Math.random() - 0.5);
    
    setCards(duplicatedCards);
    setFlippedCards([]);
    setScore(0);
    setMoves(0);
    setGameComplete(false);
  };

  const handleCardClick = (index: number) => {
    if (flippedCards.length === 2 || cards[index].isFlipped || cards[index].isMatched) {
      return;
    }

    const newCards = [...cards];
    newCards[index].isFlipped = true;
    setCards(newCards);

    const newFlippedCards = [...flippedCards, index];
    setFlippedCards(newFlippedCards);

    if (newFlippedCards.length === 2) {
      setMoves(moves + 1);
      
      setTimeout(() => {
        checkMatch(newFlippedCards);
      }, 1000);
    }
  };

  const checkMatch = (flippedIndices: number[]) => {
    const [first, second] = flippedIndices;
    const newCards = [...cards];

    if (newCards[first].id === newCards[second].id) {
      newCards[first].isMatched = true;
      newCards[second].isMatched = true;
      setScore(score + 10);
      
      toast({
        title: "Parabéns! 🎉",
        description: `Você encontrou o par: ${newCards[first].name}`,
      });

      const allMatched = newCards.every(card => card.isMatched);
      if (allMatched) {
        setGameComplete(true);
        toast({
          title: "Jogo Completo! 🏆",
          description: `Parabéns! Você completou o jogo em ${moves + 1} movimentos!`,
        });
      }
    } else {
      newCards[first].isFlipped = false;
      newCards[second].isFlipped = false;
    }

    setCards(newCards);
    setFlippedCards([]);
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

        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-8">
            <h1 className="text-4xl md:text-5xl font-bold text-amber-900 mb-4">
              Jogo da Memória Adinkra
            </h1>
            <p className="text-lg text-gray-700 mb-6">
              Encontre os pares de símbolos Adinkra e aprenda seus significados!
            </p>
            <div className="w-24 h-1 bg-gradient-to-r from-amber-600 to-red-600 mx-auto"></div>
          </div>

          <div className="bg-white/70 backdrop-blur-sm rounded-lg p-6 mb-8 shadow-lg">
            <div className="flex flex-wrap justify-between items-center gap-4">
              <div className="flex gap-6">
                <div className="flex items-center gap-2">
                  <Trophy className="text-amber-600" size={20} />
                  <span className="font-semibold text-amber-900">Pontos: {score}</span>
                </div>
                <div className="font-semibold text-amber-900">
                  Movimentos: {moves}
                </div>
              </div>
              
              <Button 
                onClick={initializeGame}
                className="bg-amber-600 hover:bg-amber-700 text-white"
              >
                <RotateCcw size={16} className="mr-2" />
                Reiniciar
              </Button>
            </div>
          </div>

          {gameComplete && (
            <div className="bg-gradient-to-r from-green-100 to-emerald-100 border border-green-300 rounded-lg p-6 mb-8 text-center">
              <h2 className="text-2xl font-bold text-green-800 mb-2">
                🎉 Parabéns! Você completou o jogo!
              </h2>
              <p className="text-green-700">
                Finalizado em {moves} movimentos com {score} pontos!
              </p>
            </div>
          )}

          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {cards.map((card, index) => (
              <div
                key={index}
                onClick={() => handleCardClick(index)}
                className={`
                  aspect-square bg-white rounded-lg shadow-lg cursor-pointer transition-all duration-300 transform hover:scale-105
                  ${card.isFlipped || card.isMatched ? 'bg-gradient-to-br from-amber-100 to-orange-100' : 'bg-gradient-to-br from-amber-600 to-red-600'}
                  ${card.isMatched ? 'opacity-75 cursor-default' : ''}
                `}
              >
                <div className="w-full h-full flex flex-col items-center justify-center p-4">
                  {card.isFlipped || card.isMatched ? (
                    <>
                      <div className="text-4xl mb-2">{card.symbol}</div>
                      <div className="text-center">
                        <div className="font-bold text-amber-900 text-sm">{card.name}</div>
                        <div className="text-xs text-gray-600 mt-1">{card.meaning}</div>
                      </div>
                    </>
                  ) : (
                    <div className="text-6xl text-white/50">?</div>
                  )}
                </div>
              </div>
            ))}
          </div>

          <div className="mt-12 bg-white/70 backdrop-blur-sm rounded-lg p-8 shadow-lg">
            <h2 className="text-2xl font-bold text-amber-900 mb-6 text-center">
              Como Jogar
            </h2>
            <div className="grid md:grid-cols-3 gap-6 text-center">
              <div>
                <div className="text-3xl mb-3">🎯</div>
                <h3 className="font-bold text-amber-800 mb-2">1. Objetivo</h3>
                <p className="text-sm text-gray-700">
                  Encontre todos os pares de símbolos Adinkra
                </p>
              </div>
              <div>
                <div className="text-3xl mb-3">👆</div>
                <h3 className="font-bold text-amber-800 mb-2">2. Como Jogar</h3>
                <p className="text-sm text-gray-700">
                  Clique em duas cartas para revelá-las
                </p>
              </div>
              <div>
                <div className="text-3xl mb-3">🏆</div>
                <h3 className="font-bold text-amber-800 mb-2">3. Pontuação</h3>
                <p className="text-sm text-gray-700">
                  Ganhe pontos por cada par encontrado
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Game;
