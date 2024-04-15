import {
  FaceSmileIcon,
  ChartBarSquareIcon,
  CursorArrowRaysIcon,
  DevicePhoneMobileIcon,
  AdjustmentsHorizontalIcon,
  SunIcon,
  CalendarIcon
} from "../../../node_modules/@heroicons/react/24/solid";

import benefitOneImg from "../../../public/images/Landing/A2-homepage.png";
import benefitTwoImg from "../../../public/images/Landing/A3-homepage.png";

const benefitOne = {
  title: "Track Your Drinking Anywhere, Anytime",
  desc: "Say goodbye to losing track of how much you have been drinking. Our app allows you to track your consumption in the comfort of your own home or on the go. All you need is an internet connection and the motivation to better yourself.",
  image: benefitOneImg,
  bullets: [
    {
      title: "Ease of Use",
      desc: "Allows you to keep all of your drinking metrics in one place",
      icon: <FaceSmileIcon />,
    },
    {
      title: "Charts",
      desc: "Easy to read charts",
      icon: <ChartBarSquareIcon />,
    },
    {
      title: "History",
      desc: "Easy to check goals and history",
      icon: <CalendarIcon />,
    },
  ],
};

const benefitTwo = {
  title: "Expert Guidance, Every Step of the Way",
  desc: "No more guessing games. Our team of experienced professionals is here to provide you with expert guidance and support. From detailed instructions to tips and more, we've got everything you need to succeed.",
  image: benefitTwoImg,
  bullets: [
    {
      title: "Feature",
      desc: "What Feature Does",
      icon: <DevicePhoneMobileIcon />,
    },
    {
      title: "Feature",
      desc: "What Feature Does",
      icon: <AdjustmentsHorizontalIcon />,
    },
    {
      title: "Feature",
      desc: "What Feature Does",
      icon: <SunIcon />,
    },
  ],
};


export {benefitOne, benefitTwo};
