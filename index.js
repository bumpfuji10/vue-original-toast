const app = Vue.createApp({
  data() {
    return {
      isVisible: false,
      message: "ログインしました",
      style: {
        border: "1px solid red"
      }
    };
  },
  methods: {
    showToast() {
      this.isVisible = true;
      setTimeout(() => {
        this.isVisible = false;
      }, 300000);
    }
  }
});

app.component('toast', {
  props: {
    isVisible: Boolean,
    message: String,
    style: String
  },
  template: `
    <div class="toast" v-bind:class="{ show: isVisible }" v-bind:style="style">
      {{ message }}
    </div>
  `
});

app.mount('#app');
