import { Helmet } from "react-helmet";

function Meta() {
  return (
    <div>
      <Helmet>
        <meta charSet="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />

        <title>Paraplu.art - all about dreams</title>
        <meta
          name="description"
          content="Paraplu.art - dreams about something good. What dreams may come."
        />
        <meta name="theme-color" content="#ffffff" />

        <meta property="og:type" content="website" />
        <meta property="og:title" content="Paraplu.art" />
        <meta
          property="og:description"
          content="Paraplu.art - dreams about something good. What dreams may come."
        />
        <meta property="og:url" content="https://paraplu.art" />
      </Helmet>
    </div>
  );
}

export default Meta;
