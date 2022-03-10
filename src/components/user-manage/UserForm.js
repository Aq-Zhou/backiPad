import React, { forwardRef } from 'react'
import {Form,Input} from 'antd'
const UserForm = forwardRef((props,ref) => {

    const keys = Object.keys(props.props)

    return (
        <Form
            ref={ref}
            layout="vertical"
        >
            <Form.Item
                name={keys[0]}
                label={props.props[`${keys[0]}`]}
                hidden="true"
            >
                <Input />
            </Form.Item>
            <Form.Item
                 name={keys[1]}
                 label={props.props[`${keys[1]}`]}
                rules={[{ required: true, message: 'Please input the title of collection!' }]}
            >
                <Input />
            </Form.Item>
            <Form.Item
                name={keys[2]}
                label={props.props[`${keys[2]}`]}
                rules={[{ required: true, message: 'Please input the title of collection!' }]}
            >
                <Input />
            </Form.Item>
        </Form>
    )
})
export default UserForm