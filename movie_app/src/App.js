import React from "react";

function Food({ fav }) {
return <h3>I like {fav}!!</h3>
}

 function App() {
  return (
    <div className="App">
      <h1>Hey...</h1>
      <Food fav="kimchi" />
      <Food fav="rameon" />
      <Food fav="udong" />
      <Food fav="japchae" />
    </div>
  );
}

export default App;
