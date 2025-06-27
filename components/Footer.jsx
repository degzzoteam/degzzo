import Link from "next/link";

export default function Footer() {
  return (
    <footer className="bg-blue-300 text-black w-full px-6 sm:px-10 xl:px-30 pb-6">
      {/* Top Call to Action */}
      <div className="flex flex-col md:flex-row justify-between items-start xl:items-center gap-10 pt-10 px-4">
        <div className="w-full xl:w-1/2">
          <h2 className="text-4xl sm:text-5xl xl:text-6xl font-bold leading-tight text-center xl:text-left">
            Got An Idea?
          </h2>
          <div className="flex justify-center w-full xl:justify-start">
            <Link href="/joinus">
              <button className="border-2 xl:border-4 border-[#ffffff] mt-6 px-20 xl:px-20 py-2 rounded-4xl bg-blue-300 hover:bg-blue-400 transition">
               GET IN TOUCH
              </button>
            </Link>
          </div>
        </div>

          <div className="w-full xl:w-1/2 text-lg xl:text-xl font-medium justify-center ">
            <div className="flex flex-col xl:flex-row sm:flex-row ">
                  {/** Contact Info */}
                  <div className="flex flex-col xl:flex-row gap-2 xl:gap-8 ">
                    <div>
                      <p className="font-bold">Email:</p>
                      <p>degzzoteam@gmail.com</p>
                    </div>
                    <div>
                      <p className="font-bold w-40">Phone:</p>
                      <p>+91 9385750767</p>
                    </div>
                    <div>
                      <div className="font-bold">Address:</div>
                      <p className="mt-1">Salem,India</p>
                    </div>
                  </div>
            </div>
          </div>
        </div>
        

      {/* Brand Title */}
      <div className="flex text-center mb-2">
        <h1 className="text-[15vw] w-full font-bold ">DEGZZO<a className="text-xs xl:text-sm">The Design Partner</a></h1>
      </div>

      {/* Footer Links */}
      <div className="flex flex-col sm:flex-row sm:justify-between gap-6 border-t border-black pt-2">
        {/* Social Links */}
        <div className="flex flex-wrap justify-center sm:justify-start gap-4 text-sm sm:text-base font-semibold">
          <Link href="https://www.instagram.com/degzzo?igsh=a2pyM210enZ4c24y" className="hover:text-gray-600 transition">Instagram</Link>
          <Link href="https://www.linkedin.com/company/degohub/" className="hover:text-gray-600 transition">LinkedIn</Link>
          <Link href="https://x.com/Harishragul06?t=rUUE-UnI6J6OcX0E8WRPlA&s=09" className="hover:text-gray-600 transition">X</Link>
          <Link href="https://wa.me/qr/C3U7YQGSIYLUG1" className="hover:text-gray-600 transition">WhatsApp</Link>
          <Link href="/careers" className="hover:text-gray-600 transition">Careers</Link>
        </div>

        {/* Legal Links */}
        <div className="flex flex-col sm:flex-row gap-3 text-sm text-right sm:text-left">
          <Link href="/" className="hover:text-gray-600 transition">Privacy Policy</Link>
          <Link href="/" className="hover:text-gray-600 transition">© 2024–2025 Degzzo</Link>
        </div>
      </div>
    </footer>
  );
}
