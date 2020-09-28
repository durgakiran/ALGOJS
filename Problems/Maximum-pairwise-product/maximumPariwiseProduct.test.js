import maximumProductOfTwoIntegers from './MaximumPairwiseProduct';

describe('Maximum Product Of Two Integers', () => {
  test('it should return correct result of small array', () => {
    const arrayOfIntegers = [2, 1];
    expect(maximumProductOfTwoIntegers(arrayOfIntegers)).toBe(2);
    expect(maximumProductOfTwoIntegers([20000, 130983729143])).toBe(2619674582860000);
  });
});
