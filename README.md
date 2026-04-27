# Desafio EnContact

Aplicação front-end desenvolvida em React, TypeScript e Vite para simular uma interface de atendimento com tela de login, inbox, sidebar e visualização de mensagens.

## Visão geral

O projeto está organizado para demonstrar:

- autenticação com credenciais de teste
- navegação entre login e área interna
- layout responsivo com sidebar e header
- uso de componentes reutilizáveis e serviços para consumo de dados

## Stack

- React 19
- TypeScript
- Vite
- Tailwind CSS
- React Router DOM
- next-themes
- sonner

## Como rodar

1. Instale as dependências:

```bash
pnpm install
```

2. Inicie o ambiente de desenvolvimento:

```bash
pnpm dev
```

3. Para gerar build de produção:

```bash
pnpm build
```

4. Para validar lint:

```bash
pnpm lint
```

## Credenciais de acesso

Este projeto usa credenciais fixas apenas para demonstração do fluxo de login.

- E-mail: `admin@admin`
- Senha: `admin`

## Estrutura do projeto

- `src/pages`: páginas da aplicação
- `src/layout`: layouts de tela
- `src/components`: componentes de interface
- `src/services`: acesso aos dados e integração com API
- `src/ui`: primitives e componentes base de UI
- `src/interfaces`: tipos e contratos TypeScript
- `src/styles`: estilos globais e tokens de tema

## Funcionalidades

- tela de login com validação simples
- alternância de tema claro/escuro
- sidebar responsiva para desktop e mobile
- listagem de menus e mensagens
- feedback visual com toasts

## Variáveis de ambiente

O projeto consome APIs externas por meio destas variáveis:

- `VITE_API_URL_CONTACTS`
- `VITE_API_URL_MENUS`

Se elas não estiverem configuradas, os serviços retornam mensagem de erro amigável.

