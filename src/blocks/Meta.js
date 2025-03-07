import { Helmet } from "react-helmet-async";

function Meta() {
  return (
    <Helmet>
      <meta charSet="utf-8" />
      <meta name="viewport" content="width=device-width,initial-scale=1" />

      <title>Paraplu.art</title>
      <meta
        name="description"
        content="Paraplu.art - dreams about something good. Digital illustration and simple art about life, nature, and people."
      />
      <meta
        name="keywords"
        content="illustration,digital art,digital illustration,funny cards,funny illustrations"
      />
      <meta name="theme-color" content="#ffffff" />

      <meta property="og:type" content="website" />
      <meta property="og:title" content="Paraplu.art" />
      <meta
        property="og:description"
        content="Paraplu.art - dreams about something good. Digital illustration and simple art about life, nature, and people."
      />
      <meta property="og:url" content="https://paraplu.art" />
      <meta property="og:image" content="img/logo.png"></meta>
    </Helmet>
  );
}

export default Meta;
