import React, { forwardRef } from 'react'
import {Form,Input} from 'antd'
const UserForm = forwardRef((props,ref) => {

    console.log('ref', ref)

    return (
        <Form
            ref={ref}
            layout="vertical"
        >
            <Form.Item
                name="id"
                label="id"
                hidden="true"
            >
                <Input />
            </Form.Item>
            <Form.Item
                name="projectName"
                label="用户名"
                rules={[{ required: true, message: 'Please input the title of collection!' }]}
            >
                <Input />
            </Form.Item>
            <Form.Item
                name="deadLine"
                label="密码"
                rules={[{ required: true, message: 'Please input the title of collection!' }]}
            >
                <Input />
            </Form.Item>
        </Form>
    )
})
export default UserForm