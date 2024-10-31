# Utilizar template eslint & prettier em novos projetos

Eu criei este repositório para adicionar configurações de formatação e correção de erros no código através do Prettier e ESLint. Como são muitas configurações e pacotes a serem baixados, eu criei este repositório explicando como utilizá-lo e também adicionei aqui os arquivos de configuração do Prettier e ESLint com as minhas preferências. Utilize, caso queira.

## Instalação do Prettier e ESLint

Caso você deseje, você pode instalar o prettier e o eslint globalmente:

`npm install -g eslint prettier`

Instalar prettier e eslint localmente como desenvolvedor:

`npm install --save-dev eslint prettier`

## Instalação Adicional

É necessário instalar algumas dependências adicionais. Elas ajudam a integrar o Prettier ao ESlint e configuram o ambiente de desenvolvimento para aplicar e manter a formatação e qualidade do código. Esta é a lista de pacotes comuns e como instalá-los:

1. **Dependências Básicas**  
   - **ESLint**: O linting de código.  
   - **Prettier**: O formatador de código.

2. **Dependências para Integração entre ESLint e Prettier**  
   - **eslint-plugin-prettier**: Faz com que o ESLint execute o Prettier como uma regra de linting.  
   - **eslint-config-prettier**: Desativa regras do ESLint que podem entrar em conflito com o Prettier.

3. **Dependências Adicionais para Projetos com React e TypeScript**
   - Para React:  
     - **eslint-plugin-react**: Regras específicas para React.  
     - **eslint-plugin-react-hooks**: Regras para hooks do React.
   - Para TypeScript:  
     - **@typescript-eslint/parser**: Permite que o ESLint analise código TypeScript.

### Instalação

Exemplo de como instalar todas as dependências para um projeto que utiliza React com Typescript e outro com NextJS.

### Node

**Usando JavaScript:**

`npm install --save-dev eslint-plugin-prettier eslint-config-prettier globals @eslint/js`

**Usando TypeScript:**

`npm install eslint-plugin-prettier eslint-config-prettier @typescript-eslint/parser @typescript-eslint/eslint-plugin --save-dev`

### React com Typescript

`npm install --save-dev eslint-plugin-prettier eslint-config-prettier @typescript-eslint/parser @typescript-eslint/eslint-plugin eslint-plugin-react eslint-plugin-react-hooks`

### NextJS com Typescript

Para projetos Next.js, as dependências básicas para integrar o ESLint e o Prettier são semelhantes, mas você deve adicionar a configuração específica para Next.js.

`npm install --save-dev eslint-plugin-prettier eslint-config-prettier @typescript-eslint/parser @typescript-eslint/eslint-plugin eslint-plugin-react eslint-plugin-react-hooks eslint-config-next`

Por fim, todos os projetos precisam executar os comandos:
- `echo {} > .prettierrc`: Este criará o arquivo `.prettierrc` para receber as configurações ou você pode configurar o prettier diretamente no arquivo de configuração do eslint, como demonstrado abaixo.
- `npx eslint --init`: Este criará o arquivo `eslint.json` para receber as configurações. Caso você utilize Vite na sua aplicação React, um arquivo eslint no formato JavaScript será gerado.

A configuração do `prettier` pode acontecer tanto utilizando o arquivo `.prettierrc` como um arquivo JSON ou configurá-lo diretamente no `eslint.config.mjs` assim:

```ts
    rules: {
      "prettier/prettier": ["error", {
        singleQuote: false,
        semi: true,
        trailingComma: "es5",
        endOfLine: "lf",
        tabWidth: 2
      }], // Aplica as regras do Prettier
    },
```


## Vite

Após a instalação dos pacotes, é necessário configurar o plugin do Prettier no `eslint.config.js`, adicionando o plugin Prettier:

```js
extends: [
  "eslint:recommended", // Recomendado para JS
  "plugin:@typescript-eslint/recommended", // Regras para TS
  "plugin:prettier/recommended", // Regras do Prettier
  "plugin:react/recommended", // Regras React
  "plugin:react-hooks/recommended", // Regras React Hooks
],
```

## Explicação das bibliotecas

- **eslint-plugin-prettier**:
  - Integra o Prettier ao ESLint, permitindo que o ESLint exiba erros de formatação como avisos de lint.

- **eslint-config-prettier**:
  - Desativa regras conflitantes entre ESLint e Prettier, permitindo que o Prettier controle a formatação do código.

- **@typescript-eslint/parser**:
  - Parser que permite ao ESLint entender e analisar código TypeScript.

- **@typescript-eslint/eslint-plugin**:
  - Plugin que adiciona regras específicas para TypeScript ao ESLint, como verificações de tipos.

- **eslint-plugin-react**:
  - Fornece regras específicas para o desenvolvimento em React, garantindo boas práticas e padrões.

- **eslint-plugin-react-hooks**:
  - Plugin que aplica regras relacionadas aos hooks do React, garantindo que estejam sendo usados corretamente.

- **eslint-config-next**:
  - Configuração oficial do ESLint para projetos Next.js. Ele aplica regras específicas e otimizações recomendadas para o desenvolvimento com o framework Next.js.

