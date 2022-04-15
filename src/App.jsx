import React from "react";
import Header from "./Header";
import Content from "./Content";
import Total from "./Total";

// 1.1 Step 1
// function App(props) {
//   return (
//     <div>
//       <Header />
//       <Content part="Fundamentals of React" exercise=" 10" />
//       <Content part="Using props to pass data" exercise=" 7" />
//       <Content part="State of a component" exercise=" 14" />
//       <Total />
//     </div>
//   );
// }

// 1.2 Step 2
function App(props) {
  return (
    <div>
      <Header />
      <Content />
      <Total />
    </div>
  );
}

export default App;