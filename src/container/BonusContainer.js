import React from "react";
import {BrowserRouter as Router, Link, Route} from "react-router-dom"
import NuidComponent from "../components/NuidComponent";
import DomainComponent from "../components/DomainComponent";
import ItemValueComponent from "../components/ItemValueComponent";
import {findItemsForDomain} from "../services/ItemValueService";




class BonusContainer extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            adding: false,
        }
    }

    showAdding = () =>{
        this.setState(prevState => ({adding: true}))
    }

    async getItems(nuId, domain) {
        return findItemsForDomain(nuId, domain);
    }

    render() {
        return (
            <div>
                <Router>
                    <Route path={["/wam/nuids","/"]}
                           exact={true}
                           render={(props) =>
                               <NuidComponent
                                   {...props}
                               />}
                    />
                    <Route path={["/wam/nuids/:nuid/domains"]}
                           exact={true}
                           render={(props) =>
                               <DomainComponent
                                   {...props}
                                   nuId={props.match.params.nuid}
                                   history={props.history}

                               />}
                    />
                    <Route path={["/wam/nuids/:nuid/domains/:domain","/wam/:nuid/:domain/:itemId/list"]}
                           exact={true}
                           render={(props) =>
                               <ItemValueComponent
                                   {...props}
                                   nuId={props.match.params.nuid}
                                   history={props.history}
                                   domain={props.match.params.domain}
                                   itemId={props.match.params.itemId}
                               />}

                    />
                    {/*<Route path={["/wam/:nuid/:domain/:itemId/list"]}*/}
                    {/*       exact={true}*/}
                    {/*       render={(props) =>*/}
                    {/*           <ItemValueComponent*/}
                    {/*               {...props}*/}
                    {/*               nuId={props.match.params.nuid}*/}
                    {/*               history={props.history}*/}
                    {/*               domain={props.match.params.domain}*/}
                    {/*               itemId={props.match.params.itemId}*/}
                    {/*           />*/}
                    {/*       }*/}
                    {/*       />*/}
                </Router>
            </div>
        )
    }
}

export default BonusContainer
