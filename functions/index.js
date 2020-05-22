const functions = require('firebase-functions');

// // Create and Deploy Your First Cloud Functions
// // https://firebase.google.com/docs/functions/write-firebase-functions
//
// exports.helloWorld = functions.https.onRequest((request, response) => {
//  response.send("Hello from Firebase!");
// });

const createNotification = (notification =>{
    return admin.firestore().collection('notification')
    .add(notification)
    .then(doc => console.log("notification added", doc))
})

const admin = require('firebase-admin');
admin.initializeApp(functions.config().firebase);

exports.projectCreated = functions.firestore
.document('project/{projectId}')
.onCreate(doc => {
    const project = doc.data();
    const notification = {
        content:'Added a new project',
        user: `${project.authfirstName} ${project.authlastName}`,
        time:admin.firestore.FieldValue.serverTimestamp()
    }

    return createNotification(notification)
})


exports.userjoined = functions.auth.user()
.onCreate(user => {
    return admin.firestore().collection('users')
    .doc(user.uid).get().then(doc =>{
        const newUser = doc.data();
        const notification = {
            content:'Joined the party',
            user:`${newUser.firstName} ${newUser.lastName}`,
            time:admin.firestore.FieldValue.serverTimestamp() 
        }
        return createNotification(notification)

    })
})