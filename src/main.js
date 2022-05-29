// Dependencies
import { createApp } from "vue";
import { router } from "./router/InstanceRouter";
import "material-icons/iconfont/material-icons.css";

// Views
import App from "./App.vue";

createApp(App).use(router).mount("#app");
