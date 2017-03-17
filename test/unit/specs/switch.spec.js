import Switch from 'packages/switch';
import { createVue } from '../creater';

describe('Switch', () => {
  let vm;
  afterEach(() => {
    vm && vm.destroy();
  });

  it('create', () => {
    vm = createVue(Switch, {
      checked: true
    });
    vm.mount();

    expect(vm.el.classList.contains('zan-switch')).to.true;
    expect(vm.el.classList.contains('zan-switch--on')).to.true;
  });

  it('create off switch', () => {
    vm = createVue(Switch, {
      checked: false
    });
    vm.mount();

    expect(vm.el.classList.contains('zan-switch')).to.true;
  });

  it('create loading switch', () => {
    vm = createVue({
      data() {
        return {
          checked: false
        };
      },
      components: {
        'zan-switch': Switch
      },
      template: `
        <zan-switch :loading="true"></zan-switch>
      `
    });
    vm.mount();

    expect(vm.el.classList.contains('zan-switch--loading')).to.true;
  });

  it('switch click disabled', done => {
    vm = createVue({
      data() {
        return {
          checked: false
        };
      },
      components: {
        'zan-switch': Switch
      },
      template: `
        <zan-switch :disabled="disabled"></zan-switch>
      `
    });
    vm.mount();
    expect(vm.el.classList.contains('zan-switch--disabled')).to.true;
    expect(vm.el.classList.contains('zan-switch--off')).to.true;
    vm.el.click();

    setTimeout(() => {
      expect(vm.el.classList.contains('zan-switch--off')).to.true;
      done();
    });
  });

  it('switch click default', done => {
    vm = createVue({
      data() {
        return {
          checked: false
        };
      },
      components: {
        'zan-switch': Switch
      },
      template: `
        <zan-switch :checked="checked"></zan-switch>
      `
    });
    vm.mount();
    expect(vm.el.classList.contains('zan-switch')).to.true;
    expect(vm.el.classList.contains('zan-switch--off')).to.true;
    vm.el.click();

    setTimeout(() => {
      expect(vm.el.classList.contains('zan-switch--off')).to.true;
      done();
    });
  });

  it('switch click', done => {
    vm = createVue({
      data() {
        return {
          checked: false
        };
      },
      components: {
        'zan-switch': Switch
      },
      template: `
        <zan-switch :checked="checked" :onChange="handleClick"></zan-switch>
      `,
      methods: {
        handleClick(e) {
          this.checked = !this.checked;
        }
      }
    });
    vm.mount();
    expect(vm.el.classList.contains('zan-switch')).to.true;
    expect(vm.el.classList.contains('zan-switch--off')).to.true;
    vm.el.click();

    setTimeout(() => {
      expect(vm.el.classList.contains('zan-switch--on')).to.true;
      done();
    });
  });
});
