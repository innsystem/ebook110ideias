
import React from 'react';

const AuthorSection = () => {
  return (
    <section className="bg-white py-16 px-8">
      <div className="max-w-6xl mx-auto">
        <div className="flex items-center justify-between">
          <div className="w-1/2 pr-8">
            <div className="bg-gray-900 rounded-3xl aspect-square">
              {/* Placeholder para a imagem do autor */}
            </div>
          </div>
          
          <div className="w-1/2 pl-8">
            <div className="bg-blue-600 rounded-2xl p-8 text-white">
              <h2 className="text-3xl font-bold mb-6">Quem preparou o Ebook?</h2>
              
              <p className="text-lg mb-4 leading-relaxed">
                Por trás desse eBook está o Murilo, um profissional com mais de 10 anos de experiência no universo da 
                criação de conteúdo.
              </p>
              
              <p className="text-lg mb-4 leading-relaxed">
                Ele já ajudou marcas, influenciadores e empreendedores a se destacarem nas redes com 
                estratégias criativas, práticas e que realmente funcionam. Ao longo da sua trajetória, Murilo testou de 
                tudo — acertou, errou, aprendeu — e transformou esse conhecimento em dicas simples e aplicáveis.
              </p>
              
              <p className="text-lg leading-relaxed">
                Tudo que você encontra aqui foi validado com clientes reais e pensado pra facilitar a vida de quem 
                cria conteúdo todos os dias.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AuthorSection;
