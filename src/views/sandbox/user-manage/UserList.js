import React, { useState, useEffect, useRef } from 'react'
import {  Table, Switch, Button, Modal } from 'antd'
import { DeleteOutlined, EditOutlined, ExclamationCircleOutlined } from '@ant-design/icons'
import UserForm from '../../../components/user-manage/UserForm'
import axios from 'axios'

const { confirm } = Modal



export default function UserList() {
    const [dataSource, setdataSource] = useState([])

    const [state, setState] = useState({
        pagination: {
            current: 1,
            pageSize: 5,
            total: 0
        },
        loading: false,
    })

    const [isAddVisible ,setisAddVisible] = useState(false)
    
    const addForm = useRef(null)

    const [refData] = useState({
        id: 'id',
        serial: '设备码',
        from_where: '归属'
    })

    useEffect(() => {
        const token = localStorage.getItem('token')
        // console.log('token', token)
        axios.get('http://47.95.1.254/api/superipad?page=1&size=5', { headers: { 'Authorization': token } }).then((res) => {
            // console.log('res', res)
            // console.log('res', res.data.data.results)
            // console.log('res.data.data.count', res.data.data.count)
            setdataSource(res.data.data.results)
            setState({ pagination: { ...pagination, total: res.data.data.count } })
        })
        // eslint-disable-next-line react-hooks/exhaustive-deps
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
            dataIndex: 'from_where',
        },
        {
            title: "超级设备",
            dataIndex: 'superIpad',
            render: (superIpad, item) => {
                // console.log('superiPad----', superIpad)
                // console.log('item', item)
                return <div>
                    <Switch checked={superIpad} 
                    onChange={()=>handleChange(item)}
                    ></Switch>
                    <Button danger shape="circle" icon={<DeleteOutlined />} onClick={() => confirmMethod(item)} disabled={item.default} />
                </div>
            }
        },

    ];

    const handleChange = (item)=>{
        const token = localStorage.getItem('token')
        console.log(item)
        // console.log('item.superIpad', item.superIpad)
        item.superIpad = !item.superIpad
        setdataSource([...dataSource])

        axios.patch(`http://47.95.1.254/api/superipad/${item.id}`,{
            ...item
        }, { headers: { 'Authorization': token } })
    }

    const deleteMethod = (item) => {
        const token = localStorage.getItem('token')
        console.log('item', item)
        axios.delete(`http://47.95.1.254/api/superipad/${item.id}`, { headers: { 'Authorization': token } } )
        handleTableChange(state.pagination)
    }

    const confirmMethod = (item) => {
        confirm({
            title: '你确定要删除?',
            icon: <ExclamationCircleOutlined />,
            // content: 'Some descriptions',
            onOk() {
                //   console.log('OK');
                deleteMethod(item)
            },
            onCancel() {
                //   console.log('Cancel');
            },
        });

    }

    const handleTableChange = ({current, pageSize}) => {
        const token = localStorage.getItem('token')
        setState({ loading: true })
        console.log('current', current)
        console.log('pageSize', pageSize)
        axios.get(`http://47.95.1.254/api/superipad?page=${current}&size=${pageSize}`, { headers: { 'Authorization': token } }).then((res) => {
            console.log('res', res)
            // console.log('res', res.data.data.results)
            // console.log('res.data.data.count', res.data.data.count)
            setdataSource(res.data.data.results)
            setState({ loading: false, pagination: { ...pagination, total: res.data.data.count, current:current, pageSize:pageSize } })
        })
    }

    // 添加
    const addFormOK = () => {
        const token = localStorage.getItem('token')

        console.log('addForm.current', addForm.current)

        addForm.current.validateFields().then(value => {
            // console.log(value)

            setisAddVisible(false)

            addForm.current.resetFields()
            //post到后端，生成id，再设置 datasource, 方便后面的删除和更新
            axios.post(`http://47.95.1.254/api/superipad`, {
                serial: value.serial,
                from_where: value.from_where
            }, { headers: { 'Authorization': token } } ).then(res=>{
                console.log(res)
            })
        }).catch(err => {
            console.log(err)
        })
    }




    const { pagination, loading } = state;

    return (
        <div>

            <Button type="primary" onClick={() => {
                setisAddVisible(true)
            }}>添加设备</Button>

            <Table 
                dataSource={dataSource} 
                columns={columns}
                pagination={pagination}
                rowKey={item => item.id}
                loading={loading}
                onChange={handleTableChange}
            />

            <Modal
                visible={isAddVisible}
                title="添加项目"
                okText="确定"
                cancelText="取消"
                onCancel={() => {
                    setisAddVisible(false)
                }}
                onOk={() => 
                    addFormOK()
                }
            >
                <UserForm 
                    props={refData}
                    ref={addForm}
                ></UserForm>
            </Modal>


        </div>
    )
}
