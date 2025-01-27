"use client";
//import Image from "next/image";
import bracelet from "../../assets/ringverti.jpg";
import pendant from "../../assets/pendant69.jpg";
import phonecase from "../../assets/phoneverti.jpg";
import shoes from "../../assets/shoesverti.jpg";
import wallet from "../../assets//walletvertii.jpg";
import bag from "../../assets/handbagvertii.jpg";
import { Carousel, Card } from "../ui/apple-cards-carousel";
import { Button, Image } from "@chakra-ui/react";
export function AppleCardsCarouselDemo() {
  const cards = data.map((card, index) => (
    <Card key={card.src} card={card} index={index} />
  ));

  return (
    <div className="w-full h-80% py-10">
      <h2 className="max-w-7xl pl-4 mx-auto text-xl md:text-5xl font-bold text-neutral-200 dark:text-neutral-200 font-sans">
        Our Products.
      </h2>
      <Carousel items={cards} />
    </div>
  );
}

const DummyContent = () => {
  return (
    <>
      {[...new Array(3).fill(1)].map((_, index) => {
        return (
          <div
            key={"dummy-content" + index}
            className="bg-[#F5F5F7] dark:bg-neutral-800 p-8 md:p-14 rounded-3xl mb-4"
          >
            <p className="text-neutral-600 dark:text-neutral-400 text-base md:text-2xl font-sans max-w-3xl mx-auto">
              <span className="font-bold text-neutral-700 dark:text-neutral-200">
                The first rule of Apple club is that you boast about Apple club.
              </span>{" "}
              Keep a journal, quickly jot down a grocery list, and take amazing
              class notes. Want to convert those notes to text? No problem.
              Langotiya jeetu ka mara hua yaar is ready to capture every
              thought.
            </p>
            <Image
              src="https://assets.aceternity.com/macbook.png"
              alt="Macbook mockup from Aceternity UI"
              height="500"
              width="500"
              className="md:w-1/2 md:h-1/2 h-full w-full mx-auto object-contain"
            />
          </div>
        );
      })}
    </>
  );
};

const data = [
  {
    category: "for all the torqueheads out there",
    title: "TOR Ked's",
    src: shoes,

    // src: "https://images.unsplash.com/photo-1593508512255-86ab42a8e620?q=80&w=3556&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    content: <DummyContent />,
  },
  {
    category: "Gear up for elegance with the ",
    title: "TOR Clutch",
    src: bag,
    // src: "https://images.unsplash.com/photo-1531554694128-c4c6665f59c2?q=80&w=3387&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    content: <DummyContent />,
  },
  {
    category: "Spiral up with",
    title: "TOR Helical",
    src: bracelet,
    content: <DummyContent />,
  },

  {
    category: "Cool down with",
    title: "TOR Ice",
    src: pendant,
    content: <DummyContent />,
  },
  {
    category: "Suit up with",
    title: "TOR case",
    src: phonecase,
  },
  {
    category: "Driver your essentials with",
    title: "TOR portfel",
    src: wallet,
    content: <DummyContent />,
  },
];
