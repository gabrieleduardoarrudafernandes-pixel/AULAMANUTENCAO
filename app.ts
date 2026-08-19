/* ============================================
   MONTEM DE MICROCOMPUTADORES - APP.TS
   Ferramenta Didática Interativa
   ============================================ */

interface ComponentData {
  id: string;
  name: string;
  category: string;
  icon: string;
  color: string;
  bgColor: string;
  description: string;
  function: string;
  connection: string;
  care: string;
  curiosity: string;
  slot: string;
  spec: string;
}

interface Connection {
  from: string;
  to: string;
  label: string;
}

const COMPONENTS: ComponentData[] = [
  {
    id: 'motherboard',
    name: 'Placa-Mãe',
    category: 'Circuito Principal',
    icon: '🖥️',
    color: '#059669',
    bgColor: '#d1fae5',
    description:
      'A placa-mãe é a maior placa do computador. Ela é o "chão" onde todas as outras peças são conectadas. É por meio dela que todas as partes se comunicam entre si.',
    function:
      'Ela interliga todos os componentes: processador, memória, placa de vídeo, armazenamento e fonte de alimentação. Ela também controla as entradas e saídas como USB, áudio e rede. Sem ela, nenhuma peça funcionaria.',
    connection:
      'É a primeira peça a ser instalada. Ela vai encaixada sobre os parafusos de suporte (standoffs) dentro do gabinete. Todas as outras peças serão conectadas nela.',
    care:
      'Sempre segure pelas bordas, nunca toque nos circuitos metálicos. Use uma pulseira antiestática para evitar descargas elétricas. Verifique se os parafusos estão firmes, mas sem exagero para não rachar a placa.',
    curiosity:
      'Uma placa-mãe moderna pode ter mais de 10 camadas de circuitos internos e milhões de trilhas de cobre conectando componentes!',
    slot: 'motherboard',
    spec: 'ATX - Chipset B660'
  },
  {
    id: 'cpu',
    name: 'Processador (CPU)',
    category: 'Cérebro do Computador',
    icon: '🧠',
    color: '#2563eb',
    bgColor: '#dbeafe',
    description:
      'O processador, também chamado de CPU (Central Processing Unit), é o cérebro do computador. Ele executa todas as instruções e cálculos necessários para o funcionamento dos programas.',
    function:
      'Ele processa todas as informações: desde abrir um programa até renderizar um vídeo. Quanto mais rápido e potente o processador, mais tarefas o computador consegue executar ao mesmo tempo. Ele se comunica diretamente com a memória RAM e a placa-mãe.',
    connection:
      'O processador é instalado no soquete (socket) da placa-mãe. Ele se encaixa com cuidado — há um pino de alinhamento (triângulo dourado) que deve coincidir com a marca no soquete. Depois, a trava é baixada para fixá-lo.',
    care:
      'NUNCA force o processador. Ele deve cair suavemente no soquete. Nunca toque nos contatos dourados da parte de baixo. Antes de instalar, verifique se o pino de alinhamento está posicionado corretamente. O processador é a peça mais sensível do computador.',
    curiosity:
      'Um processador moderno tem bilhões de transistores — cada um menor que um vírus! Ele pode fazer bilhões de cálculos por segundo.',
    slot: 'cpu',
    spec: 'Intel Core i5-12400'
  },
  {
    id: 'ram',
    name: 'Memória RAM',
    category: 'Memória de Trabalho',
    icon: '💾',
    color: '#7c3aed',
    bgColor: '#ede9fe',
    description:
      'A memória RAM (Random Access Memory) é a memória de trabalho do computador. Ela guarda temporariamente os dados que o processador está usando no momento.',
    function:
      'Quando você abre um programa, ele é carregado da memória de armazenamento para a RAM, que o entrega rapidamente ao processador. Quanto mais RAM, mais programas você pode usar ao mesmo tempo sem o computador travar. Os dados na RAM são apagados quando o computador é desligado.',
    connection:
      'A memória RAM é encaixada nos slots de memória da placa-mãe (geralmente 2 ou 4 slots). Ela possui um encaixe assimétrico (com um entalhe) que impede de ser colocada ao contrário. Basta pressionar均匀mente até as travas laterais clicarem.',
    care:
      'Segure sempre pela borda plástica, nunca toque nos contatos dourados. Verifique a orientação do entalhe antes de encaixar. Pressione firmemente até ouvir o clique das travas. Não misture memórias de velocidades diferentes.',
    curiosity:
      'A RAM moderna DDR5 pode transferir dados a velocidades de até 6.400 MHz — isso é como ler 50 livros por segundo!',
    slot: 'ram',
    spec: 'DDR4 3200MHz - 16GB (2x8GB)'
  },
  {
    id: 'gpu',
    name: 'Placa de Vídeo (GPU)',
    category: 'Processador Gráfico',
    icon: '🎮',
    color: '#dc2626',
    bgColor: '#fee2e2',
    description:
      'A placa de vídeo, ou GPU (Graphics Processing Unit), é responsável por gerar todas as imagens que aparecem na tela do monitor. Ela processa gráficos 2D e 3D.',
    function:
      'Enquanto o processador cuida da lógica geral, a GPU é especializada em desenhar imagens. Ela é essencial para jogos, edição de vídeo, design gráfico e qualquer trabalho que envolva imagens. Ela se comunica com a placa-mãe pelo slot PCIe e envia o sinal de vídeo para o monitor.',
    connection:
      'A placa de vídeo é encaixada no slot PCIe x16 (o slot mais longo e reforçado) da placa-mãe. Ela também pode precisar de conectores de energia direto da fonte (6 ou 8 pinos). Depois, você conecta o cabo de vídeo (HDMI ou DisplayPort) nela.',
    care:
      'É uma peça pesada, então segure-a com firmeza. Verifique se a trava do slot PCIe está aberta antes de inserir. Se precisar de energia extra, conecte o cabo da fonte antes de fixar no gabinete. Nunca force o encaixe.',
    curiosity:
      'As GPUs modernas podem fazer bilhões de cálculos matemáticos por segundo, sendo também usadas para inteligência artificial e ciência!',
    slot: 'gpu',
    spec: 'NVIDIA RTX 3060 - 12GB'
  },
  {
    id: 'psu',
    name: 'Fonte de Alimentação (PSU)',
    category: 'Energia do Sistema',
    icon: '⚡',
    color: '#d97706',
    bgColor: '#fef3c7',
    description:
      'A fonte de alimentação (Power Supply Unit - PSU) converte a energia da tomada (110V/220V) em tensões menores e seguras que todas as peças do computador precisam para funcionar (3.3V, 5V e 12V).',
    function:
      'Ela distribui energia para todos os componentes: placa-mãe, processador, memória, placa de vídeo, armazenamento e coolers. Uma boa fonte garante estabilidade e protege contra surtos de energia. Ela é a primeira peça que deve ser conectada e a última a ser desligada.',
    connection:
      'A fonte é instalada na parte traseira ou inferior do gabinete, fixada com 4 parafusos. Depois, os cabos de energia são conectados: o cabo principal de 24 pinos na placa-mãe, o cabo de 4/8 pinos para o processador, cabos SATA para armazenamento e cabos PCIe para a placa de vídeo.',
    care:
      'NUNCA abra a fonte — ela armazena energia perigosa mesmo desligada. Verifique se a chave seletora de tensão (110V/220V) está na posição correta. Use sempre cabos que vieram com ela. Nunca sobrecarrege a fonte com mais componentes do que ela suporta.',
    curiosity:
      'As fontes modernas com certificação 80 Plus Gold convertem até 90% da energia em uso, desperdiçando apenas 10% como calor!',
    slot: 'psu',
    spec: '650W 80 Plus Gold - Modular'
  },
  {
    id: 'storage',
    name: 'Armazenamento (SSD/HDD)',
    category: 'Memória Permanente',
    icon: '💿',
    color: '#0891b2',
    bgColor: '#cffafe',
    description:
      'O armazenamento é onde todos os seus arquivos ficam guardados permanentemente: o sistema operacional (Windows/Linux), programas, fotos, vídeos e documentos. O SSD é rápido, o HDD é mais lento porém mais barato.',
    function:
      'Diferente da RAM, os dados aqui não são apagados quando o computador é desligado. O SSD (Solid State Drive) é como uma "memória flash" gigante — muito rápido. O HDD (Hard Disk Drive) usa discos magnéticos girando. O SSD é instalado no computador para guardar o sistema operacional e todos os seus dados.',
    connection:
      'O SSD é conectado à placa-mãe por um cabo SATA (para SSD 2.5") ou diretamente no slot M.2 da placa-mãe (para SSD NVMe, que é ainda mais rápido). Depois, um cabo de energia da fonte é ligado nele (para SSD SATA).',
    care:
      'Para SSD 2.5": segure pelo corpo, encaixe o cabo de dados SATA na placa-mãe e o cabo de energia na fonte. Para SSD M.2: insira no ângulo de 30° e aperte com o parafuso. Nunca derrube um HDD ligado — os discos internos podem ser danificados.',
    curiosity:
      'Um SSD NVMe moderno pode ler dados a 7.000 MB/s — isso é como copiar um filme inteiro HD em menos de 1 segundo!',
    slot: 'storage',
    spec: 'SSD NVMe 500GB M.2'
  }
];

