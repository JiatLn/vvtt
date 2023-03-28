import { pinyin } from 'pinyin-pro'

export function shortName(name: string) {
  return pinyin(name, {
    pattern: 'initial',
    type: 'array',
  }).join('')
}
