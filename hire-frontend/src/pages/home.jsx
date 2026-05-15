import { useNavigate } from "react-router-dom";

export default function Home() {
  const navigate = useNavigate();

  const actions = [
    {
      label: "Create Company",
      route: "/create-company",
      variant: "blue",
    },
    {
      label: "Login as Owner",
      route: "/login-owner",
      variant: "dark",
    },
    {
      label: "Login to Company",
      route: "/login-company",
      variant: "blue",
    },
    {
      label: "Login as Admin",
      route: "/login-admin",
      variant: "dark",
    },
  ];

  return (
    <div className="min-h-screen flex items-center justify-center bg-[#0d1b3e] relative overflow-hidden">

      {/* Background glow effects */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-1/2 left-1/4 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[350px] bg-blue-600 opacity-10 rounded-full blur-3xl" />
        <div className="absolute top-1/2 right-1/4 translate-x-1/2 -translate-y-1/2 w-[400px] h-[300px] bg-blue-400 opacity-8 rounded-full blur-3xl" />
      </div>

      {/* Card */}
      <div
        className="
          relative z-10 bg-white rounded-2xl
          px-9 pt-10 pb-8
          w-full max-w-md mx-4
          shadow-2xl
          animate-[fadeUp_0.55s_cubic-bezier(0.22,1,0.36,1)_both]
        "
        style={{
          boxShadow: "0 8px 48px rgba(0,0,0,0.45), 0 2px 8px rgba(0,0,0,0.3)",
          animation: "fadeUp 0.55s cubic-bezier(0.22,1,0.36,1) both",
        }}
      >
        {/* Logo */}
        <div className="text-center mb-1">
          <h1
            className="text-[2.2rem] font-extrabold tracking-tight leading-none"
            style={{ fontFamily: "'Syne', sans-serif" }}
          >
            <span className="text-black">H</span><span className="text-[#1a4ccc]">!</span><span className="text-black">RE</span>
          </h1>
          <p className="text-sm text-slate-400 mt-1.5 font-normal">
            Choose your form of action
          </p>
        </div>

        {/* Divider */}
        <div className="border-t border-slate-100 my-6" />

        {/* Action Buttons Grid */}
        <div className="grid grid-cols-2 gap-3">
          {actions.map((action, i) => (
            <button
              key={action.route}
              onClick={() => navigate(action.route)}
              style={{
                animationDelay: `${0.15 + i * 0.08}s`,
                animation: "fadeUp 0.45s cubic-bezier(0.22,1,0.36,1) both",
              }}
              className={`
                py-4 px-3 rounded-xl text-sm font-semibold
                transition-all duration-200
                hover:-translate-y-0.5 hover:shadow-lg
                active:scale-95 active:translate-y-0
                ${
                  action.variant === "blue"
                    ? "bg-[#1a4ccc] text-white hover:bg-[#1440b0] shadow-[0_2px_12px_rgba(26,76,204,0.35)]"
                    : "bg-[#1e2d52] text-white hover:bg-[#16233f] shadow-[0_2px_12px_rgba(0,0,0,0.25)]"
                }
              `}
            >
              {action.label}
            </button>
          ))}
        </div>


      </div>

      {/* Keyframe styles */}
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Syne:wght@800&display=swap');

        @keyframes fadeUp {
          from { opacity: 0; transform: translateY(20px) scale(0.97); }
          to   { opacity: 1; transform: translateY(0) scale(1); }
        }
      `}</style>
    </div>
  );
}