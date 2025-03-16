"use client";
import React, { useState } from "react";

const questions = [
  {
    id: 1,
    label: "سوال اول",
    body: "لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده از طراحان گرافیک است چاپگرها و متون بلکه روزنامه و مجله در ستون و سطرآنچنان که لازم است.",
  },
  {
    id: 2,
    label: "سوال اول",
    body: "لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده از طراحان گرافیک است چاپگرها و متون بلکه روزنامه و مجله در ستون و سطرآنچنان که لازم است.",
  },
  {
    id: 3,
    label: "سوال اول",
    body: "لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده از طراحان گرافیک است چاپگرها و متون بلکه روزنامه و مجله در ستون و سطرآنچنان که لازم است.",
  },
  {
    id: 4,
    label: "سوال اول",
    body: "لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده از طراحان گرافیک است چاپگرها و متون بلکه روزنامه و مجله در ستون و سطرآنچنان که لازم است.",
  },
  {
    id: 5,
    label: "سوال اول",
    body: "لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده از طراحان گرافیک است چاپگرها و متون بلکه روزنامه و مجله در ستون و سطرآنچنان که لازم است.",
  },
  {
    id: 6,
    label: "سوال اول",
    body: "لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده از طراحان گرافیک است چاپگرها و متون بلکه روزنامه و مجله در ستون و سطرآنچنان که لازم است.",
  },
];

const ProductQuestions = () => {
  const [activeId, setActiveId] = useState(null);

  const toggleItem = (id) => {
    setActiveId(id);
  };
  return (
    <div className=" mb-60 shadow-main-page rounded-4xl py-10 px-8">
      <h3 className="text-black text-base lg:text-4xl font-bold">
        سوالات متداول
      </h3>
      <div className="mt-8 flex flex-col gap-5">
        {questions.map((question) => (
          <div key={question.id} className="collapse collapse-arrow">
            <input
              onChange={() => toggleItem(question.id)}
              type="radio"
              name="my-accordion-2"
            />
            <div
              className={`collapse-title flex items-center text-base lg:text-2xl font-semibold text-start  py-2 ${
                activeId === question.id
                  ? "bg-main-color-active text-white"
                  : "bg-border-question text-black"
              }`}
            >
              {question.label}
            </div>
            <div
              className={`collapse-content text-sm border py-6 px-4 border-border-question mt-2 rounded-2xl leading-7
                    ${activeId === question.id ? "block" : "hidden"}
                `}
            >
              {question.body}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ProductQuestions;
