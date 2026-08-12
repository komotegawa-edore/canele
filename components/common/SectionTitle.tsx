type SectionTitleProps = {
  title: string;
  subtitle?: string;
  className?: string;
};

export default function SectionTitle({
  title,
  subtitle,
  className = "",
}: SectionTitleProps) {
  return (
    <div className={`text-center mb-12 ${className}`}>
      {subtitle && (
        <span className="workshop-tag font-playfair mb-4">{subtitle}</span>
      )}
      <h2 className="text-2xl md:text-3xl font-playfair text-dark-brown tracking-wider mt-4">
        {title}
      </h2>
    </div>
  );
}