const ASSEMBLY_ORDER: string[] = [
  'motherboard',
  'cpu',
  'ram',
  'storage',
  'gpu',
  'psu'
];

const CONNECTIONS: Connection[] = [
  { from: 'psu', to: 'motherboard', label: 'Energia 24pin' },
  { from: 'psu', to: 'cpu', label: 'Energia CPU' },
  { from: 'psu', to: 'gpu', label: 'Energia GPU' },
  { from: 'psu', to: 'storage', label: 'Energia SATA' },
  { from: 'cpu', to: 'motherboard', label: 'Soquete' },
  { from: 'ram', to: 'motherboard', label: 'Slot RAM' },
  { from: 'gpu', to: 'motherboard', label: 'Slot PCIe' },
  { from: 'storage', to: 'motherboard', label: 'Cabo SATA/M.2' }
];

const DISASSEMBLY_ORDER: string[] = [...ASSEMBLY_ORDER].reverse();

class ComputerAssemblyApp {
  private mode: 'assemble' | 'disassemble' = 'assemble';
  private installedParts: Set<string> = new Set();
  private currentStep: number = 0;
  private selectedPart: string | null = null;
  private draggedPart: string | null = null;

  constructor() {
    this.init();
  }

  private init(): void {
    this.renderInventory();
    this.bindEvents();
    this.updateStep();
  }

