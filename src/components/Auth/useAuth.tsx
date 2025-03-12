export function useAuth() {
    const login = (token: string) => {
        localStorage.setItem("token", token);
        window.location.href = "/tasks"; // Chuyển hướng sau khi login
    };

    return { login };
}
