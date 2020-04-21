import React from "react";
import '../../node_modules/bootstrap/dist/css/bootstrap.css'
import NuidService, {findAllNuids} from '../services/NuidService'
import {Link} from "react-router-dom";

class NuidComponent extends React.Component{
    constructor(props) {
        super(props);
        this.state ={
            nuids: []
        }
    }
    componentDidMount() {
        findAllNuids().then(Allnuids =>
            this.setState({nuids: Allnuids}))
    }

    render() {
        return(
            <div className="user-container container">
                <h2>Users</h2>
            <div className="list-group">
                {this.state.nuids && this.state.nuids.map((nuid) =>
                    <div className="list-group-item">
                        <a href={`/wam/nuids/${nuid}/domains`}>{nuid}
                        </a></div>
                )}
            </div>
            </div>

        )
    }

}


export default NuidComponent
