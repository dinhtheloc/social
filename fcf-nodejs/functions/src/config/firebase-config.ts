import firebaseAdmin from 'firebase-admin';
import firebaseClient from 'firebase';
import * as serviceAccount from '../serviceAccountKey.json';

const firebaseConfig = {
  apiKey: "AIzaSyC8lY4NXF7uXA_JELbtABo2VH21Il9bflo",
  authDomain: "cayghe-621b3.firebaseapp.com",
  databaseURL: "https://cayghe-621b3.firebaseio.com",
  projectId: "cayghe-621b3",
  storageBucket: "cayghe-621b3.appspot.com",
  messagingSenderId: "99208877422",
  appId: "1:99208877422:web:24b07d6b917e510f441d7f",
  measurementId: "G-QTJQZ5ZPKM"
};

firebaseClient.initializeApp(firebaseConfig);

const params = {
  type: serviceAccount.type,
  projectId: serviceAccount.project_id,
  privateKeyId: serviceAccount.private_key_id,
  privateKey: serviceAccount.private_key,
  clientEmail: serviceAccount.client_email,
  clientId: serviceAccount.client_id,
  authUri: serviceAccount.auth_uri,
  tokenUri: serviceAccount.token_uri,
  authProviderX509CertUrl: serviceAccount.auth_provider_x509_cert_url,
  clientC509CertUrl: serviceAccount.client_x509_cert_url
}

firebaseAdmin.initializeApp({
  credential: firebaseAdmin.credential.cert(params),
  databaseURL: "https://cayghe-621b3.firebaseio.com"
});

export { firebaseAdmin, firebaseClient };