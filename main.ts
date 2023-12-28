import { Plugin, TFile, TAbstractFile,} from "obsidian";

export default class TitleCaseNoteTitle extends Plugin {
	async onload() {
		console.log('loading Title Case Note Title plugin')
		this.registerEvent(this.app.vault.on('rename', async (file) => {
			const newName = await this.toTitleCase(file.name); // No extension here
			if (newName + ".md" === file.name) return; // Check with extension
			this.renameFile(file, newName); // newName does not have '.md'
		}));
	}
	async renameFile (file: TAbstractFile, newName: string) {  //grab the current path, and ammend it with the new file name
		const oldPath = file.path;
		const newPath = oldPath.replace(file.name, newName + ".md");
		await this.app.vault.rename(file, newPath);
	}
	async toTitleCase (title: string) {
		// define what shouldn't be capitalized
		const articles = [
		"a",
		"an",
		"the"];
		const prepositions = [
		"aboard",
		"about",
		"above",
		"across",
		"after",
		"against",
		"along",
		"amid",
		"among",
		"around",
		"as",
		"at",
		"before",
		"behind",
		"below",
		"beneath",
		"beside",
		"between",
		"beyond",
		"but",
		"by",
		"concerning",
		"considering",
		"despite",
		"down",
		"during",
		"except",
		"for",
		"from",
		"in",
		"inside",
		"into",
		"like",
		"near",
		"of",
		"off",
		"on",
		"onto",
		"out",
		"outside",
		"over",
		"past",
		"regarding",
		"round",
		"since",
		"through",
		"throughout",
		"till",
		"to",
		"toward",
		"under",
		"underneath",
		"until",
		"unto",
		"up",
		"upon",
		"with",
		"within",
		"without",
		];
		const conjunctions = [
		"and",
		"but",
		"for",
		"nor",
		"or",
		"so",
		"yet",
		];

		function upperCaseIt (word: string) {
			return word.charAt(0).toUpperCase() + word.slice(1).toLowerCase();
		}

		const extension = ".md";
		title = title.replace(extension, ""); // Remove extension

		const splitWords = title.split(" ");
		const words = splitWords.map(function (currentWord) {
			console.log("currentWord: " + currentWord);
			// Check for acronym or initialism
			const upperCaseWord = currentWord.toUpperCase();
			if (upperCaseWord === currentWord) {
				// Leave acronyms/initialisms as is
				console.log(currentWord + " is an acronym or initialism");
				return currentWord;
			} else if ([...articles, ...prepositions, ...conjunctions].includes(currentWord)) {
				// check for articles, prepositions, and conjunctions
				return currentWord.toLowerCase();
			} else {
				return upperCaseIt(currentWord);
			}
		});

		return words.join(" ");  //join the words back together in a string with a space separating them
	}
	async onunload() {
		console.log('unloading Title Case Note Tile plugin')
	}
}

