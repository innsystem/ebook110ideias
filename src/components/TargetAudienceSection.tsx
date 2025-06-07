
import React from 'react';
import { Check } from 'lucide-react';

const TargetAudienceSection = () => {
  const audience = [
    {
      title: "Criadores de conteúdo",
      description: "iniciantes ou experientes que querem manter constância e criatividade sem travar."
    },
    {
      title: "Profissionais de marketing digital",
      description: "que precisam alimentar redes sociais com conteúdo relevante e variado."
    },
    {
      title: "Empreendedores e infoprodutores",
      description: "que desejam atrair e engajar seu público com conteúdo estratégico."
    },
    {
      title: "Social media e freelancers",
      description: "que trabalham com gestão de conteúdo para marcas ou clientes."
    },
    {
      title: "Influenciadores e especialistas",
      description: "que buscam ideias práticas para fortalecer sua presença digital."
    },
    {
      title: "Quem já tentou de tudo,",
      description: "mas sente que falta clareza ou inspiração na hora de planejar e postar."
    }
  ];

  return (
    <section 
      className="relative py-16 px-8 text-white min-h-[600px] bg-cover bg-center bg-fixed"
      style={{
        backgroundImage: "url('/background.webp')",
        backgroundColor: '#1a1a2e'
      }}
    >
      {/* Overlay escuro para melhor legibilidade */}
      <div className="absolute inset-0 bg-black bg-opacity-50"></div>
      
      <div className="relative z-10 max-w-6xl mx-auto flex items-center min-h-[500px]">
        {/* Espaço para a pessoa na imagem de fundo */}
        <div className="w-1/2"></div>
        
        {/* Card de conteúdo no lado direito */}
        <div className="w-1/2 flex justify-end">
          <div className="bg-blue-600 rounded-2xl p-8 max-w-lg">
            <h2 className="text-3xl font-bold mb-8">
              Esse Ebook é para você?
            </h2>
            
            <div className="space-y-6">
              {audience.map((item, index) => (
                <div key={index} className="flex items-start space-x-4">
                  <Check className="w-6 h-6 text-green-400 mt-1 flex-shrink-0" />
                  <div>
                    <span className="font-semibold">{item.title}</span>
                    <span className="ml-1">{item.description}</span>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TargetAudienceSection;
