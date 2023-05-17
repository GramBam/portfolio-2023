import { FaChevronRight, FaGithub, FaLinkedin } from "react-icons/fa";

export const server = <p>Starting the Server...</p>;

export const command = (
  <>
    <p>You can run several commands:</p>
    <p className="code">
      about
      <br />
      <span>My introduction</span>
    </p>
    <p className="code">
      social
      <br />
      <span>View social links</span>
    </p>
    <p className="code">
      all
      <br />
      <span>View all commands</span>
    </p>
  </>
);

export const path = (
  <p className="path">
    # user
    <span> in</span>
    <span> ~/GramBam</span>
  </p>
);

export const noCommand = (input: string) => <p>command not found: {input}</p>;

export const prompt = (success: boolean, input: string) => (
  <div className={`prompt ${success ? "success" : "failure"}`}>
    <FaChevronRight />
    <h2>{input}</h2>
  </div>
);

export const about = (
  <p>
    Certified Firefighter and Full-Stack Developer with 6+ years of experience
    developing software and web applications front to back. Currently
    specializing in JavaScript technologies.
  </p>
);

export const social = (
  <>
    <p className="social-link">
      <a href="https://github.com/GramBam" target="_blank">
        <FaGithub />
        github.com/GramBam
      </a>
    </p>
    <p className="social-link">
      <a href="https://www.linkedin.com/in/graham-moss/" target="_blank">
        <FaLinkedin />
        linkedin.com/in/graham-moss/
      </a>
    </p>
  </>
);

const all = (
  <>
    <p className="code">
      about
      <br />
      <span>My introduction</span>
    </p>
    <p className="code">
      social
      <br />
      <span>View social links</span>
    </p>
    <p className="code">
      stack
      <br />
      <span>View my tech stack</span>
    </p>
    <p className="code">
      clear
      <br />
      <span>Clear the terminal</span>
    </p>
  </>
);

const stack = (
  <>
    <p className="frontend">
      Frontend:
      <span> TypeScript </span>|<span> React </span>|<span> Redux </span>|
      <span> NextJS </span>|<span> SCSS </span>|<span> Jest </span>
    </p>
    <p className="backend">
      Backend:
      <span> Node </span>|<span> Express </span>|<span> MongoDB </span>|
      <span> Ruby on Rails </span>|<span> AWS </span>
    </p>
    <p className="tools">
      Tools:
      <span> Jira </span>|<span> Git </span>|<span> Wordpress </span>|
      <span> Jenkins </span>|<span> VMWare </span>|<span> Photoshop </span>
    </p>
  </>
);

const resume = (
  <p>
    <a href="https://bit.ly/3IfeFmM" target="_blank">
      Graham Moss Resume - Hosted on AWS
    </a>
  </p>
);

const snake = <p>Coming soon...</p>;

export const blocks = {
  server,
  command,
  path,
  noCommand,
  prompt,
  about,
  social,
  all,
  stack,
  resume,
  snake,
};
