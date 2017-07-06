import React, {Component} from 'react';
import {
    BrowserRouter as Router,
    Route,
    Link
} from 'react-router-dom'
class Home extends Component{
    constructor(props){
        super(props);
    }
    render(){
        return(
            <div>
                <ul>
                    <Link to="/login">登陆</Link>
                    <h1>这是home页面</h1>
                </ul>

            </div>
        )
    }
}
export default Home;