import React, { Component } from 'react';
import { Table, Tag } from 'antd';
import { observer, inject } from 'mobx-react';

@inject('modeStore')
@observer
class Mode extends Component {

    constructor(props) {
        super(props)
        this.state = {
            bottom: 'bottomRight',
        }
    }

    render() {

        const { modeStore } = this.props;
        console.log(modeStore)

        const columns = [
            {
                title: 'id',
                dataIndex: 'id',
                key: 'id',
                render: (text) => <a>{text}</a>,
            },
            {
                title: 'name',
                dataIndex: 'name',
                key: 'name',
            },
            {
                title: 'sex',
                dataIndex: 'sex',
                key: 'sex',
            },
            {
                title: 'Action',
                key: 'action',
                render: (text, record) => (
                    <span>
                        <a style={{ marginRight: 16 }}>Invite {record.name}</a>
                        <a>Delete</a>
                    </span>
                ),
            },
        ];

        const data = modeStore.data;
        console.log("data",data)
        return (
            <div>
                <Table
                    columns={columns}
                    pagination={{ position: [this.state.bottom] }}
                    dataSource={data}
                />
            </div>
        );
    }
}

export default Mode;
