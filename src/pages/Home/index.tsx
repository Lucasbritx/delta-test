import {
  happyWoman,
  happyWoman2,
  mechanicTowTruck,
  towTruck,
} from "../../assets";
import Banner from "../../components/Banner";
import Card from "../../components/Card";
import { v4 as uuidv4 } from "uuid";

const cards = [
  {
    id: uuidv4(),
    image: happyWoman,
    text: "Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam",
    authorName: "Souza Costa",
    postDate: "18 de fevereiro de 2021",
  },
  {
    id: uuidv4(),
    image: towTruck,
    text: "Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam",
    authorName: "Juninho",
    postDate: "18 de fevereiro de 2021",
  },
  {
    id: uuidv4(),
    image: mechanicTowTruck,
    text: "Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam",
    authorName: "Nicolas",
    postDate: "18 de fevereiro de 2021",
  },
  {
    id: uuidv4(),
    image: happyWoman2,
    text: "Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam",
    postDate: "18 de fevereiro de 2021",
    authorName: "Jenifer",
  },
  {
    id: uuidv4(),
    image: happyWoman,
    text: "Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam",
    postDate: "18 de fevereiro de 2021",
    authorName: "Austin",
  },
  {
    id: uuidv4(),
    image: towTruck,
    text: "Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam",
    postDate: "18 de fevereiro de 2021",
    authorName: "Carla",
  },
];

export default function Home() {
  return (
    <div className="flex flex-col w-full gap-y-14 relative">
      <Banner />
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-x-14 gap-y-16">
        {cards.map((card) => (
          <Card
            key={card.id}
            image={card.image}
            text={card.text}
            authorName={card.authorName}
            postDate={card.postDate}
          />
        ))}
      </div>
    </div>
  );
}
