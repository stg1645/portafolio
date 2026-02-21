import Link from "next/link";

export default function AIPage() {
  return (
    <main className="flex min-h-screen flex-col items-center p-24 bg-zinc-950 text-white font-sans">
      <div className="max-w-4xl w-full">
        {/* Botón de regreso */}
        <Link href="/" className="text-blue-500 hover:text-blue-400 mb-8 inline-block transition-colors">
          ← Volver al inicio
        </Link>

        <h1 className="text-4xl font-bold tracking-tight mb-4">🤖 Agentic AI & Automatización</h1>
        <p className="text-zinc-400 mb-12">
          Diseño e implementación de sistemas multi-agente, orquestación de flujos con n8n y desarrollo de APIs cognitivas.
        </p>

        {/* Caso de Estudio 1 */}
        <div className="p-8 border border-zinc-800 rounded-2xl bg-zinc-900/30 mb-8 hover:border-blue-500/50 transition-colors">
          <h2 className="text-2xl font-semibold mb-2">Sistema Multi-Agente para Análisis de Documentos</h2>
          <div className="flex gap-2 mb-6">
            <span className="px-3 py-1 bg-blue-900/30 text-blue-400 rounded-full text-xs border border-blue-800">LangGraph</span>
            <span className="px-3 py-1 bg-green-900/30 text-green-400 rounded-full text-xs border border-green-800">FastAPI</span>
            <span className="px-3 py-1 bg-orange-900/30 text-orange-400 rounded-full text-xs border border-orange-800">n8n</span>
          </div>
          
          <h3 className="text-lg font-medium text-zinc-300 mt-4 mb-2">El Desafío</h3>
          <p className="text-zinc-400 mb-4 text-sm leading-relaxed">
            Automatizar la extracción de datos complejos (como información de facturación) a partir de imágenes, resolviendo discrepancias cuando los modelos de visión tienen alucinaciones.
          </p>

          <h3 className="text-lg font-medium text-zinc-300 mt-4 mb-2">La Solución</h3>
          <p className="text-zinc-400 text-sm leading-relaxed">
            Se implementó una arquitectura donde múltiples agentes expertos evalúan la misma imagen. Si las extracciones difieren, un agente "juez" interviene para consolidar la información final. Todo el flujo de entrada y salida se orquesta de manera visual utilizando n8n, comunicándose con un backend en FastAPI.
          </p>
        </div>
      </div>
    </main>
  );
}