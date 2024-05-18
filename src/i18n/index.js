// taken from https://lokalise.com/blog/vue-i18n/#Installing_and_configuring_the_Vue_I18n_plugin
import { createI18n } from "vue-i18n";
import en from "./locales/en.json";
import cz from "./locales/cz.json";

const messages = {
    en: {
        nav: {
            login: "Log in",
            signup: "Sign up",
            download: "Download",
            mypasswords: "My passwords",
            home: "Home",
        },
        navexpand: {
            home: "Home",
            login: "Log in",
            signup: "Sign up",
            download: "Download",
            mypasswords: "My passwords",
            logout: "Log out",
        },
        heading: {
            header: "We go ", //done
            header1: "fastest",
            header2: "spyless",
        },
        createaccount: {
            header: "Create an account",
            text: "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Explicabo fugiat consequatur sint aperiam fuga voluptate, voluptatem voluptatum quisquam reiciendis maxime minima rem dolores saepe earum autem! Tenetur vel amet itaque.",
            button: "Create an account",
        },
        download: {
            header: "Download now",
            text: "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Explicabo fugiat consequatur sint aperiam fuga voluptate, voluptatem voluptatum quisquam reiciendis maxime minima rem dolores saepe earum autem! Tenetur vel amet itaque.",
            button1: "Download for windows",
            button2: "Download for android",
        },
        socials: {
            header: "Follow us on socials",
            text: "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Explicabo fugiat consequatur sint aperiam fuga voluptate, voluptatem voluptatum quisquam reiciendis maxime minima rem dolores saepe earum autem! Tenetur vel amet itaque.",
        },
        aboutus: {
            header: "About us",
            text: "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Explicabo fugiat consequatur sint aperiam fuga voluptate, voluptatem voluptatum quisquam reiciendis maxime minima rem dolores saepe earum autem! Tenetur vel amet itaque.",
        },
        login: {
            header1: "Log into your account!",
            header2: "Log in!",
            button1: "Log in",
            button2: "Forgot your password?",
        },
        signup: {
            header1: "Create an account!",
            header2: "Sign up!",
            button1: "Create the account",
        },
    },
    cz: {
        nav: {
            login: "Přihlásit se",
            signup: "Registrovat se",
            download: "Stáhnout",
            mypasswords: "Moje hesla",
            home: "Domů",
        },
        navexpand: {
            home: "Domů",
            login: "Přihlásit se",
            signup: "Registrovat se",
            download: "Stáhnout",
            mypasswords: "Moje hesla",
            logout: "Odhlásit se",
        },
        heading: {
            header: "Jsme ",
            header1: "nejlepší",
            header2: "nejrychlejší",
        },
        createaccount: {
            header: "Vytvořit účet",
            text: "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Explicabo fugiat consequatur sint aperiam fuga voluptate, voluptatem voluptatum quisquam reiciendis maxime minima rem dolores saepe earum autem! Tenetur vel amet itaque.",
            button: "Vytvořit účet",
        },
        download: {
            header: "Stáhnout nyní",
            text: "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Explicabo fugiat consequatur sint aperiam fuga voluptate, voluptatem voluptatum quisquam reiciendis maxime minima rem dolores saepe earum autem! Tenetur vel amet itaque.",
            button1: "Stáhnout pro windows",
            button2: "Stáhnout pro android",
        },
        socials: {
            header: "Sledujte nás na sociálních sítích",
            text: "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Explicabo fugiat consequatur sint aperiam fuga voluptate, voluptatem voluptatum quisquam reiciendis maxime minima rem dolores saepe earum autem! Tenetur vel amet itaque.",
        },
        aboutus: {
            header: "O nás",
            text: "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Explicabo fugiat consequatur sint aperiam fuga voluptate, voluptatem voluptatum quisquam reiciendis maxime minima rem dolores saepe earum autem! Tenetur vel amet itaque.",
        },
        login: {
            header1: "Přihlaste se do svého účtu!",
            header2: "Přihlaste se!",
            button1: "Přihlásit se",
            button2: "Zapomněli jste heslo?",
        },
        signup: {
            header1: "Vytvořte si účet!",
            header2: "Registrujte se!",
            button1: "Zaregistrovat se",
        },
    }
}

const Trans = {
    get supportedLocales() {
        return import.meta.env.VITE_SUPPORTED_LOCALES.split(",")
    }
}

export default createI18n({
    locale: import.meta.env.VITE_DEFAULT_LOCALE,
    fallbackLocale: import.meta.env.VITE_FALLBACK_LOCALE,
    legacy: false,
    globalInjection: true,
    messages: {
        en,
        cz
    },
    supportedLocales: Trans.supportedLocales,
})
