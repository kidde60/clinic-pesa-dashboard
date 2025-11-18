import React from "react";

interface ActionButtonProps {
  icon: React.ReactNode;
  label: string;
  onClick?: () => void;
}

const ActionButton: React.FC<ActionButtonProps> = ({
  icon,
  label,
  onClick,
}) => {
  return (
    <button
      onClick={onClick}
      className="flex flex-col items-center cursor-pointer justify-center border-[#E5E5E5] py-4 border-2 rounded-xl transition-all hover:border-[#013E5D]"
    >
      <div className="mb-2">{icon}</div>
      <span className="font-semibold text-sm" style={{ color: "#013E5D" }}>
        {label}
      </span>
    </button>
  );
};

export default ActionButton;
