import React from "react";

function Food({ name, picture }) {
return <div>
  <h2>I like {name}</h2>
  <img src={picture} />
  </div>
}

const foodILike = [{
  name: "Kimchi",
  image:
    "https://contents.sixshop.com/thumbnails/uploadedFiles/72878/product/image_1540176020065_1000.jpg"
},
{
  name: "rameon",
  image:
    "http://3.bp.blogspot.com/-SfT8tvQJ45Q/UPefufj0qUI/AAAAAAAABz4/Z3uZN79PWYA/s1600/%EB%9D%BC%EB%A9%B4%EB%A7%9B%EC%9E%88%EA%B2%8C+%EB%81%93%EC%9D%B4%EB%8A%94+%EB%B0%A9%EB%B2%954.png"
},
{
  name: "ddeokboki",
  image:
    "http://pcmugbang.com/data/item/1582356122/main10001000.jpg"
}]

 function App() {
  return (
    <div className="App">
     {foodILike.map(dish => (<Food name= {dish.name} picture= {dish.image} />))}
    </div>
  );
}

export default App;
