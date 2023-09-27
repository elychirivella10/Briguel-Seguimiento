import { Space ,Badge} from "antd"; 

import { Link } from "react-router-dom";

import {ColorColumns} from 'helpers/colors/colors'

export const columns = [
    {
      title: 'Tarea',
      dataIndex: 'title',
      render: (_, record) => (
        <Space size="middle">
          <Link to={`${record.id}`}>{record.title}</Link>
        </Space>
      ),
    },
    {
      title:'Estatus',
      dataIndex:'status',
      render: (_,record) => <Badge color={ColorColumns(record.estimated_date, record.status)} text={record.status} />,
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