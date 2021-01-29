<template>
<div class="project-type" id="misc">
  <div class="type-title-wrap"><div class="type-title">Misc</div></div>
  <gen-project v-for="(project, index) in projects" :project="project" :key="index"></gen-project>
</div>
</template>

<script>
let ICONS_PATH = 'images/icons/';
let SUB_COMP_PATH = '/app/projects-misc/';

module.exports = {
  data() {
    return {
      projects: [
        {
          name: 'Double Commander',
          id: 'double-commander',
          icon: ICONS_PATH + 'double-commander-rebuild-48.png',
          url: 'https://github.com/mortalis13/DoubleCommander-Rebuild/releases',
          source_url: 'https://github.com/mortalis13/DoubleCommander-Rebuild',
          short_description: 'Modified version of the <a href="https://doublecmd.sourceforge.io/index.php?lang=eng" target="_blank"><b>Double Commander</b></a> file manager',
          
          description: httpVueLoader(SUB_COMP_PATH + 'double-commander-desc.vue'),
          images: httpVueLoader(SUB_COMP_PATH + 'double-commander-images.vue'),
        },
        {
          name: '7-Zip',
          id: '_7zip',
          url: 'https://github.com/mortalis13/7zip-User-Build-CPP/releases',
          source_url: 'https://github.com/mortalis13/7zip-User-Build-CPP',
          short_description: 'A custom rebuild of the <a href="https://7-zip.org" target="_blank"><b>7-zip</b></a> archiver',
          
          description: httpVueLoader(SUB_COMP_PATH + '7zip-desc.vue'),
          images: httpVueLoader(SUB_COMP_PATH + '7zip-images.vue'),
          add_classes: {'min-separator': true},
        },
        {
          name: 'ADBView',
          id: 'adbview',
          url: 'https://github.com/mortalis13/ADBView',
          short_description: 'A fork of the <a href="https://github.com/quarnster/ADBView" target="_blank"><b>ADBView</b></a> plugin for the <a href="http://sublimetext.com" target="_blank"><b>Sublime Text</b></a> editor that provides live <b>Android Logcat</b> output',
          
          description: httpVueLoader(SUB_COMP_PATH + 'adbview-desc.vue'),
          images: httpVueLoader(SUB_COMP_PATH + 'adbview-images.vue'),
          add_classes: {'reduced-separator': true},
        },
        {
          name: 'Number Converter',
          id: 'number-converter',
          url: 'https://mortalis13.github.io/NumberConverter-Angular',
          source_url: 'https://github.com/mortalis13/NumberConverter-Angular',
          short_description: 'A web tool for dynamic number conversion between <b>Decimal</b>, <b>Hexadecimal</b> and <b>Binary</b> formats',
          
          description: httpVueLoader(SUB_COMP_PATH + 'number-converter-desc.vue'),
          images: httpVueLoader(SUB_COMP_PATH + 'number-converter-images.vue'),
          add_classes: {'reduced-separator': true},
        },
        {
          name: 'Offline C++ Reference',
          id: 'cplusplus-reference',
          url: 'https://github.com/mortalis13/cplusplus.com-reference-offline',
          short_description: 'A <b>Python</b> script that generates offline help files from <a href="http://cplusplus.com" target="_blank"><b>cplusplus.com</b></a>',
          
          description: httpVueLoader(SUB_COMP_PATH + 'cplusplus-reference-desc.vue'),
          images: httpVueLoader(SUB_COMP_PATH + 'cplusplus-reference-images.vue'),
          add_classes: {'reduced-separator': true},
        },
        {
          name: 'Python Scripts',
          id: 'python-scripts',
          url: 'https://github.com/mortalis13/PythonScripts',
          short_description: 'Utilities for various programming tasks',
          description: httpVueLoader(SUB_COMP_PATH + 'python-scripts-desc.vue'),
          add_classes: {'text-only': true},
        },
        {
          name: 'Sublime Plugins',
          id: 'sublime-plugins',
          url: 'https://github.com/mortalis13/UserSettings/tree/master/SublimeText/user-plugins',
          short_description: 'A bunch of scripts written in <b>Python</b> for the <a href="http://sublimetext.com" target="_blank"><b>Sublime Text</b></a> editor',
          description: httpVueLoader(SUB_COMP_PATH + 'sublime-plugins-desc.vue'),
          add_classes: {'text-only': true},
        },
        {
          name: 'Norber Theme',
          id: 'norber-theme',
          url: 'https://packagecontrol.io/packages/Norber%20Theme',
          source_url: 'https://github.com/mortalis13/Norber-Theme-Sublime',
          short_description: 'A theme for the <a href="http://sublimetext.com" target="_blank"><b>Sublime Text</b></a> editor',
          
          description: httpVueLoader(SUB_COMP_PATH + 'norber-theme-desc.vue'),
          images: httpVueLoader(SUB_COMP_PATH + 'norber-theme-images.vue'),
          add_classes: {'last': true},
        },
      ]
    }
  },
  
components: {'gen-project': httpVueLoader('/app/components/GenProject.vue')},

}
</script>
