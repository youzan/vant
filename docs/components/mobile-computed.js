import MobilePopup from 'components/mobile-popup.vue';

export default {
  components: {
    MobilePopup
  },

  computed: {
    mobileUrl() {
      if (process.env.NODE_ENV === 'production') {
        return '/vue/examples#' + location.pathname.slice(4);
      } else {
        return '/examples.html#' + location.pathname.slice(4);
      }
    }
  },

  data() {
    return {
      mobileShow: false
    };
  }
};