  private renderInventory(): void {
    const inventory = document.getElementById('parts-inventory')!;
    inventory.innerHTML = '';

    const order =
      this.mode === 'assemble' ? ASSEMBLY_ORDER : DISASSEMBLY_ORDER;

    order.forEach((partId) => {
      const data = COMPONENTS.find((c) => c.id === partId)!;
      const card = document.createElement('div');
      card.className = 'part-card';
      card.dataset.part = partId;
      card.draggable = true;

      if (this.installedParts.has(partId)) {
        card.classList.add('installed');
      }

      card.innerHTML = `
        <div class="part-icon" style="background:${data.bgColor}">${data.icon}</div>
        <div class="part-info">
          <div class="part-name">${data.name}</div>
          <div class="part-category">${data.category}</div>
        </div>
      `;

      card.addEventListener('click', () => this.selectPart(partId));
      card.addEventListener('dragstart', (e) => this.onDragStart(e, partId));
      card.addEventListener('dragend', () => this.onDragEnd());

      inventory.appendChild(card);
    });
  }

  private bindEvents(): void {
    document.getElementById('btn-assemble')!.addEventListener('click', () => {
      this.setMode('assemble');
    });
    document.getElementById('btn-disassemble')!.addEventListener('click', () => {
      this.setMode('disassemble');
    });
    document.getElementById('btn-reset')!.addEventListener('click', () => {
      this.reset();
    });
    document.getElementById('btn-install')!.addEventListener('click', () => {
      this.installSelectedPart();
    });
    document.getElementById('modal-btn')!.addEventListener('click', () => {
      this.closeModal();
    });
    document.getElementById('btn-reset-celebration')!.addEventListener('click', () => {
      this.reset();
      this.closeCelebration();
    });

    const workbench = document.getElementById('workbench')!;
    workbench.addEventListener('dragover', (e) => this.onDragOver(e));
    document.querySelectorAll<HTMLElement>('[class^="slot-"]').forEach((slot) => {
      const slotId = slot.dataset.slot;
      if (slotId) {
        slot.addEventListener('dragover', (e) => this.onSlotDragOver(e, slotId));
        slot.addEventListener('dragleave', () => this.onSlotDragLeave(slotId));
        slot.addEventListener('drop', (e) => this.onDrop(e, slotId));
      }
    });
  }

