import PropTypes from "prop-types";
export const FunctionSam = (props) => {
  const { handleClick } = props;
  return (
    <div>
      <p>This is Btn Componnent</p>
      <button onClick={handleClick}>Click Me!</button>
    </div>
  );
};

FunctionSam.propTypes = {
  handleClick: PropTypes.func.isRequired,
};


// APP JSX 


/*

import { FunctionSam } from "./components/FunctionSam";

function App() {
  const handleClick = () => {
    alert("Button Clicked");
  };

  return (
    <>
      <div>
        <h2>Parent Component</h2>
      </div>
      <FunctionSam handleClick={handleClick} />
    </>
  );


}

export default App;




*/