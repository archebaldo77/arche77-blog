type Mods = Record<string, boolean>;

export const classNames = (
  cls: string = ``,
  mods: Mods = {},
  additional: string[] = [],
): string => {
  return [
    cls,
    ...Object.entries(mods)
      .filter(([, value]) => Boolean(value))
      .map(([key]) => key),
    ...additional,
  ]
    .join(` `)
    .trim();
};
