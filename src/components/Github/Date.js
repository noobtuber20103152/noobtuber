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
const d1 = new Date('2022-05-28');
const d2 = new Date(`${today}`)
let dates = getDatesInRange(d1, d2);
export default dates;