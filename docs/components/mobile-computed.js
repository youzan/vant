import MobilePopup from 'components/mobile-popup.vue';

export default {
  components: {
    MobilePopup
  },

  computed: {
    mobileUrl() {
      return '/examples.html#' + location.pathname.slice(4);
    }
  },

  data() {
    return {
      mobileShow: false
    };
  }
};
