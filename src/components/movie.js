
import React, { Component } from 'react'
import Comments from './comments';

import {Card,Button} from 'react-bootstrap'

class movie extends Component {
    render() {
        const {name, year, rating,image} = this.props;
        return (
            <div>
                <Card style={{ width: '18rem' }}>
                        {/* Image - Define src! */}
                <Card.Img variant="top" src= {image} />

                            {/* card Body =========================================== */}
                <Card.Body>
                    <Card.Title>{name}</Card.Title>
                    <Card.Text> Year Released:
                    {year}
                    </Card.Text>

                    <Button variant= "primary"> {rating}</Button>

               {/* Add your comment component under the button inside the card */}
               <Comments about="I Like"/>
                </Card.Body>
                </Card>
                            </div>
        )
    }
}
export default movie;