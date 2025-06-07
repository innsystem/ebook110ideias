
import React from 'react';
import { Button } from "@/components/ui/button";

const HeroSection = () => {
  return (
    <section className="flex items-center justify-between px-8 py-16 text-white min-h-[600px]">
      <div className="w-1/2 pr-8">
        <div className="bg-blue-600 rounded-3xl aspect-square max-w-md mx-auto relative overflow-hidden">
          <img 
            src="/ebook.webp" 
            alt="110 Ideias Infalíveis para Criar Conteúdo sem Travar" 
            className="w-full h-full object-cover rounded-3xl"
          />
        </div>
      </div>
      
      <div className="w-1/2 pl-8">
        <p className="text-gray-300 mb-4">Não dependa de ninguém!</p>
        <h1 className="text-5xl font-bold mb-6 leading-tight">
          110 ideias para você criar seu conteúdo sozinho
        </h1>
        <p className="text-xl text-gray-300 mb-8 leading-relaxed">
          Estratégias práticas para planejar, criar e engajar seu público com facilidade e 
          consistência sem depender de ninguém.
        </p>
        <Button className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-4 text-lg rounded-lg">
          Quero criar agora!
        </Button>
      </div>
    </section>
  );
};

export default HeroSection;
