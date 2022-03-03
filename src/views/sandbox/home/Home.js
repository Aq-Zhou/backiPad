import React, { useState, useEffect, useRef } from 'react'
import { Button, Table, Modal } from 'antd'
import axios from 'axios'
import { DeleteOutlined, EditOutlined, ExclamationCircleOutlined } from '@ant-design/icons'
import UserForm from '../../../components/user-manage/UserForm'
const { confirm } = Modal

export default function Home() {
    // 保存数据
    const [dataSource, setdataSource] = useState([])
    // 控制添加用户
    const [isAddVisible ,setisAddVisible] = useState(false)
    // 控制修改
    const [isUpdateVisible, setisUpdateVisible] = useState(false)
    const [isUpdateDisabled, setisUpdateDisabled] = useState(false)


    // 项目名
    // const [projectName, setProjectName] = useState()
    // 过期时间
    // const [deadLine, setDeadLine] = useState()

    const addForm = useRef(null)
    const updateForm = useRef(null)

    useEffect(() => {
        axios.get("http://localhost:8000/projectsName").then(res => {
            const list = res.data
            console.log('list', list)
            setdataSource(list)
        })
    }, [])

    const columns = [
        {
            title: 'Id号',
            dataIndex: 'id',
            render: (id) => {
                return <b>{id}</b>
            }
        },
        {
            title: '项目名称',
            dataIndex: 'projectName',
        },
        {
            title: "过期时间",
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
    //删除
    const deleteMethod = (item) => {
        // console.log(item)
        // 当前页面同步状态 + 后端同步

        setdataSource(dataSource.filter(data=>data.id!==item.id))

        axios.delete(`http://localhost:8000/projectsName/${item.id}`)
    }

    // 添加
    const addFormOK = () => {

        console.log('addForm.current', addForm.current)

        addForm.current.validateFields().then(value => {
            // console.log(value)

            setisAddVisible(false)

            addForm.current.resetFields()
            //post到后端，生成id，再设置 datasource, 方便后面的删除和更新
            axios.post(`http://localhost:8000/projectsName`, {
                ...value
            }).then(res=>{
                console.log(res.data)
                setdataSource([...dataSource,{
                    ...res.data,
                }])
            })
        }).catch(err => {
            console.log(err)
        })
    }

    const updateFormOK = ()=>{
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
            setisUpdateDisabled(!isUpdateDisabled)

            axios.patch(`http://localhost:8000/projectsName/${value.id}`,value)
        })
    }


    return (
        <div>
            <Button type="primary" onClick={() => {
                setisAddVisible(true)
            }}>添加用户</Button>


            <Table dataSource={dataSource} columns={columns}
                pagination={{
                    pageSize: 5
                }}
                rowKey={item => item.id}
            />

            <Modal
                visible={isAddVisible}
                title="添加用户"
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
                    setisUpdateDisabled(!isUpdateDisabled)
                }}
                onOk={() => 
                    updateFormOK()
                }
            >
                <UserForm
                    // regionList={regionList} roleList={roleList}  isUpdateDisabled={isUpdateDisabled} isUpdate={true}
                    ref={updateForm}
                ></UserForm>
            </Modal>

        </div>
    )
}
