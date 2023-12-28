import { Button, Row, Col, Table, Input } from "antd";

const DataTable = (props) => {
    const {
        columns,
        rowSelection,
        setterDataSearch,
        data,
        SearchLabel,
        setterLoan
    } = props;

    const { Search } = Input;

    return (
        <Table
            columns={columns}
            dataSource={data}
            bordered
            rowKey={(record) =>
                record.idBook 
            }
            rowSelection={{
                type: "radio",
                ...rowSelection,
            }}
            title={() => (
                <Search
                    placeholder={SearchLabel}
                    allowClear
                    enterButton="Buscar"
                    size="large"
                    onSearch={(value) => {
                        setterDataSearch(value);
                    }}
                />
            )}
            footer={() => (
                <Row>
                    <Col span={11}></Col>
                    <Col span={2}>
                        <Button
                            type="primary"
                            style={{ background: "#3C86F1" }}
                            //icon={<DeleteOutlined />}
                            onClick={() => {
                                setterLoan(true);
                            }}
                        >
                            Solicitar
                        </Button>
                    </Col>
                    <Col span={1}></Col>
                    <Col span={8}></Col>
                </Row>
            )}
        />
    );
};

export default DataTable;