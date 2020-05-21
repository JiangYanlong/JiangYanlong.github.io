import React, { Component } from 'react';
import { Table,Spin,Menu, Dropdown,message } from 'antd';
import { observer, inject } from 'mobx-react';
import { toJS } from 'mobx';
import {
    MailOutlined,
    SettingOutlined
} from '@ant-design/icons';

@inject('modeStore')
@observer
class Mode extends Component {

    // 页面加载 执行获取数据方法
    componentDidMount() {
        this.init();
    }

    // 引入store中获取数据方法
    init = () => {
        const { init,init_column } = this.props.modeStore;
        init_column();
        init();
    }

    onClick = () => {
        message.loading('查询中....',2.5)
        
        .then(this.init())
        .then(()=> message.info('查询完成...'),1.5);
    }

    render() {
        const { modeStore } = this.props;
        const { data,bottom,loading,columns } = modeStore;
        const menu = (
            <Menu>
              <Menu.Item key="mail" icon={<MailOutlined />} onClick={this.onClick}>查询</Menu.Item>
              <Menu.Item key="2" icon={<SettingOutlined />}>系统地址</Menu.Item>
            </Menu>
          );
        return (
            <Dropdown overlay={menu} trigger={['contextMenu']}>
                <Spin spinning={loading} delay={500} tip="Loading...">
                    <Table
                        columns={toJS(columns)}
                        pagination={{ position: [bottom] }}
                        dataSource={data}
                    />
                </Spin>
            </Dropdown>
        );
    }
}

export default Mode;
