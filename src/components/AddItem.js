import React from 'react';
import '../assets/css/additem.css';

import firebase from '../core/firebase/firebase';

class AddItem extends React.Component {

    constructor(props) {
        super(props);

        this.state = {
            data: [],
            loading: true,
            description: '',
            imageAsFile: '',
            imageAsUrl: ''
        };
    } 

    componentDidMount() {
        console.log("AddItem");
    }

    handleChange = (event) => {
        this.setState({ [event.target.name]: event.target.value });
        // console.log(this.state);
      }

    addItem = () => {
        const itemRef = firebase.database().ref('items');
  
        const item = {
            image: this.state.imageAsUrl,
            description: this.state.description
        };
        
        // storing data as a new record
        itemRef.push(item, function(error) {
        if (error) {
            alert("Item could not be created." + error);
        } else {
            alert("Item Created successfully.");
            this.setState({ loading: true });
        }
        });
        
        this.props.history.push('/allItems');
    }

    handleImageAsFile = (e) => {
        const image = e.target.files[0]
        this.setState({ imageAsFile: image });

        console.log(e.target.files[0]);
        console.log(this.state.imageAsFile);
    }

    handleFireBaseUpload = e => {
        e.preventDefault();

        this.setState({ loading: false });
        const storage = firebase.storage();
        const uploadTask = storage.ref(`/images/${this.state.imageAsFile.name}`).put(this.state.imageAsFile);

        uploadTask.on('state_changed', 
            (snapShot) => {
                //takes a snap shot of the process as it is happening
                // console.log(snapShot)
            }, (err) => {
                console.log(err)
            }, () => {
            // gets the functions from storage refences the image storage in firebase by the children
            // gets the download url then sets the image from firebase as the value for the imgUrl key:
            storage.ref('images').child(this.state.imageAsFile.name).getDownloadURL()
            .then(fireBaseUrl => {
                this.setState({ imageAsUrl: fireBaseUrl });
                // console.log(this.state.imageAsUrl);

                // add item in database with imgUrl
                this.addItem();
            })
        })
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
                                        <input type="file" class="form-control" onChange={(e) => { this.handleImageAsFile(e) }} />
                                        <input type="text" name="description" class="form-control" placeholder="Description" onChange={(e) => { this.handleChange(e) }} />
                                    </div>
                                </form>

                                <div className="pt-4 text-center">
                                    {
                                        this.state.loading ?
                                        <a className="press" onClick={(e) => { this.handleFireBaseUpload(e) }}>Save</a>
                                        :
                                        <p>Uploading Data ...</p>
                                    }
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