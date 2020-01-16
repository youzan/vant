import { GENERATOR_DIR, CWD } from '../common/constant';
import { VantCliGenerator } from '../compiler/vant-cli-generator';

export async function create() {
  const generator = new VantCliGenerator([], {
    env: {
      cwd: CWD
    },
    resolved: GENERATOR_DIR
  });

  return new Promise(resolve => {
    generator.run(resolve);
  });
}
