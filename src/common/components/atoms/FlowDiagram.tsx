import { motion, useReducedMotion } from "motion/react";

export type FlowDiagramProps = {
  nodes: string[];
};

const GREEN = "#10b981";
const ORANGE = "#f97316";

const NODE_STEP = 0.35;
const ENTRANCE_DURATION = 0.4;
const LINE_DRAW_DURATION = 0.35;
const DWELL_DURATION = 0.35;
const TRAVEL_DURATION = 0.55;
const LOOP_PAUSE = 0.6;
const SEGMENT = DWELL_DURATION + TRAVEL_DURATION;
const COLUMNS = 2;

type Placement = {
  node: string;
  index: number;
  row: number;
  col: number;
};

/** Boustrophedon (snake) layout: row 0 flows left→right, row 1 right→left, etc. */
function placeNodes(nodes: string[]): Placement[] {
  return nodes.map((node, index) => {
    const row = Math.floor(index / COLUMNS);
    const colInRow = index % COLUMNS;
    const col = row % 2 === 0 ? colInRow : COLUMNS - 1 - colInRow;
    return { node, index, row, col };
  });
}

export function FlowDiagram({ nodes }: FlowDiagramProps) {
  const prefersReducedMotion = useReducedMotion();
  const placements = placeNodes(nodes);
  const rowCount = placements[placements.length - 1].row + 1;
  const settleTime = prefersReducedMotion
    ? 0
    : nodes.length * NODE_STEP + ENTRANCE_DURATION;
  const edgeCount = nodes.length - 1;
  const cycleDuration = edgeCount * SEGMENT + DWELL_DURATION + LOOP_PAUSE;

  const gridTemplateRows = Array.from({ length: rowCount * 2 - 1 }, (_, i) =>
    i % 2 === 0 ? "auto" : "1.75rem",
  ).join(" ");

  return (
    <div
      className="mx-auto grid max-w-sm py-3"
      style={{ gridTemplateColumns: "1fr 2.25rem 1fr", gridTemplateRows }}
    >
      {placements.map(({ node, index, row, col }) => (
        <motion.div
          key={node}
          className="flex items-center justify-center rounded-xl border-[1.5px] border-[var(--accent)] bg-[var(--bg)] px-4 py-3 text-center text-sm font-semibold text-[var(--text-h)]"
          style={{ gridColumn: col === 0 ? 1 : 3, gridRow: row * 2 + 1 }}
          initial={{ opacity: 0, y: 10 }}
          animate={{
            opacity: 1,
            y: 0,
            ...(prefersReducedMotion
              ? null
              : { borderColor: [GREEN, ORANGE, ORANGE, GREEN] }),
          }}
          transition={{
            opacity: {
              delay: prefersReducedMotion ? 0 : index * NODE_STEP,
              duration: prefersReducedMotion ? 0 : ENTRANCE_DURATION,
              ease: "easeOut",
            },
            y: {
              delay: prefersReducedMotion ? 0 : index * NODE_STEP,
              duration: prefersReducedMotion ? 0 : ENTRANCE_DURATION,
              ease: "easeOut",
            },
            borderColor: prefersReducedMotion
              ? undefined
              : {
                  delay: settleTime + index * SEGMENT,
                  duration: DWELL_DURATION,
                  times: [0, 0.2, 0.8, 1],
                  ease: "easeInOut",
                  repeat: Infinity,
                  repeatDelay: cycleDuration - DWELL_DURATION,
                },
          }}
        >
          {node}
        </motion.div>
      ))}

      {placements.slice(0, -1).map(({ index, row, col }) => {
        const drawDelay = prefersReducedMotion ? 0 : index * NODE_STEP + 0.25;
        const travelDelay = settleTime + index * SEGMENT + DWELL_DURATION;
        const dotTransition = {
          delay: travelDelay,
          duration: TRAVEL_DURATION,
          ease: "easeInOut" as const,
          repeat: Infinity,
          repeatDelay: cycleDuration - TRAVEL_DURATION,
        };

        // odd index = last node in its row → turn the corner to the next row
        if (index % COLUMNS === COLUMNS - 1) {
          return (
            <div
              key={`edge-${index}`}
              className="relative w-0.5 justify-self-center"
              style={{ gridColumn: col === 0 ? 1 : 3, gridRow: row * 2 + 2 }}
            >
              <motion.div
                className="absolute inset-0 origin-top bg-[var(--accent)]"
                initial={{ scaleY: 0 }}
                animate={{ scaleY: 1 }}
                transition={{
                  delay: drawDelay,
                  duration: prefersReducedMotion ? 0 : LINE_DRAW_DURATION,
                  ease: "easeOut",
                }}
              />
              {!prefersReducedMotion ? (
                <motion.div
                  className="absolute left-1/2 h-2 w-2 -translate-x-1/2 rounded-full"
                  style={{ backgroundColor: ORANGE, boxShadow: `0 0 10px ${ORANGE}` }}
                  initial={{ top: "0%", opacity: 0 }}
                  animate={{ top: "100%", opacity: [0, 1, 1, 0] }}
                  transition={dotTransition}
                />
              ) : null}
            </div>
          );
        }

        const leftToRight = row % 2 === 0;
        return (
          <div
            key={`edge-${index}`}
            className="relative h-0.5 self-center"
            style={{ gridColumn: 2, gridRow: row * 2 + 1 }}
          >
            <motion.div
              className={`absolute inset-0 bg-[var(--accent)] ${leftToRight ? "origin-left" : "origin-right"}`}
              initial={{ scaleX: 0 }}
              animate={{ scaleX: 1 }}
              transition={{
                delay: drawDelay,
                duration: prefersReducedMotion ? 0 : LINE_DRAW_DURATION,
                ease: "easeOut",
              }}
            />
            {!prefersReducedMotion ? (
              <motion.div
                className="absolute top-1/2 h-2 w-2 -translate-y-1/2 rounded-full"
                style={{ backgroundColor: ORANGE, boxShadow: `0 0 10px ${ORANGE}` }}
                initial={{ left: leftToRight ? "0%" : "100%", opacity: 0 }}
                animate={{ left: leftToRight ? "100%" : "0%", opacity: [0, 1, 1, 0] }}
                transition={dotTransition}
              />
            ) : null}
          </div>
        );
      })}
    </div>
  );
}
