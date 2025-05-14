import React from 'react';
import { ArrowRight } from 'lucide-react';

const Hero: React.FC = () => {
  return (
    <section className="relative pt-20 lg:pt-28 pb-16 md:pb-24">
      {/* Background gradient */}
      <div className="absolute inset-0 bg-gradient-to-b from-blue-50 to-white z-0"></div>
      
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 leading-tight mb-6">
            <span className="block mb-2 text-2xl sm:text-3xl md:text-4xl lg:text-5xl">Soluções Tecnológicas</span>
            <span className="text-primary-600">Profissionais</span>{' '}
            <span className="whitespace-nowrap">e <span className="text-primary-600">Inovadoras</span></span>
          </h1>
          <p className="text-lg md:text-xl text-gray-700 mb-8 leading-relaxed">
            Websites profissionais a preços competitivos na Península de Setúbal. 
            Consultoria informática e software à medida no Barreiro.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a 
              href="#services"
              className="btn-primary flex items-center justify-center gap-2"
            >
              Explorar Serviços <ArrowRight size={18} />
            </a>
            <a 
              href="#contact"
              className="btn-secondary flex items-center justify-center gap-2"
            >
              Contacte-nos
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;