import React from 'react';
import ReactDOM from 'react-dom';

class Search extends React.Component {
    render(){
        return (
            <button>Hello JSX</button>
        )
    }
}

ReactDOM.render(
    <Search />,
    document.getElementById('root')
);