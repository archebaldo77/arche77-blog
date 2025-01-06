type Mods = Record<string, boolean>;

export const classNames = (
  mainClasses: string,
  mods: Mods = {},
  additionalClasses: string[] = [],
): string => {
  return [
    mainClasses,
    ...Object.entries(mods)
      .filter(([, boolFlag]) => Boolean(boolFlag))
      .map(([className]) => className),
    ...additionalClasses.filter(Boolean),
  ]
    .join(` `)
    .trim();
};
