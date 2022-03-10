import React, { useState, useEffect, useRef } from 'react'
import {  Table, Switch, Button, Modal } from 'antd'
import { DeleteOutlined, EditOutlined, ExclamationCircleOutlined } from '@ant-design/icons'
import UserForm from '../../../components/user-manage/UserForm'
import axios from 'axios'

const { confirm } = Modal


export default function Home() {
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
    const [isUpdateVisible, setisUpdateVisible] = useState(false)
    
    const addForm = useRef(null)
    const updateForm = useRef(null)

    const [refData] = useState({
        id: 'id',
        projectName: '项目名称',
        deadLine: '过期时间(格式:YYYY-MM-DD)'
    })

    useEffect(() => {
        const token = localStorage.getItem('token')
        // console.log('token', token)
        axios.get('http://47.95.1.254/api/projectname?page=1&size=5', { headers: { 'Authorization': token } }).then((res) => {
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
            title: '数据库id',
            dataIndex: 'id',
        },
        {
            title: '项目名称',
            dataIndex: 'projectName',
        },
        {
            title: '过期时间',
            dataIndex: 'deadLine',
        },
        {
            title: "操作",
            render: (item) => {
                return <div>
                    <Button danger shape="circle" icon={<DeleteOutlined />} onClick={() => confirmMethod(item)} disabled={item.default} />

                    <Button type="primary" shape="circle" icon={<EditOutlined />} disabled={item.default} onClick={()=>handleUpdate(item)}/>
                </div>
            }
        }

    ];

    const handleUpdate = (item)=>{
        console.log('item', item)
        setTimeout(()=>{
            setisUpdateVisible(true)
            // console.log('updateForm', updateForm)
            updateForm.current.setFieldsValue(item)
        },0)

        // setcurrent(item)
    }

    const updateFormOK = ()=>{
        const token = localStorage.getItem('token')
        updateForm.current.validateFields().then(value => {
            console.log("value", value)
            setisUpdateVisible(false)

            setdataSource(dataSource.map(item => {
                if(item.id === value.id) {
                    return {
                        ...value
                    }
                }
                return item;
            }))

            axios.patch(`http://47.95.1.254/api/projectname/${value.id}`,{
                projectName: value.projectName,
                deadLine: value.deadLine
            }, { headers: { 'Authorization': token } } )
        })
    }

    const deleteMethod = (item) => {
        const token = localStorage.getItem('token')
        console.log('item', item)
        axios.delete(`http://47.95.1.254/api/projectname/${item.id}`, { headers: { 'Authorization': token } } )
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
        axios.get(`http://47.95.1.254/api/projectname?page=${current}&size=${pageSize}`, { headers: { 'Authorization': token } }).then((res) => {
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
            console.log(value)

            setisAddVisible(false)

            addForm.current.resetFields()
            //post到后端，生成id，再设置 datasource, 方便后面的删除和更新
            axios.post(`http://47.95.1.254/api/projectname`, {
                projectName: value.projectName,
                deadLine: value.deadLine
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
            }}>添加项目</Button>

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

            <Modal
                visible={isUpdateVisible}
                title="更新用户"
                okText="更新"
                cancelText="取消"
                onCancel={() => {
                    setisUpdateVisible(false)
                }}
                onOk={() => 
                    updateFormOK()
                }
            >
                <UserForm
                    props={refData}
                    // regionList={regionList} roleList={roleList}  isUpdateDisabled={isUpdateDisabled} isUpdate={true}
                    ref={updateForm}
                ></UserForm>
            </Modal>


        </div>
    )
}
