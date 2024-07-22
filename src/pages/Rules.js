import { useEffect, useState } from "react";
import ReactMarkdown from "react-markdown";

export const metadata = {
  title: "Rules",
  description: "Rules for using my art",
  keywords: "rules, art",
};

export default function Rules() {
  const [markdown, setMarkdown] = useState("");

  useEffect(function () {
    fetch("/pages/rules.md")
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
