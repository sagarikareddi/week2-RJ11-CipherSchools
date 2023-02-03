import React, {useState} from "react";


// class AllUserList extends React.Component {
//     state = { 
//     allUsers: [{
//       name: "John",
//       email: "john@example.com",
//       phone: "+91 987654321",
//    },
//    {
//       name: "yash",
//       email: "yash@example.com",
//       phone: "+91 987655421",
//    },
// ];
//   };
// };
// return(
//    <div>
//       <UserDetails user={allUsers[0]} />
      
//       <UserDetails user={allUsers[1]} />
      
//       <UserDetails user={allUsers[2]} />
//    </div>
// )
// };

// export default AllUserList;




const AllUserList = () => {
   const [state, setState]= useState({name:"Priyanshu kumar"});

   return(
      <h1>The name is {state.name}</h1>
   )

};
 
export default AllUserList;

