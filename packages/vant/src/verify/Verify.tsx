import {
  ref,
  onMounted,
  defineComponent,
  type PropType,
  toRefs
} from 'vue';

// 创建命名空间
import { createNamespace, makeNumericProp, makeStringProp } from '../utils';
import { useTranslate } from '../../docs/site';

const [name, bem] = createNamespace('verify');
const t = useTranslate({
  'zh-CN': {
    SlideVerification: '滑动验证',
    successfulVerification: '验证成功',
  },
  'en-US': {
    SlideVerification: 'Slide for verification',
    successfulVerification: 'Validation verification',
  },
});
const extraProps = {
  type: Boolean,
  default: true,
};
export const sliderVerifyProps = {
  // 默认提示文字
  text: makeStringProp(t('SlideVerification')),
  // 滑动模块的文本颜色
  buttonColor: makeStringProp('#e8e8e8'),
  // 滑动轨道颜色
  trackColor: makeStringProp('#1989FA'),
  // 成功之后的主题色
  sucessColor: makeStringProp('#07C160'),
  // 验证成功之后的提示文字颜色
  successTextColor: makeStringProp('#F7F8FA'),
  // 验证成功之后的文字提示
  successTextContent: makeStringProp(t('successfulVerification')),
  // 最大验证次数
  maxIncorrectTimes: makeNumericProp(3),
  // 开启动画
  isAnimation: extraProps,
  // 验证成功函数
  successFunc: Function as PropType<() => void>,
  // 验证失败函数
  failFunc: Function as PropType<() => void>,
};
export default defineComponent({
  name,
  props: sliderVerifyProps,
  setup(props, { slots }) {
    const { default: defaultSlot } = slots;
    const moveDistance = ref(0);
    const failTimes = ref(1);
    const success = ref(false);
    const description = ref();
    const background = ref();
    const slider = ref();
    const parentNode = ref();
    const {
      buttonColor,
      trackColor,
      sucessColor,
      maxIncorrectTimes,
      successTextContent,
      successTextColor,
      isAnimation,
    } = toRefs(props);
    onMounted(() => {
      slider.value.style.backgroundColor = buttonColor.value;
      slider.value.style.color = '#111';
      background.value.style.backgroundColor = trackColor.value;
    });
    const slideInfo = (e: MouseEvent): void => {
      if (success.value || moveDistance.value > 0) {
        document.onmouseup = null;
        return;
      }
      slider.value.style.transition = '';
      background.value.style.transition = '';
      const downx = e.clientX; // 按下时的移动值
      // 相对客户端的偏移值
      document.onmousemove = function (e: MouseEvent) {
        const distance =
          parentNode.value.clientWidth - slider.value.clientWidth;
        const movex = e.clientX; // 滑动时的移动值
        // 获取偏移量
        moveDistance.value = movex - downx;
        // 给设置限定边界
        if (moveDistance.value >= distance) {
          moveDistance.value = distance;
          success.value = true;
        } else if (moveDistance.value <= 0) {
          moveDistance.value = 0;
        }
        // 滑动时设置样式
        slider.value.style.left = `${moveDistance.value}px`;
        background.value.style.width = `${moveDistance.value}px`;
        e.preventDefault();
        // 如果鼠标的移动距离等于滑动成功的距离
      };
      // 给鼠标设置松开按钮的状态
      document.onmouseup = function () {
        if (!success.value) {
          if (+failTimes.value > +maxIncorrectTimes.value) {
            props.failFunc && props.failFunc();
            setTimeout(() => {
              location.reload();
            }, 1000);
            return;
          }
          slider.value.style.left = 0 + 'px';
          // 鼠标滑动恢复原位
          background.value.style.width = 0 + 'px';
          // 背景回退
          if (isAnimation.value) {
            slider.value.style.transition = 'left 1s ease';
            background.value.style.transition = 'width 1s ease';
          }

          moveDistance.value = 0;
          failTimes.value++;
        } else {
          description.value.innerText = successTextContent.value;
          description.value.style.color = successTextColor.value;
          slider.value.style.color = sucessColor.value;
          if (!slots.successSlot) {
            slider.value.innerHTML = '&radic;';
          }
          background.value.style.backgroundColor = sucessColor.value;
          props.successFunc && props.successFunc();
          // 回退动画
        }
        document.onmousemove = null; // 去除鼠标移动事件
        document.onmousedown = null; // 去除鼠标按下事件
        return false;
      };
    };

    return () => (
      <>
        <div class={bem()} ref={parentNode}>
          <div class={bem('background')} ref={background}></div>
          <div class={bem('description')} ref={description}>
            {props.text}
          </div>
          <div class={bem('slider')} ref={slider} onMousedown={slideInfo}>
            {success.value
              ? slots.successSlot?.()
              : defaultSlot && defaultSlot()}
          </div>
        </div>
      </>
    );
  },
});
