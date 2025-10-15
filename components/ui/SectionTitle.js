export default function SectionTitle({ 
  title, 
  subtitle, 
  className = '' 
}) {
  return (
    <div className={`text-center ${className}`}>
      <h2 className="font-serif text-4xl md:text-5xl text-[#2A1E19] mb-4">
        {title}
      </h2>
      {subtitle && (
        <p className="text-lg text-[#8C7E77] max-w-2xl mx-auto">
          {subtitle}
        </p>
      )}
    </div>
  );
}
