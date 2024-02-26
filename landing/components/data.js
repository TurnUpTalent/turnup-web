import {
  FaceSmileIcon,
  ChartBarSquareIcon,
  CursorArrowRaysIcon,
  DevicePhoneMobileIcon,
  AdjustmentsHorizontalIcon,
  SunIcon,
} from "@heroicons/react/24/solid";
import benefitOneImg from "../public/img/benefit-one.png";
import benefitTwoImg from "../public/img/benefit-two.png";
import prototypeOneImg from "../public/img/prototype-one.png";
import prototypeTwoImg from "../public/img/prototype-two.png";

const benefitOne = {
  title: "Simple but Powerful",
  desc: "TurnUp is straightforwad interface gets you the actionable data you need where you need it.",
  image: prototypeTwoImg,
  bullets: [
    {
      title: "Keep employees happy",
      desc: "By indenifying flight risks and anticipating their needs you can continually delight your workforce.",
      icon: <FaceSmileIcon />,
    },
    {
      title: "Track Impact",
      desc: "Understand what is working and what isn't so you can stay accountable to your KPIs",
      icon: <ChartBarSquareIcon />,
    },
    {
      title: "Deepdive on what matters",
      desc: "Drill into individual employees and get visibility on their unique drivers.",
      icon: <CursorArrowRaysIcon />,
    },
  ],
};
const benefitTwo = {
  title: "Drive the Bottom Line",
  desc: "Don't let good employees slip through your fingers. With TurnUp you can compare your cost of churn with performance to understand business impact.",
  image: prototypeOneImg,
  bullets: [
    {
      title: "Relevant Alerts",
      desc: "Setup powerful automated alerts and reports so that you are never surprised by turnover again.",
      icon: <DevicePhoneMobileIcon />,
    },
    {
      title: "Powerful Filters",
      desc: "Filter and group employees so you can see specific trends and rollup numbers for the categories that matter to you.",
      icon: <AdjustmentsHorizontalIcon />,
    },
    {
      title: "Actionable Reccomendations",
      desc: "Specific reccomendations on what levers you can pull to retain the employees that matter most to you.",
      icon: <SunIcon />,
    },
  ],
};
export {benefitOne, benefitTwo};