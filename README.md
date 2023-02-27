# Obsidian Title Case Note Title

## General

When you rename a note in Obsidian with this plugin loaded, the new name is automatically converted to a close approximation of title case as defined by the *MLA Handbook*, 9th ed. You can find those rules [here](https://titlecaseconverter.com/rules/#MLA). This automatic title case works upon renaming, so this won't effect your old notes unless you manually rename them.

This is my first functioning plugin, so I'm looking for a lot of feedback!

## Technical Explaination

This is Obsidian plugin that listens to the 'rename' event and automatically renames the note title to title case. The toTitleCase method converts a string to title case, and the renameFile method renames the file with the new title. Currently, it only recognses articles, prepositions, and conjunctions via an array.

## Possible Future Features

- Adhere more strictly to MLA title case rules.
	- Incorporate recognition of subtitles.
		- "Capitalize the first word and the last word of titles and subtitles."
	- Incorporate recognition of nfinitites.
		- "Do not capitalize 'to' in infinitives."
	- Incorporate the recognition of compound terms.
		- "Capitalize principal words that follow hyphens in compound terms."
	- Incorporate a dictionary API for reference.
		- "Do not capitalize the word that follows a hyphenated prefix if the prefix combined with the word is listed without a hyphen in a dictionary (e.g., 'Anti-tumor,' but 'Anti-Intellectual')"
- Change the titles of headings or other text elements.
- Change the title in specific cases only.
	- Change the titles of existing notes by specifying particular criteria, e.g. all notes tags #rename.
	- Change the titles of all notes in a vault.
	- Change the titles only via command in the command palette or a button in the ribbon bar.
- Implement a settings menu to toggle or change certain features.
	- Toggle automatic renaming via a command from the command palette or a toggle in a settings menu.
	- Toggle renaming of headings or other text elements via a command from the command palette or a toggle in a settings menu
	- Add other title case rules from different style manuals, e.g. APA title case, changed via a settings menu.


## Contact the Developer

### Feedback

If you encounter a bug, please report it via the ['Issues' tab](https://github.com/ChaseLittlepaws/obsidian-title-case-note-title/issues). For a faster response time, you can also message me on Discord at [Chase#7689](https://discordapp.com/users/551209559557931043).

### Collaboration

If you'd like to collaborate on this plugin, reach me via email at [littlepaws@hey.com](mailto:littlepaws@hey.com) or Discord at [Chase#7689](https://discordapp.com/users/551209559557931043). I am in the [Obsidian Members Group Discord server](https://discord.com/invite/obsidianmd) if you'd like to tag me there as well.

Thank you.
