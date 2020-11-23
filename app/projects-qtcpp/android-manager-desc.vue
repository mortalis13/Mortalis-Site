<template>
<div>
<p class="project-features">Project features</p>
<ul>
  <li>browse and navigate an Android device filesystem</li>
  <li>get basic file/folder information</li>
  <li>copy files from <b>Android</b></li>
  <li>navigate using <b>Left/Right</b> arrows</li>
  <li>no need of <b>busybox</b> nor <b>root</b></li>
  <li>works independently of USB tethering (shared internet connection from the device)</li>
</ul>
<br>
<p class="project-features">Development features</p>
<ul>
  <li>use of basic <b>adb</b> commands: <b>shell ls, pull</b></li>
  <li>use of the <b>QProcess</b> class to call Android shell commands</li>
  <li>customized table view</li>
  <li>encoding fixes to display text containing non-latin characters</li>
  <li>smart size units formatting <b>(B, KB, MB, GB)</b></li>
  <li>use of a background thread to show copy progress</li>
</ul>
<br>
<p class="project-features">Instructions</p>
<ul>
  <li>enter a <b>Path</b> on the device and press <b>Go</b> or press <b>Root</b> to go to the root folder</li>
  <li>navigate to a folder, select file(s)</li>
  <li>enter destination path on your filesystem or leave it empty to copy files to the default location (<b>Downloads</b> folder in the program main directory)</li>
  <li>press <b>Copy</b> and check the progress below</li>
  <li>text area below reflects the system output of the <b>adb ls</b> command</li>
  <li>the program needs <b>adb.exe</b> from the <a href="https://developer.android.com/studio/releases/platform-tools" target="_blank"><b>Android SDK Platform Tools</b></a>, it has an executable by default, if it doesn't work make sure you have it in your Path variable</li>
</ul>
</div>
</template>