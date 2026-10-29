// Progress indicator color by completion: red < 30%, amber < 70%, green otherwise.
export function progressColor(percent: number): string {
  if (percent < 30) return "bg-destructive";
  if (percent < 70) return "bg-warning";
  return "bg-success";
}
