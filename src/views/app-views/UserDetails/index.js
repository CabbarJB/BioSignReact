import React, {Component} from 'react';

import {Card, Select,Form, Row, Col, Image, Checkbox} from 'antd';
// import {Card, Table, Select, Input, Button, Badge, Menu, Modal, Form, message, Upload, Spin, Row, Col, Image, Checkbox} from 'antd';
// import Flex from 'components/shared-components/Flex'
// import AvatarStatus from 'components/shared-components/AvatarStatus';
// import EllipsisDropdown from 'components/shared-components/EllipsisDropdown';
import * as css from './UserDetails.module.css'
const {Option} = Select
class UserDetails extends Component {
    render() {
        return (
            <div>
                <Card>
                    <h1 className={'pb-3'} style={{fontSize: "24px"}}>Ümumi Məlumat</h1>
                <Row className={'justify-content-center'}>
                    <Col span={4}>
                        <div className={'w-100'} style={{borderRadius: '10px', overflow: 'hidden'}}>
                            <img className={'w-100'} style={{maxHeight: '100%'}} src="https://www.pngitem.com/pimgs/m/30-307416_profile-icon-png-image-free-download-searchpng-employee.png" alt=""/>
                        </div>
                    </Col>
                    <Col span={20}>
                        <div className={'px-4'}>
                            <div className="form-group mb-3">
                                <label style={{fontSize: '16px', fontWeight: 'bold'}}>Full Name</label>
                                <p className={`mb-2 ${css.userField}`}>
                                    Tural Xasiyev
                                </p>
                            </div>
                            <div className="form-group mb-3">
                                <label style={{fontSize: '16px', fontWeight: 'bold'}}>FIN Kod</label>
                                <p className={`mb-2 ${css.userField}`}>
                                2sa1v1
                                </p>
                            </div>
                            <div className="form-group mb-3">
                                <label style={{fontSize: '16px', fontWeight: 'bold'}}>Sənəd nömrəsi</label>
                                <p className={`mb-2 ${css.userField}`}>
                                1234531512351
                                </p>
                            </div>
                        </div>
                    </Col>
                </Row>
                </Card>
                <Card>
                    <h1 className={'pb-3'} style={{fontSize: "24px"}}>Digər şəkillər</h1>
                    <Row>
                        <Col className={'px-2 position-relative'} span={3}>
                            <div  style={{cursor: 'pointer', borderRadius:'10px', overflow: 'hidden'}}>
                                <Image width={'100%'} src={'https://upload.wikimedia.org/wikipedia/commons/7/7c/Profile_avatar_placeholder_large.png'} />
                            </div>
                            <Checkbox className={'position-absolute'} style={{zIndex: 9, top: '15px', right: '20px'}}/>
                        </Col>
                        <Col className={'px-2'} span={3}>
                            <div  style={{cursor: 'pointer', borderRadius:'10px', overflow: 'hidden'}}>
                                <Image width={'100%'} src={'https://upload.wikimedia.org/wikipedia/commons/7/7c/Profile_avatar_placeholder_large.png'} />
                            </div>
                            <Checkbox className={'position-absolute'} style={{zIndex: 9, top: '15px', right: '20px'}}/>
                        </Col>
                    </Row>
                </Card>
                <Card>
                    <Form layout={'vertical'}>
                        <Form.Item label={'Status'}>
                            <Select defaultValue="0" style={{width: '200px'}}>
                                <Option value="0" disabled>--</Option>
                                <Option value="new">Yeni</Option>
                                <Option value="approved">Təsdiqləndi</Option>
                                <Option value="rejected">Ləğv edildi</Option>
                            </Select>
                        </Form.Item>
                    </Form>

                </Card>
            </div>
        );
    }
}

export default UserDetails;