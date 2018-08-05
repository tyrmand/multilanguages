import React from 'react';
import {HashRouter, Route, Switch} from 'react-router-dom';
import Main from "./Main";
import AboutUs from "./AboutUs";
import AboutCompany from "./AboutCompany";
import MainTemplate from "./MainTemplate";
import NotFound from "./NotFound";
import Navigation from "./Navigation";


class App extends React.Component {

    render() {
        return (
            <MainTemplate>
                <HashRouter>
                    <React.Fragment>
                        <Navigation/>
                        <Switch>
                            <Route exact path="/" component={Main}/>
                            <Route path="/about/us" component={AboutUs}/>
                            <Route path="/about/company" component={AboutCompany}/>
                            <Route component={NotFound}/>
                        </Switch>
                    </React.Fragment>
                </HashRouter>
            </MainTemplate>
        )
    }
}

export default App;