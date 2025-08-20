"use client";
import { useState, useEffect } from "react";
import { ChevronDown, ChevronRight } from "lucide-react";

export default function SectionVendas() {
  const [open, setOpen] = useState(false);

  // Permite abrir programaticamente a section ao clicar no submenu da sidebar
  useEffect(() => {
    const handler = () => setOpen(true);
    window.addEventListener('open-section-notasfiscais', handler);
    return () => window.removeEventListener('open-section-notasfiscais', handler);
  }, []);
  return (
  <section id="notasfiscais" className="responsive-section">
      <div className="w-full mb-2">
        <button
          type="button"
          className="flex items-center gap-2 w-full text-left focus:outline-none bg-white bg-opacity-80 shadow-md rounded-lg px-4 py-2 transition-all duration-300 hover:cursor-pointer"
          style={{ boxShadow: '0 2px 8px 0 rgba(0,0,0,0.10)' }}
          onClick={() => setOpen((v) => !v)}
          aria-expanded={open}
          aria-controls="section-vendas-content"
        >
          <span className="flex items-center text-xl font-bold text-black">
            {open ? (
              <ChevronDown className="w-5 h-5 mr-2" />
            ) : (
              <ChevronRight className="w-5 h-5 mr-2" />
            )}
            Notas Fiscais
          </span>
        </button>
      </div>

      <div
        id="section-vendas-content"
        className={`transition-all duration-500 ease-in-out overflow-hidden ${open ? 'max-h-[2000px] opacity-100 mt-2' : 'max-h-0 opacity-0'} space-y-4`}
        aria-hidden={!open}
      >
        {/* Always render the cards for animation to work both ways */}
  <div id="notasfiscais-endpoint-get" className="bg-white rounded-lg shadow responsive-card">
          <div className="flex items-center gap-2 mb-2">
            <span className="bg-blue-600 text-white text-xs font-bold px-2 py-1 rounded">
              GET
            </span>
            <span className="font-mono text-sm text-black">
              /api/notas-fiscais
            </span>
          </div>
          <div className="text-gray-700 text-sm mb-2">
            Retorna todas as notas fiscais cadastradas, com informações
            detalhadas de cada nota.
          </div>
          <pre className="bg-[#151b26] text-white rounded p-3 responsive-pre overflow-x-auto">
            <span className="inline-block bg-green-100 text-green-800 px-2 py-0.5 rounded mr-2">
              200 OK
            </span>
            {` Retorna array de notas fiscais:`}
            <br />
            {`[\n  { ...nota1 },\n  { ...nota2 }\n]`}
          </pre>
        </div>
  <div id="notasfiscais-endpoint-post" className="bg-white rounded-lg shadow p-4">
          <div className="flex items-center gap-2 mb-2">
            <span className="bg-blue-600 text-white text-xs font-bold px-2 py-1 rounded">
              POST
            </span>
            <span className="font-mono text-sm text-black">
              /api/notas-fiscais
            </span>
          </div>
          <div className="text-gray-700 text-sm mb-2">
            Cadastra uma nova nota fiscal. É necessário informar número, data de
            emissão, valor total e filial. Retorna os dados da nota criada.
          </div>
          <pre className="bg-[#151b26] text-white rounded p-3 text-xs overflow-x-auto">
            <span className="inline-block bg-green-100 text-green-800 px-2 py-0.5 rounded mr-2">
              201 Created
            </span>
            {` Retorna a nota criada:`}
            <br />
            {`{\n  "numeroNota": 1001,\n  "dataEmissao": "2025-08-19",\n  "valorTotal": 10000,\n  "filialId": 1\n}`}
          </pre>
        </div>
  <div id="notasfiscais-endpoint-get-id" className="bg-white rounded-lg shadow p-4">
          <div className="flex items-center gap-2 mb-2">
            <span className="bg-blue-600 text-white text-xs font-bold px-2 py-1 rounded">
              GET
            </span>
            <span className="font-mono text-sm text-black">
              /api/notas-fiscais/:id
            </span>
          </div>
          <div className="text-gray-700 text-sm mb-2">
            Busca os dados completos de uma nota fiscal específica a partir do
            seu ID.
          </div>
          <pre className="bg-[#151b26] text-white rounded p-3 text-xs overflow-x-auto">
            <span className="inline-block bg-green-100 text-green-800 px-2 py-0.5 rounded mr-2">
              200 OK
            </span>
            {` nota fiscal encontrada`}
            <br />
            <span className="inline-block bg-red-100 text-red-800 px-2 py-0.5 rounded mr-2">
              404 Not Found
            </span>
            {` { "error": "Nota fiscal não encontrada." }`}
          </pre>
        </div>
  <div id="notasfiscais-endpoint-put" className="bg-white rounded-lg shadow p-4">
          <div className="flex items-center gap-2 mb-2">
            <span className="bg-yellow-500 text-white text-xs font-bold px-2 py-1 rounded">
              PUT
            </span>
            <span className="font-mono text-sm text-black">
              /api/notas-fiscais/:id
            </span>
          </div>
          <div className="text-gray-700 text-sm mb-2">
            Atualiza os dados de uma nota fiscal já cadastrada, identificada pelo
            ID. Permite alterar número, data, valor e filial.
          </div>
          <pre className="bg-[#151b26] text-white rounded p-3 text-xs overflow-x-auto">
            <span className="inline-block bg-green-100 text-green-800 px-2 py-0.5 rounded mr-2">
              200 OK
            </span>
            {` nota fiscal atualizada`}
            <br />
            <span className="inline-block bg-red-100 text-red-800 px-2 py-0.5 rounded mr-2">
              404 Not Found
            </span>
            {` { "error": "Nota fiscal não encontrada." }`}
          </pre>
        </div>
  <div id="notasfiscais-endpoint-delete" className="bg-white rounded-lg shadow p-4">
          <div className="flex items-center gap-2 mb-2">
            <span className="bg-red-600 text-white text-xs font-bold px-2 py-1 rounded">
              DELETE
            </span>
            <span className="font-mono text-sm text-black">
              /api/notas-fiscais/:id
            </span>
          </div>
          <div className="text-gray-700 text-sm mb-2">
            Remove uma nota fiscal do sistema a partir do seu ID. Esta ação é
            irreversível.
          </div>
          <pre className="bg-[#151b26] text-white rounded p-3 text-xs overflow-x-auto">
            <span className="inline-block bg-green-100 text-green-800 px-2 py-0.5 rounded mr-2">
              200 OK
            </span>
            {` { "message": "Nota fiscal removida com sucesso." }`}
            <br />
            <span className="inline-block bg-red-100 text-red-800 px-2 py-0.5 rounded mr-2">
              404 Not Found
            </span>
            {` { "error": "Nota fiscal não encontrada." }`}
            <br />
            <span className="inline-block bg-red-100 text-red-800 px-2 py-0.5 rounded mr-2">
              409 Conflict
            </span>
            {` { "error": "Não é possível remover a nota fiscal. Existem registros relacionados." }`}
          </pre>
        </div>
      </div>
  </section>
  );
}
