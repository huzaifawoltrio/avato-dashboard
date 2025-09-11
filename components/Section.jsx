export default function Section({ title, children, className = '' }) {
  return (
    <section className={`mb-12 ${className}`}>
      <div className="mb-6">
        <h2 className="text-2xl font-raleway font-bold text-heading mb-2">
          {title}
        </h2>
        <div className="w-16 h-1 bg-primary rounded-full"></div>
      </div>
      <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
        {children}
      </div>
    </section>
  );
}