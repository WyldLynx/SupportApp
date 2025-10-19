const DATA = {
  periods: [
    { id: "l30", label: "Last 30 days" },
    { id: "mtd", label: "Month to date" },
    { id: "qtd", label: "Quarter to date" },
    { id: "ytd", label: "Year to date" }
  ],
  teams: ["All", "Operations", "Sales", "Delivery", "Support", "Finance"],
  owners: [
    "All",
    "S. Patel",
    "L. Chen",
    "N. Harper",
    "D. Singh",
    "A. Rivers"
  ],
  clients: [
    {
      id: "acme",
      name: "Acme Mining",
      segment: "Enterprise",
      owner: "L. Chen",
      health: "At risk",
      revenueShare: 0.18,
      renewalWindow: "60 days",
      rag: "Amber",
      links: {
        contract: "https://example.com/cm/acme",
        hubspot: "https://example.com/hubspot/acme",
        xero: "https://example.com/xero/acme",
        devops: "https://example.com/devops/acme"
      },
      scope: { period: ["l30", "mtd", "qtd"], team: ["Sales", "Delivery", "Support", "Finance"], owner: ["L. Chen"], client: ["acme"] },
      stats: {
        sales: "Pipeline $2.8m (stage 5)",
        delivery: "Schedule variance +4.5%",
        support: "MTTR 9.4 h (SLA 94%)",
        finance: "AR $312k >30d"
      }
    },
    {
      id: "aurora",
      name: "Aurora Health",
      segment: "Mid-market",
      owner: "N. Harper",
      health: "Healthy",
      revenueShare: 0.14,
      renewalWindow: "120 days",
      rag: "Green",
      links: {
        contract: "https://example.com/cm/aurora",
        hubspot: "https://example.com/hubspot/aurora",
        xero: "https://example.com/xero/aurora",
        devops: "https://example.com/devops/aurora"
      },
      scope: { period: ["l30", "mtd", "qtd", "ytd"], team: ["Sales", "Delivery", "Support", "Finance"], owner: ["N. Harper"], client: ["aurora"] },
      stats: {
        sales: "Weighted pipeline $1.2m",
        delivery: "EAC margin 34%",
        support: "MTTR 6.1 h (98% SLA)",
        finance: "AR current"
      }
    },
    {
      id: "skyreach",
      name: "Skyreach Energy",
      segment: "Enterprise",
      owner: "S. Patel",
      health: "Watch",
      revenueShare: 0.22,
      renewalWindow: "45 days",
      rag: "Red",
      links: {
        contract: "https://example.com/cm/skyreach",
        hubspot: "https://example.com/hubspot/skyreach",
        xero: "https://example.com/xero/skyreach",
        devops: "https://example.com/devops/skyreach"
      },
      scope: { period: ["l30", "mtd"], team: ["Sales", "Delivery", "Support", "Finance"], owner: ["S. Patel"], client: ["skyreach"] },
      stats: {
        sales: "Hot account – marketing engagement high",
        delivery: "Change requests: 3 pending",
        support: "Vendor awaiting x2",
        finance: "Unbilled effort 11 days"
      }
    },
    {
      id: "nimbus",
      name: "Nimbus Retail",
      segment: "SMB",
      owner: "A. Rivers",
      health: "Recovering",
      revenueShare: 0.09,
      renewalWindow: "90 days",
      rag: "Amber",
      links: {
        contract: "https://example.com/cm/nimbus",
        hubspot: "https://example.com/hubspot/nimbus",
        xero: "https://example.com/xero/nimbus",
        devops: "https://example.com/devops/nimbus"
      },
      scope: { period: ["l30", "mtd", "qtd"], team: ["Sales", "Delivery", "Support", "Finance"], owner: ["A. Rivers"], client: ["nimbus"] },
      stats: {
        sales: "No contact 28 days",
        delivery: "Capacity gap 120 h",
        support: "Oldest ticket 4.5 d",
        finance: "PO expiring 52 days"
      }
    }
  ],
  workspace: {
    columns: [
      {
        title: "Focus",
        items: [
          {
            label: "Renewal negotiation",
            detail: "Acme Mining – new SLA draft",
            owner: "L. Chen",
            due: "Due today",
            scope: { period: ["mtd", "l30"], team: ["Sales"], owner: ["L. Chen"], client: ["acme"] }
          },
          {
            label: "Debtor follow-up",
            detail: "Skyreach – $210k >45d",
            owner: "S. Patel",
            due: "Call by 4pm",
            scope: { period: ["l30"], team: ["Finance"], owner: ["S. Patel"], client: ["skyreach"] }
          }
        ]
      },
      {
        title: "Follow-up",
        items: [
          {
            label: "Project recovery plan",
            detail: "Nimbus – align resource swap",
            owner: "A. Rivers",
            due: "Tomorrow",
            scope: { period: ["qtd", "mtd"], team: ["Delivery"], owner: ["A. Rivers"], client: ["nimbus"] }
          },
          {
            label: "Vendor escalation",
            detail: "Skyreach – firewall issue",
            owner: "D. Singh",
            due: "Awaiting update",
            scope: { period: ["l30", "mtd"], team: ["Support"], owner: ["D. Singh"], client: ["skyreach"] }
          }
        ]
      },
      {
        title: "Watch",
        items: [
          {
            label: "Pipeline coverage",
            detail: "Team at 2.6x vs target 3.5x",
            owner: "N. Harper",
            due: "Review Friday",
            scope: { period: ["qtd"], team: ["Sales"], owner: ["N. Harper"], client: ["aurora"] }
          },
          {
            label: "Utilisation",
            detail: "Delivery at 69% last week",
            owner: "A. Rivers",
            due: "Add stand-up note",
            scope: { period: ["l30"], team: ["Delivery"], owner: ["A. Rivers"], client: ["nimbus"] }
          }
        ]
      }
    ]
  },
  home: {
    kpis: [
      {
        label: "Cash runway",
        value: 13,
        unit: "w",
        change: { direction: "up", value: 1.2, suffix: "w" },
        scope: { period: ["l30", "mtd", "qtd", "ytd"], team: ["Operations"] }
      },
      {
        label: "MTD revenue vs target",
        value: 0.91,
        format: "percent",
        change: { direction: "down", value: 0.04 },
        scope: { period: ["mtd"], team: ["Operations", "Sales", "Finance"] }
      },
      {
        label: "QTD EBITDA %",
        value: 0.28,
        format: "percent",
        change: { direction: "up", value: 0.03 },
        scope: { period: ["qtd"], team: ["Finance", "Operations"] }
      },
      {
        label: "Delivery RAG",
        value: "6 / 18 Amber",
        scope: { period: ["l30", "qtd"], team: ["Delivery"] }
      },
      {
        label: "Support MTTR",
        value: 7.8,
        unit: "h",
        change: { direction: "down", value: 1.2, suffix: "h" },
        scope: { period: ["l30", "mtd"], team: ["Support"] }
      }
    ],
    lists: [
      {
        title: "Top actions",
        caption: "Prioritised across teams",
        items: [
          {
            primary: "Debtor follow-up",
            secondary: "Acme Mining – $198k 45d",
            meta: "Owner: Finance",
            scope: { period: ["l30"], team: ["Finance"], owner: ["S. Patel"], client: ["acme"] }
          },
          {
            primary: "Renewal window",
            secondary: "Skyreach – 45 days",
            meta: "Owner: Sales",
            scope: { period: ["l30", "mtd"], team: ["Sales"], owner: ["S. Patel"], client: ["skyreach"] }
          },
          {
            primary: "At-risk project",
            secondary: "Nimbus – schedule variance 12%",
            meta: "Owner: Delivery",
            scope: { period: ["qtd"], team: ["Delivery"], owner: ["A. Rivers"], client: ["nimbus"] }
          }
        ]
      },
      {
        title: "Top clients",
        caption: "Revenue concentration",
        items: [
          {
            primary: "Skyreach Energy",
            secondary: "$4.2m trailing 12",
            meta: "AR $210k",
            scope: { period: ["ytd", "qtd"], team: ["Finance", "Sales"], owner: ["S. Patel"], client: ["skyreach"] }
          },
          {
            primary: "Acme Mining",
            secondary: "$3.6m trailing 12",
            meta: "Renewal 60d",
            scope: { period: ["ytd", "qtd"], team: ["Sales"], owner: ["L. Chen"], client: ["acme"] }
          },
          {
            primary: "Aurora Health",
            secondary: "$2.9m trailing 12",
            meta: "High margin",
            scope: { period: ["ytd", "qtd"], team: ["Sales", "Delivery"], owner: ["N. Harper"], client: ["aurora"] }
          }
        ]
      }
    ]
  },
  personas: {
    sales: {
      title: "Sales & Marketing",
      kpis: [
        {
          label: "Open opportunities",
          value: 42,
          unit: "",
          change: { direction: "up", value: 6 },
          scope: { period: ["mtd", "qtd"], team: ["Sales"] }
        },
        {
          label: "Weighted pipeline",
          value: 6.4,
          unit: "m",
          change: { direction: "down", value: 0.6, suffix: "m" },
          scope: { period: ["qtd"], team: ["Sales"] }
        },
        {
          label: "Win rate (L90d)",
          value: 0.31,
          format: "percent",
          change: { direction: "up", value: 0.05 },
          scope: { period: ["l30", "qtd"], team: ["Sales"] }
        }
      ],
      lists: [
        {
          title: "My pipeline",
          caption: "Ordered by stage",
          items: [
            {
              primary: "Aurora – Support automation",
              secondary: "Stage 5 · Close 30d",
              meta: "Owner: N. Harper",
              scope: { period: ["qtd"], team: ["Sales"], owner: ["N. Harper"], client: ["aurora"] }
            },
            {
              primary: "Skyreach – DevOps uplift",
              secondary: "Stage 4 · Risk: Exec sponsor",
              meta: "Owner: S. Patel",
              scope: { period: ["mtd"], team: ["Sales"], owner: ["S. Patel"], client: ["skyreach"] }
            },
            {
              primary: "Nimbus – Commerce refresh",
              secondary: "Stage 2 · Discovery",
              meta: "Owner: A. Rivers",
              scope: { period: ["l30"], team: ["Sales"], owner: ["A. Rivers"], client: ["nimbus"] }
            }
          ]
        },
        {
          title: "Stale accounts",
          caption: "No contact ≥21 days",
          items: [
            {
              primary: "Nimbus Retail",
              secondary: "Last touch 23 days",
              meta: "Has active PO",
              scope: { period: ["l30"], team: ["Sales"], owner: ["A. Rivers"], client: ["nimbus"] }
            },
            {
              primary: "Acme Mining",
              secondary: "Last touch 21 days",
              meta: "Budget approved",
              scope: { period: ["l30"], team: ["Sales"], owner: ["L. Chen"], client: ["acme"] }
            }
          ]
        }
      ]
    },
    delivery: {
      title: "Delivery",
      kpis: [
        {
          label: "Projects on track",
          value: "12 / 18",
          scope: { period: ["qtd"], team: ["Delivery"] }
        },
        {
          label: "Schedule variance",
          value: -4.2,
          unit: "%",
          change: { direction: "down", value: 2.1, suffix: "%" },
          scope: { period: ["mtd", "qtd"], team: ["Delivery"] }
        },
        {
          label: "Capacity vs demand (4w)",
          value: "-160 h",
          scope: { period: ["l30", "qtd"], team: ["Delivery"] }
        }
      ],
      lists: [
        {
          title: "Active projects",
          caption: "Phase & next milestone",
          items: [
            {
              primary: "Skyreach – Cloud stabilisation",
              secondary: "RAG: Red · Next: Patch window",
              meta: "Blocker: Vendor ETA",
              scope: { period: ["mtd"], team: ["Delivery"], owner: ["D. Singh"], client: ["skyreach"] }
            },
            {
              primary: "Aurora – Analytics uplift",
              secondary: "RAG: Amber · Next: UAT sign-off",
              meta: "Blocker: Data cleanse",
              scope: { period: ["qtd"], team: ["Delivery"], owner: ["N. Harper"], client: ["aurora"] }
            },
            {
              primary: "Nimbus – POS upgrade",
              secondary: "RAG: Amber · Next: Pilot rollout",
              meta: "Blocker: Resourcing",
              scope: { period: ["l30"], team: ["Delivery"], owner: ["A. Rivers"], client: ["nimbus"] }
            }
          ]
        },
        {
          title: "Effort vs budget",
          caption: "Burn & forecast",
          items: [
            {
              primary: "Skyreach",
              secondary: "Burn 78% · Forecast 112%",
              meta: "Action: CR scope",
              scope: { period: ["qtd"], team: ["Delivery"], owner: ["D. Singh"], client: ["skyreach"] }
            },
            {
              primary: "Acme",
              secondary: "Burn 62% · Forecast 88%",
              meta: "Healthy",
              scope: { period: ["qtd"], team: ["Delivery"], owner: ["L. Chen"], client: ["acme"] }
            }
          ]
        }
      ]
    },
    support: {
      title: "Support",
      kpis: [
        {
          label: "New today",
          value: 18,
          scope: { period: ["l30", "mtd"], team: ["Support"] }
        },
        {
          label: "Open backlog",
          value: 142,
          change: { direction: "down", value: 12 },
          scope: { period: ["l30", "mtd"], team: ["Support"] }
        },
        {
          label: "SLA met",
          value: 0.92,
          format: "percent",
          scope: { period: ["mtd"], team: ["Support"] }
        }
      ],
      lists: [
        {
          title: "My queue",
          caption: "Prioritised by SLA",
          items: [
            {
              primary: "INC-2741",
              secondary: "Nimbus – POS outage",
              meta: "Priority: Critical · 3h elapsed",
              scope: { period: ["l30"], team: ["Support"], owner: ["D. Singh"], client: ["nimbus"] }
            },
            {
              primary: "INC-2719",
              secondary: "Skyreach – Firewall rules",
              meta: "Priority: High · 9h elapsed",
              scope: { period: ["l30"], team: ["Support"], owner: ["D. Singh"], client: ["skyreach"] }
            }
          ]
        },
        {
          title: "Oldest tickets",
          caption: "Breach risk",
          items: [
            {
              primary: "REQ-1981",
              secondary: "Aurora – BI extract",
              meta: "Age: 4.2 days",
              scope: { period: ["l30"], team: ["Support"], owner: ["N. Harper"], client: ["aurora"] }
            },
            {
              primary: "INC-2667",
              secondary: "Acme – Vendor awaiting",
              meta: "Age: 3.9 days",
              scope: { period: ["l30"], team: ["Support"], owner: ["L. Chen"], client: ["acme"] }
            }
          ]
        }
      ]
    },
    finance: {
      title: "Finance",
      kpis: [
        {
          label: "AR ageing >30d",
          value: 0.18,
          format: "percent",
          change: { direction: "down", value: 0.02 },
          scope: { period: ["mtd", "qtd"], team: ["Finance"] }
        },
        {
          label: "Overdue invoices",
          value: 12,
          scope: { period: ["l30"], team: ["Finance"] }
        },
        {
          label: "Unbilled effort",
          value: 420,
          unit: "h",
          scope: { period: ["mtd"], team: ["Finance", "Delivery"] }
        }
      ],
      lists: [
        {
          title: "Debtors",
          caption: "Contact + last action",
          items: [
            {
              primary: "Skyreach Energy",
              secondary: "$210k · Called 2d ago",
              meta: "Owner: Finance",
              scope: { period: ["l30"], team: ["Finance"], owner: ["S. Patel"], client: ["skyreach"] }
            },
            {
              primary: "Acme Mining",
              secondary: "$198k · Email sent",
              meta: "Owner: Finance",
              scope: { period: ["l30"], team: ["Finance"], owner: ["L. Chen"], client: ["acme"] }
            }
          ]
        },
        {
          title: "POs expiring ≤60d",
          caption: "Renewal queue",
          items: [
            {
              primary: "Nimbus Retail",
              secondary: "PO-5521 – 52 days",
              meta: "Owner: Sales",
              scope: { period: ["qtd"], team: ["Finance", "Sales"], owner: ["A. Rivers"], client: ["nimbus"] }
            },
            {
              primary: "Acme Mining",
              secondary: "PO-4312 – 44 days",
              meta: "Owner: Sales",
              scope: { period: ["qtd"], team: ["Finance", "Sales"], owner: ["L. Chen"], client: ["acme"] }
            }
          ]
        }
      ]
    }
  }
};

