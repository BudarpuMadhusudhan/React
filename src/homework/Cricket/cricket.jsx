import React, { Component } from 'react'
import { getCircketers } from "../../services/fakeCricketerService";
import Like from "../Cricket/Like";
import NavBar from "./NavBar";

class CircketTeam extends Component {
    state = {
        cricketerList: getCircketers(),
        search: ''
    }

    deletePlayer = (Player) => {
        const afterFilter = { cricketerList: this.state.cricketerList.filter(m => m.Player !== Player) };
        this.setState(afterFilter);
        console.log('Deleted Player : ', Player);
    }

    selectPlayers = (Player) => {
        const selectedPlayers = { cricketerList: this.state.cricketerList.filter(m => m.Player === Player) }
        this.setState(selectedPlayers)
        console.log('Selected Player : ', Player);
    }

    handleLiked = (list) => {
        const crickedListDummy  = [...this.state.cricketerList];
        const index = crickedListDummy.indexOf(list);
        crickedListDummy[index] = { ...crickedListDummy[index] };
        crickedListDummy[index].liked = !crickedListDummy[index].liked;
        this.setState({ cricketerList: crickedListDummy  });
    }

    handleSearch = (query) => {
        this.setState({ search: query });
    }

    render() {
        const { cricketerList, search } = this.state;
        const filteredList = search
            ? cricketerList.filter(list => list.Player.toLowerCase().includes(search.toLowerCase()))
            : cricketerList;
        return (
            <>
                <NavBar text={<h4>Total {filteredList.length} players are segregated </h4>} onChange={this.handleSearch} />
                {filteredList.length === 0 ? (
                    <h1 style={{ textAlign: "center", textAlignLast: 'center', fontFamily: 'cursive' }}> NO Players List is Displayed</h1>
                ) : (
                    <table className="table">
                        <thead>
                            <tr>
                                <th>Player</th>
                                <th>Country</th>
                                <th>Runs</th>
                                <th>Mode</th>
                                <th>Like</th>
                                <th>Delete</th>
                                <th>Select</th>
                            </tr>
                        </thead>
                        <tbody>
                            {filteredList.map(list => (
                                <tr key={list.Player}>
                                    <td>{list.Player}</td>
                                    <td>{list.Country}</td>
                                    <td>{list.Runs}</td>
                                    <td>{list.Mode}</td>
                                    <td><Like liked={list.liked} onClick={() => { this.handleLiked(list) }} /></td>
                                    <td><button className='btn-danger btn-sm' onClick={() => { this.deletePlayer(list.Player) }}>Delete</button></td>
                                    <td>
                                        <button 
                                        className="btn-outline btn-sm"
                                        onClick={() => { this.selectPlayers(list.Player) }}
                                        disabled={list.Runs < 10000}
                                        >Selected</button></td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                )}
            </>

        );
    }
}

export default CircketTeam;