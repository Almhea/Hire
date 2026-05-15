import { useNavigate } from "react-router-dom";

export default function DataPrivacy() {
  const navigate = useNavigate();

  return (
    <div className="h-screen flex items-center justify-center bg-[#0d1b3e] relative overflow-hidden px-4">
      {/* Background glow */}
      <div className="absolute top-[-100px] left-[-100px] w-[400px] h-[400px] bg-blue-700 opacity-20 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-[-100px] right-[-100px] w-[400px] h-[400px] bg-blue-500 opacity-10 rounded-full blur-3xl pointer-events-none" />

      {/* Card - fixed height, internal scroll only */}
      <div className="relative z-10 bg-white rounded-2xl shadow-2xl w-full max-w-2xl flex flex-col" style={{ height: "85vh" }}>

        {/* Header - sticky, does not scroll */}
        <div className="relative flex items-center justify-center px-6 pt-4 pb-3 border-b border-slate-100 flex-shrink-0">
          <button
            onClick={() => navigate(-1)}
            className="absolute left-6 w-7 h-7 flex-shrink-0 flex items-center justify-center rounded-full border border-slate-400 hover:bg-slate-100 transition text-slate-600"
            style={{ fontSize: "11px" }}
          >
            ←
          </button>
          <div className="border border-black rounded-full px-3 py-0.5">
            <span className="font-semibold text-black" style={{ fontSize: "22px" }}>Data Privacy Notice</span>
          </div>
        </div>

        {/* Scrollable content area */}
        <div className="flex-1 overflow-y-auto px-8 py-4 text-xs text-slate-700 leading-relaxed space-y-4 text-left">
          <p>
            At H!RE, we are committed to protecting your privacy. This Data Privacy Notice explains
            how we collect, use, and secure your personal information when you use our AI-powered
            platform to manage recruitment, evaluate candidates, and apply for jobs. By creating a
            company account, uploading a resume, or using our services, you agree to the practices
            described in this notice.
          </p>

          <div>
            <p className="font-bold text-black">1. Data We Collect</p>
            <p className="mt-1">
              To facilitate AI-driven job matching and evaluation, we collect and process the
              following personal data based on your user type:
            </p>
            <p className="font-semibold mt-2">For All Users:</p>
            <ul className="list-disc ml-6 mt-1 space-y-1">
              <li><span className="font-semibold">Account Credentials:</span> Full Name, Email Address, Password.</li>
            </ul>
            <p className="font-semibold mt-2">For Job Applicants:</p>
            <ul className="list-disc ml-6 mt-1 space-y-1">
              <li><span className="font-semibold">Professional Information:</span> Uploaded Resume/CV, Job Position applying for (e.g., Software Tester, Web Developer).</li>
              <li><span className="font-semibold">AI Evaluation Data:</span> Your generated "H!RE Score" (e.g., 92%, 30%), AI-generated analysis including Pros, Cons, and an AI Summary of your application.</li>
              <li><span className="font-semibold">Communication Data:</span> Messages exchanged with recruiters, interview schedules, and application status updates.</li>
            </ul>
            <p className="font-semibold mt-2">For Company / HR Accounts:</p>
            <ul className="list-disc ml-6 mt-1 space-y-1">
              <li><span className="font-semibold">Company Details:</span> Company Name, Company Email, Password.</li>
              <li><span className="font-semibold">Job Postings:</span> Job titles, descriptions, requirements, and hiring preferences.</li>
              <li><span className="font-semibold">Recruitment Activity:</span> Candidate evaluations reviewed, interview schedules, and hiring decisions.</li>
            </ul>
          </div>

          <div>
            <p className="font-bold text-black">2. How We Use Your Data</p>
            <ul className="list-disc ml-6 mt-1 space-y-1">
              <li>Match job applicants with relevant job postings using AI analysis.</li>
              <li>Generate H!RE Scores and AI-powered applicant evaluations.</li>
              <li>Facilitate communication between applicants and recruiters.</li>
              <li>Maintain and improve the platform's performance and security.</li>
              <li>Comply with legal obligations under applicable data protection laws.</li>
            </ul>
          </div>

          <div>
            <p className="font-bold text-black">3. Data Sharing</p>
            <p className="mt-1">We do not sell your personal data. We may share data with:</p>
            <ul className="list-disc ml-6 mt-1 space-y-1">
              <li><span className="font-semibold">AI Service Providers:</span> To process resumes and generate evaluations.</li>
              <li><span className="font-semibold">Authorized Company HR Staff:</span> Applicant data is visible to the company you applied to.</li>
              <li><span className="font-semibold">Legal Authorities:</span> If required by law or to protect platform integrity.</li>
            </ul>
          </div>

          <div>
            <p className="font-bold text-black">4. Data Retention</p>
            <p className="mt-1">
              Your data is retained for as long as your account is active or as needed to provide
              services. You may request deletion of your account and associated data at any time by
              contacting our support team.
            </p>
          </div>

          <div>
            <p className="font-bold text-black">5. Your Rights</p>
            <ul className="list-disc ml-6 mt-1 space-y-1">
              <li>Access the personal data we hold about you.</li>
              <li>Request correction of inaccurate data.</li>
              <li>Request deletion of your data.</li>
              <li>Withdraw consent at any time.</li>
            </ul>
          </div>

          <div>
            <p className="font-bold text-black">6. Security</p>
            <p className="mt-1">
              We implement industry-standard security measures including encrypted storage,
              secure connections (HTTPS), and access controls to protect your data.
            </p>
          </div>

          <div>
            <p className="font-bold text-black">7. Contact Us</p>
            <p className="mt-1">
              For any privacy concerns or data requests, please contact us at:{" "}
              <span className="text-[#1a4ccc] font-semibold">support@hire-platform.com</span>
            </p>
          </div>
        </div>

        {/* Footer button - sticky, does not scroll */}
        <div className="px-8 py-4 border-t border-slate-100 flex-shrink-0">
          <button
            onClick={() => navigate(-1)}
            className="w-full py-3 bg-[#1a4ccc] hover:bg-[#1540b0] text-white font-semibold rounded-xl transition"
          >
            I Understand
          </button>
        </div>
      </div>
    </div>
  );
}