const state = {
  view: "home",
  period: DATA.periods[1].id,
  team: DATA.teams[0],
  client: "All",
  owner: DATA.owners[0]
};

const periodSelect = document.getElementById("filter-period");
const teamSelect = document.getElementById("filter-team");
const clientSelect = document.getElementById("filter-client");
const ownerSelect = document.getElementById("filter-owner");
const viewRoot = document.getElementById("view-root");
const navButtons = Array.from(document.querySelectorAll(".nav-item"));
const refreshLabel = document.getElementById("last-refresh");

init();

function init() {
  renderFilterOptions();
  attachFilterHandlers();
  attachNavHandlers();
  updateRefreshStamp();
  render();
}

function renderFilterOptions() {
  periodSelect.innerHTML = DATA.periods
    .map(({ id, label }) => `<option value="${id}">${label}</option>`)
    .join("");
  periodSelect.value = state.period;

  teamSelect.innerHTML = DATA.teams
    .map((team) => `<option value="${team}">${team}</option>`)
    .join("");
  teamSelect.value = state.team;

  const clientOptions = ["All", ...DATA.clients.map((client) => client.name)];
  clientSelect.innerHTML = clientOptions
    .map((client) => `<option value="${client}">${client}</option>`)
    .join("");
  clientSelect.value = state.client;

  ownerSelect.innerHTML = DATA.owners
    .map((owner) => `<option value="${owner}">${owner}</option>`)
    .join("");
  ownerSelect.value = state.owner;
}

