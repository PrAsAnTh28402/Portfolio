import { useEffect } from "react";
import {
  ExternalLink,
  CheckCircle,
  Calendar,
  Users,
  CreditCard,
  BarChart,
} from "lucide-react";
import "../Styles/BookNGo.css";

export default function BookNGo() {
  // Scroll to top when this page loads
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="pt-24 pb-16 px-6 bg-gray-50 min-h-screen">
      {/* Project Header */}
      <div className="text-center mb-16">
        <img
          src="/BookNGo_Logo.png"
          alt="BookNGo Logo"
          className="mx-auto h-16 w-auto mb-6 drop-shadow-md hover:scale-105 hover:rotate-1 transition-transform duration-300"
        />
        <h1 className="text-4xl font-bold text-gray-900 mb-4">
          BookNGo – Event Booking Platform
        </h1>
        <p className="text-lg text-gray-600 max-w-3xl mx-auto">
          A full-stack platform with Admin & User dashboards for seamless event
          booking, lifecycle management, and real-time updates.
        </p>

        {/* Quick Links */}
        <div className="flex justify-center gap-4 mt-8 flex-wrap">
          <a
            href="https://bookngofrontend.vercel.app/"
            target="_blank"
            rel="noreferrer"
            className="flex items-center gap-2 bg-gradient-to-r from-blue-500 to-blue-700 text-white px-6 py-3 rounded-xl shadow-lg hover:shadow-xl transition-transform hover:-translate-y-1"
          >
            Live Demo <ExternalLink size={16} />
          </a>
          <a
            href="https://github.com/PrAsAnTh28402?tab=repositories"
            target="_blank"
            rel="noreferrer"
            className="flex items-center gap-2 bg-gradient-to-r from-gray-700 to-gray-900 text-white px-6 py-3 rounded-xl shadow-lg hover:shadow-xl transition-transform hover:-translate-y-1"
          >
            GitHub <ExternalLink size={16} />
          </a>
        </div>
      </div>

      {/* Tech Stack */}
      <section className="mb-20">
        <h2 className="text-3xl font-semibold text-gray-800 mb-10 text-center underline decoration-blue-600">
          Tech Stack
        </h2>
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-6 gap-8 justify-items-center">
          {[
            {
              name: "React",
              logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg",
            },
            {
              name: "Node.js",
              logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg",
            },
            {
              name: "Express.js",
              logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/express/express-original.svg",
            },
            {
              name: "PostgreSQL",
              logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/postgresql/postgresql-original.svg",
            },
            {
              name: "Vercel",
              logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/vercel/vercel-original.svg",
            },
            {
              name: "GitHub",
              logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/github/github-original.svg",
            },
          ].map((tech, i) => (
            <div
              key={i}
              className="flex flex-col items-center transform transition duration-300 ease-in-out hover:scale-110 hover:shadow-xl hover:border-2 hover:border-blue-500 rounded-xl p-5 bg-white"
              title={tech.name}
            >
              <div className="w-20 h-20 flex items-center justify-center bg-gray-50 rounded-xl shadow-md p-3 mb-3">
                <img
                  src={tech.logo}
                  alt={tech.name}
                  className="w-12 h-12 object-contain"
                />
              </div>
              <span className="text-sm font-medium text-gray-700">
                {tech.name}
              </span>
            </div>
          ))}
        </div>
      </section>

      {/* Features */}
      <section className="mb-20">
        <h2 className="text-3xl font-semibold text-gray-800 mb-10 text-center underline decoration-blue-600">
          Features
        </h2>
        <div className="grid md:grid-cols-2 gap-8">
          {/* Admin Features */}
          <div className="bg-white rounded-2xl shadow-lg p-6 hover:shadow-xl transition">
            <h3 className="text-xl font-semibold text-blue-700 mb-4 flex items-center gap-2">
              <Users className="w-5 h-5" /> Admin Features
            </h3>
            <ul className="space-y-3 text-gray-700">
              <li className="flex items-start gap-2">
                <CheckCircle className="text-blue-600 w-5 h-5 mt-1" /> Create,
                update, and delete events.
              </li>
              <li className="flex items-start gap-2">
                <CheckCircle className="text-blue-600 w-5 h-5 mt-1" /> View user
                bookings in real time.
              </li>
              <li className="flex items-start gap-2">
                <CheckCircle className="text-blue-600 w-5 h-5 mt-1" /> Manage
                available seats and capacity.
              </li>
              <li className="flex items-start gap-2">
                <CheckCircle className="text-blue-600 w-5 h-5 mt-1" /> Dashboard
                with event status and statistics.
              </li>
            </ul>
          </div>

          {/* User Features */}
          <div className="bg-white rounded-2xl shadow-lg p-6 hover:shadow-xl transition">
            <h3 className="text-xl font-semibold text-green-700 mb-4 flex items-center gap-2">
              <Calendar className="w-5 h-5" /> User Features
            </h3>
            <ul className="space-y-3 text-gray-700">
              <li className="flex items-start gap-2">
                <CheckCircle className="text-green-600 w-5 h-5 mt-1" /> View and
                explore events in card format.
              </li>
              <li className="flex items-start gap-2">
                <CheckCircle className="text-green-600 w-5 h-5 mt-1" /> Book
                events with a simple form.
              </li>
              <li className="flex items-start gap-2">
                <CheckCircle className="text-green-600 w-5 h-5 mt-1" /> Check
                previous bookings anytime.
              </li>
              <li className="flex items-start gap-2">
                <CheckCircle className="text-green-600 w-5 h-5 mt-1" /> Receive
                success confirmation for bookings.
              </li>
            </ul>
          </div>
        </div>
      </section>

      {/* Architecture & Documentation Section */}
      <section id="architecture" className="mb-20">
        <h2 className="text-3xl font-semibold text-gray-800 mb-10 text-center underline decoration-blue-600">
          Architecture & Documentation
        </h2>
        <p className="text-gray-600 text-center mb-8">
          Explore the complete project design and documentation with visuals.
        </p>
        <div className="grid md:grid-cols-3 gap-8">
          {[
            { title: "Class Diagram", src: "/public/Signup_Class.png" },
            { title: "Sequence Diagram", src: "/public/Signup_Sequence.png" },
            { title: "Pseudocode Flow", src: "/public/Pseudo.png" },
          ].map((item, i) => (
            <div
              key={i}
              className="bg-white rounded-xl shadow-md p-4 hover:shadow-xl transition"
            >
              <h3 className="text-lg font-medium text-gray-800 mb-4">
                {item.title}
              </h3>
              <img
                src={item.src}
                alt={item.title}
                className="w-full h-56 object-contain rounded-lg hover:scale-105 transition-transform"
              />
            </div>
          ))}
        </div>
      </section>

      {/* Screenshots */}
      <section>
        <h2 className="text-3xl font-semibold text-gray-800 mb-10 text-center underline decoration-blue-600">
          Screenshots
        </h2>

        {/* Authentication Pages */}
        <h3 className="text-xl font-semibold text-purple-700 mb-4">
          Authentication Pages
        </h3>
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
          <div className="relative group bg-white shadow rounded-lg overflow-hidden">
            <img
              src="/public/login.png"
              alt="Login Page"
              className="w-full h-56 object-cover"
              loading="lazy"
            />
            <div className="absolute inset-0 bg-black bg-opacity-30 opacity-0 group-hover:opacity-100 transition flex items-center justify-center">
              <span className="text-white text-lg font-semibold">
                Login Page
              </span>
            </div>
          </div>
          <div className="relative group bg-white shadow rounded-lg overflow-hidden">
            <img
              src="/public/Signup.png"
              alt="Signup Page"
              className="w-full h-56 object-cover"
              loading="lazy"
            />
            <div className="absolute inset-0 bg-black bg-opacity-30 opacity-0 group-hover:opacity-100 transition flex items-center justify-center">
              <span className="text-white text-lg font-semibold">
                Signup Page
              </span>
            </div>
          </div>
        </div>

        {/* Admin Pages */}
        <h3 className="text-xl font-semibold text-blue-700 mb-4">
          Admin Pages
        </h3>
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
          <div className="relative group bg-white shadow rounded-lg overflow-hidden">
            <img
              src="/public/Admin_Home.png"
              alt="Admin Home Page"
              className="w-full h-56 object-cover"
              loading="lazy"
            />
            <div className="absolute inset-0 bg-black bg-opacity-30 opacity-0 group-hover:opacity-100 transition flex items-center justify-center">
              <span className="text-white text-lg font-semibold">
                Admin Home Page
              </span>
            </div>
          </div>
          <div className="relative group bg-white shadow rounded-lg overflow-hidden">
            <img
              src="/public/New_Event.png"
              alt="New Event Form Page"
              className="w-full h-56 object-cover"
              loading="lazy"
            />
            <div className="absolute inset-0 bg-black bg-opacity-30 opacity-0 group-hover:opacity-100 transition flex items-center justify-center">
              <span className="text-white text-lg font-semibold">
                New Event Form Page
              </span>
            </div>
          </div>
          <div className="relative group bg-white shadow rounded-lg overflow-hidden">
            <img
              src="/public/Admin_Status.png"
              alt="All Bookings Page"
              className="w-full h-56 object-cover"
              loading="lazy"
            />
            <div className="absolute inset-0 bg-black bg-opacity-30 opacity-0 group-hover:opacity-100 transition flex items-center justify-center">
              <span className="text-white text-lg font-semibold">
                All Bookings Page
              </span>
            </div>
          </div>
        </div>

        {/* User Pages */}
        <h3 className="text-xl font-semibold text-green-700 mb-4">
          User Pages
        </h3>
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
          <div className="relative group bg-white shadow rounded-lg overflow-hidden">
            <img
              src="/public/User_home.png"
              alt="User Home Page"
              className="w-full h-56 object-cover"
              loading="lazy"
            />
            <div className="absolute inset-0 bg-black bg-opacity-30 opacity-0 group-hover:opacity-100 transition flex items-center justify-center">
              <span className="text-white text-lg font-semibold">
                User Home Page
              </span>
            </div>
          </div>
          <div className="relative group bg-white shadow rounded-lg overflow-hidden">
            <img
              src="/public/Prev_booking.png"
              alt="My Previous Booking Page"
              className="w-full h-56 object-cover"
              loading="lazy"
            />
            <div className="absolute inset-0 bg-black bg-opacity-30 opacity-0 group-hover:opacity-100 transition flex items-center justify-center">
              <span className="text-white text-lg font-semibold">
                My Previous Booking Page
              </span>
            </div>
          </div>

           <div className="relative group bg-white shadow rounded-lg overflow-hidden">
            <img
              src="/public/Book_event.png"
              alt="Success Page"
              className="w-full h-56 object-cover"
              loading="lazy"
            />
            <div className="absolute inset-0 bg-black bg-opacity-30 opacity-0 group-hover:opacity-100 transition flex items-center justify-center">
              <span className="text-white text-lg font-semibold">
                User Event Booking Form
              </span>
            </div>
          </div>



          <div className="relative group bg-white shadow rounded-lg overflow-hidden">
            <img
              src="/public/Success.png"
              alt="Success Page"
              className="w-full h-56 object-cover"
              loading="lazy"
            />
            <div className="absolute inset-0 bg-black bg-opacity-30 opacity-0 group-hover:opacity-100 transition flex items-center justify-center">
              <span className="text-white text-lg font-semibold">
                Success Page
              </span>
            </div>
          </div>

          
        </div>
      </section>

      {/* Key Takeaways / Learnings */}
      <section className="mb-20 bg-gray-50 py-12 px-6 rounded-3xl">
        <h2 className="text-3xl font-semibold text-gray-800 mb-8 text-center underline decoration-blue-600">
          Key Takeaways & Learnings
        </h2>
        <ul className="space-y-4 max-w-3xl mx-auto text-gray-700 list-disc list-inside">
          <li>
            Built a full-stack platform using React, Node.js, Express, and
            PostgreSQL.
          </li>
          <li>
            Developed interactive Admin & User dashboards with real-time
            updates.
          </li>
          <li>
            Enhanced UI/UX using responsive design and hover effects for better
            user engagement.
          </li>
          <li>
            Learned to integrate cloud database (Neon DB) for scalable
            deployments.
          </li>
          <li>
            Implemented feature-rich functionality including booking management
            and success confirmation.
          </li>
        </ul>
      </section>

      {/* Future Enhancements */}
      <section className="mb-20 bg-gradient-to-r from-purple-50 to-blue-50 py-12 px-6 rounded-3xl">
        <h2 className="text-3xl font-semibold text-gray-800 mb-8 text-center underline decoration-purple-600">
          Future Enhancements
        </h2>
        <ul className="space-y-4 max-w-3xl mx-auto text-gray-700">
          <li className="flex items-center gap-3">
            <CreditCard className="text-purple-600 w-5 h-5" /> Payment gateway
            integration for online ticketing.
          </li>
          <li className="flex items-center gap-3">
            <ExternalLink className="text-purple-600 w-5 h-5" /> Downloadable
            e-tickets with QR codes.
          </li>
          <li className="flex items-center gap-3">
            <BarChart className="text-purple-600 w-5 h-5" /> Analytics dashboard
            for admins.
          </li>
          <li className="flex items-center gap-3">
            <Users className="text-purple-600 w-5 h-5" /> AI-based event
            recommendations for users.
          </li>
        </ul>
      </section>
    </div>
  );
}
