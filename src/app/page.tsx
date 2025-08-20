
import React from "react";
import Sidebar from "./components/Sidebar";
import SectionAuth from "./components/SectionAuth";
import SectionFiliais from "./components/SectionFiliais";
import SectionClientes from "./components/SectionClientes";
import SectionProdutos from "./components/SectionProdutos";
import SectionVendas from "./components/SectionVendas";
import SectionIndicadores from "./components/SectionIndicadores";
import SectionVendedores from "./components/SectionVendedores";
import SectionEstoque from "./components/SectionEstoque";
import SectionNotasFiscaisItens from "./components/SectionNotasFiscaisItens";

export default function Home() {
  return (
    <div className="min-h-screen bg-gray-50 flex">
      <Sidebar />
      <main className="flex-1 p-8 max-w-5xl mx-auto">
        <section id="introducao" className="mb-8">
          <h1 className="text-3xl font-bold mb-2 text-black">Bem-vindo à API do Máquina de Vendas</h1>
          <p className="text-gray-700">Esta API permite gerenciar vendas, estoque, clientes, produtos, filiais, vendedores e notas fiscais. Utilize os endpoints abaixo para integrar com seu sistema.</p>
          <div className="mt-2 text-sm text-black">Base URL: <span className="font-mono bg-blue-200 px-2 py-1 rounded">http://localhost:3000/api</span></div>
        </section>
  <SectionAuth />
  <SectionFiliais />
  <SectionClientes />
  <SectionProdutos />
  <SectionVendas />
  <SectionVendedores />
  <SectionNotasFiscaisItens />
  <SectionEstoque />
  <SectionIndicadores />
      </main>
    </div>
  );
}
