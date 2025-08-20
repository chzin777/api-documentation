"use client";
import { useState } from "react";
import { ChevronDown, ChevronRight } from "lucide-react";

export default function SectionFiliais() {
  const [open, setOpen] = useState(false);
  return (
  <section id="filiais" className="responsive-section">
      <div className="w-full mb-2">
        <button
          type="button"
          className="flex items-center gap-2 w-full text-left focus:outline-none bg-white bg-opacity-80 shadow-md rounded-lg px-4 py-2 transition-all duration-300 hover:cursor-pointer"
          style={{ boxShadow: '0 2px 8px 0 rgba(0,0,0,0.10)' }}
          onClick={() => setOpen((v) => !v)}
          aria-expanded={open}
          aria-controls="section-filiais-content"
        >
          <span className="flex items-center text-xl font-bold text-black">
            {open ? (
              <ChevronDown className="w-5 h-5 mr-2" />
            ) : (
              <ChevronRight className="w-5 h-5 mr-2" />
            )}
            Filiais
          </span>
        </button>
      </div>

      <div
        id="section-filiais-content"
        className={`transition-all duration-500 ease-in-out overflow-hidden ${open ? 'max-h-[2000px] opacity-100 mt-2' : 'max-h-0 opacity-0'} space-y-4`}
        aria-hidden={!open}
      >
        {/* Sempre renderiza os cards para animar abrir/fechar */}
  <div className="bg-white rounded-lg shadow responsive-card">
          <div className="flex items-center gap-2 mb-2">
            <span className="bg-blue-600 text-white text-xs font-bold px-2 py-1 rounded">GET</span>
            <span className="font-mono text-sm text-black">/api/filiais</span>
          </div>
          <div className="text-gray-700 text-sm mb-2">Retorna uma lista com todas as filiais cadastradas, incluindo nome, CNPJ, cidade e estado.</div>
          <pre className="bg-[#151b26] text-white rounded p-3 responsive-pre overflow-x-auto">
  <span className="inline-block bg-green-100 text-green-800 px-2 py-0.5 rounded mr-2">200 OK</span>{` Retorna array de filiais:`}<br />{`[
  { ...filial1 },
  { ...filial2 }
]`}
</pre>
        </div>
        <div className="bg-white rounded-lg shadow p-4">
          <div className="flex items-center gap-2 mb-2">
            <span className="bg-blue-600 text-white text-xs font-bold px-2 py-1 rounded">POST</span>
            <span className="font-mono text-sm text-black">/api/filiais</span>
          </div>
          <div className="text-gray-700 text-sm mb-2">Cadastra uma nova filial. É necessário informar nome, CNPJ, cidade e estado. Retorna os dados da filial criada.</div>
          <pre className="bg-[#151b26] text-white rounded p-3 text-xs overflow-x-auto">
  <span className="inline-block bg-green-100 text-green-800 px-2 py-0.5 rounded mr-2">201 Created</span>{` Retorna a filial criada:`}<br />{`{
  "nome": "Filial Centro",
  "cnpj": "00.000.000/0001-00",
  "cidade": "São Paulo",
  "estado": "SP"
}`}
</pre>
        </div>
        <div className="bg-white rounded-lg shadow p-4">
          <div className="flex items-center gap-2 mb-2">
            <span className="bg-blue-600 text-white text-xs font-bold px-2 py-1 rounded">GET</span>
            <span className="font-mono text-sm text-black">/api/filiais/:id</span>
          </div>
          <div className="text-gray-700 text-sm mb-2">Busca os dados completos de uma filial específica a partir do seu ID.</div>
          <pre className="bg-[#151b26] text-white rounded p-3 text-xs overflow-x-auto">
  <span className="inline-block bg-green-100 text-green-800 px-2 py-0.5 rounded mr-2">200 OK</span>{` filial encontrada`}
  <br /><span className="inline-block bg-red-100 text-red-800 px-2 py-0.5 rounded mr-2">404 Not Found</span>{` { "error": "Filial não encontrada." }`}
</pre>
        </div>
        <div className="bg-white rounded-lg shadow p-4">
          <div className="flex items-center gap-2 mb-2">
            <span className="bg-yellow-500 text-white text-xs font-bold px-2 py-1 rounded">PUT</span>
            <span className="font-mono text-sm text-black">/api/filiais/:id</span>
          </div>
          <div className="text-gray-700 text-sm mb-2">Atualiza os dados de uma filial já cadastrada, identificada pelo ID. Permite alterar nome, CNPJ, cidade e estado.</div>
          <pre className="bg-[#151b26] text-white rounded p-3 text-xs overflow-x-auto">
  <span className="inline-block bg-green-100 text-green-800 px-2 py-0.5 rounded mr-2">200 OK</span>{` filial atualizada`}
  <br /><span className="inline-block bg-red-100 text-red-800 px-2 py-0.5 rounded mr-2">404 Not Found</span>{` { "error": "Filial não encontrada." }`}
</pre>
        </div>
        <div className="bg-white rounded-lg shadow p-4">
          <div className="flex items-center gap-2 mb-2">
            <span className="bg-red-600 text-white text-xs font-bold px-2 py-1 rounded">DELETE</span>
            <span className="font-mono text-sm text-black">/api/filiais/:id</span>
          </div>
          <div className="text-gray-700 text-sm mb-2">Remove uma filial do sistema a partir do seu ID. Esta ação é irreversível.</div>
          <pre className="bg-[#151b26] text-white rounded p-3 text-xs overflow-x-auto">
  <span className="inline-block bg-green-100 text-green-800 px-2 py-0.5 rounded mr-2">200 OK</span>{` { "message": "Filial removida com sucesso." }`}
  <br /><span className="inline-block bg-red-100 text-red-800 px-2 py-0.5 rounded mr-2">404 Not Found</span>{` { "error": "Filial não encontrada." }`}
  <br /><span className="inline-block bg-red-100 text-red-800 px-2 py-0.5 rounded mr-2">409 Conflict</span>{` { "error": "Não é possível remover a filial. Existem registros relacionados." }`}
</pre>
        </div>
      </div>
    </section>
  );
}
