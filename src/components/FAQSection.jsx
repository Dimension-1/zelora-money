import React, { useState } from "react";

const FAQSection = () => {
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

  return (
    <section className="bg-black text-white py-16">
      <div className="mx-auto flex flex-col items-center md:items-center md:justify-between w-full md:max-w-4xl">
        <h2 className="text-4xl font-bold text-center mb-8">FAQs</h2>
        <div className="flex justify-center space-x-8 mb-8">
          <button className="text-gray-400 hover:text-white">
            General Queries
          </button>
          <button className="text-white underline">Community Related</button>
          <button className="text-gray-400 hover:text-white">
            Pricing Plan Related
          </button>
          <button className="text-gray-400 hover:text-white">
            Course Related
          </button>
        </div>
        <div className="w-full space-y-4">
          {faqs.map((faq, index) => (
            <div key={index} className="border-b border-gray-700 py-4">
              <div
                className="flex justify-between items-center cursor-pointer"
                onClick={() => toggleFAQ(index)}
              >
                <h4 className="text-xl font-semibold">{faq.question}</h4>
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