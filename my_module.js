function hello() {
	return "world"
}

function helloWorld() {
	return hello() + 'again'
}

module.exports.helloWorld = hello
module.exports.helloWorldAgain = helloWorld