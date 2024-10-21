import { useEffect, useState } from "react";
import { Helmet } from "react-helmet-async";
import ReactMarkdown from "react-markdown";

import aboutImage from "../img/about.jpg";

export const metadata = {
  title: "About",
  description: "Learn more about the project and its creator.",
};

function About() {
  const [markdown, setMarkdown] = useState("");

  useEffect(function () {
    fetch("/pages/about.md")
      .then((response) => response.text())
      .then((text) => setMarkdown(text))
      .catch((error) => console.error("Error fetching markdown:", error));
  }, []);
  return (
    <>
      <Helmet>
        <title>About / Paraplu.art</title>
      </Helmet>
      <section className="inner __footer">
        <ReactMarkdown>{markdown}</ReactMarkdown>
        <div className="about-bg">
          <img src={aboutImage} alt="About" width="100%" />
        </div>
      </section>
    </>
  );
}

export default About;
