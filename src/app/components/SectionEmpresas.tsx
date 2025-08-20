"use client";
import { useState, useEffect } from "react";
import { ChevronDown, ChevronRight } from "lucide-react";

export default function SectionEmpresas() {
  const [open, setOpen] = useState(false);

  // Ouve evento customizado para abrir a section
  useEffect(() => {
    const handler = (e: Event) => {
      setOpen(true);
    };
    window.addEventListener("open-section-empresas", handler);
    return () => window.removeEventListener("open-section-empresas", handler);
  }, []);

  return (
    <section id="empresas" className="responsive-section">
      <div className="w-full mb-2">
        <button
          type="button"
          className="flex items-center gap-2 w-full text-left focus:outline-none bg-white bg-opacity-80 shadow-md rounded-lg px-4 py-2 transition-all duration-300 hover:cursor-pointer"
          style={{ boxShadow: '0 2px 8px 0 rgba(0,0,0,0.10)' }}
          onClick={() => setOpen((v) => !v)}
          aria-expanded={open}
          aria-controls="section-empresas-content"
        >
          <span className="flex items-center text-xl font-bold text-black">
            {open ? (
              <ChevronDown className="w-5 h-5 mr-2" />
            ) : (
              <ChevronRight className="w-5 h-5 mr-2" />
            )}
            Empresas
          </span>
        </button>
      </div>
      <div
        id="section-empresas-content"
        className={`transition-all duration-500 ease-in-out overflow-hidden ${open ? 'max-h-[2000px] opacity-100 mt-2' : 'max-h-0 opacity-0'} space-y-4`}
        aria-hidden={!open}
      >
  <div id="empresas-endpoint-post" className="bg-white rounded-lg shadow p-4">
          <div className="flex items-center gap-2 mb-2">
            <span className="bg-blue-600 text-white text-xs font-bold px-2 py-1 rounded">POST</span>
            <span className="font-mono text-sm text-black">/api/empresas</span>
          </div>
          <div className="text-gray-700 text-sm mb-2">
            Cria uma nova empresa.
          </div>
          <pre className="bg-[#151b26] text-white rounded p-3 text-xs overflow-x-auto">
            <span className="inline-block bg-green-100 text-green-800 px-2 py-0.5 rounded mr-2">201 Created</span> Retorna a empresa criada:
            {`
{
  "id": 1,
  "nome": "Empresa Exemplo"
}`}
          </pre>
        </div>
  <div id="empresas-endpoint-get" className="bg-white rounded-lg shadow p-4">
          <div className="flex items-center gap-2 mb-2">
            <span className="bg-blue-600 text-white text-xs font-bold px-2 py-1 rounded">GET</span>
            <span className="font-mono text-sm text-black">/api/empresas</span>
          </div>
          <div className="text-gray-700 text-sm mb-2">
            Retorna uma lista de todas as empresas cadastradas.
          </div>
          <pre className="bg-[#151b26] text-white rounded p-3 text-xs overflow-x-auto">
            <span className="inline-block bg-green-100 text-green-800 px-2 py-0.5 rounded mr-2">200 OK</span> Array de empresas:
            {`
[
  { "id": 1, "nome": "Empresa Exemplo" },
  { "id": 2, "nome": "Empresa Dois" }
]`}
          </pre>
        </div>
  <div id="empresas-endpoint-get-id" className="bg-white rounded-lg shadow p-4">
          <div className="flex items-center gap-2 mb-2">
            <span className="bg-blue-600 text-white text-xs font-bold px-2 py-1 rounded">GET</span>
            <span className="font-mono text-sm text-black">/api/empresas/:id</span>
          </div>
          <div className="text-gray-700 text-sm mb-2">
            Busca os dados de uma empresa pelo ID.
          </div>
          <pre className="bg-[#151b26] text-white rounded p-3 text-xs overflow-x-auto">
            <span className="inline-block bg-green-100 text-green-800 px-2 py-0.5 rounded mr-2">200 OK</span> Empresa encontrada
            {`
{
  "id": 1,
  "nome": "Empresa Exemplo"
}`}
            {`
`}
            <span className="inline-block bg-red-100 text-red-800 px-2 py-0.5 rounded mr-2">404 Not Found</span> {`{ "error": "Empresa não encontrada." }`}
          </pre>
        </div>
  <div id="empresas-endpoint-put" className="bg-white rounded-lg shadow p-4">
          <div className="flex items-center gap-2 mb-2">
            <span className="bg-yellow-500 text-white text-xs font-bold px-2 py-1 rounded">PUT</span>
            <span className="font-mono text-sm text-black">/api/empresas/:id</span>
          </div>
          <div className="text-gray-700 text-sm mb-2">
            Atualiza os dados de uma empresa pelo ID.
          </div>
          <pre className="bg-[#151b26] text-white rounded p-3 text-xs overflow-x-auto">
            <span className="inline-block bg-green-100 text-green-800 px-2 py-0.5 rounded mr-2">200 OK</span> Empresa atualizada
            {`
{
  "id": 1,
  "nome": "Novo Nome"
}`}
            {`
`}
            <span className="inline-block bg-red-100 text-red-800 px-2 py-0.5 rounded mr-2">404 Not Found</span> {`{ "error": "Empresa não encontrada." }`}
          </pre>
        </div>
  <div id="empresas-endpoint-delete" className="bg-white rounded-lg shadow p-4">
          <div className="flex items-center gap-2 mb-2">
            <span className="bg-red-600 text-white text-xs font-bold px-2 py-1 rounded">DELETE</span>
            <span className="font-mono text-sm text-black">/api/empresas/:id</span>
          </div>
          <div className="text-gray-700 text-sm mb-2">
            Remove uma empresa do sistema pelo ID. Esta ação é irreversível.
          </div>
          <pre className="bg-[#151b26] text-white rounded p-3 text-xs overflow-x-auto">
            <span className="inline-block bg-green-100 text-green-800 px-2 py-0.5 rounded mr-2">200 OK</span> {`{ "message": "Empresa removida com sucesso." }`}
            {`
`}
            <span className="inline-block bg-red-100 text-red-800 px-2 py-0.5 rounded mr-2">404 Not Found</span> {`{ "error": "Empresa não encontrada." }`}
          </pre>
        </div>
      </div>
    </section>
  );
}