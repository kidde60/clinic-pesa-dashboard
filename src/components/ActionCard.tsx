import React from "react";

interface ActionCardProps {
  icon: React.ReactNode;
  label: string;
  onClick?: () => void;
}

const ActionCard: React.FC<ActionCardProps> = ({ icon, label, onClick }) => {
  return (
    <button
      onClick={onClick}
      className="bg-white rounded-2xl cursor-pointer shadow-md p-6 flex flex-col items-center justify-center hover:shadow-xl hover:scale-105 transition-all duration-200 min-h-[140px]"
    >
      <div className="mb-3">{icon}</div>
      <span
        className="font-semibold text-center text-sm leading-tight"
        style={{ color: "#013E5D" }}
      >
        {label}
      </span>
    </button>
  );
};

export default ActionCard;
