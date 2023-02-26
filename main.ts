import { rename } from 'fs';
import { App, Editor, MarkdownView, Modal, Notice, Plugin, PluginSettingTab, Setting, TFile } from 'obsidian';
import { TAbstractFile, FileManager } from "obsidian";

export default class TitleCaseNoteTitle extends Plugin {
	async onload() {
		console.log('loading plugin')
		this.registerEvent(this.app.vault.on('rename', async (file:TFile) => {
			console.log(this.toTitleCase('a new file has entered the arena'))
			let newName = await this.toTitleCase(file.name);
			console.log(newName);
			this.renameFile(file, newName);
		  }));
	}
	async renameFile (file: TAbstractFile, newName: string) {
		const oldPath = file.path;
    	const newPath = oldPath.replace(file.name, newName);
    	await this.app.vault.rename(file, newPath);
	}
	async toTitleCase (title: string) {
		// define what shouldn't be capitalized
		const articles = ["a",
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

		//split the title into an array of individual words
		let words = title.toLowerCase().split(" ");

		//capitlize the first letter of each word not included in the list
		for (let i = 0; i < words.length; i++) {
		let currentWord = words[i];
		if (i == 0 || !articles.includes(currentWord) && !prepositions.includes(currentWord) && !conjunctions.includes(currentWord)) {
			words[i] = currentWord.charAt(0).toUpperCase() + currentWord.slice(1);  // grab the first letter, then capitalize it, then add the rest of the letters uncapitalized
			}
		}

		return words.join(" ");  //join the words back together in a string with a space separating them
	}
	async onunload() {
    	console.log('unloading plugin')
	}
}

