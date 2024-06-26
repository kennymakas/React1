import React from 'react';

// function Great (){
//     return <h1>Hello Ian</h1>
// }
const Great= props => {
    console.log(props)
    return<h1>Hello {props.name}</h1>
}
// export const Welcome = () => <h2>How are you</h2>


export default Great