<template>
<div>
<p class="project-features">Project features</p>
<ul>
  <li>allows to select an input file, output directory and output filename pattern</li>
  <li>allows to set lines count which indicate the maximum lines number the resulting subfiles will contain</li>
  <li>supports multiple encodings for input file (<b>UTF8, UTF16-LE, UTF16-BE</b>)</li>
</ul>
<br>
<p class="project-features">Development features</p>
<ul>
  <li>correct functioning with paths containing forward and backslashes</li>
  <li>the core functionality uses simple C++ operations</li>
  <li>automatic creation of needed folders during processing</li>
</ul>
<br>
<p class="project-features">Instructions</p>
<ul>
  <li>select an input text file</li>
  <li>select or paste an output folder path or enter a folder name (it will be created in the program main directory)</li>
  <li>enter a file name pattern for output files or leave it empty (output name will be extracted from the input file name)</li>
  <li>enter lines count by which the input file will be split</li>
  <li>press <b>Run</b> and wait until it finishes, then check the output folder for the split files</li>
</ul>
</div>
</template>