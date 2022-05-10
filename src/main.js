import { createApp } from "vue";
import App from "./App.vue";
import { router } from "./router/InstanceRouter";

createApp(App).use(router).mount("#app");
