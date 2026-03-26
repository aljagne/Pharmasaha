/* ─────────────────────────────────────────────────────────
   Partner / Sponsor Highlights for Blog Sidebar
   ───────────────────────────────────────────────────────── */

export interface Partner {
  name: string;
  type: string;
  description: string;
  logo?: string;
}

export const PARTNERS: Partner[] = [
  {
    name: "PharmaSaha",
    type: "Platform",
    description: "End-to-end pharmaceutical supply chain orchestration.",
  },
  {
    name: "ECOWAS Health",
    type: "Institutional",
    description: "Regional health policy coordination and harmonization.",
  },
  {
    name: "African Medicines Agency",
    type: "Regulatory",
    description: "Continental pharmaceutical regulatory framework.",
  },
  {
    name: "WHO Prequalification",
    type: "Quality",
    description: "Global standards for medicine safety and efficacy.",
  },
];
