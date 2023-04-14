import { useEffect, useState } from "react";

import { Card, Container, Row, Col } from "react-bootstrap";
import SpinnerLoad from "./SpinnerLoad";
import { Link } from "react-router-dom";
import Newsletter from "./Newsletter";

const MyCard = () => {
  const [post, setPost] = useState([]);
  const [spinner, setSpinner] = useState();

  const fetchCard = async () => {
    setSpinner(true);

    try {
      const res = await fetch("http://localhost:3000/posts");

      if (res.ok) {
        const data = await res.json();
        setPost(data);
        setSpinner(false);
      } else {
        console.log("else error");
      }
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    fetchCard();
  }, []);

  return (
    <>
      <span class="my-class fs-1 fw-bold">NUOVI ARTICOLI</span>
      {/* <h1 className="text-danger my-5">Nuovi articoli</h1> */}
      <Container>
        <Row className="d-flex">
          <Col className="col-6">
            {spinner && <SpinnerLoad />}
            {post?.map((p) => (
              <Card
                style={{ width: "20rem", height: "20rem" }}
                className="post mt-5 bg-dark text-light text-center"
              >
                <Card.Img
                  variant="top"
                  src={p.img}
                  style={{ height: "15rem" }}
                />

                <Card.Body>
                  <h6> {p.title}</h6>
                  <Link to={`/articolo/${p.id}`} className="text-danger">
                    <p>Leggi l'articolo completo</p>
                  </Link>
                </Card.Body>
              </Card>
            ))}
          </Col>
          <Col className="col-6">
            <Newsletter />
          </Col>
        </Row>
      </Container>
    </>
  );
};

export default MyCard;
