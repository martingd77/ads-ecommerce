import { useState, useEffect } from "react";
import ItemDetail from "../ItemDetail/ItemDetail";
import mockItem from "../../data/mockItem";

const ItemDetailContainer = () => {

    const [dataItem, setDataItem] = useState({});

    const getItem = () => {
        return new Promise((resolve, reject) => {
            return resolve(mockItem)
        })
    }

    useEffect( () => {
        getItem().then( (item) => {
            setDataItem(item)
           
        }).finally( () => {
            console.log("Fin de la llamada")
        })
    }, [])

    return (
        <>
            <ItemDetail data={dataItem}/>
        </>
    )
}

export default ItemDetailContainer
