import React, {Component} from 'react';
import './Editor.css';
import Profile from './Profile';
import Article from './Article';

class Editor extends Component {

    constructor(props) {
        super(props);
        this.state = {
            embedlyUrl: undefined,
            content: undefined
        }
    }

    onPaste = event => {
        event.clipboardData.items[0].getAsString(text => {
            if (this.detectURL(text)) {
                this.setState({embedlyUrl: text, content: this.state.content});
            }
        });
    };

    editorChange = event => {
        let checkText = this.detectURL(event.currentTarget.textContent);
        if (!this.state.embedlyUrl&&(event.keyCode===32||event.keyCode===13)&&checkText) {
            this.setState({embedlyUrl:checkText,content:event.currentTarget.textContent});
        } else {
            this.setState({content:event.currentTarget.textContent});
        }
    };

    detectURL = text => {
        const urls = text.match(/(https?:\/\/[^\s]+)/g)||text.match(/(www.[^\s]+)/g);
        if(urls && urls.length>0) return urls[0];
        else return undefined;
    };

    hasValue = (value) => {
        if((value && (typeof value) === "string"))
            return (!value)?false:(value.trim()===""?false:true);
        else return false;
    };

    handleSubmit = (e) => {
        let article = Object.assign({}, Article());
        article.user = 'Genji';
        article.content = this.state.content;
        article.urls[0].url = this.state.embedlyUrl;
        this.props.submit(article);
    };

    render() {
        return (
            <div className="wrapEditor">
                <Profile isAnonymous={this.props.isAnonymous}/>
                <div className="textEditor">
                    <div className="innerEdit"
                         contentEditable="true"
                         placeholder="글쓰기..."
                         onPaste={this.onPaste}
                         onKeyUp={this.editorChange}
                    ></div>
                </div>
                <div className="actionBar">
                    <button className="upload"
                            disabled={!this.hasValue(this.state.content)}
                            onClick={this.handleSubmit}>
                        <span>스탠드업!</span>
                    </button>
                </div>
            </div>
        );
    }
}

export default Editor;