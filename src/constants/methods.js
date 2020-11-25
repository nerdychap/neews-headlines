const getCurrentDate = () => {
    const currentLocaleDateString = new Date().toLocaleDateString();
    const [day, month, year] = currentLocaleDateString.split('/');
    return [year, month, day].join('-');
}

export const getPastDate = () => {
    const monthAgo = new Date().setDate(new Date().getDate() - 29);
    const [day, month, year] = new Date(monthAgo).toLocaleDateString().split('/');
    return [year, month, day].join('-');
}

export default getCurrentDate;