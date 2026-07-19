"use client";

import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronDown } from "lucide-react";

interface AccordionItemProps {
  id: string;
  question: string;
  answer: string;
  isOpen: boolean;
  onToggle: () => void;
}

export const AccordionItem: React.FC<AccordionItemProps> = ({
  id,
  question,
  answer,
  isOpen,
  onToggle,
}) => {
  return (
    <div className="border-b border-white/5 last:border-0 py-4">
      <button
        type="button"
        id={`trigger-${id}`}
        aria-expanded={isOpen}
        aria-controls={`panel-${id}`}
        onClick={onToggle}
        className="flex w-full items-center justify-between text-left font-medium py-2 text-text-light hover:text-primary-light transition-colors duration-200 cursor-pointer"
      >
        <span className="text-base md:text-lg">{question}</span>
        <ChevronDown
          className={`h-5 w-5 text-text-gray transform transition-transform duration-300 ease-out ${
            isOpen ? "rotate-180 text-primary-light" : ""
          }`}
        />
      </button>
      <AnimatePresence initial={false}>
        {isOpen && (
          <motion.div
            id={`panel-${id}`}
            role="region"
            aria-labelledby={`trigger-${id}`}
            initial={{ height: 0, opacity: 0 }}
            animate={{
              height: "auto",
              opacity: 1,
              transition: { height: { duration: 0.25, ease: "easeOut" }, opacity: { duration: 0.2 } },
            }}
            exit={{
              height: 0,
              opacity: 0,
              transition: { height: { duration: 0.2, ease: "easeIn" }, opacity: { duration: 0.15 } },
            }}
            className="overflow-hidden"
          >
            <div className="pt-2 pb-4 text-sm md:text-base text-text-gray leading-relaxed">
              {answer}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

interface AccordionProps {
  items: {
    id: string;
    question: string;
    answer: string;
  }[];
}

export const Accordion: React.FC<AccordionProps> = ({ items }) => {
  const [openId, setOpenId] = useState<string | null>(null);

  const handleToggle = (id: string) => {
    setOpenId(openId === id ? null : id);
  };

  return (
    <div className="w-full glass-card p-6 md:p-8 rounded-xl divide-y divide-white/5">
      {items.map((item) => (
        <AccordionItem
          key={item.id}
          id={item.id}
          question={item.question}
          answer={item.answer}
          isOpen={openId === item.id}
          onToggle={() => handleToggle(item.id)}
        />
      ))}
    </div>
  );
};

export default Accordion;
