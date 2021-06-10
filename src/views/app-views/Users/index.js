import React, {Component} from 'react';
// import * as css from './users.module.css'
// import {Card, Table, Select, Input, Button, Badge, Menu, Modal, Form, message, Upload, Pagination, Spin} from 'antd';
import {Card, Table, Badge, Pagination, Spin} from 'antd';
import Flex from 'components/shared-components/Flex'
import AvatarStatus from 'components/shared-components/AvatarStatus';
import EllipsisDropdown from 'components/shared-components/EllipsisDropdown';
// import {
//     DeleteOutlined,
//     SearchOutlined,
//     PlusCircleOutlined,
//     EditOutlined,
//     LoadingOutlined,
//     PlusOutlined,
// } from '@ant-design/icons';
import {
    LoadingOutlined,
} from '@ant-design/icons';

class Users extends Component {
    getStockStatus = isActive => {
        if (isActive) {
            return <><Badge status="success"/><span>Aktiv</span></>
        }
        if (!isActive) {
            return <><Badge status="error"/><span>Deaktiv</span></>
        }
        return null;
    }
    spinIcon = <LoadingOutlined/>
    tempData = [
        {
            id: 1,
            name: 'Jabbar Hasanov',
            department: 'IHS',
            productOwner: 'Jabbar',
            isActive : true,
        }
    ]
    tableColumns = [
        {
            title: 'ID',
            dataIndex: 'id'
        },
        {
            title: 'Ad',
            dataIndex: 'name',
            render: (_, record) => (
                <div className="d-flex">
                    <AvatarStatus size={60} type="square" src={'https://www.pngitem.com/pimgs/m/30-307416_profile-icon-png-image-free-download-searchpng-employee.png'} name={record.name}/>
                </div>
            ),
        },
        {
            title: 'Şöbə',
            dataIndex: 'department',
        },
        {
            title: 'Məsul şəxs',
            dataIndex: 'productOwner',
        },
        {
            title: 'Status',
            dataIndex: 'isActive',
            render: isActive => (
                <Flex alignItems="center">{this.getStockStatus(isActive)}</Flex>
            )
            // sorter: (a, b) => utils.antdTableSorter(a, b, '')
        },
        {
            title: '',
            dataIndex: 'actions',
            render: (_, elm) => (
                <div className="text-right">
                    <EllipsisDropdown/>
                </div>
            )
        }
    ];

    render() {
        console.log(this.props)
        return (
            <div>
                <Spin indicator={this.spinIcon} spinning={false} size={'large'}>
                    <Card>
                        {/*<Flex alignItems="center" justifyContent="between" mobileFlex={false}>*/}
                        {/*    <div>*/}
                        {/*        <Button type="primary" icon={<PlusCircleOutlined/>} block>*/}
                        {/*            Əlavə et*/}
                        {/*        </Button>*/}
                        {/*    </div>*/}
                        {/*</Flex>*/}
                        <div className="table-responsive">
                            <Table pagination={false} columns={this.tableColumns} dataSource={this.tempData} rowKey='id'/>
                            <div style={{padding: '20px 0', display: 'flex', justifyContent: 'center'}}>
                                <Pagination showSizeChanger={false}
                                            pageSize={5}
                                            total={20}/>
                            </div>
                        </div>
                    </Card>
                </Spin>

            </div>
        );
    }
}

export default Users;