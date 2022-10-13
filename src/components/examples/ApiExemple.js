// import { useState, useEffect } from 'react';


// function ApiExemple() {

//     const  [items, setItems] = useState("");


//     useEffect(() => {
//         fetch("https://jsonplaceholder.typecode.com/users")
//         .then((res) => res.json())
//         .then((json) => {
//             items: json
//         })
//         .catch(error => console.log(error))
//     }, []);


//     return ( 
//         <div className='container'>
//            <h5>Api Example:</h5>
//            {items.map((item) => {
//             <p>{item.name}</p>
//            })}
//         </div>
//     );
// }

// export default ApiExemple;