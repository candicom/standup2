import React, {Component} from 'react';
// import logo from './logo.svg';
import logo from './img/stand_up_logo.png';
import './App.css';
import Editor from './Editor';
import FirebaseDao from './FirebaseDao';
import config from './config';

class App extends Component {
    constructor() {
        super();
        this.dao = new FirebaseDao(config);
        this.state = {
            articles: []
        }
    }

    componentWillMount() {
        this.dao.list(25).on('value', (dataSnapshots) => {
            var items = [];
            dataSnapshots.forEach(function(dataSnapshot) {
                var item = dataSnapshot.val();
                item['key'] = dataSnapshot.key;
                console.log(dataSnapshot.val());
                items.push(item);
            });
            if (items && items.length>0) {
                this.setState({
                    articles: items.reverse()
                });
            }
        });
    }

    componentWillUnmount() {
        this.dao.off();
    }

    submit = (article) => {
        if (article) {
            let key = this.dao.newKey();
            let updated = this.dao.update(key, article);
            return updated;
        }
    };

    isAnonymous = () => {
        return true;
    };

    getArticles = () => {
        let lis = [];
        for(let i=0; i<this.state.articles.length; i++) {
            lis.push(<li key={this.state.articles[i].key}>{this.state.articles[i].content}</li>);
        }
        return lis;
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
                <ul>
                    {this.getArticles()}
                </ul>
            </div>
        );
    }
}

export default App;
