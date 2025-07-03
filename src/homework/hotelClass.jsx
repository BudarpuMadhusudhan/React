import React, { Component } from 'react'
import { hotelsNamesFromJson  } from "../services/fakeHotelNames";
class HotelName extends Component {
    state = { 
        hotelsNames: hotelsNamesFromJson()
    } 

    handleDelete= (item)=>{
    console.log(item);
    const freshName = this.state.hotelsNames.filter(m => m.name !== item)
    this.setState({hotelsNames :freshName})
    }

    render() { 
        if(this.state.hotelsNames.length === 0) 
            return <p>No Hotels Captured</p>
        return (
            <>
            <p>These are the {this.state.hotelsNames.length} hotels we have Captured in South India</p>
                <table className="table">
                    <thead>
                        <tr>
                            <th>Name</th>
                            <th>Place</th>
                            <th>Type</th>
                            <th>Status</th>
                            <th></th>
                        </tr>
                    </thead>
                    <tbody className="tbody">
                        {this.state.hotelsNames.map(hotels => (
                        <tr key={hotels.name}>
                            <td>{hotels.name}</td>
                            <td>{hotels.place}</td>
                            <td>{hotels.type}</td>
                            <td>{hotels.status}</td>
                            <td onClick={()=>{this.handleDelete(hotels.name)}} ><button className='btn btn-outline-danger btn-sm'>Delete</button></td>
                        </tr>
                        ))}
                    
                    </tbody>
                </table>
            </>
        );
    }
}
 
export default HotelName;