## Utilizando o template

Para utilizar este template, basta utilizar o código abaixo nos seus novos projetos.

`cp -r /caminho/para/template-eslint-prettier/\* /caminho/para/novo-projeto/`

E para baixar os pacotes, você também pode acessar o **package.json** neste repositório e baixar as dependências de seu interesse. Verifique, antes de instalar, qual linguagem e framework você está utilizando, pois irá variar caso você esteja utilizando JavaScript ou Typescript e React-DOM ou NextJS.

## Configurações do VSCode

Certifique-se também que as configurações globais estejam no **settings.json** do VSCode.

Para visualizar as configurações do VSCode, utilize o atalho "Ctrl + p", escreva ">" e em seguida:

> Preferences: Open User Settings (JSON)

Adicione as seguintes linhas ao **settings.json**:

```json
{
  "editor.codeActionsOnSave": {
    "source.fixAll": "explicit"
  },
  "eslint.format.enable": true,
  "editor.defaultFormatter": "esbenp.prettier-vscode",
  "editor.formatOnSave": true,
  "eslint.validate": [
    "javascript",
    "javascriptreact",
    "typescript",
    "typescriptreact"
  ]
}
```

## Configurações Específicas para Linguagens

Se sua configuração do VS Code tiver formatadores padrão diferentes para várias linguagens, você verá algo semelhante ao exemplo abaixo:

```json
"[html]": {
    "editor.defaultFormatter": "esbenp.prettier-vscode"
},
"[javascriptreact]": {
    "editor.defaultFormatter": "esbenp.prettier-vscode"
},
"[typescript]": {
    "editor.defaultFormatter": "esbenp.prettier-vscode"
},
"[javascript]": {
    "editor.defaultFormatter": "esbenp.prettier-vscode"
},
"[typescriptreact]": {
    "editor.defaultFormatter": "esbenp.prettier-vscode"
},
"[json]": {
    "editor.defaultFormatter": "esbenp.prettier-vscode"
}
```

Se necessário, ajuste ou remova essas configurações específicas para garantir que a responsabilidade da formatação fique exclusivamente com o Prettier.

## Bônus: Configurando o Prettier ao TailwindCSS

É possível configurar o prettier ao Tailwind, para que o prettier organize as classes utilitárias, como adicionando estilizações de hover e responsividade no final, tamanhos e medidas no início, etc. Dessa forma o código fica mais legível e organizado. Além disso, auxilia para que não tenhamos que nos preocupar com essa formatação, deixando ela por conta to Prettier.

Para configurá-la, é necessário que o plugin do Prettier já esteja instalado como mostrado no início dessa documentação. Em seguinta precisamos instalar o plugin:

`npm i prettier-plugin-tailwindcss -D`

Por fim, adicionar essa linha ao seu arquivo `.prettierrcc`: 
```json
{
    "plugins": ["prettier-plugin-tailwindcss"]
}
```
Este arquivo está neste repositório e lá é mostrado como ele deve ser configurado.

## Responsabilidades

Com a configuração descrita, o Prettier e o ESLint têm papéis distintos e complementares na manutenção da qualidade do código:

### Prettier
Responsável por:

1. Formatação de Código:

- Prettier lida com a formatação do código, como espaçamento, uso de aspas, ponto e vírgula, largura de linha, e estilos gerais de código. É configurado para garantir uma formatação consistente em todo o projeto.

2. Regras de Estilo de Código:

- Define e aplica regras de estilo, como a escolha entre aspas simples ou duplas, uso de ponto e vírgula, e presença de vírgulas finais.

### ESLint
Responsável por:

1. Qualidade e Consistência do Código:

- ESLint foca em encontrar e corrigir problemas de qualidade e possíveis erros no código, como variáveis não usadas, erros de sintaxe, e problemas lógicos.
Pode impor regras de estilo que são complementares, mas não duplicadas, com o Prettier.

2. Regras de Programação:

- Verifica práticas recomendadas e regras específicas da linguagem (JavaScript/TypeScript), como evitar console.log em produção ou assegurar que async/await seja usado corretamente.
Pode exibir alertas ou erros relacionados a práticas de codificação, como não usar variáveis definidas ou utilizar práticas de codificação inseguras.

### Resumo:

- Instale ESLint e Prettier globalmente para garantir que estejam disponíveis em qualquer projeto.
-  Mantenha as configurações globais para ESLint e Prettier em seu diretório home ou em um diretório global.
- Utilize este template de projeto com as configurações padrão para reutilizar em novos projetos.
- Configure o VS Code para usar o Prettier como formatador padrão e aplicar as configurações globais do ESLint.

### Autor

- GitHub - [Felipe Santiago Morais](https://github.com/SantiagoMorais)
- Linkedin - [Felipe Santiago](https://www.linkedin.com/in/felipe-santiago-873025288/)
- Email - <a href="mailto:contatofelipesantiago@gmail.com" target="blank">contatofelipesantiago@gmail.com</a>
- <a href="https://api.whatsapp.com/send?phone=5531996951033&text=Hi%2C%20Felipe%21%20I%20got%20your%20contact%20from%20your%20repository.">Whatsapp</a>
