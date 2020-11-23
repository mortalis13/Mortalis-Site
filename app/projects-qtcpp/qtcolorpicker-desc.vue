<template>
<div>
<p class="project-features">Project features</p>
<ul>
  <li>Hue, Saturation, Value selectors</li>
  <li>conversion of selected color to text</li>
  <li>buttons to copy color values and paste a Hex value</li>
  <li>a wide set of keyboard/mouse shortcuts for comfortable and fast app usage</li>
  <li>color sliders and spinners for 3 color models (HSV, RGB, CMYK) (<i>in the <a href="images/projects/qtcolorpicker-2.png" target="_blank"><b>Sliders</b></a> window</i>)</li>
</ul>
<br>
<p class="project-features">Development features</p>
<ul>
  <li>developed using the <b>MVC</b> design pattern</li>
  <li>implementation of custom graphics to draw sliders and the selector pointer</li>
  <li>extensive use of mouse events (press, drag, wheel press & drag, scroll)</li>
  <li>development of custom <b>UI widgets</b></li>
</ul>
<br>
<p class="project-features">Instructions</p>
<ul>
  <li>select a color using the selectors</li>
  <li>pressing the buttons near the text fields copies the corresponding values to the clipboard (the copied values are comma separated)</li>
  <li><b>Paste Hex</b> button inserts a hex color value from the clipboard</li>
  <li>color values may be pasted in any text field which will immediately update the color selectors</li>
  <li>the values may be pasted with or without commas between them</li>
  <li>each color component (red, saturation, ...) can be incremented/decremented using up/down arrows on the keyboard</li>
  <li>these components can also be changed by scrolling the mouse wheel</li>
  <li>mouse wheel may be used inside color selectors to gradually change color components (check the <i>shortcuts</i> part)</li>
  <li>the main window may be dragged by holding any window area, except for the color selectors</li>
  <li>to open the <b>Sliders</b> sub-window press mouse wheel on the color sample or use <span class="shortcut">Ctrl + S</span> shortcut</li>
  <li>the sliders reflect the corresponding color components immediately and may also be changed separately</li>
  <li class="mt5"><b>Shortcuts:</b>
  <ul>
    <li><span class="shortcut">F1</span> - <span class="shortcut">F5</span> - copy color values (HSV, RGB, CMYK, Hex, # Hex)</li>
    <li><span class="shortcut">F6</span> - paste Hex value</li>
    <li><span class="shortcut">Shift + F1</span> - <span class="shortcut">Shift + F4</span> - focus text fields (HSV, RGB, CMYK, Hex)</li>
    <li><span class="shortcut">Ctrl + S</span> or mouse wheel press on the color sample - open/close Sliders window</li>
    <li><span class="shortcut">Esc</span> or mouse wheel press - exit</li>
    <li>left/right mouse click on the color sample - copy Hex value (without/with leading #)</li>
    <li>mouse scroll on the vertical Hue selector - change the Hue value by 1</li>
    <li>mouse scroll on the rectangular Saturation/Value selector - change Value component by 1, with <b>Shift</b> - change Saturation component</li>
    <li>mouse scroll with <b>Ctrl</b> - change values by 10</li>
  </ul>
  </li>
</ul>
</div>
</template>