"use client";

import React, { useState } from "react";
import { Home, KeyRound, Building2, Users, Package, FileText, UserCheck, ListOrdered, Boxes, BarChart2, Menu } from "lucide-react";
export default function Sidebar() {
  const [open, setOpen] = useState(false);

  // Fecha sidebar ao clicar em um link (mobile)
  const handleNavClick = () => setOpen(false);

  // Detecta se está em tela <= 1366px
  const isMobile = typeof window !== 'undefined' ? window.innerWidth <= 1366 : false;

  // Estilos dinâmicos para sidebar e overlay
  const sidebarStyle: React.CSSProperties = {
    position: 'fixed',
    top: 0,
    left: 0,
    height: '100vh',
    minWidth: 180,
    zIndex: 40,
    background: '#151b26',
    borderRadius: '0 0.5rem 0.5rem 0',
    boxShadow: '0 2px 8px 0 rgba(0,0,0,0.10)',
    padding: isMobile ? 12 : 16,
    transform: isMobile ? (open ? 'translateX(0)' : 'translateX(-100%)') : 'translateX(0)',
    transition: 'transform 0.3s',
    width: isMobile ? '80vw' : 320,
    maxWidth: 320,
  };
  const overlayStyle: React.CSSProperties = {
    position: 'fixed',
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    background: 'rgba(0,0,0,0.4)',
    zIndex: 30,
    display: open ? 'block' : 'none',
  };

  return (
    <>
      {/* Botão de menu para mobile */}
      {isMobile && (
        <button
          style={{ position: 'fixed', top: 16, left: 16, zIndex: 41, background: '#151b26', padding: 8, borderRadius: 8, boxShadow: '0 2px 8px 0 rgba(0,0,0,0.10)' }}
          aria-label="Abrir menu"
          onClick={() => setOpen(true)}
        >
          <Menu className="w-6 h-6 text-white" />
        </button>
      )}

      {/* Overlay escuro para mobile */}
      {isMobile && open && (
        <div style={overlayStyle} onClick={() => setOpen(false)} />
      )}

      {/* Sidebar */}
      <aside style={sidebarStyle} aria-hidden={isMobile ? !open : false}>
        <div className="mb-4 px-2 flex items-center justify-between">
          <span className="text-lg font-bold tracking-wide text-white">API - DOCS</span>
          {/* Botão fechar só no mobile */}
          {isMobile && (
            <button
              className="p-1 ml-2 text-white"
              aria-label="Fechar menu"
              onClick={() => setOpen(false)}
            >
              ×
            </button>
          )}
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