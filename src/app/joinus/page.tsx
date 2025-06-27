"use client";

import Image from "next/image";
import Link from 'next/link';
import { useState } from "react";

const forms = {
  project: {
    title: "Project Inquiry",
    placeholder: "Describe your project needs...",
  },
  jobs: {
    title: "Jobs / Careers",
    placeholder: "Why are you a good fit for this role?",
  },
  general: {
    title: "General Inquiry",
    placeholder: "How can we help you?",
  },
};

export default function ExpertContactSection() {
  const [selectedForm, setSelectedForm] = useState<"project" | "jobs" | "general">("project");
  const [sending, setSending] = useState(false);
  const [status, setStatus] = useState<"success" | "error" | null>(null);

    const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        setSending(true);

        const form = e.currentTarget;
        const formData = new FormData(form);

        const res = await fetch("/api/contact", {
          method: "POST",
          body: formData,
        });

        if (res.ok) {
          setStatus("success");
          if (form && form.reset) {
            form.reset();
          }
        } else {
          setStatus("error");
        }

        setSending(false);

        // Auto clear message after 4 seconds
        setTimeout(() => setStatus(null), 4000);
      };



  return (
    <section className="bg-[#1A1035] text-white px-6 py-20">
          <div className="">
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
          </div>
      <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-10 items-start">
        {/* Left Column – Info */}
        <div>
          <Image
            src="/images/our-team/dinesh.jpg"
            alt="Ameet Palkar"
            width={250}
            height={250}
            className="rounded-xl object-cover shadow-lg mb-6"
          />
          <h2 className="text-3xl sm:text-4xl font-bold mb-4">Talk to Our Research Expert</h2>
          <p className="text-gray-300 mb-4">Struggling with user engagement? We help turn ideas into meaningful user experiences.</p>
          <p className="text-lg font-semibold">Dinesh Kumar</p>
          <p className="text-sm text-gray-400 mb-6">Research Expert</p>

          
        </div>

        {/* Right Column – Form */}
        <div className="bg-white p-6 rounded-xl text-black shadow-lg">
          <h3 className="text-xl font-semibold mb-2">{forms[selectedForm].title}</h3>
          <div className="flex text-xs gap-3 xl:text-xl py-5 xl:py-0">
            {(["project", "jobs", "general"] as const).map((type) => (
              <button
                key={type}
                onClick={() => setSelectedForm(type)}
                className={`px-4 py-2 xl:my-5 rounded-full border ${
                  selectedForm === type
                    ? "bg-red-500 text-white "
                    : "border-gray-500 text-black hover:bg-red-500 hover:text-white"
                }`}
              >
                {type === "project" ? "Project" : type === "jobs" ? "Jobs / Careers" : "General"}
              </button>
            ))}
          </div>
          <form onSubmit={handleSubmit} className="space-y-4" encType="multipart/form-data">
            <input name="type" type="hidden" value={selectedForm} />
            <input
              name="name"
              type="text"
              placeholder="Your name"
              className="w-full border px-4 py-2 rounded"
              required
            />
            <input
              name="email"
              type="email"
              placeholder="Your email"
              className="w-full border px-4 py-2 rounded"
              required
            />
            <textarea
              name="message"
              placeholder={forms[selectedForm].placeholder}
              rows={4}
              className="w-full border px-4 py-2 rounded"
              required
            />
            {selectedForm === "jobs" && (
              <input
                name="resumeLink"
                type="url"
                placeholder="Resume or portfolio link"
                className="w-full border px-4 py-2 rounded"
                required
              />
            )}
            <button
              type="submit"
              className="bg-blue-600 text-white px-6 py-2 rounded hover:bg-blue-700"
              disabled={sending}
            >
              {sending ? "Sending..." : "Send Message"} 
            </button>
          </form>
        </div>
      </div>

      {/* Footer Info */}
      <div className="mt-12 xl:px-30 xl:text-xl text-gray-300">
        <p>
          Email:{" "}
          <a href="mailto:info.degzzo@gmail.com" className="">info.degzzo@gmail.com</a>
        </p>
        <p className="mt-1">Phone : +91 7708460702</p>
        <p className="mt-1">Address: Salem,India </p>
        {/* <button className="bg-blue-400 hover:bg-blue-500 text-white my-5 py-1 px-16 border-2  rounded-full" onClick={() => window.open("https://wa.me/7708460702?text=Hi%20Degzzo%0ACan%20you%20connect%20with%20your%20expert%20for%20Meeting", "hii Degzzo")}>
        Connect
      </button> */}
        <div className="flex  gap-4 text-sm sm:text-xl pt-2 xl:pt-5 font-semibold">
          <Link href="https://www.instagram.com/degzzo?igsh=a2pyM210enZ4c24y" className="hover:text-gray-600  transition">Instagram</Link>
          <Link href="https://www.linkedin.com/company/degohub/" className="hover:text-gray-600 transition">LinkedIn</Link>
          <Link href="https://x.com/Harishragul06?t=rUUE-UnI6J6OcX0E8WRPlA&s=09" className="hover:text-gray-600 transition">X</Link>
          <Link href="https://wa.me/qr/C3U7YQGSIYLUG1" className="hover:text-gray-600 transition">WhatsApp</Link>
          
        </div>
      
      </div>
        
      
    </section>
  );
}
