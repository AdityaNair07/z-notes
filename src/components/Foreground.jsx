import React, { useRef } from "react";
import NotesCard from "./NotesCard";

const Foreground = () => {
  const notesData = [
    {
      title: "Learn React",
      desc: "Learn the basics of React and build a simple todo list app",
      status: "Inprogress",
    },
    {
      title: "Finish Project Report",
      desc: "Complete the project report and submit it to the manager",
      status: "Pending",
    },
    {
      title: "Implement Authentication",
      desc: "Implement authentication using Firebase and React",
      status: "Completed",
    },
    {
      title: "Design New Website",
      desc: "Design a new website for the company using Figma",
      status: "Inprogress",
    },
    {
      title: "Write Blog Post",
      desc: "Write a blog post on the benefits of using React in web development",
      status: "Pending",
    },
    {
      title: "Fix Bugs",
      desc: "Fix the bugs in the existing code and deploy it to production",
      status: "Completed",
    },
    {
      title: "Create Database Schema",
      desc: "Create a database schema for the new project using MySQL",
      status: "Inprogress",
    },
  ];

  const parent = useRef(null);

  return (
    <>
      <div className="w-full h-full z-[3] fixed overflow-y-auto overflow-x-hidden">
        <div
          ref={parent}
          className="grid grid-cols-1 px-2 py-8 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-y-8 place-items-center"
        >
          {notesData.map((notes, index) => {
            return (
              <NotesCard
                parent={parent}
                key={index}
                title={notes.title}
                desc={notes.desc}
                status={notes.status}
              />
            );
          })}
        </div>
      </div>
    </>
  );
};

export default Foreground;
