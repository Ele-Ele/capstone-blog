import { useState, useEffect } from "react";
import { Col, Container, Row } from "react-bootstrap";

const Consigliati = () => {
  const [cons, setCons] = useState([]);
  const [spinner, setSpinner] = useState();

  const fetchCons = async () => {
    setSpinner(true);

    try {
      const res = await fetch("http://localhost:3000/podcast");

      if (res.ok) {
        const data = await res.json();
        setCons(data);
        setSpinner(false);
      } else {
        console.log("else error");
      }
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    fetchCons();
  }, []);

  return (
    <>
      <Row className="d-flex ">
        <span class="my-class fs-1 fw-bold">I podcast più seguiti</span>
        {cons?.map((pod) => (
          <Col className="mt-5">
            <article class="card">
              <img src={pod.img} alt="" />
              <div class="card_content">
                <span class="card_title">{pod.nome}</span>
                <span class="card_subtitle">
                  Clicca per ascoltarlo: <a href={pod.link}>🎧.</a>
                </span>
                <p class="card_description">{pod.descrizione}</p>
              </div>
            </article>
          </Col>
        ))}
      </Row>
    </>
  );
};

export default Consigliati;
