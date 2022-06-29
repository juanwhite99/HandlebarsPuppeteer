import * as fs from 'fs';
import * as path from 'path';

export async function deletePreviousFiles(directory: string = 'pdf'){
	fs.readdir(directory, (err, files) => {
		if (err) console.log(err);

		for (const file of files) {
			fs.unlink(
				path.join(directory, file), 
				err => { if (err) console.log(err); }
			);
		}
	});
}