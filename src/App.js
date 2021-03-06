import './App.css';
import { BrowserRouter, Route, Switch } from "react-router-dom";

import FilmList from "./components/films/FilmList";
import FilmShow from "./components/films/FilmShow"

import PeopleList from "./components/people/PeopleList";
import PeopleShow from "./components/people/PeopleShow";

import StarshipsList from "./components/starships/StarshipsList";
import StarshipShow from "./components/starships/StarshipShow";

import VehiclesList from "./components/vehicles/VehiclesList";
import VehiclesShow from "./components/vehicles/VehiclesShow";

import ResourceContainer from "./components/ResourceContainer";
import Home from "./components/Home";
import { ThemeContextProvider } from './components/context/theme-context';

function App() {
    
    return (
        
        <div className="App">
            <ThemeContextProvider>
                <BrowserRouter>
                    <ResourceContainer></ResourceContainer>
                    <Switch>
                        <Route path="/" exact component={Home}></Route>
                        <Route path="/films" exact component={FilmList}></Route>
                        <Route path="/films/:id" exact component={FilmShow}></Route>
                        <Route path="/people" exact component={PeopleList}></Route>
                        <Route path="/people/:id" exact component={PeopleShow}></Route>
                        <Route path="/starships" exact component={StarshipsList}></Route>
                        <Route path="/starships/:id" exact component={StarshipShow}></Route>
                        <Route path="/vehicles" exact component={VehiclesList}></Route>
                        <Route path="/vehicles/:id" exact component={VehiclesShow}></Route>
                        <Route path="/" render={() => <div>404 Page not found!</div>}></Route>
                    </Switch>
                </BrowserRouter>
            </ThemeContextProvider>    
        </div>
    );
}

export default App;
