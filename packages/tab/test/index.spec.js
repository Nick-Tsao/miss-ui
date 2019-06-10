import Tab from '..';
import Tabs from '../../tabs';
import { mount, later, triggerDrag } from '../../../test/utils';

function createWrapper(options) {
  return mount({
    template: `
      <tabs @change="onChange"
        :color="color"
        :type="type"
        :swipeable="swipeable"
        :sticky="sticky"
        :line-width="lineWidth"
      >
        <tab :title="title1">Text</tab>
        <tab>
          <span slot="title">title2</span>
          Text
        </tab>
        <tab title="title3" disabled>Text</tab>
      </tabs>
    `,
    components: {
      Tab,
      Tabs
    },
    data() {
      return {
        title1: 'title1',
        color: '#f44',
        type: 'line',
        swipeable: true,
        sticky: true,
        lineWidth: 2
      };
    },
    ...options
  });
}

test('click to switch tab', async () => {
  const onChange = jest.fn();
  const wrapper = createWrapper({
    methods: {
      onChange
    }
  });

  await later();
  expect(wrapper).toMatchSnapshot();

  const tabs = wrapper.findAll('.ms-tab');
  tabs.at(1).trigger('click');
  tabs.at(2).trigger('click');
  await later();
  expect(wrapper).toMatchSnapshot();
  expect(onChange.mock.calls.length).toEqual(1);
});

test('swipe to switch tab', async () => {
  const onChange = jest.fn();
  const wrapper = createWrapper({
    methods: {
      onChange
    }
  });

  const content = wrapper.find('.ms-tabs__content');
  await later();
  expect(wrapper).toMatchSnapshot();
  triggerDrag(content, -100, 0);
  expect(wrapper).toMatchSnapshot();
  expect(onChange.mock.calls.length).toEqual(1);
  triggerDrag(content, -100, 0);
  expect(wrapper).toMatchSnapshot();
  triggerDrag(content, 100, 0);
  triggerDrag(content, 100, 0);
  expect(wrapper).toMatchSnapshot();

  await later();
  wrapper.destroy();
});

test('change tabs data', async () => {
  const wrapper = createWrapper();

  expect(wrapper).toMatchSnapshot();

  wrapper.setData({
    swipeable: false,
    sticky: false,
    type: 'card',
    color: 'blue',
    title1: 'new title1'
  });
  expect(wrapper).toMatchSnapshot();
});
