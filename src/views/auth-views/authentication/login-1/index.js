import React from 'react'
import LoginForm from '../../components/LoginForm'
import { Card, Row, Col } from "antd";
import { useSelector } from 'react-redux';
import ESignLogin from "../../components/ESignLogin";

const backgroundStyle = {
	backgroundImage: '',
	backgroundRepeat: 'no-repeat',
	backgroundSize: 'cover'
}

const LoginOne = props => {
	const theme = useSelector(state => state.theme.currentTheme)
	return (
		<div className="h-100">
			<div className="container d-flex flex-column justify-content-center h-100">
				<Row justify="center">
					<Col xs={20} sm={20} md={20} lg={9}>
						<Card >
							<div className="my-4">
								<Row justify="center">
									<Col xs={24} sm={24} md={20} lg={20}>
										 <ESignLogin {...props}/>
									</Col>
								</Row>
							</div>
						</Card>
					</Col>
				</Row>
			</div>
		</div>
	)
}

export default LoginOne
