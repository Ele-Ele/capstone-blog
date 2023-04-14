import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { Container } from "react-bootstrap";

const Articolo = () => {
  const [articolo, setArticolo] = useState([]);
  const params = useParams();
  console.log(params);
  const fetchArticolo = async () => {
    try {
      const res = await fetch("http://localhost:3000/posts");

      if (res.ok) {
        const data = await res.json();
        setArticolo(data);
      } else {
        console.log("error else articolo ");
      }
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    fetchArticolo();
  }, []);

  return (
    <>
      <span class="my-class fs-1 fw-bold">ARTICOLI COMPLETI</span>
      {articolo
        // ?.filter((a) => a.id === params.id)

        .map((a) => (
          <Container>
            <h1 className="text-light mt-5">{a.title}</h1>
            <img
              src={a.img}
              alt=""
              style={{ width: "20rem" }}
              className="mt-3"
            />
            <p className="text-white my-5  border-bottom border-danger border-2">
              {a.article}
            </p>
          </Container>
        ))}
    </>
  );
};

export default Articolo;
