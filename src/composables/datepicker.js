import { computed, ref } from "vue";
import {getWeekName, addZero} from '@/utils/utils.js'

const date = new Date()
const year = ref(date.getFullYear())
const month = ref(date.getMonth() + 1)
const day = ref(date.getDate())

const inputLocale = ref('en')
const weekList = ref([])
const selectedDate = ref(null)

export default function useDatePicker () {
    const initWeekList = () => {
        const dates = [
            '2024-03-04',
            '2024-03-05',
            '2024-03-06',
            '2024-03-07',
            '2024-03-08',
            '2024-03-09',
            '2024-03-10'
        ]
        weekList.value = dates.map(date => getWeekName(date, inputLocale.value))
    }

    const selectDay = (day) => selectedDate.value = `${year.value}-${addZero(month.value)}-${addZero(day)}`
    const getFullDate = computed(() => {
        return `${year.value}-${addZero(month.value)}-${addZero(day.value)}`
    })

    return {
        year,
        month,
        day,
        inputLocale,
        weekList,
        getFullDate,
        selectedDate,
        initWeekList,
        selectDay
    }
}
