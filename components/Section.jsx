export default function Section({ title, subtitle, children, className = "" }) {
  return (
    <section className={`mb-16 ${className}`}>
      <div className="mb-8">
        <h2 className="text-3xl font-raleway font-bold text-heading mb-3">
          {title}
        </h2>
        {subtitle && <p className="text-body text-lg max-w-2xl">{subtitle}</p>}
        <div className="w-20 h-1.5 bg-gradient-to-r from-primary to-secondary rounded-full mt-4"></div>
      </div>
      <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
        {children}
      </div>
    </section>
  );
}
