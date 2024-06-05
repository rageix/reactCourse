/**
 * Joins multiple classes together into one string.
 * @param classes - classes to join
 */
export default function classNames(
  ...classes: (string | null | undefined)[]
): string {
  return classes.filter(Boolean).join(' ');
}
