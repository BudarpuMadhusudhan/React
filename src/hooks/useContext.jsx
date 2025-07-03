import React from 'react'
import Child from "../hooks/useContextChild";
import UserContext from "../hooks/UserContext";
function parent() {
  
    const madhuObject = { age: "30" , place :"Hirehal"}

    return (
        <h1> I am madhusudhan my age is {madhuObject.age}
            <UserContext.Provider value={madhuObject}>
                <Child />
            </UserContext.Provider>
        </h1>);
}

export default parent;