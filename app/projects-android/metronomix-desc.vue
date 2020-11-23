<template>
<div>
<p>The app mainly serves as a metronome with quick tempo adjustments and beat visualization.</p>
<p>But also allows to change the played pattern and number of bars in a loop.</p>
<p>During the playback it shows audio spectrum of the currently played section.</p>
<br>
<p class="project-features">Project features</p>
<ul>
  <li>adjustable tempo with buttons and presets</li>
  <li>metronome counters: number of bars played, global time and loop time duration</li>
  <li>handy device volume control</li>
  <li>4x16 sequencer allows to create various rhythm patterns</li>
  <li>color accent for active beat in a 4/4 loop</li>
  <li>audio spectrum visualization during the playback</li>
  <li>pattern/bars editor allows to copy/paste, clear, remove, add, duplicate bars and navigate between them</li>
  <li>live steps editing (the changes are applied without the need to restart or stop the playback)</li>
</ul>
<br>
<p class="project-features">Development features</p>
<ul>
  <li>use of custom widgets and direct surface painting (<b>TempoPresets, Sequencer, Spectrum</b>)</li>
  <li>direct audio I/O with <b>AudioTrack</b> technology</li>
  <li>raw audio data reading from external <b>WAVE</b> files using a <a href="https://github.com/mortalis13/NativeLibraries/tree/master/audio_engine" target="_blank"><b>native "audio_engine" library</b></a> with <b>Android NDK</b></li>
  <li>separate audio thread which constantly writes audio data (samples) to the buffer during the loop playback</li>
  <li>application of <a href="http://www.fftw.org" target="_blank"><b>Fast Fourier Transform (FFT)</b></a> C++ implementation for audio data analysis and spectrum data generation</li>
  <li>conversion of <b>FFT</b> data to logarithmic frequency scale which reflects more precisely how the sound is perceived by human ear</li>
  <li>created <a href="https://mortalis13.github.io/Metronomix" target="_blank"><b>documentation page</b></a> using the <a href="https://angular.io" target="_blank"><b>Angular</b></a> framework</li>
</ul>
<br>
<p class="project-features"><a href="https://mortalis13.github.io/Metronomix" target="_blank"><b>Instructions</b></a></p>
<ul>
  <li>select a tempo using buttons or predefined presets</li>
  <li>press the green button below to play</li>
  <li>edit layout visibility in the <b>Settings</b> as well as spectrum Visualization parameters</li>
  <li>open <b>Sound Editor</b> to edit metronome pattern via 16-step sequencer and bars navigator</li>
  <li>the sequencer has <b>4 active channels/instruments</b> by default which allow to create a loop pattern: Kick&nbsp;Drum, Snare&nbsp;Drum, Hihat&nbsp;Closed, Hihat&nbsp;Open</li>
  <li>it's possible to add more channels by assigning a sound sample to them (<i>in the full version</i>)</li>
  <li>the toolbar buttons allow to copy and paste bar contents (steps), clear/remove/add bars</li>
  <li>to duplicate a bar long click the <b>Add/+</b> button</li>
  <li>max bars number is 20 (<i>unlimited for the full version</i>)</li>
  <li>on smaller screens put the app in the landscape orientation for more comfortable step editing</li>
</ul>
</div>
</template>
