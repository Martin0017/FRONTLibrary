import Banner from "../components/Banner";
import axios from "axios";
import { useState, useEffect } from "react";
import DataPreVisual from "@/components/DataPreVisual";
import '../app/globals.css'
import Typography from '@mui/material/Typography';
import DataTable from '../components/DataTable';
import BookColumn from '../data/BookColumn';
import ModalOpen from "../components/ModalOpen";
//import {onFinishTransaction } from "../components/events/OnFinishTransaction";

export default function LoanBooks() {
    const [books, setBooks] = useState([]);
    const [dataSearch, setDataSearch] = useState("");
    const [selectedRow, setSelectedRow] = useState([]);
    const [modalLoan, setModalLoan] = useState(false);

    const onSelectChange = (newSelectedRowKeys, data) => {
        setSelectedRow(data[0]);
    };

    const rowSelection = {
        selectedRow,
        onChange: onSelectChange,
    };

    const setterDataSearch = (value) => setDataSearch(value);
    const setterModalLoan = (value) => setModalLoan(value);

    useEffect(() => {
        async function getAllRequest() {
            await axios.get(`http://localhost:5015/api/books`).then((response) => {
                setBooks(response.data);
                console.log(response.data);
            });
        }
        getAllRequest();
    }, []);

    return (
        <div>
            <Banner />
            <Typography gutterBottom variant="h3" component="div" sx={{ textAlign: 'center', mt: '10%', backgroundColor: "Gray" }}>
                Libros Disponibles
            </Typography>
            <DataTable
                columns={BookColumn(dataSearch)}
                rowSelection={rowSelection}
                setterDataSearch={setterDataSearch}
                data={books}
                setterModalDelete={setterModalLoan}
                SearchLabel={"Busqueda por Titulo, Author o ISBN"}
            />
            <ModalOpen
                modalBegin={modalLoan}
                titleModal={"Desactivar Premio"}
                setterLoan={setterModalLoan}
                design={{ danger: true }}
                okDelete={onFinishTransaction}
                selectedRow={selectedRow}
                isDelete={true}
                form={
                    <p>
                        Esta a punto de desactivar el premio
                        {` ${selectedRow.nombre_pre} `}
                        con ID: {selectedRow.id_pre}{" "}
                    </p>
                }
            />
        </div>
    )
}
