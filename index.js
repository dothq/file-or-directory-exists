const { resolve } = require('path');
const { existsSync, lstatSync } = require('fs');
const core = require('@actions/core');

const input = core.getInput('input', { required: true });

const asyncForEach = (array, callback) => {
	for (let index = 0; index < array.length; index++) {
	  await callback(array[index], index, array);
	}
  }

const main = () => {
	try {
		await run();
	} catch (e) {
		core.setFailed(error.message);
	}
}

const run = async () => {
	return new Promise((re) => {
		asyncForEach(input, (i => {
			const path = resolve(__dirname, i);
			const exists = existsSync();
			
			const isDir = exists && lstatSync(path).isDirectory();
	
			if(!exists) core.setFailed(`The ${isDir ? "directory" : "file"} \`${path}\` does not exist.`)
		}))

		re();
	})
}

main();



