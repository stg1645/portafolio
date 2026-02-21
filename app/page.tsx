import Link from "next/link";
// 1. Importamos el componente de Imagen ultra-optimizado de Next.js
import Image from "next/image";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-center p-24 bg-zinc-950 text-white font-sans">
      <div className="text-center z-10 max-w-5xl w-full items-center justify-center font-mono text-sm flex flex-col gap-6">
        
        {/* 2. Tu Imagen de Perfil */}
        {/* Busca el archivo en la carpeta public. Asegúrate de que se llame perfil.jpg o cambia este nombre */}
        <Image 
          src="/perfil.jpg" 
          alt="Foto de Santiago Romero" 
          width={150} 
          height={150} 
          className="rounded-full border-4 border-zinc-800 shadow-xl"
        />

        <div>
          <h1 className="text-5xl font-bold tracking-tight mb-2">Santiago Romero</h1>
          <p className="text-xl text-zinc-400">
            Cloud Architect & AI Engineer
          </p>
        </div>

        {/* 3. Enlaces Externos (Redes Sociales) */}
        <div className="flex gap-4 mt-2">
          {/* Enlace a GitHub */}
          <a 
            href="https://github.com/stg1645" 
            target="_blank" 
            rel="noopener noreferrer"
            className="px-6 py-2 bg-zinc-900 border border-zinc-800 rounded-full hover:bg-zinc-800 hover:text-orange-400 transition-all"
          >
            GitHub
          </a>
          
          {/* Enlace a LinkedIn */}
          <a 
            href="https://www.linkedin.com/in/santiago-romero-56446a184/" 
            target="_blank" 
            rel="noopener noreferrer"
            className="px-6 py-2 bg-zinc-900 border border-zinc-800 rounded-full hover:bg-zinc-800 hover:text-blue-400 transition-all"
          >
            LinkedIn
          </a>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-20 w-full max-w-4xl">
        {/* Tarjeta AWS */}
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