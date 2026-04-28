# Desafio EnContact (resumo)

Pequena aplicação front-end em React + TypeScript que demonstra um fluxo de login (demo), um painel com sidebar e listagem de mensagens. Projetada como entrega de desafio técnico — focada em composição de componentes, tema escuro/claro e consumo básico de serviços.

## Como rodar (resumo rápido)

1. Instale dependências:

```bash
pnpm install
```

2. Inicie em dev:

```bash
pnpm dev
```

3. Lint/Build:

```bash
pnpm lint
pnpm build
```

## Credenciais de acesso (demo)

- E-mail: `admin@admin`
- Senha: `admin`

## Estrutura curta

- `src/pages`, `src/layout`, `src/components`, `src/ui`, `src/services`, `src/interfaces`, `src/styles`.

## Variáveis de ambiente

- `VITE_API_URL_CONTACTS`
- `VITE_API_URL_MENUS`

Se não fornecidas, os serviços mostram mensagens de erro amigáveis.

