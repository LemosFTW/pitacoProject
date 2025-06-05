# Projeto Rei Do Pitaco - Product Engineer

<div style="text-align: center;">
  <img src="https://braziljournal.com/wp-content/uploads/2022/06/baabce01-3a8f-4934-8a48-1348f1488e43.jpg" alt="Logo Rei do Pitaco" width="200">
</div>

Este é um projeto que envolve um backend em Node.js com Express e PostgreSQL e um frontend em Next.js com React e FullCalendar.

## Como Rodar o Projeto

Siga estas instruções para configurar e executar o projeto localmente.

TODO:

## Screenshots/Vídeos

### Front-End:
<div style="text-align: center;">
<h3>1. Criando tarefa</h3>
<img src="./screenshots/Screenshot_2025-06-04_21-29-05.png" alt="" width="500">
<h3>2. DashBoard com as tarefas atuais</h3>
<img src="./screenshots/Screenshot_2025-06-04_21-29-28.png" alt="" width="500">
<h3>3. Calendário</h3>
<img src="./screenshots/Screenshot_2025-06-04_21-29-54.png" alt="" width="500">
<h3>4. Deletar tarefa</h3>
<img src="./screenshots/Screenshot_2025-06-04_21-30-44.png" alt="" width="500">
<h3>5. Após Deletar tarefa</h3>
<img src="./screenshots/Screenshot_2025-06-04_21-31-02.png" alt="" width="500">
<h3>6. Após o DragAndDrop</h3>
<img src="./screenshots/Screenshot_2025-06-04_21-31-26.png" alt="" width="500">
</div>

### Back-End:

<div style="text-align: center;">
<h3>1. Get </h3>
<img src="./screenshots/get.png" alt="" width="500">
<h3>2. Post </h3>
<img src="./screenshots/post.png" alt="" width="500">
<h3>3. Delete </h3>
<img src="./screenshots/delete.png" alt="" width="500">
<h3>4. Patch </h3>
<img src="./screenshots/patch.png" alt="" width="500">

</div>

## Decisões Técnicas e Arquitetura

Este projeto foi estruturado com uma arquitetura simples de frontend e backend (`mono-repo` básico), utilizando as seguintes tecnologias e bibliotecas:

*   **Backend:**
    *   Node.js: Ambiente de execução JavaScript.
    *   Express: Framework web minimalista e flexível para Node.js.
    *   pg: Cliente PostgreSQL para Node.js, utilizado para interagir com o banco de dados.
    *   dotenv: Carrega variáveis de ambiente de um arquivo `.env`.
    *   cors: Middleware para habilitar Cross-Origin Resource Sharing.
    *   nodemon: Monitora alterações no código e reinicia o servidor automaticamente (para desenvolvimento).
    *   uuid: Gera UUIDs para IDs dos agendamentos.
    *   Estrutura simples de rotas para CRUD (Create, Read, Delete) de agendamentos.
    *   Script de inicialização do banco de dados (`src/database/init.js`) para criar a tabela automaticamente ao iniciar o backend, garantindo a configuração em novos ambientes.

*   **Frontend:**
    *   Next.js: Framework React com renderização do lado do servidor (embora o componente principal use 'use client').
    *   React: Biblioteca para construir interfaces de usuário.
    *   FullCalendar (`@fullcalendar/react`, `@fullcalendar/daygrid`, `@fullcalendar/core`): Componente de calendário interativo para exibir os agendamentos.
    *   axios: Cliente HTTP para fazer requisições à API backend.
    *   Tailwind CSS: Framework CSS utilitário para estilização rápida.
    *   `react-beautiful-dnd`: Biblioteca para funcionalidades de arrastar e soltar (DragAndDrop) na tela Scrum.
    *   Gerenciamento de estado local com `useState` e efeitos colaterais com `useEffect`.
    *   Middleware simples (`src/middleware/axios.ts`) para configurar o Axios com a URL base da API.

## Uso de Inteligência Artificial
A IA foi utilizada para:

*   **Geração de código inicial (Kick Off):** Ajudou a criar a estrutura básica do backend com Express e a conectar com o PostgreSQL.
*   **Estruturação de ideias:** Ajudou a planejar os passos para implementar funcionalidades (ex: conexão com BD, exibição no calendário).
*   **Documentação:** Auxiliou na criação e formatação deste arquivo README, garantindo que todas as informações relevantes fossem incluídas de forma clara.
*   **Criatividade** Ajudou na estilização do Front-End.
*   **Produtividade** A utilização da IA acelerou o processo de desenvolvimento.

## Processo Criativo e de Desenvolvimento

O desenvolvimento seguiu uma abordagem iterativa

* Primeiro defini os requisitos minimos, tendo em vista que é um MVP.
* Além deles, começou-se a pensar em features que ajudariam a experiencia do usuário.
* A idéia inicial que era de apenas um app de organização pessoal, foi adaptada para um contexto de Scrum, pois se isso fosse tranformado em produto, essa ideia ajudaria para um target mais direcionado ao publico que utiliza Agile em seu cotidiano (Devs,PMs,SM,...)
* Depois começou-se a implementar o Front-End, com os dados mockados.
* Após o Front-End funcionar com os dados mockados, partiu-se para a implementação do Back-End.
* Depois de todas as rotas do Backe-End funcionando, juntou-se as duas soluções.
* Documentar.
* Docker e Deploy.

## Oque faria diferente se tivesse mais tempo e se esse projeto não fosse concepcionado como MVP
* CI/CD.
* Tests.
* Refatoração da UI.