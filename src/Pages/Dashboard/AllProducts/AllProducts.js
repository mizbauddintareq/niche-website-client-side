import React, { useEffect, useState } from "react";
import { Button, Container } from "react-bootstrap";

const AllProducts = () => {
  const [products, setProducts] = useState([]);
  const [isDelete, setIsDelete] = useState(false);
  // const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    fetch("http://localhost:5000/allProducts")
      .then((res) => res.json())
      .then((data) => {
        setProducts(data);
        // setIsLoading(false);
      });
  }, [products, isDelete]);

  const handleDelete = (id) => {
    const proceed = window.confirm("Are You Want to delete data??");
    if (proceed) {
      fetch(`http://localhost:5000/delProduct/${id}`, {
        method: "DELETE",
      })
        .then((res) => res.json())
        .then((result) => {
          if (result.deletedCount) {
            setIsDelete(!isDelete);
          }
        });
    }
  };

  // if (isLoading) {
  //   return Loading();
  // }
  return (
    <Container fluid>
      <div className="row g-4">
        {products.map((pd) => (
          <div key={pd._id} className="col-md-4">
            <div
              className="card mb-3 h-100"
              style={{ backgroundColor: "#a8dadc", color: "#1d3557" }}
            >
              <div className="row g-0">
                <div className="col-md-4">
                  <img
                    src={pd.thumb}
                    className="img-fluid rounded-start h-100"
                    alt="..."
                  />
                </div>
                <div className="col-md-8">
                  <div className="card-body">
                    <h5 className="card-title text-uppercase">{pd.name}</h5>

                    <p className="card-text">Price: {pd.price} USD</p>
                    <p className="card-text">{pd.des}</p>

                    <Button
                      onClick={() => handleDelete(pd._id)}
                      variant="danger"
                    >
                      DELETE
                    </Button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </Container>
  );
};

export default AllProducts;
