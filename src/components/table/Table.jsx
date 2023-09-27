import React from 'react'

import { Table } from 'antd'

const TableComp = ({columns, data, expansible, titleExpansible, pagination}) =>{
    return(
        <div className="box">
            <Table
                columns={columns}
                expandable={{
                expandedRowRender: (record) => (
                    <p
                    style={{
                        margin: 0,
                    }}
                    >
                    <strong>{titleExpansible+':'}</strong>
                    {record[expansible]}
                    </p>
                ),
                rowExpandable: (record) => expansible,
                }}
                dataSource={data}
                rowKey={'id'}
                pagination={pagination}
            />
        </div>  
    )
}
export default TableComp