function attachFilterHandlers() {
  periodSelect.addEventListener("change", (event) => {
    state.period = event.target.value;
    render();
  });

  teamSelect.addEventListener("change", (event) => {
    state.team = event.target.value;
    render();
  });

  clientSelect.addEventListener("change", (event) => {
    state.client = event.target.value;
    render();
  });

  ownerSelect.addEventListener("change", (event) => {
    state.owner = event.target.value;
    render();
  });
}

function attachNavHandlers() {
  navButtons.forEach((button) => {
    button.addEventListener("click", () => {
      state.view = button.dataset.view;
      render();
      viewRoot.focus();
    });
  });
}

function updateRefreshStamp() {
  const now = new Date();
  const formatted = now.toLocaleString(undefined, {
    hour: "2-digit",
    minute: "2-digit",
    day: "2-digit",
    month: "short"
  });
  refreshLabel.textContent = `${formatted} (cached 90s)`;
}

function render() {
  navButtons.forEach((button) => {
    button.setAttribute("aria-pressed", button.dataset.view === state.view);
  });

  switch (state.view) {
    case "home":
      renderHome();
      break;
    case "workspace":
      renderWorkspace();
      break;
    case "sales":
      renderPersonaView(DATA.personas.sales);
      break;
    case "delivery":
      renderPersonaView(DATA.personas.delivery);
      break;
    case "support":
      renderPersonaView(DATA.personas.support);
      break;
    case "finance":
      renderPersonaView(DATA.personas.finance);
      break;
    case "clients":
      renderClients();
      break;
    default:
      viewRoot.innerHTML = "";
  }
}

