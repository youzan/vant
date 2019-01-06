import useBem from './bem';
import useSfc from './sfc';

export default function (name) {
  name = 'van-' + name;
  return [useSfc(name), useBem(name)];
}
