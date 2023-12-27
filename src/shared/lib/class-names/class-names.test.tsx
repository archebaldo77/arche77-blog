import { classNames } from '@/shared/lib';

describe(`Test cases for [classNames] module `, () => {
  test(`Check with cls argument`, () => {
    expect(classNames(`some-class`)).toBe(`some-class`);
  });

  test(`Check with mods argument (only true)`, () => {
    expect(classNames(``, { hovered: true })).toBe(` hovered`);
  });

  test(`Check with mods argument (with false)`, () => {
    expect(classNames(`some-class`, { hovered: false })).toBe(`some-class`);
  });

  test(`Check with additional argument`, () => {
    expect(classNames(``, {}, [`additional-class`])).toBe(` additional-class`);
  });

  test(`Check without arguments`, () => {
    expect(classNames(``, {}, [])).toBe(``);
  });

  test(`Check with all arguments`, () => {
    expect(
      classNames(`some-class`, { hovered: true, selected: false }, [
        `additional-class`,
      ])
    ).toBe(`some-class hovered additional-class`);
  });
});
