import runes from '../runes';

test('runes', () => {
  expect(runes('🏴󠁧󠁢󠁥󠁮󠁧󠁿').length).toEqual(1); // 14
  expect(runes('🏴󠁵󠁳󠁷󠁡󠁿').length).toEqual(1); // 12
  expect(runes('🏴').length).toEqual(1); // 2
  expect(runes('🏴󠁧󠁢󠁥󠁮󠁧󠁿🏴󠁵󠁳󠁷󠁡󠁿🏴').length).toEqual(3); // 28
  expect(runes('👩‍👩‍👧‍👦').length).toEqual(1); // 11
  expect(runes('👻').length).toEqual(1); // 2
  expect(runes('🇿🇼').length).toEqual(1); // 4
  expect(runes('🕵️‍♂️').length).toEqual(1); // 6
  expect(runes('🙆🏿‍♀️').length).toEqual(1); // 7
});
