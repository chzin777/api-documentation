"use client";
import { useState, useEffect } from "react";
import { ChevronDown, ChevronRight } from "lucide-react";

export default function SectionRFVSegments() {
  const [open, setOpen] = useState(false);

  // Permite abrir programaticamente a section ao clicar no submenu da sidebar
  useEffect(() => {
    const handler = () => setOpen(true);
    window.addEventListener('open-section-rfv-segmentos', handler);
    return () => window.removeEventListener('open-section-rfv-segmentos', handler);
  }, []);
  return (
    <section id="rfv-segmentos" className="responsive-section">
      <div className="w-full mb-2">
        <button
          type="button"
          className="flex items-center gap-2 w-full text-left focus:outline-none bg-white bg-opacity-80 shadow-md rounded-lg px-4 py-2 transition-all duration-300 hover:cursor-pointer"
          style={{ boxShadow: '0 2px 8px 0 rgba(0,0,0,0.10)' }}
          onClick={() => setOpen((v) => !v)}
          aria-expanded={open}
          aria-controls="section-rfv-segments-content"
        >
          <span className="flex items-center text-xl font-bold text-black">
            {open ? (
              <ChevronDown className="w-5 h-5 mr-2" />
            ) : (
              <ChevronRight className="w-5 h-5 mr-2" />
            )}
            RFV - Segmentos Personalizados
          </span>
        </button>
      </div>
      <div
        id="section-rfv-segments-content"
        className={`transition-all duration-500 ease-in-out overflow-hidden ${open ? 'max-h-[2000px] opacity-100 mt-2' : 'max-h-0 opacity-0'} space-y-4`}
        aria-hidden={!open}
      >
  <div id="rfv-segmentos-endpoint-post" className="bg-white rounded-lg shadow p-4">
          <div className="flex items-center gap-2 mb-2">
            <span className="bg-blue-600 text-white text-xs font-bold px-2 py-1 rounded">POST</span>
            <span className="font-mono text-sm text-black">/api/rfv/segments</span>
          </div>
          <div className="text-gray-700 text-sm mb-2">
            Cria um novo segmento personalizado (ex: &quot;Champions / VIP&quot;).
          </div>
          <pre className="bg-[#151b26] text-white rounded p-3 text-xs overflow-x-auto">
            <span className="inline-block bg-green-100 text-green-800 px-2 py-0.5 rounded mr-2">201 Created</span> Segmento criado
            {`
{
  "id": 1,
  "nome": "Champions"
}`}
          </pre>
        </div>
  <div id="rfv-segmentos-endpoint-get" className="bg-white rounded-lg shadow p-4">
          <div className="flex items-center gap-2 mb-2">
            <span className="bg-blue-600 text-white text-xs font-bold px-2 py-1 rounded">GET</span>
            <span className="font-mono text-sm text-black">/api/rfv/segments</span>
          </div>
          <div className="text-gray-700 text-sm mb-2">
            Retorna uma lista de todos os segmentos personalizados.
          </div>
          <pre className="bg-[#151b26] text-white rounded p-3 text-xs overflow-x-auto">
            <span className="inline-block bg-green-100 text-green-800 px-2 py-0.5 rounded mr-2">200 OK</span> Array de segmentos:
            {`
[
  { "id": 1, "nome": "Champions" },
  { "id": 2, "nome": "VIP" }
]`}
          </pre>
        </div>
  <div id="rfv-segmentos-endpoint-put" className="bg-white rounded-lg shadow p-4">
          <div className="flex items-center gap-2 mb-2">
            <span className="bg-yellow-500 text-white text-xs font-bold px-2 py-1 rounded">PUT</span>
            <span className="font-mono text-sm text-black">/api/rfv/segments/:id</span>
          </div>
          <div className="text-gray-700 text-sm mb-2">
            Atualiza um segmento personalizado.
          </div>
          <pre className="bg-[#151b26] text-white rounded p-3 text-xs overflow-x-auto">
            <span className="inline-block bg-green-100 text-green-800 px-2 py-0.5 rounded mr-2">200 OK</span> Segmento atualizado
            {`
{
  "id": 1,
  "nome": "VIP"
}`}
            {`
`}
            <span className="inline-block bg-red-100 text-red-800 px-2 py-0.5 rounded mr-2">404 Not Found</span> {`{ "error": "Segmento não encontrado." }`}
          </pre>
        </div>
  <div id="rfv-segmentos-endpoint-delete" className="bg-white rounded-lg shadow p-4">
          <div className="flex items-center gap-2 mb-2">
            <span className="bg-red-600 text-white text-xs font-bold px-2 py-1 rounded">DELETE</span>
            <span className="font-mono text-sm text-black">/api/rfv/segments/:id</span>
          </div>
          <div className="text-gray-700 text-sm mb-2">
            Remove um segmento personalizado pelo ID.
          </div>
          <pre className="bg-[#151b26] text-white rounded p-3 text-xs overflow-x-auto">
            <span className="inline-block bg-green-100 text-green-800 px-2 py-0.5 rounded mr-2">200 OK</span> {`{ "message": "Segmento removido com sucesso." }`}
            {`
`}
            <span className="inline-block bg-red-100 text-red-800 px-2 py-0.5 rounded mr-2">404 Not Found</span> {`{ "error": "Segmento não encontrado." }`}
          </pre>
        </div>
      </div>
    </section>
  );
}