import { createSlice } from "@reduxjs/toolkit"

const initialState = {
    products:[
        {   
            _id:"product01",
            name:"Honor Play 40 Plus",
            price:23500,
            image:"https://www.gsmarena.com.bd/images/products/Honor-Play-40-Plus.jpg"
        },
        {
            _id:"product02",
            name:"Xiaomi Redmi Pad",
            price:28500,
            image:"https://www.gsmarena.com.bd/images/products/Xiaomi-Redmi-Pad.jpg"
        },
        {
            _id:"product03",
            name:"Vivo Y-22",
            price:25500,
            image:"https://www.gsmarena.com.bd/images/products/Vivo-Y22s.jpg"
        },
        {
            _id:"product04",
            name:"Oppo Watch 3",
            price:26550,
            image:"https://www.gsmarena.com.bd/images/products/Oppo-Watch-3.jpg"
        },
        {
            _id:"product05",
            name:"Honor Watch GS Pro ",
            price:22999,
            image:"https://www.gsmarena.com.bd/images/products/Xiaomi-Redmi-Note-11-Pro1.jpg"
        },
        {
            _id:"product06",
            name:"Huawei Watch GT 3",
            price:29500,
            image:"https://www.gsmarena.com.bd/images/products/Honor-Watch-GS-Pro-Black.jpg"
        },
        
    ],
    boxes:
    [
        {
            _id:"box01",
            name:"Pink Box ",
            price:150,
            image:"https://images.unsplash.com/photo-1549465220-1a8b9238cd48?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=840&q=80"
        },
        {
            _id:"box02",
            name:"Rose Premium Box",
            price:250,
            image:"https://images.unsplash.com/photo-1587052755556-89808205c097?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80"
        },
        {
            _id:"box03",
            name:"Brown Normal Box",
            price:100,
            image:"https://images.unsplash.com/photo-1513201099705-a9746e1e201f?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=774&q=80"
        },
    ],
}

const productsSlice = createSlice({
    name:'products',
    initialState,
    reducers: {}
})

export default productsSlice.reducer