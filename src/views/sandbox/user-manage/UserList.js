import React, { useState, useEffect } from 'react'
import {  Table, Switch } from 'antd'
import axios from 'axios'


export default function UserList() {
    const [dataSource, setdataSource] = useState([])



    useEffect(() => {
        axios.get("http://localhost:8000/superIpad").then(res => {
            const list = res.data
            setdataSource(list)
        })
    }, [])

    const columns = [
        {
            title: '数据库id',
            dataIndex: 'id',
        },
        {
            title: '设备码',
            dataIndex: 'serial',
        },
        {
            title: '归属',
            dataIndex: 'from',
        },
        {
            title: "",
            dataIndex: 'superiPad',
            render: (superiPad, item) => {
                // console.log('superiPad----', superiPad)
                // console.log('item', item)
                return <Switch checked={superiPad} 
                    onChange={()=>handleChange(item)}
                ></Switch>
            }
        },

    ];

    const handleChange = (item)=>{
        console.log(item)
        item.superiPad = !item.superiPad
        setdataSource([...dataSource])

        axios.patch(`http://localhost:8000/superIpad/${item.id}`,{
            superiPad:item.superiPad
        })
    }




    return (
        <div>

            <Table dataSource={dataSource} columns={columns}
                pagination={{
                    pageSize: 5
                }}
                rowKey={item => item.serial}
            />


        </div>
    )
}
