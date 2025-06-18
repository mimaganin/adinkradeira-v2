
import { ArrowLeft, Mail, MessageSquare, Heart } from "lucide-react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { useState } from "react";
import { toast } from "@/hooks/use-toast";

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: ""
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    toast({
      title: "Mensagem enviada! 📧",
      description: "Obrigado pelo contato! Responderemos em breve.",
    });
    setFormData({ name: "", email: "", message: "" });
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
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
          <div className="text-center mb-12">
            <h1 className="text-4xl md:text-5xl font-bold text-amber-900 mb-6">
              Entre em Contato
            </h1>
            <div className="w-24 h-1 bg-gradient-to-r from-amber-600 to-red-600 mx-auto mb-8"></div>
            <p className="text-xl text-gray-700 max-w-2xl mx-auto">
              Tem dúvidas, sugestões ou quer colaborar com nosso projeto? 
              Adoraríamos ouvir de você!
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            <div className="bg-white/70 backdrop-blur-sm rounded-lg p-8 shadow-lg">
              <h2 className="text-2xl font-bold text-amber-900 mb-6">
                Envie sua Mensagem
              </h2>
              
              <form onSubmit={handleSubmit} className="space-y-6">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-amber-900 mb-2">
                    Nome
                  </label>
                  <Input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleInputChange}
                    required
                    className="border-amber-200 focus:border-amber-400"
                    placeholder="Seu nome completo"
                  />
                </div>
                
                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-amber-900 mb-2">
                    Email
                  </label>
                  <Input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleInputChange}
                    required
                    className="border-amber-200 focus:border-amber-400"
                    placeholder="seu@email.com"
                  />
                </div>
                
                <div>
                  <label htmlFor="message" className="block text-sm font-medium text-amber-900 mb-2">
                    Mensagem
                  </label>
                  <Textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleInputChange}
                    required
                    rows={5}
                    className="border-amber-200 focus:border-amber-400"
                    placeholder="Conte-nos como podemos ajudar ou colaborar..."
                  />
                </div>
                
                <Button 
                  type="submit"
                  className="w-full bg-amber-600 hover:bg-amber-700 text-white"
                >
                  <Mail className="mr-2" size={16} />
                  Enviar Mensagem
                </Button>
              </form>
            </div>
            
            <div className="space-y-6">
              <div className="bg-white/70 backdrop-blur-sm rounded-lg p-6 shadow-lg">
                <div className="flex items-center gap-4 mb-4">
                  <MessageSquare className="text-amber-600" size={32} />
                  <div>
                    <h3 className="text-xl font-bold text-amber-900">
                      Colaborações
                    </h3>
                    <p className="text-gray-700">
                      Procuramos parceiros educacionais
                    </p>
                  </div>
                </div>
                <p className="text-gray-700">
                  Se você é educador, pesquisador ou instituição interessada em 
                  promover educação antirracista, vamos conversar!
                </p>
              </div>
              
              <div className="bg-white/70 backdrop-blur-sm rounded-lg p-6 shadow-lg">
                <div className="flex items-center gap-4 mb-4">
                  <Heart className="text-amber-600" size={32} />
                  <div>
                    <h3 className="text-xl font-bold text-amber-900">
                      Apoie o Projeto
                    </h3>
                    <p className="text-gray-700">
                      Ajude-nos a crescer e impactar mais pessoas
                    </p>
                  </div>
                </div>
                <p className="text-gray-700">
                  Sua contribuição, seja através de feedback, divulgação ou 
                  colaboração técnica, é fundamental para nosso crescimento.
                </p>
              </div>
              
              <div className="bg-gradient-to-r from-amber-100 to-orange-100 rounded-lg p-6">
                <h3 className="text-xl font-bold text-amber-900 mb-3">
                  Nossa Missão
                </h3>
                <p className="text-gray-700">
                  Democratizar o acesso à sabedoria ancestral africana através 
                  de tecnologia educacional, promovendo narrativas decoloniais 
                  e combatendo o racismo estrutural.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
