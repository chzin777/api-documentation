"use client";

import { Home, KeyRound, Building2, Users, Package, FileText, UserCheck, ListOrdered, Boxes, BarChart2, Menu } from "lucide-react";
import { useState } from "react";

export default function Sidebar() {
  const [open, setOpen] = useState(false);

  // Fecha sidebar ao clicar em um link (mobile)
  const handleNavClick = () => setOpen(false);

  return (
    <>
      {/* Botão de menu para mobile */}
      <button
        className="sm:hidden fixed top-4 left-4 z-40 bg-[#151b26] p-2 rounded shadow"
        aria-label="Abrir menu"
        onClick={() => setOpen(true)}
      >
        <Menu className="w-6 h-6 text-white" />
      </button>

      {/* Overlay escuro para mobile */}
      {open && (
        <div
          className="fixed inset-0 bg-black bg-opacity-40 z-30 sm:hidden"
          onClick={() => setOpen(false)}
        />
      )}

      {/* Sidebar */}
      <aside
  className={`fixed top-0 left-0 h-screen responsive-sidebar p-2 sm:p-4 bg-[#151b26] rounded-r-lg shadow space-y-4 z-40 transition-transform duration-300 ${open ? 'translate-x-0' : '-translate-x-full'} sm:translate-x-0`}
  style={{ minWidth: 180 }}
  aria-hidden={!open && typeof window === 'undefined' ? false : (typeof window !== 'undefined' && window.innerWidth < 640 ? !open : false)}
      >
        <div className="mb-4 px-2 flex items-center justify-between">
          <span className="text-lg font-bold tracking-wide text-white">API - DOCS</span>
          {/* Botão fechar só no mobile */}
          <button
            className="sm:hidden p-1 ml-2 text-white"
            aria-label="Fechar menu"
            onClick={() => setOpen(false)}
          >
            ×
          </button>
        </div>
        <nav className="flex flex-col gap-2">
          <a href="#introducao" className="flex items-center gap-2 px-3 py-2 rounded hover:bg-[#232b3a] transition text-white" onClick={handleNavClick}>
            <Home className="w-5 h-5 text-white" /> Introdução
          </a>
          <a href="#autenticacao" className="flex items-center gap-2 px-3 py-2 rounded hover:bg-[#232b3a] transition text-white" onClick={handleNavClick}>
            <KeyRound className="w-5 h-5 text-white" /> Autenticação
          </a>
          <a href="#filiais" className="flex items-center gap-2 px-3 py-2 rounded hover:bg-[#232b3a] transition text-white" onClick={handleNavClick}>
            <Building2 className="w-5 h-5 text-white" /> Filiais
          </a>
          <a href="#clientes" className="flex items-center gap-2 px-3 py-2 rounded hover:bg-[#232b3a] transition text-white" onClick={handleNavClick}>
            <Users className="w-5 h-5 text-white" /> Clientes
          </a>
          <a href="#produtos" className="flex items-center gap-2 px-3 py-2 rounded hover:bg-[#232b3a] transition text-white" onClick={handleNavClick}>
            <Package className="w-5 h-5 text-white" /> Produtos
          </a>
          <a href="#notasfiscais" className="flex items-center gap-2 px-3 py-2 rounded hover:bg-[#232b3a] transition text-white" onClick={handleNavClick}>
            <FileText className="w-5 h-5 text-white" /> Notas Fiscais
          </a>
          <a href="#vendedores" className="flex items-center gap-2 px-3 py-2 rounded hover:bg-[#232b3a] transition text-white" onClick={handleNavClick}>
            <UserCheck className="w-5 h-5 text-white" /> Vendedores
          </a>
          <a href="#notasfiscaisitens" className="flex items-center gap-2 px-3 py-2 rounded hover:bg-[#232b3a] transition text-white" onClick={handleNavClick}>
            <ListOrdered className="w-5 h-5 text-white" /> Itens de Nota Fiscal
          </a>
          <a href="#estoque" className="flex items-center gap-2 px-3 py-2 rounded hover:bg-[#232b3a] transition text-white" onClick={handleNavClick}>
            <Boxes className="w-5 h-5 text-white" /> Estoque
          </a>
          <a href="#indicadores" className="flex items-center gap-2 px-3 py-2 rounded hover:bg-[#232b3a] transition text-white" onClick={handleNavClick}>
            <BarChart2 className="w-5 h-5 text-white" /> Indicadores
          </a>
        </nav>
      </aside>
    </>
  );
}