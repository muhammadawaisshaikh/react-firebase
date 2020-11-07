import React from 'react';
import '../assets/css/allitems.css';
import {Link} from 'react-router-dom'

import image from '../assets/img/m1.jpg';

// Array
let items = [
    {
        image: 'https://cdn.jpegmini.com/user/images/slider_puffin_jpegmini_mobile.jpg',
        heading: 'Description 1',
        text: 'It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to usingmaking it look like readable English',
    },
    {
        image: 'https://images.unsplash.com/photo-1494548162494-384bba4ab999?ixlib=rb-1.2.1&w=1000&q=80',
        heading: 'Description 2',
        text: 'It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to usingmaking it look like readable English',
    },
    {
        image: 'https://www.imago-images.com/imagoextern/bilder/stockfotos/en/imago-images-bird-nature.jpg',
        heading: 'Description 3',
        text: 'It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to usingmaking it look like readable English',
    },
    {
        image: 'https://images-na.ssl-images-amazon.com/images/I/31qu4ixHZ3L.jpg',
        heading: 'Description 4',
        text: 'It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to usingmaking it look like readable English',
    },
    {
        image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcTpmR9acg2WVNaE3UbbT604BSI5NVbxABuiiw&usqp=CAU',
        heading: 'Description 5',
        text: 'It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to usingmaking it look like readable English',
    }
]

class AllItems extends React.Component {

    constructor(props) {
        super(props);

        this.state = {
            data: [],
            loading: false
        };
    } 

    componentDidMount() {
        console.log("All Items");

        this.setState({
            loading: true
        });
    }

    render() {
        return(
            <div className="all">
                <div className="container">
                    <div className="row justify-content-center">

                        <div className="col-12 col-md-12 col-lg-12">
                            <h1 className="text-center">All Items</h1>
                        </div>

                        {
                            items.map(
                                (item, i) => {
                                    return(
                                        <div className="col-12 col-md-12 col-lg-12">
                                            <div className="row main">
                                                
                                                <div className="col-12 col-md-4 col-lg-4">
                                                    <img src={item.image} />
                                                </div>

                                                <div className="col-12 col-md-8 col-lg-8">
                                                    <h3>{item.heading}</h3>
                                                    <p>{item.text}</p>

                                                    <Link to={{ pathname: "/detail", state: item }}>
                                                        <span><i class="fas fa-arrow-right"></i></span>
                                                    </Link>
                                                </div>

                                            </div>
                                        </div>
                                    )
                                }
                            )
                        }

                    </div>
                </div>
            </div>
        );
    }
}
export default AllItems;