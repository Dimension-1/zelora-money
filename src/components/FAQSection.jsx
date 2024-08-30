import React, { useState } from "react";

const FAQSection = () => {
  const [activeTab, setActiveTab] = useState("Community Related"); // State for active tab
  const [activeIndex, setActiveIndex] = useState(null);

  const faqs = [
    {
      question:
        "What are the differences between the membership levels offered?",
      answer:
        "Our membership levels offer different benefits based on the plan. The higher tiers provide more access to resources, events, and personalized support.",
    },
    {
      question: "Can I adjust the course schedule to fit my availability?",
      answer:
        "Yes, our courses are designed to be flexible, allowing you to adjust the schedule according to your availability.",
    },
    {
      question: "What qualifications and experience do the instructors have?",
      answer:
        "Our instructors are highly qualified professionals with years of experience in the industry. They bring real-world knowledge to the courses.",
    },
    {
      question:
        "Is there an option for one-on-one coaching or personalized support?",
      answer:
        "Yes, we offer one-on-one coaching sessions and personalized support to help you achieve your goals.",
    },
  ];

  const toggleFAQ = (index) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  const handleTabClick = (tab) => {
    setActiveTab(tab);
  };

  return (
    <section className="bg-black text-white py-16 pt-4 md:px-8 px-4">
      <div className="mx-auto flex flex-col items-center md:items-center md:justify-between w-full md:max-w-4xl">
        <h2 className="text-4xl font-light text-center mb-8">FAQs</h2>
        <div
          className="flex flex-col md:flex-row items-center justify-center md:space-x-8 mb-8"
          style={{ fontFamily: "DM Sans, sans-serif" }}
        >
          {["General Queries", "Community Related", "Pricing Plan Related"].map(
            (tab, index) => (
              <button
                key={index}
                onClick={() => handleTabClick(tab)}
                className={`relative text-lg font-light mt-2 md:mt-0 px-4 py-2 transition-colors duration-200 z-10 ${
                  activeTab === tab
                    ? "text-white"
                    : "text-gray-400 hover:text-white"
                }`}
              >
                {tab}
                {activeTab === tab && (
                  <img
                    src="/images/FAQ/circle.png"
                    alt="Active Indicator"
                    className="absolute -bottom-0 left-1/2 transform -translate-x-1/2 z-0" // Adjust width and auto height
                  />
                )}
              </button>
            )
          )}
        </div>
        <div
          className="w-full space-y-4"
          style={{ fontFamily: "DM Sans, sans-serif" }}
        >
          {faqs.map((faq, index) => (
            <div key={index} className="border-b border-gray-700 py-4">
              <div
                className="flex justify-between items-center cursor-pointer"
                onClick={() => toggleFAQ(index)}
              >
                <h4 className="text-xl font-light">{faq.question}</h4>
                <span className="text-2xl">
                  {activeIndex === index ? "—" : "+"}
                </span>
              </div>
              {activeIndex === index && (
                <p className="mt-4 text-gray-400">{faq.answer}</p>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FAQSection;
