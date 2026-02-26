import { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

export default function Signup() {
    const navigate = useNavigate();

    const [formData, setFormData] = useState({
        name: "",
        email: "",
        password: "",
        confirmPassword: "",
    });

    const [error, setError] = useState("");
    const [loading, setLoading] = useState(false);

    const handleChange = (e) => {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value,
        });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        setError("");

        if (
            !formData.name ||
            !formData.email ||
            !formData.password ||
            !formData.confirmPassword
        ) {
            return setError("All fields are required");
        }

        if (formData.password.length < 6) {
            return setError("Password must be at least 6 characters");
        }

        if (formData.password !== formData.confirmPassword) {
            return setError("Passwords do not match");
        }

        try {
            setLoading(true);

            await axios.post("http://localhost:8081/api/auth/signup", {
                name: formData.name,
                email: formData.email,
                password: formData.password,
            });

            navigate("/login");
        } catch (err) {
            setError(err.response?.data?.message || "Signup failed");
        } finally {
            setLoading(false);
        }
    };

    return (
        <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-indigo-100 via-white to-indigo-200 px-4">
            <div className="w-full max-w-md bg-white rounded-2xl shadow-2xl p-8 border border-gray-100">

                <h2 className="text-3xl font-bold text-center text-black mb-6">
                    Create Account
                </h2>

                {error && (
                    <div className="bg-red-100 text-red-600 p-3 rounded-lg mb-4 text-sm border border-red-200">
                        {error}
                    </div>
                )}

                <form onSubmit={handleSubmit} className="space-y-4">

                    <input
                        type="text"
                        name="name"
                        placeholder="Full Name"
                        value={formData.name}
                        onChange={handleChange}
                        className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-black focus:border-black transition"
                    />

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

                    <input
                        type="password"
                        name="confirmPassword"
                        placeholder="Confirm Password"
                        value={formData.confirmPassword}
                        onChange={handleChange}
                        className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-black focus:border-black transition"
                    />

                    <button
                        type="submit"
                        disabled={loading}
                        className="w-full bg-black text-white py-2.5 rounded-lg  active:scale-95 transition duration-200 shadow-md"
                    >
                        {loading ? "Creating Account..." : "Sign Up"}
                    </button>
                </form>

                <p className="text-sm text-center mt-6 text-gray-600">
                    Already have an account?{" "}
                    <span
                        onClick={() => navigate("/login")}
                        className="text-black font-semibold cursor-pointer hover:underline"
                    >
                        Login
                    </span>
                </p>
            </div>
        </div>
    );
}