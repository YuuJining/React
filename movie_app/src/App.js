import React from "react";
import PropTypes from "prop-types";

function Food({ name, picture, rating }) {
return <div>
  <h2>I like {name}</h2>
  <h4>{rating}/5.0</h4>
  <img src={picture} alt={name} />
  </div>
}

Food.propTypes = {
  name: PropTypes.string.isRequired,
  picture: PropTypes.string.isRequired,
  rating: PropTypes.number.isRequired
}

const foodILike = [{
  id: 1,
  name: "Kimchi",
  image:
    "https://contents.sixshop.com/thumbnails/uploadedFiles/72878/product/image_1540176020065_1000.jpg",
  rating: 4.6
  },
{
  id: 2,
  name: "rameon",
  image:
    "http://3.bp.blogspot.com/-SfT8tvQJ45Q/UPefufj0qUI/AAAAAAAABz4/Z3uZN79PWYA/s1600/%EB%9D%BC%EB%A9%B4%EB%A7%9B%EC%9E%88%EA%B2%8C+%EB%81%93%EC%9D%B4%EB%8A%94+%EB%B0%A9%EB%B2%954.png",
  rating: 3.5
},
{
  id: 3,
  name: "ddeokboki",
  image:
    "http://pcmugbang.com/data/item/1582356122/main10001000.jpg",
  rating: 4.6
}]

function App() {
  return (
    <div className="App">
     {foodILike.map(dish => (
       <Food key={dish.id} name={dish.name} picture={dish.image}
       rating={dish.rating} />
     ))}
    </div>
  );
}

export default App;
