export default function Footer() {
  return (
    <footer className="bg-yvaga-dark text-yvaga-beige py-12 px-6">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center gap-6">
        <div className="text-center md:text-left">
          <h3 className="font-serif text-3xl mb-2 text-yvaga-white">Yvaga Guazú</h3>
          <p className="opacity-80 text-sm font-sans">
            Donde la Naturaleza se protege... y tú vuelves a sentirla.
          </p>
        </div>
        <div className="flex gap-6 opacity-60 text-sm">
          <p>&copy; {new Date().getFullYear()} Yvaga Guazú</p>
          <p>Paraíso Grande</p>
        </div>
      </div>
    </footer>
  );
}
