import firebase from 'firebase/app';
import 'firebase/firestore';

import config from '../config/firebase';

// eslint-disable-next-line import/no-mutable-exports
try {
  firebase.initializeApp(config);
} catch (error) {
  console.error(error);
}

const database = firebase.firestore();
const publicCollection = database.collection('public');

export {
  firebase, database, publicCollection,
};
