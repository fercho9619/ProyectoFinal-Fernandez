import { useEffect } from "react";
import { collection, addDoc } from "firebase/firestore";
import db from "../firebase";
import products from "../data/products.json";

const UploadProducts = () => {
    useEffect(() => {
        const uploadData = async () => {
        const collectionRef = collection(db, "productos");

        try {
            for (const item of products) {
            await addDoc(collectionRef, item);
            console.log(`Producto subido: ${item.title}`);
            }
            alert("✅ Todos los productos se subieron correctamente");
        } catch (error) {
            console.error("Error al subir productos:", error);
        }
        };

        uploadData();
    }, []);

    return <div>Subiendo productos...</div>;
};

export default UploadProducts;
