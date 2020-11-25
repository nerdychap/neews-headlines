const getDate = () => {
    const currentLocaleDateString = new Date().toLocaleDateString();
    const [day, month, year] = currentLocaleDateString.split('/');
    return [year, month, day].join('-');
}

export default getDate;