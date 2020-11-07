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
        console.log("Detail >", this.state.data);

        this.setState({
            loading: true
        });
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
                                <h3>{this.state.data.heading}</h3>
                                <p>{this.state.data.text}</p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        );
    }
}
export default Detail;