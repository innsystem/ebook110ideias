
import React from 'react';

const TestimonialsSection = () => {
  const testimonials = [
    {
      name: "Camila Torres Nascimento",
      text: "Confesso que comprei achando que ia ser mais do mesmo, mas me surpreendi real! As sacadas que tem ali encurtaram muito meu processo. Tô até curtindo de novo criar conteúdo do meu espaço, coisa que antes era um peso pra mim.",
      avatar: "/placeholder.svg"
    },
    {
      name: "Rafa Britto",
      text: "Tava quebrando a cabeça pra organizar o conteúdo do consultório e agora tudo flui. Ficou mais claro, mais rápido e até meus pacientes entenderam melhor o que eu faço.",
      avatar: "/placeholder.svg"
    },
    {
      name: "Bruno Sales Andrade",
      text: "Com esse ebook, aprendi a fazer minhas próprias artes rapidinho, do meu jeito e sem gastar com ninguém.",
      avatar: "/placeholder.svg"
    }
  ];

  return (
    <section className="bg-gray-100 py-16 px-8">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-3xl font-bold text-center text-blue-600 mb-12">
          Veja algumas de nossas avaliações:
        </h2>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <div key={index} className="bg-white rounded-lg p-6 shadow-sm">
              <div className="flex items-center mb-4">
                <div className="w-12 h-12 bg-gray-300 rounded-full mr-4"></div>
                <h4 className="font-semibold text-gray-800">{testimonial.name}</h4>
              </div>
              <p className="text-gray-600 italic leading-relaxed">"{testimonial.text}"</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;
