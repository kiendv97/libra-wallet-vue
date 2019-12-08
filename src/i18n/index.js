import Vue from 'vue'
import VueI18n from 'vue-i18n'

// Language
import english from './english'
import thai from './thai'
import vietnam from './vietnam'

Vue.use(VueI18n)

export const i18n = new VueI18n({
  locale: 'en',
  fallbackLocale: 'en',
  messages: { en: english, th: thai, vn: vietnam }
})
