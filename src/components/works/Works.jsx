import { useState } from "react";
import "./works.scss";

export default function Works() {
    const [currentSlide, setCurrentSlide] = useState(0)

    const data = [
        {
          id: "1",
          icon: "./assets/browser.png",
          title: "RESUME",
          desc:
            "You can download my resume here",
          img:
            "assets/resume-work.jpg",
            project: "https://drive.google.com/file/d/1i4NzoCNtLkW-TGjoPraSEb-fas5sZLn9/view?usp=sharing"
        },
        {
          id: "2",
          icon: "./assets/linkedin.png",
          title: "LINKEDIN",
          desc:
            "More about me in my linkedin profile",
          img:
            "assets/linkedin-work.jpg",
            project: "https://www.linkedin.com/in/torabis/"
        },
        {
          id: "3",
          icon: "./assets/github.png",
          title: "GITHUB",
          desc:
            "Find more about my project in my GitHub",
          img:
            "assets/github-work.jpg",
            project: "https://github.com/Torabis"
        },
      ];
      
      const handleClick = (way)=> {
          way === 'left' ? setCurrentSlide(currentSlide > 0 ? currentSlide-1 : 2) 
          : setCurrentSlide(currentSlide < data.length -1 ? currentSlide + 1 : 0);
      }
  return (
      <div className="works" id="works">
      <div className="slider" style={{transform:`translateX(-${currentSlide*100}vW)`}}>
            {data.map((d, i) =>( 
        <div className="container">
          <div className="item">
            <div className="left">
              <div className="leftContainer">
                <div className="imgContainer" key={i}>
                  <img src={d.icon} alt="" />
                </div>
                <h2>{d.title}</h2>
                <p>
                    {d.desc}
                </p>
                <a href={d.project} target="_blank" rel="noreferrer">Link</a>
              </div>
            </div>
            <div className="right">
                <img src={d.img} alt="" />
            </div>
          </div>
        </div>
        ))}
      </div>
      <img src="assets/arrow.png" className="arrow left"  alt="" onClick={()=>handleClick('left')}/>
      <img src="assets/arrow.png" className="arrow right"  alt="" onClick={()=>handleClick('right')}/>
    </div>
  );
}
