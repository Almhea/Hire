import { useState } from "react";
import { useNavigate } from "react-router-dom";

export default function CreateCompany() {
  const navigate = useNavigate();

  const [form, setForm] = useState({
    companyName: "",
    email: "",
    password: "",
    confirmPassword: "",
    agreed: false,
  });

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setForm((prev) => ({
      ...prev,
      [name]: type === "checkbox" ? checked : value,
    }));
  };

  const handleSubmit = () => {
    if (!form.companyName || !form.email || !form.password || !form.confirmPassword) {
      alert("Please fill in all fields.");
      return;
    }
    if (form.password !== form.confirmPassword) {
      alert("Passwords do not match.");
      return;
    }
    if (!form.agreed) {
      alert("You must agree to the Data Policies.");
      return;
    }
    // TODO: connect to Django API
    console.log("Create company:", form);
    navigate("/company-documents");
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-[#0d1b3e] relative overflow-hidden">

      {/* Background glow */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-1/2 left-1/4 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[350px] bg-blue-600 opacity-10 rounded-full blur-3xl" />
        <div className="absolute top-1/2 right-1/4 translate-x-1/2 -translate-y-1/2 w-[400px] h-[300px] bg-blue-400 opacity-8 rounded-full blur-3xl" />
      </div>

      {/* Card */}
      <div
        className="relative z-10 bg-white rounded-2xl px-8 pt-7 pb-8 w-full max-w-md mx-4"
        style={{
          boxShadow: "0 8px 48px rgba(0,0,0,0.45), 0 2px 8px rgba(0,0,0,0.3)",
          animation: "fadeUp 0.55s cubic-bezier(0.22,1,0.36,1) both",
        }}
      >
        {/* Header */}
        <div className="flex items-center gap-3 mb-6">
          <button
            onClick={() => navigate("/")}
            className="w-8 h-8 flex items-center justify-center rounded-full border border-slate-300 text-slate-500 hover:bg-slate-100 transition"
          >
            ←
          </button>
          <h2
            className="font-semibold"
            style={{ color: "#000000" }}
          >
            Create a company
          </h2>
        </div>

        {/* Form Fields */}
        <div className="flex flex-col gap-4">

          {/* Company Name */}
          <div>
            <label className="text-xs font-medium text-slate-600 mb-1 block text-left">
              Company Name:
            </label>
            <input
              type="text"
              name="companyName"
              value={form.companyName}
              onChange={handleChange}
              placeholder="Tech Stack"
              className="w-full border border-slate-300 rounded-lg px-3 py-2 text-sm text-slate-700 focus:outline-none focus:ring-2 focus:ring-[#1a4ccc] focus:border-transparent transition"
            />
          </div>

          {/* Company Owner's Email */}
          <div>
            <label className="text-xs font-medium text-slate-600 mb-1 block text-left">
              Company Owners Email:
            </label>
            <input
              type="email"
              name="email"
              value={form.email}
              onChange={handleChange}
              placeholder="TechStack@gmail.com"
              className="w-full border border-slate-300 rounded-lg px-3 py-2 text-sm text-slate-700 focus:outline-none focus:ring-2 focus:ring-[#1a4ccc] focus:border-transparent transition"
            />
          </div>

          {/* Password */}
          <div>
            <label className="text-xs font-medium text-slate-600 mb-1 block text-left">
              Owners Password:
            </label>
            <input
              type="password"
              name="password"
              value={form.password}
              onChange={handleChange}
              placeholder="••••••••••"
              className="w-full border border-slate-300 rounded-lg px-3 py-2 text-sm text-slate-700 focus:outline-none focus:ring-2 focus:ring-[#1a4ccc] focus:border-transparent transition"
            />
          </div>

          {/* Confirm Password */}
          <div>
            <label className="text-xs font-medium text-slate-600 mb-1 block text-left">
              Re-Enter Owners Password:
            </label>
            <input
              type="password"
              name="confirmPassword"
              value={form.confirmPassword}
              onChange={handleChange}
              placeholder="••••••••••"
              className="w-full border border-slate-300 rounded-lg px-3 py-2 text-sm text-slate-700 focus:outline-none focus:ring-2 focus:ring-[#1a4ccc] focus:border-transparent transition"
            />
          </div>

        </div>

        {/* Already have a company */}
        <p className="text-center text-xs text-slate-400 mt-4">
          Already have a company?{" "}
          <span
            onClick={() => navigate("/login-company")}
            className="text-[#1a4ccc] font-semibold cursor-pointer hover:underline"
          >
            Click Here
          </span>
        </p>

        {/* Checkbox row */}
        <div className="flex items-center gap-2 mt-3">
          <input
            type="checkbox"
            name="agreed"
            id="agreed"
            checked={form.agreed}
            onChange={handleChange}
            className="w-3.5 h-3.5 accent-[#1a4ccc] cursor-pointer flex-shrink-0"
          />
          <p className="text-xs text-slate-500 m-0">
            By signing up you agree to our{" "}
            <button
              type="button"
              onClick={() => navigate("/data-privacy")}
              className="text-[#1a4ccc] font-semibold hover:underline cursor-pointer bg-transparent border-none p-0 text-xs"
            >
              Data Policies
            </button>
          </p>
        </div>

        {/* Next Button */}
        <button
          onClick={handleSubmit}
          className="mt-5 w-full bg-[#1a4ccc] hover:bg-[#1440b0] text-white text-sm font-semibold py-2.5 rounded-lg transition-all duration-200 hover:-translate-y-0.5 hover:shadow-lg active:scale-95"
        >
          Next
        </button>
      </div>

      {/* Keyframe */}
      <style>{`
        @keyframes fadeUp {
          from { opacity: 0; transform: translateY(20px) scale(0.97); }
          to   { opacity: 1; transform: translateY(0) scale(1); }
        }
      `}</style>
    </div>
  );
}