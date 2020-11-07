import firebase from "../firebase/firebase";

class ItemsService{ 

  getAll() {
    let data = [];
    const dbRef = firebase.database().ref('items');

    dbRef.on('value', (snapshot) => {
      const items = snapshot.val();

      for (let id in items) {
        data.push({ id, ...items[id] });
      }

      return items;
    });
  };

  create(data) {
    const dbRef = firebase.database().ref('items');

    dbRef.push(data, function(error) {
      if (error) {
        return "Data could not be saved." + error;
      } else {
        return "Data saved successfully.";
      }
    });
  };

  update(id, data) {
    firebase.database().ref('items/' + id).set({
      description: data.description
    }, function(error) {
        if (error) {
            return "Data could not be updated." + error;
        } else {
            return "Data updated successfully.";
        }
    });
  }

}

export default new ItemsService();