  private setMode(mode: 'assemble' | 'disassemble'): void {
    this.mode = mode;
    document.getElementById('btn-assemble')!.classList.toggle('active', mode === 'assemble');
    document.getElementById('btn-disassemble')!.classList.toggle('active', mode === 'disassemble');
    this.reset();
  }

  private reset(): void {
    this.installedParts.clear();
    this.currentStep = 0;
    this.selectedPart = null;
    this.renderInventory();
    this.clearWorkbench();
    this.clearInfoPanel();
    this.updateStep();
    this.updateInstallButton();
  }

  private selectPart(partId: string): void {
    this.selectedPart = partId;

    document.querySelectorAll('.part-card').forEach((c) => c.classList.remove('selected'));
    const card = document.querySelector(`.part-card[data-part="${partId}"]`);
    if (card) card.classList.add('selected');

    this.showInfo(partId);
    this.updateInstallButton();
  }

  private showInfo(partId: string): void {
    const data = COMPONENTS.find((c) => c.id === partId)!;

    document.getElementById('info-placeholder')?.classList.add('hidden');
    const content = document.getElementById('info-content')!;
    content.classList.remove('hidden');

    document.getElementById('info-icon')!.textContent = data.icon;
    (document.getElementById('info-icon') as HTMLElement).style.background = data.bgColor;
    document.getElementById('info-title')!.textContent = data.name;
    document.getElementById('info-description')!.textContent = data.description;
    document.getElementById('info-function')!.textContent = data.function;
    document.getElementById('info-connection')!.textContent = data.connection;
    document.getElementById('info-care')!.textContent = data.care;
    document.getElementById('info-curiosity')!.textContent = data.curiosity;
  }

  private clearInfoPanel(): void {
    document.getElementById('info-content')?.classList.add('hidden');
    const placeholder = document.getElementById('info-placeholder');
    if (placeholder) placeholder.classList.remove('hidden');
  }

  private updateInstallButton(): void {
    const btn = document.getElementById('btn-install') as HTMLButtonElement;
    if (!this.selectedPart) {
      btn.disabled = true;
      btn.textContent = '🔧 Instalar esta peça';
      btn.className = 'btn-install';
      return;
    }

    const isInstalled = this.installedParts.has(this.selectedPart);

    if (this.mode === 'assemble') {
      if (isInstalled) {
        btn.disabled = true;
        btn.textContent = '✓ Peça já instalada';
        btn.className = 'btn-install';
      } else {
        const expectedPart = ASSEMBLY_ORDER[this.currentStep];
        if (this.selectedPart === expectedPart) {
          btn.disabled = false;
          btn.textContent = '🔧 Instalar esta peça';
          btn.className = 'btn-install next-correct';
        } else {
          btn.disabled = false;
          btn.textContent = '⚠️ Esta peça ainda não é a próxima!';
          btn.className = 'btn-install wrong';
        }
      }
    } else {
      if (!isInstalled) {
        btn.disabled = true;
        btn.textContent = 'Peça não está instalada';
        btn.className = 'btn-install';
      } else {
        const expectedPart = DISASSEMBLY_ORDER[this.currentStep];
        if (this.selectedPart === expectedPart) {
          btn.disabled = false;
          btn.textContent = '🔩 Remover esta peça';
          btn.className = 'btn-install next-correct';
        } else {
          btn.disabled = false;
          btn.textContent = '⚠️ Remova as outras peças primeiro!';
          btn.className = 'btn-install wrong';
        }
      }
    }
  }

