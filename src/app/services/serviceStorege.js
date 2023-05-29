export const saveInLocalStorage = (user) => {
    localStorage.setItem("currentUser", JSON.stringify(user));
}
export const getUserFromStorage = () => {
    let user = localStorage.getItem("currentUser");
    if (user)
        return JSON.parse(user)
    return null;
}
export const removeFromStorage = () => {
    localStorage.removeItem("currentUser");
}