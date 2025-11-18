interface CarouselDotsProps {
  totalDots: number;
  activeDot: number;
}

const CarouselDots: React.FC<CarouselDotsProps> = ({
  totalDots,
  activeDot,
}) => {
  return (
    <div className="flex justify-center gap-2 mb-6">
      {Array.from({ length: totalDots }).map((_, index) => (
        <div
          key={index}
          className={`rounded-full transition-all ${
            index === activeDot ? "w-8 h-1.5" : "w-1.5 h-1.5"
          }`}
          style={{
            backgroundColor: index === activeDot ? "#FFCB05" : "#AFAFAF",
          }}
        ></div>
      ))}
    </div>
  );
};

export default CarouselDots;
