import React from "react";
import { useEffect, useState } from "react";
import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";
import "bootstrap/dist/css/bootstrap.min.css";
import "../services/data.modules.css";

const Data = () => {
  const [data, setData] = useState([]);

  const [loading, setLoading] = useState(false);

  useEffect(() => {
    fetch("https://www.thecocktaildb.com/api/json/v1/1/search.php?s=")
      .then((res) => res.json())
      .then((data) => {
        setData(data.drinks);
        setLoading(true);
      });
  }, []);
  return (
    <div className="cards">
      {loading &&
        data.map((el) => (
          <Card style={{ width: "18rem" }}>
            <Card.Img variant="top" src={el.strDrinkThumb} />
            <Card.Body>
              <Card.Title key={el.idDrink}>{el.strDrink}</Card.Title>
              <Card.Text>{el.strInstructions}</Card.Text>
              <Card.Text>{el.strInstructions}</Card.Text>
              <Button variant="warning">{el.strAlcoholic}</Button>
            </Card.Body>
          </Card>
        ))}
    </div>
  );
};

export default Data;
