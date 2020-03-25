import { render } from '@testing-library/vue';
import LoremIpsum from './LoremIpsum.vue';

test('contain Lorem Ipsum text', () => {
  const { container } = render(LoremIpsum);

  expect(container).toHaveTextContent(/Lorem Ipsum/i);
});
