// src/components/Input.tsx
import { type ComponentProps, forwardRef } from 'react';

interface InputProps extends ComponentProps<'input'> {
  label?: string;
  error?: string;
  helperText?: string;
  fullWidth?: boolean;
}

export const Input = forwardRef<HTMLInputElement, InputProps>(
  ({ label, error, helperText, fullWidth = false, className = '', ...props }, ref) => {
    const inputClasses = `
      block rounded-md border px-3 py-2 text-sm placeholder-slate-400
      focus:border-primary-500 focus:outline-none focus:ring-1 focus:ring-primary-500
      disabled:bg-slate-50 disabled:text-slate-500
      ${error ? 'border-red-300 focus:border-red-500 focus:ring-red-500' : 'border-slate-300'}
      ${fullWidth ? 'w-full' : ''}
      ${className}
    `.trim();

    return (
      <div className={fullWidth ? 'w-full' : ''}>
        {label && (
          <label className="block text-sm font-medium text-slate-700 mb-1">
            {label}
          </label>
        )}
        <input ref={ref} className={inputClasses} {...props} />
        {error && (
          <p className="mt-1 text-sm text-red-600">{error}</p>
        )}
        {helperText && !error && (
          <p className="mt-1 text-sm text-slate-500">{helperText}</p>
        )}
      </div>
    );
  }
);

Input.displayName = 'Input';