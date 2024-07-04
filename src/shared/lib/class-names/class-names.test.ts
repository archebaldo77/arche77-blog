import { classNames } from './class-names';

describe(`Test suites for classNames (shared)`, () => {
  test(`with only <classes> [arg]`, () => {
    expect(classNames(`classes-test`)).toBe(`classes-test`);
  });

  test(`with only <mods> [arg]`, () => {
    expect(classNames(``, { [`mods-class-test`]: true })).toBe(
      `mods-class-test`,
    );
  });

  test(`with only <additional> [arg]`, () => {
    expect(classNames(``, {}, [`additional-class-test`])).toBe(
      `additional-class-test`,
    );
  });

  test(`with all [args]`, () => {
    expect(
      classNames(`classes-test`, { [`mods-class-test`]: true }, [
        `additional-class-test`,
      ]),
    ).toBe(`classes-test mods-class-test additional-class-test`);
  });

  test(`without [args]`, () => {
    expect(classNames()).toBe(``);
  });
});
