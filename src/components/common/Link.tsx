import React from 'react';

interface LinkProps {
  href: string;
  className?: string;
  children: React.ReactNode;
  onClick?: () => void;
}

export const Link: React.FC<LinkProps> = ({ href, className, children, onClick }) => {
  return (
    <a 
      href={href}
      onClick={onClick}
      className={`text-gray-700 hover:text-primary-600 font-medium transition-colors ${className || ''}`}
    >
      {children}
    </a>
  );
};