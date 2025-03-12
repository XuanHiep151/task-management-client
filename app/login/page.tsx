"use client";
import { useState } from "react";
import { useAuth } from "@/src/components/Auth/useAuth"; // Import useAuth
import { FaUser, FaLock, FaFacebookF, FaTwitter } from "react-icons/fa";

export default function LoginPage() {
    const [phone, setPhone] = useState("");
    const [password, setPassword] = useState("");
    const [error, setError] = useState("");
    const { login } = useAuth(); // Lấy hàm login từ hook

    const handleLogin = () => {
        const mockToken = "fake-jwt-token";
        login(mockToken); // Gọi hàm login để lưu token và chuyển hướng
    };

    const validatePhone = (value: string) => {
        if (!/^0\d{9}$/.test(value)) {
            setError("Số điện thoại phải bắt đầu bằng 0 và có đúng 10 số.");
        } else {
            setError("");
        }
    };

    const isDisabled = phone.length !== 10 || password.length < 6 || error !== "";

    return (
        <div className="flex min-h-screen items-center justify-center bg-[url('/nenlogin.png')] bg-cover bg-center">
            <div className="w-full max-w-sm p-6 rounded-lg shadow-lg backdrop-blur-md"
                style={{ backgroundColor: "rgba(255, 255, 255, 0.2)" }}>

                <div className="text-center mb-6">
                    <h2 className="text-2xl font-semibold">Đăng Nhập</h2>
                </div>
                <div className="relative mb-4">
                    <span className="absolute left-3 top-2 text-black-500"><FaUser /></span>
                    <input
                        type="tel"
                        placeholder="Username"
                        className="w-full pl-10 pr-3 py-2 rounded bg-white-800 border border-gray-600 focus:outline-none focus:ring-2 focus:ring-green-400"
                        value={phone}
                        onChange={(e) => {
                            validatePhone(e.target.value);
                            setPhone(e.target.value);
                        }}
                    />
                </div>
                <div className="relative mb-4">
                    <span className="absolute left-3 top-2 text-black-500"><FaLock /></span>
                    <input
                        type="password"
                        placeholder="Password"
                        className="w-full pl-10 pr-3 py-2 rounded bg-white-800 border border-gray-600 focus:outline-none focus:ring-2 focus:ring-green-400"
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                    />
                </div>
                {error && <p className="text-red-500 text-sm mb-2">{error}</p>}
                <div className="text-sm flex justify-between mb-4">
                    <a href="#" className="text-green-400 hover:underline">Forgot Password?</a>
                    <a href="#" className="text-green-400 hover:underline">Register here</a>
                </div>
                <div className="flex justify-center">
                    <button
                        onClick={handleLogin}
                        className={`w-40 py-2 px-4 rounded text-white font-semibold ${isDisabled ? "bg-gray-600 cursor-not-allowed" : "bg-green-500 hover:bg-green-600"
                            }`}
                        disabled={isDisabled}
                    >
                        Đăng Nhập
                    </button>
                </div>
                <div className="mt-4 text-center text-sm text-gray-400">Or Login with</div>
                <div className="mt-4 flex justify-center space-x-3">
                    <button className="p-2 rounded bg-blue-600 hover:bg-blue-700"><FaFacebookF /></button>
                    <button className="p-2 rounded bg-blue-400 hover:bg-blue-500"><FaTwitter /></button>
                </div>
            </div>
        </div>
    );
}
