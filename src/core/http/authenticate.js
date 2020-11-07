import firebase from "../firebase/firebase";

class Authenticate { 

    signup(email) {
        firebase.auth().createUserWithEmailAndPassword(email, '12345678')
        .then(res => {
            if (res.additionalUserInfo.isNewUser == true) return 'Signup Sucessfull.';
            else return 'Signup Failed.';
        })
        .catch(error => {
            console.log(error);
        })
    }

    login = async(email, password) => {
        await firebase.auth().signInWithEmailAndPassword(email, password)
        .then(res => {
            if (res.user.uid) {
                return res;
            }
        })
        .catch(error => {
            return error;
        })
    }

}

export default new Authenticate();