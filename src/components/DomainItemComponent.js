import React from "react";
import {render} from "react-dom";
import "../css/BonusStyle.css"


class DomainItemComponent extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            domainTitle: this.props.domain,
            cancelEditing: false,
            editing: this.props.editing,
            domainField:''

        }

    }


    render() {
        return (

            <div className="list-group-item">
                {!this.props.editing &&
                <a href={`/wam/nuids/${this.props.nuId}/domains/${this.props.domain}`}>
                    {this.props.domain}
                </a>}
                {!this.props.editing  &&
                <button type="button" className="btn btn-warning domain-edit" onClick={() => this.props.edit(this.state.domainTitle)}>Edit</button>}

                {this.props.editing &&
                <div>
                    <div>
                    <a>Domain: </a>
                    <input value={this.state.domainTitle}
                           className="editing-domain-name form-control"
                           onChange={(e) => this.setState({domainTitle: e.target.value})}/>

                    <button type="button" className="btn btn-info edit-cancel"
                            onClick={() => this.props.edit('')}>Cancel
                    </button>
                    <button type="button" className="btn btn-success edit-save">Save</button>
                    <button type="button" className="btn btn-danger edit-delete">Delete</button>
                    </div>
                    <hr/>
                    <div className="field-name">
                        <a>Field Name:</a>
                        <input value={this.state.domainField}
                               className="editing-domain-field form-control"
                               placeholder="New Field"
                               onChange={(e) => this.setState({domainField: e.target.value})}/>
                               <a>Type:</a>
                        <select className="form-control select-domain-type">
                            <option>String</option>
                            <option>Number</option>
                            <option>Date</option>
                            <option>Boolean</option>
                        </select>
                        <button type="button" className="btn btn-success">Add</button>

                    </div>
                </div>}

            </div>


        )
    }

}

export default DomainItemComponent


