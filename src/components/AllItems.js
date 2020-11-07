import React from 'react';
import '../assets/css/allitems.css';
import {Link} from 'react-router-dom'
import firebase from '../core/firebase/firebase';

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
        this.getAll();
    }

    getAll = () => {
        this.setState({ loading: true });

        let data = [];
        const dbRef = firebase.database().ref('items');
    
        dbRef.on('value', (snapshot) => {
          const items = snapshot.val();
    
          for (let id in items) {
            data.push({ id, ...items[id] });
          }

          this.setState({ data: data });
            this.setState({ loading: false });
        });

        console.log(this.state.data);
      };

    render() {
        return(
            <div className="all">
                <div className="container">
                    <div className="row justify-content-center">

                        <div className="col-12 col-md-12 col-lg-12">
                            <h1 className="text-center">All Items</h1>
                        </div>

                        {
                            !this.state.loading ?
                            this.state.data && this.state.data.map(
                                (item, key) => {
                                    return(
                                        <div className="col-12 col-md-12 col-lg-12" key={key}>
                                            <div className="row main">
                                                
                                                <div className="col-12 col-md-2 col-lg-2">
                                                    <img src={item.image} />
                                                </div>

                                                <div className="col-12 col-md-10 col-lg-10 bg-light p-4 rounded">
                                                    <h3 className="text-capitalize">{this.state.data.description}</h3>
                                                    <p>{this.state.data.description}</p>

                                                    <Link to={{ pathname: "/detail", state: item }}>
                                                        <span><i className="fas fa-arrow-right"></i></span>
                                                    </Link>
                                                </div>

                                            </div>
                                        </div>
                                    )
                                }
                            )
                            :
                            <p className="py-5">Loading ...</p>
                        }

                    </div>
                </div>
            </div>
        );
    }
}
export default AllItems;