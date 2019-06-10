import React from 'react';
import ReactDOM from 'react-dom';
import logo from './imags/logo.png';
import './search.less';
// import './fonts/iconfont.css';


class Search extends React.Component {
    render() {
        return (
            <div>
                Hello world   <img src={ logo } /><i class="iconfont icon-icons-humidity"></i>
            </div>
        )
    }
}

ReactDOM.render(
    <Search />,
    document.getElementById('root')
)