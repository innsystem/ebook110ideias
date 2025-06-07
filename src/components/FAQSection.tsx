
import React, { useState } from 'react';
import { ChevronDown, ChevronUp } from 'lucide-react';
import { Button } from "@/components/ui/button";

const FAQSection = () => {
  const [openFAQ, setOpenFAQ] = useState(0);

  const faqs = [
    {
      question: "Essas ideias servem para o meu nicho?",
      answer: "Sim! As 110 dicas foram pensadas para funcionar em qualquer nicho, com sugestões adaptáveis para quem trabalha com moda, estética, arquitetura, marketing, educação, saúde e muito mais."
    },
    {
      question: "O conteúdo é prático ou só teoria?",
      answer: "O conteúdo é totalmente prático com estratégias aplicáveis que você pode usar imediatamente."
    }
  ];

  return (
    <section className="bg-gradient-dark py-16 px-8 text-white">
      <div className="max-w-4xl mx-auto">
        <div className="bg-blue-600 rounded-2xl p-8 mb-8">
          <h2 className="text-3xl font-bold text-center mb-8">
            Aprenda a reaproveitar conteúdos!<br />
            Use o poder da IA a seu favor.
          </h2>
          
          <div className="text-center">
            <Button className="bg-gray-900 hover:bg-gray-800 text-white px-8 py-3 rounded-lg">
              Comprar ebook
            </Button>
          </div>
        </div>
        
        <div className="bg-gray-900 rounded-2xl p-8">
          <h3 className="text-2xl font-bold text-center mb-8">Perguntas Frequentes</h3>
          
          <div className="space-y-4">
            {faqs.map((faq, index) => (
              <div key={index} className="border border-gray-700 rounded-lg">
                <button
                  className="w-full flex items-center justify-between p-4 text-left"
                  onClick={() => setOpenFAQ(openFAQ === index ? -1 : index)}
                >
                  <span className="font-semibold">{faq.question}</span>
                  {openFAQ === index ? (
                    <ChevronUp className="w-5 h-5" />
                  ) : (
                    <ChevronDown className="w-5 h-5" />
                  )}
                </button>
                {openFAQ === index && (
                  <div className="px-4 pb-4">
                    <p className="text-gray-300">{faq.answer}</p>
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default FAQSection;
