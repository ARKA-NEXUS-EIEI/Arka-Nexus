import type { JSX } from "react"

export const SERVICE_FOOTER_ICONS: Record<string, JSX.Element> = {
  "energy-audit": (
    <path d="M13 2L3 14h9l-1 8 10-12h-9l1-8z" />
  ),

  "power-quality": (
    <>
      <path d="M12 2v20" />
      <path d="M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6" />
    </>
  ),

  "harmonic-study": (
    <>
      <path d="M12 2L2 7v10c0 5.55 3.84 9.74 9 11 5.16-1.26 9-5.45 9-11V7l-10-5z" />
      <path d="M8 12l2 2 4-4" />
    </>
  ),

  "solar-panel-study": (
    <>
      <circle cx="12" cy="12" r="5" />
      <line x1="12" y1="1" x2="12" y2="3" />
      <line x1="12" y1="21" x2="12" y2="23" />
      <line x1="4.22" y1="4.22" x2="5.64" y2="5.64" />
      <line x1="18.36" y1="18.36" x2="19.78" y2="19.78" />
    </>
  ),

  "thermal-study": (
    <>
      <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z" />
      <polyline points="14,2 14,8 20,8" />
    </>
  ),

  "vibration-audit": (
    <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" />
  ),

  "industrial-safety-audit": (
    <>
      <path d="M9 12l2 2 4-4" />
      <path d="M21 12c0-.55-.45-1-1-1H4c-.55 0-1 .45-1 1" />
    </>
  ),

  "industrial-training": (
    <>
      <path d="M6.5 2H20v20H6.5A2.5 2.5 0 0 1 4 19.5v-15A2.5 2.5 0 0 1 6.5 2z" />
      <circle cx="12" cy="12" r="2" />
    </>
  ),
}
