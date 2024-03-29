export const getDate = (locale, date) => {
    return new Intl.DateTimeFormat(locale, {month: 'short'})?.format(new Date(date))
}
export const getWeekName = (date, locale) => (new Date(date)).toLocaleDateString(locale, { weekday: 'short' })
export const getDays = (month, year) => new Date(year, month, 0).getDate()

export const getDayOfWeek = (date) => new Date(date).getDay()

export const addZero = (num) => num < 10 ? '0' + num : num

export const validDate = (date) => date && !isNaN(new Date(date))
