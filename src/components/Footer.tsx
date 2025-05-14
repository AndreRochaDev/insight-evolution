import React from 'react';
import { Globe, Code, Facebook, Instagram, Linkedin, Mail } from 'lucide-react';

const Footer: React.FC = () => {
  return (
    <footer className="bg-gray-900 text-white py-12">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-4 gap-8">
          {/* Company Info */}
          <div className="md:col-span-1">
            <div className="flex items-center mb-4">
              <div className="text-primary-500 mr-2">
                <Globe size={24} />
              </div>
              <span className="text-xl font-bold">Insight Evolution</span>
            </div>
            <p className="text-gray-400 mb-4">
              Soluções tecnológicas inovadoras para empresas e profissionais na Península de Setúbal.
            </p>
            <div className="flex space-x-3">
              <a href="#" className="text-gray-400 hover:text-primary-500 transition-colors">
                <Facebook size={20} />
              </a>
              <a href="#" className="text-gray-400 hover:text-primary-500 transition-colors">
                <Instagram size={20} />
              </a>
              <a href="#" className="text-gray-400 hover:text-primary-500 transition-colors">
                <Linkedin size={20} />
              </a>
              <a href="mailto:info@insightevolution.pt" className="text-gray-400 hover:text-primary-500 transition-colors">
                <Mail size={20} />
              </a>
            </div>
          </div>
          
          {/* Services */}
          <div className="md:col-span-1">
            <h3 className="text-lg font-semibold mb-4">Serviços</h3>
            <ul className="space-y-2">
              <li>
                <a href="#services" className="text-gray-400 hover:text-primary-400 transition-colors">Websites Profissionais</a>
              </li>
              <li>
                <a href="#services" className="text-gray-400 hover:text-primary-400 transition-colors">Software à Medida</a>
              </li>
              <li>
                <a href="#services" className="text-gray-400 hover:text-primary-400 transition-colors">Consultoria Informática</a>
              </li>
              <li>
                <a href="#services" className="text-gray-400 hover:text-primary-400 transition-colors">Auditorias de TI</a>
              </li>
            </ul>
          </div>
          
          {/* Locations */}
          <div className="md:col-span-1">
            <h3 className="text-lg font-semibold mb-4">Áreas de Atuação</h3>
            <ul className="space-y-2">
              <li className="text-gray-400">Alcochete</li>
              <li className="text-gray-400">Almada</li>
              <li className="text-gray-400">Barreiro</li>
              <li className="text-gray-400">Moita</li>
              <li className="text-gray-400">Montijo</li>
              <li className="text-gray-400">Setúbal (e outros)</li>
            </ul>
          </div>
          
          {/* Contact */}
          <div className="md:col-span-1">
            <h3 className="text-lg font-semibold mb-4">Contacto</h3>
            <ul className="space-y-2">
              <li className="text-gray-400">+351 212 345 678</li>
              <li className="text-gray-400">info@insightevolution.pt</li>
              <li className="text-gray-400">Barreiro, Portugal</li>
            </ul>
            <a 
              href="#contact" 
              className="inline-block mt-4 bg-primary-600 hover:bg-primary-700 px-4 py-2 rounded-lg text-sm font-medium transition-colors"
            >
              Contacte-nos
            </a>
          </div>
        </div>
        
        <div className="border-t border-gray-800 mt-10 pt-6 flex flex-col md:flex-row justify-between items-center">
          <p className="text-gray-500 text-sm mb-4 md:mb-0">
            &copy; {new Date().getFullYear()} Insight Evolution Lda. Todos os direitos reservados.
          </p>
          <div className="flex space-x-6">
            <a href="#" className="text-gray-500 hover:text-primary-400 text-sm transition-colors">Termos de Serviço</a>
            <a href="#" className="text-gray-500 hover:text-primary-400 text-sm transition-colors">Política de Privacidade</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;