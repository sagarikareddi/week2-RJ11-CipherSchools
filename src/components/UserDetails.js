import React from "react";
import PropTypes from "prop-types";


const Userdetails = ({user = {}}) => {
   return(
      <div>
         <h3>{user.name}</h3>
         <h5>Email: {user.email} <br />
         Phone Number: {user.phoneNumber}</h5>
      </div>
   );

};
export default Userdetails;




// const Test = ({ name = "", setName}) = {
//    return (
//       <>
//        <h1>The name is: {name}</h1>
//        <input type="text" 
//        value= {name}
//        onChange={(e) => setName(e.target.value)}/>
//        </>
//    );
// };
//    Test.PropTypes = {
//       name: PropTypes.string,
//       setName: PropTypes.func,
//    };

// export default Test;