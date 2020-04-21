import React from "react";
import DomainItemComponent from "./DomainItemComponent";
import DomainService, { deleteDomain, findDomainsForNuid} from "../services/DomainService"
import "../css/BonusStyle.css"

class DomainComponent extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            domains: [],
            adding: false,
            newDomain: "",
            editingDomain: "",
            editing: false
        }
    }

    componentDidMount() {
        findDomainsForNuid(this.props.nuId).then(domains =>
            this.setState({domains: domains}))
    }


    deleteDomain = (nuid, domain) =>
        deleteDomain(nuid, domain).then(() => {
            this.setState(prevState => {
                const newState = {
                    domains: prevState.domains.filter(function (oldDomain) {
                        return oldDomain !== domain
                    })
                }
                return newState
            })

        })

    render() {
        return (
            <div className="container">
                <h1>Domains for {this.props.nuId}</h1>
                <button type="button" className="btn btn-primary" onClick={() =>
                    this.props.history.push(`/wam/nuids`)

                }>Back
                </button>
                <div className="list-group">
                    {this.state.domains && this.state.domains.map((domain) =>
                        <DomainItemComponent
                            domain={domain}
                            domains={this.state.domains}
                            nuId={this.props.nuId}
                            history={this.props.history}
                            edit={(d) => {
                                this.setState({editingDomain: d})
                            }}
                            editing={this.state.editingDomain === domain}
                            deleteDomain={this.deleteDomain}
                        />
                    )}
                    <li className="list-group-item">
                        <input type="text" className="form-control col-10 add-domain-input"
                               onChange={(e) => this.setState({newDomain: e.target.value})}
                               value={this.state.newDomain}/>
                        <span><button type="button" className="btn btn-primary add-domain"
                                      onClick={() => {
                                          this.props.history.push
                                          (`/wam/nuids/${this.props.nuId}/domains/${this.state.newDomain}`);

                                      }}>Add Domain</button></span>
                    </li>
                </div>
            </div>
        )
    }


}

export default DomainComponent
