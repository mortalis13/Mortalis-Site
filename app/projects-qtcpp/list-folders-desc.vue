<template>
<div>
<p>The program scans files and subfolders and saves the resulting tree as <b>text</b>, <b>JSON</b> or <b>HTML</b>.</p>
<p>For testing and comparison purposes the project was created using various languages:</p>
<ul>
  <li><a target="_blank" href="https://github.com/mortalis13/List-Folders-Qt">Qt</a></li>
  <li><a target="_blank" href="https://github.com/mortalis13/List-Folders-Java">Java</a></li>
  <li><a target="_blank" href="https://github.com/mortalis13/List-Folders-CSharp">C#</a></li>
  <li><a target="_blank" href="https://github.com/mortalis13/List-Folders-Node">Node.js</a></li>
  <li><a target="_blank" href="https://github.com/mortalis13/List-Folders/tree/master/php">PHP</a></li>
</ul>
<br>
<p class="project-features">Project features</p>
<ul>
  <li>filter files by extension</li>
  <li>filter directories by name</li>
  <li>export files/directories list to a text file and to a tree structure (JSON)</li>
  <li>the exported tree can be viewed and navigated with the <b>Tree Viewer</b> tool or as a <b>HTML</b> page</li>
  <li>auto save the last used settings when the program exits</li>
  <li>fast processing, depends on the number of files to scan not on the total size of the scanned directory</li>
  <li>useful for creating virtual tree of directory structure as a backup or for sharing without copying the full file tree</li>
</ul>
<br>
<p class="project-features">Development features</p>
<ul>
  <li>recursive filesystem scanning</li>
  <li>use of a separate thread for background scanning</li>
  <li>use of progress bar to show current percent of scanned folders</li>
  <li>use of <b>JSON</b> format to store directory structure</li>
  <li>implementation of a custom JSON serializer/deserializer to store/retrieve data</li>
  <li>use of <b>MVC</b> design pattern</li>
  <li>implementation of custom <b>TreeModel</b> class for the <b>Tree Viewer</b> subwindow</li>
</ul>
<br>
<p class="project-features">Instructions</p>
<ul>
  <li>enter a directory path to scan</li>
  <li>enter file/directory filters</li>
  <li>select export type (<b>text</b> - to a text file; <b>tree</b> - to a JSON and HTML files)</li>
  <li>enter an export name for the resulting output files</li>
  <li>press <b>Scan</b> and wait</li>
  <li>check the <b>export</b> folder inside the program folder to see the result</li>
  <li>use <b>Tree View</b> to navigate the exported tree, select a JSON file to show its structure</li>
</ul>
</div>
</template>