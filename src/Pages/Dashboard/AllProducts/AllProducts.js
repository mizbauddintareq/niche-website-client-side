import React, { useEffect, useState } from "react";
import { Button, Card, Col, Container, Row } from "react-bootstrap";
import Swal from "sweetalert2";
import withReactContent from "sweetalert2-react-content";
import Loading from "../../Loading/Loading";
const AllProducts = () => {
  const [products, setProducts] = useState([]);
  const [isDelete, setIsDelete] = useState(false);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    fetch("https://sleepy-bastion-40732.herokuapp.com/allProducts")
      .then((res) => res.json())
      .then((data) => {
        setProducts(data);
        setIsLoading(false);
      });
  }, [products, isDelete]);

  const handleDelete = (id) => {
    const MySwal = withReactContent(Swal);

    Swal.fire({
      title: "Are you sure?",
      text: "You won't be able to revert this!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#d33",
      cancelButtonColor: "#3085d6",
      confirmButtonText: "Yes, delete it!",
    }).then((result) => {
      if (result.isConfirmed) {
        fetch(`https://sleepy-bastion-40732.herokuapp.com/delProduct/${id}`, {
          method: "DELETE",
        })
          .then((res) => res.json())
          .then((result) => {
            if (result.deletedCount) {
              setIsDelete(!isDelete);
              Swal.fire(
                "Deleted!",
                "Your product has been deleted.",
                "success"
              );
            }
          });
      }
    });
  };

  if (isLoading) {
    return Loading();
  }
  return (
    <Container fluid>
      <Row xs={1} md={3} className="g-4 mt-4">
        {products.map((pd) => (
          <Col key={pd._id}>
            <Card
              className="h-100 text-secondary shadow-lg mb-2 border border-secondary rounded"
              style={{ backgroundColor: "#000000" }}
            >
              <Card.Img variant="top" src={pd.thumb} />
              <Card.Body>
                <Card.Title className="text-uppercase text-white">
                  {pd.name}
                </Card.Title>
                <h6 style={{ color: "#9d0208" }}>Price: ${pd.price}</h6>
                <Card.Text style={{ color: "#3d5a80" }}>{pd.des}</Card.Text>
                <Button
                  onClick={() => handleDelete(pd._id)}
                  style={{ backgroundColor: "#6a040f" }}
                >
                  DELETE
                </Button>
              </Card.Body>
            </Card>
          </Col>
        ))}
      </Row>
      ;
    </Container>
  );
};

export default AllProducts;
