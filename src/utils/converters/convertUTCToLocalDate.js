const convertUTFToLocalDate = (date) => {
    const days = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'];
    const d = new Date(date);
    const dayName = days[d.getDay()];
    console.log("🚀 ~ file: convertUTCToLocalDate.js ~ line 5 ~ convertUTFToLocalDate ~ dayName", dayName);
    return dayName;
};
export default convertUTFToLocalDate;