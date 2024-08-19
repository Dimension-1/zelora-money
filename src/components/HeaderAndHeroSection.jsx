import React from 'react';


const HeaderAndHeroSection = () => {
    return (
        <section
            className="bg-cover bg-center text-white"
            style={{ backgroundImage: `url('/Images/Navbar/Bg.png')` }} 
        >
            {/* Navbar */}
            <nav className="flex justify-between items-center p-6 bg-transparent absolute top-0 w-full">
                <div className="text-red-600 text-4xl font-bold">
                    <img src="/Images/Navbar/Logo.png" alt="Logo" className="h-18 w-18" />
                </div>
                <ul className="flex space-x-8 text-white text-lg">
                    <li><a href="#" className="hover:underline">Courses</a></li>
                    <li><a href="#" className="hover:underline">Trade Rooms</a></li>
                    <li><a href="#" className="hover:underline">Community</a></li>
                    <li><a href="#" className="hover:underline">Resources</a></li>
                    <button className="bg-blue-600 text-white py-2 px-4 rounded-full">Become a citizen</button>
                </ul>
                
            </nav>

            {/* Hero Section */}
            <div className="flex flex-col items-center justify-center h-screen text-center px-6">
                <h1 className="text-6xl font-bold">
                    Be a part of the <br />
                    <span className="text-red-600 underline decoration-red-600">top 5% of traders</span>
                </h1>
                <div className="mt-6 flex items-center space-x-4">
                    <input
                        type="email"
                        placeholder="Enter your email to receive an invite"
                        className="py-3 px-4 rounded-full text-black w-96"
                    />
                    <button className="bg-blue-600 text-white py-3 px-6 rounded-full">Become a citizen</button>
                </div>
            </div>
        </section>
    );
};

export default HeaderAndHeroSection;