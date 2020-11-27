<template>
<div>
<p>The original project is written using the <b>Free Pascal</b> language and the <a href="https://www.lazarus-ide.org" target="_blank"><b>Lazarus IDE</b></a>.</p>
<p>The code was forked from the <a href="https://sourceforge.net/p/doublecmd/code/HEAD/tree/trunk" target="_blank"><b>SVN repository</b></a>.</p>
<p>With the knowledge of <b>Pascal</b> syntax and <b>Delphi</b> principles it's relatively easy to study the structure of the project to be able to extend it and add new necessary features, like menu items, custom commands, colors and shortcuts.</p>
<br>
<p>Features of the <b>original project</b>: a 2-panel file manager with tabs, toolbars and many filesystem utilities, fast navigation (Left-Right arrows for directory enter/exit is one of my favorite) and customizable parameters.</p>
<br>
<p>Some of the <b>tools</b> that are frequently used:</p>
<ul>
  <li>internal viewer (text, hex, image modes)</li>
  <li>rename multiple files using a pattern or an external editor</li>
  <li><b>ADB plugin</b> to navigate Android filesystem</li>
  <li>quick search and filter</li>
  <li>inline archive view/extract/pack (all in the same panel, not only ZIP or RAR, but other zip-like files, APK, WAR, EAR, XPI)</li>
  <li>filename/filepath copy shortcuts</li>
  <li>space calculation for all folders</li>
  <li>custom shortcuts for external system commands (like commit changes to <b>GitHub</b>, load a folder in <b>Sublime Text</b>)</li>
</ul>
<br>
<p class="project-features">Contribution to the project</p>
<ul>
  <li>open drive by index command (default keys <span class="shortcut">Alt + 1..9</span>)</li>
  <li>activate tab by index (default keys <span class="shortcut">Ctrl + 0..9</span>)</li>
  <li>maximize active panel (<span class="shortcut">F11</span>) to easily view long filenames</li>
  <li>restore all tabs to their initial position without restart</li>
  <li>free sorting mode (no auto-sorting on file rename/copy)</li>
  <li>multirename enhancement which allows to edit names of selected files in an external text editor</li>
  <li>parameters for copy command which allow to copy only folders without content</li>
  <li>alias mode which uses short commands to navigate faster to a directory or execute other system commands</li>
  <li>extended information in copy/move dialogs: current/total files, current/total amount of data transferred (in MB)</li>
  <li>additional column that shows files and folders number in each directory when calculating occupied space</li>
  <li>extended <b>New Folder</b> dialog allowing to create a list of folders in one command</li>
  <li>removed the <code>..</code> item to navigate to the parent directory only with the <b>Left</b> key (this allows faster navigation to multiple subfolders)</li>
  <li>increased tabs height</li>
  <li>converted <b>Calculate Space</b> dialog to non-modal type so it doesn't block main window and added <b>Copy</b> button to it</li>
  <li>select all folders command (similar to select all files with the same extension, <span class="shortcut">Ctrl + Num+</span>)</li>
</ul>
</div>
</template>