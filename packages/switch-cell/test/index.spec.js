import SwitchCell from '..';
import { mount } from '../../../test/utils';

test('emit event', () => {
  const wrapper = mount(SwitchCell);

  wrapper.vm.$on('input', value => {
    wrapper.setProps({ value });
  });
  wrapper.find('.ms-switch').trigger('click');

  expect(wrapper.emitted('change')).toBeTruthy();
});
