import {
  _uniqueInFirstArr,
  getArraysDiff,
  leftPad,
} from '../index';

describe('_uniqueInFirstArr', () => {
  const fst = [1, 2, 3, 4, 5];
  const snd = [2, 5, 6, 8];

  const fstStrings = ['go', 'hey', 'ho', 'let\'s'];
  const sndStrings = ['bar', 'foo', 'hey', 'ho'];

  it('should not mutate source arrays', () => {
    _uniqueInFirstArr(fst, snd);
    expect(fst).toEqual([1, 2, 3, 4, 5]);
    expect(snd).toEqual([2, 5, 6, 8]);

    _uniqueInFirstArr(fstStrings, sndStrings);
    expect(fstStrings).toEqual(['go', 'hey', 'ho', 'let\'s']);
    expect(sndStrings).toEqual(['bar', 'foo', 'hey', 'ho']);
  });

  it('should return array', () => {
    const actual = _uniqueInFirstArr(fst, snd);
    expect(actual).toBeInstanceOf(Array);
  });

  it('should find unique values in array', () => {
    const uniqueFst = _uniqueInFirstArr(fst, snd);
    expect(uniqueFst).toEqual([1, 3, 4]);

    const uniqueSnd = _uniqueInFirstArr(snd, fst);
    expect(uniqueSnd).toEqual([6, 8]);

    const uniqueFstStrings = _uniqueInFirstArr(fstStrings, sndStrings);
    expect(uniqueFstStrings).toEqual(['go', 'let\'s']);

    const uniqueSndStrings = _uniqueInFirstArr(sndStrings, fstStrings);
    expect(uniqueSndStrings).toEqual(['bar', 'foo']);
  });
});

describe('getArraysDiff', () => {
  const fst = [2, 5, 6, 1, 4, 3];
  const snd = [8, 7, 1, 4, 2, 5];
  it('should not mutate source arrays', () => {
     getArraysDiff(fst, snd);
     expect(fst).toEqual([2, 5, 6, 1, 4, 3]);
     expect(snd).toEqual([8, 7, 1, 4, 2, 5]);
  });

  it('should return object', () => {
    const actual = getArraysDiff(fst, snd);
    expect(actual).toBeInstanceOf(Object);
  });

  it('should find correct array difference', () => {
    const actual = getArraysDiff(fst, snd);
    expect(actual).toEqual({
      first: [3, 6],
      second: [7, 8],
    });
  });
});

describe('leftPad', () => {
  it('should not mutate source value', () => {
    let source = 42;
    leftPad(source, 5);
    expect(source).toBe(42);
  });

  it('should return value if digits number > len parameter', () => {
    const source = 1337;
    const actual = leftPad(source, 3);
    expect(actual).toBe('1337');
  });

  it('should left pad with correct default value (0)', () => {
    const source = 42;
    const actual = leftPad(source, 4);
    expect(actual).toBe('0042');
  });

  it('should left pad with custom value', () => {
    const source = 42;
    const actual = leftPad(source, 5, '-');
    expect(actual).toBe('---42');
  });
});
