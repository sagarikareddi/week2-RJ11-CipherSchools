// import React, {useEffect, useState} from 'react'

// const Photos = () => {
//    const [photoList, setPhotoList] = useState([]);
//    const [isLoading, setisLoading] = useState(true);


//    useEffect(() => {
//       // make an api call to get all photos
//       //update state
//       //set isLoading false
//       fetch("https://jsonplaceholder.typicode.com/photos")   // make an api call to get all photos
//       .then((response)=> response.json())
//       .then((json)=> setPhotoList(JSON>parseFloat(json)))   //setting state
//       .finally(()=> setIsLoading(false));      //setting isLoading As faLSE

//    }, []);

//    if (isLoading) {
//       return <h4>Loading...</h4>
//    }



//   return (
//     <div>
//       {photoList.map((photo,index) => {
//          <div key={index}>
//       <img src={photo.url} alt={photo.title} />
//          </div>
      
//       })}
//     </div>
//   )
// }

// export default Photos;




// axious exaple 
// const axios = require('axios');

// axios.get('https://jsonplaceholder.typicode.com/posts/1')
//   .then(response => {
//     console.log(response.data);
//   })
//   .catch(error => {
//     console.error(error);
//   });

