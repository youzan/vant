import { Highlight } from '..';
import { mount } from '../../../test';

test('should render the specified text label highlighting correctly', () => {
  const wrapper = mount(Highlight, {
    props: {
      keywords: 'questions',
      sourceString:
        'Take your time and be patient. Life itself will eventually answer all those questions it once raised for you.',
    },
  });

  const highlight = wrapper.find('.van-highlight');
  const tagText = highlight.find('.van-highlight__tag').text();

  expect(tagText).toEqual('questions');
});

test('multiple keywords highlighting can be specified', () => {
  const wrapper = mount(Highlight, {
    props: {
      keywords: ['time', 'life', 'questions'],
      sourceString:
        'Take your time and be patient. Life itself will eventually answer all those questions it once raised for you.',
    },
  });

  const highlight = wrapper.find('.van-highlight');
  const tags = highlight.findAll('.van-highlight__tag');

  expect(tags.length).toEqual(3);
  expect(tags[0].text()).toEqual('time');
  expect(tags[1].text()).toEqual('Life');
  expect(tags[2].text()).toEqual('questions');
});

test('should be correctly case sensitive', () => {
  const wrapper = mount(Highlight, {
    props: {
      keywords: ['take', 'Life', 'questions'],
      sourceString:
        'Take your time and be patient. Life itself will eventually answer all those questions it once raised for you.',
      caseSensitive: true,
    },
  });

  const highlight = wrapper.find('.van-highlight');
  const tags = highlight.findAll('.van-highlight__tag');

  expect(tags.length).toEqual(2);
  expect(tags[0].text()).toEqual('Life');
  expect(tags[1].text()).toEqual('questions');
});

test('should set custom class of the highlight tag', () => {
  const wrapper = mount(Highlight, {
    props: {
      keywords: 'time',
      sourceString:
        'Take your time and be patient. Life itself will eventually answer all those questions it once raised for you.',
      highlightClass: 'my-custom-class',
    },
  });

  const highlight = wrapper.find('.van-highlight');
  const tag = highlight.find('.van-highlight__tag');

  expect(tag.classes()).toContain('my-custom-class');
});

test('should be merged when the highlighted content overlaps', () => {
  const wrapper = mount(Highlight, {
    props: {
      keywords: ['ab', 'bc'],
      sourceString: 'abcd',
    },
  });

  const highlight = wrapper.find('.van-highlight');
  const tags = highlight.findAll('.van-highlight__tag');

  expect(tags[0].text()).toEqual('abc');
});

test('empty text should not be matched', () => {
  const wrapper = mount(Highlight, {
    props: {
      keywords: ['', 'bc'],
      sourceString: 'abcd',
    },
  });

  const highlight = wrapper.find('.van-highlight');
  const tags = highlight.findAll('.van-highlight__tag');

  expect(tags[0].text()).toEqual('bc');
});
