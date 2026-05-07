export function normalizeText(input: string | undefined | null): string {
  return (input ?? "").trim().toLowerCase();
}
