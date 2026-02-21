// 1. Importamos el componente Link de Next.js
import Link from "next/link";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-center p-24 bg-zinc-950 text-white font-sans">
      <div className="text-center z-10 max-w-5xl w-full items-center justify-center font-mono text-sm flex flex-col gap-4">
        <h1 className="text-5xl font-bold tracking-tight">Santiago Romero</h1>
        <p className="text-xl text-zinc-400">
          Cloud Architect & AI Engineer
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-20 w-full max-w-4xl">
        
        {/* 2. Transformamos el contenedor de AWS en un Link */}
        {/* El href="/aws" le dice a dónde ir basándose en la carpeta que creamos */}
        <Link 
          href="/aws" 
          className="p-8 border border-zinc-800 rounded-2xl hover:border-orange-500 transition-all bg-zinc-900/50 block hover:-translate-y-1 hover:shadow-lg hover:shadow-orange-500/20 cursor-pointer"
        >
          <h2 className="text-2xl font-semibold mb-3">☁️ Infraestructura AWS</h2>
          <p className="text-zinc-400">
            Arquitecturas escalables, VPS, y preparación continua para certificaciones Cloud Practitioner y Solutions Architect.
          </p>
        </Link>

        {/* Tarjeta IA & Automatización */}
        <Link 
          href="/ai"
          className="p-8 border border-zinc-800 rounded-2xl hover:border-blue-500 transition-all bg-zinc-900/50 block hover:-translate-y-1 hover:shadow-lg hover:shadow-blue-500/20 cursor-pointer"
        >
          <h2 className="text-2xl font-semibold mb-3">🤖 Agentic AI & n8n</h2>
          <p className="text-zinc-400">
            Desarrollo del agente Cosmo, flujos de automatización avanzados e integración de herramientas cognitivas.
          </p>
        </Link>

      </div>
    </main>
  );
}
