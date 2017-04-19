import MobilePopup from './mobile-popup.vue';

export default {
  components: {
    MobilePopup
  },

  computed: {
    mobileUrl() {
      if (process.env.NODE_ENV === 'production') {
        return '/zanui/vue/examples#' + location.pathname.slice(10);
      } else {
        return '/examples.html#' + location.pathname;
      }
    }
  },

  data() {
    return {
      mobileShow: false
    };
  }
};
