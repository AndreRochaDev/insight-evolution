import React, { useState } from 'react';
import { ChevronLeft, ChevronRight, Star } from 'lucide-react';

interface Testimonial {
  id: number;
  name: string;
  company: string;
  role: string;
  text: string;
  stars: number;
  image: string;
  type: 'website' | 'software';
}

const testimonials: Testimonial[] = [
  {
    id: 1,
    name: 'Maria Silva',
    company: 'Café Avenida',
    role: 'Proprietária',
    text: 'O website que criaram para o meu café superou todas as expectativas. Entrega rápida, design moderno e ótimo atendimento. Recomendo!',
    stars: 5,
    image: 'https://images.pexels.com/photos/1239291/pexels-photo-1239291.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
    type: 'website'
  },
  {
    id: 2,
    name: 'João Ferreira',
    company: 'Clínica Dental Sorrisos',
    role: 'Diretor',
    text: 'A consultoria informática prestada pela Insight Evolution resolveu completamente os problemas de gestão de pacientes que tínhamos. O software personalizado que desenvolveram revolucionou o nosso atendimento.',
    stars: 5,
    image: 'https://images.pexels.com/photos/220453/pexels-photo-220453.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
    type: 'software'
  },
  {
    id: 3,
    name: 'Ana Martins',
    company: 'Boutique Elegância',
    role: 'Gerente',
    text: 'O nosso website e-commerce foi entregue num prazo recorde e com um design fantástico. As vendas online aumentaram 30% desde que lançámos!',
    stars: 5,
    image: 'https://images.pexels.com/photos/774909/pexels-photo-774909.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
    type: 'website'
  },
  {
    id: 4,
    name: 'Carlos Santos',
    company: 'Logística Express',
    role: 'Diretor de Operações',
    text: 'A auditoria de TI e o planeamento de infraestrutura que a Insight Evolution realizou foi fundamental para modernizarmos os nossos sistemas. Profissionalismo de alto nível.',
    stars: 4,
    image: 'https://images.pexels.com/photos/614810/pexels-photo-614810.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
    type: 'software'
  }
];

const Testimonials: React.FC = () => {
  const [activeIndex, setActiveIndex] = useState(0);
  
  const nextTestimonial = () => {
    setActiveIndex((prevIndex) => (prevIndex + 1) % testimonials.length);
  };
  
  const prevTestimonial = () => {
    setActiveIndex((prevIndex) => (prevIndex - 1 + testimonials.length) % testimonials.length);
  };

  return (
    <section id="testimonials" className="py-16 md:py-24 bg-white overflow-hidden">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">O Que Dizem Os Nossos Clientes</h2>
          <p className="text-lg text-gray-700 max-w-3xl mx-auto">
            Conheça as experiências dos nossos clientes com os nossos serviços de criação de websites e consultoria informática.
          </p>
        </div>

        <div className="max-w-6xl mx-auto relative">
          {/* Testimonial cards */}
          <div className="flex justify-center">
            <div className="max-w-2xl w-full">
              <div className="bg-gray-50 rounded-xl shadow-lg p-6 md:p-8 relative">
                <div className="absolute -top-4 -left-4 w-12 h-12 bg-primary-100 rounded-full flex items-center justify-center">
                  <span className="text-primary-600">
                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                      <path d="M3 21c3 0 7-1 7-8V5c0-1.25-.756-2.017-2-2H4c-1.25 0-2 .75-2 1.972V11c0 1.25.75 2 2 2 1 0 1 0 1 1v1c0 1-1 2-2 2s-1 .008-1 1.031V20c0 1 0 1 1 1z"></path>
                      <path d="M15 21c3 0 7-1 7-8V5c0-1.25-.757-2.017-2-2h-4c-1.25 0-2 .75-2 1.972V11c0 1.25.75 2 2 2h.75c0 2.25.25 4-2.75 4v3c0 1 0 1 1 1z"></path>
                    </svg>
                  </span>
                </div>
                
                <div className="flex items-center mb-4">
                  <div className="flex space-x-1 text-primary-500">
                    {[...Array(5)].map((_, i) => (
                      <Star
                        key={i}
                        size={16}
                        fill={i < testimonials[activeIndex].stars ? 'currentColor' : 'none'}
                      />
                    ))}
                  </div>
                  <span className="ml-2 text-sm font-medium text-gray-500">
                    {testimonials[activeIndex].type === 'website' ? 'Website' : 'Software & Consultoria'}
                  </span>
                </div>
                
                <p className="text-gray-700 italic mb-6 text-lg">"{testimonials[activeIndex].text}"</p>
                
                <div className="flex items-center">
                  <div className="w-12 h-12 rounded-full overflow-hidden mr-4">
                    <img 
                      src={testimonials[activeIndex].image} 
                      alt={testimonials[activeIndex].name}
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <div>
                    <h4 className="font-medium text-gray-900">{testimonials[activeIndex].name}</h4>
                    <p className="text-sm text-gray-600">{testimonials[activeIndex].role}, {testimonials[activeIndex].company}</p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Navigation controls */}
          <div className="flex justify-center mt-8 space-x-2">
            <button
              onClick={prevTestimonial}
              className="p-2 rounded-full bg-gray-100 hover:bg-primary-100 text-gray-600 hover:text-primary-600 transition-colors focus:outline-none"
              aria-label="Anterior testemunho"
            >
              <ChevronLeft size={20} />
            </button>
            <div className="flex space-x-2 items-center">
              {testimonials.map((_, index) => (
                <button
                  key={index}
                  onClick={() => setActiveIndex(index)}
                  className={`w-2.5 h-2.5 rounded-full transition-all ${
                    index === activeIndex ? 'bg-primary-600 w-6' : 'bg-gray-300 hover:bg-gray-400'
                  }`}
                  aria-label={`Ir para testemunho ${index + 1}`}
                ></button>
              ))}
            </div>
            <button
              onClick={nextTestimonial}
              className="p-2 rounded-full bg-gray-100 hover:bg-primary-100 text-gray-600 hover:text-primary-600 transition-colors focus:outline-none"
              aria-label="Próximo testemunho"
            >
              <ChevronRight size={20} />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;