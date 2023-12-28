import React from "react";
import { SmileOutlined } from "@ant-design/icons";
import { create, update, remove } from "../../services/crud";
import { notification } from "antd";

const onFinishTransaction = (values) => {
    const updaterewardObject = {};

    updaterewardObject.nombre_pre = values.nombre;
    updaterewardObject.descripcion_pre = values.descripcion;
    updaterewardObject.puntos_rq_pre = values.puntos;
    create(updaterewardObject, "reward");
    window.location.reload();

    notification.success({
        message: "Premio creado",
        description: `Se ha almacenado!`,
        icon: <SmileOutlined style={{ color: "#108ee9" }} />,
    });
};

const onFinishUpdate = (values, selectedRow) => {
    const updateRewardObject = {};
    updateRewardObject.nombre_pre = values.nombre;
    updateRewardObject.descripcion_pre = values.descripcion;
    updateRewardObject.puntos_rq_pre = values.puntos;
    update(updateRewardObject, selectedRow.id_pre, "reward");
    notification.success({
        message: "Premio actualizado",
        description: `Los datos han sido actualizados`,
        icon: <SmileOutlined style={{ color: "#108ee9" }} />,
    });
    window.location.reload();
};

const onOkDelete = (selectedRow) => {
    remove(selectedRow.id_pre, "reward");
    notification.warning({
        message: "Usuario desactivado",
        description: `Los datos han sido eliminados`,
    });
    window.location.reload();
};

export { onFinishTransaction, onFinishUpdate, onOkDelete };