"use client";
import { useState, useEffect } from "react";
import { ChevronDown, ChevronRight } from "lucide-react";

export default function SectionIndicadores() {
  const [open, setOpen] = useState(false);

  // Permite abrir programaticamente a section ao clicar no submenu da sidebar
  useEffect(() => {
    const handler = () => setOpen(true);
    window.addEventListener('open-section-indicadores', handler);
    return () => window.removeEventListener('open-section-indicadores', handler);
  }, []);
  return (
  <section id="indicadores" className="responsive-section">
      <div className="w-full mb-2">
        <button
          type="button"
          className="flex items-center gap-2 w-full text-left focus:outline-none bg-white bg-opacity-80 shadow-md rounded-lg px-4 py-2 transition-all duration-300 hover:cursor-pointer"
          style={{ boxShadow: '0 2px 8px 0 rgba(0,0,0,0.10)' }}
          onClick={() => setOpen((v) => !v)}
          aria-expanded={open}
          aria-controls="section-indicadores-content"
        >
          <span className="flex items-center text-xl font-bold text-black">
            {open ? (
              <ChevronDown className="w-5 h-5 mr-2" />
            ) : (
              <ChevronRight className="w-5 h-5 mr-2" />
            )}
            Indicadores
          </span>
        </button>
      </div>

      <div
        id="section-indicadores-content"
        className={`transition-all duration-500 ease-in-out overflow-hidden ${open ? 'max-h-[2000px] opacity-100 mt-2' : 'max-h-0 opacity-0'} space-y-4`}
        aria-hidden={!open}
      >
        {/* Sempre renderiza os cards para animar abrir/fechar */}
  <div id="indicadores-endpoint-receita-total" className="bg-white rounded-lg shadow responsive-card">
          <div className="flex items-center gap-2 mb-2">
            <span className="bg-blue-600 text-white text-xs font-bold px-2 py-1 rounded">GET</span>
            <span className="font-mono text-sm text-black">/api/indicadores/receita-total</span>
          </div>
          <div className="text-gray-700 text-sm mb-2">Receita total de todas as notas fiscais.</div>
          <pre className="bg-[#151b26] text-white rounded p-3 responsive-pre overflow-x-auto">
            <span className="inline-block bg-green-100 text-green-800 px-2 py-0.5 rounded mr-2">200 OK</span>
            {`
{
  "receitaTotal": 1250000.00
}`}
          </pre>
        </div>
  <div id="indicadores-endpoint-receita-por-vendedor" className="bg-white rounded-lg shadow p-4">
          <div className="flex items-center gap-2 mb-2">
            <span className="bg-blue-600 text-white text-xs font-bold px-2 py-1 rounded">GET</span>
            <span className="font-mono text-sm text-black">/api/indicadores/receita-por-vendedor</span>
          </div>
          <div className="text-gray-700 text-sm mb-2">Receita agrupada por vendedor.</div>
          <pre className="bg-[#151b26] text-white rounded p-3 text-xs overflow-x-auto">
            <span className="inline-block bg-green-100 text-green-800 px-2 py-0.5 rounded mr-2">200 OK</span>
            {`
[
  {
    "vendedorId": 1,
    "nomeVendedor": "João Vendas",
    "receitaTotal": 450000.00
  },
  {
    "vendedorId": 2,
    "nomeVendedor": "Maria Vendas",
    "receitaTotal": 300000.00
  }
]`}
          </pre>
        </div>
  <div id="indicadores-endpoint-clientes-inativos" className="bg-white rounded-lg shadow p-4">
          <div className="flex items-center gap-2 mb-2">
            <span className="bg-blue-600 text-white text-xs font-bold px-2 py-1 rounded">GET</span>
            <span className="font-mono text-sm text-black">/api/indicadores/clientes-inativos?dias=90</span>
          </div>
          <div className="text-gray-700 text-sm mb-2">Clientes inativos há 90 dias.</div>
          <pre className="bg-[#151b26] text-white rounded p-3 text-xs overflow-x-auto">
            <span className="inline-block bg-green-100 text-green-800 px-2 py-0.5 rounded mr-2">200 OK</span>
            {`
[
  {
    "id": 5,
    "nome": "Cliente Inativo",
    "cpfCnpj": "123.456.789-00",
    "cidade": "São Paulo",
    "estado": "SP"
    // ...outros campos do cliente
  }
]`}
          </pre>
        </div>
  <div id="indicadores-endpoint-receita-por-tipo-produto" className="bg-white rounded-lg shadow p-4">
          <div className="flex items-center gap-2 mb-2">
            <span className="bg-blue-600 text-white text-xs font-bold px-2 py-1 rounded">GET</span>
            <span className="font-mono text-sm text-black">/api/indicadores/receita-por-tipo-produto</span>
          </div>
          <div className="text-gray-700 text-sm mb-2">Receita agrupada por tipo de produto.</div>
          <pre className="bg-[#151b26] text-white rounded p-3 text-xs overflow-x-auto">
            <span className="inline-block bg-green-100 text-green-800 px-2 py-0.5 rounded mr-2">200 OK</span>
            {`
{
  "Maquina": 800000.00,
  "Peca": 150000.00,
  "Servico": 300000.00
}`}
          </pre>
        </div>
  <div id="indicadores-endpoint-receita-mensal" className="bg-white rounded-lg shadow p-4">
          <div className="flex items-center gap-2 mb-2">
            <span className="bg-blue-600 text-white text-xs font-bold px-2 py-1 rounded">GET</span>
            <span className="font-mono text-sm text-black">/api/indicadores/receita-mensal</span>
          </div>
          <div className="text-gray-700 text-sm mb-2">Receita mensal do ano atual.</div>
          <pre className="bg-[#151b26] text-white rounded p-3 text-xs overflow-x-auto">
            <span className="inline-block bg-green-100 text-green-800 px-2 py-0.5 rounded mr-2">200 OK</span>
            {`
[
  { "mes": "2025-01", "receita": 100000.00 },
  { "mes": "2025-02", "receita": 120000.00 }
  // ...
]`}
          </pre>
        </div>
  <div id="indicadores-endpoint-produtos-mais-vendidos" className="bg-white rounded-lg shadow p-4">
          <div className="flex items-center gap-2 mb-2">
            <span className="bg-blue-600 text-white text-xs font-bold px-2 py-1 rounded">GET</span>
            <span className="font-mono text-sm text-black">/api/indicadores/produtos-mais-vendidos?limit=10</span>
          </div>
          <div className="text-gray-700 text-sm mb-2">Produtos mais vendidos (top 10).</div>
          <pre className="bg-[#151b26] text-white rounded p-3 text-xs overflow-x-auto">
            <span className="inline-block bg-green-100 text-green-800 px-2 py-0.5 rounded mr-2">200 OK</span>
            {`
[
  {
    "produtoId": 1,
    "descricao": "Escavadeira CAT 320",
    "quantidadeVendida": 125
  }
]`}
          </pre>
        </div>
  <div id="indicadores-endpoint-vendas-por-filial" className="bg-white rounded-lg shadow p-4">
          <div className="flex items-center gap-2 mb-2">
            <span className="bg-blue-600 text-white text-xs font-bold px-2 py-1 rounded">GET</span>
            <span className="font-mono text-sm text-black">/api/indicadores/vendas-por-filial</span>
          </div>
          <div className="text-gray-700 text-sm mb-2">Performance de vendas por filial.</div>
          <pre className="bg-[#151b26] text-white rounded p-3 text-xs overflow-x-auto">
            <span className="inline-block bg-green-100 text-green-800 px-2 py-0.5 rounded mr-2">200 OK</span>
            {`
[
  {
    "filialId": 1,
    "nomeFilial": "Matriz São Paulo",
    "quantidadeNotas": 85,
    "valorTotal": 1500000.00
  }
]`}
          </pre>
        </div>
      </div>
    </section>
  );
}