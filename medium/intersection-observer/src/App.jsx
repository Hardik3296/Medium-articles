import SectionFirst from "./Components/SectionFirst";
import SectionSecond from "./Components/SectionSecond";
import SectionThird from "./Components/SectionThird";
import "./App.css";
import { useEffect, useLayoutEffect, useRef, useState } from "react";

function App() {

  const [animateFirstSection, setAnimateFirstSection] = useState(false);
  const [animateSecondSection, setAnimateSecondSection] = useState(false);
  const [animateThirdSection, setAnimateThirdSection] = useState(false);

  let observer = null;
  useEffect(() => {
    const options = {
      root: null,
      threshold: 0.3,
      rootMargin: "10px"
    }
    const sectionFirst = document.querySelector(".container-first");
    const sectionSecond = document.querySelector(".container-second");
    const sectionThird = document.querySelector(".container-third");
    observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          console.log(entry.target);
          if (entry.target === sectionFirst)
            setAnimateFirstSection(true);
          else if (entry.target === sectionSecond)
            setAnimateSecondSection(true);
          else
            setAnimateThirdSection(true);
        }
      });
    }, options);
    if (sectionFirst)
      observer.observe(sectionFirst);
    if (sectionSecond)
      observer.observe(sectionSecond);
    if (sectionThird)
      observer.observe(sectionThird);
  }, []);

  return (
    <div className="app">
      <SectionFirst animateFirstSection={animateFirstSection} />
      <SectionSecond animateSecondSection={animateSecondSection} />
      <SectionThird animateThirdSection={animateThirdSection} />
    </div>
  );
}

export default App;
