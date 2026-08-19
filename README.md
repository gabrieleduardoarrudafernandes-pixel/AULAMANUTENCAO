<div align="center">

# Montagem de Microcomputadores

### Ferramenta Didatica Interativa para Ensino de Manutencao

![HTML5](https://img.shields.io/badge/HTML5-E34F26?style=for-the-badge&logo=html5&logoColor=white)
![CSS3](https://img.shields.io/badge/CSS3-1572B6?style=for-the-badge&logo=css3&logoColor=white)
![TypeScript](https://img.shields.io/badge/TypeScript-007ACC?style=for-the-badge&logo=typescript&logoColor=white)
![License](https://img.shields.io/badge/Licencia-Educacional-green?style=for-the-badge)

 Uma aplicacao web **100% offline** que ensina de forma **visual e interativa** como montar e desmontar um microcomputador padrao.

 [Como Rodar](#-como-rodar) | [Funcionalidades](#-funcionalidades) | [Componentes](#-componentes) | [Uso em Aula](#-como-usar-em-aula)

</div>

---

## Sumario

- [O que e?](#-o-que-e)
- [Funcionalidades](#-funcionalidades)
- [Componentes](#-componentes)
- [Como Rodar](#-como-rodar)
- [Estrutura do Projeto](#-estrutura-do-projeto)
- [Uso em Aula](#-como-usar-em-aula)
- [Tecnologias](#-tecnologias)
- [Acessibilidade](#-acessibilidade)
- [Historico de Versoes](#-historico-de-versoes)

---

## O que e?

Uma ferramenta didatica que simula a montagem completa de um microcomputador, ensinando o aluno a:

- Conhecer cada componente e sua funcao no sistema
- Entender a **ordem correta** de instalacao
- Identificar os **slots e conectores** corretos de cada peca
- Aprender **cuidados essenciais** ao manusear componentes eletronicos
- Visualizar as **conexoes electricas** entre as pecas

> O aluno interage clicando e arrastando pecas, aprendendo de forma segura e gamificada.

---

## Funcionalidades

### Dois Modos de Operacao

| Modo | Descricao |
|------|-----------|
| **Montagem** | Instala as 6 pecas na ordem correta: Motherboard, CPU, RAM, GPU, SSD, PSU |
| **Desmontagem** | Remove as pecas na ordem inversa (a mais segura): PSU, GPU, SSD, RAM, CPU, Motherboard |

### Interacao com Drag-and-Drop

- **Clique** em uma peca para ver informacoes detalhadas
- **Arraste** a peca ate o slot correto no workbench
- **Botao Instalar** para confirmar a instalacao
- **Validacao automatica** — avisa se a ordem ou posicao estiver errada

### Painel de Informacoes

Cada peca possui 6 blocos de informacao:

| Secao | Descricao |
|-------|-----------|
| O que e? | Descricao didatica da peca |
| Funcao | Para que serve no computador |
| Como conectar | Passo a passo de instalacao |
| Cuidados | O que NAO fazer para nao danificar |
| Curiosidade | Dado tecnico interessante |
| Tabela Comparativa | Opcoes de formatacao, marcas e especificacoes |

### Recursos Visuais

- **Slots interativos** com feedback visual (hover, dragover, instalado)
- **Linhas de conexao SVG** que aparecem entre pecas instaladas
- **Barra de progresso** com contagem em tempo real
- **Modal de feedback** a cada instalacao/remocao
- **Tela de celebracao** com confetti e especificacoes finais
- **Balloon informativo** sobre Dual Channel ao selecionar RAM

---

## Componentes

| Peca | Icone | Especificacao | Funcao Principal |
|------|-------|---------------|------------------|
| Placa-Mae | :desktop_computer: | ATX - Chipset B660 | Base do sistema, interliga todos os componentes |
| Processador | :brain: | Intel Core i5-12400 | Cerebro do computador, executa instrucoes |
| Memoria RAM | :floppy_disk: | DDR4 3200MHz - 16GB (2x8GB) | Memoria de trabalho temporaria |
| Placa de Video | :video_game: | NVIDIA RTX 3060 - 12GB | Processamento grafico |
| Fonte | :zap: | 650W 80 Plus Gold | Conversao e distribuicao de energia |
| Armazenamento | :cd: | SSD NVMe 500GB M.2 | Dados permanentes do sistema |

---

## Como Rodar

### Requisitos

- [Node.js](https://nodejs.org/) v14+ (para compilar TypeScript)
- Python 3 (para o servidor local)
- Qualquer navegador moderno (Chrome, Firefox, Edge)

### Instalacao Rapida

```bash
# Clone o repositorio
git clone https://github.com/gabrieleduardoarrudafernandes-pixel/AULAMANUTENCAO.git
cd AULAMANUTENCAO

# Instale dependencias e compile
npm install
npx tsc

# Inicie o servidor
python3 -m http.server 8080
```

Acesse: **http://localhost:8080**

### Comandos NPM

```bash
npm run build    # Compila TypeScript para JavaScript
npm run serve    # Inicia servidor na porta 8080
npm start        # Compila + inicia servidor
```

---

## Estrutura do Projeto

```
.
├── index.html          # Pagina principal (layout 3 colunas)
├── style.css           # Estilos, animacoes e responsividade
├── app.ts              # Codigo fonte TypeScript
├── app.js              # JavaScript compilado (gerado pelo tsc)
├── package.json        # Dependencias e scripts
├── tsconfig.json       # Configuracao do TypeScript
├── README.md           # Esta documentacao
└── .gitignore          # Arquivos ignorados pelo Git
```

---

## Como Usar em Aula

### Fluxo Sugerido

1. **Abra o projeto** no projetor ou tela compartilhada
2. **Exploracao inicial** — deixe os alunos clicarem em cada peca para ver as informacoes
3. **Montagem guiada** — va instalando cada peca, perguntando qual e a proxima
4. **Arraste e solte** — deixe os alunos tentarem arrastar para slots errados para ver os erros didaticos
5. **Linhas de conexao** — mostre como as pecas se comunicam entre si
6. **Celebracao** — ao completar, mostre as especificacoes do computador montado
7. **Desmontagem** — revirava a ordem para reforar o aprendizado
8. **Repeticao** — use os botoes Montar/Desmontar para praticar

### Dicas para o Professor

- Enfatize **POR QUE** a ordem de montagem importa (ex: CPU so depois da motherboard)
- Mostre os **avisos de cuidado** de cada peca (anti-estatica, nao force soquetes, etc.)
- Use as **tabelas comparativas** para discutir opcoes de hardware
- O **balloon de Dual Channel** e um otimo ponto de partida para aulas de memoria
- Projeto funciona **100% offline** — ideal para laboratorios sem internet

---

## Tecnologias

| Tecnologia | Uso no Projeto |
|------------|----------------|
| HTML5 | Estrutura semantica da pagina |
| CSS3 | Layout responsivo, animacoes, efeitos visuais |
| TypeScript | Logica da aplicacao com tipagem forte |
| SVG | Linhas de conexao animadas entre pecas |
| DOM API | Interatividade via HTML5 Drag and Drop |

---

## Acessibilidade

- Funciona em **qualquer navegador moderno** (Chrome, Firefox, Edge, Safari)
- **100% offline** — nao precisa de internet apos clonar
- Textos em **portugues brasileiro** com linguagem didatica
- Interface **responsiva** — funciona em telas grandes, projetores e tablets
- **Nao requer instalacao** — basta compilar e abrir no navegador

---

## Historico de Versoes

| Versao | Descricao |
|--------|-----------|
| v2.1 | Correcao do drag-and-drop, crash na motherboard, melhoria do layout |
| v2.0 | Layout redesenhado com slots visuais, motherboard transparente, tabelas comparativas |
| v1.0 | Sistema interativo basico de montagem com informacoes por peca |

---

<div align="center">

**Desenvolvido como ferramenta didatica para aulas de Manutencao de Microcomputadores**

</div>
