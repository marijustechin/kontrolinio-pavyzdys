import axios from "axios"
import {  DONORS_URL } from "./constants"

export const getDonorById = async (id: string)=>{
    const res = await axios.get(DONORS_URL + `/${id}`)
    console.log(res.data)
}