function renderHome() {
  const kpis = filterCollection(DATA.home.kpis);
  const lists = DATA.home.lists
    .map((list) => ({ ...list, items: filterCollection(list.items).slice(0, 4) }))
    .filter((list) => list.items.length);

  viewRoot.innerHTML = [
    renderSection("Company health", "CEO snapshot", renderKpiGrid(kpis)),
    ...lists.map((list) => renderListCard(list))
  ].join("");
}

function renderWorkspace() {
  const columns = DATA.workspace.columns.map((column) => ({
    ...column,
    items: filterCollection(column.items)
  }));

  const activeColumns = columns.filter((column) => column.items.length);
  const columnMarkup = activeColumns.length
    ? activeColumns
        .map((column) => `
      <div class="task-column">
        <h3>${column.title}</h3>
        ${column.items
          .map(
            (item) => `
              <article class="task-card">
                <strong>${item.label}</strong>
                <span>${item.detail}</span>
                <span class="badge">${item.due}</span>
              </article>
            `
          )
          .join("")}
      </div>
    `)
        .join("")
    : '<p class="section-subtitle">No personal tasks for the selected filters.</p>';

  viewRoot.innerHTML = `
    ${renderSection("My workspace", "Tasks & alerts", `<div class="task-board">${columnMarkup}</div>`)}
  `;
}

