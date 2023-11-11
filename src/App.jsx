import Home from "./components/home/Home"
import Navbar from "./components/Navbar"
import React, { useState  } from 'react';
import LoadingSpinner from "./components/Loading";


function App() {

  const [isLoading, setIsLoading] = useState(true);

  React.useEffect(() => {
    setTimeout(() => {
      setIsLoading(false);
    }, 2000); // Simulate a 2-second loading period
  }, []);

  return (
    <>
    


      {isLoading ? (
        <LoadingSpinner/>
      ) : (
        <>
        <Navbar></Navbar>
      <Home></Home>
        </>
        
      )}
    </>
  )
}

export default App