  private installSelectedPart(): void {
    if (!this.selectedPart) return;

    if (this.mode === 'assemble') {
      this.assemblePart(this.selectedPart);
    } else {
      this.disassemblePart(this.selectedPart);
    }
  }

  private assemblePart(partId: string): void {
    const expectedPart = ASSEMBLY_ORDER[this.currentStep];

    if (partId !== expectedPart) {
      const data = COMPONENTS.find((c) => c.id === partId)!;
      const expected = COMPONENTS.find((c) => c.id === expectedPart)!;
      this.showModal(
        '⚠️',
        'Ordem incorreta!',
        `A próxima peça a ser instalada é a ${expected.name}. Na montagem, a ordem é importante para facilitar o processo e evitar danos.`,
        `Dica: ${this.getOrderHint(this.currentStep)}`
      );
      return;
    }

    this.installedParts.add(partId);
    const data = COMPONENTS.find((c) => c.id === partId)!;

    this.placeComponent(partId);
    this.showConnections(partId);

    this.showModal(
      '✅',
      `${data.name} instalada com sucesso!`,
      this.getInstallMessage(partId),
      `Progresso: ${this.installedParts.size} de ${COMPONENTS.length} peças instaladas`
    );

    this.currentStep++;
    this.renderInventory();
    this.updateStep();
    this.updateInstallButton();
    this.highlightSlot(partId, true);

    if (this.installedParts.size === COMPONENTS.length) {
      setTimeout(() => this.showCelebration(), 1200);
    }
  }

  private disassemblePart(partId: string): void {
    const expectedPart = DISASSEMBLY_ORDER[this.currentStep];

    if (partId !== expectedPart) {
      const data = COMPONENTS.find((c) => c.id === partId)!;
      const expected = COMPONENTS.find((c) => c.id === expectedPart)!;
      this.showModal(
        '⚠️',
        'Ordem incorreta!',
        `Para desmontar com segurança, primeiro remova a ${expected.name}. A ordem inversa da montagem é a mais segura.`,
        `Dica: Comece pelas peças que estão por cima e que mais facilmente podem ser removidas.`
      );
      return;
    }

    this.installedParts.delete(partId);
    const data = COMPONENTS.find((c) => c.id === partId)!;

    this.removeComponent(partId);
    this.removeConnection(partId);

    this.showModal(
      '🔩',
      `${data.name} removida!`,
      this.getDisassembleMessage(partId),
      `Progresso: ${COMPONENTS.length - this.installedParts.size} de ${COMPONENTS.length} peças removidas`
    );

    this.currentStep++;
    this.renderInventory();
    this.updateStep();
    this.updateInstallButton();
    this.highlightSlot(partId, false);

    if (this.installedParts.size === 0) {
      setTimeout(() => {
        this.showModal(
          '🎉',
          'Desmontagem completa!',
          'Todas as peças foram removidas com sucesso. Agora você pode montar novamente clicando em "Montar"!',
          ''
        );
      }, 1200);
    }
  }

