export default function Button({ 
  children, 
  variant = 'primary', 
  size = 'md', 
  className = '', 
  onClick,
  disabled = false,
  ...props 
}) {
  const baseClasses = 'inline-flex items-center justify-center font-semibold transition-all duration-300 ease-out focus:outline-none focus:ring-2 focus:ring-offset-2 disabled:opacity-50 disabled:cursor-not-allowed transform hover:scale-105 active:scale-95';
  
  const variants = {
    primary: 'bg-[#2A1E19] dark:bg-[#C9A47A] text-[#FAF6F3] dark:text-[#1C1715] hover:bg-[#C9A47A] dark:hover:bg-[#b38d64] hover:text-[#2A1E19] dark:hover:text-[#1C1715] focus:ring-[#C9A47A] shadow-lg hover:shadow-2xl border border-[#2A1E19] dark:border-[#C9A47A] hover:border-[#C9A47A]',
    secondary: 'bg-[#C9A47A] dark:bg-[#8C7E77] text-[#2A1E19] dark:text-[#F5F2EF] hover:bg-[#8C7E77] dark:hover:bg-[#6B5B52] hover:text-[#FAF6F3] focus:ring-[#8C7E77] shadow-lg hover:shadow-xl border border-[#C9A47A] dark:border-[#8C7E77] hover:border-[#8C7E77]',
    outline: 'border-2 border-[#2A1E19] dark:border-[#F5F2EF] text-[#2A1E19] dark:text-[#F5F2EF] hover:bg-[#2A1E19] dark:hover:bg-[#F5F2EF] hover:text-[#FAF6F3] dark:hover:text-[#1C1715] focus:ring-[#2A1E19] dark:focus:ring-[#F5F2EF] shadow-md hover:shadow-lg',
    ghost: 'text-[#2A1E19] dark:text-[#F5F2EF] hover:bg-[#FFFDFC] dark:hover:bg-[#2A1E19] hover:text-[#C9A47A] focus:ring-[#C9A47A] hover:shadow-md'
  };
  
  const sizes = {
    sm: 'px-4 py-2 text-sm rounded-xl',
    md: 'px-6 py-3 text-base rounded-2xl',
    lg: 'px-8 py-4 text-lg rounded-2xl',
    xl: 'px-10 py-5 text-xl rounded-3xl'
  };
  
  return (
    <button
      className={`${baseClasses} ${variants[variant]} ${sizes[size]} ${className}`}
      onClick={onClick}
      disabled={disabled}
      {...props}
    >
      {children}
    </button>
  );
}
