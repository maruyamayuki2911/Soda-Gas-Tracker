import { validateInput } from "../gasCalculator.js";

describe('validateInput:異常系', () => {
  test('NaNはエラーになる', () => {
    expect(() => validateInput(NaN, '秒数')).toThrow('秒数は0以上の数値を入力してください。');
  });

  test('文字列はエラーになる', () => {
    expect(() => validateInput('abc', '秒数')).toThrow('秒数は0以上の数値を入力してください。');
  });

  test('nullエラーになる', () => {
    expect(() => validateInput(null, '秒数')).toThrow('秒数は0以上の数値を入力してください。');
  });
});