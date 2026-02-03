import dayjs from "dayjs";

export const formatDateTime = (date) => (
  dayjs(date).format('DD/MM/YYYY HH:mm')
)

export const formatDate = (date) => (
  dayjs(date).format('DD/MM/YYYY')
)