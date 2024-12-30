'use client';
import React, { useState, useEffect } from "react";
import Link from "next/link";

export default function Navbar() {
    const [currentDateTime, setCurrentDateTime] = useState("");

    useEffect(() => {
        const updateDateTime = () => {
            const now = new Date();
            const options: Intl.DateTimeFormatOptions = {
                weekday: "long",
                year: "numeric",
                month: "long",
                day: "numeric",
                hour: "2-digit",
                minute: "2-digit",
                second: "2-digit",
                hour12: false,
            };
            setCurrentDateTime(now.toLocaleString("en-US", options));
        };

        updateDateTime(); // Initialize the clock immediately
        const intervalId = setInterval(updateDateTime, 1000); // Update every second

        return () => clearInterval(intervalId); // Cleanup on component unmount
    }, []);

    return (
        <header className="text-gray-400 body-font shadow-lg sticky top-0 bg-white z-50">
            <div className="container mx-auto flex flex-wrap p-2 flex-col md:flex-row items-center">
                {/* Date and Time */}
                <div className="flex-1 text-black">
                    <span>{currentDateTime}</span>
                </div>
                {/* Navigation Links */}
                <nav className="md:ml-auto flex flex-wrap items-center text-black justify-center">
                    <Link
                        href="/"
                        className="mr-5 hover:text-red-700 transition-colors duration-300 transform hover:scale-105"
                    >
                        Home
                    </Link>
                    <Link
                        href="#about"
                        className="mr-5 hover:text-red-700 transition-colors duration-300 transform hover:scale-105"
                    >
                        About
                    </Link>
                    <Link
                        href="#blog"
                        className="mr-5 hover:text-red-700 transition-colors duration-300 transform hover:scale-105"
                    >
                        Blog
                    </Link>
                    <Link
                        href="#Contact"
                        className="mr-5 hover:text-red-700 transition-colors duration-300 transform hover:scale-105"
                    >
                        Contact
                    </Link>
                </nav>
                {/* LinkedIn Button */}
                <a
                    href="https://linkedin.com"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center bg-blue-700 border-0 py-1 px-3 focus:outline-none hover:bg-red-700 rounded text-white mt-4 md:mt-0 transition-colors duration-300"
                >
                    LinkedIn
                    <svg
                        fill="none"
                        stroke="currentColor"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        className="w-4 h-4 ml-1"
                        viewBox="0 0 24 24"
                    >
                        <path d="M5 12h14M12 5l7 7-7 7" />
                    </svg>
                </a>
            </div>
        </header>
    );
}
