"use client";
import { useState, useEffect } from "react";
import { ChevronDown, ChevronRight } from "lucide-react";

export default function SectionNotasFiscaisItens() {
  const [open, setOpen] = useState(false);

  // Permite abrir programaticamente a section ao clicar no submenu da sidebar
  useEffect(() => {
    const handler = () => setOpen(true);
    window.addEventListener('open-section-notasfiscaisitens', handler);
    return () => window.removeEventListener('open-section-notasfiscaisitens', handler);
  }, []);
  return (
  <section id="notasfiscaisitens" className="responsive-section">
      <div className="w-full mb-2">
        <button
          type="button"
          className="flex items-center gap-2 w-full text-left focus:outline-none bg-white bg-opacity-80 shadow-md rounded-lg px-4 py-2 transition-all duration-300 hover:cursor-pointer"
          style={{ boxShadow: '0 2px 8px 0 rgba(0,0,0,0.10)' }}
          onClick={() => setOpen((v) => !v)}
          aria-expanded={open}
          aria-controls="section-notasfiscaisitens-content"
        >
          <span className="flex items-center text-xl font-bold text-black">
            {open ? (
              <ChevronDown className="w-5 h-5 mr-2" />
            ) : (
              <ChevronRight className="w-5 h-5 mr-2" />
            )}
            Itens de Nota Fiscal
          </span>
        </button>
      </div>

      <div
        id="section-notasfiscaisitens-content"
        className={`transition-all duration-500 ease-in-out overflow-hidden ${open ? 'max-h-[2000px] opacity-100 mt-2' : 'max-h-0 opacity-0'} space-y-4`}
        aria-hidden={!open}
      >
  <div id="notasfiscaisitens-endpoint-get" className="bg-white rounded-lg shadow responsive-card">
          <div className="flex items-center gap-2 mb-2">
            <span className="bg-blue-600 text-white text-xs font-bold px-2 py-1 rounded">GET</span>
            <span className="font-mono text-sm text-black">/api/notas-fiscais-itens</span>
          </div>
          <div className="text-gray-700 text-sm mb-2">Retorna todos os itens de nota fiscal cadastrados, com detalhes de cada produto vinculado à nota.</div>
          <pre className="bg-[#151b26] text-white rounded p-3 responsive-pre overflow-x-auto">
            <span className="inline-block bg-green-100 text-green-800 px-2 py-0.5 rounded mr-2">200 OK</span>{` Retorna array de itens de nota fiscal:`}
            <br />{`[
  { ...item1 },
  { ...item2 }
]`}
          </pre>
        </div>
  <div id="notasfiscaisitens-endpoint-post" className="bg-white rounded-lg shadow p-4">
          <div className="flex items-center gap-2 mb-2">
            <span className="bg-blue-600 text-white text-xs font-bold px-2 py-1 rounded">POST</span>
            <span className="font-mono text-sm text-black">/api/notas-fiscais-itens</span>
          </div>
          <div className="text-gray-700 text-sm mb-2">Adiciona um novo item a uma nota fiscal existente. É necessário informar nota, produto, quantidade e valores. Retorna o item criado.</div>
          <pre className="bg-[#151b26] text-white rounded p-3 text-xs overflow-x-auto">
            <span className="inline-block bg-green-100 text-green-800 px-2 py-0.5 rounded mr-2">201 Created</span>{` Retorna o item criado:`}
            <br />{`{
  "notaFiscalId": 1,
  "produtoId": 1,
  "Quantidade": 2,
  "valorUnitario": 100.00,
  "valorTotalItem": 200.00
}`}
          </pre>
        </div>
  <div id="notasfiscaisitens-endpoint-get-id" className="bg-white rounded-lg shadow p-4">
          <div className="flex items-center gap-2 mb-2">
            <span className="bg-blue-600 text-white text-xs font-bold px-2 py-1 rounded">GET</span>
            <span className="font-mono text-sm text-black">/api/notas-fiscais-itens/:id</span>
          </div>
          <div className="text-gray-700 text-sm mb-2">Busca os detalhes de um item de nota fiscal específico, utilizando o ID do item.</div>
          <pre className="bg-[#151b26] text-white rounded p-3 text-xs overflow-x-auto">
            <span className="inline-block bg-green-100 text-green-800 px-2 py-0.5 rounded mr-2">200 OK</span>{` item encontrado`}
            <br /><span className="inline-block bg-red-100 text-red-800 px-2 py-0.5 rounded mr-2">404 Not Found</span>{` { "error": "Item não encontrado." }`}
          </pre>
        </div>
  <div id="notasfiscaisitens-endpoint-put" className="bg-white rounded-lg shadow p-4">
          <div className="flex items-center gap-2 mb-2">
            <span className="bg-yellow-500 text-white text-xs font-bold px-2 py-1 rounded">PUT</span>
            <span className="font-mono text-sm text-black">/api/notas-fiscais-itens/:id</span>
          </div>
          <div className="text-gray-700 text-sm mb-2">Atualiza as informações de um item de nota fiscal, identificado pelo ID. Permite alterar quantidade e valores.</div>
          <pre className="bg-[#151b26] text-white rounded p-3 text-xs overflow-x-auto">
            <span className="inline-block bg-green-100 text-green-800 px-2 py-0.5 rounded mr-2">200 OK</span>{` item atualizado`}
            <br /><span className="inline-block bg-red-100 text-red-800 px-2 py-0.5 rounded mr-2">404 Not Found</span>{` { "error": "Item não encontrado." }`}
          </pre>
        </div>
  <div id="notasfiscaisitens-endpoint-delete" className="bg-white rounded-lg shadow p-4">
          <div className="flex items-center gap-2 mb-2">
            <span className="bg-red-600 text-white text-xs font-bold px-2 py-1 rounded">DELETE</span>
            <span className="font-mono text-sm text-black">/api/notas-fiscais-itens/:id</span>
          </div>
          <div className="text-gray-700 text-sm mb-2">Remove um item de nota fiscal a partir do seu ID. Esta ação é irreversível.</div>
          <pre className="bg-[#151b26] text-white rounded p-3 text-xs overflow-x-auto">
            <span className="inline-block bg-green-100 text-green-800 px-2 py-0.5 rounded mr-2">200 OK</span>{` { "message": "Item removido com sucesso." }`}
            <br /><span className="inline-block bg-red-100 text-red-800 px-2 py-0.5 rounded mr-2">404 Not Found</span>{` { "error": "Item não encontrado." }`}
            <br /><span className="inline-block bg-red-100 text-red-800 px-2 py-0.5 rounded mr-2">409 Conflict</span>{` { "error": "Não é possível remover o item. Existem registros relacionados." }`}
          </pre>
        </div>
      </div>
    </section>
  );
}