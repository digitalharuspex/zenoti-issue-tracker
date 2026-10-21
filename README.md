# Zenoti Issue Tracker

A one-page tracker for Zenoti issues at FPT / Planet Fitness México. It uses an ITIL priority matrix, SLA clocks on a business calendar, attention levels (N1–N3) and the escalation clauses E01–E15. Every change you make on the page is committed to GitHub, so the site always shows the latest data.

| File | What it is |
|---|---|
| `index.html` | The tracker page (GitHub Pages serves it). |
| `source.js` | Optional. Points the page to the repository that holds the data, such as a private one. |
| `issues.js` | The data: issues plus the rules (priorities, SLA targets, calendar, clauses, tags). Keep it in the private data repository. |
| `.nojekyll` | Tells GitHub Pages to serve the files as they are. |

## 1. Publish the page

1. Keep `index.html`, `source.js`, `README.md` and `.nojekyll` in the public repository `zenoti-issue-tracker`.
2. **Settings → Pages → Build and deployment → Deploy from a branch → `main` / root.**
3. The site appears at `https://<owner>.github.io/zenoti-issue-tracker/`.

## 2. Keep the data private

On a free GitHub account, Pages publishes only public repositories, and anything in a public repository can be read. So the tool and the data live apart:

| Repository | Visibility | Contents |
|---|---|---|
| `zenoti-issue-tracker` | Public | The page (no issue data) |
| `zenoti-issue-data` | **Private** | `issues.js` |

`source.js` in the public repository tells the page where the data is:

```js
window.ZENOTI_SOURCE = { owner: 'digitalharuspex', repo: 'zenoti-issue-data', path: 'issues.js', private: true };
```

- Visitors without access see an empty, locked page.
- Only people you add to `zenoti-issue-data` (repository **Settings → Collaborators**) can load the issues, using their own token. Give view-only colleagues the **Read** role.

## 3. Turn on saving (once per browser)

1. Create a token:
   - **The owner of `zenoti-issue-data`:** GitHub → Settings → Developer settings → **Fine-grained tokens** → Generate new token. Repository access: *Only select repositories* → `zenoti-issue-data`. Permissions: **Contents → Read and write** (or Read-only, for viewing). Set an expiration date.
   - **Collaborators on a personal-account repository:** fine-grained tokens cannot reach someone else's personal repository. Use a **classic token** with the `repo` scope. Alternatively, move both repositories to a free GitHub organization; then every member can use a fine-grained token limited to `zenoti-issue-data`.
2. Open the site → **Settings** → paste the token → **Save and connect**. The header pill should read **Saved to GitHub · digitalharuspex/zenoti-issue-data**.

The token is stored only in that browser's localStorage and is never written to a repository. **Forget token** removes it and hides the data again.

## 4. Everyday use

- **+ New issue** opens the intake. Set **Impact** and **Urgency** to get the ITIL priority, and **Reported to Zenoti** to start the SLA clocks.
- Click a row to update it. Use **Activity log → Add update** for each substantive update. Tick *This is a Zenoti response* to also record the vendor's reply time.
- Each **Save issue** becomes one commit, such as `Update INC-010: status (via tracker)`. The commit history is your audit trail.
- If someone else saved the same issue after you opened it, the page asks whether to keep your version or theirs. Other issues merge automatically.
- **More → Export CSV** exports everything, with the computed SLA columns, for Excel.

## 5. How the rules work

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

## 6. Working without GitHub

Open `index.html` directly from a folder. It reads `issues.js` next to it. Changes stay in that browser until you click **Save data file** and replace `issues.js` yourself.
