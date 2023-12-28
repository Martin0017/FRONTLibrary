import { Modal } from "antd";

const ModalOpen = (props) => {
    const {
        modalBegin,
        resetValues,
        running,
        titleModal,
        form,
        design,
        isDelete,
        okDelete,
        selectedRow,
    } = props;

    return (
        <Modal
            title={titleModal}
            okButtonProps={design}
            centered
            open={modalBegin}
            onOk={() => {
                if (isDelete) {
                    okDelete(selectedRow);
                    window.location.reload();
                } else {
                    running(false);
                    resetValues();
                }
            }}
            onCancel={() => {
                running(false);
                resetValues();
            }}
        >
            {form}
        </Modal>
    );
};

export default ModalOpen;
