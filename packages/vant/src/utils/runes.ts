/**
 * This is a fork of [runes2](https://github.com/bluelovers/ws-string/blob/master/packages/runes2/src/index.ts)
 * with fixes of subdivision-flag.
 * license at https://github.com/bluelovers/ws-string/blob/master/packages/runes2/LICENSE
 */
export const enum EnumRunesCode {
  HIGH_SURROGATE_START = 0xd800,
  HIGH_SURROGATE_END = 0xdbff,

  LOW_SURROGATE_START = 0xdc00,

  REGIONAL_INDICATOR_START = 0x1f1e6,
  REGIONAL_INDICATOR_END = 0x1f1ff,

  FITZPATRICK_MODIFIER_START = 0x1f3fb,
  FITZPATRICK_MODIFIER_END = 0x1f3ff,

  VARIATION_MODIFIER_START = 0xfe00,
  VARIATION_MODIFIER_END = 0xfe0f,

  DIACRITICAL_MARKS_START = 0x20d0,
  DIACRITICAL_MARKS_END = 0x20ff,

  SUBDIVISION_INDICATOR_START = 0x1f3f4,
  TAGS_START = 0xe0000,
  TAGS_END = 0xe007f,

  ZWJ = 0x200d,
}

export const GRAPHEMES = Object.freeze([
  0x0308, // ( ◌̈ ) COMBINING DIAERESIS
  0x0937, // ( ष ) DEVANAGARI LETTER SSA
  0x093f, // ( ि ) DEVANAGARI VOWEL SIGN I
  0x0ba8, // ( ந ) TAMIL LETTER NA
  0x0bbf, // ( ி ) TAMIL VOWEL SIGN I
  0x0bcd, // ( ◌்) TAMIL SIGN VIRAMA
  0x0e31, // ( ◌ั ) THAI CHARACTER MAI HAN-AKAT
  0x0e33, // ( ำ ) THAI CHARACTER SARA AM
  0x0e40, // ( เ ) THAI CHARACTER SARA E
  0x0e49, // ( เ ) THAI CHARACTER MAI THO
  0x1100, // ( ᄀ ) HANGUL CHOSEONG KIYEOK
  0x1161, // ( ᅡ ) HANGUL JUNGSEONG A
  0x11a8, // ( ᆨ ) HANGUL JONGSEONG KIYEOK
]);

export const enum EnumCodeUnits {
  unit_1 = 1,
  unit_2 = 2,
  unit_4 = 4,
}

// https://en.wikipedia.org/wiki/Universal_Character_Set_characters#Surrogates
export function codePointFromSurrogatePair(pair: string) {
  const highOffset = pair.charCodeAt(0) - EnumRunesCode.HIGH_SURROGATE_START;
  const lowOffset = pair.charCodeAt(1) - EnumRunesCode.LOW_SURROGATE_START;
  return (highOffset << 10) + lowOffset + 0x10000;
}

export function betweenInclusive(value: number, lower: number, upper: number) {
  return value >= lower && value <= upper;
}

export function isFirstOfSurrogatePair(string: string) {
  return (
    string &&
    betweenInclusive(
      string[0].charCodeAt(0),
      EnumRunesCode.HIGH_SURROGATE_START,
      EnumRunesCode.HIGH_SURROGATE_END
    )
  );
}

export function isFitzpatrickModifier(string: string) {
  return betweenInclusive(
    codePointFromSurrogatePair(string),
    EnumRunesCode.FITZPATRICK_MODIFIER_START,
    EnumRunesCode.FITZPATRICK_MODIFIER_END
  );
}

export function isRegionalIndicator(string: string) {
  return betweenInclusive(
    codePointFromSurrogatePair(string),
    EnumRunesCode.REGIONAL_INDICATOR_START,
    EnumRunesCode.REGIONAL_INDICATOR_END
  );
}

export function isSubdivisionFlag(string: string) {
  return betweenInclusive(
    codePointFromSurrogatePair(string),
    EnumRunesCode.SUBDIVISION_INDICATOR_START,
    EnumRunesCode.SUBDIVISION_INDICATOR_START
  );
}

export function isVariationSelector(string: string) {
  return (
    typeof string === 'string' &&
    betweenInclusive(
      string.charCodeAt(0),
      EnumRunesCode.VARIATION_MODIFIER_START,
      EnumRunesCode.VARIATION_MODIFIER_END
    )
  );
}

export function isDiacriticalMark(string: string) {
  return (
    typeof string === 'string' &&
    betweenInclusive(
      string.charCodeAt(0),
      EnumRunesCode.DIACRITICAL_MARKS_START,
      EnumRunesCode.DIACRITICAL_MARKS_END
    )
  );
}

