import axios from "axios";
import { BASE_PATH_DB } from "../utils/config";

async function create(data, ROOTPATH) {
    await axios.post(`${BASE_PATH_DB}/${ROOTPATH}`, data).then((response) => {
        console.log("Error del servidor", response.data);
    });
}

async function update(data, id, ROOTPATH) {
    await axios
        .put(`${BASE_PATH_DB}/${ROOTPATH}/${id}`, data)
        .then((response) => {
            console.log("Error del servidor", response.data);
        });
}

async function remove(id, ROOTPATH) {
    await axios.delete(`${BASE_PATH_DB}/${ROOTPATH}/${id}`).then((response) => {
        console.log("Error del servidor", response.data);
    });
}

export { create, update, remove };