  private placeComponent(partId: string): void {
    const workbench = document.getElementById('workbench')!;
    const slot = document.getElementById(`slot-${partId}`)!;
    const data = COMPONENTS.find((c) => c.id === partId)!;

    slot.classList.add('installed');

    const placed = document.createElement('div');
    placed.className = 'placed-component';
    placed.id = `placed-${partId}`;
    placed.style.background = data.color;

    const slotRect = slot.getBoundingClientRect();
    const workbenchRect = workbench.getBoundingClientRect();
    const left = slotRect.left - workbenchRect.left + slotRect.width * 0.1;
    const top = slotRect.top - workbenchRect.top + slotRect.height * 0.1;
    const width = slotRect.width * 0.8;
    const height = slotRect.height * 0.8;

    placed.style.left = `${left}px`;
    placed.style.top = `${top}px`;
    placed.style.width = `${width}px`;
    placed.style.height = `${height}px`;
    placed.innerHTML = `${data.icon}<span class="placed-label">${data.name}</span>`;
    placed.addEventListener('click', () => this.selectPart(partId));

    workbench.appendChild(placed);
  }

  private removeComponent(partId: string): void {
    const placed = document.getElementById(`placed-${partId}`);
    if (placed) {
      placed.style.transition = 'all 0.3s ease';
      placed.style.opacity = '0';
      placed.style.transform = 'scale(0.5)';
      setTimeout(() => placed.remove(), 300);
    }
    const slot = document.getElementById(`slot-${partId}`);
    if (slot) slot.classList.remove('installed');
  }

  private showConnections(partId: string): void {
    const svg = document.getElementById('connections-svg')!;
    const workbench = document.getElementById('workbench')!;
    const wbRect = workbench.getBoundingClientRect();

    const relevantConnections = CONNECTIONS.filter(
      (c) =>
        (c.from === partId && this.installedParts.has(c.to)) ||
        (c.to === partId && this.installedParts.has(c.from))
    );

    relevantConnections.forEach((conn) => {
      const existing = document.getElementById(`conn-${conn.from}-${conn.to}`);
      if (existing) return;

      const fromSlot = document.getElementById(`slot-${conn.from}`);
      const toSlot = document.getElementById(`slot-${conn.to}`);
      if (!fromSlot || !toSlot) return;

      const fromRect = fromSlot.getBoundingClientRect();
      const toRect = toSlot.getBoundingClientRect();

      const x1 = fromRect.left - wbRect.left + fromRect.width / 2;
      const y1 = fromRect.top - wbRect.top + fromRect.height / 2;
      const x2 = toRect.left - wbRect.left + toRect.width / 2;
      const y2 = toRect.top - wbRect.top + toRect.height / 2;

      const line = document.createElementNS('http://www.w3.org/2000/svg', 'line');
      line.setAttribute('x1', `${x1}`);
      line.setAttribute('y1', `${y1}`);
      line.setAttribute('x2', `${x2}`);
      line.setAttribute('y2', `${y2}`);
      line.setAttribute('class', 'connection-line');
      line.id = `conn-${conn.from}-${conn.to}`;
      svg.appendChild(line);

      const midX = (x1 + x2) / 2;
      const midY = (y1 + y2) / 2;
      const text = document.createElementNS('http://www.w3.org/2000/svg', 'text');
      text.setAttribute('x', `${midX}`);
      text.setAttribute('y', `${midY - 6}`);
      text.setAttribute('class', 'connection-label');
      text.setAttribute('text-anchor', 'middle');
      text.textContent = conn.label;
      text.id = `conn-label-${conn.from}-${conn.to}`;
      svg.appendChild(text);
    });
  }

  private removeConnection(partId: string): void {
    const svg = document.getElementById('connections-svg')!;
    CONNECTIONS.forEach((conn) => {
      if (conn.from === partId || conn.to === partId) {
        document.getElementById(`conn-${conn.from}-${conn.to}`)?.remove();
        document.getElementById(`conn-label-${conn.from}-${conn.to}`)?.remove();
      }
    });
  }

  private highlightSlot(partId: string, installed: boolean): void {
    const slot = document.getElementById(`slot-${partId}`);
    if (slot) {
      if (installed) {
        slot.classList.add('flash-success');
        setTimeout(() => slot.classList.remove('flash-success'), 600);
      }
    }
  }

