import admin from '../config/firebase-service';

export const createUser = async (req, res) => {
  const {
    email,
    password,
  } = req.body;

  const user = await admin.auth().createUser({
    email: email,
    password: password
  })
  // .then(function (userRecord) {
  //   // See the UserRecord reference doc for the contents of userRecord.
  //   console.log('Successfully created new user:', userRecord.uid);
  // })
  // .catch(function (error) {
  //   console.log('Error creating new user:', error);
  // });

  return res.send(user);
}



export const verifyIdToken = async (req, res) => {
  const {
    idToken
  } = req.body;

  admin.auth().verifyIdToken(idToken)
  .then(function(decodedToken) {
    // let uid = decodedToken.uid;
    // ...
    return res.send(decodedToken);
  }).catch(function(error) {
    // Handle error
  });
}




