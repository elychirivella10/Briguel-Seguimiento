import React from 'react'

import { Card } from 'antd';
import { EditOutlined} from '@ant-design/icons';

import { useNavigate } from 'react-router-dom';

const { Meta } = Card;

const CardAntd = ({title, description, id}) =>{
    let navigate = useNavigate();
    return(
            <Card
                
                bordered={false}
                className='is-pointer'
                style={{
                width: 300,
                }}
                actions={[
                    <EditOutlined key="edit" onClick={()=>(
                        navigate(`edit/${id}`)
                    )}/>,
                  ]}
            >
            <Meta
                onClick={()=>(
                    navigate(`${id}`)
                )}
                title={title}
                description={description}
            />
            </Card>
    )
}
export default CardAntd