  private clearWorkbench(): void {
    document.querySelectorAll('.placed-component').forEach((el) => el.remove());
    document.querySelectorAll('[class^="slot-"]').forEach((el) => {
      el.classList.remove('installed', 'active', 'flash-success');
    });
    const svg = document.getElementById('connections-svg')!;
    svg.innerHTML = '';
  }

  private updateStep(): void {
    const stepText = document.getElementById('step-text')!;
    const total = COMPONENTS.length;

    if (this.mode === 'assemble') {
      if (this.currentStep >= total) {
        stepText.textContent = '🎉 Montagem completa! Parabéns!';
      } else {
        const expectedPart = ASSEMBLY_ORDER[this.currentStep];
        const data = COMPONENTS.find((c) => c.id === expectedPart)!;
        stepText.textContent = `Passo ${this.currentStep + 1} de ${total} — Instale: ${data.name}`;
      }
    } else {
      if (this.currentStep >= total) {
        stepText.textContent = '🔩 Desmontagem completa!';
      } else {
        const expectedPart = DISASSEMBLY_ORDER[this.currentStep];
        const data = COMPONENTS.find((c) => c.id === expectedPart)!;
        stepText.textContent = `Passo ${this.currentStep + 1} de ${total} — Remova: ${data.name}`;
      }
    }
  }

  private getOrderHint(step: number): string {
    const hints: string[] = [
      'A placa-mãe é a base. Comece sempre por ela!',
      'Depois da placa-mãe, instale o processador no soquete.',
      'Com o processador no lugar, é hora da memória RAM.',
      'Agora instale o armazenamento para o sistema operacional.',
      'Com as peças base prontas, instale a placa de vídeo.',
      'Por último, instale a fonte e faça todas as conexões de energia.'
    ];
    return hints[step] || '';
  }

  private getInstallMessage(partId: string): string {
    const messages: Record<string, string> = {
      motherboard:
        'A placa-mãe foi fixada no gabinete. Agora ela é a base para todas as outras peças!',
      cpu:
        'O processador foi instalado no soquete. Ele é o cérebro do computador e agora está pronto para trabalhar!',
      ram:
        'A memória RAM foi encaixada. Agora o computador tem memória de trabalho para rodar programas!',
      storage:
        'O armazenamento está conectado. Aqui ficarão guardados o sistema operacional e todos os seus arquivos!',
      gpu:
        'A placa de vídeo está no slot PCIe. Agora o computador pode gerar imagens e gráficos na tela!',
      psu:
        'A fonte foi instalada e todos os cabos conectados. O computador agora tem energia para funcionar!'
    };
    return messages[partId] || '';
  }

  private getDisassembleMessage(partId: string): string {
    const messages: Record<string, string> = {
      psu:
        'A fonte foi desconectada. Lembre-se: sempre desconecte a fonte ANTES de remover qualquer outra peça!',
      gpu:
        'A placa de vídeo foi removida. Cuidado: primeiramente desconecte o cabo de energia antes de puxar a placa.',
      storage:
        'O armazenamento foi removido. Seus dados estão guardados nele — manuseie com cuidado!',
      ram:
        'A memória RAM foi removida. Ela liberou os slots de memória da placa-mãe.',
      cpu:
        'O processador foi removido do soquete. Ele é muito delicado — guarde na embalagem original.',
      motherboard:
        'A placa-mãe foi removida do gabinete. Todos os componentes que estavam nela foram desmontados!'
    };
    return messages[partId] || '';
  }

  private showModal(
    icon: string,
    title: string,
    message: string,
    details: string
  ): void {
    const overlay = document.getElementById('modal-overlay')!;
    overlay.classList.remove('hidden');
    document.getElementById('modal-icon')!.textContent = icon;
    document.getElementById('modal-title')!.textContent = title;
    document.getElementById('modal-message')!.textContent = message;
    document.getElementById('modal-details')!.textContent = details;
  }

  private closeModal(): void {
    document.getElementById('modal-overlay')!.classList.add('hidden');
  }

