import React from 'react';
import '../assets/css/detail.css';
import {Link} from 'react-router-dom'

class Detail extends React.Component {

    constructor(props) {
        super(props);

        this.state = {
            data: props.location.state,
            loading: false
        };
    } 

    componentDidMount() {
    }

    render() {
        return(
            <section>
                <div className="detail">
                    <div className="container">
                        <div className="row main py-5">        
                            <div className="col-12 col-md-4 col-lg-4">
                                <img src={this.state.data.image} />
                            </div>
        
                            <div className="col-12 col-md-8 col-lg-8">
                                <Link className="badge badge-pill badge-light px-3 py-2 back-btn" to="/allItems">
                                    <i class="fas fa-chevron-left border-0 p-0"></i>
                                    <span className="pl-2">Back</span>
                                </Link>

                                <h3 className="text-capitalize">{this.state.data.description ? this.state.data.description : 'No Description'}</h3>
                                <p>{this.state.data.description ? this.state.data.description : 'No Description'}</p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        );
    }
}
export default Detail;