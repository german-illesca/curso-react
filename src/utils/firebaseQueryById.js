import { collection, getDocs, query, where } from "firebase/firestore";
import { db } from "./firebaseConfig";

const firebaseQueryById = async(id) => {
    const productosRef = collection(db, "productos");
    const q = query(productosRef, where("codigo", "==", id));
    const querySnapshot = await getDocs(q);

    console.log(querySnapshot.docs);
    const dataFromFireStore = querySnapshot.docs.map(item => ({
        id: item.id,
        ...item.data()
    }));
    //console.log(dataFromFireStore);

    return dataFromFireStore[0];
}

export default firebaseQueryById;