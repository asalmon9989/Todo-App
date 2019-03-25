import firebase from '@firebase/app';
import '@firebase/database';

export const tasksFetch = () => {
    return (dispatch) => {
        firebase.database().ref('/taskList')
        .on('value', snapshot => {
            _.map(snapshot.val(), (value, uid) => console.log(`UID: ${uid}, ${JSON.stringify(value)}`));
        })
    }
}