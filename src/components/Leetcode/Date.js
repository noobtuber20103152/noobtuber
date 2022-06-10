function getDatesInRange(startDate, endDate) {
    const date = new Date(startDate.getTime());
    const dates = [];
    while (date <= endDate) {
        let datepush = date.toISOString().slice(0, 10)
        dates.push(`${datepush}`)
        date.setDate(date.getDate() + 1);
    }

    return dates;
}
let today = new Date().toISOString().slice(0, 10)
// console.log(today)
const d1 = new Date('2021-11-17');
const d2 = new Date(`${today}`)
// console.log( d1, d2);
let dates = getDatesInRange(d1, d2);
// console.log(dates.length);
export default dates;