import React from 'react';
import {
    BrowserRouter,
    HashRouter,
    Route,
    Link,
    Switch
} from 'react-router-dom';
import TopBar from './TopBar'; 
import Welcome from './Welcome'
import Browse from './Browse';
import Create from './Create/Create'


const Links = () => (
    <ul className="link-bar">
        <li><Link to="/">Welcome</Link></li>
        <li><Link to="/browse">Browse</Link></li>
        <li><Link to="/create">Create</Link></li>
    </ul>
)

const App = ()=> (  
    <HashRouter hashType="slash">   
        <div className="app">
            <TopBar><Links /></TopBar>
            <Switch>
                <Route exact path="/" component={Welcome} />
                <Route path="/browse" component={Browse}></Route>
                <Route path="/create" component={Create}></Route>
           </Switch>
        </div>
    </HashRouter>
)
export default App;