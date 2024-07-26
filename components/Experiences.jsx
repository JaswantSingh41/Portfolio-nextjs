import int2 from "../public/assets/images/headstater.jpeg"
import Image from "next/image";
const Experiences = () => {
    const experiences = [
      {
        title: "Software Engineering Fellow",
        company: "HeadStarter AI",
        logo: int2,
        period: "Jul 2024 - Present",
        description: "Created responsive websites for small businesses. Collaborating with senior developers on large-scale projects.",
        skills: ["React", "Node.js", "JavaScript","MongoDB","C++", "Git", "Leadership"]
      },
    ];
  
    return (
      <section id="experiences" className="experiencesSection">
        <h2 className="green_gradient">Experiences</h2>
        <div className="experiencesContainer">
          {experiences.map((exp, index) => (
            <div key={index} className="experienceItem">
              <div className="logoContainer">
                <Image src={exp.logo} alt={`${exp.company} logo`} className="logo" />
              </div>
              <div className="content">
                <h3 className="red_gradient">{exp.title}</h3>
                <h4>{exp.company}</h4>
                <p className="period">{exp.period}</p>
                <p className="description">{exp.description}</p>
                <div className="skills">
                  {exp.skills.map((skill, i) => (
                    <span key={i} className="skill">{skill}</span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>
    );
  };

  export default Experiences;