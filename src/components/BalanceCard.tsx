import { Eye, EyeOff } from "lucide-react";
import { useState } from "react";

interface BalanceCardProps {
  balance: number;
  autosaveAmount: number;
  frequency?: string;
  onBalanceToggle?: (visible: boolean) => void;
}

const BalanceCard: React.FC<BalanceCardProps> = ({
  balance,
  autosaveAmount,
  frequency = "Monthly",
  onBalanceToggle,
}) => {
  const [balanceVisible, setBalanceVisible] = useState(true);

  const formatCurrency = (amount: number) => {
    return amount.toLocaleString("en-UG");
  };

  const handleToggle = () => {
    setBalanceVisible(!balanceVisible);
    onBalanceToggle?.(!balanceVisible);
  };

  return (
    <div className="bg-white rounded-2xl shadow-lg pb-6 px-6 mb-6 relative -mt-16">
      <div className="flex items-start justify-between mb-6">
        <span
          className="text-sm font-semibold px-4 py-1.5 rounded-tl-2xl rounded-br-xl -ml-6 mt-0"
          style={{ backgroundColor: "#8BD8FE", color: "#013E5D" }}
        >
          Savings
        </span>
        <button
          onClick={handleToggle}
          className="hover:opacity-70 transition-opacity p-1 mt-4"
          style={{ color: "#AFAFAF" }}
        >
          {balanceVisible ? (
            <Eye className="w-6 h-6" />
          ) : (
            <EyeOff className="w-6 h-6" />
          )}
        </button>
      </div>

      <div className="text-center mb-6">
        <p className="text-lg mb-2 font-medium" style={{ color: "#AFAFAF" }}>
          Balance
        </p>
        <h2 className="text-5xl font-bold" style={{ color: "#013E5D" }}>
          {balanceVisible ? `UGX ${formatCurrency(balance)}` : "UGX ••••••"}
        </h2>
      </div>

      <div className="flex items-center justify-between text-sm mb-6">
        <div>
          <span style={{ color: "#AFAFAF" }}>Frequency: </span>
          <span className="font-semibold" style={{ color: "#013E5D" }}>
            {frequency}
          </span>
        </div>
        <div className="flex items-center gap-1">
          <span style={{ color: "#AFAFAF" }}>AutoSave amount:</span>
          <span className="font-semibold" style={{ color: "#013E5D" }}>
            UGX {formatCurrency(autosaveAmount)}
          </span>
        </div>
      </div>
    </div>
  );
};

export default BalanceCard;
