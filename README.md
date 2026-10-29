Use o usuário e senha pegos em Database e Network Acess

Acessar https://cloud.mongodb.com/v2 > cluster > connect > Drivers and Client  Libraries > marcar: JavaScript e Node.js Driver > Copie a string de conexão > troque o login e a senha da string de conexão."

coloque no .env

DB_URL=Cole aqu a URL de conexão
PORT=3000

---------------------------------------------------------

Para fazer teste coloque no body do thunder client:

{
  "nome": "Ana",
  "email": "ana@email.com",
  "tipo": "cliente"
}
