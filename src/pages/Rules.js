import { useEffect, useState } from "react";
import ReactMarkdown from "react-markdown";
import MetaData from "../components/meta-data/MetaData";

export default function Rules() {
  const [markdown, setMarkdown] = useState("");

  useEffect(function () {
    fetch("/pages/rules.md")
      .then((response) => response.text())
      .then((text) => setMarkdown(text))
      .catch((error) => console.error("Error fetching markdown:", error));
  }, []);

  const description = "Rules for using the site.";
  const title = "Rules - Paraplu.art";

  return (
    <>
      <MetaData title={title} description={description} />
      <section className="inner">
        <ReactMarkdown>{markdown}</ReactMarkdown>
      </section>
    </>
  );
}
