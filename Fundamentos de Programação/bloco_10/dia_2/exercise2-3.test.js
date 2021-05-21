const users = {
	4: { name: 'Mark' },
	5: { name: 'Paul' }
	};
	
	const findUserById = (id) => {
		return new Promise((resolve, reject) => {
				if (users[id]) {
					return resolve(users[id]);
				};
	
				return reject({ error: 'User with ' + id + ' not found.' });
		});
	};
	
const getUserName = (userID) => {
	return findUserById(userID).then(user => user.name);
};

test('getUserName returns data of an user inserted as a parameter that exists',() => {
		expect.assertions(1)
		return getUserName(4).then((user) => expect(user).toEqual('Mark'))
});

test('getUserName returns error of an user inserted as a parameter that doesn`t exists',() => {
		expect.assertions(1)
		return getUserName(6).catch((error) => expect(error).toEqual({"error": "User with 6 not found."}))
});

describe('Tests using async/await', () => {
	it('tests if getUserName returns name of existing user inserted as a parameter', async () => {
		expect.assertions(1)
		const data = await getUserName(4)
		expect(data).toEqual('Mark')
	})
})

describe('Tests using async/await', () => {
	it('tests if getUserName returns error if unexisted user  is inserted as a parameter', async () => {
		expect.assertions(1)
		try {
			const data = await getUserName(6)
		} catch (error) {
			expect(error).toEqual({"error": "User with 6 not found."})}
	})
})