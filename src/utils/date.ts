import dayjs from 'dayjs'

export function getToday(template = 'YYYY-MM-DD') {
  return dayjs(new Date()).format(template)
}

export function getTodayWeek() {
  return `星期${'日一二三四五六'.charAt(new Date().getDay())}`
}

export function formatDate(date: Date | string, template = 'YYYY-MM-DD') {
  return dayjs(date).format(template)
}
