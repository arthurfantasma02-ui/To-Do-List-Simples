# Todo React Avançado

Uma aplicação de lista de tarefas (Todo List) com foco em Hooks, Hooks customizados, Context API e memoization — estilo "caderno digital" (planner diário).

## 🎯 Objetivo
Desenvolver uma Todo List utilizando recursos avançados do React para organização, reuso de lógica e performance.

## ✨ Funcionalidades
- Adicionar nova tarefa
- Marcar tarefa como concluída
- Remover tarefas
- Filtrar tarefas: Todas / Concluídas / Pendentes
- Persistência no `localStorage` via Hook customizado

## 🧩 Tecnologias
- React + Vite
- Hooks: `useState`, `useEffect`, `useContext`
- Context API
- Hook customizado: `useLocalStorage`
- Memoization: `React.memo` / `useMemo`
- CSS (estilo caderno digital)

## Estrutura do projeto
src/
├─ components/
│ ├─ TodoForm.jsx ← Formulário para adicionar novas tarefas
│ ├─ TodoItem.jsx ← Cada item da lista (com botão de remover e marcar)
│ └─ TodoFilters.jsx ← Botões para filtrar as tarefas
│
├─ context/
│ └─ TodoContext.jsx ← Gerencia o estado global da lista via Context API
│
├─ hooks/
│ └─ useLocalStorage.js ← Hook customizado para salvar tarefas no localStorage
│
├─ App.jsx ← Componente principal que junta tudo
├─ App.css ← Estilos (tema de caderno digital)
└─ main.jsx ← Ponto de entrada da aplicação

## 🚀 Instruções para rodar o projeto localmente

1. **Clone o repositório**:
   ```bash
   git clone https://github.com/<seu-usuario>/todo-react-avancado.git
Entre na pasta do projeto:

bash
Copiar código
cd todo-react-avancado
Instale as dependências:

bash
Copiar código
npm install
Rode a aplicação em modo de desenvolvimento:

bash
Copiar código
npm run dev
Abra no navegador:
Acesse o endereço mostrado no terminal, geralmente:

arduino
Copiar código
http://localhost:5173