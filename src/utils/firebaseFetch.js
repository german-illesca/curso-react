import { collection, getDocs } from "firebase/firestore";
import { db } from "./firebaseConfig";

const fireStoreFetch = async() => {
    const querySnapshot = await getDocs(collection(db, "productos"));
    // querySnapshot.forEach((doc) => {
    //     console.log(`${doc.id} => ${doc.data()}`);
    // });
    const dataFromFireStore = querySnapshot.docs.map(item => ({
        id: item.id,
        ...item.data()
    }));
    return dataFromFireStore;
}

export default fireStoreFetch;