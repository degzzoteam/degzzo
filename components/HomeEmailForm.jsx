import { useState } from "react";

export default function HomeEmailForm() {
  const [status, setStatus] = useState(null);
  const [sending, setSending] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    const form = e.target;
    const name = form.name.value;
    const email = form.email.value;
    setSending(true);

    const res = await fetch("/api/contact", {
      method: "POST",
      body: new URLSearchParams({
        name,
        email,
        message: "Requesting a meeting to discuss project ideas.",
        type: "general",
      }),
    });

    if (res.ok) {
      setStatus("success");
      form.reset();
    } else {
      setStatus("error");
    }

    setSending(false);
    setTimeout(() => setStatus(null), 4000);
  };

  return (
    <div className="relative">
              {status && (
                <div
                  className={`fixed top-6 right-6 px-5 py-3 rounded-lg text-white shadow-xl transform transition-all duration-500 ease-in-out z-50 ${
                    status === "success"
                      ? "bg-emerald-500 hover:bg-emerald-600"
                      : "bg-rose-500 hover:bg-rose-600"
                  }`}
                >
                  <span className="flex items-center space-x-2">
                    <span className="text-lg">
                      {status === "success" ? "✅" : "❌"}
                    </span>
                    <span className="font-medium">
                      {status === "success"
                        ? "Message sent successfully!"
                        : "Failed to send message."}
                    </span>
                  </span>
                </div>
              )}


      <div className="text-center mt-10 mb-8">
        <h1 className="text-3xl font-bold pb-5">Let&lsquo;s Make Something Great Together</h1>
        <p>Whether you’re ready to kick off a project or just want to explore ideas  we&lsquo;d love to hear from you. Drop your email below and we’ll reach out to start the conversation. No pressure—just possibilities.</p>
      </div>

      <form
        onSubmit={handleSubmit}
        className="flex flex-col sm:flex-row xl:pl-30 items-center gap-4 mb-10 max-w-7xl mx-auto"
      >
        <div className="flex flex-col xl:flex-row gap-6">
        <input
          type="name"
          name="name"
          placeholder="Enter your Name"
          required
          className="w-full px-4 py-2 border rounded text-black"
        />
        <input
          type="email"
          name="email"
          placeholder="Enter your email"
          required
          className="w-full px-4 py-2 border rounded text-black"
        />
        </div>
        <button
          type="submit"
          disabled={sending}
          className="bg-blue-600 hover:bg-blue-700 w-50  text-white  py-2 rounded"
        >
          {sending ? "Sending..." : "Get Meeting"}
        </button>
      </form>
    </div>
  );
}