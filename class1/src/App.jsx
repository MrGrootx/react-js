// import { LearnComponent } from './components/learnComponent'
// import Header from "./components/Header"
// import { ChildComponents } from "./components/ChildComponents";
// import { Student } from "./components/Student";

import { FunctionSam } from "./components/FunctionSam";
import "./css/App.css";

function App() {
  const handleClick = () => {
    alert("Button Clicked");
  };

  return (
    <>
      {/* <div className="bg-red-800">Groot</div>
      <LearnComponent /> 
      <Header />
      
      <Student name="Abishek" age={18} isAlive={true} />
      <Student name="Jai" age={25} isAlive={false} />
      <Student/>

      <ChildComponents>
        <p>para 1 </p>
        <p>para 2 </p>
      </ChildComponents>
      */}
      <div>
        <h2>Parent Component</h2>
      </div>
      <FunctionSam handleClick={handleClick} />
    </>
  );
}

export default App;


