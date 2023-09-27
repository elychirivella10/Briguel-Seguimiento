import { Space } from "antd";

import { Link } from "react-router-dom";

import { rutaAxios } from "variablesGoblales";


export const columns = [
    {
      title: 'Notas',
      dataIndex: 'note',
      key:'id'
    },
    {
      title: 'Archivo',
      key: 'action',
      render: (_, record) => {
        
        if (record.id_file) {
          return(
            
              <Space size="middle">
                <a href={`${rutaAxios}notes/file/${record.id_file}`} target="_blank">Descarga</a>
              </Space>
            
          )
        }else{
          return(
            <Space size="middle">
              <span>No posee archivo</span>
            </Space> 
          )
        }
        
      },
    },
    {
      title: 'Editar',
      key: 'action',
      render: (_, record) => (
        
          <Space size="middle">
            <Link to={'/notes/edit/'+record.id}>Editar</Link>
          </Space>
        
      ),
    },
    
  ];