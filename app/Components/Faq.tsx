"use client";

import { useState } from "react";
import { FiPlus, FiMinus } from "react-icons/fi";

interface FAQItem {
  question: string;
  answer: string;
}

interface FAQProps {
  
  heading: string;
  subHeading?: string;
  items: FAQItem[];
  defaultOpen?: number;
}

export default function Faq({
  heading,
  subHeading,
  items,
  defaultOpen = -1,
}: FAQProps) {
  const [active, setActive] = useState<number>(defaultOpen);

  const toggle = (index: number) => {
    setActive(active === index ? -1 : index);
  };

  return (
    <section className="bg-[#F7F3ED] py-20 dark:bg-slate-950">
      <div className="mx-auto max-w-5xl px-4">

        {/* Heading */}

        <div className="text-center">

          <h2 className="text-sm font-bold text-[#C2421F] dark:text-white md:text-base">
            {heading}
          </h2>

          {subHeading && (
            <p className="mx-auto mt-5 max-w-2xl text-2xl sm:text-3xl lg:text-3xl font-bold leading-7 dark:text-slate-400">
              {subHeading}
            </p>
          )}
        </div>

        {/* FAQ */}

        <div className="mt-14">

          {items.map((item, index) => {

            const open = active === index;

            return (
              <div
                key={index}
                className="border-b border-[#E5DDD3] dark:border-slate-700"
              >

                <button
                  onClick={() => toggle(index)}
                  className="flex w-full items-center justify-between py-6 text-left"
                >

                  <h3 className="pr-5 text-[16px] md:text-lg font-medium text-slate-900 hover:text-[#143A36] dark:text-white">
                    {item.question}
                  </h3>

                  <div
                    className={`
                      flex
                      h-7
                      w-7
                      items-center
                      justify-center
                      rounded-full
                      transition-all

                      ${
                        open
                          ? "bg-[#0D5C54] text-white"
                          : "bg-[#EEF4F2] hover:bg-[#0D5C54] text-[#0D5C54] hover:text-white"
                      }
                    `}
                  >
                    {open ? (
                      <FiMinus size={15} />
                    ) : (
                      <FiPlus size={15} />
                    )}
                  </div>

                </button>

                <div
                  className={`
                    overflow-hidden
                    transition-all
                    duration-300

                    ${
                      open
                        ? "max-h-96 pb-6"
                        : "max-h-0"
                    }
                  `}
                >
                  <p className="max-w-4xl text-[16px] leading-7 text-slate-500 dark:text-slate-400">
                    {item.answer}
                  </p>
                </div>

              </div>
            );

          })}

        </div>

      </div>
    </section>
  );
}