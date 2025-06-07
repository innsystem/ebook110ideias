
import React from 'react';
import { Button } from "@/components/ui/button";

const Navigation = () => {
  return (
    <nav className="flex items-center justify-between px-8 py-6 text-white">
      <div className="flex space-x-8">
        <a href="#conteudo" className="hover:text-blue-200 transition-colors">
          Conteúdo
        </a>
        <a href="#para-quem" className="hover:text-blue-200 transition-colors">
          Para Quem
        </a>
        <a href="#autor" className="hover:text-blue-200 transition-colors">
          Autor
        </a>
        <a href="#depoimentos" className="hover:text-blue-200 transition-colors">
          Depoimentos
        </a>
      </div>
      <Button className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-2 rounded-lg">
        Adquirir o Ebook
      </Button>
    </nav>
  );
};

export default Navigation;
