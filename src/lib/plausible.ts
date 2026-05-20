type PlausibleFn = (event: string, options?: { props?: Record<string, string | number | boolean> }) => void;
declare global { interface Window { plausible?: PlausibleFn; } }
export function fire(event: string, props?: Record<string, string | number | boolean>): void {
  window.plausible?.(event, props ? { props } : undefined);
}
