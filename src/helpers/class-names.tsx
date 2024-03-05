type Mods = Record<string, boolean>;

export const classNames = (
  classes: string = ``,
  mods: Mods = {},
  additional: string[] = []
): string => {
  return [
    classes,
    ...Object.entries(mods)
      .filter(([, bool]) => Boolean(bool))
      .map(([cls]) => cls),
    ...additional.filter((cls) => Boolean(cls)),
  ]
    .join(` `)
    .trim();
};
