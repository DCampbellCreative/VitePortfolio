import { NavBar } from "../nav-bar/NavBar.js";
import { AboutMe } from "../about-me/AboutMe.js";
import { MyWork } from "../my-work/MyWork.js";
import { Contact } from "../contact/Contact.js";
import { MyWorkMobile } from "../my-work-mobile/MyWorkMobile.js";

import Resume from "/assets/Campbell-Doug-Resume.pdf";

type HomeProps = {
  width: number;
};

export const Home = ({ width }: HomeProps) => {
  const openResume = () => {
    window.open(Resume, "_blank");
  };

  return (
    <>
      <NavBar />
      <AboutMe openResume={openResume} />
      {width < 900 ? <MyWorkMobile /> : <MyWork />}
      <Contact openResume={openResume} />
    </>
  );
};
