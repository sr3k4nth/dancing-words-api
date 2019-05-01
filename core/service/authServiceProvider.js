module.exports = function authServiceProvider() {
	return {
		authenticate: (username, password) => username && password && username === password,
		authorize: (token) => {
			console.log('Authorization to be implemented', token);
		}
	}
};