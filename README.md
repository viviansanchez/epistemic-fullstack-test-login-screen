<h1 align="center">Teste de desenvolvimento FullStack - Epistemic</h1>

<p align="center">
  <a href="#-tecnologias">Tecnologias</a>&nbsp;&nbsp;&nbsp;|&nbsp;&nbsp;&nbsp;
  <a href="#-projeto">Projeto</a>&nbsp;&nbsp;&nbsp;|&nbsp;&nbsp;&nbsp;
  <a href="#-instalação">Instalação</a>

</p>

<br>

## 🚀 Tecnologias

Esse projeto foi desenvolvido com as seguintes tecnologias:

- React
- CSS Modules
- React Hook Form
- Zod

## 💻 Projeto

O projeto foi desenvolvido como parte do processo seletivo na Epistemic, para desenvolvedor FullStack.

Requisitos do projeto:

- Implemente o código da criação dos elementos de uma tela de Login contendo:

  - Duas caixas de texto para entrada de Login(e-mail) e Senha
  - Um botão de Entrar
  - Três links para “Recuperação de Senha”, “Novo Cadastro” e “Termos e Condições de Uso"

- Verificação de erros

  - Verificar, no momento que o botão “Entrar” for pressionado, se
    a senha e e-mail inseridos nos respectivos campos estão
    corretos
  - Bloquear o acesso do usuário que tiver sua senha inserida incorretamente por três vezes
  - Solicitar e-mail do usuário caso ele toque em “Esqueceu sua
    senha”, e, caso ele já tenha inserido o e-mail na tela de Login,
    deixar o mesmo e-mail já preenchido como padrão para realizar
    a recuperação de senha (não é necessário implementar a
    funcionalidade de recuperação de senha)

- Implemente alertas correspondentes às situações de erros e sucessos para as três funcionalidades de verificação de erros

### Considerações

Como não há um backend para esta aplicação, para satisfazer o primeiro requerimento (verificar, no momento que o botão “Entrar” for pressionado, se a senha e e-mail inseridos nos respectivos campos estão corretos) optei por utilizar uma validação com o Zod onde apenas as seguintes credenciais são consideradas corretas:

- Email: correctemail@email.com
- Senha: correctpassword

Caso deseje testar a aplicação, utilize essas credenciais como corretas, e quaisquer outras como incorretas.

## ⚙️ Instalação

⚠️ Para rodar o projeto, é necessário que o Node.js esteja instalado na sua máquina. Caso não tenha, basta clicar [neste link](https://nodejs.org/en) e seguir os passos para instalação.

⚠️Para rodar o projeto, também é necessário uma IDE de sua preferência. Uma opção gratuita é o VSCode, basta clicar [neste link](https://code.visualstudio.com/) e seguir os passos para instalação.

Você deve clonar este repositório utiliizando o comando abaixo no terminal da sua IDE de sua escolha:

```
git clone https://github.com/viviansanchez/epistemic-fullstack-test-login-screen.git
```

A seguir, execute o comando abaixo no mesmo terminal para instalar as dependências necessárias do projeto:

```
npm install
```

Por último, execute o comando abaixo no mesmo terminal para rodar o projeto:

```
npm run dev
```

Para visualizar o deploy do projeto no Netlify, basta [clicar aqui](https://login-screen-epistemic-test.netlify.app/)
