"use client";
import { Home, KeyRound, Building2, Users, Package, FileText, UserCheck, ListOrdered, Boxes, BarChart2 } from "lucide-react";

export default function Sidebar() {
  return (
    <aside
      className="fixed top-0 left-0 h-screen w-full max-w-xs p-4 bg-[#151b26] rounded-r-lg shadow space-y-4 z-30"
      style={{ minWidth: 240 }}
    >
      <div className="mb-4 px-2">
        <span className="text-lg font-bold tracking-wide text-white">API - DOCS</span>
      </div>
      <nav className="flex flex-col gap-2">
        <a href="#introducao" className="flex items-center gap-2 px-3 py-2 rounded hover:bg-[#232b3a] transition text-white">
          <Home className="w-5 h-5 text-white" /> Introdução
        </a>
        <a href="#autenticacao" className="flex items-center gap-2 px-3 py-2 rounded hover:bg-[#232b3a] transition text-white">
          <KeyRound className="w-5 h-5 text-white" /> Autenticação
        </a>
        <a href="#filiais" className="flex items-center gap-2 px-3 py-2 rounded hover:bg-[#232b3a] transition text-white">
          <Building2 className="w-5 h-5 text-white" /> Filiais
        </a>
        <a href="#clientes" className="flex items-center gap-2 px-3 py-2 rounded hover:bg-[#232b3a] transition text-white">
          <Users className="w-5 h-5 text-white" /> Clientes
        </a>
        <a href="#produtos" className="flex items-center gap-2 px-3 py-2 rounded hover:bg-[#232b3a] transition text-white">
          <Package className="w-5 h-5 text-white" /> Produtos
        </a>
        <a href="#notasfiscais" className="flex items-center gap-2 px-3 py-2 rounded hover:bg-[#232b3a] transition text-white">
          <FileText className="w-5 h-5 text-white" /> Notas Fiscais
        </a>
        <a href="#vendedores" className="flex items-center gap-2 px-3 py-2 rounded hover:bg-[#232b3a] transition text-white">
          <UserCheck className="w-5 h-5 text-white" /> Vendedores
        </a>
        <a href="#notasfiscaisitens" className="flex items-center gap-2 px-3 py-2 rounded hover:bg-[#232b3a] transition text-white">
          <ListOrdered className="w-5 h-5 text-white" /> Itens de Nota Fiscal
        </a>
        <a href="#estoque" className="flex items-center gap-2 px-3 py-2 rounded hover:bg-[#232b3a] transition text-white">
          <Boxes className="w-5 h-5 text-white" /> Estoque
        </a>
        <a href="#indicadores" className="flex items-center gap-2 px-3 py-2 rounded hover:bg-[#232b3a] transition text-white">
          <BarChart2 className="w-5 h-5 text-white" /> Indicadores
        </a>
      </nav>
    </aside>
  );
}