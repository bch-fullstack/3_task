import React from 'react'

class Result extends React.Component {
    render(){
        const { isEven, color, likes } = this.props // obj destructuring syntax from ES6

        return <div
                style={{ backgroundColor: color }}
                className={'myClass ' + (isEven ? 'even' : 'odd')}
            >
            Total likes: {likes}
        </div>
    }
}

export default Result