import { mount } from '../../../test';
import Steps from '..';
import Step from '../../step';

test('icon slot', () => {
  const wrapper = mount({
    template: `
    <steps :active="1">
      <step>
        <template v-slot:inactive-icon>Custim Inactive Icon</template>
        A
      </step>
      <step>
        <template v-slot:active-icon>Custim Active Icon</template>
        B
      </step>
      <step>
        <template v-slot:inactive-icon>Custim Inactive Icon</template>
        C
      </step>
    </steps>
    `,
    components: {
      Steps,
      Step,
    },
  });
  expect(wrapper).toMatchSnapshot();
});
