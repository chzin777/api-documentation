"use client";
import { useState, useEffect } from "react";
import { ChevronDown, ChevronRight } from "lucide-react";

export default function SectionClientes() {
  const [open, setOpen] = useState(false);

  // Permite abrir programaticamente a section ao clicar no submenu da sidebar
  useEffect(() => {
    const handler = () => setOpen(true);
    window.addEventListener('open-section-clientes', handler);
    return () => window.removeEventListener('open-section-clientes', handler);
  }, []);
  return (
  <section id="clientes" className="responsive-section">
      <div className="w-full mb-2">
        <button
          type="button"
          className="flex items-center gap-2 w-full text-left focus:outline-none bg-white bg-opacity-80 shadow-md rounded-lg px-4 py-2 transition-all duration-300 hover:cursor-pointer"
          style={{ boxShadow: '0 2px 8px 0 rgba(0,0,0,0.10)' }}
          onClick={() => setOpen((v) => !v)}
          aria-expanded={open}
          aria-controls="section-clientes-content"
        >
          <span className="flex items-center text-xl font-bold text-black">
            {open ? (
              <ChevronDown className="w-5 h-5 mr-2" />
            ) : (
              <ChevronRight className="w-5 h-5 mr-2" />
            )}
            Clientes
          </span>
        </button>
      </div>

      <div
        id="section-clientes-content"
        className={`transition-all duration-500 ease-in-out overflow-hidden ${open ? 'max-h-[2000px] opacity-100 mt-2' : 'max-h-0 opacity-0'} space-y-4`}
        aria-hidden={!open}
      >
        {/* Always render the cards for animation to work both ways */}
  <div id="clientes-endpoint-get" className="bg-white rounded-lg shadow responsive-card">
          <div className="flex items-center gap-2 mb-2">
            <span className="bg-blue-600 text-white text-xs font-bold px-2 py-1 rounded">GET</span>
            <span className="font-mono text-sm text-black">/api/clientes</span>
          </div>
          <div className="text-gray-700 text-sm mb-2">
            Retorna uma lista com todos os clientes cadastrados no sistema, incluindo nome, CPF/CNPJ, cidade e estado.
          </div>
          <pre className="bg-[#151b26] text-white rounded p-3 responsive-pre overflow-x-auto">
            <span className="inline-block bg-green-100 text-green-800 px-2 py-0.5 rounded mr-2">200 OK</span> Retorna array de clientes:
            {"\n"}[
  {"{ ...cliente1 }"},
  {"{ ...cliente2 }"}
]
          </pre>
        </div>
  <div id="clientes-endpoint-post" className="bg-white rounded-lg shadow p-4">
          <div className="flex items-center gap-2 mb-2">
            <span className="bg-blue-600 text-white text-xs font-bold px-2 py-1 rounded">POST</span>
            <span className="font-mono text-sm text-black">/api/clientes</span>
          </div>
          <div className="text-gray-700 text-sm mb-2">
            Cadastra um novo cliente. É necessário informar nome, CPF/CNPJ, cidade e estado. Retorna os dados do cliente criado.
          </div>
          <pre className="bg-[#151b26] text-white rounded p-3 text-xs overflow-x-auto">
            <span className="inline-block bg-green-100 text-green-800 px-2 py-0.5 rounded mr-2">201 Created</span> Retorna o cliente criado:
            {"\n"}{`{
  "id": 1,
  "nome": "Cliente Teste",
  "cpfCnpj": "123.456.789-00",
  "cidade": "São Paulo",
  "estado": "SP",
  "logradouro": null,
  "numero": null,
  "bairro": null,
  "cep": null,
  "telefone": null
}`}
          </pre>
        </div>
  <div id="clientes-endpoint-get-id" className="bg-white rounded-lg shadow p-4">
          <div className="flex items-center gap-2 mb-2">
            <span className="bg-blue-600 text-white text-xs font-bold px-2 py-1 rounded">GET</span>
            <span className="font-mono text-sm text-black">/api/clientes/:id</span>
          </div>
          <div className="text-gray-700 text-sm mb-2">
            Busca os dados completos de um cliente específico a partir do seu ID.
          </div>
          <pre className="bg-[#151b26] text-white rounded p-3 text-xs overflow-x-auto">
            <span className="inline-block bg-green-100 text-green-800 px-2 py-0.5 rounded mr-2">200 OK</span> cliente encontrado
            {"\n"}
            <span className="inline-block bg-red-100 text-red-800 px-2 py-0.5 rounded mr-2">404 Not Found</span> {"{ \"error\": \"Cliente não encontrado.\" }"}
          </pre>
        </div>
  <div id="clientes-endpoint-put" className="bg-white rounded-lg shadow p-4">
          <div className="flex items-center gap-2 mb-2">
            <span className="bg-yellow-500 text-white text-xs font-bold px-2 py-1 rounded">PUT</span>
            <span className="font-mono text-sm text-black">/api/clientes/:id</span>
          </div>
          <div className="text-gray-700 text-sm mb-2">
            Atualiza os dados de um cliente já cadastrado, identificado pelo ID. Permite alterar nome, CPF/CNPJ, cidade e estado.
          </div>
          <pre className="bg-[#151b26] text-white rounded p-3 text-xs overflow-x-auto">
            <span className="inline-block bg-green-100 text-green-800 px-2 py-0.5 rounded mr-2">200 OK</span> cliente atualizado
            {"\n"}
            <span className="inline-block bg-red-100 text-red-800 px-2 py-0.5 rounded mr-2">404 Not Found</span> {"{ \"error\": \"Cliente não encontrado.\" }"}
          </pre>
        </div>
  <div id="clientes-endpoint-delete" className="bg-white rounded-lg shadow p-4">
          <div className="flex items-center gap-2 mb-2">
            <span className="bg-red-600 text-white text-xs font-bold px-2 py-1 rounded">DELETE</span>
            <span className="font-mono text-sm text-black">/api/clientes/:id</span>
          </div>
          <div className="text-gray-700 text-sm mb-2">
            Remove um cliente do sistema a partir do seu ID. Esta ação é irreversível.
          </div>
          <pre className="bg-[#151b26] text-white rounded p-3 text-xs overflow-x-auto">
            <span className="inline-block bg-green-100 text-green-800 px-2 py-0.5 rounded mr-2">200 OK</span> {"{ \"message\": \"Cliente removido com sucesso.\" }"}
            {"\n"}
            <span className="inline-block bg-red-100 text-red-800 px-2 py-0.5 rounded mr-2">404 Not Found</span> {"{ \"error\": \"Cliente não encontrado.\" }"}
            {"\n"}
            <span className="inline-block bg-red-100 text-red-800 px-2 py-0.5 rounded mr-2">409 Conflict</span> {"{ \"error\": \"Não é possível remover o cliente. Existem registros relacionados (notas fiscais, etc.).\" }"}
          </pre>
        </div>
        {/* Endpoints extras */}
  <div id="clientes-endpoint-get-doc" className="bg-white rounded-lg shadow p-4">
          <div className="flex items-center gap-2 mb-2">
            <span className="bg-blue-600 text-white text-xs font-bold px-2 py-1 rounded">GET</span>
            <span className="font-mono text-sm text-black">/api/clientes/documento/:documento</span>
          </div>
          <div className="text-gray-700 text-sm mb-2">
            Busca cliente pelo CPF/CNPJ.
          </div>
          <pre className="bg-[#151b26] text-white rounded p-3 text-xs overflow-x-auto">
            <span className="inline-block bg-green-100 text-green-800 px-2 py-0.5 rounded mr-2">200 OK</span> cliente encontrado
            {"\n"}
            <span className="inline-block bg-red-100 text-red-800 px-2 py-0.5 rounded mr-2">404 Not Found</span> {"{ \"error\": \"Cliente não encontrado.\" }"}
          </pre>
        </div>
  <div id="clientes-endpoint-get-cidade" className="bg-white rounded-lg shadow p-4">
          <div className="flex items-center gap-2 mb-2">
            <span className="bg-blue-600 text-white text-xs font-bold px-2 py-1 rounded">GET</span>
            <span className="font-mono text-sm text-black">/api/clientes/cidade/:cidade</span>
          </div>
          <div className="text-gray-700 text-sm mb-2">
            Lista clientes de uma cidade.
          </div>
          <pre className="bg-[#151b26] text-white rounded p-3 text-xs overflow-x-auto">
            <span className="inline-block bg-green-100 text-green-800 px-2 py-0.5 rounded mr-2">200 OK</span> array de clientes da cidade
          </pre>
        </div>
  <div id="clientes-endpoint-get-estado" className="bg-white rounded-lg shadow p-4">
          <div className="flex items-center gap-2 mb-2">
            <span className="bg-blue-600 text-white text-xs font-bold px-2 py-1 rounded">GET</span>
            <span className="font-mono text-sm text-black">/api/clientes/estado/:estado</span>
          </div>
          <div className="text-gray-700 text-sm mb-2">
            Lista clientes de um estado.
          </div>
          <pre className="bg-[#151b26] text-white rounded p-3 text-xs overflow-x-auto">
            <span className="inline-block bg-green-100 text-green-800 px-2 py-0.5 rounded mr-2">200 OK</span> array de clientes do estado
          </pre>
        </div>
  <div id="clientes-endpoint-get-stats" className="bg-white rounded-lg shadow p-4">
          <div className="flex items-center gap-2 mb-2">
            <span className="bg-blue-600 text-white text-xs font-bold px-2 py-1 rounded">GET</span>
            <span className="font-mono text-sm text-black">/api/clientes/stats</span>
          </div>
          <div className="text-gray-700 text-sm mb-2">
            Lista clientes com estatísticas.
          </div>
          <pre className="bg-[#151b26] text-white rounded p-3 text-xs overflow-x-auto">
            <span className="inline-block bg-green-100 text-green-800 px-2 py-0.5 rounded mr-2">200 OK</span> array de clientes com estatísticas
          </pre>
        </div>
      </div>
    </section>
  );
}