function renderPersonaView(persona) {
  const kpis = filterCollection(persona.kpis);
  const lists = persona.lists
    .map((list) => ({ ...list, items: filterCollection(list.items) }))
    .filter((list) => list.items.length);

  const markup = [renderSection(persona.title, "Role intelligence", renderKpiGrid(kpis))];
  lists.forEach((list) => markup.push(renderListCard(list)));
  viewRoot.innerHTML = markup.join("");
}

function renderClients() {
  const filteredClients = DATA.clients.filter(matchesFilters);
  const searchId = "client-search";
  const cards = filteredClients.length
    ? filteredClients
        .map((client) => `
      <article class="client-card">
        <header>
          <h3>${client.name}</h3>
          <div class="client-meta">
            <span class="badge">${client.segment}</span>
            <span>${client.health}</span>
            <span>RAG: ${client.rag}</span>
            <span>Renewal: ${client.renewalWindow}</span>
          </div>
        </header>
        <div>
          <p><strong>Sales:</strong> ${client.stats.sales}</p>
          <p><strong>Delivery:</strong> ${client.stats.delivery}</p>
          <p><strong>Support:</strong> ${client.stats.support}</p>
          <p><strong>Finance:</strong> ${client.stats.finance}</p>
        </div>
        <div class="link-set">
          <a href="${client.links.contract}" target="_blank" rel="noreferrer">Contract</a>
          <a href="${client.links.hubspot}" target="_blank" rel="noreferrer">HubSpot</a>
          <a href="${client.links.xero}" target="_blank" rel="noreferrer">Xero</a>
          <a href="${client.links.devops}" target="_blank" rel="noreferrer">DevOps</a>
        </div>
      </article>
    `)
        .join("")
    : '<p class="section-subtitle">No clients match the current filters.</p>';

  const content = `
    <div class="section">
      <div class="section-header">
        <h2 class="section-title">Client snapshot</h2>
        <p class="section-subtitle">Filter to pivot by client health and links</p>
      </div>
      <label class="global-search" for="${searchId}">
        <span class="sr-only">Search clients</span>
        <input id="${searchId}" type="search" placeholder="Search clients" />
      </label>
      <div class="client-grid">${cards}</div>
    </div>
  `;

  viewRoot.innerHTML = content;
  const searchInput = document.getElementById(searchId);
  searchInput.addEventListener("input", (event) => {
    const value = event.target.value.toLowerCase();
    const matches = DATA.clients.filter(
      (client) =>
        client.name.toLowerCase().includes(value) &&
        matchesFilters(client)
    );
    const grid = viewRoot.querySelector(".client-grid");
    grid.innerHTML = matches.length
      ? matches
          .map((client) => `
        <article class="client-card">
          <header>
            <h3>${client.name}</h3>
            <div class="client-meta">
              <span class="badge">${client.segment}</span>
              <span>${client.health}</span>
              <span>RAG: ${client.rag}</span>
              <span>Renewal: ${client.renewalWindow}</span>
            </div>
          </header>
          <div>
            <p><strong>Sales:</strong> ${client.stats.sales}</p>
            <p><strong>Delivery:</strong> ${client.stats.delivery}</p>
            <p><strong>Support:</strong> ${client.stats.support}</p>
            <p><strong>Finance:</strong> ${client.stats.finance}</p>
          </div>
          <div class="link-set">
            <a href="${client.links.contract}" target="_blank" rel="noreferrer">Contract</a>
            <a href="${client.links.hubspot}" target="_blank" rel="noreferrer">HubSpot</a>
            <a href="${client.links.xero}" target="_blank" rel="noreferrer">Xero</a>
            <a href="${client.links.devops}" target="_blank" rel="noreferrer">DevOps</a>
          </div>
        </article>
      `)
          .join("")
      : '<p class="section-subtitle">No clients found for this search.</p>';
  });
}

