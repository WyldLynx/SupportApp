Got it. Here’s a tight blueprint for a **role-aware app** that serves each team without bloat or slow queries.

# Navigation model

* **Home (company)**: high-level health for WyldLynx (everyone can see).
* **My workspace**: personalised tiles, tasks, and favourites.
* **Sales & Marketing**, **Delivery**, **Support**, **Finance**: persona hubs with role-specific KPIs and lists.
* **Clients**: searchable list → client snapshot (drill to CM/HubSpot/Xero/DevOps).

# Personas → KPIs & key lists

## 1) CEO / Operations

**KPIs:** Cash runway (13 w), MTD revenue vs target, QTD EBITDA%, DSO, billable utilisation (wk), pipeline coverage (90 d), renewals ≤90 d, delivery RAG, support MTTR.
**Lists:** Top actions (debtor follow-ups, renewal queue, at-risk projects), Top-10 clients by revenue/AR/opportunity score.
**Sources:** CompanySnapshot + global rollups (revenue, AR, pipeline, utilisation).

## 2) Sales & Marketing

**KPIs:** Open opportunities (#/value), weighted pipeline by stage, next 30/60/90 close value, last contact recency, campaign engagement tier, win rate (L90 d).
**Lists:**

* **My pipeline** (stage, next step, risk)
* **Stale accounts** (no contact ≥21 d, has budget/PO)
* **Hot accounts** (engagement ↑, no open deal, active PO)
  **Drill-downs:** deal timeline, emails/meetings, HubSpot deep links.
  **Sources:** DealPipelineRollup, ActivityRollup, POStatusRollup, ClientSnapshot.salesSummary.

## 3) Project Delivery

**KPIs:** Projects R/A/G, schedule variance, EAC margin, capacity vs demand (4 w), change requests pending.
**Lists:**

* **Active projects** (phase, RAG, next milestone, blockers)
* **Over-/under-allocated people** (next 2 w)
* **Effort vs budget** (burn, remaining, forecast)
  **Drill-downs:** contract page, DevOps board, MS Project plan link, CM record.
  **Sources:** ProjectStatusRollup, EffortByContract rollups, Links (DevOps/Project).

## 4) Support

**KPIs:** New today, open backlog, MTTA/MTTR (L30 d), % SLA met, vendor tickets open.
**Lists:**

* **My queue** (priority, age, SLA)
* **Oldest tickets** (breach risk)
* **Vendor-awaiting** (chase list)
  **Drill-downs:** CM ticket, vendor case, related client/contract.
  **Sources:** Support ticket container rollups, VendorSupportRollup.

## 5) Finance / Accounts

**KPIs:** AR ageing buckets, overdue invoices, PO remaining, WIP & unbilled, billable utilisation (M/Q).
**Lists:**

* **Debtors** (contact + last action)
* **POs expiring ≤60 d**
* **Unbilled effort > X days**
  **Drill-downs:** Xero invoice/contact, CM contract, effort details (paged).
  **Sources:** POStatusRollup, ARAgeing, Invoice rollups, Effort rollups.

# Cross-cutting UX

* **Global filters:** period, team, client, owner.
* **Client picker:** jump straight to Client Snapshot (sales, delivery, support, finance summaries + links).
* **Badges:** DevOps / MS Project / Vendor Support links on any card.
* **Alerts & tasks:** lightweight rules (stale contact, renewal window, overdue AR, SLA risk) → Teams message + “My tasks”.

# Data contracts (BFF; all cached/ETagged)

* `GET /api/company/snapshot` → CEO tiles & Top actions.
* `GET /api/sales/pipeline/summary` → counts/values + stage buckets.
* `GET /api/sales/accounts/stale` → paged list with reasons.
* `GET /api/delivery/projects` → RAG list + next milestone.
* `GET /api/support/queue` → my tickets + breach risk.
* `GET /api/finance/ar` → ageing + top debtors.
* `GET /api/clients/{id}/snapshot` → per-client overview (sales/accounts/delivery/support blocks).

All of these are fed from the **small rollups** we outlined earlier (ActivityRollup, DealPipelineRollup, POStatusRollup, ProjectStatusRollup, VendorSupportRollup, Effort/Invoice rollups, ClientSnapshot).

# Security & roles

* **Microsoft SSO (Entra ID)** with app roles: `viewer`, `sales`, `delivery`, `support`, `finance`, `admin`.
* **Row-level:** every query is client-scoped by `/clientId`; the BFF injects authorised client filters.
* **Field-level:** finance figures only for `finance`/`admin`; vendor case details for `support`/`delivery`.

# Performance guardrails

* Pages load from **snapshots/rollups only** (no fan-out to systems of record).
* Pagination everywhere (continuation tokens).
* Redis for hot keys, 30–120 s TTL.
* Background refresh via webhooks/change feed; UI shows last cached with a small “as of” timestamp.

# First cut to build (2–3 sprints)

1. **Shell & SSO** with WyldLynx brand theme.
2. **Company Home** (CEO tiles + Top actions list) from `companySnapshot`.
3. **Persona hubs**:

   * Sales: pipeline tiles + “My pipeline” and “Stale accounts”.
   * Delivery: projects RAG grid.
   * Support: my queue + SLA risk.
   * Finance: AR ageing + POs expiring.
4. **Client Snapshot** page with four summaries and deep links to CM/HubSpot/Xero/DevOps.

If you want, I’ll turn this into a concrete `agents.md` addendum (routes, DTOs, and acceptance criteria per persona) so your Codex project can scaffold it straight away.
