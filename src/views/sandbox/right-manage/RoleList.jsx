import React, { useState, useEffect } from 'react'
// import qs from 'qs';
import { Table } from 'antd';
import axios from "axios";

export default function RoleList() {

    const [dataSource, setdataSource] = useState([])

    const [state, setState] = useState({
        pagination: {
            current: 1,
            pageSize: 5,
            total: 0
        },
        loading: false,
    })

    const token = localStorage.getItem('token')
    console.log('token', token)

    useEffect(() => {
        axios.get('http://47.95.1.254/api/superipad?page=1&size=5', { headers: { 'Authorization': token } }).then((res) => {
            console.log('res', res)
            // console.log('res', res.data.data.results)
            // console.log('res.data.data.count', res.data.data.count)
            setdataSource(res.data.data.results)
            setState({ pagination: { ...pagination, total: res.data.data.count } })
        })
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [])

    const columns = [
        {
            title: 'Id',
            dataIndex: 'id',
            sorter: true,
            //   render: name => `${name.first} ${name.last}`,

        },
        {
            title: '序列号',
            dataIndex: 'serial',
            filters: [
                { text: 'Male', value: 'male' },
                { text: 'Female', value: 'female' },
            ],

        },
        {
            title: '归属',
            dataIndex: 'from_where',
        },
    ];


    const handleTableChange = ({current, pageSize}) => {
        setState({ loading: true })
        console.log('current', current)
        console.log('pageSize', pageSize)
        axios.get(`http://47.95.1.254/api/superipad?page=${current}&size=${pageSize}`, { headers: { 'Authorization': token } }).then((res) => {
            console.log('res', res)
            // console.log('res', res.data.data.results)
            // console.log('res.data.data.count', res.data.data.count)
            setdataSource(res.data.data.results)
            setState({ pagination: { ...pagination, total: res.data.data.count, current:current, pageSize:pageSize } })
        })
    }

    const { pagination, loading } = state;

    return (
        <Table
            columns={columns}
            rowKey={record => record.id}
            dataSource={dataSource}
            pagination={pagination}
            loading={loading}
            onChange={handleTableChange}
        />
    )
}
