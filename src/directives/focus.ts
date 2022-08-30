import type { App } from 'vue'

const vFocus = {
  mounted(el: HTMLInputElement) {
    setTimeout(() => {
      el.focus()
    }, 1000)
  },
}

export function setupFocusDirective(app: App) {
  app.directive('focus', vFocus)
}
