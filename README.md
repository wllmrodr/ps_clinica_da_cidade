# Desafio Técnico - Página "Indique e Ganhe" (Clínica da Cidade)

### 🚀 **Projeto disponível online em:** [**https://ps-clinica-da-cidade.vercel.app/**](https://ps-clinica-da-cidade.vercel.app/)

> O que começou como o desafio de criar uma simples landing page evoluiu para uma aplicação web full-stack, interativa e segura. Este README documenta a jornada e o fluxo de trabalho de desenvolvimento moderno adotado, desde a concepção do design até a publicação (deploy) final.

---

### 💡 Conhecimentos Envolvidos no Projeto

A construção deste projeto foi guiada por uma jornada de refinamento contínuo, com o objetivo de entregar uma solução que não só cumprisse os requisitos, mas que também se alinhasse com a identidade visual da **Clínica da Cidade** e utilizasse tecnologias modernas de forma criativa.

<br>

| Etapa | Descrição |
| :--- | :--- |
| **1. Design e Identidade Visual** | A primeira etapa foi criar uma interface que refletisse o profissionalismo e a confiança da marca. O cabeçalho, as cor Ciano, a tipografia e o logo foram cuidadosamente recriados para serem fiéis ao site oficial da empresa, incluindo os links para as redes sociais da empresa. |
| **2. Backend Serverless** | Para a recolha de dados e envio de e-mails, foi implementada uma arquitetura serverless e sem custos utilizando o ecossistema Google, com Google Forms e Google Sheets. |
| **3. Automação de E-mails** | Um Google Apps Script é acionado automaticamente a cada nova submissão, lendo os dados da folha de cálculo e enviando um e-mail de confirmação personalizado para cada amigo indicado. |
| **4. Inteligência Artificial** | Para enriquecer a experiência, foi integrada a API do Gemini, que gera uma mensagem de agradecimento única e calorosa após a submissão, tornando a interação mais humana. |
| **5. Segurança e Deploy** | Todas as chaves de API são geridas através de Variáveis de Ambiente. O projeto foi publicado na Vercel, garantindo que a aplicação pudesse ser testada por qualquer pessoa, em qualquer lugar. |

### ✨ Funcionalidades

* **Formulário Dinâmico**: Permite ao utilizador adicionar ou remover campos para até 5 indicados.
* **Validação Abrangente**: Validação em tempo real para campos obrigatórios, formato de e-mail, máscara de telefone, exigência de sobrenome e duplicação de dados.
* **Backend com Google Forms**: Submissão de dados segura e direta para uma Folha de Cálculo Google.
* **Envio de E-mail Automatizado**: Utiliza o Google Apps Script para enviar e-mails de confirmação.
* **Integração com IA (Gemini)**: Cria uma mensagem de sucesso dinâmica e personalizada.
* **Design Fiel à Marca**: Interface e componentes inspirados no site oficial da Clínica da Cidade.
* **Totalmente Responsivo**: Funcional em desktops, tablets e telemóveis.

### 🛠️ Tecnologias Utilizadas

| Tecnologia | Contexto de Utilização |
| :--- | :--- |
| **React.js** | Biblioteca principal para a construção da interface reativa. |
| **Vite** | Ferramenta de build para um ambiente de desenvolvimento rápido. |
| **Tailwind CSS** | Framework CSS para um design moderno e responsivo. |
| **Google Forms** | Utilizado como o endpoint que recebe os dados do formulário. |
| **Google Sheets**| Funciona como a base de dados, armazenando as indicações. |
| **Google Apps Script**| A lógica de backend que envia os e-mails de confirmação. |
| **Gemini API** | Utilizada para a geração de texto por IA. |
| **Vercel** | Plataforma de alojamento para a publicação e deploy contínuo da aplicação. |

### ⚙️ Instruções de Execução

A aplicação está disponível publicamente e pode ser acedida sem qualquer configuração.

> #### **Acesso Online**
> * **URL**: [**https://ps-clinica-da-cidade.vercel.app/**](https://ps-clinica-da-cidade.vercel.app/)

#### **Execução Local**

Caso deseje executar o projeto na sua máquina local:

1.  **Clone o repositório:**
    ```bash
    git clone [https://github.com/wllmrodr/ps_clinica_da_cidade.git](https://github.com/wllmrodr/ps_clinica_da_cidade.git)
    ```

2.  **Navegue até a pasta do projeto:**
    ```bash
    cd ps-clinica-da-cidade
    ```

3.  **Instale as dependências:**
    ```bash
    npm install
    ```

4.  **Configure as Variáveis de Ambiente:**
    * Crie uma cópia do ficheiro `.env.example` e renomeie-a para `.env`.
    * Preencha as variáveis `VITE_GEMINI_API_KEY` e `VITE_GOOGLE_FORM_URL` com as suas próprias chaves e URLs.

5.  **Inicie o servidor de desenvolvimento:**
    ```bash
    npm run dev
    ```


    A aplicação provavelmente rodará em `http://localhost:5173`.






