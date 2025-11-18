import { ChevronLeft, X } from "lucide-react";

interface HeaderProps {
  greeting: string;
  userName: string;
  onBack?: () => void;
  onClose?: () => void;
}

const Header: React.FC<HeaderProps> = ({
  greeting,
  userName,
  onBack,
  onClose,
}) => {
  return (
    <div
      className="min-h-[20vh] md:min-h-[30vh]"
      style={{
        background:
          "linear-gradient(to bottom right, #015873, #013E5D, #012840)",
      }}
    >
      <div className="px-5 pt-6 flex items-center justify-between">
        <button
          onClick={onBack}
          className="hover:opacity-80 transition-opacity"
          style={{ color: "#FFCB05" }}
        >
          <ChevronLeft className="w-7 h-7" />
        </button>
        <h1 className="text-white text-2xl font-bold tracking-wide">
          clinicPesa
        </h1>
        <button
          onClick={onClose}
          className="hover:opacity-80 transition-opacity"
          style={{ color: "#FFCB05" }}
        >
          <X className="w-7 h-7" />
        </button>
      </div>

      <div className="px-5 pb-20 text-center">
        <p className="text-white text-lg font-medium">
          {greeting}, {userName}
        </p>
      </div>
    </div>
  );
};

export default Header;
