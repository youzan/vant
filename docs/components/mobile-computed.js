import MobilePopup from 'components/mobile-popup.vue';

export default {
  components: {
    MobilePopup
  },

  computed: {
    mobileUrl() {
      return  location.pathname + 'examples.html' + location.hash;
    }
  },

  data() {
    return {
      mobileShow: false
    };
  }
};
