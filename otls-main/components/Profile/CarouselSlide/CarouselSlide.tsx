import { ReactNode, ReactText } from "react";

export interface CarouselSlideProps {
  name: string;
  date: ReactText | ReactNode;
  address: ReactText | ReactNode;
  description: ReactText | ReactNode;
  ctas: ReactNode;
}

const CarouselSlide = ({
  name,
  date,
  address,
  description,
  ctas,
}: CarouselSlideProps) => {
  return (
    <div className="py-1 px-16">
      <p className="text-4xl text-white mb-16 font-bold">{name}</p>
      <div className="flex gap-6 flex-col lg:flex-row">
        <div className="basis-1/2 border-l-2 border-yellow pl-6">
          <p className="text-yellow text-4xl uppercase tracking-widest mb-0">
            {date}
          </p>
          <p className="text-white mb-0 text-lg">{address}</p>
        </div>
        <div className="basis-1/2 flex flex-col justify-between">
          <p className="mb-5 text-white text-lg">{description}</p>
          <div className="flex gap-2">{ctas}</div>
        </div>
      </div>
    </div>
  );
};

export default CarouselSlide;
