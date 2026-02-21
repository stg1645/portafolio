import Link from "next/link";

export default function AWSPage() {
  return (
    <main className="flex min-h-screen flex-col items-center p-24 bg-zinc-950 text-white font-sans">
      <div className="max-w-4xl w-full">
        {/* Botón de regreso */}
        <Link href="/" className="text-orange-500 hover:text-orange-400 mb-8 inline-block transition-colors">
          ← Volver al inicio
        </Link>

        <h1 className="text-4xl font-bold tracking-tight mb-4">☁️ Proyectos y Laboratorios AWS</h1>
        <p className="text-zinc-400 mb-12">
          Documentación de mis configuraciones de red, instancias EC2 y preparación para las certificaciones Cloud Practitioner y Solutions Architect.
        </p>

        {/* Contenedor de un artículo de ejemplo */}
        <div className="p-6 border border-zinc-800 rounded-2xl bg-zinc-900/30">
          <h2 className="text-xl font-semibold mb-2">Despliegue de VPS para Agentes IA</h2>
          <p className="text-zinc-500 text-sm mb-4">Fecha: Febrero 2026</p>
          <p className="text-zinc-300">
            Aquí documentaré cómo estructuro la conexión de mis servicios usando contenedores y redes seguras...
          </p>
        </div>
      </div>
    </main>
  );
}