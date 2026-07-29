(() => {
  const supportedLocales = ["en", "es", "pt-BR", "ru", "zh-CN", "fr"];
  const defaultLocale = "en";
  const localeNames = {
    en: "English",
    es: "Español",
    "pt-BR": "Português (BR)",
    ru: "Русский",
    "zh-CN": "中文",
    fr: "Français",
  };

  const translations = {
    es: {
      description: "ROYAL UNION es su equipo de abastecimiento y cadena de suministro en China para comercio electrónico, mayoristas y minoristas.",
      "utility.based": "Con base en Yiwu · Al servicio de compradores de todo el mundo",
      "nav.solutions": "Soluciones", "nav.capabilities": "Capacidades", "nav.categories": "Categorías", "nav.hub": "Centro de abastecimiento", "nav.why": "POR QUÉ ROYAL UNION", "nav.cta": "Obtenga un plan de abastecimiento",
      "hero.eyebrow": "Abastecimiento en China, con control", "hero.title": "Su equipo de abastecimiento<br />en China. <em>Hecho para crecer.</em>", "hero.copy": "ROYAL UNION ayuda a marcas de comercio electrónico, importadores y minoristas a abastecerse mejor, desde desarrollo de producto y control de calidad hasta consolidación y entrega global.", "hero.primary": "Obtenga su plan de abastecimiento", "hero.secondary": "Explore nuestras capacidades",
      "intro.eyebrow": "Para compradores con ambición", "intro.title": "Un socio de cadena de suministro.<br /><em>Distintas rutas de crecimiento.</em>", "intro.copy": "Tanto si lanza una línea de comercio electrónico en Estados Unidos como si consolida pedidos mayoristas para América Latina, Europa del Este o Rusia, adaptamos la ruta de abastecimiento a su modelo de negocio.",
      "statement.title": "No solo encontramos productos.<br />Hacemos que el abastecimiento en China sea <em>más fácil de controlar.</em>", "statement.copy": "Un equipo local debe reducir la complejidad operativa, no añadir otra capa de incertidumbre. Por eso cada servicio se basa en visibilidad, calidad y ejecución.",
      "cap.eyebrow": "Capacidad integral", "cap.title": "De una idea de producto a<br /><em>un envío en el que puede confiar.</em>", "cap.copy": "Elija un servicio concreto o déjenos gestionar todo el ciclo de abastecimiento. Nuestro papel se adapta a las necesidades de su equipo.",
      "why.eyebrow": "Por qué ROYAL UNION", "why.title": "Lo bastante grandes para cumplir.<br /><em>Lo bastante cercanos para cuidar.</em>", "why.copy": "ROYAL UNION combina el acceso práctico al mercado de Yiwu con la disciplina de una organización de cadena de suministro. Recibe un equipo dedicado que comunica con claridad, sigue cada detalle y mantiene activa su compra.", "why.cta": "Inicie una conversación",
      "ops.eyebrow": "Ejecución local", "ops.title": "Donde los pedidos quedan<br /><em>listos para enviar.</em>", "ops.copy": "Nuestras operaciones en Yiwu integran productos de distintos proveedores en un flujo controlado: recepción, revisión, organización y preparación para la siguiente etapa.", "ops.cta": "Hable con nuestro equipo de abastecimiento",
      "process.eyebrow": "Cómo trabajamos", "process.title": "Una ruta clara desde su solicitud<br />hasta una <em>entrega fiable.</em>",
      "contact.eyebrow": "Comience su plan de abastecimiento", "contact.title": "Cuéntenos qué<br /><em>quiere crear.</em>", "contact.copy": "Comparta lo esencial. Nuestro equipo revisará su solicitud y responderá con un siguiente paso práctico.", "form.name": "Nombre completo", "form.email": "Correo electrónico empresarial", "form.company": "Empresa", "form.market": "Mercado principal", "form.source": "¿Qué desea abastecer?", "form.submit": "Solicitar un plan de abastecimiento", "form.note": "Al enviar, acepta que nos pongamos en contacto sobre su solicitud de abastecimiento.",
      "footer.copy": "Apoyo de abastecimiento y cadena de suministro en China para compradores ambiciosos de todo el mundo.", "whatsapp": "Escríbanos por WhatsApp",
      "blog.eyebrow": "Base de conocimiento ROYAL UNION", "blog.title": "Blog e <em>Ideas.</em>", "blog.copy": "Conocimientos prácticos para compradores que se abastecen en China: mercado de Yiwu, desarrollo de producto, control de calidad, cumplimiento y logística inteligente.", "blog.coming": "Artículos próximamente", "blog.heading": "Un espacio de contenido creado para la confianza a largo plazo.", "blog.body": "Esta página está reservada para futuros artículos de abastecimiento, casos de clientes y actualizaciones de mercado. Cada artículo responderá a una pregunta real del comprador y enlazará con una solución relevante."
    },
    "pt-BR": {
      description: "ROYAL UNION é sua equipe de sourcing e cadeia de suprimentos na China para e-commerce, atacado e varejo.",
      "utility.based": "Baseados em Yiwu · Atendendo compradores no mundo todo",
      "nav.solutions": "Soluções", "nav.capabilities": "Capacidades", "nav.categories": "Categorias", "nav.hub": "Centro de sourcing", "nav.why": "POR QUE A ROYAL UNION", "nav.cta": "Obtenha um plano de sourcing",
      "hero.eyebrow": "Sourcing na China, com controle", "hero.title": "Sua equipe de sourcing<br />na China. <em>Feita para escalar.</em>", "hero.copy": "A ROYAL UNION ajuda marcas de e-commerce, importadores e varejistas a comprar melhor — do desenvolvimento de produto e controle de qualidade à consolidação e entrega global.", "hero.primary": "Obtenha seu plano de sourcing", "hero.secondary": "Conheça nossas capacidades",
      "intro.eyebrow": "Para compradores ambiciosos", "intro.title": "Um parceiro de cadeia de suprimentos.<br /><em>Diferentes rotas para crescer.</em>", "intro.copy": "Seja lançando uma linha de e-commerce nos Estados Unidos ou consolidando pedidos de atacado para a América Latina, Europa Oriental ou Rússia, adaptamos a rota de sourcing ao seu modelo de negócio.",
      "statement.title": "Não apenas encontramos produtos.<br />Tornamos o sourcing na China <em>mais fácil de controlar.</em>", "statement.copy": "Uma equipe local de sourcing deve reduzir a complexidade operacional, não adicionar outra camada de incerteza. Por isso, cada serviço é construído sobre visibilidade, qualidade e execução.",
      "cap.eyebrow": "Capacidade de ponta a ponta", "cap.title": "Da ideia de produto a<br /><em>uma remessa em que você confia.</em>", "cap.copy": "Escolha um serviço específico ou deixe-nos gerir todo o ciclo de sourcing. Nosso papel se adapta às necessidades da sua equipe.",
      "why.eyebrow": "Por que a ROYAL UNION", "why.title": "Grandes o bastante para entregar.<br /><em>Perto o bastante para cuidar.</em>", "why.copy": "A ROYAL UNION combina acesso prático ao mercado de Yiwu com a disciplina de uma organização de cadeia de suprimentos. Você recebe uma equipe dedicada que comunica com clareza, acompanha os detalhes e mantém sua compra em movimento.", "why.cta": "Inicie uma conversa",
      "ops.eyebrow": "Execução local", "ops.title": "Onde os pedidos ficam<br /><em>prontos para embarcar.</em>", "ops.copy": "Nossas operações em Yiwu reúnem produtos de diferentes fornecedores em um fluxo controlado — recebimento, conferência, organização e preparação para a próxima etapa.", "ops.cta": "Fale com nossa equipe de sourcing",
      "process.eyebrow": "Como trabalhamos", "process.title": "Uma rota clara do pedido<br />à <em>entrega confiável.</em>",
      "contact.eyebrow": "Comece seu plano de sourcing", "contact.title": "Conte-nos o que<br /><em>você quer criar.</em>", "contact.copy": "Compartilhe o essencial. Nossa equipe analisará sua solicitação e retornará com um próximo passo prático.", "form.name": "Nome completo", "form.email": "E-mail corporativo", "form.company": "Empresa", "form.market": "Mercado principal", "form.source": "O que você deseja comprar?", "form.submit": "Solicitar um plano de sourcing", "form.note": "Ao enviar, você concorda em ser contatado sobre sua solicitação de sourcing.",
      "footer.copy": "Suporte de sourcing e cadeia de suprimentos na China para compradores ambiciosos em todo o mundo.", "whatsapp": "Fale conosco no WhatsApp",
      "blog.eyebrow": "Base de conhecimento ROYAL UNION", "blog.title": "Blog e <em>Insights.</em>", "blog.copy": "Conteúdo prático para compradores que fazem sourcing na China: mercado de Yiwu, desenvolvimento de produto, controle de qualidade, conformidade e logística inteligente.", "blog.coming": "Artigos em breve", "blog.heading": "Uma área de conteúdo construída para confiança de longo prazo.", "blog.body": "Esta página está reservada para futuros artigos de sourcing, estudos de caso e atualizações de mercado. Cada artigo responderá a uma dúvida real do comprador e apontará para uma solução relevante."
    },
    ru: {
      description: "ROYAL UNION — ваша команда по закупкам и цепочке поставок в Китае для e-commerce, опта и розницы.",
      "utility.based": "Работаем из Иу · Помогаем покупателям по всему миру",
      "nav.solutions": "Решения", "nav.capabilities": "Возможности", "nav.categories": "Категории", "nav.hub": "Центр закупок", "nav.why": "ПОЧЕМУ ROYAL UNION", "nav.cta": "Получить план закупок",
      "hero.eyebrow": "Закупки в Китае под контролем", "hero.title": "Ваша команда по закупкам<br />в Китае. <em>Создана для роста.</em>", "hero.copy": "ROYAL UNION помогает e-commerce брендам, импортёрам и ритейлерам закупать эффективнее — от разработки товара и контроля качества до консолидации и международной доставки.", "hero.primary": "Получить план закупок", "hero.secondary": "Наши возможности",
      "intro.eyebrow": "Для амбициозных покупателей", "intro.title": "Один партнёр по цепочке поставок.<br /><em>Разные маршруты к росту.</em>", "intro.copy": "Запускаете ли вы e-commerce линейку в США или консолидируете оптовые заказы для Латинской Америки, Восточной Европы или России — мы адаптируем маршрут закупок под вашу бизнес-модель.",
      "statement.title": "Мы не просто находим товары.<br />Мы делаем закупки в Китае <em>проще для контроля.</em>", "statement.copy": "Локальная команда по закупкам должна снижать операционную сложность, а не создавать новую неопределённость. Поэтому каждый сервис строится на прозрачности, качестве и исполнении.",
      "cap.eyebrow": "Полный цикл", "cap.title": "От идеи товара до<br /><em>отгрузки, которой вы доверяете.</em>", "cap.copy": "Выберите отдельную услугу или поручите нам полный цикл закупок. Наша роль гибко меняется под потребности вашей команды.",
      "why.eyebrow": "Почему ROYAL UNION", "why.title": "Достаточно крупные, чтобы выполнить.<br /><em>Достаточно близкие, чтобы заботиться.</em>", "why.copy": "ROYAL UNION сочетает практический доступ к рынку Иу с дисциплиной профессиональной организации цепочек поставок. Вы получаете выделенную команду, которая ясно общается, контролирует детали и поддерживает движение закупок.", "why.cta": "Начать разговор",
      "ops.eyebrow": "Исполнение на месте", "ops.title": "Где заказы становятся<br /><em>готовыми к отправке.</em>", "ops.copy": "Наши операции в Иу объединяют товары разных поставщиков в контролируемый процесс: приёмка, проверка, организация и подготовка к следующему этапу пути.", "ops.cta": "Связаться с командой закупок",
      "process.eyebrow": "Как мы работаем", "process.title": "Чёткий путь от запроса<br />до <em>надёжной доставки.</em>",
      "contact.eyebrow": "Начните свой план закупок", "contact.title": "Расскажите, что<br /><em>вы хотите создать.</em>", "contact.copy": "Сообщите главное. Наша команда рассмотрит ваш запрос и предложит практический следующий шаг.", "form.name": "Полное имя", "form.email": "Рабочий e-mail", "form.company": "Компания", "form.market": "Основной рынок", "form.source": "Что вы хотите закупать?", "form.submit": "Запросить план закупок", "form.note": "Отправляя форму, вы соглашаетесь на связь по вашему запросу на закупки.",
      "footer.copy": "Поддержка закупок и цепочки поставок в Китае для амбициозных покупателей по всему миру.", "whatsapp": "Написать в WhatsApp",
      "blog.eyebrow": "База знаний ROYAL UNION", "blog.title": "Блог и <em>инсайты.</em>", "blog.copy": "Практические знания для покупателей в Китае: рынок Иу, разработка товаров, контроль качества, соответствие требованиям и эффективная логистика.", "blog.coming": "Статьи скоро", "blog.heading": "Контент-пространство для долгосрочного доверия покупателей.", "blog.body": "Эта страница предназначена для будущих статей о закупках, кейсов и обновлений рынка. Каждая публикация будет отвечать на реальный вопрос покупателя и вести к соответствующему решению."
    },
    "zh-CN": {
      description: "ROYAL UNION 为跨境电商、进口商、批发和零售客户提供中国采购及供应链服务。",
      "utility.based": "立足义乌 · 服务全球买家",
      "nav.solutions": "解决方案", "nav.capabilities": "服务能力", "nav.categories": "产品品类", "nav.hub": "采购中心", "nav.why": "为什么选择 ROYAL UNION", "nav.cta": "获取采购方案",
      "hero.eyebrow": "可控的中国采购", "hero.title": "您的中国采购<br />团队。<em>为增长而生。</em>", "hero.copy": "ROYAL UNION 帮助跨境电商品牌、进口商和零售商更高效地完成采购——从产品开发、品质管理到集货整合与全球交付。", "hero.primary": "获取采购方案", "hero.secondary": "了解服务能力",
      "intro.eyebrow": "为有雄心的买家而设", "intro.title": "一个供应链伙伴。<br /><em>多条增长路径。</em>", "intro.copy": "无论您是在美国推出电商产品线，还是为拉美、东欧或俄罗斯整合批发订单，我们都会根据您的商业模式制定合适的采购路径。",
      "statement.title": "我们不只是寻找产品。<br />我们让中国采购 <em>更容易掌控。</em>", "statement.copy": "本地采购团队应当降低运营复杂度，而不是增加不确定性。因此，每一项服务都围绕透明度、质量和执行力展开。",
      "cap.eyebrow": "端到端服务能力", "cap.title": "从产品创意到<br /><em>值得信赖的出货。</em>", "cap.copy": "您可以选择单项服务，也可以委托我们管理完整采购周期。我们的角色会随团队需求灵活调整。",
      "why.eyebrow": "为什么选择 ROYAL UNION", "why.title": "规模足以交付。<br /><em>贴近足以关怀。</em>", "why.copy": "ROYAL UNION 将义乌市场的一线资源与供应链组织的专业管理相结合。您将获得一个沟通清晰、跟进细节并推动采购持续前进的专属团队。", "why.cta": "开始沟通",
      "ops.eyebrow": "本地执行", "ops.title": "订单在这里<br /><em>准备出运。</em>", "ops.copy": "我们的义乌运营团队将不同供应商的产品纳入受控流程：收货、检查、整理，并为下一段运输做好准备。", "ops.cta": "联系采购团队",
      "process.eyebrow": "我们的工作方式", "process.title": "从需求到<br /><em>可靠交付的清晰路径。</em>",
      "contact.eyebrow": "启动您的采购方案", "contact.title": "告诉我们您<br /><em>想要打造什么。</em>", "contact.copy": "请分享核心需求。我们的团队将审核您的请求，并提供可执行的下一步建议。", "form.name": "姓名", "form.email": "企业邮箱", "form.company": "公司名称", "form.market": "主要市场", "form.source": "您希望采购什么？", "form.submit": "申请采购方案", "form.note": "提交后，您同意我们就采购需求与您联系。",
      "footer.copy": "为全球有雄心的买家提供中国采购与供应链支持。", "whatsapp": "WhatsApp 联系我们",
      "blog.eyebrow": "ROYAL UNION 知识中心", "blog.title": "博客与<em>洞察。</em>", "blog.copy": "面向中国采购买家的实用知识：义乌市场、产品开发、质量管理、合规与更高效的物流。", "blog.coming": "文章即将上线", "blog.heading": "为建立长期买家信任而打造的内容中心。", "blog.body": "本页面将用于发布采购文章、客户案例和市场动态。每篇文章都会回答买家的真实问题，并链接到相关采购解决方案。"
    },
    fr: {
      description: "ROYAL UNION est votre équipe d'approvisionnement et de chaîne logistique en Chine pour l'e-commerce, le commerce de gros et le retail.",
      "utility.based": "Basés à Yiwu · Au service des acheteurs du monde entier",
      "nav.solutions": "Solutions", "nav.capabilities": "Expertise", "nav.categories": "Catégories", "nav.hub": "Hub d'approvisionnement", "nav.why": "POURQUOI ROYAL UNION", "nav.cta": "Obtenir un plan d'approvisionnement",
      "hero.eyebrow": "L'approvisionnement en Chine, sous contrôle", "hero.title": "Votre équipe d'approvisionnement<br />en Chine. <em>Conçue pour grandir.</em>", "hero.copy": "ROYAL UNION aide les marques e-commerce, importateurs et distributeurs à mieux s'approvisionner — du développement produit et du contrôle qualité à la consolidation et à la livraison mondiale.", "hero.primary": "Obtenir votre plan d'approvisionnement", "hero.secondary": "Découvrir notre expertise",
      "intro.eyebrow": "Pour les acheteurs ambitieux", "intro.title": "Un partenaire de chaîne logistique.<br /><em>Différentes voies de croissance.</em>", "intro.copy": "Que vous lanciez une ligne e-commerce aux États-Unis ou consolidiez des commandes de gros pour l'Amérique latine, l'Europe de l'Est ou la Russie, nous adaptons le parcours d'approvisionnement à votre modèle économique.",
      "statement.title": "Nous ne trouvons pas seulement des produits.<br />Nous rendons l'approvisionnement en Chine <em>plus facile à piloter.</em>", "statement.copy": "Une équipe locale doit réduire la complexité opérationnelle, et non ajouter de l'incertitude. C'est pourquoi chaque service est conçu autour de la visibilité, de la qualité et de l'exécution.",
      "cap.eyebrow": "Une expertise de bout en bout", "cap.title": "D'une idée produit à<br /><em>une expédition fiable.</em>", "cap.copy": "Choisissez un service ciblé ou confiez-nous l'ensemble du cycle d'approvisionnement. Notre rôle s'adapte aux besoins de votre équipe.",
      "why.eyebrow": "Pourquoi ROYAL UNION", "why.title": "Assez grands pour livrer.<br /><em>Assez proches pour vous accompagner.</em>", "why.copy": "ROYAL UNION associe l'accès concret au marché de Yiwu à la rigueur d'une organisation de chaîne logistique. Vous bénéficiez d'une équipe dédiée qui communique clairement, suit les détails et fait avancer vos achats.", "why.cta": "Démarrer une conversation",
      "ops.eyebrow": "Exécution locale", "ops.title": "Là où les commandes deviennent<br /><em>prêtes à expédier.</em>", "ops.copy": "Nos opérations à Yiwu réunissent les produits de différents fournisseurs dans un flux maîtrisé : réception, contrôle, organisation et préparation de la prochaine étape.", "ops.cta": "Parler à notre équipe sourcing",
      "process.eyebrow": "Notre méthode", "process.title": "Un parcours clair de votre demande<br />à une <em>livraison fiable.</em>",
      "contact.eyebrow": "Démarrez votre plan d'approvisionnement", "contact.title": "Dites-nous ce que<br /><em>vous voulez créer.</em>", "contact.copy": "Partagez l'essentiel. Notre équipe étudiera votre demande et vous proposera une prochaine étape concrète.", "form.name": "Nom complet", "form.email": "E-mail professionnel", "form.company": "Entreprise", "form.market": "Marché principal", "form.source": "Que souhaitez-vous approvisionner ?", "form.submit": "Demander un plan d'approvisionnement", "form.note": "En envoyant ce formulaire, vous acceptez d'être contacté au sujet de votre demande.",
      "footer.copy": "Soutien en approvisionnement et chaîne logistique en Chine pour les acheteurs ambitieux du monde entier.", "whatsapp": "Nous écrire sur WhatsApp",
      "blog.eyebrow": "Base de connaissances ROYAL UNION", "blog.title": "Blog & <em>insights.</em>", "blog.copy": "Des connaissances pratiques pour les acheteurs en Chine : marché de Yiwu, développement produit, contrôle qualité, conformité et logistique plus intelligente.", "blog.coming": "Articles à venir", "blog.heading": "Un espace de contenu conçu pour une confiance durable.", "blog.body": "Cette page est réservée aux futurs articles sourcing, études de cas et actualités de marché. Chaque article répondra à une vraie question d'acheteur et renverra vers une solution pertinente."
    }
  };

  const params = new URLSearchParams(window.location.search);
  const requestedLocale = params.get("lang");
  const locale = supportedLocales.includes(requestedLocale) ? requestedLocale : defaultLocale;
  const strings = translations[locale] || {};

  const setText = (selector, key, allowHtml = false) => {
    const value = strings[key];
    if (!value) return;
    document.querySelectorAll(selector).forEach((element) => {
      if (allowHtml) element.innerHTML = value;
      else element.textContent = value;
    });
  };

  document.documentElement.lang = locale;
  document.documentElement.dataset.locale = locale;
  document.querySelectorAll("[data-i18n]").forEach((element) => {
    const key = element.dataset.i18n;
    const value = strings[key];
    if (!value) return;
    if (element.dataset.i18nHtml === "true") element.innerHTML = value;
    else element.textContent = value;
  });

  document.querySelectorAll("[data-i18n-placeholder]").forEach((element) => {
    const value = strings[element.dataset.i18nPlaceholder];
    if (value) element.setAttribute("placeholder", value);
  });

  const setContent = (selector, key, allowHtml = false) => {
    const value = strings[key];
    if (!value) return;
    document.querySelectorAll(selector).forEach((element) => {
      if (allowHtml) element.innerHTML = value;
      else element.textContent = value;
    });
  };

  const setLeadingText = (selector, key) => {
    const value = strings[key];
    if (!value) return;
    document.querySelectorAll(selector).forEach((element) => {
      const textNode = [...element.childNodes].find((node) => node.nodeType === Node.TEXT_NODE && node.nodeValue.trim());
      if (textNode) textNode.nodeValue = ` ${value} `;
      else element.prepend(document.createTextNode(`${value} `));
    });
  };

  setContent(".utility-inner > span", "utility.based");
  ["nav.solutions", "nav.capabilities", "nav.categories", "nav.hub", "nav.why"].forEach((key, index) => setLeadingText(`.nav-group:nth-of-type(${index + 1}) summary`, key));
  setLeadingText(".nav-cta", "nav.cta");

  setLeadingText(".hero-content > .eyebrow", "hero.eyebrow");
  setContent(".hero-content h1", "hero.title", true);
  setContent(".hero-content > p", "hero.copy");
  setLeadingText(".hero-actions .button-primary", "hero.primary");
  setLeadingText(".hero-actions .text-link", "hero.secondary");

  const marketHeroTranslations = {
    en: { eyebrow: "Yiwu market. Global supply.", title: "Start in Yiwu.<br /><em>Scale worldwide.</em>", copy: "Discover the right product opportunities at the source, then turn them into a controlled sourcing programme — supplier coordination, quality assurance, consolidation and global delivery.", primary: "Build your Yiwu sourcing plan", secondary: "Explore our solutions" },
    es: { eyebrow: "Mercado de Yiwu. Suministro global.", title: "Empiece en Yiwu.<br /><em>Escále en todo el mundo.</em>", copy: "Descubra las oportunidades de producto adecuadas en origen y conviértalas en un programa de abastecimiento controlado: coordinación de proveedores, calidad, consolidación y entrega global.", primary: "Cree su plan de abastecimiento en Yiwu", secondary: "Explore nuestras soluciones" },
    "pt-BR": { eyebrow: "Mercado de Yiwu. Fornecimento global.", title: "Comece em Yiwu.<br /><em>Escale globalmente.</em>", copy: "Descubra as oportunidades certas de produto na origem e transforme-as em um programa de sourcing controlado: coordenação de fornecedores, qualidade, consolidação e entrega global.", primary: "Crie seu plano de sourcing em Yiwu", secondary: "Conheça nossas soluções" },
    ru: { eyebrow: "Рынок Иу. Глобальные поставки.", title: "Начните в Иу.<br /><em>Масштабируйтесь по всему миру.</em>", copy: "Находите подходящие товары у источника и превращайте их в контролируемую программу закупок: координация поставщиков, контроль качества, консолидация и международная доставка.", primary: "Создать план закупок в Иу", secondary: "Посмотреть решения" },
    "zh-CN": { eyebrow: "义乌市场 · 全球供应", title: "从义乌出发。<br /><em>服务全球增长。</em>", copy: "在源头发现合适的产品机会，再将其转化为可控的采购方案——供应商协同、质量管理、集货整合与全球交付。", primary: "制定义乌采购方案", secondary: "了解解决方案" },
    fr: { eyebrow: "Marché de Yiwu. Approvisionnement mondial.", title: "Commencez à Yiwu.<br /><em>Développez-vous dans le monde.</em>", copy: "Identifiez les bonnes opportunités produit à la source, puis transformez-les en programme d’approvisionnement maîtrisé : coordination fournisseurs, qualité, consolidation et livraison mondiale.", primary: "Créer votre plan de sourcing à Yiwu", secondary: "Découvrir nos solutions" }
  };
  const marketHero = marketHeroTranslations[locale] || marketHeroTranslations.en;
  const marketHeroContent = document.querySelector(".hero-slide--market .hero-content");
  if (marketHeroContent) {
    const marketEyebrow = marketHeroContent.querySelector(".eyebrow");
    const marketHeading = marketHeroContent.querySelector("h1");
    const marketCopy = marketHeroContent.querySelector(":scope > p");
    const marketPrimary = marketHeroContent.querySelector(".button-primary");
    const marketSecondary = marketHeroContent.querySelector(".text-link");
    if (marketEyebrow) { const node = [...marketEyebrow.childNodes].find((item) => item.nodeType === Node.TEXT_NODE && item.nodeValue.trim()); if (node) node.nodeValue = ` ${marketHero.eyebrow} `; }
    if (marketHeading) marketHeading.innerHTML = marketHero.title;
    if (marketCopy) marketCopy.textContent = marketHero.copy;
    if (marketPrimary) { const node = [...marketPrimary.childNodes].find((item) => item.nodeType === Node.TEXT_NODE && item.nodeValue.trim()); if (node) node.nodeValue = `${marketHero.primary} `; }
    if (marketSecondary) { const node = [...marketSecondary.childNodes].find((item) => item.nodeType === Node.TEXT_NODE && item.nodeValue.trim()); if (node) node.nodeValue = `${marketHero.secondary} `; }
  }

  setLeadingText("#solutions .eyebrow", "intro.eyebrow");
  setContent("#solutions h2", "intro.title", true);
  setContent("#solutions .lead", "intro.copy");
  setContent(".statement h2", "statement.title", true);
  setContent(".statement-copy", "statement.copy");

  setLeadingText("#capabilities .eyebrow", "cap.eyebrow");
  setContent("#capabilities .section-heading h2", "cap.title", true);
  setContent("#capabilities .section-heading > p", "cap.copy");

  setLeadingText("#why-us .eyebrow", "why.eyebrow");
  setContent("#why-us h2", "why.title", true);
  setContent("#why-us .evidence-copy > p", "why.copy");
  setLeadingText("#why-us .text-link", "why.cta");

  setLeadingText(".operations .eyebrow", "ops.eyebrow");
  setContent(".operations h2", "ops.title", true);
  setContent(".operations p", "ops.copy");
  setLeadingText(".operations .button", "ops.cta");

  setLeadingText("#process .eyebrow", "process.eyebrow");
  setContent("#process h2", "process.title", true);

  setLeadingText("#contact .eyebrow", "contact.eyebrow");
  setContent("#contact h2", "contact.title", true);
  setContent("#contact .contact-grid > div > p", "contact.copy");
  setLeadingText(".inquiry-form > label:nth-of-type(1)", "form.name");
  setLeadingText(".inquiry-form > label:nth-of-type(2)", "form.email");
  setLeadingText(".form-split label:nth-child(1)", "form.company");
  setLeadingText(".form-split label:nth-child(2)", "form.market");
  setLeadingText(".inquiry-form > label:nth-of-type(3)", "form.source");
  setLeadingText(".inquiry-form button", "form.submit");
  setContent(".form-note", "form.note");

  setContent(".footer-inner > p", "footer.copy");
  setContent(".whatsapp > span", "whatsapp");

  setLeadingText(".blog-hero .eyebrow", "blog.eyebrow");
  setContent(".blog-hero h1", "blog.title", true);
  setContent(".blog-hero p", "blog.copy");
  setLeadingText(".blog-content .eyebrow", "blog.coming");
  setContent(".blog-empty h2", "blog.heading");
  setContent(".blog-empty p", "blog.body");

  if (strings.description) {
    document.querySelector('meta[name="description"]')?.setAttribute("content", strings.description);
  }

  const currentUrl = new URL(window.location.href);
  currentUrl.hash = "";
  if (locale === defaultLocale) currentUrl.searchParams.delete("lang");
  else currentUrl.searchParams.set("lang", locale);
  document.querySelector('link[rel="canonical"]')?.setAttribute("href", currentUrl.href);

  const languageSelect = document.querySelector("#language-select");
  if (languageSelect) {
    languageSelect.value = locale;
    languageSelect.addEventListener("change", () => {
      const nextUrl = new URL(window.location.href);
      if (languageSelect.value === defaultLocale) nextUrl.searchParams.delete("lang");
      else nextUrl.searchParams.set("lang", languageSelect.value);
      window.location.assign(nextUrl.href);
    });
  }

  const blogHomeLink = document.querySelector(".blog-hero")?.closest("body")?.querySelector(".site-header .text-link");
  if (blogHomeLink && locale !== defaultLocale) {
    blogHomeLink.href = `index.html?lang=${encodeURIComponent(locale)}`;
  }

  document.querySelectorAll('a[href="blog.html"]').forEach((link) => {
    if (locale !== defaultLocale) link.href = `blog.html?lang=${encodeURIComponent(locale)}`;
  });

  document.querySelectorAll("[data-locale-name]").forEach((element) => {
    element.textContent = localeNames[locale];
  });
})();
