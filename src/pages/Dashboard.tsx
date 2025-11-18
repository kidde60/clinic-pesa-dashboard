import { useState } from "react";
import { Wallet, Send, Users, CheckCircle, Receipt } from "lucide-react";
import {
  Header,
  BalanceCard,
  ActionButton,
  ActionGrid,
  TabNavigation,
  CarouselDots,
  Footer,
} from "../components";

const Dashboard = () => {
  const [activeTab, setActiveTab] = useState("account");

  const balance = 50000;
  const autosaveAmount = 1000;

  const getGreeting = () => {
    const hour = new Date().getHours();
    if (hour >= 5 && hour < 12) return "Good Morning";
    if (hour >= 12 && hour < 17) return "Good Afternoon";
    if (hour >= 17 && hour < 21) return "Good Evening";
    return "Good Night";
  };

  const actionCards = [
    {
      icon: <Receipt className="w-8 h-8" style={{ color: "#013E5D" }} />,
      label: "Pay Medical Bill",
    },
    {
      icon: <Wallet className="w-8 h-8" style={{ color: "#013E5D" }} />,
      label: "Get Loan",
    },
    {
      icon: <Users className="w-8 h-8" style={{ color: "#013E5D" }} />,
      label: "Join MaMas",
    },
    {
      icon: <CheckCircle className="w-8 h-8" style={{ color: "#013E5D" }} />,
      label: "My Approvals",
    },
  ];

  const tabs = [
    { id: "account", label: "ACCOUNT OPTIONS" },
    { id: "invest", label: "INVEST" },
    { id: "transactions", label: "TRANSACTIONS" },
  ];

  return (
    <div>
      <Header
        greeting={getGreeting()}
        userName="Robert"
        onBack={() => console.log("Back clicked")}
        onClose={() => console.log("Close clicked")}
      />

      <div className="bg-gray-50 min-h-[20vh] md:min-h-[30vh] pt-6 px-5 -mt-8 rounded-t-3xl">
        <BalanceCard
          balance={balance}
          autosaveAmount={autosaveAmount}
          frequency="Monthly"
        />

        <div className="grid grid-cols-2 gap-6 mb-6">
          <ActionButton
            icon={<Wallet className="w-6 h-6" style={{ color: "#013E5D" }} />}
            label="Deposit"
          />
          <ActionButton
            icon={<Send className="w-6 h-6" style={{ color: "#013E5D" }} />}
            label="Share Medical"
          />
        </div>

        <CarouselDots totalDots={3} activeDot={0} />

        <TabNavigation
          activeTab={activeTab}
          tabs={tabs}
          onTabChange={setActiveTab}
        />

        {activeTab === "account" && (
          <ActionGrid
            cards={actionCards}
            onCardClick={(index) => console.log(`Card ${index} clicked`)}
          />
        )}

        {activeTab === "invest" && (
          <div className="text-center py-12" style={{ color: "#AFAFAF" }}>
            <p>Investment options coming soon</p>
          </div>
        )}

        {activeTab === "transactions" && (
          <div className="text-center py-12" style={{ color: "#AFAFAF" }}>
            <p>Transaction history coming soon</p>
          </div>
        )}

        <Footer />
      </div>
    </div>
  );
};

export default Dashboard;
