import React, { Component } from 'react'

 class Comments extends Component {
    render() {
        return (
            <div>
                {this.props.about} this movie!
            </div>
        )
    }
}

export default Comments;