import {
  LifebuoyIcon,
  BeakerIcon,
  BookOpenIcon,
} from "@heroicons/react/20/solid";
import { PiNumberOneBold } from "react-icons/pi";
import {
  TbSquareNumber1,
  TbSquareNumber2,
  TbSquareNumber3,
} from "react-icons/tb";

const cards = [
  {
    name: "Born in Lahore",
    description:
      "I came into the world on June 22nd, 2002, which happened to be the hottest day of the year.",
    icon: TbSquareNumber1,
  },
  {
    name: "Graduated from Abu Dhabi Int. School",
    description:
      "2019. An insecure boy with low self-esteem, I graduated from Abu Dhabi International School, disappointingly standing out as one of only 7 out of 50+ students without even an honors medal.",
    icon: TbSquareNumber2,
  },
  {
    name: "Graduated from Comsats University Islamabad, Lahore Campus",
    description:
      "2024. This campus, where I met the best people, transformed my life. I proudly secured the 2nd position in my batch and earned a campus silver medal.",
    icon: TbSquareNumber3,
  },
];

const AboutMeHero = () => {
  return (
    <div className="relative isolate overflow-hidden bg-gray-900 py-24 sm:py-32">
      <img
        src="https://images.unsplash.com/photo-1521737604893-d14cc237f11d?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&crop=focalpoint&fp-y=.8&w=2830&h=1500&q=80&blend=111827&sat=-100&exp=15&blend-mode=multiply"
        alt=""
        className="absolute inset-0 -z-10 h-full w-full object-cover object-right md:object-center"
      />
      <div className="hidden sm:absolute sm:-top-10 sm:right-1/2 sm:-z-10 sm:mr-10 sm:block sm:transform-gpu sm:blur-3xl">
        <div
          className="aspect-[1097/845] w-[68.5625rem] bg-gradient-to-tr from-[#ff4694] to-[#776fff] opacity-20"
          style={{
            clipPath:
              "polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)",
          }}
        />
      </div>
      <div className="absolute -top-52 left-1/2 -z-10 -translate-x-1/2 transform-gpu blur-3xl sm:top-[-28rem] sm:ml-16 sm:translate-x-0 sm:transform-gpu">
        <div
          className="aspect-[1097/845] w-[68.5625rem] bg-gradient-to-tr from-[#ff4694] to-[#776fff] opacity-20"
          style={{
            clipPath:
              "polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)",
          }}
        />
      </div>
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto max-w-2xl lg:mx-0">
          <h2 className="text-4xl font-bold tracking-tight text-white sm:text-6xl">
            To do anything to a high level, it has to be total obsession.
          </h2>
          <p className="mt-6 text-lg leading-8 text-gray-300">
            I'm Haris, a full-stack TypeScript developer on a mission to create
            waves of impact in the tech world. Let's turn ideas into reality and
            make a difference together! 💻🚀
          </p>
          <p className="mt-12 text-3xl leading-8 font-extrabold text-gradient bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 bg-clip-text text-transparent">
            My Life, Three Beautiful Chapters
          </p>
        </div>

        <div className="mx-auto mt-8 grid max-w-2xl grid-cols-1 gap-6 sm:mt-20 lg:mx-0 lg:max-w-none lg:grid-cols-3 lg:gap-8">
          {cards.map((card) => (
            <div
              key={card.name}
              className="flex gap-x-4 rounded-xl bg-white/5 p-6 ring-1 ring-inset ring-white/10"
            >
              <card.icon
                className="h-7 w-5 flex-none text-indigo-400 "
                aria-hidden="true"
              />
              <div className="text-base leading-7">
                <h3 className="font-semibold text-gradient bg-gradient-to-r from-purple-500 via-pink-500 to-red-500 bg-clip-text text-transparent">
                  {card.name}
                </h3>
                <p className="mt-2 text-gray-300">{card.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default AboutMeHero;
