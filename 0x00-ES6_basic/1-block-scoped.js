export default function taskBlock(trueOrfalse) {
	var task = false;
	var task2 = true;

	if (trueOrFalse) {
		var innerTask = true;
		let innerTask2 = false;
		task = innerTask;
		task2 = innerTask2;
	}

	return [task, task2];
}
