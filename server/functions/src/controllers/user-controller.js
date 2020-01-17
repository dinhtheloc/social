import firebase from '../config/firebase-service';

export const getListUsers = async (req, res) => {
    console.log("HTTP Get Request");
    var userReference = firebase.database().ref("users/");
    userReference.on("value",
        (snapshot) => {
            console.log(snapshot.val());
            res.json(snapshot.val());
            userReference.off("value");
        },
        (errorObject) => {
            console.log("The read failed: " + errorObject.code);
            res.send("The read failed: " + errorObject.code);
        });
}

export const addUser = async (req, res) => {

    console.log("HTTP Post Request");
    const { fullname, email } = req.body;
    var key = firebase.database().ref().child('users').push().key;

    const user = {};
    user.id = key;
    user.fullname = fullname;
    user.email = email;
    user.role = 'admin';
    user.createDate = new firebase.firestore.Timestamp.now();
    user.updateTime = new firebase.firestore.Timestamp.now();

    console.log(user);

    firebase.database().ref('users/' + key).set(user,
        (error) => {
            if (error) {
                res.send("Data could not be saved." + error);
            }
            else {
                res.send("Data saved successfully.");
            }
        });
}

export const updateUser = async (req, res) => {
    console.log("HTTP Update Request");
    const { userName, email, age } = req.body;

    var referencePath = 'users/' + userName + '/';
    var userReference = firebase.database().ref(referencePath);
    userReference.update(
        {
            userName: userName,
            email: email,
            age: age
        },
        function (error) {
            if (error) {
                res.send("Data could not be updated." + error);
            }
            else {
                res.send("Data updated successfully.");
            }
        });
}


export const deleteUser = async (req, res) => {
    console.log("HTTP Delete Request");
    const { userName } = req.body;

    var referencePath = '/Users/' + userName + '/';
    var userReference = firebase.database().ref(referencePath);
    userReference.remove(
        function (error) {
            if (error) {
                res.send("Data could not be updated." + error);
            }
            else {
                res.send("Data updated successfully.");
            }
        });
}








