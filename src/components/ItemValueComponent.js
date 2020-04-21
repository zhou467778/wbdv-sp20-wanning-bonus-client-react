import React from "react";
import {addItem, findItemsForDomain} from "../services/ItemValueService";
import "../css/BonusStyle.css"
import {Link} from "react-router-dom";

class ItemValueComponent extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            items: [],
            editingItem: '',
            selectingItem: '',
            editing: false,
            selecting: false,
            itemField:'',
            itemValue:''
        }
    }

    componentDidMount() {

        findItemsForDomain(this.props.nuId, this.props.domain)
            .then(items => this.setState({items: items}))
    }


    addItem = (nuid, newItem) =>
        addItem(nuid, newItem).then(item => this.setState
        (prevState => {
            return ({
                items: [
                    ...prevState.items,
                    item
                ]
            })
        }))


    edit = (item) =>
        this.setState({editingItem: item._id})

    select = (item) => {
        console.log(item);
        this.setState({selectingItem: item._id})
    }




    render() {
        return (

            <div className="container">
                <h1>{this.props.domain}</h1>
                <button type="button" className="btn btn-primary"
                        onClick={() => this.props.history.push(`/wam/nuids/${this.props.nuId}/domains`)}>Back
                </button>
                <hr/>

                <div className="list-group">

                    {this.state.items && this.state.items.map((item, i) =>

                        <div className={`list-group-item
                        ${this.state.selectingItem === item._id || this.state.editingItem === item._id ? "selected" : "unselected"} `}
                             key={i}>
                            {Object.keys(item).filter(field => !String(field).includes("_")).map((key, i) =>
                                <div>
                                    {this.state.editingItem !== item._id &&

                                    <Link to={`/wam/${this.props.nuId}/${this.props.domain}/${item._id}/list`}>
                                        <a className="field col-6" onClick={() => {this.select(item)}
                                        }>
                                            {item[key]}
                                        </a>
                                    </Link>
                                    }
                                    {this.state.editingItem === item._id &&
                                    <div className="form-group">
                                        <a className="item-title">{key}</a>
                                        <input value={item[key]}
                                               className={"form-control col-7 change-title"}
                                        />
                                        <hr/>
                                    </div>}
                                </div>
                            )
                            }
                            {this.state.editingItem === item._id &&
                            <div>
                                <input className={"form-control col-2 new-field"} placeholder="New Field"/>
                                <input className={"form-control col-7 new-field-value"} placeholder="New field value"/>
                                <div className="buttons">
                                <button type="button" className="btn btn-danger delete-item">Delete</button>
                                <button type="button" className="btn btn-success save-item">Save</button>
                                </div>
                            </div>
                            }
                            {this.state.editingItem !== item._id &&
                            <button type="button" className="btn btn-warning edit-item"
                                    onClick={() => {
                                        this.edit(item)
                                    }}
                            >Edit</button>}
                        </div>
                    )}
                </div>

                <hr/>
                <button type="button" className="btn btn-primary"
                        onClick={() =>
                            this.addItem(this.props.nuId, this.props.domain)}>Add {this.props.domain}</button>
            </div>

        )
    }


}

export default ItemValueComponent
