import React from 'react';

const AboutSection = () => {
    return (
        <section className="py-24 bg-[#070707] text-white relative">
            <div className="flex justify-center mb-16 px-4 lg:px-0">
                <img src="/Images/About/background-image.png" alt="Background Drawing" className="w-full max-w-4xl" />
            </div>

            <div className="bg-[#1A1A1A] p-12 rounded-lg mx-4 lg:mx-8 relative">
                <img src="/Images/About/tape.png" alt="Tape" className="absolute top-[-20px] left-[-20px] w-24 h-24" />
                
                <h2 className="text-center text-xl font-semibold mb-4">ROADMAP TO SUCCESS</h2>
                <h3 className="text-center text-3xl font-bold mb-12">How Do You Achieve?</h3>
                
                <div className="flex flex-col lg:flex-row justify-between space-y-8 lg:space-y-0 lg:space-x-8 relative">
                    <div className="absolute inset-x-0 top-[50px] lg:top-[50px] h-[2px] bg-blue-500"></div>
                    
                    <div className="flex-1 p-6 rounded-lg flex flex-col justify-start relative">
                        <div className="relative z-10">
                            <img src="/Images/About/circle.png" alt="Circle" className="w-20 h-20" />
                            <img src="/Images/About/01.png" alt="01" className="absolute inset-0 w-10 h-10 m-auto" />
                        </div>
                        <div className="bg-white text-black p-6 rounded-lg mt-8 shadow-lg">
                            <h4 className="text-xl font-semibold mb-2">Online Application</h4>
                            <p className="text-gray-500 mb-4">Fill out a quick form to share your trading experience, goals, and why you want to join Fino Club.</p>
                            <p className="font-bold">60 seconds</p>
                        </div>
                    </div>
                    
                    <div className="flex-1 p-6 rounded-lg flex flex-col items-center text-center relative">
                        <div className="relative z-10">
                            <img src="/Images/About/circle.png" alt="Circle" className="w-20 h-20" />
                            <img src="/Images/About/02.png" alt="02" className="absolute inset-0 w-10 h-10 m-auto" />
                        </div>
                        <div className="bg-white text-black p-6 rounded-lg mt-8 shadow-lg">
                            <h4 className="text-xl font-semibold mb-2">Screening Session</h4>
                            <p className="text-gray-500 mb-4">A brief one-on-one call to understand your trading strategies & experience to ensure mutual alignment.</p>
                            <p className="font-bold">15 minutes</p>
                        </div>
                    </div>
                    
                    <div className="flex-1 p-6 rounded-lg flex flex-col items-center text-center relative">
                        <div className="relative z-10">
                            <img src="/Images/About/circle.png" alt="Circle" className="w-20 h-20" />
                            <img src="/Images/About/03.png" alt="03" className="absolute inset-0 w-10 h-10 m-auto" />
                        </div>
                        <div className="bg-white text-black p-6 rounded-lg mt-8 shadow-lg">
                            <h4 className="text-xl font-semibold mb-2">Invitation</h4>
                            <p className="text-gray-500 mb-4">Receive your exclusive invite to join Fino Club and access our elite trading community.</p>
                            <p className="font-bold">Within 48 hours</p>
                        </div>
                    </div>
                </div>
                
                <img src="/Images/About/hand.png" alt="Hand" className="absolute bottom-[-30px] right-[-30px] w-32 h-32" />
            </div>
        </section>
    );
};

export default AboutSection;