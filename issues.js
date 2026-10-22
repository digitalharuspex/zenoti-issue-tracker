// Zenoti Issue Tracker data file. index.html reads it and saves it back through the GitHub API.
window.ZENOTI_DATA = {
  "meta": {
    "name": "Zenoti Issue Tracker",
    "schema": 2,
    "exportedAt": "2026-10-22T15:45:00.000Z",
    "note": "Data file for index.html. The page saves changes to this file through the GitHub API.",
    "reviewNote": "Oct 22, 2026: entry types (ISSUE / DEV REQUEST / PROJECT) and expected resolution dates added; INC-014 added."
  },
  "config": {
    "priorities": [
      {
        "rank": 1,
        "name": "Prioritary",
        "definition": "Critical business continuity, material financial/security exposure, or imminent hard deadline.",
        "entry": "System/payment outage; active security/fraud; material revenue impact; legal/compliance exposure; deadline <=3 days.",
        "ack": "<=1 business hour",
        "plan": "<=4 business hours",
        "cadence": "Every 2 hours",
        "owner": "Zenoti Support Lead + Product/Engineering leadership",
        "color": "#C00000",
        "itil": "P1",
        "itilName": "Critical",
        "level": "N3",
        "sla": {
          "clock": "business",
          "ackH": 1,
          "planH": 4,
          "updateH": 2,
          "resolveH": 9
        }
      },
      {
        "rank": 2,
        "name": "Urgent",
        "definition": "Severe degradation requiring accelerated resolution.",
        "entry": "Major financial impact; multi-location disruption; deadline 4-7 days; high-volume member impact.",
        "ack": "<=4 business hours",
        "plan": "<=1 business day",
        "cadence": "Daily",
        "owner": "Support Manager + Product owner",
        "color": "#ED7D31",
        "itil": "P2",
        "itilName": "High",
        "level": "N2",
        "sla": {
          "clock": "business",
          "ackH": 4,
          "planH": 9,
          "updateH": 9,
          "resolveH": 27
        }
      },
      {
        "rank": 3,
        "name": "Important",
        "definition": "Meaningful operational impact with workaround or contained scope.",
        "entry": "Repeated defect; one/more locations affected; recurring manual work; no response >24h.",
        "ack": "<=1 business day",
        "plan": "<=2 business days",
        "cadence": "Every 2 business days",
        "owner": "Assigned agent + Support Manager",
        "color": "#FFD966",
        "itil": "P3",
        "itilName": "Medium",
        "level": "N2",
        "sla": {
          "clock": "business",
          "ackH": 9,
          "planH": 18,
          "updateH": 18,
          "resolveH": 90
        }
      },
      {
        "rank": 4,
        "name": "Relevant",
        "definition": "Limited impact, correction, report defect, or inquiry needing planned follow-up.",
        "entry": "Low-volume issue; non-blocking report/data defect; inquiry; contained correction.",
        "ack": "<=2 business days",
        "plan": "<=5 business days",
        "cadence": "Weekly",
        "owner": "Assigned agent",
        "color": "#5B9BD5",
        "itil": "P4",
        "itilName": "Low",
        "level": "N1",
        "sla": {
          "clock": "business",
          "ackH": 18,
          "planH": 45,
          "updateH": 45,
          "resolveH": 180
        }
      },
      {
        "rank": 5,
        "name": "Preferable",
        "definition": "Enhancement or optimization without current service impact.",
        "entry": "Feature request; convenience improvement; cosmetic change; no deadline.",
        "ack": "<=3 business days",
        "plan": "Backlog / roadmap decision",
        "cadence": "Biweekly or milestone",
        "owner": "Customer Success / Product",
        "color": "#A5A5A5",
        "itil": "P5",
        "itilName": "Planning",
        "level": "N1",
        "sla": {
          "clock": "business",
          "ackH": 27,
          "planH": null,
          "updateH": 90,
          "resolveH": null
        }
      }
    ],
    "statuses": [
      {
        "name": "New",
        "category": "new",
        "pausesSla": false,
        "description": "Logged and reported to Zenoti; not yet acknowledged."
      },
      {
        "name": "Needs status check",
        "category": "new",
        "pausesSla": false,
        "description": "Imported with an unknown status; confirm with Zenoti and update."
      },
      {
        "name": "Assigned",
        "category": "active",
        "pausesSla": false,
        "description": "Zenoti acknowledged the issue and named an owner."
      },
      {
        "name": "In progress",
        "category": "active",
        "pausesSla": false,
        "description": "Zenoti is working on a fix or workaround."
      },
      {
        "name": "On hold – waiting on FPT",
        "category": "hold",
        "pausesSla": true,
        "description": "Zenoti needs information or validation from FPT. The SLA clock is paused."
      },
      {
        "name": "On hold – waiting on third party",
        "category": "hold",
        "pausesSla": false,
        "description": "Waiting on Fiserv, Listen360 or another vendor. The SLA clock keeps running unless your contract says otherwise."
      },
      {
        "name": "Resolved – pending validation",
        "category": "resolved",
        "pausesSla": false,
        "description": "Fix or workaround delivered; FPT is validating before closure."
      },
      {
        "name": "Closed",
        "category": "closed",
        "pausesSla": false,
        "description": "Validated: outcome confirmed, data and money reconciled, RCA documented."
      },
      {
        "name": "Cancelled",
        "category": "closed",
        "pausesSla": false,
        "description": "Withdrawn, duplicate or not a Zenoti issue."
      }
    ],
    "requestTypes": [
      "INCIDENT",
      "CORRECTION",
      "INQUIRY",
      "ENHANCEMENT"
    ],
    "functions": [
      "BILLING",
      "MEMBERSHIP",
      "REPORTING",
      "INTEGRATION",
      "NEW-LOCATION"
    ],
    "tags": [
      {
        "family": "Request type",
        "tag": "INCIDENT",
        "use": "Service is broken/degraded",
        "defaultPriority": "Impact-based",
        "companions": "Functional + impact tags",
        "example": "Collection processing fails",
        "owner": "Support/Engineering"
      },
      {
        "family": "Request type",
        "tag": "CORRECTION",
        "use": "Configuration/data must be corrected",
        "defaultPriority": "Important",
        "companions": "Functional tag",
        "example": "Incorrect membership setup",
        "owner": "Support/Implementation"
      },
      {
        "family": "Request type",
        "tag": "INQUIRY",
        "use": "Question or clarification only",
        "defaultPriority": "Relevant",
        "companions": "Functional tag",
        "example": "How a report works",
        "owner": "Support/CS"
      },
      {
        "family": "Request type",
        "tag": "ENHANCEMENT",
        "use": "New behavior/capability requested",
        "defaultPriority": "Preferable",
        "companions": "Functional tag",
        "example": "New report field",
        "owner": "Product"
      },
      {
        "family": "Function",
        "tag": "BILLING",
        "use": "Charges, collections, fees, refunds, payments",
        "defaultPriority": "Important",
        "companions": "FINANCIAL if monetary impact",
        "example": "Duplicate charge",
        "owner": "Payments/Product"
      },
      {
        "family": "Function",
        "tag": "MEMBERSHIP",
        "use": "Membership state, type, duplication, automation",
        "defaultPriority": "Important",
        "companions": "DATA-INTEGRITY if records affected",
        "example": "Duplicate membership",
        "owner": "Product"
      },
      {
        "family": "Function",
        "tag": "REPORTING",
        "use": "Reports, exports, missing fields/data",
        "defaultPriority": "Relevant",
        "companions": "OPS or FINANCIAL if consequential",
        "example": "BDD export failure",
        "owner": "Reporting/Product"
      },
      {
        "family": "Function",
        "tag": "INTEGRATION",
        "use": "Fiserv, Listen360 or third-party dependency",
        "defaultPriority": "Important",
        "companions": "Vendor/system tag",
        "example": "Fiserv migration issue",
        "owner": "Integration owner"
      },
      {
        "family": "Function",
        "tag": "NEW-LOCATION",
        "use": "Opening, configuration or launch dependency",
        "defaultPriority": "Important",
        "companions": "DEADLINE + T-7/T-3",
        "example": "Location setup blocked",
        "owner": "Implementation"
      },
      {
        "family": "Risk",
        "tag": "FINANCIAL",
        "use": "Revenue loss, refund, incorrect collection",
        "defaultPriority": "Urgent",
        "companions": "BILLING usually",
        "example": "MXN 1M/day impact",
        "owner": "Payments leadership"
      },
      {
        "family": "Risk",
        "tag": "SECURITY",
        "use": "Security exposure or suspected compromise",
        "defaultPriority": "Prioritary",
        "companions": "FRAUD if applicable",
        "example": "Carding attack",
        "owner": "Security"
      },
      {
        "family": "Risk",
        "tag": "DATA-INTEGRITY",
        "use": "Missing, duplicate or inconsistent data",
        "defaultPriority": "Urgent",
        "companions": "Functional tag",
        "example": "Missing COF",
        "owner": "Engineering/Product"
      },
      {
        "family": "Impact",
        "tag": "OPS",
        "use": "Operational process materially affected",
        "defaultPriority": "Important",
        "companions": "MULTI-LOCATION if broad",
        "example": "Manual workflow blocked",
        "owner": "Operations/Product"
      },
      {
        "family": "Impact",
        "tag": "MEMBER-IMPACT",
        "use": "Members charged/blocked/misinformed",
        "defaultPriority": "Urgent",
        "companions": "Functional tag",
        "example": "Members not suspended",
        "owner": "Support/Product"
      },
      {
        "family": "Scope",
        "tag": "MULTI-LOCATION",
        "use": "More than one club/location affected",
        "defaultPriority": "Urgent",
        "companions": "OPS",
        "example": "Collections disrupted broadly",
        "owner": "Support Manager"
      },
      {
        "family": "Behavior",
        "tag": "RECURRING",
        "use": "Repeated instability or repeat occurrence",
        "defaultPriority": "Urgent",
        "companions": "INCIDENT",
        "example": "Bulk charge instability",
        "owner": "Engineering"
      },
      {
        "family": "Behavior",
        "tag": "REGRESSION",
        "use": "Previously fixed behavior returned",
        "defaultPriority": "Urgent",
        "companions": "INCIDENT",
        "example": "Defect reappears",
        "owner": "Engineering"
      },
      {
        "family": "SLA",
        "tag": "NO-RESPONSE",
        "use": "No substantive response >24 business hours",
        "defaultPriority": "Increase 1",
        "companions": "SLA-BREACH",
        "example": "Agent silent >24h",
        "owner": "Support Manager"
      },
      {
        "family": "SLA",
        "tag": "STALE",
        "use": "No meaningful progress for 5 business days",
        "defaultPriority": "Increase 1",
        "companions": "AGEING",
        "example": "Unresolved export defect",
        "owner": "CS/Product"
      },
      {
        "family": "Deadline",
        "tag": "T-7",
        "use": "Deadline 4-7 calendar days away",
        "defaultPriority": "Urgent",
        "companions": "DEADLINE",
        "example": "Go-live in 6 days",
        "owner": "Manager/Product"
      },
      {
        "family": "Deadline",
        "tag": "T-3",
        "use": "Deadline <=3 calendar days away",
        "defaultPriority": "Prioritary",
        "companions": "DEADLINE",
        "example": "Go-live in 2 days",
        "owner": "Leadership"
      },
      {
        "family": "Not in Tagging Matrix",
        "tag": "OUTAGE",
        "use": "Referenced by Escalation Rules but has no Tagging Matrix row yet",
        "defaultPriority": "",
        "companions": "",
        "example": "",
        "owner": ""
      },
      {
        "family": "Not in Tagging Matrix",
        "tag": "FRAUD",
        "use": "Referenced by Escalation Rules but has no Tagging Matrix row yet",
        "defaultPriority": "",
        "companions": "",
        "example": "",
        "owner": ""
      },
      {
        "family": "Not in Tagging Matrix",
        "tag": "SLA-BREACH",
        "use": "Referenced by Escalation Rules but has no Tagging Matrix row yet",
        "defaultPriority": "",
        "companions": "",
        "example": "",
        "owner": ""
      },
      {
        "family": "Not in Tagging Matrix",
        "tag": "NO-PLAN",
        "use": "Referenced by Escalation Rules but has no Tagging Matrix row yet",
        "defaultPriority": "",
        "companions": "",
        "example": "",
        "owner": ""
      },
      {
        "family": "Not in Tagging Matrix",
        "tag": "DEADLINE",
        "use": "Referenced by Escalation Rules but has no Tagging Matrix row yet",
        "defaultPriority": "",
        "companions": "",
        "example": "",
        "owner": ""
      },
      {
        "family": "Not in Tagging Matrix",
        "tag": "LAUNCH",
        "use": "Referenced by Escalation Rules but has no Tagging Matrix row yet",
        "defaultPriority": "",
        "companions": "",
        "example": "",
        "owner": ""
      },
      {
        "family": "Not in Tagging Matrix",
        "tag": "NO-WORKAROUND",
        "use": "Referenced by Escalation Rules but has no Tagging Matrix row yet",
        "defaultPriority": "",
        "companions": "",
        "example": "",
        "owner": ""
      },
      {
        "family": "Not in Tagging Matrix",
        "tag": "EXEC-VISIBILITY",
        "use": "Referenced by Escalation Rules but has no Tagging Matrix row yet",
        "defaultPriority": "",
        "companions": "",
        "example": "",
        "owner": ""
      },
      {
        "family": "Not in Tagging Matrix",
        "tag": "AGEING",
        "use": "Referenced by Escalation Rules but has no Tagging Matrix row yet",
        "defaultPriority": "",
        "companions": "",
        "example": "",
        "owner": ""
      }
    ],
    "clauses": [
      {
        "id": "E01",
        "trigger": "Active outage / unusable core flow",
        "condition": "Payments, check-in, selling, member access or collections unavailable",
        "effect": "Set Prioritary",
        "tags": "OUTAGE; OPS",
        "escalateTo": "Support Lead; Engineering on-call",
        "channel": "Ticket + Teams/email leadership thread",
        "evidence": "Screenshots, timestamps, locations, error IDs",
        "clock": "Immediate",
        "notes": "No waiting for normal SLA",
        "logic": {
          "kind": "set",
          "level": "Prioritary"
        }
      },
      {
        "id": "E02",
        "trigger": "Active fraud or security event",
        "condition": "Carding, suspected breach, credential abuse, ongoing fraudulent attempts",
        "effect": "Set Prioritary",
        "tags": "SECURITY; FRAUD; BILLING",
        "escalateTo": "Security; Payments; Zenoti leadership",
        "channel": "Security incident channel + ticket",
        "evidence": "Attempt counts, timestamps, IP/device/payment evidence",
        "clock": "Immediate",
        "notes": "Containment and evidence preservation first",
        "logic": {
          "kind": "set",
          "level": "Prioritary"
        }
      },
      {
        "id": "E03",
        "trigger": "Material financial impact",
        "condition": "Confirmed or credible revenue loss/refund exposure",
        "effect": "Increase one level; set Prioritary if material and ongoing",
        "tags": "FINANCIAL; BILLING",
        "escalateTo": "Support Manager; Payments/Product leadership",
        "channel": "Ticket + executive escalation",
        "evidence": "MXN estimate, transactions, affected period",
        "clock": "Within 1 hour",
        "notes": "Document estimation method",
        "logic": {
          "kind": "up"
        }
      },
      {
        "id": "E04",
        "trigger": "Operational impact",
        "condition": "Multiple locations or critical workflow materially degraded",
        "effect": "Increase one level, maximum Urgent unless outage",
        "tags": "OPS; MULTI-LOCATION",
        "escalateTo": "Support Manager; Product owner",
        "channel": "Ticket + operations thread",
        "evidence": "Affected locations/users/processes",
        "clock": "Within 4 hours",
        "notes": "Use E01 if fully unavailable",
        "logic": {
          "kind": "up",
          "max": "Urgent"
        }
      },
      {
        "id": "E05",
        "trigger": "No agent response",
        "condition": "No substantive response for >24 business hours",
        "effect": "Increase one level",
        "tags": "SLA-BREACH; NO-RESPONSE",
        "escalateTo": "Support Manager",
        "channel": "Reply on ticket + email escalation",
        "evidence": "Last response timestamp and ticket ID",
        "clock": "At 24h",
        "notes": "Auto-escalate again at 48h",
        "logic": {
          "kind": "up",
          "auto": "agentResponse",
          "hours": 24
        }
      },
      {
        "id": "E06",
        "trigger": "No action plan",
        "condition": "No owner/ETA/action plan within target for current level",
        "effect": "Increase one level",
        "tags": "SLA-BREACH; NO-PLAN",
        "escalateTo": "Support Manager; CS Lead",
        "channel": "Ticket + governance tracker",
        "evidence": "Chronology and prior requests",
        "clock": "At SLA breach",
        "notes": "Substantive plan required",
        "logic": {
          "kind": "up",
          "auto": "planBreach"
        }
      },
      {
        "id": "E07",
        "trigger": "Deadline approaching",
        "condition": "Business deadline is 4-7 calendar days away",
        "effect": "Set at least Urgent",
        "tags": "DEADLINE; T-7",
        "escalateTo": "Product owner; Support Manager",
        "channel": "Ticket + project thread",
        "evidence": "Deadline, dependency, consequence",
        "clock": "At T-7",
        "notes": "Reassess daily",
        "logic": {
          "kind": "atLeast",
          "level": "Urgent",
          "auto": "deadline7"
        }
      },
      {
        "id": "E08",
        "trigger": "Deadline imminent",
        "condition": "Business deadline is <=3 calendar days away",
        "effect": "Set Prioritary",
        "tags": "DEADLINE; T-3",
        "escalateTo": "Zenoti leadership; Product/Engineering",
        "channel": "Leadership escalation",
        "evidence": "Deadline, launch plan, blocker",
        "clock": "At T-3",
        "notes": "Daily leadership checkpoint",
        "logic": {
          "kind": "set",
          "level": "Prioritary",
          "auto": "deadline3"
        }
      },
      {
        "id": "E09",
        "trigger": "Recurring/regression",
        "condition": "Same defect recurs after fix or >=3 times in 30 days",
        "effect": "Increase one level",
        "tags": "RECURRING; REGRESSION",
        "escalateTo": "Product/Engineering owner",
        "channel": "Problem record + linked tickets",
        "evidence": "Ticket history and reproduction",
        "clock": "On confirmation",
        "notes": "Request RCA and permanent fix",
        "logic": {
          "kind": "up"
        }
      },
      {
        "id": "E10",
        "trigger": "Data integrity",
        "condition": "Duplicate, missing, altered or inconsistent financial/member data",
        "effect": "Set at least Urgent; Prioritary if broad/ongoing",
        "tags": "DATA-INTEGRITY",
        "escalateTo": "Engineering; Product; Payments as applicable",
        "channel": "Ticket + incident thread",
        "evidence": "Samples, counts, before/after evidence",
        "clock": "Within 4 hours",
        "notes": "Avoid destructive corrections before backup",
        "logic": {
          "kind": "atLeast",
          "level": "Urgent"
        }
      },
      {
        "id": "E11",
        "trigger": "Member/customer harm",
        "condition": "Incorrect charges, access decisions or broad member-facing impact",
        "effect": "Increase one level",
        "tags": "MEMBER-IMPACT; BILLING if applicable",
        "escalateTo": "Support Manager; Product owner",
        "channel": "Ticket + customer impact log",
        "evidence": "Affected members, values, remediation",
        "clock": "Within 4 hours",
        "notes": "Track refunds/communications",
        "logic": {
          "kind": "up"
        }
      },
      {
        "id": "E12",
        "trigger": "New-location blocker",
        "condition": "Launch/opening/configuration dependency blocks new location",
        "effect": "Set at least Important; Urgent at T-7; Prioritary at T-3",
        "tags": "NEW-LOCATION; LAUNCH",
        "escalateTo": "Implementation; Support Manager",
        "channel": "Launch tracker + ticket",
        "evidence": "Location, go-live date, dependency",
        "clock": "Same day",
        "notes": "Deadline rules override",
        "logic": {
          "kind": "atLeast",
          "level": "Important"
        }
      },
      {
        "id": "E13",
        "trigger": "Workaround unavailable",
        "condition": "No safe practical workaround exists",
        "effect": "Increase one level",
        "tags": "NO-WORKAROUND",
        "escalateTo": "Support Manager; Product owner",
        "channel": "Ticket escalation",
        "evidence": "Attempted mitigations and results",
        "clock": "Same day",
        "notes": "State operational consequence",
        "logic": {
          "kind": "up",
          "auto": "noWorkaround"
        }
      },
      {
        "id": "E14",
        "trigger": "Executive/customer commitment",
        "condition": "Miss risks formal commitment or executive visibility",
        "effect": "Increase one level, capped by actual impact",
        "tags": "EXEC-VISIBILITY",
        "escalateTo": "CS Lead; Support Manager",
        "channel": "Governance thread",
        "evidence": "Commitment/date/stakeholder",
        "clock": "Same day",
        "notes": "Does not replace impact evidence",
        "logic": {
          "kind": "up"
        }
      },
      {
        "id": "E15",
        "trigger": "Stale unresolved issue",
        "condition": "No meaningful progress for 5 business days",
        "effect": "Increase one level",
        "tags": "STALE; AGEING",
        "escalateTo": "CS Lead; Product owner",
        "channel": "Weekly governance escalation",
        "evidence": "Timeline and blockers",
        "clock": "At day 5",
        "notes": "Repeat every 5 business days",
        "logic": {
          "kind": "up",
          "auto": "stale",
          "days": 5
        }
      }
    ],
    "stages": [
      {
        "stage": "1. Intake",
        "when": "A new issue, defect, inquiry or enhancement is reported",
        "action": "Capture scope, locations, member impact, financial impact, workaround, deadline and evidence",
        "owner": "FPT issue owner",
        "output": "Complete intake record",
        "timing": "Same business day",
        "test": "Check E01-E14 immediately",
        "evidence": "Ticket ID, screenshots, timestamps, affected samples"
      },
      {
        "stage": "2. Classify",
        "when": "Intake has minimum required facts",
        "action": "Apply request type, function, risk, impact, scope, behavior and deadline tags",
        "owner": "FPT issue owner",
        "output": "Standard tag set",
        "timing": "At intake",
        "test": "Missing facts remain an explicit action",
        "evidence": "Tagging Matrix"
      },
      {
        "stage": "3. Prioritize",
        "when": "Impact and scope are understood",
        "action": "Assign base priority, then apply the highest escalation override",
        "owner": "FPT owner + Zenoti agent",
        "output": "Final priority",
        "timing": "At intake and every change",
        "test": "Any clause can raise priority; never lower without evidence",
        "evidence": "Priority rationale and clause IDs"
      },
      {
        "stage": "4. Assign commitments",
        "when": "Final priority is set",
        "action": "Record Zenoti owner, next action, target date and update cadence",
        "owner": "Zenoti agent / manager",
        "output": "Named owner and dated action plan",
        "timing": "Per priority target",
        "test": "No owner or plan triggers E06",
        "evidence": "Written action plan"
      },
      {
        "stage": "5. Monitor",
        "when": "Issue remains open",
        "action": "Update status, last substantive update, blockers, loss and next milestone",
        "owner": "FPT owner",
        "output": "Current working record",
        "timing": "Per priority cadence",
        "test": "No response >24h triggers E05; stale >5 business days triggers E15",
        "evidence": "Chronology and latest evidence"
      },
      {
        "stage": "6. Escalate",
        "when": "Clause threshold is met",
        "action": "Raise priority, add clause/tag, notify required leadership and request decision",
        "owner": "FPT software administration",
        "output": "Escalation record",
        "timing": "At threshold",
        "test": "T-7, T-3, financial, security, outage and data integrity checks",
        "evidence": "Email/Teams thread linked to ticket"
      },
      {
        "stage": "7. Close",
        "when": "Fix is deployed and verified",
        "action": "Validate outcome, reconcile data/money, document RCA/prevention, confirm no recurrence",
        "owner": "FPT owner + Zenoti owner",
        "output": "Closure package",
        "timing": "Before closing",
        "test": "Do not close on workaround alone unless explicitly accepted",
        "evidence": "Validation evidence, RCA and prevention owner"
      },
      {
        "stage": "8. Review",
        "when": "Weekly governance session",
        "action": "Review all Prioritary/Urgent items, stale items, deadlines and recurring themes",
        "owner": "FPT + Zenoti governance team",
        "output": "Decisions and action log",
        "timing": "Weekly",
        "test": "Open actions roll forward with owner/date",
        "evidence": "Governance minutes"
      }
    ],
    "itil": {
      "impact": [
        {
          "level": "High",
          "label": "High: widespread",
          "description": "Several clubs or all members; a core flow (payments, collections, check-in, selling, member access) is unavailable; or material financial, security or compliance exposure."
        },
        {
          "level": "Medium",
          "label": "Medium: significant",
          "description": "One club fully or several partially; a defined group of members; moderate financial impact."
        },
        {
          "level": "Low",
          "label": "Low: limited",
          "description": "A single user or a few records; contained scope; no measurable financial impact."
        }
      ],
      "urgency": [
        {
          "level": "High",
          "label": "High: act now",
          "description": "Work cannot continue, loss grows quickly, fraud is active, or the business deadline is 3 days away or less."
        },
        {
          "level": "Medium",
          "label": "Medium: soon",
          "description": "Work is degraded or the workaround is costly; loss grows over time; deadline 4 to 7 days away."
        },
        {
          "level": "Low",
          "label": "Low: can be planned",
          "description": "An acceptable workaround exists; no deadline; cosmetic or convenience."
        }
      ],
      "matrix": {
        "High|High": "Prioritary",
        "High|Medium": "Urgent",
        "High|Low": "Important",
        "Medium|High": "Urgent",
        "Medium|Medium": "Important",
        "Medium|Low": "Relevant",
        "Low|High": "Important",
        "Low|Medium": "Relevant",
        "Low|Low": "Preferable"
      }
    },
    "levels": [
      {
        "id": "N1",
        "name": "N1 · Zenoti support agent",
        "description": "First line: ticket owner, standard troubleshooting, configuration questions."
      },
      {
        "id": "N2",
        "name": "N2 · Zenoti Support Manager / specialist",
        "description": "Second line: specialist teams (payments, integrations, reporting) and support management."
      },
      {
        "id": "N3",
        "name": "N3 · Zenoti Product / Engineering",
        "description": "Third line: code fixes, data corrections, root-cause analysis."
      }
    ],
    "requestTypeItil": {
      "INCIDENT": "Incident",
      "CORRECTION": "Service request (correction)",
      "INQUIRY": "Service request (information)",
      "ENHANCEMENT": "Change request"
    },
    "calendar": {
      "timezoneNote": "Times use the viewer's computer clock (America/Mexico_City).",
      "start": "09:00",
      "end": "18:00",
      "days": [
        1,
        2,
        3,
        4,
        5
      ],
      "holidays": [
        {
          "date": "2026-01-01",
          "name": "Año Nuevo"
        },
        {
          "date": "2026-02-02",
          "name": "Día de la Constitución"
        },
        {
          "date": "2026-03-16",
          "name": "Natalicio de Benito Juárez"
        },
        {
          "date": "2026-05-01",
          "name": "Día del Trabajo"
        },
        {
          "date": "2026-09-16",
          "name": "Día de la Independencia"
        },
        {
          "date": "2026-11-16",
          "name": "Día de la Revolución"
        },
        {
          "date": "2026-12-25",
          "name": "Navidad"
        },
        {
          "date": "2027-01-01",
          "name": "Año Nuevo"
        },
        {
          "date": "2027-02-01",
          "name": "Día de la Constitución"
        },
        {
          "date": "2027-03-15",
          "name": "Natalicio de Benito Juárez"
        },
        {
          "date": "2027-05-01",
          "name": "Día del Trabajo"
        },
        {
          "date": "2027-09-16",
          "name": "Día de la Independencia"
        },
        {
          "date": "2027-11-15",
          "name": "Día de la Revolución"
        },
        {
          "date": "2027-12-25",
          "name": "Navidad"
        }
      ]
    },
    "categories": [
      {
        "id": "ISSUE",
        "label": "Issue",
        "prefix": "INC",
        "resolutionSla": true,
        "description": "Something in Zenoti is broken, wrong or down: incidents, defects, data corrections. Full ITIL priority and SLA clocks."
      },
      {
        "id": "DEV REQUEST",
        "label": "Dev request",
        "prefix": "REQ",
        "resolutionSla": false,
        "description": "Something Zenoti must build, change or configure: a feature, report, filter, template or custom set-up. Response and action-plan clocks run; delivery is measured against the expected resolution date."
      },
      {
        "id": "PROJECT",
        "label": "Project",
        "prefix": "PRJ",
        "resolutionSla": false,
        "description": "A multi-step initiative with phases and several owners: migrations, new-club launches, integrations. Measured against the expected resolution date."
      }
    ]
  },
  "issues": [
    {
      "id": "INC-007",
      "title": "Fiserv Migration Issues",
      "period": "Jul-Aug 2026",
      "detectedDate": "",
      "status": "In progress",
      "requestType": "INCIDENT",
      "function": "INTEGRATION",
      "tags": [
        "INTEGRATION",
        "BILLING",
        "FINANCIAL",
        "OPS",
        "MULTI-LOCATION"
      ],
      "impactSummary": "Reduced collection rates and migration delays",
      "financialImpact": null,
      "financialPeriod": "per day",
      "locations": "Multiple",
      "membersAffected": "",
      "workaround": "",
      "basePriority": "Urgent",
      "overridePriority": "Urgent",
      "clauses": [
        "E03",
        "E04"
      ],
      "deadline": "",
      "lastUpdate": "2026-10-19T10:51",
      "lastAgentResponse": "",
      "recommendedAction": "Joint Zenoti/Fiserv recovery plan with owners and dates",
      "reporter": "",
      "zenotiTicket": "",
      "zenotiOwner": "Zenoti Payments (Fiserv integration team)",
      "nextAction": "Agree a stabilization plan for migrated clubs and a date for migrating the remaining clubs",
      "nextActionDue": "",
      "nextReview": "",
      "closureCriteria": "",
      "rcaRequired": "",
      "preventionOwner": "",
      "evidence": "",
      "closureNotes": "",
      "source": "Issue Register, Zenoti_Future_Prioritization.xlsx",
      "log": [
        {
          "at": "2026-10-21",
          "type": "change",
          "text": "Imported from the Issue Register sheet."
        },
        {
          "at": "2026-10-21T16:30",
          "type": "change",
          "text": "Status mapped to the ITIL lifecycle: \"Active investigation\" → \"In progress\"."
        },
        {
          "at": "2026-10-19T10:51",
          "type": "note",
          "text": "FPT IT: no estimated date to migrate the remaining clubs to Fiserv, because collections at the migrated clubs have not stabilized. Side effect: members cannot be transferred between clubs on different processors (reported by PF Angelópolis and PF Andamar), which is driving cancellation requests."
        },
        {
          "at": "2026-10-21T09:00",
          "type": "note",
          "text": "Weekly PF Mexico / Zenoti Fiserv update call scheduled."
        },
        {
          "at": "2026-10-21T17:00",
          "type": "change",
          "text": "Status confirmed open from Outlook (Oct 2026). Classification proposed as Impact High × Urgency Medium (= current priority); confirm."
        },
        {
          "at": "2026-10-21T16:45",
          "type": "change",
          "text": "Confirmed ongoing by FPT Software Administration (Oct 21 review)."
        }
      ],
      "createdAt": "2026-10-21",
      "updatedAt": "2026-10-21",
      "impact": "High",
      "urgency": "Medium",
      "reportedAt": "",
      "acknowledgedAt": "",
      "planAt": "",
      "resolvedAt": "",
      "closedAt": "",
      "holdSince": "",
      "holdPeriods": [],
      "attentionLevel": "N3",
      "linkedRecords": "INC-009 (Scotiabank collection variance); weekly \"PF Mexico / Zenoti - Weekly Fiserv Updates\" call",
      "rev": "",
      "category": "ISSUE",
      "expectedResolution": ""
    },
    {
      "id": "INC-008",
      "title": "BDD Export Failure",
      "period": "Aug-Oct 2026",
      "detectedDate": "",
      "status": "In progress",
      "requestType": "INCIDENT",
      "function": "REPORTING",
      "tags": [
        "REPORTING",
        "OPS",
        "STALE",
        "AGEING"
      ],
      "impactSummary": "Marketing operations impacted",
      "financialImpact": null,
      "financialPeriod": "per day",
      "locations": "Multiple",
      "membersAffected": "",
      "workaround": "",
      "basePriority": "Important",
      "overridePriority": "Urgent",
      "clauses": [
        "E04",
        "E15"
      ],
      "deadline": "",
      "lastUpdate": "2026-10-21T09:29",
      "lastAgentResponse": "2026-10-21T04:23",
      "recommendedAction": "Escalate stale issue and set restoration ETA",
      "reporter": "",
      "zenotiTicket": "",
      "zenotiOwner": "Zenoti Support (Intercom)",
      "nextAction": "Zenoti support to reproduce with the export link sent Oct 21 and confirm the fix",
      "nextActionDue": "",
      "nextReview": "",
      "closureCriteria": "",
      "rcaRequired": "",
      "preventionOwner": "",
      "evidence": "",
      "closureNotes": "",
      "source": "Issue Register, Zenoti_Future_Prioritization.xlsx",
      "log": [
        {
          "at": "2026-10-21",
          "type": "change",
          "text": "Imported from the Issue Register sheet."
        },
        {
          "at": "2026-10-21T16:30",
          "type": "change",
          "text": "Status mapped to the ITIL lifecycle: \"Unresolved as of Oct 2026\" → \"In progress\"."
        },
        {
          "at": "2026-10-18T23:15",
          "type": "note",
          "text": "Zenoti support reported that a fix was deployed."
        },
        {
          "at": "2026-10-20",
          "type": "note",
          "text": "Marketing agency (Elogia) reports the problem persists after the fix."
        },
        {
          "at": "2026-10-21T04:23",
          "type": "note",
          "text": "Zenoti support suggested testing with a new profile and asked for the export link."
        },
        {
          "at": "2026-10-21T09:29",
          "type": "note",
          "text": "Agency sent the export link to Zenoti support."
        },
        {
          "at": "2026-10-21T17:00",
          "type": "change",
          "text": "Status confirmed open from Outlook. Classification proposed as Impact Medium × Urgency Medium; the existing Urgent override is kept."
        },
        {
          "at": "2026-10-21T16:45",
          "type": "change",
          "text": "Confirmed ongoing by FPT Software Administration (Oct 21 review)."
        }
      ],
      "createdAt": "2026-10-21",
      "updatedAt": "2026-10-21",
      "impact": "Medium",
      "urgency": "Medium",
      "reportedAt": "",
      "acknowledgedAt": "",
      "planAt": "",
      "resolvedAt": "",
      "closedAt": "",
      "holdSince": "",
      "holdPeriods": [],
      "attentionLevel": "N2",
      "linkedRecords": "",
      "rev": "",
      "category": "ISSUE",
      "expectedResolution": ""
    },
    {
      "id": "INC-009",
      "title": "Scotiabank collection variance (hard-decline routing)",
      "period": "Aug–Oct 2026",
      "detectedDate": "",
      "status": "In progress",
      "requestType": "INCIDENT",
      "function": "BILLING",
      "tags": [
        "BILLING",
        "FINANCIAL",
        "INTEGRATION",
        "MULTI-LOCATION",
        "OPS"
      ],
      "impactSummary": "Fewer collections routed to Scotiabank in Aug–Sep billing. Cards hard-declined on FreedomPay/Fiserv were never retried on Scotiabank. About 2,000 invoices were affected; the special retries recovered about 34–40%.",
      "financialImpact": null,
      "financialPeriod": "per day",
      "locations": "All clubs",
      "membersAffected": "",
      "workaround": "No",
      "basePriority": "",
      "overridePriority": "",
      "impact": "High",
      "urgency": "Medium",
      "clauses": [
        "E03"
      ],
      "deadline": "",
      "reportedAt": "2026-09-25T09:00",
      "acknowledgedAt": "2026-09-25T09:00",
      "planAt": "2026-09-28T12:00",
      "resolvedAt": "",
      "closedAt": "",
      "holdSince": "",
      "holdPeriods": [],
      "lastUpdate": "2026-10-13T13:43",
      "lastAgentResponse": "2026-10-13T13:43",
      "recommendedAction": "Get the dated results of the backlog retry and a written RCA; confirm the Sep 30 product change covers all future cycles.",
      "reporter": "",
      "zenotiTicket": "",
      "zenotiOwner": "Zenoti Product Management (payments) + Engineering",
      "attentionLevel": "N3",
      "nextAction": "Retry hard-declined invoices older than August through Scotiabank (FPT asked for Oct 15) and reconcile zero-amount invoices",
      "nextActionDue": "",
      "nextReview": "",
      "closureCriteria": "",
      "rcaRequired": "",
      "preventionOwner": "",
      "evidence": "",
      "closureNotes": "",
      "linkedRecords": "INC-007 (Fiserv migration)",
      "source": "Outlook thread \"PF Mexico FPT / Zenoti - Billing\" (Sep 24 – Oct 13, 2026).",
      "log": [
        {
          "at": "2026-09-25T09:00",
          "type": "note",
          "text": "Billing review call. Zenoti showed contributing factors (more soft declines, zero-amount invoices, lower average base price) and found ~400 July invoices hard-declined on Fiserv that never went to Scotiabank."
        },
        {
          "at": "2026-09-28T12:00",
          "type": "note",
          "text": "Zenoti deployed processor-specific hard-decline handling; real scope is ~2,000 collections."
        },
        {
          "at": "2026-09-30T12:00",
          "type": "note",
          "text": "Special Scotiabank retry of August invoices. FPT measured ~34% acceptance; Zenoti later reported ~40% recovery."
        },
        {
          "at": "2026-10-13T13:43",
          "type": "note",
          "text": "Alignment reached: debit→credit market shift plus the hard-decline handling (fixed Sep 30). Pending: extend recovery to invoices before August; FPT asked to retry 5–6 months of hard-declined invoices on Oct 15."
        },
        {
          "at": "2026-10-21T17:00",
          "type": "change",
          "text": "Added from the Oct 21 Outlook review. Classification proposed (Impact High × Urgency Medium); confirm."
        },
        {
          "at": "2026-10-21T16:45",
          "type": "change",
          "text": "Confirmed ongoing by FPT Software Administration (Oct 21 review)."
        }
      ],
      "createdAt": "2026-10-21",
      "updatedAt": "2026-10-21",
      "rev": "",
      "category": "ISSUE",
      "expectedResolution": ""
    },
    {
      "id": "INC-010",
      "title": "Purple Ticket ($50) discount not applied",
      "period": "Oct 2026",
      "detectedDate": "",
      "status": "In progress",
      "requestType": "CORRECTION",
      "function": "BILLING",
      "tags": [
        "BILLING",
        "MEMBER-IMPACT",
        "MULTI-LOCATION",
        "DATA-INTEGRITY"
      ],
      "impactSummary": "The October $50 discount reached only 2 of 49 clubs (Zenoti DB task error). 3,546 records in 47 clubs; ~1,400 matched, the rest already collected or with member codes that do not match. Members are calling the promotion fake on social media; NPS and brand impact.",
      "financialImpact": null,
      "financialPeriod": "per day",
      "locations": "47 clubs (Acoxpa and Acueducto were handled manually)",
      "membersAffected": "3,546 records",
      "workaround": "No",
      "basePriority": "",
      "overridePriority": "Prioritary",
      "impact": "High",
      "urgency": "Medium",
      "clauses": [
        "E11"
      ],
      "deadline": "",
      "reportedAt": "2026-10-14T07:25",
      "acknowledgedAt": "2026-10-14T09:40",
      "planAt": "2026-10-15T16:24",
      "resolvedAt": "",
      "closedAt": "",
      "holdSince": "",
      "holdPeriods": [],
      "lastUpdate": "2026-10-21T14:53",
      "lastAgentResponse": "2026-10-21T14:53",
      "recommendedAction": "",
      "reporter": "",
      "zenotiTicket": "",
      "zenotiOwner": "Zenoti Customer Success + DB team",
      "attentionLevel": "N2",
      "nextAction": "Zenoti to send the unmatched member-code list; clubs correct codes; discount applied in the November billing cycle",
      "nextActionDue": "2026-10-22",
      "nextReview": "",
      "closureCriteria": "Discount visible on November invoices for every eligible member; unmatched codes resolved.",
      "rcaRequired": "",
      "preventionOwner": "",
      "evidence": "",
      "closureNotes": "",
      "linkedRecords": "",
      "source": "Outlook thread \"PURPLE TICKET ($50) DISCOUNT\" (Oct 13–21, 2026).",
      "log": [
        {
          "at": "2026-10-14T07:25",
          "type": "note",
          "text": "Clubs report the discount was not applied."
        },
        {
          "at": "2026-10-14T09:40",
          "type": "note",
          "text": "Zenoti CS: the DB task was submitted for only 2 of 49 locations, a Zenoti error. Escalated to DB management."
        },
        {
          "at": "2026-10-15T16:24",
          "type": "note",
          "text": "Zenoti: 3,546 records across 47 clubs, ~1,400 matched. Proposed applying the rest in the November cycle and sharing the unmatched codes."
        },
        {
          "at": "2026-10-15T17:25",
          "type": "note",
          "text": "FPT Marketing accepted the November cycle and asked for the unmatched-codes list."
        },
        {
          "at": "2026-10-20T09:31",
          "type": "note",
          "text": "FPT escalation: social-media complaints that the promotion is fake; brand damage."
        },
        {
          "at": "2026-10-21T14:53",
          "type": "note",
          "text": "Zenoti: DB team still validating; list expected Oct 22."
        },
        {
          "at": "2026-10-21T17:00",
          "type": "change",
          "text": "Added from the Oct 21 Outlook review. Classification proposed (Impact High × Urgency Medium); confirm."
        },
        {
          "at": "2026-10-21T16:45",
          "type": "change",
          "text": "Confirmed ongoing by FPT Software Administration (Oct 21 review)."
        },
        {
          "at": "2026-10-21T16:45",
          "type": "change",
          "text": "FPT marked this issue URGENT. Priority confirmed as Urgent (P2)."
        },
        {
          "at": "2026-10-21T16:49",
          "type": "change",
          "text": "Override priority: Urgent → Prioritary (raised by FPT Software Administration)."
        },
        {
          "at": "2026-10-21T16:49",
          "type": "change",
          "text": "Final priority: Urgent → Prioritary"
        }
      ],
      "createdAt": "2026-10-21",
      "updatedAt": "2026-10-21",
      "rev": "",
      "category": "ISSUE",
      "expectedResolution": ""
    },
    {
      "id": "INC-011",
      "title": "PHP vulnerability: Zenoti exposure inquiry",
      "period": "Oct 2026",
      "detectedDate": "",
      "status": "Assigned",
      "requestType": "INQUIRY",
      "function": "INTEGRATION",
      "tags": [
        "INTEGRATION",
        "SECURITY"
      ],
      "impactSummary": "Asked Zenoti whether the newly disclosed PHP vulnerability affects Zenoti or the shared MMS, and what remediation applies. PF CSC (club technology) was also alerted.",
      "financialImpact": null,
      "financialPeriod": "per day",
      "locations": "All clubs",
      "membersAffected": "",
      "workaround": "",
      "basePriority": "",
      "overridePriority": "",
      "impact": "Medium",
      "urgency": "High",
      "clauses": [],
      "deadline": "",
      "reportedAt": "2026-10-21T10:48",
      "acknowledgedAt": "2026-10-21T12:02",
      "planAt": "",
      "resolvedAt": "",
      "closedAt": "",
      "holdSince": "",
      "holdPeriods": [],
      "lastUpdate": "2026-10-21T12:02",
      "lastAgentResponse": "2026-10-21T12:02",
      "recommendedAction": "",
      "reporter": "",
      "zenotiTicket": "",
      "zenotiOwner": "Zenoti security team (via Customer Success)",
      "attentionLevel": "N3",
      "nextAction": "Zenoti security to confirm exposure, affected components and remediation timeline",
      "nextActionDue": "",
      "nextReview": "",
      "closureCriteria": "",
      "rcaRequired": "",
      "preventionOwner": "",
      "evidence": "",
      "closureNotes": "",
      "linkedRecords": "",
      "source": "Outlook threads \"PHP Vulnerability in Zenoti\" and \"PHP Vulnerabilities encountered today\" (Oct 21, 2026).",
      "log": [
        {
          "at": "2026-10-21T10:48",
          "type": "note",
          "text": "FPT asked Zenoti whether Zenoti is affected by the PHP vulnerability disclosed overnight."
        },
        {
          "at": "2026-10-21T12:02",
          "type": "note",
          "text": "Zenoti CS forwarded the question to Zenoti's security team."
        },
        {
          "at": "2026-10-21T17:00",
          "type": "change",
          "text": "Added from the Oct 21 Outlook review. Classification proposed (Impact Medium × Urgency High); confirm."
        },
        {
          "at": "2026-10-21T16:45",
          "type": "change",
          "text": "Confirmed ongoing by FPT Software Administration (Oct 21 review)."
        }
      ],
      "createdAt": "2026-10-21",
      "updatedAt": "2026-10-21",
      "rev": "",
      "category": "ISSUE",
      "expectedResolution": ""
    },
    {
      "id": "INC-012",
      "title": "GTM containers missing on new-location membership pages",
      "period": "Oct 2026",
      "detectedDate": "",
      "status": "In progress",
      "requestType": "CORRECTION",
      "function": "NEW-LOCATION",
      "tags": [
        "NEW-LOCATION",
        "LAUNCH",
        "GTM",
        "OPS"
      ],
      "impactSummary": "Club-specific Google Tag Manager containers are missing from the Zenoti membership landing pages, so online traffic and conversions cannot be measured: Izazaga (GTM-P9X98PQQ), Escobedo (GTM-NTCN7X3L), El Refugio (GTM-KD7Q9MD6), Santa Rosa (GTM-WRVVVZBV). Escobedo pages also do not load properly.",
      "financialImpact": null,
      "financialPeriod": "per day",
      "locations": "Izazaga (CDMX), Escobedo (NLE), El Refugio (QRO), Santa Rosa (OAX)",
      "membersAffected": "",
      "workaround": "",
      "basePriority": "",
      "overridePriority": "",
      "impact": "Medium",
      "urgency": "Medium",
      "clauses": [
        "E12"
      ],
      "deadline": "",
      "reportedAt": "2026-10-19T16:41",
      "acknowledgedAt": "2026-10-21T13:48",
      "planAt": "2026-10-21T13:48",
      "resolvedAt": "",
      "closedAt": "",
      "holdSince": "",
      "holdPeriods": [],
      "lastUpdate": "2026-10-21T13:48",
      "lastAgentResponse": "2026-10-21T13:48",
      "recommendedAction": "",
      "reporter": "",
      "zenotiTicket": "",
      "zenotiOwner": "Zenoti project management (new locations)",
      "attentionLevel": "N2",
      "nextAction": "Zenoti to associate the four GTM container IDs with the join-flow pages and fix Escobedo page loading; FPT Marketing then verifies the containers on the landing pages",
      "nextActionDue": "2026-10-22",
      "nextReview": "",
      "closureCriteria": "Each club page loads and fires its own GTM container (verified by FPT Marketing).",
      "rcaRequired": "",
      "preventionOwner": "",
      "evidence": "",
      "closureNotes": "",
      "linkedRecords": "Outlook thread \"Cuatro Caminos and Canek Deeplinks\"; \"New Location Format: All PFMX Locations, Q4 2026\"",
      "source": "Outlook thread \"Cuatro Caminos and Canek Deeplinks\" (Oct 15–21, 2026). The deeplinks in its subject were an earlier request.",
      "log": [
        {
          "at": "2026-10-15T14:48",
          "type": "note",
          "text": "FPT Marketing asked PF CSC and Zenoti to install club-specific GTM containers on the membership websites (Izazaga, Escobedo; El Refugio ID unknown)."
        },
        {
          "at": "2026-10-16T14:28",
          "type": "note",
          "text": "FPT Marketing: Izazaga and Escobedo containers still need to be added; no access to El Refugio and Santa Rosa containers."
        },
        {
          "at": "2026-10-19T15:56",
          "type": "note",
          "text": "FPT Marketing: containers missing on all four clubs' membership landing pages; Escobedo pages not loading properly."
        },
        {
          "at": "2026-10-19T16:41",
          "type": "note",
          "text": "PF CSC confirmed the GTM container IDs for all four clubs and asked Zenoti to associate them with the join-flow pages."
        },
        {
          "at": "2026-10-21T09:03",
          "type": "note",
          "text": "FPT asked Zenoti to mount the containers ASAP."
        },
        {
          "at": "2026-10-21T13:48",
          "type": "note",
          "text": "Zenoti project management: update no later than tomorrow (Oct 22)."
        },
        {
          "at": "2026-10-21T16:45",
          "type": "change",
          "text": "Reworked from \"Deeplinks for Cuatro Caminos and Canek\" after FPT clarified the open item is the Tag Manager containers for the locations."
        }
      ],
      "createdAt": "2026-10-21",
      "updatedAt": "2026-10-21",
      "rev": "",
      "category": "ISSUE",
      "expectedResolution": ""
    },
    {
      "id": "INC-013",
      "title": "Canek: annual fees not assigned and member charges reversed (Zenoti DB changes)",
      "period": "Oct 2026",
      "detectedDate": "",
      "status": "In progress",
      "requestType": "INCIDENT",
      "function": "BILLING",
      "tags": [
        "BILLING",
        "DATA-INTEGRITY",
        "MEMBER-IMPACT",
        "FINANCIAL"
      ],
      "impactSummary": "PF Canek: annual maintenance fees were not assigned, so they cannot be charged (16 records tied to the GWP offer according to Zenoti; the club reported a list of about 258). Separately, 13 members reported card charges being reversed (dues, maintenance fees, products). The full scope and financial impact are unknown, and members keep asking. The 343 inactive memberships were already fixed.",
      "financialImpact": null,
      "financialPeriod": "per day",
      "locations": "PF Canek (Yucatán)",
      "membersAffected": "16 fee records (club list: ~258); 13 reversed-charge reports",
      "workaround": "No",
      "basePriority": "",
      "overridePriority": "Prioritary",
      "impact": "Medium",
      "urgency": "High",
      "clauses": [
        "E10",
        "E11"
      ],
      "deadline": "",
      "reportedAt": "",
      "acknowledgedAt": "",
      "planAt": "",
      "resolvedAt": "",
      "closedAt": "",
      "holdSince": "",
      "holdPeriods": [],
      "lastUpdate": "2026-10-19T16:42",
      "lastAgentResponse": "2026-10-08T19:30",
      "recommendedAction": "",
      "reporter": "",
      "zenotiTicket": "215475731342074 (reversed charges)",
      "zenotiOwner": "Zenoti Support + DB team; Zenoti Payments (reversed charges)",
      "attentionLevel": "N2",
      "nextAction": "Zenoti DB team to assign the pending annual fees and list the affected records; Zenoti Payments to explain the reversals and size the impact",
      "nextActionDue": "",
      "nextReview": "",
      "closureCriteria": "All pending annual fees assigned and collectible; every reversed charge explained, re-charged or credited, with an affected-members report.",
      "rcaRequired": "",
      "preventionOwner": "",
      "evidence": "",
      "closureNotes": "",
      "linkedRecords": "Outlook thread \"PF Mexico Canek - Annual fees not charged\"; may relate to the annual-fee date logic (FPT-203)",
      "source": "Outlook thread \"PF Mexico Canek - Annual fees not charged\" (Oct 8–19, 2026).",
      "log": [
        {
          "at": "2026-10-08T19:30",
          "type": "note",
          "text": "Zenoti Support (AI agent) checked in on the ticket and said it would assume all was resolved if there was no reply."
        },
        {
          "at": "2026-10-09T12:48",
          "type": "note",
          "text": "FPT: under review with Zenoti, whose database team is validating so it can be fixed as soon as possible."
        },
        {
          "at": "2026-10-19T16:26",
          "type": "note",
          "text": "PF Canek: annual fees are still not assigned and members are asking when they will be charged. More members report reversed charges, with no update from Zenoti."
        },
        {
          "at": "2026-10-19T16:42",
          "type": "note",
          "text": "FPT summary: 16 annual-fee records (GWP offer; Zenoti investigating how to separate billing items; update requested Oct 10); 343 inactive memberships resolved; 13 reversed-charge cases on ticket 215475731342074, escalated to Zenoti Payments."
        },
        {
          "at": "2026-10-19T17:08",
          "type": "note",
          "text": "PF Canek asked for an ETA on the fees, how members will be told about re-charging reversed amounts, a report of affected cases, the financial impact, and whether the club absorbs the refunds."
        },
        {
          "at": "2026-10-21T16:45",
          "type": "change",
          "text": "Added on FPT request (\"Canek BDD changes\"). The date it was first reported to Zenoti is not in the mail; set \"Reported to Zenoti\" to start the SLA clocks."
        },
        {
          "at": "2026-10-21T16:49",
          "type": "change",
          "text": "Override priority: — → Prioritary (raised by FPT Software Administration)."
        },
        {
          "at": "2026-10-21T16:49",
          "type": "change",
          "text": "Final priority: Urgent → Prioritary"
        }
      ],
      "createdAt": "2026-10-21",
      "updatedAt": "2026-10-21",
      "rev": "",
      "category": "ISSUE",
      "expectedResolution": ""
    },
    {
      "id": "INC-014",
      "title": "Plan upgrades/downgrades: unannounced contract step, residual invoices closed by hand, next-day invoices",
      "period": "Sep 2026",
      "detectedDate": "2026-09-08",
      "status": "New",
      "requestType": "INCIDENT",
      "function": "MEMBERSHIP",
      "tags": [
        "MEMBERSHIP",
        "BILLING",
        "OPS",
        "MEMBER-IMPACT"
      ],
      "impactSummary": "PF Villa Verde reports that changing a member's plan now also requires signing a new contract, which Zenoti never announced; without it the change does not activate and the membership stays paused. After the change Zenoti creates a 6–30 MXN difference invoice that discounts itself to zero but must be closed by hand, or it stays in open payments and blocks the plan again. The invoice is no longer generated right away, so staff wait until the next day to close it. The club's earlier fix (chargebacks for the months not billed) now also triggers the month's charge, adding collection errors.",
      "financialImpact": null,
      "financialPeriod": "per day",
      "locations": "PF Villa Verde (reported). Other clubs not yet checked.",
      "membersAffected": "",
      "workaround": "Yes",
      "basePriority": "",
      "overridePriority": "",
      "impact": "Medium",
      "urgency": "Medium",
      "clauses": [],
      "deadline": "",
      "reportedAt": "",
      "acknowledgedAt": "",
      "planAt": "",
      "resolvedAt": "",
      "closedAt": "",
      "holdSince": "",
      "holdPeriods": [],
      "lastUpdate": "2026-09-08T11:50",
      "lastAgentResponse": "",
      "recommendedAction": "",
      "reporter": "PF Villa Verde (Vladimir Marcel, club manager)",
      "zenotiTicket": "",
      "zenotiOwner": "",
      "attentionLevel": "",
      "nextAction": "Check whether other clubs see the same plan-change behavior, then report it to Zenoti with examples and ask for the current procedure and training",
      "nextActionDue": "",
      "nextReview": "",
      "closureCriteria": "Zenoti documents the current plan-change procedure; plan changes activate without manual invoice closing or next-day waits; the chargeback interaction is explained; clubs are trained.",
      "rcaRequired": "",
      "preventionOwner": "",
      "evidence": "Email \"Inconsistencias en cobranza al realizar cambios de plan\", PF Villa Verde to Oscar Herreria, Salvador Mora and Norberto Barrera, Sep 8, 2026 (7 photos attached).",
      "closureNotes": "",
      "linkedRecords": "Zenoti issue history workbook (Oct 21, 2026), row 19",
      "source": "Outlook: \"Inconsistencias en cobranza al realizar cambios de plan\" (Sep 8, 2026). No report to Zenoti found in the mail reviewed.",
      "log": [
        {
          "at": "2026-09-08T11:50",
          "type": "note",
          "text": "PF Villa Verde reported the plan-change inconsistencies to FPT Systems and Collections and asked for the correct procedure and training."
        },
        {
          "at": "2026-10-22T09:45",
          "type": "change",
          "text": "Added at FPT's request after the Oct 21 mail review. Not yet reported to Zenoti as far as the mail shows; set \"Reported to Zenoti\" to start the SLA clocks."
        }
      ],
      "createdAt": "2026-10-22",
      "updatedAt": "2026-10-22",
      "rev": "2026-10-22T15:45:00.000Z",
      "category": "ISSUE",
      "expectedResolution": ""
    }
  ]
};
