import { Space } from "antd";

import { Link } from "react-router-dom";

export const columns = [
    {
      title: 'Tarea',
      dataIndex: 'title',
      render: (_, record) => (
        <Space size="middle">
          <Link to={`/dep/area/${record.id}`}>{record.title}</Link>
        </Space>
      ),
    },
    {
      title:'Estatus',
      dataIndex:'status'
    },
    {
      title:'Fecha inicial',
      dataIndex:'initial_date'
    },
    {
      title:'Fecha estimado final',
      dataIndex:'estimated_date'
    },
    {
      title:'Responsable',
      dataIndex:'direccion'
    }
  ];