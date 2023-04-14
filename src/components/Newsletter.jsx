function Newsletter() {
  return (
    <>
      <div className="d-flex justify-content-end my-5">
        <form className="form d-flex justify-content-start">
          <span class="title">Iscriviti alla nostra newsletter.</span>
          <p class="description">
            Inserisci la tua mail e rimani aggiornato su nuovi crimini e
            misteri!
          </p>
          <div>
            <input
              placeholder="La tua email"
              type="email"
              name="email"
              id="email-address"
            />
            <button type="submit">Iscriviti</button>
          </div>
        </form>
      </div>
    </>
  );
}

export default Newsletter;
