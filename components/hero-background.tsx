const nodes = [
  { top: '18%', left: '8%', delay: '0s' },
  { top: '32%', left: '46%', delay: '0.8s' },
  { top: '12%', left: '72%', delay: '1.6s' },
  { top: '64%', left: '14%', delay: '2.2s' },
  { top: '78%', left: '58%', delay: '1.1s' },
  { top: '52%', left: '88%', delay: '2.8s' },
]

export function HeroBackground() {
  return (
    <div aria-hidden="true" className="pointer-events-none absolute inset-0 -z-10">
      <div className="bg-grid absolute inset-0 [mask-image:radial-gradient(ellipse_70%_60%_at_50%_30%,black,transparent)]" />
      <div className="animate-drift absolute -left-24 top-10 size-96 rounded-full bg-primary/20 blur-3xl" />
      <div
        className="animate-drift absolute -right-20 top-40 size-[28rem] rounded-full bg-brand-blue/15 blur-3xl"
        style={{ animationDelay: '-8s' }}
      />
      {nodes.map((node) => (
        <span
          key={`${node.top}-${node.left}`}
          className="animate-pulse-node absolute size-1.5 rounded-full bg-primary"
          style={{ top: node.top, left: node.left, animationDelay: node.delay }}
        />
      ))}
      <div className="absolute inset-x-0 bottom-0 h-32 bg-linear-to-b from-transparent to-background" />
    </div>
  )
}