export function isSupplementarySpecialpurposePlane(string: string) {
  const codePoint = string.codePointAt(0);
  return (
    typeof string === 'string' &&
    typeof codePoint === 'number' &&
    betweenInclusive(
      codePoint,
      EnumRunesCode.TAGS_START,
      EnumRunesCode.TAGS_END
    )
  );
}

export function isGrapheme(string: string) {
  return typeof string === 'string' && GRAPHEMES.includes(string.charCodeAt(0));
}

export function isZeroWidthJoiner(string: string) {
  return (
    typeof string === 'string' && string.charCodeAt(0) === EnumRunesCode.ZWJ
  );
}

// Decide how many code units make up the current character.
// BMP characters: 1 code unit
// Non-BMP characters (represented by surrogate pairs): 2 code units
// Emoji with skin-tone modifiers: 4 code units (2 code points)
// Country flags: 4 code units (2 code points)
// Variations: 2 code units
// Subdivision flags: 14 code units (7 code points)
export function nextUnits(i: number, string: string) {
  const current = string[i];
  // If we don't have a value that is part of a surrogate pair, or we're at
  // the end, only take the value at i
  if (!isFirstOfSurrogatePair(current) || i === string.length - 1) {
    return EnumCodeUnits.unit_1;
  }

  const currentPair = current + string[i + 1];
  const nextPair = string.substring(i + 2, i + 5);

  // Country flags are comprised of two regional indicator symbols,
  // each represented by a surrogate pair.
  // See http://emojipedia.org/flags/
  // If both pairs are regional indicator symbols, take 4
  if (isRegionalIndicator(currentPair) && isRegionalIndicator(nextPair)) {
    return EnumCodeUnits.unit_4;
  }

  // https://unicode.org/emoji/charts/full-emoji-list.html#subdivision-flag
  // If nextPair is in Tags(https://en.wikipedia.org/wiki/Tags_(Unicode_block)),
  // then find next recent U+E007F(CANCEL TAG)
  if (
    isSubdivisionFlag(currentPair) &&
    isSupplementarySpecialpurposePlane(nextPair)
  ) {
    return (
      string.slice(i).indexOf(String.fromCodePoint(EnumRunesCode.TAGS_END)) + 2
    );
  }

  // If the next pair make a Fitzpatrick skin tone
  // modifier, take 4
  // See http://emojipedia.org/modifiers/
  // Technically, only some code points are meant to be
  // combined with the skin tone modifiers. This function
  // does not check the current pair to see if it is
  // one of them.
  if (isFitzpatrickModifier(nextPair)) {
    return EnumCodeUnits.unit_4;
  }

  return EnumCodeUnits.unit_2;
}

export function runes(string: string): string[] {
  if (typeof string !== 'string') {
    throw new TypeError('string cannot be undefined or null');
  }
  const result: string[] = [];
  let i = 0;
  let increment = 0;
  while (i < string.length) {
    increment += nextUnits(i + increment, string);
    if (isGrapheme(string[i + increment])) {
      increment++;
    }
    if (isVariationSelector(string[i + increment])) {
      increment++;
    }
    if (isDiacriticalMark(string[i + increment])) {
      increment++;
    }
    if (isZeroWidthJoiner(string[i + increment])) {
      increment++;
      // eslint-disable-next-line no-continue
      continue;
    }
    result.push(string.substring(i, i + increment));
    i += increment;
    increment = 0;
  }
  return result;
}

export function substring(string: string, start?: number, width?: number) {
  const chars = runes(string);
  if (start === undefined) {
    return string;
  }
  if (start >= chars.length) {
    return '';
  }
  const rest = chars.length - start;
  const stringWidth = width === undefined ? rest : width;
  let endIndex: number | undefined = start + stringWidth;
  if (endIndex > start + rest) {
    endIndex = undefined;
  }
  return chars.slice(start, endIndex).join('');
}

export { substring as substr };

// @ts-ignore
Object.defineProperty(runes, 'runes', { value: runes });
Object.defineProperty(runes, 'default', { value: runes });
Object.defineProperty(runes, '__esModule', { value: true });

Object.defineProperty(runes, 'substr', { value: substring });
Object.defineProperty(runes, 'substring', { value: substring });

// @ts-ignore
Object.defineProperty(runes, 'EnumRunesCode', { value: EnumRunesCode });
// @ts-ignore
Object.defineProperty(runes, 'EnumCodeUnits', { value: EnumCodeUnits });
Object.defineProperty(runes, 'GRAPHEMES', { value: GRAPHEMES });

export default runes;
