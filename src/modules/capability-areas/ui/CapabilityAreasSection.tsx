import { useId, useState } from 'react'
import { Dialog } from '../../../common/components/atoms/Dialog'
import { FlowDiagram } from '../../../common/components/atoms/FlowDiagram'
import { Reveal } from '../../../common/components/atoms/Reveal'
import type { CapabilityArea, CapabilityHighlight } from '../domain/capabilityArea.entity'

export type CapabilityAreasSectionProps = {
  areas: CapabilityArea[]
  title: string
  viewDiagramLabel: string
  closeDialogLabel: string
}

function EyeIcon() {
  return (
    <svg
      width="17"
      height="17"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.8"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
    >
      <path d="M1 12s4-7 11-7 11 7 11 7-4 7-11 7-11-7-11-7Z" />
      <circle cx="12" cy="12" r="3" />
    </svg>
  )
}

export function CapabilityAreasSection({
  areas,
  title,
  viewDiagramLabel,
  closeDialogLabel,
}: CapabilityAreasSectionProps) {
  const [openHighlight, setOpenHighlight] = useState<CapabilityHighlight | null>(
    null,
  )
  const dialogTitleId = useId()

  return (
    <section
      id="areas"
      className="px-8 py-10 max-lg:px-5 max-lg:py-7"
      aria-labelledby="areas-title"
    >
      <Reveal>
        <h2
          id="areas-title"
          className="mb-2 mt-0 font-[family-name:var(--heading)] text-2xl font-medium leading-[118%] tracking-tight text-[var(--text-h)] max-lg:text-xl"
        >
          {title}
        </h2>
      </Reveal>

      {areas.map((area) => (
        <section
          key={area.id}
          className="border-t border-[var(--border)] py-9 first:border-t-0"
        >
          <Reveal className="grid grid-cols-[280px_1fr] items-start gap-10 max-lg:grid-cols-1 max-lg:gap-4">
            <div>
              <h3 className="m-0 mb-2 font-[family-name:var(--heading)] text-[26px] font-bold text-[var(--text-h)]">
                {area.title}
              </h3>
              <p className="m-0 text-[15px] leading-[150%] text-[var(--text)]">
                {area.summary}
              </p>
            </div>

            <ul className="m-0 flex list-none flex-col gap-0 p-0">
              {area.highlights.map((highlight) => (
                <li
                  key={highlight.title}
                  className="flex items-center gap-4 border-b border-[var(--border)] py-4 last:border-b-0"
                >
                  <div className="flex-1">
                    <p className="m-0 flex flex-wrap items-baseline gap-x-2 font-medium text-[var(--text-h)]">
                      {highlight.title}
                      <span className="text-xs font-normal uppercase tracking-wide text-[var(--accent)]">
                        {highlight.context}
                      </span>
                    </p>
                    <p className="m-0 mt-1 text-sm leading-[150%] text-[var(--text)]">
                      {highlight.description}
                    </p>
                  </div>
                  <button
                    type="button"
                    aria-label={viewDiagramLabel}
                    onClick={() => setOpenHighlight(highlight)}
                    className="flex h-9 w-9 shrink-0 items-center justify-center rounded-lg border border-[var(--border)] text-[var(--text)] transition-colors hover:border-[rgba(16,185,129,0.4)] hover:bg-[rgba(16,185,129,0.08)] hover:text-[var(--accent)] focus-visible:outline focus-visible:outline-2 focus-visible:outline-[var(--accent)] focus-visible:outline-offset-2"
                  >
                    <EyeIcon />
                  </button>
                </li>
              ))}
            </ul>
          </Reveal>
        </section>
      ))}

      <Dialog
        open={openHighlight !== null}
        onClose={() => setOpenHighlight(null)}
        titleId={dialogTitleId}
        closeLabel={closeDialogLabel}
      >
        {openHighlight ? (
          <div className="p-7">
            <div className="pr-10">
              <div className="font-[family-name:var(--heading)] text-xs font-semibold uppercase tracking-wide text-[var(--accent)]">
                {openHighlight.context}
              </div>
              <h3
                id={dialogTitleId}
                className="m-0 mt-1.5 font-[family-name:var(--heading)] text-xl font-bold text-[var(--text-h)]"
              >
                {openHighlight.title}
              </h3>
            </div>
            <p className="mb-0 mt-3.5 text-sm leading-[150%] text-[var(--text)]">
              {openHighlight.description}
            </p>
            <FlowDiagram nodes={openHighlight.flow} />
          </div>
        ) : null}
      </Dialog>
    </section>
  )
}
