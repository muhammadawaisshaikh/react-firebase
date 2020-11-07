import React from 'react';
import '../assets/css/additem.css';

class AddItem extends React.Component {

    constructor(props) {
        super(props);

        this.state = {
            data: [],
            loading: false
        };
    } 

    componentDidMount() {
        console.log("AddItem");

        this.setState({
            loading: true
        });
    }

    render() {
        return(
            <section>
                <div className="add">
                    <div className="container">
                         <div className="row justify-content-center">

                             <div className="col-12 col-md-4 col-lg-4">
                                 <h3>Add Items</h3>

                                 <form>
                                    <div class="form-group mt-4">
                                        <input type="file" class="form-control"/>
                                        <input type="text" class="form-control" placeholder="Description"/>
                                    </div>
                                </form>

                                <div className="pt-4 text-center">
                                    <a className="press" href="#">Save</a>
                                </div>
                             </div>

                        </div>
                    </div>
                </div>
            </section>
        );
    }
}
export default AddItem;