Desafio Técnico - Página "Indique e Ganhe"
Projeto desenvolvido como solução para o Desafio Técnico da vaga de Desenvolvedor(a). A aplicação é uma landing page completa e funcional para o programa "Indique e Ganhe", construída com React e utilizando o ecossistema Google (Forms e Apps Script) como uma solução de backend serverless para a recolha de dados e envio de e-mails de confirmação.

🚀 Sobre a Solução Implementada
O objetivo principal era criar uma interface web onde um utilizador (indicador) pudesse submeter os seus dados e indicar até 5 amigos. Para além de uma interface moderna e responsiva, o projeto precisava de uma forma de armazenar esses dados.

A solução implementada utiliza o Google Forms como uma base de dados "serverless". O formulário React não submete os dados para um servidor tradicional, mas sim para um Google Form oculto. Isto aciona automaticamente a gravação dos dados numa Folha de Cálculo Google associada.

Para a funcionalidade de notificação por e-mail, um Google Apps Script é ativado sempre que uma nova linha é adicionada à folha de cálculo. O script lê os dados do novo indicado e envia um e-mail de confirmação personalizado, utilizando o serviço MailApp do Google.

Esta abordagem é:

Sem custos: Utiliza apenas ferramentas gratuitas do Google.

Robusta e Fiável: Aproveita a infraestrutura segura do Google.

Serverless: Não requer a configuração ou manutenção de um servidor de backend.

Adicionalmente, foi integrada a API do Gemini para gerar uma mensagem de agradecimento personalizada no modal de sucesso, enriquecendo a experiência do utilizador.

✨ Funcionalidades
Formulário Dinâmico: Permite ao utilizador adicionar ou remover campos para até 5 indicados.

Validação Abrangente: Validação em tempo real para:

Campos obrigatórios.

Formato de e-mail e telefone (com máscara para o padrão brasileiro).

Exigência de nome e sobrenome.

Duplicação de dados (nome, e-mail, telefone) entre todos os participantes.

Backend com Google Forms: Submissão de dados segura e direta para uma Folha de Cálculo Google.

Envio de E-mail Automatizado: Utiliza o Google Apps Script para enviar e-mails de confirmação a cada amigo indicado.

Integração com IA: Utiliza a API do Gemini para criar uma mensagem de sucesso dinâmica e personalizada.

Design Responsivo: Interface totalmente funcional em desktops, tablets e telemóveis.

🛠️ Tecnologias Utilizadas
Tecnologia

Contexto de Utilização

React.js

Biblioteca principal para a construção de uma interface de utilizador reativa e componentizada.

Vite

Ferramenta de build moderna que proporciona um ambiente de desenvolvimento extremamente rápido.

Tailwind CSS

Framework CSS utility-first para a criação de um design moderno e responsivo de forma eficiente.

Google Forms

Utilizado como o endpoint que recebe os dados do formulário React.

Google Sheets

Funciona como a base de dados, armazenando todas as indicações de forma organizada.

Google Apps Script

A lógica de backend que é acionada para processar os dados e enviar os e-mails de confirmação.

Gemini API

Utilizada para a geração de texto por IA, tornando a mensagem de sucesso mais interativa e pessoal.