import { sharedOnCell } from "../utils/TableSettings";

const BookColumn = (dataSearch) => {
  const columns = [
    {
      title: "#",
      dataIndex: `idBook`,
      key: "id_book",
      rowScope: "id",
      defaultSortOrder: "ascend",
      sorter: (a, b) => a.id_book - b.id_book,
    },
    {
      title: "Titulo",
      dataIndex: "title",
      key: "_title",
      onCell: sharedOnCell,
      filteredValue: [dataSearch],
      onFilter: (value, record) => {
        return (
          String(record.title)
            .toLowerCase()
            .includes(value.toLowerCase()) ||
          String(record.id_book)
            .toLowerCase()
            .includes(value.toLowerCase()) ||
          String(record.author)
            .toLowerCase()
            .includes(value.toLowerCase()) ||
          String(record.isbn)
            .toLowerCase()
            .includes(value.toLowerCase())
        );
      },
    },
    {
      title: "Autor",
      dataIndex: "author",
      key: "_author",
      onCell: sharedOnCell,
    },
    {
      title: "ISBN",
      dataIndex: "isbn",
      key: "_isbn",
      onCell: sharedOnCell,
    },
    {
      title: "Disponibles",
      dataIndex: "available",
      key: "_available",
      onCell: sharedOnCell,
    }
  ];
  return columns;
};

export default BookColumn;
