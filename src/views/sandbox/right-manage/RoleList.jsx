import React, {useState, useEffect} from 'react'
// import qs from 'qs';
import { Table } from 'antd';

export default function RoleList() {

    const [state, setState] = useState({
        data: [],
        pagination: {
            current: 1,
            pageSize: 10,
        },
        loading: false,
    })

    useEffect(() => {

    })

    const columns = [
        {
          title: 'Name',
          dataIndex: 'name',
          sorter: true,
        //   render: name => `${name.first} ${name.last}`,
          width: '20%',
        },
        {
          title: 'Gender',
          dataIndex: 'gender',
          filters: [
            { text: 'Male', value: 'male' },
            { text: 'Female', value: 'female' },
          ],
          width: '20%',
        },
        {
          title: 'Email',
          dataIndex: 'email',
        },
      ];


      const handleTableChange =(item) => {
          console.log('item', item)
      }

    const { data, pagination, loading } = state;

    return (
        <Table
            columns={columns}
            rowKey={record => record.login.uuid}
            dataSource={data}
            pagination={pagination}
            loading={loading}
            onChange={handleTableChange}
        />
    )
}
