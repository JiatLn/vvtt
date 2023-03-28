import { pinyin } from 'pinyin-pro'

export function shortName(name: string) {
  return pinyin(name, {
    pattern: 'initial',
    type: 'array',
  }).map(item => item[0]).join('')
}
