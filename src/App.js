import React, {Component} from 'react';
// import logo from './logo.svg';
import logo from './img/stand_up_logo.png';
import './App.css';
import Editor from './Editor';

class App extends Component {
    constructor() {
        super();
    }

    handleSubmit = (e) => {
        console.log(this,e);
    };

    isAnonymous = () => {
        return true;
    };

    render() {
        return (
            <div className="App">
                <header className="App-header">
                    <img src={logo} className="App-logo" alt="logo"/>
                    <h1 className="App-title">Welcome to React</h1>
                    <h2>Stand Up 2 앱을 만들어 봅시다</h2>
                </header>
                <p className="App-intro">
                    To get started, edit <code>src/App.js</code> and save to reload.
                </p>
                <p>
                    이제 여기서 부터 프로젝트는 시작입니다. 로고는 일단은 그냥 둡시다.
                </p>
                <Editor {...this} />
            </div>
        );
    }
}

export default App;
