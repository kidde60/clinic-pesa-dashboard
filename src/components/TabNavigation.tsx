interface TabNavigationProps {
  activeTab: string;
  tabs: Array<{ id: string; label: string }>;
  onTabChange: (tabId: string) => void;
}

const TabNavigation: React.FC<TabNavigationProps> = ({
  activeTab,
  tabs,
  onTabChange,
}) => {
  return (
    <div className="flex border-b-2 mb-6" style={{ borderColor: "#E5E5E5" }}>
      {tabs.map((tab) => (
        <button
          key={tab.id}
          onClick={() => onTabChange(tab.id)}
          className="flex-1 pb-3 text-sm font-bold cursor-pointer tracking-wide transition-colors relative"
          style={{ color: activeTab === tab.id ? "#013E5D" : "#AFAFAF" }}
        >
          {tab.label}
          {activeTab === tab.id && (
            <div
              className="absolute bottom-0 left-0 right-0 h-1 rounded-t-full"
              style={{ backgroundColor: "#FFCB05" }}
            ></div>
          )}
        </button>
      ))}
    </div>
  );
};

export default TabNavigation;
