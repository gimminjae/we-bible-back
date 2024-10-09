const dayjs = require("dayjs")
const dateUtil = {
  getCurrentDate: () => {
    return dayjs(new Date()).format("YYYY-MM-DD")
  },
  getDate: (value) => {
    return dayjs(value).format("YYYY-MM-DD")
  },
  getCurrentDateTime: () => {
    return dayjs(new Date()).format("YYYY-MM-DD HH:mm:ss")
  },
  getDateTime: (value) => {
    return dayjs(value).format("YYYY-MM-DD HH:mm:ss")
  },
}
module.exports = dateUtil
