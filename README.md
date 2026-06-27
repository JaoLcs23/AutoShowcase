# AutoShowcase - Catálogo de Veículos 🚗

Projeto desenvolvido como **Trabalho Final** para a disciplina de **Linguagem de Programação para Internet** (Uniube). Trata-se de uma Single Page Application (SPA) informativa focada em exibir modelos de carros clássicos, esportivos, picapes e SUVs de forma interativa e com design premium.

## 🌟 Funcionalidades Principais

- **Catálogo Dinâmico:** Visualização em grade de veículos com um sistema avançado de filtros por categoria e busca em tempo real pelo nome do modelo ou fabricante.
- **Página de Detalhes:** Informações completas sobre cada veículo, incluindo a história detalhada da montadora e ficha técnica (motor, potência, velocidade máxima, aceleração).
- **Comparador Inteligente:** Uma ferramenta interativa que permite colocar dois veículos lado a lado. O sistema analisa os números puros e destaca automaticamente de verde o vencedor em categorias como velocidade e potência.
- **Persistência de Navegação:** Uso avançado de parâmetros de URL (`useSearchParams`) para garantir que os filtros aplicados não sejam perdidos ao navegar entre páginas (UX premium).
- **Design Dinâmico e Responsivo:** Temas visuais que mudam dinamicamente dependendo da categoria acessada, utilizando CSS Modules puro e componentes de interface modernos.

## 🛠️ Tecnologias Utilizadas

- **[React 18](https://reactjs.org/)** (com Hooks e Lógica de Componentes)
- **[Vite](https://vitejs.dev/)** (Build tool ultrarrápido)
- **[React Router DOM](https://reactrouter.com/)** (Para navegação SPA sem recarregamento da página)
- **CSS Modules** (Para estilização e escopo local de componentes)
- **Lucide React** (Biblioteca de ícones SVG)

## 🗂️ Estrutura e Divisão do Projeto

O código-fonte foi estruturado para suportar escalabilidade, dividindo as responsabilidades lógicas em 4 pilares:

1. **Configuração e Dados (`/src/data` e Global):** Contém a configuração de rotas (`App.jsx`), estilos globais e o banco de dados principal de veículos e métricas.
2. **Componentes Base (`/src/components`):** Elementos reutilizáveis como o `CarCard` (cartão do veículo), `Navbar` e a `FilterBar`.
3. **Lógica de Catálogo (`/src/pages/Catalog`):** Onde acontece o "Lift State Up", gerenciando estados de busca e filtragem do array de carros em tempo real.
4. **Páginas Avançadas (`/src/pages/CarDetails` e `/src/pages/Compare`):** Módulos de lógica complexa, incluindo cálculo comparativo dinâmico e renderização condicional pesada.

## 🚀 Como executar o projeto localmente

Siga os passos abaixo para rodar o projeto na sua máquina:

1. **Pré-requisitos:** Certifique-se de ter o [Node.js](https://nodejs.org/) instalado.
2. **Instalação das dependências:** Abra o terminal na pasta raiz do projeto e execute:
   ```bash
   npm install
   ```
3. **Iniciando o servidor local:**
   ```bash
   npm run dev
   ```
4. **Visualização:** Abra o navegador e acesse o endereço fornecido no terminal (geralmente `http://localhost:5173/`).

---
*Desenvolvido para fins acadêmicos - Uniube.*
