import React, { useState, FormEvent } from 'react';
import { Phone, Mail, Clock, MapPin } from 'lucide-react';
import emailjs from '@emailjs/browser';

const Contact: React.FC = () => {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<'idle' | 'success' | 'error'>('idle');

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitStatus('idle');

    try {
      await emailjs.sendForm(
        'service_94rkh4g',
        'template_iax76ml',
        e.currentTarget,
        'iwAT99nipxe_E8GZx'
      );
      setSubmitStatus('success');
      (e.target as HTMLFormElement).reset();
    } catch (error) {
      setSubmitStatus('error');
      console.error('Error sending email:', error);
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section id="contact" className="py-16 md:py-24 bg-gray-50">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Contacte-nos</h2>
          <p className="text-lg text-gray-700 max-w-3xl mx-auto">
            Estamos disponíveis para responder a todas as suas questões e ajudá-lo a encontrar a solução ideal para o seu negócio.
          </p>
        </div>

        <div className="max-w-5xl mx-auto">
          <div className="bg-white rounded-xl shadow-lg overflow-hidden">
            <div className="md:flex">
              {/* Contact Information */}
              <div className="md:w-2/5 bg-gradient-to-br from-primary-600 to-primary-800 p-8 text-white">
                <h3 className="text-2xl font-bold mb-6">Informações de Contacto</h3>
                
                <div className="space-y-6">
                  <div className="flex items-start">
                    <div className="mt-1 mr-3 bg-white/20 p-2 rounded-full">
                      <Phone size={20} />
                    </div>
                    <div>
                      <h4 className="font-medium mb-1">Telefone</h4>
                      <p>+351 967 907 412</p>
                    </div>
                  </div>
                  
                  <div className="flex items-start">
                    <div className="mt-1 mr-3 bg-white/20 p-2 rounded-full">
                      <Mail size={20} />
                    </div>
                    <div>
                      <h4 className="font-medium mb-1">Email</h4>
                      <p>info@insightevolution.pt</p>
                    </div>
                  </div>
                  
                  <div className="flex items-start">
                    <div className="mt-1 mr-3 bg-white/20 p-2 rounded-full">
                      <MapPin size={20} />
                    </div>
                    <div>
                      <h4 className="font-medium mb-1">Localização</h4>
                      <p>Barreiro, Portugal</p>
                      <p className="text-sm text-white/80 mt-1">(Consultoria disponível apenas no Barreiro)</p>
                    </div>
                  </div>
                  
                  <div className="flex items-start">
                    <div className="mt-1 mr-3 bg-white/20 p-2 rounded-full">
                      <Clock size={20} />
                    </div>
                    <div>
                      <h4 className="font-medium mb-1">Horário</h4>
                      <p>Segunda a Sexta: 9h - 18h</p>
                      <p>Sábado: 15h - 18h</p>
                    </div>
                  </div>
                </div>
              </div>
              
              {/* Contact Form */}
              <div className="md:w-3/5 p-8">
                <h3 className="text-2xl font-bold text-gray-900 mb-6">Envie-nos uma Mensagem</h3>
                
                <form onSubmit={handleSubmit} className="space-y-4">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div>
                      <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-1">
                        Nome
                      </label>
                      <input
                        type="text"
                        name="user_name"
                        id="name"
                        required
                        className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-primary-500 transition-colors"
                        placeholder="O seu nome"
                      />
                    </div>
                    <div>
                      <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">
                        Email
                      </label>
                      <input
                        type="email"
                        name="user_email"
                        id="email"
                        required
                        className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-primary-500 transition-colors"
                        placeholder="O seu email"
                      />
                    </div>
                  </div>
                  
                  <div>
                    <label htmlFor="service" className="block text-sm font-medium text-gray-700 mb-1">
                      Serviço Pretendido
                    </label>
                    <select
                      name="service"
                      id="service"
                      required
                      className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-primary-500 transition-colors"
                    >
                      <option value="">Selecione um serviço</option>
                      <option value="website">Website Profissional</option>
                      <option value="software">Software à Medida</option>
                      <option value="consulting">Consultoria Informática</option>
                      <option value="other">Outro</option>
                    </select>
                  </div>
                  
                  <div>
                    <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-1">
                      Mensagem
                    </label>
                    <textarea
                      name="message"
                      id="message"
                      rows={4}
                      required
                      className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-primary-500 transition-colors"
                      placeholder="Descreva o seu projeto ou dúvida..."
                    ></textarea>
                  </div>
                  
                  <div>
                    <button
                      type="submit"
                      disabled={isSubmitting}
                      className="w-full bg-primary-600 hover:bg-primary-700 text-white font-medium py-2.5 px-6 rounded-lg transition-colors focus:outline-none focus:ring-2 focus:ring-primary-500 focus:ring-offset-2 disabled:opacity-70"
                    >
                      {isSubmitting ? 'A enviar...' : 'Enviar Mensagem'}
                    </button>
                  </div>

                  {submitStatus === 'success' && (
                    <div className="text-green-600 text-sm mt-2">
                      Mensagem enviada com sucesso! Entraremos em contacto brevemente.
                    </div>
                  )}

                  {submitStatus === 'error' && (
                    <div className="text-red-600 text-sm mt-2">
                      Ocorreu um erro ao enviar a mensagem. Por favor, tente novamente.
                    </div>
                  )}
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;