import React, {Component} from 'react';
import './App.css';
import MapBox from './components/mapBox';
import Toggle from './components/toggle';
import Legend from './components/legend';
import { setActiveOption } from './action';

class App extends Component {
    state = {
        showMap: false
    };

    onClickHandler = e => {
        const {showMap} = this.state;
        this.setState({
            showMap: !showMap
        })
    }

    render() {
        const {showMap} = this.state;

        return (
            <div className="">


                <header>
                    <h1 onClick={this.onClickHandler}>Hi, I'm Han.</h1>
                </header>

                <article>

                    <h2>About me</h2>

                    <p>
                        Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut
                        labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco
                        laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in
                        voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat
                        non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
                    </p>
                </article>


                <footer>
                    <p>copyright 2016 HW</p>
                </footer>
                {showMap && <MapBox/>}
                {showMap && <Toggle onChange={setActiveOption} />}
                {showMap && <Legend />}


            </div>
        );
    }
}

export default App;
