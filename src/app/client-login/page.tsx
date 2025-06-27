"use client"

// pages/login.jsx
import Image from 'next/image';
import Link from 'next/link';
import Cname from '../../../public/degzzo-logo-web.png';

export default function LoginPage() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-blue-100 to-indigo-200">
      
      <div className="bg-white   shadow-2xl mx-5 rounded-lg p-10 w-full max-w-md 2xl:max-w-3xl ">
        <Link href="/" passHref>
          <Image src={Cname} loading="lazy" priority={false} alt="Company Logo" className="xl:ml-10 py-3 w-70 " />
        </Link>
        <h1 className="text-3xl font-bold mb-6 text-center text-indigo-700">
          Client Portal
        </h1>
        <form className="space-y-5">
          <div>
            <label htmlFor="email" className="block text-sm text-gray-600">
              Email
            </label>
            <input
              type="email"
              id="email"
              placeholder="you@example.com"
              className="mt-1 w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-400"
            />
          </div>
          <div>
            <label htmlFor="password" className="block text-sm text-gray-600">
              Password
            </label>
            <input
              type="password"
              id="password"
              placeholder="••••••••"
              className="mt-1 w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-400"
            />
          </div>
          <button
            type="submit"
            className="w-full bg-indigo-600 text-white py-2 rounded-md hover:bg-indigo-700 transition duration-300"
          >
            Log In
          </button>
        </form>
      </div>
    </div>
  );
}