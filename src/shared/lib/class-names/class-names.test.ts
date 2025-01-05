import { classNames } from './class-names';

describe(`Test suites for class-names helper`, () => {
  test(`with mainClass arg`, () => {
    expect(classNames(`main-class`)).toBe(`main-class`);
  });

  test(`with true mods arg`, () => {
    expect(classNames(`main-class`, { helper: true })).toBe(
      `main-class helper`,
    );
  });

  test(`with false mods arg`, () => {
    expect(classNames(`main-class`, { helper: false })).toBe(`main-class`);
  });

  test(`with true/false mods arg`, () => {
    expect(classNames(`main-class`, { helper: true, negative: false })).toBe(
      `main-class helper`,
    );
  });

  test(`with additionalClasses arg`, () => {
    expect(classNames(`main-class`, {}, [`additional-class`])).toBe(
      `main-class additional-class`,
    );
  });

  test(`with all args`, () => {
    expect(
      classNames(`main-class`, { helper: true, negative: false }, [
        `additional-class`,
      ]),
    ).toBe(`main-class helper additional-class`);
  });
});
