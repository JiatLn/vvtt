import { expect, it } from 'vitest'
import { shortName } from '../src/utils'

it('short name fn work', () => {
  expect(shortName('床前明月光')).toBe('cqmyg')
})
