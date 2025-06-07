
import React from 'react';

const ContentSection = () => {
  const topics = [
    {
      title: "Planejamento e Estratégia",
      description: "Aprenda como definir objetivos, usar pilares de conteúdo, calendário editorial e analisar dados para crescer com direção."
    },
    {
      title: "Geração de Ideias",
      description: "Use IA, perguntas do público, tendências e storytelling para gerar conteúdo relevante e constante."
    },
    {
      title: "Produção de Conteúdo",
      description: "Grave em lote com bom áudio e luz, use roteiro e formatos únicos para manter qualidade e frequência."
    },
    {
      title: "Edição e Design",
      description: "Aplique contraste, templates, hierarquia visual e uma paleta fixa para criar posts mais profissionais."
    },
    {
      title: "Copywriting e Legenda",
      description: "Crie textos persuasivos, com chamadas claras, gatilhos mentais e estrutura que prenda a atenção até o final."
    },
    {
      title: "Ferramentas e IA",
      description: "Automatize tarefas com Notion, Zapier e IA como ChatGPT, Canva e Grammarly para ganhar tempo e foco."
    }
  ];

  return (
    <section className="bg-gray-100 py-16 px-8">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-4xl font-bold text-center text-blue-600 mb-12">
          O que você encontrará neste eBook:
        </h2>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {topics.map((topic, index) => (
            <div key={index} className="bg-white rounded-lg p-6 shadow-sm border border-gray-200">
              <h3 className="text-xl font-bold text-blue-600 mb-4">{topic.title}</h3>
              <p className="text-gray-600 leading-relaxed">{topic.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ContentSection;
