type ModsType = Record<string, boolean>;

export const classNames = (
  cls: string,
  mods: ModsType = {},
  additional: string[] = []
): string => {
  return [
    cls,
    Object.entries(mods)
      .filter(([, value]) => Boolean(value))
      .map(([classes]) => classes),
    additional.filter(Boolean),
  ].join(` `);
};
