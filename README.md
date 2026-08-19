# 🖥️ Montagem de Microcomputadores

### Ferramenta Didática Interativa para Ensino de Montagem e Desmontagem

![HTML5](https://img.shields.io/badge/HTML5-E34F26?style=for-the-badge&logo=html5&logoColor=white)
![CSS3](https://img.shields.io/badge/CSS3-1572B6?style=for-the-badge&logo=css3&logoColor=white)
![TypeScript](https://img.shields.io/badge/TypeScript-007ACC?style=for-the-badge&logo=typescript&logoColor=white)
![Ubuntu](https://img.shields.io/badge/Ubuntu-E95420?style=for-the-badge&logo=ubuntu&logoColor=white)

---

## 📋 O que é?

Uma aplicação web **100% offline** que ensina de forma **visual, interativa e didática** como montar e desmontar um microcomputador padrão. Ideal para aulas práticas de manutenção de computadores.

> O aluno clica nas peças, aprende o que cada uma faz, onde conectar e como instalar — tudo de forma segura e passo a passo.

---

## 🎯 Funcionalidades

### 🔧 Modo Montagem
O aluno instala as peças **na ordem correta**:

```
1️⃣  Placa-Mãe  →  Base de todas as conexões
2️⃣  Processador (CPU)  →  O cérebro do computador
3️⃣  Memória RAM  →  Memória de trabalho
4️⃣  Armazenamento (SSD)  →  Memória permanente
5️⃣  Placa de Vídeo (GPU)  →  Processador gráfico
6️⃣  Fonte (PSU)  →  Energia do sistema
```

### 🔩 Modo Desmontagem
O aluno remove as peças **na ordem inversa** (a mais segura):

```
1️⃣  Fonte (PSU)  →  Primeiro desconectar a energia!
2️⃣  Placa de Vídeo (GPU)  →  Remover cabos e placa
3️⃣  Armazenamento (SSD)  →  Desconectar cabos SATA
4️⃣  Memória RAM  →  Liberar slots
5️⃣  Processador (CPU)  →  Remover com cuidado
6️⃣  Placa-Mãe  →  Última peça a ser removida
```

### 📚 Painel de Informações
Ao clicar em qualquer peça, aparece:

| Seção | O que mostra |
|-------|-------------|
| 📖 **O que é?** | Descrição simples e didática da peça |
| ⚙️ **Função no computador** | Para que serve e como funciona |
| 🔌 **Onde conectar** | Instrução passo a passo de instalação |
| ⚠️ **Cuidados** | O que NÃO fazer para não quebrar |
| 🔬 **Curiosidade** | Dado técnico interessante |

### 🎮 Interações

- **Clique** em uma peça → ver informações detalhadas
- **Arraste e solte** → posicione a peça no slot correto
- **Botão instalar** → confirma a instalação
- **Validação automática** → avisa se a ordem ou posição estiver errada
- **Linhas de conexão** → mostra visualmente os cabos entre peças
- **Tela de celebração** → confetti + specs ao completar a montagem

---

## 🖥️ Componentes Cobertos

| Peça | Ícone | Especificação | O que o aluno aprende |
|------|-------|---------------|----------------------|
| **Placa-Mãe** | 🖥️ | ATX - Chipset B660 | Base do sistema, onde tudo conecta |
| **Processador** | 🧠 | Intel Core i5-12400 | Cérebro, cálculos, soquete |
| **Memória RAM** | 💾 | DDR4 3200MHz - 16GB | Memória de trabalho, slots |
| **Placa de Vídeo** | 🎮 | NVIDIA RTX 3060 - 12GB | GPU, slot PCIe, cabos de energia |
| **Fonte** | ⚡ | 650W 80 Plus Gold | Conversão de energia, cabos |
| **Armazenamento** | 💿 | SSD NVMe 500GB M.2 | Dados permanentes, SATA/M.2 |

---

## 🚀 Como Rodar

### Pré-requisito
- [Node.js](https://nodejs.org) instalado (v14+)

### Opção 1: Script Automático (Recomendado)

**No Ubuntu/Linux:**
```bash
# Copie a pasta para a máquina de destino
cp -r projetoaula /home/usuario/

# Entre na pasta e execute
cd projetoaula
chmod +x iniciar.sh
./iniciar.sh
```

**No Windows:**
```
Copie a pasta para o Windows
Clique duas vezes em "iniciar.bat"
Pronto! O navegador abre automaticamente
```

O que o script faz:
1. ✅ Verifica se o Node.js está instalado
2. ✅ Instala as dependências (`npm install`)
3. ✅ Compila o TypeScript (`npx tsc`)
4. ✅ Abre o navegador em `http://localhost:8080`
5. ✅ Inicia o servidor local

### Opção 2: Manual

```bash
cd projetoaula
npm install          # Instala dependências
npx tsc              # Compila TypeScript → JavaScript
python3 -m http.server 8080  # Sobe o servidor
```

Acesse: `http://localhost:8080`

---

## 📁 Estrutura do Projeto

```
projetoaula/
├── 📄 index.html          ← Página principal (layout 3 colunas)
├── 🎨 style.css           ← Estilos responsivos e didáticos
├── 📝 app.ts              ← Código TypeScript (código fonte)
├── ⚙️ app.js              ← JavaScript compilado (gerado pelo tsc)
├── 📦 package.json        ← Dependências e scripts npm
├── 🔧 tsconfig.json       ← Configuração do TypeScript
├── 🪟 iniciar.bat         ← Instalador automático (Windows)
├── 🐧 iniciar.sh          ← Instalador automático (Ubuntu/Linux)
└── 📋 .gitignore          ← Arquivos ignorados pelo Git
```

---

## 🎓 Como Usar em Aula

### Fluxo da Aula

```
1. Abra o projeto no projetor/tela compartilhada
2. Explique cada peça clicando nela (painel lateral)
3. Comece pelo Modo Montagem
4. Peça para os alunos dizerem qual é a próxima peça
5. Clique em "Instalar" para mostrar a instalação
6. Repita até completar as 6 peças
7. Mostre as linhas de conexão entre peças
8. Faça a tela de celebração com as specs
9. Volte ao Modo Desmontagem para revisar
10. Repita até os alunos memorizarem a ordem
```

### Dicas para o Professor

- **Antes de tudo:** Deixe os alunos explorarem clicando nas peças
- **Ordem de montagem:** Enfatize POR QUE a ordem importa
- **Cuidados:** Mostre os avisos de cada peça (anti-estática, etc.)
- **Arraste e solte:** Deixe os alunos tentarem arrastar para slots errados → mostra erro didático
- **Repetição:** Use os botões Montar/Desmontar para repetir o exercício

---

## 🌐 Acessibilidade

- Funciona em **qualquer navegador moderno** (Chrome, Firefox, Edge)
- **100% offline** — não precisa de internet após instalar
- Textos em **português brasileiro**
- Interface **responsiva** — funciona em telas grandes e projetores
- **Didático** — linguagem simples para pessoas leigas

---

## 🛠️ Tecnologias

| Tecnologia | Uso |
|------------|-----|
| **HTML5** | Estrutura da página |
| **CSS3** | Estilos, animações, responsividade |
| **TypeScript** | Lógica da aplicação (compilado para JS) |
| **SVG** | Linhas de conexão entre peças |
| **Node.js** | Compilação do TypeScript |

---

## 📸 Capturas de Tela

> *Interface com 3 painéis:*
> - **Esquerda:** Lista de peças disponíveis (clique ou arraste)
> - **Centro:** Mesa de trabalho visual com slots para cada peça
> - **Direita:** Painel de informações detalhadas

---

## 📄 Licença

Projeto educacional para uso em sala de aula.

---

<div align="center">

**Desenvolvido para ensino de manutenção de microcomputadores** 🔧

</div>
