import React from 'react';
import ReactDOM from 'react-dom';
import logo from './imags/logo.png';

class Search extends React.Component {
    render() {
        return (
            <div>
                Hello world <img src={ logo } />
            </div>
        )
    }
}

ReactDOM.render(
    <Search />,
    document.getElementById('root')
)