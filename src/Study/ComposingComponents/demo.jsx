import React, { Component } from 'react'
import ComposingComponent from "./ComposingComponent";

class Demo extends Component {
    state = { 
        demos: [
            {id:0, value:1},
            {id:1, value:2},
            {id:2, value:3},
            {id:3, value:4},
        ]
     } 

     handleDelete = (countId) => {
        console.log('Here Handle deleted', countId);
        const demos = this.state.demos.filter(m => m.id !== countId);
        this.setState({ demos });
     }

    render() { 
        return (
            <div>
           {this.state.demos.map(m=> 
           <ComposingComponent 
           key={m.id} 
           id={m.id} 
           onDelete={this.handleDelete} 
           value={m.value} selected/>)}
            </div>
      

        );
    }
}
 
export default Demo;