"use strict";
/* ============================================
   MONTEM DE MICROCOMPUTADORES v2 — APP.TS
   ============================================ */
const PARTS = [
    {
        id: "motherboard", name: "Placa-Mae", category: "Circuito Principal",
        icon: "🖥️", color: "#059669", bgColor: "#d1fae5", emoji: "🖥️",
        desc: "A placa-mae e a maior placa do computador. Ela e o \"chao\" onde todas as outras pecas sao conectadas. E por meio dela que todas as partes se comunicam entre si.",
        func: "Interliga todos os componentes: processador, memoria, placa de video, armazenamento e fonte. Tambem controla entradas e saidas como USB, audio e rede.",
        conn: "Primeira peca a ser instalada. Vai encaixada sobre os parafusos de suporte (standoffs) dentro do gabinete.",
        care: "Segure pelas bordas, nunca toque nos circuitos metalicos. Use pulseira antiestatica. Verifique os parafusos sem exagero.",
        curi: "Uma placa-mae moderna pode ter mais de 10 camadas de circuitos e milhoes de trilhas de cobre!",
        slot: "motherboard", spec: "ATX - Chipset B660",
        tabela: [
            { label: "Formato", opcoes: ["ATX (padrao, 305x244mm)", "Micro-ATX (menor, 244x244mm)", "Mini-ITX (compacto, 170x170mm)"] },
            { label: "Socket Intel", opcoes: ["LGA 1700 (12a/13a gen)", "LGA 1200 (10a/11a gen)", "LGA 1151 (6a/7a/8a/9a gen)"] },
            { label: "Socket AMD", opcoes: ["AM5 (Ryzen 7000+)", "AM4 (Ryzen 1000-5000)"] },
            { label: "Chipset (Intel)", opcoes: ["Z790 (overclock)", "B760 (custo-beneficio)", "H610 (basico)"] },
            { label: "Chipset (AMD)", opcoes: ["X670 (premium)", "B650 (intermediario)", "A620 (basico)"] },
            { label: "Slots RAM", opcoes: ["2 slots (4GB+4GB)", "4 slots (8GB+8GB+8GB+8GB)"] },
            { label: "Slots PCIe", opcoes: ["1x PCIe x16 (GPU)", "1x PCIe x1 (extras)"] },
            { label: "Conectores", opcoes: ["SATA III (SSD/HDD)", "M.2 NVMe (SSD rapido)", "USB 3.0 frontal", "Audio HD"] }
        ]
    },
    {
        id: "cpu", name: "Processador (CPU)", category: "Cerebro do Computador",
        icon: "🧠", color: "#2563eb", bgColor: "#dbeafe", emoji: "🧠",
        desc: "O processador (CPU) e o cerebro do computador. Ele executa todas as instrucoes e calculos necessarios para o funcionamento dos programas.",
        func: "Processa todas as informacoes: desde abrir um programa ate renderizar um video. Se comunica diretamente com a memoria RAM e a placa-mae.",
        conn: "Encaixado no soquete da placa-mae. Alinhe o pino dourado (triangulo) com a marca no soquete. Depois baixe a trava.",
        care: "NUNCA force o processador. Nunca toque nos contatos dourados. Verifique o pino de alinhamento. E a peca mais sensivel.",
        curi: "Um processador moderno tem bilhoes de transistores, cada um menor que um virus!",
        slot: "cpu", spec: "Intel Core i5-12400",
        tabela: [
            { label: "Fabricante", opcoes: ["Intel (Core i3/i5/i7/i9)", "AMD (Ryzen 3/5/7/9)"] },
            { label: "Nucleos/Threads", opcoes: ["4 nucleos / 8 threads (basico)", "6 nucleos / 12 threads (intermediario)", "8+ nucleos / 16+ threads (premium)"] },
            { label: "Frequencia", opcoes: ["3.0 GHz base / 4.5 GHz turbo (i5)", "3.4 GHz base / 5.2 GHz turbo (i7)", "3.2 GHz base / 5.8 GHz turbo (i9)"] },
            { label: "Cache", opcoes: ["12MB L3 (i5)", "20MB L3 (i7)", "30MB+ L3 (i9)"] },
            { label: "TDP (Consumo)", opcoes: ["65W (economico)", "125W (desempenho)", "150W+ (extreme)"] },
            { label: "Placa de Video integrada?", opcoes: ["Sim (Intel UHD / AMD Vega)", "Nao (precisa de GPU dedicada)"] },
            { label: "Cuidados", opcoes: ["NUNCA force no soquete", "Nao toque nos contatos dourados", "Verifique pino de alinhamento"] }
        ]
    },
    {
        id: "ram", name: "Memoria RAM", category: "Memoria de Trabalho",
        icon: "💾", color: "#7c3aed", bgColor: "#ede9fe", emoji: "💾",
        desc: "A memoria RAM (Random Access Memory) e a memoria de trabalho do computador. Guarda temporariamente os dados que o processador esta usando.",
        func: "Quando voce abre um programa, ele e carregado da memoria de armazenamento para a RAM. Quanto mais RAM, mais programas voce pode usar ao mesmo tempo.",
        conn: "Encaixada nos slots de memoria da placa-mae. Possui um entalhe assimetrico que impede de ser colocada ao contrario. Ate clicar as travas.",
        care: "Segure pela borda plastica. Verifique a orientacao do entalhe. Pressione ate ouvir o clique. Nao misture memorias de velocidades diferentes.",
        curi: "A RAM DDR5 pode transferir dados a 6.400 MHz — como ler 50 livros por segundo!",
        slot: "ram", spec: "DDR4 3200MHz - 16GB (2x8GB)",
        tabela: [
            { label: "Geracao", opcoes: ["DDR4 (2014-2020, ate 3200MHz)", "DDR5 (2020+, ate 6400MHz+)"] },
            { label: "Capacidade", opcoes: ["4GB (basico, nao recomendado)", "8GB (minimo para uso basico)", "16GB (ideal para maioria)", "32GB (gamer/editor de video)", "64GB+ (workstation/render)"] },
            { label: "Dual Channel", opcoes: ["1 peca = canal unico (lento)", "2 pecas = dual channel (2x mais rapido!)"] },
            { label: "Velocidade", opcoes: ["2666 MHz (basico)", "3200 MHz (intermediario)", "3600 MHz+ (gamer)"] },
            { label: "Latencia (CAS)", opcoes: ["CL16 (padrao)", "CL14 (premium, mais rapido)", "CL18 (economico)"] },
            { label: "Diferenca DDR4 vs DDR5", opcoes: ["DDR5: 2x mais rapida", "DDR5: mais eficiente energeticamente", "DDR5: capacidades maiores", "DDR4: mais barata e compativel"] }
        ]
    },
    {
        id: "gpu", name: "Placa de Video (GPU)", category: "Processador Grafico",
        icon: "🎮", color: "#dc2626", bgColor: "#fee2e2", emoji: "🎮",
        desc: "A placa de video (GPU) gera todas as imagens que aparecem na tela do monitor. Processa graficos 2D e 3D.",
        func: "Enquanto o processador cuida da logica geral, a GPU desenha imagens. Essencial para jogos, edicao de video e design grafico.",
        conn: "Encaixada no slot PCIe x16 (o mais longo) da placa-mae. Pode precisar de cabos de energia direto da fonte (6 ou 8 pinos).",
        care: "Peca pesada, segure com firmeza. Verifique a trava do slot PCIe. Conecte cabos de energia antes de fixar no gabinete.",
        curi: "As GPUs fazem bilhoes de calculos matematicos por segundo, sendo usadas para IA e ciencia!",
        slot: "gpu", spec: "NVIDIA RTX 3060 - 12GB",
        tabela: [
            { label: "Fabricante", opcoes: ["NVIDIA (GeForce RTX)", "AMD (Radeon RX)", "Intel (Arc)"] },
            { label: "Memoria VRAM", opcoes: ["4GB (basico, 1080p leve)", "8GB (intermediario, 1080p)", "12GB (gamer, 1440p)", "16GB+ (premium, 4K)"] },
            { label: "Modelo NVIDIA", opcoes: ["RTX 4060 (custo-beneficio)", "RTX 4070 (1440p)", "RTX 4080 (4K)", "RTX 4090 (extreme)"] },
            { label: "Modelo AMD", opcoes: ["RX 7600 (1080p)", "RX 7800 XT (1440p)", "RX 7900 XTX (4K)"] },
            { label: "Integrada vs Dedicada", opcoes: ["Integrada: no processador (basico)", "Dedicada: placa separada (gamer/editor)"] },
            { label: "Consumo de Energia", opcoes: ["75W-150W (intermediario)", "200W-350W (gamer)", "Requer cabos PCIe 6/8 pinos"] }
        ]
    },
    {
        id: "psu", name: "Fonte de Alimentacao (PSU)", category: "Energia do Sistema",
        icon: "⚡", color: "#d97706", bgColor: "#fef3c7", emoji: "⚡",
        desc: "A fonte (PSU) converte a energia da tomada (110V/220V) em tensoes menores que todas as pecas precisam (3.3V, 5V e 12V).",
        func: "Distribui energia para todos os componentes. Uma boa fonte garante estabilidade e protege contra surtos de energia.",
        conn: "Instalada na parte traseira do gabinete com 4 parafusos. Cabos: 24 pinos na placa-mae, 4/8 pinos no processador, SATA para SSD, PCIe para GPU.",
        care: "NUNCA abra a fonte — armazena energia perigosa. Verifique a chave seletora de tensao. Use sempre cabos originais.",
        curi: "Fontes 80 Plus Gold convertem ate 90% da energia, desperdicando apenas 10% como calor!",
        slot: "psu", spec: "650W 80 Plus Gold - Modular",
        tabela: [
            { label: "Potencia", opcoes: ["450W (basico, sem GPU)", "550W (intermediario)", "650W (gamer medio)", "750W-850W (gamer alto)", "1000W+ (extreme/SLI)"] },
            { label: "Eficiencia 80 Plus", opcoes: ["White: 80% eficiencia", "Bronze: 82-85% (custo-beneficio)", "Gold: 87-90% (recomendado)", "Platinum: 90-92% (premium)", "Titanium: 92-94% (extreme)"] },
            { label: "Modularidade", opcoes: ["Nao modular: todos cabos fixos", "Semi-modular: cabos basicos fixos", "Modular: todos removiveis (melhor)"] },
            { label: "Tensoes", opcoes: ["+3.3V (componentes baixa tensao)", "+5V (USB, SSD SATA)", "+12V (CPU, GPU, cooler)"] },
            { label: "Protecoes", opcoes: ["OCP: protecao contra curto", "OVP: protecao contra alta tensao", "SCP: protecao contra curto-circuito", "OTP: protecao contra superaquecimento"] },
            { label: "Cuidados", opcoes: ["NUNCA abra a fonte!", "Verifique chave seletora 110V/220V", "Use sempre cabos originais"] }
        ]
    },
    {
        id: "storage", name: "Armazenamento (SSD)", category: "Memoria Permanente",
        icon: "💿", color: "#0891b2", bgColor: "#cffafe", emoji: "💿",
        desc: "O armazenamento guarda todos os arquivos permanentemente: sistema operacional, programas, fotos, videos e documentos.",
        func: "Diferente da RAM, os dados nao sao apagados quando desligado. O SSD e rapido como memoria flash. Guarda o sistema operacional e seus dados.",
        conn: "SSD SATA: cabo de dados na placa-mae + cabo de energia na fonte. SSD M.2: inserido no angulo de 30 e apertado com parafuso.",
        care: "Para M.2: insira no angulo e aperte com parafuso. Para SATA: encaixe cabos com cuidado. Nunca derrube um HDD ligado.",
        curi: "Um SSD NVMe le dados a 7.000 MB/s — copia um filme HD em menos de 1 segundo!",
        slot: "storage", spec: "SSD NVMe 500GB M.2",
        tabela: [
            { label: "Tipo", opcoes: ["HDD: disco magnetico (lento, barato)", "SSD SATA: flash (rapido, acessivel)", "SSD NVMe M.2: flash ultra-rapido"] },
            { label: "Velocidade Leitura", opcoes: ["HDD: 80-160 MB/s", "SSD SATA: 500-560 MB/s", "SSD NVMe: 3.500-7.000 MB/s"] },
            { label: "Capacidade", opcoes: ["128GB (sistema basico)", "256GB (basico)", "512GB (ideal)", "1TB (gamer/editor)", "2TB+ (profissional)"] },
            { label: "Formato Fisico", opcoes: ["3.5 polegadas (HDD gabinete)", "2.5 polegadas (SSD SATA)", "M.2 2280 (SSD NVMe, menor)"] },
            { label: "Interface", opcoes: ["SATA III (6 Gbps, maximo 560 MB/s)", "PCIe Gen3 (3.500 MB/s)", "PCIe Gen4 (7.000 MB/s)", "PCIe Gen5 (12.000 MB/s)"] },
            { label: "Diferenca HDD vs SSD", opcoes: ["SSD: 10-50x mais rapido que HDD", "SSD: sem pecas moveis, mais duravel", "HDD: mais barato por GB", "HDD: melhor para armazenamento frio"] }
        ]
    }
];
// Ordem de montagem: placa-mae PRIMEIRO, depois pecas QUE FICAM NELA, por ultimo fonte
const ASSEMBLY_ORDER = ["motherboard", "cpu", "ram", "gpu", "storage", "psu"];
const CONNECTIONS = [
    { from: "psu", to: "motherboard", label: "Energia 24pin" },
    { from: "psu", to: "cpu", label: "Energia CPU" },
    { from: "psu", to: "gpu", label: "Energia GPU" },
    { from: "psu", to: "storage", label: "Energia SATA" },
    { from: "cpu", to: "motherboard", label: "Soquete" },
    { from: "ram", to: "motherboard", label: "Slot RAM" },
    { from: "gpu", to: "motherboard", label: "Slot PCIe" },
    { from: "storage", to: "motherboard", label: "M.2 / SATA" }
];
class App {
    constructor() {
        this.mode = "assemble";
        this.installed = new Set();
        this.step = 0;
        this.selected = null;
        this.isDragging = false;
        this.renderParts();
        this.bindEvents();
        this.updateUI();
    }
    /* ---- RENDER PARTS LIST ---- */
    renderParts() {
        const list = document.getElementById("parts-list");
        list.innerHTML = "";
        const order = this.mode === "assemble" ? ASSEMBLY_ORDER : [...ASSEMBLY_ORDER].reverse();
        order.forEach((id) => {
            const p = PARTS.find((x) => x.id === id);
            const card = document.createElement("div");
            card.className = "part-card";
            card.dataset.part = id;
            if (this.installed.has(id))
                card.classList.add("installed");
            // Highlight next piece in assembly mode
            if (this.mode === "assemble" && !this.installed.has(id)) {
                const expected = ASSEMBLY_ORDER[this.step];
                if (id === expected)
                    card.classList.add("next");
            }
            if (this.mode === "disassemble" && this.installed.has(id)) {
                const expected = [...ASSEMBLY_ORDER].reverse()[this.step];
                if (id === expected)
                    card.classList.add("next");
            }
            card.innerHTML = `
        <div class="pc-icon" style="background:${p.bgColor}">${p.icon}</div>
        <div class="pc-text">
          <div class="pc-name">${p.name}</div>
          <div class="pc-cat">${p.category}</div>
        </div>`;
            card.addEventListener("click", () => { if (!this.isDragging)
                this.selectPart(id); });
            card.addEventListener("dragstart", (e) => {
                this.isDragging = true;
                e.dataTransfer.setData("text/plain", id);
                e.dataTransfer.effectAllowed = "move";
                card.style.opacity = "0.5";
            });
            card.addEventListener("dragend", () => { card.style.opacity = ""; this.isDragging = false; });
            card.draggable = true;
            list.appendChild(card);
        });
    }
    /* ---- EVENTS ---- */
    bindEvents() {
        document.getElementById("btn-assemble").onclick = () => this.setMode("assemble");
        document.getElementById("btn-disassemble").onclick = () => this.setMode("disassemble");
        document.getElementById("btn-reset").onclick = () => this.reset();
        document.getElementById("btn-action").onclick = () => this.actionPart();
        document.getElementById("btn-modal").onclick = () => this.hideModal();
        document.getElementById("btn-celebration-close").onclick = () => { this.reset(); this.hideCelebration(); };
        // Drop on workbench for motherboard
        const wb = document.getElementById("workbench");
        wb.addEventListener("dragover", (e) => { e.preventDefault(); });
        wb.addEventListener("drop", (e) => {
            e.preventDefault();
            const partId = e.dataTransfer.getData("text/plain");
            if (partId === "motherboard") {
                this.selectPart(partId);
                if (this.mode === "assemble")
                    this.actionPart();
            }
        });
        // Drag-drop on each slot
        document.querySelectorAll(".slot-zone").forEach((el) => {
            const slotId = el.dataset.slot;
            el.addEventListener("dragover", (e) => { e.preventDefault(); el.classList.add("dragover"); });
            el.addEventListener("dragleave", () => el.classList.remove("dragover"));
            el.addEventListener("drop", (e) => {
                e.preventDefault();
                el.classList.remove("dragover");
                const partId = e.dataTransfer.getData("text/plain");
                if (partId) {
                    this.selectPart(partId);
                    if (partId === slotId)
                        this.actionPart();
                    else
                        this.showWrongSlot(partId, slotId);
                }
            });
        });
    }
    setMode(m) {
        this.mode = m;
        document.getElementById("btn-assemble").classList.toggle("active", m === "assemble");
        document.getElementById("btn-disassemble").classList.toggle("active", m === "disassemble");
        this.reset();
    }
    reset() {
        this.installed.clear();
        this.step = 0;
        this.selected = null;
        this.renderParts();
        this.clearWorkbench();
        this.hideInfo();
        this.updateUI();
    }
    /* ---- SELECT PART ---- */
    selectPart(id) {
        this.selected = id;
        document.querySelectorAll(".part-card").forEach((c) => c.classList.remove("selected"));
        document.querySelector(`.part-card[data-part="${id}"]`)?.classList.add("selected");
        this.showInfo(id);
        this.updateActionBtn();
        if (id === "ram")
            this.showRamBalloon();
        else
            this.hideRamBalloon();
    }
    /* ---- SHOW INFO ---- */
    showInfo(id) {
        const p = PARTS.find((x) => x.id === id);
        document.getElementById("info-empty")?.classList.add("hidden");
        const filled = document.getElementById("info-filled");
        filled.classList.remove("hidden");
        const badge = document.getElementById("info-badge");
        badge.textContent = p.icon;
        badge.style.background = p.bgColor;
        document.getElementById("info-title").textContent = p.name;
        document.getElementById("info-category").textContent = p.category;
        document.getElementById("info-desc").textContent = p.desc;
        document.getElementById("info-func").textContent = p.func;
        document.getElementById("info-conn").textContent = p.conn;
        document.getElementById("info-care").textContent = p.care;
        document.getElementById("info-curi").textContent = p.curi;
        this.renderTabela(p.tabela);
    }
    renderTabela(tabela) {
        const container = document.getElementById("info-tabela");
        container.innerHTML = "";
        if (!tabela || tabela.length === 0) {
            container.innerHTML = '<p class="tabela-empty">Nenhuma comparacao disponivel.</p>';
            return;
        }
        tabela.forEach((row) => {
            const rowEl = document.createElement("div");
            rowEl.className = "tabela-row";
            const label = document.createElement("div");
            label.className = "tabela-label";
            label.textContent = row.label;
            rowEl.appendChild(label);
            row.opcoes.forEach((opt) => {
                const chip = document.createElement("span");
                chip.className = "tabela-chip";
                chip.textContent = opt;
                rowEl.appendChild(chip);
            });
            container.appendChild(rowEl);
        });
    }
    hideInfo() {
        document.getElementById("info-filled")?.classList.add("hidden");
        document.getElementById("info-empty")?.classList.remove("hidden");
    }
    /* ---- RAM BALLOON (DUAL CHANNEL) ---- */
    showRamBalloon() {
        this.hideRamBalloon();
        const balloon = document.createElement("div");
        balloon.className = "balloon";
        balloon.id = "ram-balloon";
        balloon.innerHTML = `
      <button class="balloon-close" id="balloon-close">&times;</button>
      <div class="balloon-title">💾 Dual Channel na Memoria RAM</div>
      <div class="balloon-text">
        <b>O que e Dual Channel?</b><br>
        Dual Channel e um recurso que dobra a largura de banda da memoria RAM.
        Em vez de usar apenas 1 peca de memoria (canal unico), voce usa <b>2 pecas iguais</b> em slots separados.
      </div>
      <div class="balloon-highlight">
        Canal Unico: 1 peca = 25.6 GB/s (DDR4-3200)<br>
        Dual Channel: 2 pecas = 51.2 GB/s (DDR4-3200) — 2x mais rapido!
      </div>
      <div class="balloon-text" style="margin-top:.4rem">
        <b>Dicas importantes:</b><br>
        • Use 2 pecas de <b>mesma capacidade</b> (ex: 2x8GB, nao 8GB+16GB)<br>
        • Use pecas de <b>mesma velocidade</b> (ex: 2x3200MHz)<br>
        • Consulte o manual da placa-mae para saber quais slots usar (geralmente A2+B2)
      </div>
    `;
        document.body.appendChild(balloon);
        document.getElementById("balloon-close").onclick = () => this.hideRamBalloon();
    }
    hideRamBalloon() {
        document.getElementById("ram-balloon")?.remove();
    }
    /* ---- ACTION BUTTON ---- */
    updateActionBtn() {
        const btn = document.getElementById("btn-action");
        if (!this.selected) {
            btn.disabled = true;
            btn.textContent = "🔧 Instalar esta peca";
            btn.className = "btn-action";
            return;
        }
        if (this.mode === "assemble") {
            if (this.installed.has(this.selected)) {
                btn.disabled = true;
                btn.textContent = "✓ Ja instalada";
                btn.className = "btn-action";
            }
            else {
                const expected = ASSEMBLY_ORDER[this.step];
                if (this.selected === expected) {
                    btn.disabled = false;
                    btn.textContent = "🔧 Instalar esta peca";
                    btn.className = "btn-action ready";
                }
                else {
                    btn.disabled = false;
                    btn.textContent = "⚠️ Ainda nao e a vez!";
                    btn.className = "btn-action wrong-order";
                }
            }
        }
        else {
            if (!this.installed.has(this.selected)) {
                btn.disabled = true;
                btn.textContent = "Nao instalada";
                btn.className = "btn-action";
            }
            else {
                const expected = [...ASSEMBLY_ORDER].reverse()[this.step];
                if (this.selected === expected) {
                    btn.disabled = false;
                    btn.textContent = "🔩 Remover esta peca";
                    btn.className = "btn-action ready";
                }
                else {
                    btn.disabled = false;
                    btn.textContent = "⚠️ Remova as outras primeiro!";
                    btn.className = "btn-action wrong-order";
                }
            }
        }
    }
    /* ---- ACTION ---- */
    actionPart() {
        if (!this.selected)
            return;
        if (this.mode === "assemble")
            this.assemble(this.selected);
        else
            this.disassemble(this.selected);
    }
    assemble(id) {
        const expected = ASSEMBLY_ORDER[this.step];
        if (id !== expected) {
            const p = PARTS.find((x) => x.id === id);
            const exp = PARTS.find((x) => x.id === expected);
            this.showModal("⚠️", "Ordem incorreta!", `A proxima peca e: ${exp.name}. ${this.getOrderHint()}`, "");
            return;
        }
        this.installed.add(id);
        const p = PARTS.find((x) => x.id === id);
        // Show motherboard bg after installing it
        if (id === "motherboard") {
            document.getElementById("motherboard-bg").classList.add("visible", "placed");
            // Make inner slots interactive
            document.querySelectorAll(".slot-zone").forEach((s) => s.style.pointerEvents = "auto");
        }
        this.placeOnWorkbench(id);
        this.showConnectionLines(id);
        this.highlightSlot(id, true);
        this.showModal("✅", `${p.name} instalada!`, this.getInstallMsg(id), `Progresso: ${this.installed.size} de ${PARTS.length}`);
        this.step++;
        this.renderParts();
        this.updateUI();
        this.updateActionBtn();
        if (this.installed.size === PARTS.length) {
            setTimeout(() => this.showCelebration(), 1000);
        }
    }
    disassemble(id) {
        const expected = [...ASSEMBLY_ORDER].reverse()[this.step];
        if (id !== expected) {
            const exp = PARTS.find((x) => x.id === expected);
            this.showModal("⚠️", "Ordem incorreta!", `Primeiro remova: ${exp.name}. A ordem inversa da montagem e a mais segura.`, "");
            return;
        }
        this.installed.delete(id);
        if (id === "motherboard") {
            document.getElementById("motherboard-bg").classList.remove("visible", "placed");
            // Disable inner slots
            document.querySelectorAll(".slot-zone").forEach((s) => s.style.pointerEvents = "none");
        }
        this.removeFromWorkbench(id);
        this.removeConnectionLines(id);
        this.highlightSlot(id, false);
        const p = PARTS.find((x) => x.id === id);
        this.showModal("🔩", `${p.name} removida!`, this.getDisassembleMsg(id), `Restam: ${PARTS.length - this.installed.size} pecas`);
        this.step++;
        this.renderParts();
        this.updateUI();
        this.updateActionBtn();
        if (this.installed.size === 0) {
            setTimeout(() => this.showModal("🎉", "Desmontagem completa!", "Todas as pecas foram removidas. Clique em Montar para recomecar.", ""), 800);
        }
    }
    /* ---- WORKBENCH PLACEMENT ---- */
    placeOnWorkbench(id) {
        const wb = document.getElementById("workbench");
        const slot = document.getElementById(`slot-${id}`);
        const p = PARTS.find((x) => x.id === id);
        slot.classList.add("installed");
        const placed = document.createElement("div");
        placed.className = "placed";
        placed.id = `placed-${id}`;
        placed.style.background = p.color;
        const sr = slot.getBoundingClientRect();
        const wr = wb.getBoundingClientRect();
        placed.style.left = (sr.left - wr.left + 4) + "px";
        placed.style.top = (sr.top - wr.top + 4) + "px";
        placed.style.width = (sr.width - 8) + "px";
        placed.style.height = (sr.height - 8) + "px";
        placed.innerHTML = `<span class="placed-emoji">${p.emoji}</span><span class="placed-name">${p.name}</span>`;
        placed.addEventListener("click", () => this.selectPart(id));
        wb.appendChild(placed);
    }
    removeFromWorkbench(id) {
        const el = document.getElementById(`placed-${id}`);
        if (el) {
            el.style.transition = ".3s";
            el.style.opacity = "0";
            el.style.transform = "scale(.4)";
            setTimeout(() => el.remove(), 300);
        }
        const slot = document.getElementById(`slot-${id}`);
        if (slot)
            slot.classList.remove("installed");
    }
    clearWorkbench() {
        document.querySelectorAll(".placed").forEach((el) => el.remove());
        document.querySelectorAll(".slot-zone").forEach((s) => s.classList.remove("installed", "dragover"));
        document.getElementById("motherboard-bg").classList.remove("visible", "placed");
        document.getElementById("connections-svg").innerHTML = "";
    }
    /* ---- CONNECTION LINES ---- */
    showConnectionLines(id) {
        const svg = document.getElementById("connections-svg");
        const wb = document.getElementById("workbench");
        const wr = wb.getBoundingClientRect();
        CONNECTIONS.forEach((c) => {
            if ((c.from === id && this.installed.has(c.to)) || (c.to === id && this.installed.has(c.from))) {
                if (document.getElementById(`conn-${c.from}-${c.to}`))
                    return;
                const sFrom = document.getElementById(`slot-${c.from}`);
                const sTo = document.getElementById(`slot-${c.to}`);
                if (!sFrom || !sTo)
                    return;
                const r1 = sFrom.getBoundingClientRect();
                const r2 = sTo.getBoundingClientRect();
                const x1 = r1.left - wr.left + r1.width / 2;
                const y1 = r1.top - wr.top + r1.height / 2;
                const x2 = r2.left - wr.left + r2.width / 2;
                const y2 = r2.top - wr.top + r2.height / 2;
                const line = document.createElementNS("http://www.w3.org/2000/svg", "line");
                line.setAttribute("x1", String(x1));
                line.setAttribute("y1", String(y1));
                line.setAttribute("x2", String(x2));
                line.setAttribute("y2", String(y2));
                line.setAttribute("class", "conn-line");
                line.id = `conn-${c.from}-${c.to}`;
                svg.appendChild(line);
                const text = document.createElementNS("http://www.w3.org/2000/svg", "text");
                text.setAttribute("x", String((x1 + x2) / 2));
                text.setAttribute("y", String((y1 + y2) / 2 - 6));
                text.setAttribute("class", "conn-label");
                text.setAttribute("text-anchor", "middle");
                text.textContent = c.label;
                text.id = `conn-label-${c.from}-${c.to}`;
                svg.appendChild(text);
            }
        });
    }
    removeConnectionLines(id) {
        CONNECTIONS.forEach((c) => {
            if (c.from === id || c.to === id) {
                document.getElementById(`conn-${c.from}-${c.to}`)?.remove();
                document.getElementById(`conn-label-${c.from}-${c.to}`)?.remove();
            }
        });
    }
    highlightSlot(id, on) {
        const slot = document.getElementById(`slot-${id}`);
        if (slot && on) {
            slot.classList.add("flash");
            setTimeout(() => slot.classList.remove("flash"), 500);
        }
    }
    /* ---- UI UPDATES ---- */
    updateUI() {
        const total = PARTS.length;
        const fill = document.getElementById("progress-fill");
        const txt = document.getElementById("progress-text");
        const info = document.getElementById("step-info");
        fill.style.width = (this.installed.size / total * 100) + "%";
        txt.textContent = `${this.installed.size} / ${total}`;
        if (this.mode === "assemble") {
            if (this.installed.size === total) {
                info.textContent = "🎉 Montagem completa! Parabens!";
            }
            else {
                const next = ASSEMBLY_ORDER[this.step];
                const p = PARTS.find((x) => x.id === next);
                info.textContent = `Passo ${this.step + 1}/${total} — Instale: ${p.name}`;
            }
        }
        else {
            if (this.installed.size === 0) {
                info.textContent = "🔩 Desmontagem completa!";
            }
            else {
                const next = [...ASSEMBLY_ORDER].reverse()[this.step];
                const p = PARTS.find((x) => x.id === next);
                info.textContent = `Passo ${this.step + 1}/${total} — Remova: ${p.name}`;
            }
        }
    }
    /* ---- HELPERS ---- */
    getOrderHint() {
        const hints = {
            0: "Comece pela placa-mae — ela e a base de tudo!",
            1: "Com a placa-mae pronta, instale o processador no soquete.",
            2: "Agora a memoria RAM nos slots de memoria.",
            3: "Depois a placa de video no slot PCIe.",
            4: "O armazenamento SSD no slot M.2.",
            5: "Por ultimo a fonte de alimentacao — ela da energia a todas as pecas!"
        };
        return hints[this.step] || "";
    }
    getInstallMsg(id) {
        const m = {
            motherboard: "A placa-mae foi fixada. Agora ela e a base para todas as outras pecas!",
            cpu: "O processador foi instalado no soquete. Ele e o cerebro do computador!",
            ram: "A memoria RAM foi encaixada. Agora o computador tem memoria de trabalho!",
            gpu: "A placa de video esta no slot PCIe. Agora o computador gera imagens!",
            storage: "O SSD foi conectado. Aqui ficarao guardados o sistema e seus arquivos!",
            psu: "A fonte foi instalada e os cabos conectados. O computador tem energia!"
        };
        return m[id] || "";
    }
    getDisassembleMsg(id) {
        const m = {
            psu: "A fonte foi desconectada. Sempre e a primeira a ser removida!",
            storage: "O SSD foi removido. Manuseie com cuidado!",
            gpu: "A placa de video foi removida. Desconecte os cabos antes!",
            ram: "A memoria RAM foi removida. Slots liberados!",
            cpu: "O processador foi removido. Guarde na embalagem original!",
            motherboard: "A placa-mae foi removida. Todas as pecas foram desmontadas!"
        };
        return m[id] || "";
    }
    showWrongSlot(partId, slotId) {
        const p = PARTS.find((x) => x.id === partId);
        const s = PARTS.find((x) => x.slot === slotId);
        this.showModal("❌", "Local errado!", `A peca "${p.name}" nao vai aqui. O local correto seria: ${s ? s.name : slotId}.`, "Selecione a peca e clique em Instalar.");
    }
    /* ---- MODAL ---- */
    showModal(emoji, title, msg, detail) {
        document.getElementById("modal-emoji").textContent = emoji;
        document.getElementById("modal-title").textContent = title;
        document.getElementById("modal-msg").textContent = msg;
        document.getElementById("modal-detail").textContent = detail;
        document.getElementById("modal-bg").classList.remove("hidden");
    }
    hideModal() { document.getElementById("modal-bg").classList.add("hidden"); }
    /* ---- CELEBRATION ---- */
    showCelebration() {
        document.getElementById("celebration-bg").classList.remove("hidden");
        const conf = document.getElementById("confetti");
        conf.innerHTML = "";
        const colors = ["#2563eb", "#10b981", "#f59e0b", "#ef4444", "#8b5cf6", "#ec4899"];
        for (let i = 0; i < 60; i++) {
            const d = document.createElement("div");
            d.className = "confetti-piece";
            d.style.left = Math.random() * 100 + "%";
            d.style.top = Math.random() * 20 + "%";
            d.style.background = colors[Math.floor(Math.random() * colors.length)];
            d.style.animationDelay = Math.random() * 2 + "s";
            d.style.animationDuration = (2 + Math.random() * 2) + "s";
            d.style.width = (6 + Math.random() * 8) + "px";
            d.style.height = (6 + Math.random() * 8) + "px";
            d.style.borderRadius = Math.random() > .5 ? "50%" : "2px";
            conf.appendChild(d);
        }
        const specs = document.getElementById("final-specs");
        specs.innerHTML = '<div style="font-size:.85rem;font-weight:700;color:#374151;margin-bottom:.4rem">Especificacoes do Computador:</div>';
        PARTS.forEach((p) => {
            specs.innerHTML += `<div class="spec-row"><div class="spec-dot" style="background:${p.bgColor}">${p.icon}</div><span><b>${p.name}</b> — ${p.spec}</span></div>`;
        });
    }
    hideCelebration() { document.getElementById("celebration-bg").classList.add("hidden"); }
}
document.addEventListener("DOMContentLoaded", () => { new App(); });
