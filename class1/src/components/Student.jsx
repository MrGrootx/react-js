import PropTypes from "prop-types";
export const Student = (props) => {
  return (
    <div>
      <table className="border  mb-5 ">
        <tbody className="">
          <tr>
            <th className="text-left border">Name</th>
            <td className="text-left border">{props.name}</td>
          </tr>
          <tr>
            <th className="text-left border">Age</th>
            <td className="text-left border">{props.age}</td>
          </tr>
          <tr>
            <th className="text-left border">isAlive</th>
            <td className="text-left border">{props.isAlive ? "Yes" : "No"}</td>
          </tr>
        </tbody>
      </table>
    </div>
  );
};

// Define Props Type
Student.propTypes = {
  name: PropTypes.string,
  age: PropTypes.number,
  isAlive: PropTypes.bool,
};

// setting default value if user not provide any value
Student.defaultProps = {
   name: "Stranger",
   age: 0,
   isAlive: false
}