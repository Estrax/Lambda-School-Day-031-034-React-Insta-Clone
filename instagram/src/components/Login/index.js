import React, { useState } from 'react';

const Login = () => {
	const [user, setUser] = useState({username: '', password: ''});
	return (
		<div>
			<form onSubmit={loginUser}>
				<label htmlFor="username" />
				<input type="text" name="username" id="username" onChange={(e) => setUser({...user, username: e.target.value})}/>

				<label htmlFor="password" />
				<input type="password" name="password" id="password" onChange={(e) => setUser({...user, password: e.target.value})} />

				<input type="submit" placeholder="Log in" />
			</form>
		</div>
	);

	function loginUser(event){
		event.preventDefault();
		localStorage.setItem('username', user.username);
		window.location.href = "/"
	}
}

export default Login;