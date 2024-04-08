import {
  FaceSmileIcon,
  ChartBarSquareIcon,
  CursorArrowRaysIcon,
  DevicePhoneMobileIcon,
  AdjustmentsHorizontalIcon,
  SunIcon,
} from "../../../node_modules/@heroicons/react/24/solid";

import benefitOneImg from "../../../public/images/Landing/A2-homepage.png";
import benefitTwoImg from "../../../public/images/Landing/A3-homepage.png";

const benefitOne = {
  title: "Track Your Drinking Anywhere, Anytime",
  desc: "Say goodbye to losing track of how much you have been drinking. Our app allows you to track your consumption in the comfort of your own home or on the go. All you need is an internet connection and the motivation to better yourself.",
  image: benefitOneImg,
  bullets: [
    {
      title: "Feature",
      desc: "What Feature Does",
      icon: <FaceSmileIcon />,
    },
    {
      title: "Feature",
      desc: "What Feature Does",
      icon: <ChartBarSquareIcon />,
    },
    {
      title: "Feature",
      desc: "What Feature Does",
      icon: <CursorArrowRaysIcon />,
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
