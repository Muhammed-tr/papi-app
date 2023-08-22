import React from "react";
import ApiShow from "./components/ApiShow";
// import ApiShow from "./components/ApiShow";
// import OnePerson from "./components/OnePerson";
// import Default from "./components/Default";

function App() {


  return (

   <ApiShow/>

  )
}

export default App;







// import React from "react";
// import ApiShow from "./components/ApiShow";
// import OnePerson from "./components/OnePerson";     default değerlerde farklı bir component çağrımak için kullanılabilir yapı

// function App() {
//   const numComponents = 5; // Örnek olarak 5 component çağırıyoruz
//   const components = Array.from({ length: numComponents * 2 }, (_, index) => {
//     return index % 2 === 0 ? <ApiShow key={index} /> : <OnePerson key={index} />;
//   });

//   return <div>{components}</div>;
// }

// export default App;
