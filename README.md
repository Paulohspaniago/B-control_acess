# B-Controle de Acesso — Ponto Eletrônico

Sistema web de registro de ponto eletrônico desenvolvido com HTML, CSS e JavaScript puro (sem dependências externas). Os dados são armazenados localmente no navegador via `localStorage`.

---

## 📋 Funcionalidades

- **Registro de ponto** com seleção do tipo:
  - Entrada
  - Início de Intervalo
  - Fim de Intervalo
  - Saída
- **Captura automática de geolocalização** no momento do registro (requer permissão do navegador)
- **Exibição em tempo real** da data e hora atuais na tela principal
- **Validação de data**: impede o registro de pontos em datas futuras
- **Justificativa opcional** para o registro (texto e anexo de arquivo)
- **Último registro** exibido no modal para referência rápida
- **Relatório de pontos** com:
  - Listagem de todos os registros
  - Filtro por período: Todos, Última Semana, Último Mês
  - Edição de data e observação de cada registro
  - Exibição de localização, justificativa e arquivos anexados

---

## 🗂 Estrutura do Projeto

```
B-control_acess/
├── index.html              # Página principal — registro de ponto
├── html/
│   └── relatorio.html      # Página de relatório de registros
├── css/
│   ├── style.css           # Estilos da página principal
│   └── relatorio.css       # Estilos da página de relatório
├── js/
│   ├── index.js            # Lógica de registro de ponto
│   └── relatorio.js        # Lógica de exibição e edição do relatório
└── img/
    └── BaterPonto.png      # Logo da aplicação
```

---

## 🚀 Como Usar

1. Clone ou baixe este repositório.
2. Abra o arquivo `index.html` em qualquer navegador moderno.
3. Clique em **Bater Ponto** para registrar um novo ponto.
4. No modal, selecione o tipo de ponto, confirme a data, adicione uma justificativa (opcional) e clique em **Registrar Ponto**.
5. Permita o acesso à geolocalização quando solicitado pelo navegador.
6. Clique em **Ver Relatório** para visualizar e gerenciar todos os registros.

> **Atenção:** os dados são salvos apenas no `localStorage` do navegador. Limpar os dados do navegador apagará todos os registros.

---

## 🛠 Tecnologias

| Tecnologia | Uso |
|---|---|
| HTML5 | Estrutura das páginas |
| CSS3 | Estilização e animações |
| JavaScript (ES6+) | Lógica de negócio |
| Geolocation API | Captura de localização do usuário |
| localStorage | Persistência dos registros |

---

## 📦 Requisitos

- Navegador moderno com suporte a:
  - [Geolocation API](https://developer.mozilla.org/pt-BR/docs/Web/API/Geolocation_API)
  - [localStorage](https://developer.mozilla.org/pt-BR/docs/Web/API/Window/localStorage)
  - [dialog element](https://developer.mozilla.org/pt-BR/docs/Web/HTML/Element/dialog)
- Nenhuma instalação ou servidor necessário — basta abrir o `index.html` no navegador.
