
import React from 'react';
import { Button } from "@/components/ui/button";
import { Check, Shield } from 'lucide-react';

const PricingSection = () => {
  const benefits = [
    "Resolve a falta de ideias para postagens",
    "Ajuda em todas as etapas: do planejamento à monetização",
    "Economia de tempo na criação de conteúdo",
    "Conteúdo criado e validado por especialistas"
  ];

  return (
    <section className="bg-gradient-dark py-16 px-8 text-white">
      <div className="max-w-6xl mx-auto">
        <div className="flex items-center justify-between">
          <div className="w-1/2 pr-8">
            <div className="bg-gradient-cyan rounded-3xl aspect-[3/4] max-w-md">
              {/* Placeholder para a imagem do ebook */}
            </div>
          </div>
          
          <div className="w-1/2 pl-8">
            <div className="space-y-6">
              {benefits.map((benefit, index) => (
                <div key={index} className="flex items-start space-x-4">
                  <Check className="w-6 h-6 text-green-400 mt-1 flex-shrink-0" />
                  <span className="text-lg">{benefit}</span>
                </div>
              ))}
            </div>
            
            <div className="mt-8 text-center">
              <p className="text-gray-300 mb-2">De 69,90 por apenas</p>
              <div className="text-5xl font-bold mb-2">R$39,90</div>
              <p className="text-gray-300 mb-6">ou até 4x R$10,00</p>
              
              <Button className="bg-blue-600 hover:bg-blue-700 text-white px-12 py-4 text-lg rounded-lg w-full">
                Quero comprar!
              </Button>
            </div>
          </div>
        </div>
        
        <div className="flex items-center justify-center mt-12 space-x-4">
          <div className="bg-blue-600 rounded-full p-3">
            <Shield className="w-8 h-8 text-white" />
          </div>
          <div>
            <h3 className="text-xl font-bold text-blue-400">Garantia de 7 dias</h3>
            <p className="text-gray-300">
              Se mesmo com 110 ideias você continuar travando para criar conteúdo, a gente devolve seu 
              dinheiro. Simples assim, sem perguntas.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default PricingSection;
