import { cn } from "@/lib/cn";

type RevenueCardProps = {
  label: string;
  period: string;
  amount: string;
  /** Short change badge, e.g. "+12$". */
  change: string;
  /** Optional 0–100 progress towards a target, drawn under the amount. */
  progress?: number;
  className?: string;
};

function ChangeBadge({ children }: { children: string }) {
  return (
    <span className="inline-flex h-6 w-9.5 shrink-0 items-center justify-center rounded-full bg-lime-500 text-[10px] leading-none text-neutral-950">
      <span className="sr-only">Change: </span>
      {children}
    </span>
  );
}

/** Blue dashboard tile used in the creator collage ("Total Revenue", "Year to Date"). */
export function RevenueCard({
  label,
  period,
  amount,
  change,
  progress,
  className,
}: RevenueCardProps) {
  const hasProgress = progress !== undefined;

  return (
    <div className={cn("rounded-2xl bg-primary-800 p-4 text-neutral-50", className)}>
      <p className="text-body-m leading-[1.3]">{label}</p>
      <p className="-mt-0.5 text-[10px] leading-[1.3]">{period}</p>

      <div className={cn("mt-2.25", hasProgress && "flex items-center justify-between gap-2")}>
        <p className="font-heading text-2xl leading-[1.2] font-semibold tracking-heading whitespace-nowrap">
          {amount}
        </p>
        {hasProgress ? (
          <ChangeBadge>{change}</ChangeBadge>
        ) : (
          <div className="mt-[9.6px]">
            <ChangeBadge>{change}</ChangeBadge>
          </div>
        )}
      </div>

      {hasProgress && (
        <div aria-hidden="true" className="mt-[9.6px] h-2 w-50 rounded-full bg-white">
          <div className="h-full rounded-full bg-lime-400" style={{ width: `${progress}%` }} />
        </div>
      )}
    </div>
  );
}