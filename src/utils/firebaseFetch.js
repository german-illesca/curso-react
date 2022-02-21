import { collection, doc, getDocs, query, setDoc, where } from "firebase/firestore";
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

export const firebaseQueryById = async(id) => {
    const productosRef = collection(db, "productos");
    const q = query(productosRef, where("codigo", "==", id));
    const querySnapshot = await getDocs(q);

    //console.log(querySnapshot.docs);
    const dataFromFireStore = querySnapshot.docs.map(item => ({
        id: item.id,
        ...item.data()
    }));
    //console.log(dataFromFireStore);

    return dataFromFireStore[0];
}

export const saveOrderInFirebase = async(order) => {
    const newOrderRef = doc(collection(db, "orders"));
    await setDoc(newOrderRef, order);
    return newOrderRef;
}

export default fireStoreFetch;