export default function SectionAuth() {
  return (
  <section id="autenticacao" className="responsive-section">
  <h2 className="responsive-h2 font-bold mb-4 text-black">Autenticação</h2>
  <div className="bg-white rounded-lg shadow responsive-card mb-4">
        <div className="flex items-center gap-2 mb-2">
          <span className="bg-blue-600 text-white text-xs font-bold px-2 py-1 rounded">POST</span>
          <span className="font-mono text-sm text-black">/api/auth/login</span>
        </div>
        <div className="text-gray-700 text-sm mb-2">Realiza a autenticação do usuário. Informe e-mail e senha válidos para receber um token de acesso JWT, utilizado para acessar os demais endpoints protegidos.</div>
  <pre className="bg-[#151b26] text-white rounded p-3 responsive-pre overflow-x-auto">
          <span className="inline-block bg-green-100 text-green-800 px-2 py-0.5 rounded mr-2">201 Created</span>{` Retorna o usuário autenticado:`}<br />{`{
  "token": "jwt.token.aqui",
  "user": {
    "id": 1,
    "email": "usuario@exemplo.com"
  }
}`}
          <br /><span className="inline-block bg-red-100 text-red-800 px-2 py-0.5 rounded mr-2">401 Unauthorized</span>{` { "error": "Credenciais inválidas." }`}
        </pre>
      </div>
    </section>
  );
}
