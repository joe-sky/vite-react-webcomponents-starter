export function as<R, T = any>(value: T): R {
  return (value as T | R) as R;
}
