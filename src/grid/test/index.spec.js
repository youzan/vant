import { mount } from '@vue/test-utils';
import Grid from '..';
import GridItem from '../../grid-item';

test('should render square grid with gutter correctly', () => {
  const wrapper = mount({
    render() {
      return (
        <Grid square columnNum="2" gutter="10rem">
          <GridItem />
          <GridItem />
          <GridItem />
        </Grid>
      );
    },
  });

  expect(wrapper.html()).toMatchSnapshot();
});

test('should change icon size when using icon-size prop', () => {
  const wrapper = mount({
    render() {
      return (
        <Grid icon-size="10">
          <GridItem icon="success" />
        </Grid>
      );
    },
  });

  expect(wrapper.find('.van-grid-item__icon').element.style.fontSize).toEqual(
    '10px'
  );
});

test('should render icon-slot correctly', () => {
  const wrapper = mount({
    render() {
      return (
        <Grid>
          <GridItem badge="1" v-slots={{ icon: () => 'Custom Icon' }} />
        </Grid>
      );
    },
  });

  expect(wrapper.html()).toMatchSnapshot();
});
