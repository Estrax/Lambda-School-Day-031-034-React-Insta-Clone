import React, { useState } from 'react';
import styled from 'styled-components';

const LoginPage = styled.div`
	background: black;
	margin: 0 auto;
	width: 100vw;
	height: 100vh;
	display: flex;
	justify-content: center;
	align-items: center;
`;

const LoginCard = styled.div`
	width: 400px;
	// background: red;
	display: block;
`;

const LoginTitle = styled.h1`
	width: 100%;
	text-align: center;
	color: white;
	font-family: 'Grand Hotel';
    font-size: 48px !important;
`;

const Form = styled.form`
	width: 100%;
`;

const Input = styled.input`
	width: 100%;
	margin: .5rem 0;
	background: none;
	color: white;
	border: 1px solid white;
	text-align: center;
	padding: 1rem;

	&::placeholder {
		color: white;
	}

	&[type="submit"] {
		background: #333;
		font-weight: 700;
		
		&:hover {
			border: 1px solid green;
			color: green;
			background: none;
		}
	}
`;



const Login = () => {
	const [user, setUser] = useState({username: '', password: ''});
	return (
		<LoginPage>
			<LoginCard>
				<LoginTitle>Instagram</LoginTitle>
				<Form onSubmit={loginUser}>
					<Input type="text" name="username" id="username" placeholder="Username" onChange={(e) => setUser({...user, username: e.target.value})}/>
					<Input type="password" name="password" id="password" placeholder="Password" onChange={(e) => setUser({...user, password: e.target.value})} />
					<Input type="submit" placeholder="Log in" />
				</Form>
			</LoginCard>
		</LoginPage>
	);

	function loginUser(event){
		event.preventDefault();
		localStorage.setItem('username', user.username);
		window.location.href = "/"
	}
}

export default Login;