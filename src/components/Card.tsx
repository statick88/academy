// src/components/Card.tsx
import { type ComponentProps } from 'react';

interface CardProps extends ComponentProps<'div'> {
  variant?: 'default' | 'elevated' | 'bordered';
  padding?: 'none' | 'sm' | 'md' | 'lg';
}

export default function Card({
  variant = 'default',
  padding = 'md',
  className = '',
  children,
  ...props
}: CardProps) {
  const baseClasses = 'bg-white rounded-lg';

  const variantClasses = {
    default: 'border border-slate-200 shadow-sm',
    elevated: 'border border-slate-200 shadow-md',
    bordered: 'border-2 border-slate-300',
  };

  const paddingClasses = {
    none: '',
    sm: 'p-4',
    md: 'p-6',
    lg: 'p-8',
  };

  const classes = `${baseClasses} ${variantClasses[variant]} ${paddingClasses[padding]} ${className}`.trim();

  return (
    <div className={classes} {...props}>
      {children}
    </div>
  );
}

// Card sub-components
export function CardHeader({ className = '', children, ...props }: ComponentProps<'div'>) {
  return (
    <div className={`border-b border-slate-200 pb-4 mb-4 ${className}`.trim()} {...props}>
      {children}
    </div>
  );
}

export function CardContent({ className = '', children, ...props }: ComponentProps<'div'>) {
  return (
    <div className={className} {...props}>
      {children}
    </div>
  );
}

export function CardFooter({ className = '', children, ...props }: ComponentProps<'div'>) {
  return (
    <div className={`border-t border-slate-200 pt-4 mt-4 ${className}`.trim()} {...props}>
      {children}
    </div>
  );
}