  private showCelebration(): void {
    const celebration = document.getElementById('celebration')!;
    celebration.classList.remove('hidden');

    this.createConfetti();

    const specs = document.getElementById('final-specs')!;
    specs.innerHTML = '<h4 style="margin-bottom:0.5rem;font-size:0.9rem;color:#374151;">Especificações do Computador Montado:</h4>';
    COMPONENTS.forEach((comp) => {
      specs.innerHTML += `
        <div class="spec-item">
          <div class="spec-icon" style="background:${comp.bgColor}">${comp.icon}</div>
          <span><strong>${comp.name}</strong> — ${comp.spec}</span>
        </div>
      `;
    });
  }

  private closeCelebration(): void {
    document.getElementById('celebration')!.classList.add('hidden');
  }

  private createConfetti(): void {
    const container = document.getElementById('confetti')!;
    container.innerHTML = '';
    const colors = [
      '#2563eb',
      '#10b981',
      '#f59e0b',
      '#ef4444',
      '#8b5cf6',
      '#ec4899'
    ];

    for (let i = 0; i < 50; i++) {
      const piece = document.createElement('div');
      piece.className = 'confetti-piece';
      piece.style.left = `${Math.random() * 100}%`;
      piece.style.top = `${Math.random() * 20}%`;
      piece.style.background = colors[Math.floor(Math.random() * colors.length)];
      piece.style.animationDelay = `${Math.random() * 2}s`;
      piece.style.animationDuration = `${2 + Math.random() * 2}s`;
      piece.style.width = `${6 + Math.random() * 8}px`;
      piece.style.height = `${6 + Math.random() * 8}px`;
      piece.style.borderRadius = Math.random() > 0.5 ? '50%' : '2px';
      container.appendChild(piece);
    }
  }

  private onDragStart(e: DragEvent, partId: string): void {
    this.draggedPart = partId;
    (e.target as HTMLElement).classList.add('dragging');
    if (e.dataTransfer) {
      e.dataTransfer.effectAllowed = 'move';
      e.dataTransfer.setData('text/plain', partId);
    }
  }

  private onDragEnd(): void {
    this.draggedPart = null;
    document.querySelectorAll('.part-card.dragging').forEach((el) => {
      el.classList.remove('dragging');
    });
    document.querySelectorAll('[class^="slot-"].active').forEach((el) => {
      el.classList.remove('active');
    });
  }

  private onDragOver(e: DragEvent): void {
    e.preventDefault();
    if (e.dataTransfer) {
      e.dataTransfer.dropEffect = 'move';
    }
  }

  private onSlotDragOver(e: DragEvent, slotId: string): void {
    e.preventDefault();
    const slot = document.getElementById(`slot-${slotId}`);
    if (slot && !slot.classList.contains('installed')) {
      slot.classList.add('active');
    }
  }

  private onSlotDragLeave(slotId: string): void {
    const slot = document.getElementById(`slot-${slotId}`);
    if (slot) slot.classList.remove('active');
  }

  private onDrop(e: DragEvent, slotId: string): void {
    e.preventDefault();
    const partId = e.dataTransfer?.getData('text/plain');
    if (!partId) return;

    const slot = document.getElementById(`slot-${slotId}`);
    if (slot) slot.classList.remove('active');

    this.selectPart(partId);

    if (partId === slotId) {
      this.installSelectedPart();
    } else {
      const data = COMPONENTS.find((c) => c.id === partId)!;
      const slotData = COMPONENTS.find((c) => c.slot === slotId);
      const slotName = slotData ? slotData.name : slotId;

      this.showModal(
        '❌',
        'Peça no local errado!',
        `A peça "${data.name}" não pertence a este local. O correto seria conectá-la em: ${slotName}.`,
        'Selecione a peça no painel lateral e clique em "Instalar" para colocá-la no local correto.'
      );
    }
  }
}

document.addEventListener('DOMContentLoaded', () => {
  new ComputerAssemblyApp();
});
