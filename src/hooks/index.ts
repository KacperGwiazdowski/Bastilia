export const useAuthenticated = () => {
    const auth = localStorage.getItem("authenticated")
    return auth === "true"
}