import {
  VerticalTimeline,
  VerticalTimelineElement
} from "react-vertical-timeline-component";
import "react-vertical-timeline-component/style.min.css";
import { LazyLoadImage } from "react-lazy-load-image-component";
import "react-lazy-load-image-component/src/effects/blur.css";

import { skills, experiences } from "../constants";
import CTA from "../components/CTA";
import { myself } from "../assets/images";

const About = () => {
  return (
    <section className="max-container">
      <h1 className="head-text">
        Hello, I'm{" "}
        <span className="blue-gradient_text font-semibold drop-shadow">
          Phuc Nguyen Hoang
        </span>
        !
      </h1>

      <div className="mt-5 flex flex-col gap-3 text-slate-500">
        <p>
          Dedicated Software Engineering student at University of Information
          Technology. Developing a strong foundation in web development through
          relevant coursework.
        </p>
        <p>
          Aspiring Web Developer with a passion for creating intuitive and
          visually appealing digital experiences. Proficient in HTML, CSS, and
          JavaScript, I am eager to apply classroom knowledge to practical
          projects, contribute my skills to a dynamic team and learn from
          experienced professionals.
        </p>
        <a
          href="/resume.pdf"
          alt="resume"
          className="underline font-semibold"
          rel="noopener noreferrer"
        >
          This is my resume
        </a>
      </div>

      <div className="w-full flex justify-end items-center">
        <div className="block-container lg:w-80 lg:h-80 md:w-60 md:h-60 w-40 h-40 mt-10 mr-10">
          <div className="btn-back rounded-xl" />
          <div className="btn-front rounded-xl flex justify-center items-center">
            <LazyLoadImage
              src={myself}
              alt="myself_image"
              className="object-contain"
              effect="blur"
            />
          </div>
        </div>
      </div>

      <div className="py-10 flex flex-col">
        <h3 className="subhead-text">My Skills</h3>

        <div className="mt-16 flex flex-wrap gap-12">
          {skills.map((skill, index) => (
            <div key={index} className="block-container w-20 h-20">
              <div className="btn-back rounded-xl" />
              <div className="btn-front rounded-xl flex justify-center items-center">
                <img
                  src={skill.imageUrl}
                  alt={skill.name}
                  className="w-1/2 h-1/2 object-contain"
                />
              </div>
            </div>
          ))}
        </div>
      </div>

      <div className="py-16">
        <h3 className="subhead-text">Work Experience</h3>
        <div className="mt-5 flex flex-col gap-3 text-slate-500">
          <p>
            I've worked with all sorts of companies, leveling up my skills and
            teaming up with smart people. Here's the rundown:
          </p>
        </div>

        <div className="mt-12 flex">
          <VerticalTimeline>
            {experiences.map((experience) => (
              <VerticalTimelineElement
                key={experience.company_name}
                date={experience.date}
                icon={
                  <div className="flex justify-center items-center w-full h-full">
                    <img
                      src={experience.icon}
                      alt={experience.company_name}
                      className="w-[60%] h-[60%] object-contain"
                    />
                  </div>
                }
                iconStyle={{ background: experience.iconBg }}
                contentStyle={{
                  borderBottom: "8px",
                  borderStyle: "solid",
                  borderBottomColor: experience.iconBg,
                  boxShadow: "none"
                }}
              >
                <div>
                  <h3 className="text-black text-xl font-poppins font-semibold">
                    {experience.title}
                  </h3>
                  <p
                    className="text-black-500 font-medium font-base"
                    style={{ margin: 0 }}
                  >
                    {experience.company_name}
                  </p>
                </div>

                <ul className="my-5 list-disc ml-5 space-y-2">
                  {experience.points.map((point, index) => (
                    <li
                      key={`experience-point-${index}`}
                      className="text-black-500/50 font-normal pl-1 text-sm"
                    >
                      {point}
                    </li>
                  ))}
                </ul>
              </VerticalTimelineElement>
            ))}
          </VerticalTimeline>
        </div>
      </div>

      <hr className="border-slate-200" />

      <CTA />
    </section>
  );
};

export default About;
