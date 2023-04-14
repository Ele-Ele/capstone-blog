import { FaFacebookSquare, FaTwitterSquare, FaInstagram } from "react-icons/fa";

function MyFooter() {
  return (
    <div className="bg-dark text-danger p-2 mt-3">
      <h5>Seguici</h5>
      <p>
        <FaFacebookSquare className="icon fs-4" />
      </p>
      <p>
        <FaTwitterSquare className="icon fs-4 " />
      </p>
      <p>
        <FaInstagram className="icon fs-4 " />
      </p>
      <p>&copy;Eleonora Proietti</p>
    </div>
  );
}

export default MyFooter;
