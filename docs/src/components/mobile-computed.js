import MobilePopup from './mobile-popup.vue';

export default {
  components: {
    MobilePopup
  },

  computed: {
    mobileUrl() {
      return '/zanui/vue/examples' + location.pathname.slice(10);
    }
  },

  data() {
    return {
      mobileShow: false
    };
  }
};
