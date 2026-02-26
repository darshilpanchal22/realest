import { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

export default function Login() {
    const navigate = useNavigate();

    const [formData, setFormData] = useState({
        email: "",
        password: "",
    });

    const [error, setError] = useState("");
    const [loading, setLoading] = useState(false);

    const handleChange = (e) => {
        setFormData((prev) => ({
            ...prev,
            [e.target.name]: e.target.value,
        }));
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        setError("");

        const email = formData.email.trim();
        const password = formData.password.trim();

        if (!email || !password) {
            return setError("All fields are required");
        }

        try {
            setLoading(true);

            const res = await axios.post(
                "http://localhost:8081/api/auth/login",
                { email, password }
            );

            if (res.data.token) {
                localStorage.setItem("token", res.data.token);
                localStorage.setItem("user", JSON.stringify(res.data.user));
                navigate("/");
            } else {
                setError("Invalid server response");
            }

        } catch (err) {
            if (err.response) {
                setError(err.response.data.message || "Invalid credentials");
            } else if (err.request) {
                setError("Server not responding. Try again later.");
            } else {
                setError("Something went wrong");
            }
        } finally {
            setLoading(false);
        }
    };

    return (
        <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-indigo-100 via-white to-indigo-200 px-4">
            <div className="w-full max-w-md bg-white rounded-2xl shadow-2xl p-8 border border-gray-100">
                <h2 className="text-3xl font-bold text-center text-black mb-6">
                    Welcome Back
                </h2>

                {error && (
                    <div className="bg-red-100 text-red-600 p-3 rounded-lg mb-4 text-sm border border-red-200">
                        {error}
                    </div>
                )}

                <form onSubmit={handleSubmit} className="space-y-4">
                    <input
                        type="email"
                        name="email"
                        placeholder="Email Address"
                        value={formData.email}
                        onChange={handleChange}
                        className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-black focus:border-black transition"
                    />

                    <input
                        type="password"
                        name="password"
                        placeholder="Password"
                        value={formData.password}
                        onChange={handleChange}
                        className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-black focus:border-black transition"
                    />

                    <button
                        type="submit"
                        disabled={loading}
                        className="w-full bg-black text-white py-2.5 rounded-lg active:scale-95 transition duration-200 shadow-md disabled:opacity-70"
                    >
                        {loading ? "Logging in..." : "Login"}
                    </button>
                </form>

                <p className="text-sm text-center mt-6 text-gray-600">
                    Don't have an account?{" "}
                    <span
                        onClick={() => navigate("/signup")}
                        className="text-black font-semibold cursor-pointer hover:underline"
                    >
                        Sign Up
                    </span>
                </p>
            </div>
        </div>
    );
}