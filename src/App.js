import './App.css';
import { BrowserRouter, Route, Switch } from "react-router-dom";

import FilmList from "./components/films/FilmList";
import FilmShow from "./components/films/FilmShow"

import PeopleList from "./components/people/PeopleList";

import PlanetList from "./components/planets/PlanetsList";

import SpeciesList from "./components/species/SpeciesList";

import StarshipsList from "./components/starships/StarshipsList";

import VehiclesList from "./components/vehicles/VehiclesList";

import ResourceContainer from "./components/ResourceContainer";


function App() {
  return (
    <div className="App">
		<BrowserRouter>
            <Switch>
                <Route path="/" exact component={ResourceContainer}></Route>
                <Route path="/films" exact component={FilmList}></Route>
                <Route path="/films/:id" exact component={FilmShow}></Route>
                <Route path="/people" exact component={PeopleList}></Route>
                <Route path="/planets" exact component={PlanetList}></Route>
                <Route path="/species" exact component={SpeciesList}></Route>
                <Route path="/starships" exact component={StarshipsList}></Route>
                <Route path="/vehicles" exact component={VehiclesList}></Route>
                <Route path="/" render={() => <div>404 Page not found!</div>}></Route>
            </Switch>
        </BrowserRouter>
    </div>
  );
}

export default App;
