import React, { ReactNode } from 'react';

interface ServiceCardProps {
  icon: ReactNode;
  title: string;
  description: string;
  variant?: 'primary' | 'secondary';
}

const ServiceCard: React.FC<ServiceCardProps> = ({ 
  icon, 
  title, 
  description, 
  variant = 'primary' 
}) => {
  return (
    <div className={`flex items-start p-3 rounded-lg ${
      variant === 'primary' 
        ? 'bg-primary-50 hover:bg-primary-100' 
        : 'bg-secondary-50 hover:bg-secondary-100'
    } transition-colors`}>
      <div className={`mr-3 ${
        variant === 'primary' ? 'text-primary-600' : 'text-secondary-600'
      }`}>
        {icon}
      </div>
      <div>
        <h4 className="text-sm font-medium text-gray-900 mb-1">{title}</h4>
        <p className="text-xs text-gray-700">{description}</p>
      </div>
    </div>
  );
};

export default ServiceCard;