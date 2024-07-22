import { useEffect, useState } from "react";
import ReactMarkdown from "react-markdown";

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
    <section className="inner">
      <ReactMarkdown>{markdown}</ReactMarkdown>
    </section>
  );
}

export default About;
