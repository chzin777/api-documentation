"use client";
import { useState } from "react";
import { ChevronDown, ChevronRight } from "lucide-react";

export default function SectionEstoque() {
  const [open, setOpen] = useState(false);
  return (
    <section id="estoque" className="mb-8">
      <div className="w-full mb-2">
        <button
          type="button"
          className="flex items-center gap-2 w-full text-left focus:outline-none bg-white bg-opacity-80 shadow-md rounded-lg px-4 py-2 transition-all duration-300 hover:cursor-pointer"
          style={{ boxShadow: '0 2px 8px 0 rgba(0,0,0,0.10)' }}
          onClick={() => setOpen((v) => !v)}
          aria-expanded={open}
          aria-controls="section-estoque-content"
        >
          <span className="flex items-center text-xl font-bold text-black">
            {open ? (
              <ChevronDown className="w-5 h-5 mr-2" />
            ) : (
              <ChevronRight className="w-5 h-5 mr-2" />
            )}
            Estoque
          </span>
        </button>
      </div>

      <div
        id="section-estoque-content"
        className={`transition-all duration-500 ease-in-out overflow-hidden ${open ? 'max-h-[2000px] opacity-100 mt-2' : 'max-h-0 opacity-0'} space-y-4`}
        aria-hidden={!open}
      >
        {/* Sempre renderiza os cards para animar abrir/fechar */}
        <div className="bg-white rounded-lg shadow p-4">
          <div className="flex items-center gap-2 mb-2">
            <span className="bg-blue-600 text-white text-xs font-bold px-2 py-1 rounded">GET</span>
            <span className="font-mono text-sm text-black">/api/estoque</span>
          </div>
          <div className="text-gray-700 text-sm mb-2">Retorna todas as máquinas cadastradas no estoque, com informações detalhadas de cada item.</div>
          <pre className="bg-[#151b26] text-white rounded p-3 text-xs overflow-x-auto">
            <span className="inline-block bg-green-100 text-green-800 px-2 py-0.5 rounded mr-2">200 OK</span>{` Retorna array de itens do estoque:`}<br />{`[
  { ...item1 },
  { ...item2 }
]`}
          </pre>
        </div>
        <div className="bg-white rounded-lg shadow p-4">
          <div className="flex items-center gap-2 mb-2">
            <span className="bg-blue-600 text-white text-xs font-bold px-2 py-1 rounded">POST</span>
            <span className="font-mono text-sm text-black">/api/estoque</span>
          </div>
          <div className="text-gray-700 text-sm mb-2">Adiciona uma nova máquina ao estoque. É necessário informar o chassi, produto e status. Retorna os dados do item cadastrado.</div>
          <pre className="bg-[#151b26] text-white rounded p-3 text-xs overflow-x-auto">
            <span className="inline-block bg-green-100 text-green-800 px-2 py-0.5 rounded mr-2">201 Created</span>{` Retorna o item cadastrado:`}<br />{`{
  "Chassi": "CHASSI123",
  "produtoId": 1,
  "Status": "Disponível"
}`}
          </pre>
        </div>
        <div className="bg-white rounded-lg shadow p-4">
          <div className="flex items-center gap-2 mb-2">
            <span className="bg-blue-600 text-white text-xs font-bold px-2 py-1 rounded">GET</span>
            <span className="font-mono text-sm text-black">/api/estoque/:chassi</span>
          </div>
          <div className="text-gray-700 text-sm mb-2">Busca os dados completos de uma máquina específica no estoque, utilizando o chassi como identificador.</div>
          <pre className="bg-[#151b26] text-white rounded p-3 text-xs overflow-x-auto">
            <span className="inline-block bg-green-100 text-green-800 px-2 py-0.5 rounded mr-2">200 OK</span>{` item encontrado`}
            <br /><span className="inline-block bg-red-100 text-red-800 px-2 py-0.5 rounded mr-2">404 Not Found</span>{` { "error": "Item não encontrado." }`}
          </pre>
        </div>
        <div className="bg-white rounded-lg shadow p-4">
          <div className="flex items-center gap-2 mb-2">
            <span className="bg-yellow-500 text-white text-xs font-bold px-2 py-1 rounded">PUT</span>
            <span className="font-mono text-sm text-black">/api/estoque/:chassi</span>
          </div>
          <div className="text-gray-700 text-sm mb-2">Atualiza as informações de uma máquina do estoque, identificada pelo chassi. Permite alterar status e produto vinculado.</div>
          <pre className="bg-[#151b26] text-white rounded p-3 text-xs overflow-x-auto">
            <span className="inline-block bg-green-100 text-green-800 px-2 py-0.5 rounded mr-2">200 OK</span>{` item atualizado`}
            <br /><span className="inline-block bg-red-100 text-red-800 px-2 py-0.5 rounded mr-2">404 Not Found</span>{` { "error": "Item não encontrado." }`}
          </pre>
        </div>
        <div className="bg-white rounded-lg shadow p-4">
          <div className="flex items-center gap-2 mb-2">
            <span className="bg-red-600 text-white text-xs font-bold px-2 py-1 rounded">DELETE</span>
            <span className="font-mono text-sm text-black">/api/estoque/:chassi</span>
          </div>
          <div className="text-gray-700 text-sm mb-2">Remove uma máquina do estoque a partir do chassi informado. Esta ação é irreversível.</div>
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
