<h1 align="center">Obsidian Title Case Note Title</h1>

<p align="center">
<img
  src="assets\TCNT Plugin Example.png"
  alt="An example note titles before and after title case."
  title="Plugin Example"
  style="display: block;
	width: 85%"/>
</p>

<h2 align="center">General</h2>

When you rename a note in Obsidian with this plugin loaded, the new name is automatically converted to a close approximation of title case as defined by the *MLA Handbook*, 9th ed. You can find those rules [here](https://titlecaseconverter.com/rules/#MLA). This automatic title case works upon renaming, so this won't effect your old notes unless you manually rename them.

This is my first functioning plugin, so I'm looking for a lot of feedback!

<h3 align="center">Demonstration</h3>
	
<p align="center">
<img
  src="assets\TCNT Plugin Demo.gif"
  alt="A
  title="Plugin Demonstration"
  style="display: block;
		width: 1000px;
		max-width: 100%;"/>
</p>
	
<h2 align="center">Technical Explaination</h2>

This is Obsidian plugin that listens to the 'rename' event and automatically renames the note title to title case. The toTitleCase method converts a string to title case, and the renameFile method renames the file with the new title. Currently, it only recognses articles, prepositions, and conjunctions via an array.

<h2 align="center">Possible Future Features</h2>

<p align="center">
<img
  src="assets\MLA Handbook Cover.jpg"
  title="MLA Handbook cover"
  style="display: block;
		 max-width: 33%;"/>
</p>

- Adhere more strictly to MLA title case rules.
	- Incorporate recognition of subtitles.
		- "Capitalize the first word and the last word of titles and subtitles."
	- Incorporate recognition of infinitites.
		- "Do not capitalize 'to' in infinitives."
	- Incorporate the recognition of compound terms.
		- "Capitalize principal words that follow hyphens in compound terms."
	- Incorporate a dictionary API for reference concerning compound words.
		- "Do not capitalize the word that follows a hyphenated prefix if the prefix combined with the word is listed without a hyphen in a dictionary (e.g., 'Anti-tumor,' but 'Anti-Intellectual')"
- Extend the renaming capacity
	- Change the titles of existing notes by specifying particular criteria, e.g. all notes tags #rename.
	- Change the titles of all notes in a vault.
	- Change the titles of headings or other text elements.
- Implement a settings menu to toggle or change certain features.
	- Toggle automatic renaming via a command from the command palette or a toggle in a settings menu..
	- Toggle automatic renaming of headings or other text elements via a command from the command palette or a toggle in a settings menu.
	- Add button for extended renaming capacity to the settings menu, e.g. a button to change the titles of all notes in a vault.
	- Add other title case rules from different style manuals, e.g. APA title case, selected via a settings menu.


<h2 align="center">Contact the Developer</h2>

<h3 align="center">Feedback</h3>

If you encounter a bug, please report it via the ['Issues' tab](https://github.com/ChaseLittlepaws/obsidian-title-case-note-title/issues). For a quicker response time, you can also message me on Discord at [Chase#7689](https://discordapp.com/users/551209559557931043).

<h3 align="center">Collaboration</h3>

If you'd like to collaborate on this plugin, reach me via email at [littlepaws@hey.com](mailto:littlepaws@hey.com) or Discord at [Chase#7689](https://discordapp.com/users/551209559557931043). I am in the [Obsidian Members Group Discord server](https://discord.com/invite/obsidianmd) if you'd like to tag me there as well.

Thank you.
