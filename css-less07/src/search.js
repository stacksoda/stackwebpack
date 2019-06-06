import React from 'react';
import ReactDOM from 'react-dom';
import './search.less';

class Search extends React.Component {
    render() {
        return (
            <div className="soda">
                Hello World!
            </div>
        )
    }
}

ReactDOM.render(<Search />, document.getElementById('root'));
