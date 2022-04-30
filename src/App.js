import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'

import './App.css'
import Header from './components/Header/Header'
import Actors from './views/Actors/Actors'
import DetailsActor from './views/DetailsActor/DetailsActor'

function App() {
    return (
        <div className='App'>
            <Router>
                <main>
                <Header />
                    <Switch>
                        <Route exact path='/'>
                            <Actors />
                        </Route>
                        <Route path='/actors/:id'>
                            <DetailsActor />
                        </Route>
                    </Switch>
                </main>
            </Router>
        </div>
    )
}

export default App
