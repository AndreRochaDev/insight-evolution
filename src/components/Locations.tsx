import React, { useState } from 'react';
import { CheckCircle, X } from 'lucide-react';

// Municipalities with services
const municipalities = [
  { name: 'Alcochete', websites: true, software: false },
  { name: 'Almada', websites: true, software: false },
  { name: 'Barreiro', websites: true, software: true },
  { name: 'Moita', websites: true, software: false },
  { name: 'Montijo', websites: true, software: false },
  { name: 'Palmela', websites: true, software: false },
  { name: 'Seixal', websites: true, software: false },
  { name: 'Sesimbra', websites: true, software: false },
  { name: 'Setúbal', websites: true, software: false },
];

const Locations: React.FC = () => {
  const [activeTab, setActiveTab] = useState<'websites' | 'software'>('websites');

  return (
    <section id="locations" className="py-16 md:py-24 bg-gray-50">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Áreas de Atuação</h2>
          <p className="text-lg text-gray-700 max-w-3xl mx-auto">
            A Insight Evolution tem um alcance geográfico específico para cada tipo de serviço que oferecemos.
          </p>
        </div>

        {/* Tab selector */}
        <div className="flex justify-center mb-10">
          <div className="bg-white rounded-full shadow-md p-1 inline-flex">
            <button
              onClick={() => setActiveTab('websites')}
              className={`py-2 px-6 rounded-full text-sm font-medium transition-all ${
                activeTab === 'websites'
                  ? 'bg-primary-600 text-white shadow-sm'
                  : 'text-gray-700 hover:text-primary-600'
              }`}
            >
              Websites
            </button>
            <button
              onClick={() => setActiveTab('software')}
              className={`py-2 px-6 rounded-full text-sm font-medium transition-all ${
                activeTab === 'software'
                  ? 'bg-secondary-600 text-white shadow-sm'
                  : 'text-gray-700 hover:text-secondary-600'
              }`}
            >
              Software & Consultoria
            </button>
          </div>
        </div>

        <div className="max-w-4xl mx-auto">
          <div className="bg-white rounded-xl shadow-lg overflow-hidden">
            {/* Map visualization (placeholder for actual map) */}
            <div className="relative h-64 bg-blue-100">
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="text-gray-400 text-lg font-medium">
                  {activeTab === 'websites' ? (
                    <div className="text-center">
                      <p className="mb-2 text-primary-600 font-semibold">Criação de Websites Profissionais</p>
                      <p>Disponível em toda a Península de Setúbal</p>
                    </div>
                  ) : (
                    <div className="text-center">
                      <p className="mb-2 text-secondary-600 font-semibold">Software à Medida & Consultoria</p>
                      <p>Disponível exclusivamente no Barreiro</p>
                    </div>
                  )}
                </div>
              </div>
              <div className="absolute inset-0 bg-[url('https://images.pexels.com/photos/3194521/pexels-photo-3194521.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2')] bg-cover bg-center opacity-15"></div>
            </div>

            {/* Municipalities list */}
            <div className="p-6">
              <h3 className="text-xl font-semibold text-gray-900 mb-4">
                {activeTab === 'websites' 
                  ? 'Concelhos com serviço de criação de websites' 
                  : 'Concelhos com serviço de software & consultoria'}
              </h3>
              <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
                {municipalities.map((municipality) => (
                  <div 
                    key={municipality.name}
                    className={`p-3 rounded-lg border ${
                      activeTab === 'websites' && municipality.websites
                        ? 'border-primary-200 bg-primary-50'
                        : activeTab === 'software' && municipality.software
                        ? 'border-secondary-200 bg-secondary-50'
                        : 'border-gray-200 bg-gray-50 opacity-50'
                    }`}
                  >
                    <div className="flex items-center">
                      {activeTab === 'websites' ? (
                        municipality.websites ? (
                          <CheckCircle size={18} className="text-primary-600 mr-2" />
                        ) : (
                          <X size={18} className="text-gray-400 mr-2" />
                        )
                      ) : municipality.software ? (
                        <CheckCircle size={18} className="text-secondary-600 mr-2" />
                      ) : (
                        <X size={18} className="text-gray-400 mr-2" />
                      )}
                      <span className={`${
                        (activeTab === 'websites' && municipality.websites) || 
                        (activeTab === 'software' && municipality.software) 
                          ? 'text-gray-900 font-medium' 
                          : 'text-gray-500'
                      }`}>
                        {municipality.name}
                      </span>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Locations;