function renderSection(title, subtitle, content) {
  return `
    <section class="section">
      <div class="section-header">
        <h2 class="section-title">${title}</h2>
        <p class="section-subtitle">${subtitle}</p>
      </div>
      ${content}
    </section>
  `;
}

function renderKpiGrid(kpis) {
  if (!kpis.length) {
    return `<p class="section-subtitle">No KPIs match the active filters.</p>`;
  }
  return `
    <div class="kpi-grid">
      ${kpis
        .map((kpi) => {
          const trendClass = kpi.change
            ? `kpi-trend ${kpi.change.direction === "up" ? "positive" : "negative"}`
            : "kpi-trend";
          const trendText = kpi.change
            ? `${kpi.change.direction === "up" ? "▲" : "▼"} ${formatValue(kpi.change.value, kpi.change)}${kpi.change.suffix ?? ""}`
            : "";
          return `
            <article class="kpi-card">
              <span class="kpi-label">${kpi.label}</span>
              <span class="kpi-value">${formatValue(kpi.value, kpi)}</span>
              ${kpi.change ? `<span class="${trendClass}">${trendText}</span>` : ""}
            </article>
          `;
        })
        .join("")}
    </div>
  `;
}

function renderListCard(list) {
  if (!list.items.length) {
    return "";
  }
  return `
    <section class="section">
      <div class="section-header">
        <h2 class="section-title">${list.title}</h2>
        <p class="section-subtitle">${list.caption}</p>
      </div>
      <div class="list-card">
        <div class="list-items">
          ${list.items
            .map(
              (item) => `
                <div class="list-item">
                  <div>
                    <strong>${item.primary}</strong>
                    <div>${item.secondary}</div>
                  </div>
                  <span>${item.meta ?? ""}</span>
                </div>
              `
            )
            .join("")}
        </div>
      </div>
    </section>
  `;
}

