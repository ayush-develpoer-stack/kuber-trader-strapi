import Logo from "./extensions/logo.jpeg";
import Favicon from "./extensions/favicon.png";

export default {
  config: {
    head: {
      favicon: Favicon,
      title: "Kuber Trader Admin",
    },

    auth: {
      logo: Logo,
    },

    menu: {
      logo: Logo,
    },

    translations: {
      en: {
        "Auth.form.welcome.title": "Welcome to Kuber Trader",
        "Auth.form.welcome.subtitle": "Log in to your admin panel",
      },
    },

    tutorials: false,
    notifications: {
      releases: false,
    },
  },

  bootstrap() {},
};