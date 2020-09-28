import { maximumProductOfTwoIntegers, compareTwoIntegers } from './MaximumPairwiseProduct';

describe('Maximum Product Of Two Integers', () => {
  test('it should return correct result of small array', () => {
    let arrayOfIntegers = [2, 1];
    expect(maximumProductOfTwoIntegers(arrayOfIntegers)).toBe(2);
    expect(maximumProductOfTwoIntegers([20000, 130983729143])).toBe(2619674582860000);
    expect(maximumProductOfTwoIntegers([2, 9, 3, 1, 9])).toBe(81);
    arrayOfIntegers = [68165, 87637, 74297, 2904, 32873, 86010, 87637, 66131, 82858, 82935];
    expect(maximumProductOfTwoIntegers(arrayOfIntegers)).toBe(7680243769);
  });
});

describe('Compare two numbers', () => {
  test('It should compare numbers and returns an integers', () => {
    expect(compareTwoIntegers(1, 2)).toBe(-1);
    expect(compareTwoIntegers(2, 1)).toBe(1);
    expect(compareTwoIntegers(3, 3)).toBe(0);
    expect(compareTwoIntegers(3, undefined)).toBe(1);
    expect(compareTwoIntegers(NaN, 3)).toBe(-1);
    expect(compareTwoIntegers(NaN, undefined)).toBe(-1);
  });
});