function filterCollection(items) {
  return items.filter(matchesFilters);
}

function matchesFilters(entity) {
  const scope = entity.scope ?? {};
  if (!matchesScope(scope.period, state.period)) {
    return false;
  }
  if (!matchesScope(scope.team, state.team, true)) {
    return false;
  }
  if (state.client !== "All") {
    if (!matchesScope(scope.client, getClientId(state.client))) {
      return false;
    }
  }
  if (state.owner !== "All" && !matchesScope(scope.owner, state.owner)) {
    return false;
  }
  return true;
}

function matchesScope(scopeValues, value, allowAll = false) {
  if (!scopeValues || !scopeValues.length) {
    return true;
  }
  if (allowAll && (value === "All" || value === "Operations")) {
    return true;
  }
  return scopeValues.includes(value);
}

function getClientId(name) {
  const match = DATA.clients.find((client) => client.name === name);
  return match ? match.id : name;
}

function formatValue(value, options = {}) {
  if (options.format === "percent") {
    return `${Math.round(value * 100)}%`;
  }
  if (typeof value === "number" && options.unit === "m") {
    return `$${value.toFixed(1)}m`;
  }
  if (typeof value === "number" && options.unit === "h") {
    return `${value}${options.unit}`;
  }
  if (typeof value === "number" && options.unit === "%") {
    return `${value}${options.unit}`;
  }
  if (typeof value === "number" && options.unit === "w") {
    return `${value}${options.unit}`;
  }
  if (typeof value === "number" && !options.unit) {
    return value.toLocaleString();
  }
  return value;
}
