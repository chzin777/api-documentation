
"use client";
import React, { useState } from "react";
import { Home, KeyRound, Building2, Users, Package, FileText, UserCheck, ListOrdered, Boxes, BarChart2, Menu, SlidersHorizontal, Briefcase, ChevronDown, ChevronRight } from "lucide-react";

export default function Sidebar() {
  const [open, setOpen] = useState(false);
  const [empresasOpen, setEmpresasOpen] = useState(false);
  const [filiaisOpen, setFiliaisOpen] = useState(false);
  const [clientesOpen, setClientesOpen] = useState(false);
  const [produtosOpen, setProdutosOpen] = useState(false);
  const [notasFiscaisOpen, setNotasFiscaisOpen] = useState(false);
  const [vendedoresOpen, setVendedoresOpen] = useState(false);
  const [notasFiscaisItensOpen, setNotasFiscaisItensOpen] = useState(false);
  const [estoqueOpen, setEstoqueOpen] = useState(false);
  const [indicadoresOpen, setIndicadoresOpen] = useState(false);
  const [rfvOpen, setRfvOpen] = useState(false);

  // Fecha sidebar ao clicar em um link (mobile) e faz scroll suave
  const handleNavClick = (e: React.MouseEvent<HTMLAnchorElement, MouseEvent>) => {
    setOpen(false);
    const href = e.currentTarget.getAttribute('href');
    if (href && href.startsWith('#')) {
      const el = document.querySelector(href);
      if (el) {
        e.preventDefault();
        el.scrollIntoView({ behavior: 'smooth', block: 'start' });
        (el as HTMLElement).focus?.();
      }
    }
  };

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
    maxWidth: 270,
    overflowY: 'auto', // Adiciona barra de rolagem vertical se necessário
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
          <button
            type="button"
            className={`flex items-center gap-2 px-3 py-2 rounded hover:bg-[#232b3a] hover:cursor-pointer transition text-white w-full ${empresasOpen ? 'bg-[#232b3a]' : ''}`}
            onClick={() => setEmpresasOpen((v) => !v)}
            aria-expanded={empresasOpen}
            aria-controls="sidebar-empresas-submenu"
            style={{ outline: 'none', border: 'none', background: 'none' }}
          >
            <Briefcase className="w-5 h-5 text-white" /> Empresas
            {empresasOpen ? <ChevronDown className="w-4 h-4 ml-1" /> : <ChevronRight className="w-4 h-4 ml-1" />}
          </button>
          <div
            id="sidebar-empresas-submenu"
            className={`pl-8 pr-2 flex flex-col gap-1 transition-all duration-300 overflow-hidden ${empresasOpen ? 'max-h-60 opacity-100 py-1' : 'max-h-0 opacity-0 py-0'}`}
            aria-hidden={!empresasOpen}
          >
            <a href="#empresas-endpoint-post" className="text-sm px-2 py-1 rounded hover:bg-[#232b3a] text-white" onClick={e => {
              e.preventDefault();
              const href = e.currentTarget.getAttribute('href');
              window.dispatchEvent(new Event('open-section-empresas'));
              setTimeout(() => {
                if (href && href.startsWith('#')) {
                  const el = document.querySelector(href);
                  if (el) {
                    el.scrollIntoView({ behavior: 'smooth', block: 'start' });
                    (el as HTMLElement).focus?.();
                  }
                }
              }, 400);
              setOpen(false);
            }}>Criar Empresa</a>
            <a href="#empresas-endpoint-get" className="text-sm px-2 py-1 rounded hover:bg-[#232b3a] text-white" onClick={e => {
              e.preventDefault();
              const href = e.currentTarget.getAttribute('href');
              window.dispatchEvent(new Event('open-section-empresas'));
              setTimeout(() => {
                if (href && href.startsWith('#')) {
                  const el = document.querySelector(href);
                  if (el) {
                    el.scrollIntoView({ behavior: 'smooth', block: 'start' });
                    (el as HTMLElement).focus?.();
                  }
                }
              }, 400);
              setOpen(false);
            }}>Listar Empresas</a>
            <a href="#empresas-endpoint-get-id" className="text-sm px-2 py-1 rounded hover:bg-[#232b3a] text-white" onClick={e => {
              e.preventDefault();
              const href = e.currentTarget.getAttribute('href');
              window.dispatchEvent(new Event('open-section-empresas'));
              setTimeout(() => {
                if (href && href.startsWith('#')) {
                  const el = document.querySelector(href);
                  if (el) {
                    el.scrollIntoView({ behavior: 'smooth', block: 'start' });
                    (el as HTMLElement).focus?.();
                  }
                }
              }, 400);
              setOpen(false);
            }}>Buscar Empresa</a>
            <a href="#empresas-endpoint-put" className="text-sm px-2 py-1 rounded hover:bg-[#232b3a] text-white" onClick={e => {
              e.preventDefault();
              const href = e.currentTarget.getAttribute('href');
              window.dispatchEvent(new Event('open-section-empresas'));
              setTimeout(() => {
                if (href && href.startsWith('#')) {
                  const el = document.querySelector(href);
                  if (el) {
                    el.scrollIntoView({ behavior: 'smooth', block: 'start' });
                    (el as HTMLElement).focus?.();
                  }
                }
              }, 400);
              setOpen(false);
            }}>Atualizar Empresa</a>
            <a href="#empresas-endpoint-delete" className="text-sm px-2 py-1 rounded hover:bg-[#232b3a] text-white" onClick={e => {
              e.preventDefault();
              const href = e.currentTarget.getAttribute('href');
              window.dispatchEvent(new Event('open-section-empresas'));
              setTimeout(() => {
                if (href && href.startsWith('#')) {
                  const el = document.querySelector(href);
                  if (el) {
                    el.scrollIntoView({ behavior: 'smooth', block: 'start' });
                    (el as HTMLElement).focus?.();
                  }
                }
              }, 400);
              setOpen(false);
            }}>Remover Empresa</a>
          </div>
          <button
            type="button"
            className={`flex items-center gap-2 px-3 py-2 rounded hover:bg-[#232b3a] hover:cursor-pointer transition text-white w-full ${rfvOpen ? 'bg-[#232b3a]' : ''}`}
            onClick={() => setRfvOpen((v) => !v)}
            aria-expanded={rfvOpen}
            aria-controls="sidebar-rfv-submenu"
            style={{ outline: 'none', border: 'none', background: 'none' }}
          >
            <SlidersHorizontal className="w-5 h-5 text-white" /> RFV
            {rfvOpen ? <ChevronDown className="w-4 h-4 ml-1" /> : <ChevronRight className="w-4 h-4 ml-1" />}
          </button>
          <div
            id="sidebar-rfv-submenu"
            className={`pl-8 pr-2 flex flex-col gap-1 transition-all duration-300 overflow-hidden ${rfvOpen ? 'max-h-32 opacity-100 py-1' : 'max-h-0 opacity-0 py-0'}`}
            aria-hidden={!rfvOpen}
          >
            <a href="#rfv-parameters" className="text-sm px-2 py-1 rounded hover:bg-[#232b3a] text-white" onClick={e => {
              e.preventDefault();
              const href = e.currentTarget.getAttribute('href');
              window.dispatchEvent(new Event('open-section-rfv-parameters'));
              setTimeout(() => {
                if (href && href.startsWith('#')) {
                  const el = document.querySelector(href);
                  if (el) {
                    el.scrollIntoView({ behavior: 'smooth', block: 'start' });
                    (el as HTMLElement).focus?.();
                  }
                }
              }, 400);
              setOpen(false);
            }}>Parâmetros</a>
            <a href="#rfv-segmentos" className="text-sm px-2 py-1 rounded hover:bg-[#232b3a] text-white" onClick={e => {
              e.preventDefault();
              const href = e.currentTarget.getAttribute('href');
              window.dispatchEvent(new Event('open-section-rfv-segmentos'));
              setTimeout(() => {
                if (href && href.startsWith('#')) {
                  const el = document.querySelector(href);
                  if (el) {
                    el.scrollIntoView({ behavior: 'smooth', block: 'start' });
                    (el as HTMLElement).focus?.();
                  }
                }
              }, 400);
              setOpen(false);
            }}>Segmentos</a>
          </div>
          <button
            type="button"
            className={`flex items-center gap-2 px-3 py-2 rounded hover:bg-[#232b3a] hover:cursor-pointer transition text-white w-full ${filiaisOpen ? 'bg-[#232b3a]' : ''}`}
            onClick={() => setFiliaisOpen((v) => !v)}
            aria-expanded={filiaisOpen}
            aria-controls="sidebar-filiais-submenu"
            style={{ outline: 'none', border: 'none', background: 'none' }}
          >
            <Building2 className="w-5 h-5 text-white" /> Filiais
            {filiaisOpen ? <ChevronDown className="w-4 h-4 ml-1" /> : <ChevronRight className="w-4 h-4 ml-1" />}
          </button>
          <div
            id="sidebar-filiais-submenu"
            className={`pl-8 pr-2 flex flex-col gap-1 transition-all duration-300 overflow-hidden ${filiaisOpen ? 'max-h-60 opacity-100 py-1' : 'max-h-0 opacity-0 py-0'}`}
            aria-hidden={!filiaisOpen}
          >
            <a href="#filiais-endpoint-get" className="text-sm px-2 py-1 rounded hover:bg-[#232b3a] text-white" onClick={e => {
              e.preventDefault();
              const href = e.currentTarget.getAttribute('href');
              window.dispatchEvent(new Event('open-section-filiais'));
              setTimeout(() => {
                if (href && href.startsWith('#')) {
                  const el = document.querySelector(href);
                  if (el) {
                    el.scrollIntoView({ behavior: 'smooth', block: 'start' });
                    (el as HTMLElement).focus?.();
                  }
                }
              }, 400);
              setOpen(false);
            }}>Listar Filiais</a>
            <a href="#filiais-endpoint-post" className="text-sm px-2 py-1 rounded hover:bg-[#232b3a] text-white" onClick={e => {
              e.preventDefault();
              const href = e.currentTarget.getAttribute('href');
              window.dispatchEvent(new Event('open-section-filiais'));
              setTimeout(() => {
                if (href && href.startsWith('#')) {
                  const el = document.querySelector(href);
                  if (el) {
                    el.scrollIntoView({ behavior: 'smooth', block: 'start' });
                    (el as HTMLElement).focus?.();
                  }
                }
              }, 400);
              setOpen(false);
            }}>Criar Filial</a>
            <a href="#filiais-endpoint-get-id" className="text-sm px-2 py-1 rounded hover:bg-[#232b3a] text-white" onClick={e => {
              e.preventDefault();
              const href = e.currentTarget.getAttribute('href');
              window.dispatchEvent(new Event('open-section-filiais'));
              setTimeout(() => {
                if (href && href.startsWith('#')) {
                  const el = document.querySelector(href);
                  if (el) {
                    el.scrollIntoView({ behavior: 'smooth', block: 'start' });
                    (el as HTMLElement).focus?.();
                  }
                }
              }, 400);
              setOpen(false);
            }}>Buscar Filial</a>
            <a href="#filiais-endpoint-put" className="text-sm px-2 py-1 rounded hover:bg-[#232b3a] text-white" onClick={e => {
              e.preventDefault();
              const href = e.currentTarget.getAttribute('href');
              window.dispatchEvent(new Event('open-section-filiais'));
              setTimeout(() => {
                if (href && href.startsWith('#')) {
                  const el = document.querySelector(href);
                  if (el) {
                    el.scrollIntoView({ behavior: 'smooth', block: 'start' });
                    (el as HTMLElement).focus?.();
                  }
                }
              }, 400);
              setOpen(false);
            }}>Atualizar Filial</a>
            <a href="#filiais-endpoint-delete" className="text-sm px-2 py-1 rounded hover:bg-[#232b3a] text-white" onClick={e => {
              e.preventDefault();
              const href = e.currentTarget.getAttribute('href');
              window.dispatchEvent(new Event('open-section-filiais'));
              setTimeout(() => {
                if (href && href.startsWith('#')) {
                  const el = document.querySelector(href);
                  if (el) {
                    el.scrollIntoView({ behavior: 'smooth', block: 'start' });
                    (el as HTMLElement).focus?.();
                  }
                }
              }, 400);
              setOpen(false);
            }}>Remover Filial</a>
          </div>
          <button
            type="button"
            className={`flex items-center gap-2 px-3 py-2 rounded hover:bg-[#232b3a] hover:cursor-pointer transition text-white w-full ${clientesOpen ? 'bg-[#232b3a]' : ''}`}
            onClick={() => setClientesOpen((v) => !v)}
            aria-expanded={clientesOpen}
            aria-controls="sidebar-clientes-submenu"
            style={{ outline: 'none', border: 'none', background: 'none' }}
          >
            <Users className="w-5 h-5 text-white" /> Clientes
            {clientesOpen ? <ChevronDown className="w-4 h-4 ml-1" /> : <ChevronRight className="w-4 h-4 ml-1" />}
          </button>
          <div
            id="sidebar-clientes-submenu"
            className={`pl-8 pr-2 flex flex-col gap-1 transition-all duration-300 overflow-hidden ${clientesOpen ? 'max-h-96 opacity-100 py-1' : 'max-h-0 opacity-0 py-0'}`}
            aria-hidden={!clientesOpen}
          >
            <a href="#clientes-endpoint-get" className="text-sm px-2 py-1 rounded hover:bg-[#232b3a] text-white" onClick={e => {
              e.preventDefault();
              const href = e.currentTarget.getAttribute('href');
              window.dispatchEvent(new Event('open-section-clientes'));
              setTimeout(() => {
                if (href && href.startsWith('#')) {
                  const el = document.querySelector(href);
                  if (el) {
                    el.scrollIntoView({ behavior: 'smooth', block: 'start' });
                    (el as HTMLElement).focus?.();
                  }
                }
              }, 400);
              setOpen(false);
            }}>Listar Clientes</a>
            <a href="#clientes-endpoint-post" className="text-sm px-2 py-1 rounded hover:bg-[#232b3a] text-white" onClick={e => {
              e.preventDefault();
              const href = e.currentTarget.getAttribute('href');
              window.dispatchEvent(new Event('open-section-clientes'));
              setTimeout(() => {
                if (href && href.startsWith('#')) {
                  const el = document.querySelector(href);
                  if (el) {
                    el.scrollIntoView({ behavior: 'smooth', block: 'start' });
                    (el as HTMLElement).focus?.();
                  }
                }
              }, 400);
              setOpen(false);
            }}>Criar Cliente</a>
            <a href="#clientes-endpoint-get-id" className="text-sm px-2 py-1 rounded hover:bg-[#232b3a] text-white" onClick={e => {
              e.preventDefault();
              const href = e.currentTarget.getAttribute('href');
              window.dispatchEvent(new Event('open-section-clientes'));
              setTimeout(() => {
                if (href && href.startsWith('#')) {
                  const el = document.querySelector(href);
                  if (el) {
                    el.scrollIntoView({ behavior: 'smooth', block: 'start' });
                    (el as HTMLElement).focus?.();
                  }
                }
              }, 400);
              setOpen(false);
            }}>Buscar Cliente</a>
            <a href="#clientes-endpoint-put" className="text-sm px-2 py-1 rounded hover:bg-[#232b3a] text-white" onClick={e => {
              e.preventDefault();
              const href = e.currentTarget.getAttribute('href');
              window.dispatchEvent(new Event('open-section-clientes'));
              setTimeout(() => {
                if (href && href.startsWith('#')) {
                  const el = document.querySelector(href);
                  if (el) {
                    el.scrollIntoView({ behavior: 'smooth', block: 'start' });
                    (el as HTMLElement).focus?.();
                  }
                }
              }, 400);
              setOpen(false);
            }}>Atualizar Cliente</a>
            <a href="#clientes-endpoint-delete" className="text-sm px-2 py-1 rounded hover:bg-[#232b3a] text-white" onClick={e => {
              e.preventDefault();
              const href = e.currentTarget.getAttribute('href');
              window.dispatchEvent(new Event('open-section-clientes'));
              setTimeout(() => {
                if (href && href.startsWith('#')) {
                  const el = document.querySelector(href);
                  if (el) {
                    el.scrollIntoView({ behavior: 'smooth', block: 'start' });
                    (el as HTMLElement).focus?.();
                  }
                }
              }, 400);
              setOpen(false);
            }}>Remover Cliente</a>
            <a href="#clientes-endpoint-get-doc" className="text-sm px-2 py-1 rounded hover:bg-[#232b3a] text-white" onClick={e => {
              e.preventDefault();
              const href = e.currentTarget.getAttribute('href');
              window.dispatchEvent(new Event('open-section-clientes'));
              setTimeout(() => {
                if (href && href.startsWith('#')) {
                  const el = document.querySelector(href);
                  if (el) {
                    el.scrollIntoView({ behavior: 'smooth', block: 'start' });
                    (el as HTMLElement).focus?.();
                  }
                }
              }, 400);
              setOpen(false);
            }}>Buscar por CPF/CNPJ</a>
            <a href="#clientes-endpoint-get-cidade" className="text-sm px-2 py-1 rounded hover:bg-[#232b3a] text-white" onClick={e => {
              e.preventDefault();
              const href = e.currentTarget.getAttribute('href');
              window.dispatchEvent(new Event('open-section-clientes'));
              setTimeout(() => {
                if (href && href.startsWith('#')) {
                  const el = document.querySelector(href);
                  if (el) {
                    el.scrollIntoView({ behavior: 'smooth', block: 'start' });
                    (el as HTMLElement).focus?.();
                  }
                }
              }, 400);
              setOpen(false);
            }}>Clientes por Cidade</a>
            <a href="#clientes-endpoint-get-estado" className="text-sm px-2 py-1 rounded hover:bg-[#232b3a] text-white" onClick={e => {
              e.preventDefault();
              const href = e.currentTarget.getAttribute('href');
              window.dispatchEvent(new Event('open-section-clientes'));
              setTimeout(() => {
                if (href && href.startsWith('#')) {
                  const el = document.querySelector(href);
                  if (el) {
                    el.scrollIntoView({ behavior: 'smooth', block: 'start' });
                    (el as HTMLElement).focus?.();
                  }
                }
              }, 400);
              setOpen(false);
            }}>Clientes por Estado</a>
            <a href="#clientes-endpoint-get-stats" className="text-sm px-2 py-1 rounded hover:bg-[#232b3a] text-white" onClick={e => {
              e.preventDefault();
              const href = e.currentTarget.getAttribute('href');
              window.dispatchEvent(new Event('open-section-clientes'));
              setTimeout(() => {
                if (href && href.startsWith('#')) {
                  const el = document.querySelector(href);
                  if (el) {
                    el.scrollIntoView({ behavior: 'smooth', block: 'start' });
                    (el as HTMLElement).focus?.();
                  }
                }
              }, 400);
              setOpen(false);
            }}>Clientes com Estatísticas</a>
          </div>
          <button
            type="button"
            className={`flex items-center gap-2 px-3 py-2 rounded hover:bg-[#232b3a] hover:cursor-pointer transition text-white w-full ${produtosOpen ? 'bg-[#232b3a]' : ''}`}
            onClick={() => setProdutosOpen((v) => !v)}
            aria-expanded={produtosOpen}
            aria-controls="sidebar-produtos-submenu"
            style={{ outline: 'none', border: 'none', background: 'none' }}
          >
            <Package className="w-5 h-5 text-white" /> Produtos
            {produtosOpen ? <ChevronDown className="w-4 h-4 ml-1" /> : <ChevronRight className="w-4 h-4 ml-1" />}
          </button>
          <div
            id="sidebar-produtos-submenu"
            className={`pl-8 pr-2 flex flex-col gap-1 transition-all duration-300 overflow-hidden ${produtosOpen ? 'max-h-60 opacity-100 py-1' : 'max-h-0 opacity-0 py-0'}`}
            aria-hidden={!produtosOpen}
          >
            <a href="#produtos-endpoint-get" className="text-sm px-2 py-1 rounded hover:bg-[#232b3a] text-white" onClick={e => {
              e.preventDefault();
              const href = e.currentTarget.getAttribute('href');
              window.dispatchEvent(new Event('open-section-produtos'));
              setTimeout(() => {
                if (href && href.startsWith('#')) {
                  const el = document.querySelector(href);
                  if (el) {
                    el.scrollIntoView({ behavior: 'smooth', block: 'start' });
                    (el as HTMLElement).focus?.();
                  }
                }
              }, 400);
              setOpen(false);
            }}>Listar Produtos</a>
            <a href="#produtos-endpoint-post" className="text-sm px-2 py-1 rounded hover:bg-[#232b3a] text-white" onClick={e => {
              e.preventDefault();
              const href = e.currentTarget.getAttribute('href');
              window.dispatchEvent(new Event('open-section-produtos'));
              setTimeout(() => {
                if (href && href.startsWith('#')) {
                  const el = document.querySelector(href);
                  if (el) {
                    el.scrollIntoView({ behavior: 'smooth', block: 'start' });
                    (el as HTMLElement).focus?.();
                  }
                }
              }, 400);
              setOpen(false);
            }}>Criar Produto</a>
            <a href="#produtos-endpoint-get-id" className="text-sm px-2 py-1 rounded hover:bg-[#232b3a] text-white" onClick={e => {
              e.preventDefault();
              const href = e.currentTarget.getAttribute('href');
              window.dispatchEvent(new Event('open-section-produtos'));
              setTimeout(() => {
                if (href && href.startsWith('#')) {
                  const el = document.querySelector(href);
                  if (el) {
                    el.scrollIntoView({ behavior: 'smooth', block: 'start' });
                    (el as HTMLElement).focus?.();
                  }
                }
              }, 400);
              setOpen(false);
            }}>Buscar Produto</a>
            <a href="#produtos-endpoint-put" className="text-sm px-2 py-1 rounded hover:bg-[#232b3a] text-white" onClick={e => {
              e.preventDefault();
              const href = e.currentTarget.getAttribute('href');
              window.dispatchEvent(new Event('open-section-produtos'));
              setTimeout(() => {
                if (href && href.startsWith('#')) {
                  const el = document.querySelector(href);
                  if (el) {
                    el.scrollIntoView({ behavior: 'smooth', block: 'start' });
                    (el as HTMLElement).focus?.();
                  }
                }
              }, 400);
              setOpen(false);
            }}>Atualizar Produto</a>
            <a href="#produtos-endpoint-delete" className="text-sm px-2 py-1 rounded hover:bg-[#232b3a] text-white" onClick={e => {
              e.preventDefault();
              const href = e.currentTarget.getAttribute('href');
              window.dispatchEvent(new Event('open-section-produtos'));
              setTimeout(() => {
                if (href && href.startsWith('#')) {
                  const el = document.querySelector(href);
                  if (el) {
                    el.scrollIntoView({ behavior: 'smooth', block: 'start' });
                    (el as HTMLElement).focus?.();
                  }
                }
              }, 400);
              setOpen(false);
            }}>Remover Produto</a>
          </div>
          <button
            type="button"
            className={`flex items-center gap-2 px-3 py-2 rounded hover:bg-[#232b3a] hover:cursor-pointer transition text-white w-full ${notasFiscaisOpen ? 'bg-[#232b3a]' : ''}`}
            onClick={() => setNotasFiscaisOpen((v) => !v)}
            aria-expanded={notasFiscaisOpen}
            aria-controls="sidebar-notasfiscais-submenu"
            style={{ outline: 'none', border: 'none', background: 'none' }}
          >
            <FileText className="w-5 h-5 text-white" /> Notas Fiscais
            {notasFiscaisOpen ? <ChevronDown className="w-4 h-4 ml-1" /> : <ChevronRight className="w-4 h-4 ml-1" />}
          </button>
          <div
            id="sidebar-notasfiscais-submenu"
            className={`pl-8 pr-2 flex flex-col gap-1 transition-all duration-300 overflow-hidden ${notasFiscaisOpen ? 'max-h-96 opacity-100 py-1' : 'max-h-0 opacity-0 py-0'}`}
            aria-hidden={!notasFiscaisOpen}
          >
            <a href="#notasfiscais-endpoint-get" className="text-sm px-2 py-1 rounded hover:bg-[#232b3a] text-white" onClick={e => {
              e.preventDefault();
              const href = e.currentTarget.getAttribute('href');
              window.dispatchEvent(new Event('open-section-notasfiscais'));
              setTimeout(() => {
                if (href && href.startsWith('#')) {
                  const el = document.querySelector(href);
                  if (el) {
                    el.scrollIntoView({ behavior: 'smooth', block: 'start' });
                    (el as HTMLElement).focus?.();
                  }
                }
              }, 400);
              setOpen(false);
            }}>Listar Notas Fiscais</a>
            <a href="#notasfiscais-endpoint-post" className="text-sm px-2 py-1 rounded hover:bg-[#232b3a] text-white" onClick={e => {
              e.preventDefault();
              const href = e.currentTarget.getAttribute('href');
              window.dispatchEvent(new Event('open-section-notasfiscais'));
              setTimeout(() => {
                if (href && href.startsWith('#')) {
                  const el = document.querySelector(href);
                  if (el) {
                    el.scrollIntoView({ behavior: 'smooth', block: 'start' });
                    (el as HTMLElement).focus?.();
                  }
                }
              }, 400);
              setOpen(false);
            }}>Criar Nota Fiscal</a>
            <a href="#notasfiscais-endpoint-get-id" className="text-sm px-2 py-1 rounded hover:bg-[#232b3a] text-white" onClick={e => {
              e.preventDefault();
              const href = e.currentTarget.getAttribute('href');
              window.dispatchEvent(new Event('open-section-notasfiscais'));
              setTimeout(() => {
                if (href && href.startsWith('#')) {
                  const el = document.querySelector(href);
                  if (el) {
                    el.scrollIntoView({ behavior: 'smooth', block: 'start' });
                    (el as HTMLElement).focus?.();
                  }
                }
              }, 400);
              setOpen(false);
            }}>Buscar Nota Fiscal</a>
            <a href="#notasfiscais-endpoint-put" className="text-sm px-2 py-1 rounded hover:bg-[#232b3a] text-white" onClick={e => {
              e.preventDefault();
              const href = e.currentTarget.getAttribute('href');
              window.dispatchEvent(new Event('open-section-notasfiscais'));
              setTimeout(() => {
                if (href && href.startsWith('#')) {
                  const el = document.querySelector(href);
                  if (el) {
                    el.scrollIntoView({ behavior: 'smooth', block: 'start' });
                    (el as HTMLElement).focus?.();
                  }
                }
              }, 400);
              setOpen(false);
            }}>Atualizar Nota Fiscal</a>
            <a href="#notasfiscais-endpoint-delete" className="text-sm px-2 py-1 rounded hover:bg-[#232b3a] text-white" onClick={e => {
              e.preventDefault();
              const href = e.currentTarget.getAttribute('href');
              window.dispatchEvent(new Event('open-section-notasfiscais'));
              setTimeout(() => {
                if (href && href.startsWith('#')) {
                  const el = document.querySelector(href);
                  if (el) {
                    el.scrollIntoView({ behavior: 'smooth', block: 'start' });
                    (el as HTMLElement).focus?.();
                  }
                }
              }, 400);
              setOpen(false);
            }}>Remover Nota Fiscal</a>
          </div>
          <button
            type="button"
            className={`flex items-center gap-2 px-3 py-2 rounded hover:bg-[#232b3a] hover:cursor-pointer transition text-white w-full ${vendedoresOpen ? 'bg-[#232b3a]' : ''}`}
            onClick={() => setVendedoresOpen((v) => !v)}
            aria-expanded={vendedoresOpen}
            aria-controls="sidebar-vendedores-submenu"
            style={{ outline: 'none', border: 'none', background: 'none' }}
          >
            <UserCheck className="w-5 h-5 text-white" /> Vendedores
            {vendedoresOpen ? <ChevronDown className="w-4 h-4 ml-1" /> : <ChevronRight className="w-4 h-4 ml-1" />}
          </button>
          <div
            id="sidebar-vendedores-submenu"
            className={`pl-8 pr-2 flex flex-col gap-1 transition-all duration-300 overflow-hidden ${vendedoresOpen ? 'max-h-60 opacity-100 py-1' : 'max-h-0 opacity-0 py-0'}`}
            aria-hidden={!vendedoresOpen}
          >
            <a href="#vendedores-endpoint-get" className="text-sm px-2 py-1 rounded hover:bg-[#232b3a] text-white" onClick={e => {
              e.preventDefault();
              const href = e.currentTarget.getAttribute('href');
              window.dispatchEvent(new Event('open-section-vendedores'));
              setTimeout(() => {
                if (href && href.startsWith('#')) {
                  const el = document.querySelector(href);
                  if (el) {
                    el.scrollIntoView({ behavior: 'smooth', block: 'start' });
                    (el as HTMLElement).focus?.();
                  }
                }
              }, 400);
              setOpen(false);
            }}>Listar Vendedores</a>
            <a href="#vendedores-endpoint-post" className="text-sm px-2 py-1 rounded hover:bg-[#232b3a] text-white" onClick={e => {
              e.preventDefault();
              const href = e.currentTarget.getAttribute('href');
              window.dispatchEvent(new Event('open-section-vendedores'));
              setTimeout(() => {
                if (href && href.startsWith('#')) {
                  const el = document.querySelector(href);
                  if (el) {
                    el.scrollIntoView({ behavior: 'smooth', block: 'start' });
                    (el as HTMLElement).focus?.();
                  }
                }
              }, 400);
              setOpen(false);
            }}>Criar Vendedor</a>
            <a href="#vendedores-endpoint-get-id" className="text-sm px-2 py-1 rounded hover:bg-[#232b3a] text-white" onClick={e => {
              e.preventDefault();
              const href = e.currentTarget.getAttribute('href');
              window.dispatchEvent(new Event('open-section-vendedores'));
              setTimeout(() => {
                if (href && href.startsWith('#')) {
                  const el = document.querySelector(href);
                  if (el) {
                    el.scrollIntoView({ behavior: 'smooth', block: 'start' });
                    (el as HTMLElement).focus?.();
                  }
                }
              }, 400);
              setOpen(false);
            }}>Buscar Vendedor</a>
            <a href="#vendedores-endpoint-put" className="text-sm px-2 py-1 rounded hover:bg-[#232b3a] text-white" onClick={e => {
              e.preventDefault();
              const href = e.currentTarget.getAttribute('href');
              window.dispatchEvent(new Event('open-section-vendedores'));
              setTimeout(() => {
                if (href && href.startsWith('#')) {
                  const el = document.querySelector(href);
                  if (el) {
                    el.scrollIntoView({ behavior: 'smooth', block: 'start' });
                    (el as HTMLElement).focus?.();
                  }
                }
              }, 400);
              setOpen(false);
            }}>Atualizar Vendedor</a>
            <a href="#vendedores-endpoint-delete" className="text-sm px-2 py-1 rounded hover:bg-[#232b3a] text-white" onClick={e => {
              e.preventDefault();
              const href = e.currentTarget.getAttribute('href');
              window.dispatchEvent(new Event('open-section-vendedores'));
              setTimeout(() => {
                if (href && href.startsWith('#')) {
                  const el = document.querySelector(href);
                  if (el) {
                    el.scrollIntoView({ behavior: 'smooth', block: 'start' });
                    (el as HTMLElement).focus?.();
                  }
                }
              }, 400);
              setOpen(false);
            }}>Remover Vendedor</a>
          </div>
          <button
            type="button"
            className={`flex items-center gap-2 px-3 py-2 rounded hover:bg-[#232b3a] hover:cursor-pointer transition text-white w-full ${notasFiscaisItensOpen ? 'bg-[#232b3a]' : ''}`}
            onClick={() => setNotasFiscaisItensOpen((v) => !v)}
            aria-expanded={notasFiscaisItensOpen}
            aria-controls="sidebar-notasfiscaisitens-submenu"
            style={{ outline: 'none', border: 'none', background: 'none' }}
          >
            <ListOrdered className="w-5 h-5 text-white" /> Itens de Nota Fiscal
            {notasFiscaisItensOpen ? <ChevronDown className="w-4 h-4 ml-1" /> : <ChevronRight className="w-4 h-4 ml-1" />}
          </button>
          <div
            id="sidebar-notasfiscaisitens-submenu"
            className={`pl-8 pr-2 flex flex-col gap-1 transition-all duration-300 overflow-hidden ${notasFiscaisItensOpen ? 'max-h-60 opacity-100 py-1' : 'max-h-0 opacity-0 py-0'}`}
            aria-hidden={!notasFiscaisItensOpen}
          >
            <a href="#notasfiscaisitens-endpoint-get" className="text-sm px-2 py-1 rounded hover:bg-[#232b3a] text-white" onClick={e => {
              e.preventDefault();
              const href = e.currentTarget.getAttribute('href');
              window.dispatchEvent(new Event('open-section-notasfiscaisitens'));
              setTimeout(() => {
                if (href && href.startsWith('#')) {
                  const el = document.querySelector(href);
                  if (el) {
                    el.scrollIntoView({ behavior: 'smooth', block: 'start' });
                    (el as HTMLElement).focus?.();
                  }
                }
              }, 400);
              setOpen(false);
            }}>Listar Itens</a>
            <a href="#notasfiscaisitens-endpoint-post" className="text-sm px-2 py-1 rounded hover:bg-[#232b3a] text-white" onClick={e => {
              e.preventDefault();
              const href = e.currentTarget.getAttribute('href');
              window.dispatchEvent(new Event('open-section-notasfiscaisitens'));
              setTimeout(() => {
                if (href && href.startsWith('#')) {
                  const el = document.querySelector(href);
                  if (el) {
                    el.scrollIntoView({ behavior: 'smooth', block: 'start' });
                    (el as HTMLElement).focus?.();
                  }
                }
              }, 400);
              setOpen(false);
            }}>Criar Item</a>
            <a href="#notasfiscaisitens-endpoint-get-id" className="text-sm px-2 py-1 rounded hover:bg-[#232b3a] text-white" onClick={e => {
              e.preventDefault();
              const href = e.currentTarget.getAttribute('href');
              window.dispatchEvent(new Event('open-section-notasfiscaisitens'));
              setTimeout(() => {
                if (href && href.startsWith('#')) {
                  const el = document.querySelector(href);
                  if (el) {
                    el.scrollIntoView({ behavior: 'smooth', block: 'start' });
                    (el as HTMLElement).focus?.();
                  }
                }
              }, 400);
              setOpen(false);
            }}>Buscar Item</a>
            <a href="#notasfiscaisitens-endpoint-put" className="text-sm px-2 py-1 rounded hover:bg-[#232b3a] text-white" onClick={e => {
              e.preventDefault();
              const href = e.currentTarget.getAttribute('href');
              window.dispatchEvent(new Event('open-section-notasfiscaisitens'));
              setTimeout(() => {
                if (href && href.startsWith('#')) {
                  const el = document.querySelector(href);
                  if (el) {
                    el.scrollIntoView({ behavior: 'smooth', block: 'start' });
                    (el as HTMLElement).focus?.();
                  }
                }
              }, 400);
              setOpen(false);
            }}>Atualizar Item</a>
            <a href="#notasfiscaisitens-endpoint-delete" className="text-sm px-2 py-1 rounded hover:bg-[#232b3a] text-white" onClick={e => {
              e.preventDefault();
              const href = e.currentTarget.getAttribute('href');
              window.dispatchEvent(new Event('open-section-notasfiscaisitens'));
              setTimeout(() => {
                if (href && href.startsWith('#')) {
                  const el = document.querySelector(href);
                  if (el) {
                    el.scrollIntoView({ behavior: 'smooth', block: 'start' });
                    (el as HTMLElement).focus?.();
                  }
                }
              }, 400);
              setOpen(false);
            }}>Remover Item</a>
          </div>
          <button
            type="button"
            className={`flex items-center gap-2 px-3 py-2 rounded hover:bg-[#232b3a] hover:cursor-pointer transition text-white w-full ${estoqueOpen ? 'bg-[#232b3a]' : ''}`}
            onClick={() => setEstoqueOpen((v) => !v)}
            aria-expanded={estoqueOpen}
            aria-controls="sidebar-estoque-submenu"
            style={{ outline: 'none', border: 'none', background: 'none' }}
          >
            <Boxes className="w-5 h-5 text-white" /> Estoque
            {estoqueOpen ? <ChevronDown className="w-4 h-4 ml-1" /> : <ChevronRight className="w-4 h-4 ml-1" />}
          </button>
          <div
            id="sidebar-estoque-submenu"
            className={`pl-8 pr-2 flex flex-col gap-1 transition-all duration-300 overflow-hidden ${estoqueOpen ? 'max-h-60 opacity-100 py-1' : 'max-h-0 opacity-0 py-0'}`}
            aria-hidden={!estoqueOpen}
          >
            <a href="#estoque-endpoint-get" className="text-sm px-2 py-1 rounded hover:bg-[#232b3a] text-white" onClick={e => {
              e.preventDefault();
              const href = e.currentTarget.getAttribute('href');
              window.dispatchEvent(new Event('open-section-estoque'));
              setTimeout(() => {
                if (href && href.startsWith('#')) {
                  const el = document.querySelector(href);
                  if (el) {
                    el.scrollIntoView({ behavior: 'smooth', block: 'start' });
                    (el as HTMLElement).focus?.();
                  }
                }
              }, 400);
              setOpen(false);
            }}>Listar Estoque</a>
            <a href="#estoque-endpoint-post" className="text-sm px-2 py-1 rounded hover:bg-[#232b3a] text-white" onClick={e => {
              e.preventDefault();
              const href = e.currentTarget.getAttribute('href');
              window.dispatchEvent(new Event('open-section-estoque'));
              setTimeout(() => {
                if (href && href.startsWith('#')) {
                  const el = document.querySelector(href);
                  if (el) {
                    el.scrollIntoView({ behavior: 'smooth', block: 'start' });
                    (el as HTMLElement).focus?.();
                  }
                }
              }, 400);
              setOpen(false);
            }}>Adicionar Item</a>
            <a href="#estoque-endpoint-get-id" className="text-sm px-2 py-1 rounded hover:bg-[#232b3a] text-white" onClick={e => {
              e.preventDefault();
              const href = e.currentTarget.getAttribute('href');
              window.dispatchEvent(new Event('open-section-estoque'));
              setTimeout(() => {
                if (href && href.startsWith('#')) {
                  const el = document.querySelector(href);
                  if (el) {
                    el.scrollIntoView({ behavior: 'smooth', block: 'start' });
                    (el as HTMLElement).focus?.();
                  }
                }
              }, 400);
              setOpen(false);
            }}>Buscar Item</a>
            <a href="#estoque-endpoint-put" className="text-sm px-2 py-1 rounded hover:bg-[#232b3a] text-white" onClick={e => {
              e.preventDefault();
              const href = e.currentTarget.getAttribute('href');
              window.dispatchEvent(new Event('open-section-estoque'));
              setTimeout(() => {
                if (href && href.startsWith('#')) {
                  const el = document.querySelector(href);
                  if (el) {
                    el.scrollIntoView({ behavior: 'smooth', block: 'start' });
                    (el as HTMLElement).focus?.();
                  }
                }
              }, 400);
              setOpen(false);
            }}>Atualizar Item</a>
            <a href="#estoque-endpoint-delete" className="text-sm px-2 py-1 rounded hover:bg-[#232b3a] text-white" onClick={e => {
              e.preventDefault();
              const href = e.currentTarget.getAttribute('href');
              window.dispatchEvent(new Event('open-section-estoque'));
              setTimeout(() => {
                if (href && href.startsWith('#')) {
                  const el = document.querySelector(href);
                  if (el) {
                    el.scrollIntoView({ behavior: 'smooth', block: 'start' });
                    (el as HTMLElement).focus?.();
                  }
                }
              }, 400);
              setOpen(false);
            }}>Remover Item</a>
          </div>
          <button
            type="button"
            className={`flex items-center gap-2 px-3 py-2 rounded hover:bg-[#232b3a] hover:cursor-pointer transition text-white w-full ${indicadoresOpen ? 'bg-[#232b3a]' : ''}`}
            onClick={() => setIndicadoresOpen((v) => !v)}
            aria-expanded={indicadoresOpen}
            aria-controls="sidebar-indicadores-submenu"
            style={{ outline: 'none', border: 'none', background: 'none' }}
          >
            <BarChart2 className="w-5 h-5 text-white" /> Indicadores
            {indicadoresOpen ? <ChevronDown className="w-4 h-4 ml-1" /> : <ChevronRight className="w-4 h-4 ml-1" />}
          </button>
          <div
            id="sidebar-indicadores-submenu"
            className={`pl-8 pr-2 flex flex-col gap-1 transition-all duration-300 overflow-hidden ${indicadoresOpen ? 'max-h-96 opacity-100 py-1' : 'max-h-0 opacity-0 py-0'}`}
            aria-hidden={!indicadoresOpen}
          >
            <a href="#indicadores-endpoint-receita-total" className="text-sm px-2 py-1 rounded hover:bg-[#232b3a] text-white" onClick={e => {
              e.preventDefault();
              const href = e.currentTarget.getAttribute('href');
              window.dispatchEvent(new Event('open-section-indicadores'));
              setTimeout(() => {
                if (href && href.startsWith('#')) {
                  const el = document.querySelector(href);
                  if (el) {
                    el.scrollIntoView({ behavior: 'smooth', block: 'start' });
                    (el as HTMLElement).focus?.();
                  }
                }
              }, 400);
              setOpen(false);
            }}>Receita Total</a>
            <a href="#indicadores-endpoint-receita-por-vendedor" className="text-sm px-2 py-1 rounded hover:bg-[#232b3a] text-white" onClick={e => {
              e.preventDefault();
              const href = e.currentTarget.getAttribute('href');
              window.dispatchEvent(new Event('open-section-indicadores'));
              setTimeout(() => {
                if (href && href.startsWith('#')) {
                  const el = document.querySelector(href);
                  if (el) {
                    el.scrollIntoView({ behavior: 'smooth', block: 'start' });
                    (el as HTMLElement).focus?.();
                  }
                }
              }, 400);
              setOpen(false);
            }}>Receita por Vendedor</a>
            <a href="#indicadores-endpoint-clientes-inativos" className="text-sm px-2 py-1 rounded hover:bg-[#232b3a] text-white" onClick={e => {
              e.preventDefault();
              const href = e.currentTarget.getAttribute('href');
              window.dispatchEvent(new Event('open-section-indicadores'));
              setTimeout(() => {
                if (href && href.startsWith('#')) {
                  const el = document.querySelector(href);
                  if (el) {
                    el.scrollIntoView({ behavior: 'smooth', block: 'start' });
                    (el as HTMLElement).focus?.();
                  }
                }
              }, 400);
              setOpen(false);
            }}>Clientes Inativos</a>
            <a href="#indicadores-endpoint-receita-por-tipo-produto" className="text-sm px-2 py-1 rounded hover:bg-[#232b3a] text-white" onClick={e => {
              e.preventDefault();
              const href = e.currentTarget.getAttribute('href');
              window.dispatchEvent(new Event('open-section-indicadores'));
              setTimeout(() => {
                if (href && href.startsWith('#')) {
                  const el = document.querySelector(href);
                  if (el) {
                    el.scrollIntoView({ behavior: 'smooth', block: 'start' });
                    (el as HTMLElement).focus?.();
                  }
                }
              }, 400);
              setOpen(false);
            }}>Receita por Tipo de Produto</a>
            <a href="#indicadores-endpoint-receita-mensal" className="text-sm px-2 py-1 rounded hover:bg-[#232b3a] text-white" onClick={e => {
              e.preventDefault();
              const href = e.currentTarget.getAttribute('href');
              window.dispatchEvent(new Event('open-section-indicadores'));
              setTimeout(() => {
                if (href && href.startsWith('#')) {
                  const el = document.querySelector(href);
                  if (el) {
                    el.scrollIntoView({ behavior: 'smooth', block: 'start' });
                    (el as HTMLElement).focus?.();
                  }
                }
              }, 400);
              setOpen(false);
            }}>Receita Mensal</a>
            <a href="#indicadores-endpoint-produtos-mais-vendidos" className="text-sm px-2 py-1 rounded hover:bg-[#232b3a] text-white" onClick={e => {
              e.preventDefault();
              const href = e.currentTarget.getAttribute('href');
              window.dispatchEvent(new Event('open-section-indicadores'));
              setTimeout(() => {
                if (href && href.startsWith('#')) {
                  const el = document.querySelector(href);
                  if (el) {
                    el.scrollIntoView({ behavior: 'smooth', block: 'start' });
                    (el as HTMLElement).focus?.();
                  }
                }
              }, 400);
              setOpen(false);
            }}>Produtos Mais Vendidos</a>
            <a href="#indicadores-endpoint-vendas-por-filial" className="text-sm px-2 py-1 rounded hover:bg-[#232b3a] text-white" onClick={e => {
              e.preventDefault();
              const href = e.currentTarget.getAttribute('href');
              window.dispatchEvent(new Event('open-section-indicadores'));
              setTimeout(() => {
                if (href && href.startsWith('#')) {
                  const el = document.querySelector(href);
                  if (el) {
                    el.scrollIntoView({ behavior: 'smooth', block: 'start' });
                    (el as HTMLElement).focus?.();
                  }
                }
              }, 400);
              setOpen(false);
            }}>Vendas por Filial</a>
          </div>
        </nav>
        <div style={{ position: 'absolute', bottom: 16, left: 0, width: '100%' }} className="px-4 mt-8">
        </div>
      </aside>
    </>
  );
}