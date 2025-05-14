import React from 'react';
import { Globe, Code, Rocket, CheckCircle, Clock, DollarSign, Star, Settings, ArrowRight } from 'lucide-react';
import ServiceCard from './common/ServiceCard';

const Services: React.FC = () => {
  return (
    <section id="services" className="py-16 md:py-24 bg-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12 md:mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Os Nossos Serviços</h2>
          <p className="text-base sm:text-lg text-gray-700 max-w-3xl mx-auto">
            Oferecemos soluções tecnológicas adaptadas às suas necessidades, 
            com foco na qualidade, rapidez e satisfação do cliente.
          </p>
        </div>

        <div className="grid gap-8 lg:gap-12 md:grid-cols-2 max-w-7xl mx-auto">
          {/* Website Creation Service */}
          <div className="flex flex-col bg-gradient-to-br from-blue-50 to-indigo-50 rounded-xl shadow-lg transition-shadow hover:shadow-xl">
            <div className="p-6 sm:p-8 flex flex-col h-full">
              <div className="flex items-center mb-6">
                <div className="w-12 h-12 flex items-center justify-center bg-primary-100 text-primary-600 rounded-lg">
                  <Globe size={24} />
                </div>
                <h3 className="ml-4 text-xl sm:text-2xl font-bold text-gray-900">
                  Websites Profissionais
                </h3>
              </div>

              <p className="text-sm sm:text-base text-gray-700 mb-6">
                Websites elegantes, rápidos e totalmente responsivos para empresas e profissionais 
                nos nove concelhos da Península de Setúbal.
              </p>
              
              <div className="grid gap-4 sm:grid-cols-2 mb-8">
                <ServiceCard 
                  icon={<Clock size={18} />}
                  title="Entrega Rápida"
                  description="Websites entregues em tempo recorde para atender às suas necessidades."
                />
                <ServiceCard 
                  icon={<DollarSign size={18} />}
                  title="Preços Competitivos"
                  description="Soluções de qualidade a preços justos e acessíveis."
                />
                <ServiceCard 
                  icon={<Rocket size={18} />}
                  title="Designs Modernos"
                  description="Interfaces elegantes e atuais para a sua marca."
                />
                <ServiceCard 
                  icon={<CheckCircle size={18} />}
                  title="Totalmente Responsivos"
                  description="Optimizados para todos os dispositivos."
                />
              </div>
              
              <div className="mt-auto">
                <a 
                  href="#contact" 
                  className="inline-flex items-center gap-2 btn-primary text-sm sm:text-base"
                >
                  Solicitar Orçamento
                  <ArrowRight size={16} />
                </a>
              </div>
            </div>
          </div>

          {/* Software & Consulting Service */}
          <div className="flex flex-col bg-gradient-to-br from-slate-50 to-slate-100 rounded-xl shadow-lg transition-shadow hover:shadow-xl">
            <div className="p-6 sm:p-8 flex flex-col h-full">
              <div className="flex items-center mb-6">
                <div className="w-12 h-12 flex items-center justify-center bg-secondary-100 text-secondary-600 rounded-lg">
                  <Code size={24} />
                </div>
                <h3 className="ml-4 text-xl sm:text-2xl font-bold text-gray-900">
                  Software & Consultoria
                </h3>
              </div>

              <p className="text-sm sm:text-base text-gray-700 mb-6">
                Serviço premium de desenvolvimento de software personalizado e consultoria 
                informática especializada disponível no Barreiro.
              </p>
              
              <div className="grid gap-4 sm:grid-cols-2 mb-8">
                <ServiceCard 
                  icon={<Star size={18} />}
                  title="Serviço Premium"
                  description="Atendimento personalizado e soluções de alta qualidade."
                  variant="secondary"
                />
                <ServiceCard 
                  icon={<Settings size={18} />}
                  title="Auditorias de TI"
                  description="Avaliação completa da sua infraestrutura."
                  variant="secondary"
                />
                <ServiceCard 
                  icon={<Globe size={18} />}
                  title="Gestão de Fornecedores"
                  description="Negociação e gestão de contratos de TI."
                  variant="secondary"
                />
                <ServiceCard 
                  icon={<Code size={18} />}
                  title="Software Personalizado"
                  description="Aplicações sob medida para o seu negócio."
                  variant="secondary"
                />
              </div>
              
              <div className="mt-auto">
                <a 
                  href="#contact" 
                  className="inline-flex items-center gap-2 btn-secondary text-sm sm:text-base"
                >
                  Marcar Consultoria
                  <ArrowRight size={16} />
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Services;