function writeUserData(userId, name, email) {
    firebase.database().ref().child('users').push({
      username: name,
      email: email
    });
}
