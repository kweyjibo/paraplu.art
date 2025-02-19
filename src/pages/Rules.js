import { useEffect, useState } from "react";
import { Helmet } from "react-helmet-async";
import ReactMarkdown from "react-markdown";

export default function Rules() {
  const [markdown, setMarkdown] = useState("");

  useEffect(function () {
    fetch("/pages/rules.md")
      .then((response) => response.text())
      .then((text) => setMarkdown(text))
      .catch((error) => console.error("Error fetching markdown:", error));
  }, []);

  const description = "Rules for using the site.";
  const title = "Paraplu.art. Rules";

  return (
    <>
      <Helmet>
        <meta property="og:title" content={title} />
        <title>{title}</title>
        <meta name="description" content={description} />
        <meta
          name="keywords"
          content="art,illustration,digital art,digital illustration,vector graphics"
        />
      </Helmet>
      <section className="inner">
        <ReactMarkdown>{markdown}</ReactMarkdown>
      </section>
    </>
  );
}
