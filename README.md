# Zenoti Issue Tracker

A one-page tracker for Zenoti issues at FPT / Planet Fitness México. It uses an ITIL priority matrix, SLA clocks on a business calendar, attention levels (N1–N3) and the escalation clauses E01–E15. Every change you make on the page is committed to this repository, so the site always shows the latest data.

| File | What it is |
|---|---|
| `index.html` | The tracker page (GitHub Pages serves it). |
| `issues.js` | The data: issues plus the rules (priorities, SLA targets, calendar, clauses, tags). The page reads it and writes it back through the GitHub API. |
| `.nojekyll` | Tells GitHub Pages to serve the files as they are. |

## 1. Publish the page

1. Put the three files in the repository (for example `digitalharuspex/zenoti-issue-tracker`) on the `main` branch.
2. **Settings → Pages → Build and deployment → Deploy from a branch → `main` / root.**
3. The site appears at `https://<owner>.github.io/<repository>/`. The page detects the owner and repository from that address.

> **Privacy:** a GitHub Pages site is public, and so is `issues.js` in a public repository. This data names vendors, internal incidents and revenue impact. To keep it private, store `issues.js` in a **private** repository. Then, in **Settings → Save to GitHub**, point Owner/Repository to that private repository. The public page shows data only to people who enter a token.

## 2. Turn on saving (once per browser)

1. Create a token:
   - **Repository in your own account:** GitHub → Settings → Developer settings → **Fine-grained tokens** → Generate new token. Repository access: *Only select repositories* → this repository. Permissions: **Contents → Read and write**. Set an expiration date.
   - **Someone else's personal repository** (you are a collaborator): fine-grained tokens cannot reach it. Use a **classic token** with `public_repo` (public repository) or `repo` (private).
2. Open the site → **Settings** → paste the token → **Save and connect**. The header pill should read **Saved to GitHub · owner/repo**.

The token is stored only in that browser's localStorage. It is never written to the repository. Each editor uses their own token. Without a token the page is **read-only**, and any edits stay in that browser until a token is added.

## 3. Everyday use

- **+ New issue** opens the intake. Set **Impact** and **Urgency** to get the ITIL priority, and **Reported to Zenoti** to start the SLA clocks.
- Click a row to update it. Use **Activity log → Add update** for each substantive update. Tick *This is a Zenoti response* to also record the vendor's reply time.
- Each **Save issue** becomes one commit, such as `Update INC-010: status (via tracker)`. The commit history is your audit trail.
- If someone else saved the same issue after you opened it, the page asks whether to keep your version or theirs. Other issues merge automatically.
- **More → Export CSV** exports everything, with the computed SLA columns, for Excel.

## 4. How the rules work

**ITIL priority (impact × urgency)**

| Impact ↓ / Urgency → | High | Medium | Low |
|---|---|---|---|
| **High** | P1 · Prioritary | P2 · Urgent | P3 · Important |
| **Medium** | P2 · Urgent | P3 · Important | P4 · Relevant |
| **Low** | P3 · Important | P4 · Relevant | P5 · Preferable |

Issues without impact and urgency keep their recorded base priority, and the **Needs impact × urgency** tile counts them.

**Escalation clauses:** the strongest single clause that applies gives the rule suggestion (clauses don't stack). An override can only raise the final priority. These clauses switch on automatically:
- E05: no Zenoti response for more than 24 business hours
- E06: action-plan SLA breached
- E07 and E08: business deadline within 7 or 3 days
- E13: no workaround
- E15: no progress logged for 5 business days

**SLA targets (defaults; edit them in Settings to match the Zenoti contract):**

| Priority | Response | Action plan | Update every | Resolution | Expected level |
|---|---|---|---|---|---|
| P1 Prioritary | 1 bh | 4 bh | 2 bh | 1 bd | N3 |
| P2 Urgent | 4 bh | 1 bd | 1 bd | 3 bd | N2 |
| P3 Important | 1 bd | 2 bd | 2 bd | 10 bd | N2 |
| P4 Relevant | 2 bd | 5 bd | 5 bd | 20 bd | N1 |
| P5 Preferable | 3 bd | n/a | 10 bd | n/a | N1 |

- **bh** means business hours and **bd** means business days. The default calendar is Monday to Friday, 09:00–18:00 (1 bd = 9 bh), minus Mexico's official rest days for 2026–2027 (LFT art. 74).
- Response, action plan and update cadence come from the original prioritization workbook. The resolution targets are placeholders.
- Clocks run from **Reported to Zenoti** and stop at first response, action plan and resolved.
- **On hold – waiting on FPT** pauses them. Waiting on a third party (Fiserv, Listen360) does not, unless you change that.
- A clock is **at risk** at 75% of its target.

**Attention levels:**
- N1: Zenoti support agent
- N2: Support Manager or specialist team
- N3: Product / Engineering

Each priority expects a level. A lower current level is flagged, meaning functional escalation to request. The "escalate to" owners are the hierarchical escalation.

**Status lifecycle:** New → Assigned → In progress → (On hold) → Resolved – pending validation → Closed. **Needs status check** marks issues imported with an unknown status.

## 5. Working without GitHub

Open `index.html` directly from a folder. It reads `issues.js` next to it. Changes stay in that browser until you click **Save data file** and replace `issues.js` yourself.
