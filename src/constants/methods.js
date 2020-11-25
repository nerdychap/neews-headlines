const getDate = () => {
    const dateString = new Date().toUTCString();
    const day = dateString.slice(5, 7);
    const year = dateString.slice(12, 16)
    const month = new Date().getMonth() + 1;

    return [year, month, day].join('-');
}

export default getDate;