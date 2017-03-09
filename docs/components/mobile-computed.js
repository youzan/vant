import MobilePopup from 'components/mobile-popup.vue';

export default {
  components: {
    MobilePopup
  },

  computed: {
    mobileUrl() {
      return '/examples.html' + location.hash;
    }
  },

  data() {
    return {
      mobileShow: false
    };
  }
};
