import * as firebase from 'firebase'; // * means import all named exports and store them in a variable called firebase.

const config = {
    apiKey: process.env.FIREBASE_API_KEY,
    authDomain: process.env.FIREBASE_AUTH_DOMAIN,
    databaseURL: process.env.FIREBASE_DATABASE_URL,
    projectId: process.env.FIREBASE_PROJECT_ID,
    storageBucket: process.env.FIREBASE_STORAGE_BUCKET,
    messagingSenderId: process.env.FIREBASE_MESSAGING_SENDER_ID
  };

  firebase.initializeApp(config);

  const database = firebase.database();

  export {firebase, database as default};


  // database.ref('expenses').on('child_removed', snapshot => console.log(snapshot.key, snapshot.val()), error => console.log('Something failed', error.message));
  // database.ref('expenses').on('child_changed', snapshot => console.log(snapshot.key, snapshot.val()), error => console.log('Something failed', error.message));
  // database.ref('expenses').on('child_added', snapshot => console.log(snapshot.key, snapshot.val()), error => console.log('Something failed', error.message));

  // database.ref('expenses').on('value', snapshot => {
  //   const expenses = [];
  //   snapshot.forEach(childSnapshot => {
  //     expenses.push({
  //       id: childSnapshot.key,
  //       ...childSnapshot.val()
  //     });
  //   });
  //   console.log(expenses);
  // }, 
  // error => console.log('Something failed', error.message)
  // );
  
  // database.ref('expenses').once('value').then(snapshot => {
  //   const expenses = [];
  //   snapshot.forEach(childSnapshot => {
  //     expenses.push({
  //       id: childSnapshot.key,
  //       ...childSnapshot.val()
  //     });
  //   });
  //   console.log(expenses);
  // });

  // database.ref('expenses').push({
  //   description: 'Flix',
  //   note: 'Whenever I want',
  //   amount: 200,
  //   createdAt: 1
  // });

  // database.ref().set({
  //   name: 'Luis Garcia',
  //   age: 30,
  //   stressLevel: 10,
  //   job: {
  //     title: 'Teacher',
  //     company: 'ASR'
  //   },
  //   location: {
  //       city: 'Reynosa',
  //       country: 'Mexico'
  //   }
  // }).then(() => console.log('Data is saved'))
  //   .catch(e => console.log('This failed', e.message)); // .catch always takes an error as a parameter.

  // database.ref().on('value', snapshot => {
  //   const val = snapshot.val();
  //   console.log(`${val.name} is a ${val.job.title} at ${val.job.company}`);
  // }, 
  // error => console.log('Something failed', error.message)
  // );
 
  // database.ref('name').set('Luis Alberto Garcia')
  // .then(() => console.log('Database updated'))
  // .catch(error => console.log("Did not update: ", error.message));

  // database.ref().update({
  //   'job/title': 'janitor'
  // }).then(() => console.log('Database updated'))
  //   .catch(error => console.log("Did not update: ", error.message));
                          

  // database.ref().update({
  //   stressLevel: 8,
  //   'job/company': 'CIDEB',
  //   'location/city': 'Monterrey'
  // }).then(() => console.log('Database updated'))
  //   .catch(error => console.log("Did not update: ", error.message));

  // database.ref('isSingle').remove()
  // .then(() => console.log("Remove succeeded."))
  // .catch(error => console.log("Remove failed: " + error.message));