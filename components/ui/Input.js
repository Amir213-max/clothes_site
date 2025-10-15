export default function Input({ 
  label, 
  error, 
  className = '', 
  ...props 
}) {
  return (
    <div className="w-full">
      {label && (
        <label className="block text-sm font-medium text-[#2A1E19] mb-2">
          {label}
        </label>
      )}
      <input
        className={`w-full px-4 py-3 border-2 border-[#8C7E77] rounded-xl bg-[#FFFDFC] text-[#2A1E19] placeholder-[#8C7E77] focus:border-[#C9A47A] focus:outline-none focus:ring-2 focus:ring-[#C9A47A] transition-all duration-300 ${className}`}
        {...props}
      />
      {error && (
        <p className="mt-1 text-sm text-red-600">{error}</p>
      )}
    </div>
  );
}
