import ActionCard from "./ActionCard";

export interface ActionCardItem {
  icon: React.ReactNode;
  label: string;
}

interface ActionGridProps {
  cards: ActionCardItem[];
  onCardClick?: (index: number) => void;
}

const ActionGrid: React.FC<ActionGridProps> = ({ cards, onCardClick }) => {
  return (
    <div className="grid grid-cols-2 gap-6 pb-8">
      {cards.map((card, index) => (
        <ActionCard
          key={index}
          icon={card.icon}
          label={card.label}
          onClick={() => onCardClick?.(index)}
        />
      ))}
    </div>
  );
};

export default ActionGrid;
