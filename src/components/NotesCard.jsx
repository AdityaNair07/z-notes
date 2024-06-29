import React from "react";
import { FaFileAlt } from "react-icons/fa";
import { motion } from "framer-motion";

const NotesCard = ({ title, desc, status, parent }) => {
  return (
    <>
      <motion.div
        drag
        dragConstraints={parent}
        whileDrag={{ scale: 1.1, cursor: "grabbing" }}
        dragElastic={0.1}
        dragMomentum={true}
        dragTransition={{ bounceStiffness: 500, bounceDamping: 20 }}
        className="rounded-xl shadow-md card min-w-[250px] md:w-[250px] max-w-[300px] h-[300px] border border-grey-600 bg-white relative overflow-hidden hover:cursor-grab"
      >
        <div className="flex items-center justify-start gap-4 px-3 py-2 text-lg border-b border-gray-400 card-header">
          <FaFileAlt />
          {title.length > 20 ? title.substring(0, 20) + ".." : title}
        </div>
        <div className="px-4 py-8 h-max card-body">{desc}</div>
        <div
          className={`card-footer font-semibold text-white w-full text-xl p-4 absolute left-0 bottom-0 ${
            status == "Completed"
              ? "bg-green-500"
              : status == "Inprogress"
              ? "bg-sky-500"
              : status == "Pending"
              ? "bg-yellow-500"
              : "bg-slate-500"
          }`}
        >
          {status}
        </div>
      </motion.div>
    </>
  );
};

export default NotesCard;
