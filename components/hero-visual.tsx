import { Brain, Database, LineChart } from 'lucide-react'

const bars = [38, 52, 44, 68, 58, 82, 74, 92]

const codeLines = [
  { tokens: [['text-primary', 'import'], ['', ' pandas '], ['text-primary', 'as'], ['', ' pd']] },
  { tokens: [['', 'df = pd.read_csv('], ['text-brand-blue', '"sales.csv"'], ['', ')']] },
  { tokens: [['', 'df.groupby('], ['text-brand-blue', '"month"'], ['', ').sum()']] },
  { tokens: [['', 'model.fit(X_train, y_train)']] },
]

export function HeroVisual() {
  return (
    <div
      aria-hidden="true"
      className="relative mx-auto w-full max-w-md animate-in fade-in zoom-in-95 duration-1000 lg:max-w-none"
    >
      <div className="rounded-3xl border border-border/80 bg-card/80 p-5 shadow-2xl shadow-primary/10 backdrop-blur-xl md:p-6">
        <div className="mb-5 flex items-center justify-between">
          <div className="flex gap-1.5">
            <span className="size-2.5 rounded-full bg-border" />
            <span className="size-2.5 rounded-full bg-border" />
            <span className="size-2.5 rounded-full bg-border" />
          </div>
          <span className="font-mono text-xs text-muted-foreground">insights.ipynb</span>
        </div>

        <div className="rounded-2xl bg-muted/70 p-4 font-mono text-[12px] leading-6 text-foreground/80">
          {codeLines.map((line, i) => (
            <div key={i} className="flex gap-3">
              <span className="w-3 select-none text-muted-foreground/60">{i + 1}</span>
              <span className="truncate">
                {line.tokens.map(([cls, text], j) => (
                  <span key={j} className={cls}>
                    {text}
                  </span>
                ))}
              </span>
            </div>
          ))}
        </div>

        <div className="mt-5 rounded-2xl border border-border/70 p-4">
          <div className="mb-4 flex items-center justify-between">
            <span className="text-sm font-medium">Trend analysis</span>
            <LineChart className="size-4 text-primary" />
          </div>
          <div className="relative flex h-32 items-end gap-2">
            {bars.map((h, i) => (
              <span
                key={i}
                className="animate-grow-bar flex-1 rounded-t-md bg-linear-to-t from-primary/25 to-primary/70"
                style={{ height: `${h}%`, animationDelay: `${i * 90}ms` }}
              />
            ))}
            <svg
              viewBox="0 0 100 100"
              preserveAspectRatio="none"
              className="absolute inset-0 size-full"
            >
              <polyline
                className="animate-draw-line"
                fill="none"
                stroke="var(--brand-blue)"
                strokeWidth="1.6"
                strokeLinecap="round"
                strokeLinejoin="round"
                vectorEffect="non-scaling-stroke"
                points="6,66 18,52 31,60 43,36 56,46 68,22 81,30 94,10"
              />
            </svg>
          </div>
        </div>
      </div>

      <div className="animate-float-y absolute -left-4 top-24 hidden items-center gap-2 rounded-xl border border-border bg-card px-3 py-2 text-xs font-medium shadow-lg shadow-primary/10 sm:flex md:-left-10">
        <Database className="size-4 text-brand-blue" />
        SQL
      </div>
      <div
        className="animate-float-y absolute -right-3 bottom-24 hidden items-center gap-2 rounded-xl border border-border bg-card px-3 py-2 text-xs font-medium shadow-lg shadow-primary/10 sm:flex md:-right-8"
        style={{ animationDelay: '-3s' }}
      >
        <Brain className="size-4 text-primary" />
        Machine Learning
      </div>
    </div>
  )
}
