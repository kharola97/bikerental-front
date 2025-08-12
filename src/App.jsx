// import { useState } from 'react'




// function App() {
//   const [count, setCount] = useState(0)

//   return (
//     <>
//       <h1 class="text-3xl font-bold underline">
//     Hello world! hello
//   </h1>
//     </>
//   )
// }

// export default App

import UserLanding from "./Pages/UserLanding";
// import PartnerLanding from "./pages/PartnerLanding";

function App() {
  return (
  <div className="container min-h-screen max-w-screen">
  <UserLanding />;
  </div>  
  
  )


  // return <PartnerLanding />;
}

export default App;

