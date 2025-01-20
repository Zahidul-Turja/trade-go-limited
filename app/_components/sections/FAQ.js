"use client";

import React, { useState } from "react";
import { faqs } from "@/app/_data/faqs";
import { ChevronDown } from "lucide-react";

function FAQ() {
  return (
    <section className="mx-auto w-full py-medium text-center lg:px-big">
      <h1 className="mb-4 text-3xl font-extrabold uppercase tracking-wide text-primary-heading-main">
        Frequently Asked Questions (FAQs)
      </h1>

      <div>
        {faqs.map((faq) => (
          <FAQCard
            key={faq.id}
            id={faq.id}
            question={faq.question}
            answer={faq.answer}
          />
        ))}
      </div>
    </section>
  );
}

export default FAQ;

const FAQCard = ({ id, question, answer }) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="mb-4 overflow-hidden rounded-lg bg-white shadow-lg transition-all duration-500 hover:bg-slate-50">
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="flex w-full items-center justify-between px-12 py-8 text-left"
      >
        <h2 className="text-lg font-bold text-gray-900">
          {id}. {question}
        </h2>
        <ChevronDown
          className={`h-5 w-5 transform text-gray-900 transition-transform duration-500 ${
            isOpen ? "rotate-180" : ""
          }`}
        />
      </button>

      <div
        className={`overflow-hidden transition-all duration-500 ease-in-out ${
          isOpen ? "max-h-96" : "max-h-0"
        }`}
      >
        <p className="px-12 pb-4 text-left text-sm font-light leading-7 text-gray-900">
          {answer}
        </p>
      </div>
    </div>
  );
};
