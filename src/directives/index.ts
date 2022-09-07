import type { App } from 'vue'
import { setupFocusDirective } from './focus'

export function setupGlobDirectives(app: App) {
  setupFocusDirective(app)
}
