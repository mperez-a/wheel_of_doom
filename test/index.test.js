const {
	addCoder,
	deleteCoder,
	start,
	displayErrorMessage,
	hideErrorMessage,
	clearLocalStorageOnUnload,
} = require('../JavaScript/index.js');

test('addCoder function should be defined', () => {
	expect(addCoder).toBeDefined();
});
