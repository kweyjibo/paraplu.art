import errorImg from "../../img/error/error.jpg";

function Error({ message }) {
  return (
    <div className="error-cnt">
      <h1 className="error-title">Oops!</h1>

      <section className="error-section">
        <figure className="error-ifigure">
          <img src={errorImg} alt="Error" className="error-img" />
        </figure>

        <h2 className="error-subtitle">{message}</h2>
        <p></p>
      </section>
    </div>
  );
}

export default Error;
