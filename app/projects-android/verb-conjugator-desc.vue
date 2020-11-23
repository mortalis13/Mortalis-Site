<template>
<div>
<p>Several applications were designed for different languages:</p>
<ul>
  <li><a href="https://github.com/mortalis13/Verb-Conjugator-Android/tree/master/spanish" target="_blank">Spanish</a> (11 800 verbs)</li>
  <li><a href="https://github.com/mortalis13/Verb-Conjugator-Android/tree/master/english" target="_blank">English</a> (11 100 verbs)</li>
  <li><a href="https://github.com/mortalis13/Verb-Conjugator-Android/tree/master/german" target="_blank">German</a> (9 000 verbs)</li>
  <li><a href="https://github.com/mortalis13/Verb-Conjugator-Android/tree/master/italian" target="_blank">Italian</a> (7 700 verbs)</li>
  <li><a href="https://github.com/mortalis13/Verb-Conjugator-Android/tree/master/french" target="_blank">French</a> (6 900 verbs)</li>
  <li><a href="https://github.com/mortalis13/Verb-Conjugator-Android/tree/master/latin" target="_blank">Latin</a> (3 000 verbs)</li>
</ul>
<br>
<p class="project-features">Project features</p>
<ul>
  <li>search autocompletion which may be turned on/off</li>
  <li>colored style for different verbal moods</li>
  <li>wrapping of article content within the screen width</li>
  <li>buttons to navigate to the next/previous verbal mood</li>
</ul>
<br>
<p class="project-features">Development features</p>
<ul>
  <li>use of a <b>SQLite</b> database generated with a separate <b><a href="https://github.com/mortalis13/VerbConjugatorDBCreator-Qt" target="_blank">Qt project</a></b> with all verb data</li>
  <li>use of HTML and CSS template files to easily change the article look</li>
  <li>use of extended <b>Unicode</b> encoding for diacritics in european languages</li>
  <li>manually adjusted <b>autocompletion</b> feature which is toggled with a checkbox button</li>
  <li>javascript injection for the navigation buttons</li>
  <li>use of background non-blocking task for the verb search action</li>
</ul>
<br>
<p class="project-features">Instructions</p>
<ul>
  <li>when the app launches for the first time wait until it prepares the database with all the verbs</li>
  <li>type a verb in the text field (the app requires complete verb by default)</li>
  <li>the autocompletion requires at least 3 first letters of a verb to be typed, then you may select a result from the list</li>
</ul>
</div>
</template>
