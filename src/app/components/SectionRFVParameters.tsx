"use client";
import { useState, useEffect } from "react";
import { ChevronDown, ChevronRight } from "lucide-react";

export default function SectionRFVParameters() {
  const [open, setOpen] = useState(false);

  // Permite abrir programaticamente a section ao clicar no submenu da sidebar
  useEffect(() => {
    const handler = () => setOpen(true);
    window.addEventListener('open-section-rfv-parameters', handler);
    return () => window.removeEventListener('open-section-rfv-parameters', handler);
  }, []);
  return (
    <section id="rfv-parameters" className="responsive-section">
      <div className="w-full mb-2">
        <button
          type="button"
          className="flex items-center gap-2 w-full text-left focus:outline-none bg-white bg-opacity-80 shadow-md rounded-lg px-4 py-2 transition-all duration-300 hover:cursor-pointer"
          style={{ boxShadow: '0 2px 8px 0 rgba(0,0,0,0.10)' }}
          onClick={() => setOpen((v) => !v)}
          aria-expanded={open}
          aria-controls="section-rfv-parameters-content"
        >
          <span className="flex items-center text-xl font-bold text-black">
            {open ? (
              <ChevronDown className="w-5 h-5 mr-2" />
            ) : (
              <ChevronRight className="w-5 h-5 mr-2" />
            )}
            RFV - Parâmetros
          </span>
        </button>
      </div>
      <div
        id="section-rfv-parameters-content"
        className={`transition-all duration-500 ease-in-out overflow-hidden ${open ? 'max-h-[2000px] opacity-100 mt-2' : 'max-h-0 opacity-0'} space-y-4`}
        aria-hidden={!open}
      >
  <div id="rfv-parameters-endpoint-post" className="bg-white rounded-lg shadow p-4">
          <div className="flex items-center gap-2 mb-2">
            <span className="bg-blue-600 text-white text-xs font-bold px-2 py-1 rounded">POST</span>
            <span className="font-mono text-sm text-black">/api/rfv/parameters</span>
          </div>
          <div className="text-gray-700 text-sm mb-2">
            Cria um novo conjunto de regras RFV (automático ou manual).
          </div>
          <pre className="bg-[#151b26] text-white rounded p-3 text-xs overflow-x-auto">
            <span className="inline-block bg-green-100 text-green-800 px-2 py-0.5 rounded mr-2">201 Created</span> Parâmetros criados
            {`
{
  "tipo": "automatico",
  "regras": { ... }
}`}
          </pre>
        </div>
  <div id="rfv-parameters-endpoint-get" className="bg-white rounded-lg shadow p-4">
          <div className="flex items-center gap-2 mb-2">
            <span className="bg-blue-600 text-white text-xs font-bold px-2 py-1 rounded">GET</span>
            <span className="font-mono text-sm text-black">/api/rfv/analysis</span>
          </div>
          <div className="text-gray-700 text-sm mb-2">
            Executa a análise RFV e retorna scores e segmentos de todos os clientes.
          </div>
          <pre className="bg-[#151b26] text-white rounded p-3 text-xs overflow-x-auto">
            <span className="inline-block bg-green-100 text-green-800 px-2 py-0.5 rounded mr-2">200 OK</span> Resultado da análise RFV
            {`
[
  { "clienteId": 1, "score": 87, "segmento": "VIP" },
  { "clienteId": 2, "score": 45, "segmento": "Recuperar" }
]`}
          </pre>
        </div>
      </div>
    </section>
  );
}