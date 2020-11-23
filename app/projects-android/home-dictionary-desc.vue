<template>
<div>
<p>Dictionary shell which allows to add multi-language dictionary files in <a target="_blank" href="http://lingvo.helpmax.net/en/troubleshooting/dsl-compiler/dsl-dictionary-structure"><b>Lingvo DSL</b></a> format and search across added dictionaries in various language directions.</p>
<p><b>DSL</b> is a text file with specific markup: a headword followed by an article body indented with spaces or tabs <a href="https://github.com/Tvangeste/SampleDSL/blob/master/sample.dsl" target="_blank"><b>[SampleDSL]</b></a>.</p>
<br>
<p class="project-features">Project features</p>
<ul>
  <li>read and index dictionaries in <b>DSL</b> format (or compressed <b>DSL.DZ</b> variation)</li>
  <li>support for languages from different families: Latin/European, Cyrillic, Arabic, CJK (Chinese, Japanese, Korean) and more</li>
  <li>select a language pair from the dropdown list</li>
  <li>search for a word translation within the selected languages</li>
  <li>resulting article contains word translation from all the dictionaries in the selected language pair</li>
  <li>output formatted dictionary article</li>
  <li>zoom article content with text wrapping to allow comfortable viewing</li>
  <li>navigate through articles using internal links</li>
  <li>manage added dictionaries (change order in article, remove and view main information)</li>
  <li>save and view search history ordering it by a set of conditions</li>
  <li>change settings such as main storage directory, max results to show, article font size</li>
</ul>
<br>
<p class="project-features">Development features</p>
<ul>
  <li>scanning of dictionary files in DSL format, indexing all the words for fast search and storing of the index files in the main directory</li>
  <li>use of internal database (<b>SQLite/.db</b>) to store dictionary paths and main information</li>
  <li>use of background tasks for the indexing and search to prevent freezing of the main UI thread</li>
  <li>development of a <a href="https://github.com/mortalis13/NativeLibraries/tree/master/dsl_library" target="_blank"><b>native "dsl_library"</b></a> with memory efficient processing of dictionary files and indexing</li>
  <li>use of <b>JNI (Android NDK)</b> to integrate native library into the app</li>
  <li>multiple encodings support using the <b>UTF-8</b>, <b>UTF-16</b> and <b>UTF-32</b> charsets</li>
  <li>use of a custom markup parser to generate HTML code for the articles</li>
  <li>custom CSS stylesheet file to easily control the look of the articles</li>
  <li>customized components for <b>WebView</b> with comfortable scrollbar and <b>Spinner</b> as language selector</li>
  <li>created <a href="https://mortalis13.github.io/HomeDictionary" target="_blank"><b>documentation page</b></a> using the <a href="https://angular.io" target="_blank"><b>Angular</b></a> framework</li>
  <li>created dictionary conversion applications <a href="https://github.com/mortalis13/BGL-To-DSL-Converter" target="_blank"><b>BGL to DSL</b></a> and <a href="https://github.com/mortalis13/StarDict-To-DSL-Converter" target="_blank"><b>StarDict to DSL</b></a>, referenced in the <a href="https://mortalis13.github.io/HomeDictionary/#/tutorials/how_to_convert_to_dsl" target="_blank"><b>documentation tutorials</b></a></li>
</ul>
<br>
<p class="project-features"><a class="docs-link" href="https://mortalis13.github.io/HomeDictionary/#/main" target="_blank">Instructions</a></p>
<ul>
  <li>start the app and wait for the demo data to load for the first time</li>
  <li>select a language direction from available items in the list</li>
  <li>type a word and select a result in the list below</li>
  <li>view the article with the corresponding translation</li>
</ul>
</div>
</template>