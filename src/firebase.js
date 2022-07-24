// import firebase from "./firebase";
// import {onUnmounted, ref} from "vue";
//
//
// const firebaseConfig = {
//   apiKey: "AIzaSyC0UyojyTESd46UFbfODfeJVuFy_rUowog",
//   authDomain: "spidertech-a24b1.firebaseapp.com",
//   projectId: "spidertech-a24b1",
//   storageBucket: "spidertech-a24b1.appspot.com",
//   messagingSenderId: "530760400162",
//   appId: "1:530760400162:web:9dc5fb77899bf523af397b",
//   measurementId: "G-LQJ424Y4MH"
// };
// const firebaseApp = firebase.initializeApp(firebaseConfig);
// const db = firebaseApp.firestore()
// const usersCollection = db.collection('user')
//
//
// export const createUser = user => {
//   return usersCollection.add(user)
// }
//
// export const getUser = async id => {
//   const user = await usersCollection.doc(id).get()
//   return user.exists ? user.data() : null
// }
//
// export const updateUser = (id, user) => {
//   return usersCollection.doc(id).update(user)
// }
//
// export const deleteUser = id => {
//   return usersCollection.doc(id).delete()
// }
//
// export const useLoadUsers = () => {
//   const users = ref([])
//   const close = usersCollection.onSnapshot(snapshot => {
//     users.value = snapshot.docs.map(doc => ({id: doc.id, ...doc.data()}))
//   })
//   onUnmounted(close)
//   return users
// }
//
