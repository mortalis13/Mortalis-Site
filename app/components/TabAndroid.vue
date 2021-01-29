<template>
<div class="project-type" id="android">
  <div class="type-title-wrap"><div class="type-title">Android</div></div>
  <gen-project v-for="(project, index) in projects" :project="project" :key="index"></gen-project>
</div>
</template>

<script>
let ICONS_PATH = 'images/icons/'
let SUB_COMP_PATH = '/app/projects-android/'

module.exports = {
data() { return {
  projects: [
  {
    name: 'Home Dictionary',
    id: 'home-dictionary',
    icon: ICONS_PATH + 'home-dictionary-50.png',
    url: 'https://play.google.com/store/apps/details?id=org.mortalis.homedictionary',
    source_url: 'https://github.com/mortalis13/HomeDictionary',
    short_description: 'Multi-language dictionary shell application',
    
    description: httpVueLoader(SUB_COMP_PATH + 'home-dictionary-desc.vue'),
    images: httpVueLoader(SUB_COMP_PATH + 'home-dictionary-images.vue'),
  },
  {
    name: 'Metronomix',
    id: 'metronomix',
    icon: ICONS_PATH + 'metronomix-50.png',
    url: 'https://play.google.com/store/apps/details?id=org.mortalis.metronomix',
    source_url: 'https://github.com/mortalis13/Metronomix',
    short_description: 'Sample based drum metronome and sequencer',
    
    description: httpVueLoader(SUB_COMP_PATH + 'metronomix-desc.vue'),
    images: httpVueLoader(SUB_COMP_PATH + 'metronomix-images.vue'),
  },
  {
    name: 'Wrap Keyboard',
    id: 'wrap-keyboard',
    icon: ICONS_PATH + 'wrapkeyboard-50.png',
    url: 'https://github.com/mortalis13/WrapKeyboard-Android/releases',
    source_url: 'https://github.com/mortalis13/WrapKeyboard-Android',
    short_description: 'Soft keyboard for small screens',
    
    description: httpVueLoader(SUB_COMP_PATH + 'wrap-keyboard-desc.vue'),
    images: httpVueLoader(SUB_COMP_PATH + 'wrap-keyboard-images.vue'),
  },
  {
    name: 'Plain Alarm',
    id: 'plain-alarm',
    icon: ICONS_PATH + 'plain-alarm-48.png',
    url: 'https://github.com/mortalis13/PlainAlarm-Android/releases',
    source_url: 'https://github.com/mortalis13/PlainAlarm-Android',
    short_description: 'Simple alarm with handy controls',
    
    description: httpVueLoader(SUB_COMP_PATH + 'plain-alarm-desc.vue'),
    images: httpVueLoader(SUB_COMP_PATH + 'plain-alarm-images.vue'),
  },
  {
    name: 'Quick Info',
    id: 'quick-info',
    icon: ICONS_PATH + 'quick-info-48.png',
    url: 'https://github.com/mortalis13/QuickInfo-Android/releases',
    source_url: 'https://github.com/mortalis13/QuickInfo-Android',
    short_description: 'Quick access to frequently used information',
    
    description: httpVueLoader(SUB_COMP_PATH + 'quick-info-desc.vue'),
    images: httpVueLoader(SUB_COMP_PATH + 'quick-info-images.vue'),
  },
  {
    name: 'Verb Conjugator',
    id: 'verb-conjugator',
    icon: ICONS_PATH + 'verb-conjugator-50.png',
    url: 'https://github.com/mortalis13/Verb-Conjugator-Android/releases',
    source_url: 'https://github.com/mortalis13/Verb-Conjugator-Android',
    short_description: 'Multi-language verb conjugation tables with extensive offline database',
    
    description: httpVueLoader(SUB_COMP_PATH + 'verb-conjugator-desc.vue'),
    images: httpVueLoader(SUB_COMP_PATH + 'verb-conjugator-images.vue'),
  },
  {
    name: 'Kodi Control',
    id: 'kodi-control',
    icon: ICONS_PATH + 'kodi-control-48.png',
    url: 'https://github.com/mortalis13/KodiControl-Android/releases',
    source_url: 'https://github.com/mortalis13/KodiControl-Android',
    short_description: 'Remote control for <b>Kodi</b> and <b>LibreELEC</b> on a <b>Raspberry Pi</b>',
    
    description: httpVueLoader(SUB_COMP_PATH + 'kodi-control-desc.vue'),
    images: httpVueLoader(SUB_COMP_PATH + 'kodi-control-images.vue'),
  },
  {
    name: 'Task Lister',
    id: 'task-lister',
    icon: ICONS_PATH + 'task-lister-48.png',
    url: 'https://github.com/mortalis13/TaskLister-Android/releases',
    source_url: 'https://github.com/mortalis13/TaskLister-Android',
    short_description: 'Simple todo list',
    
    description: httpVueLoader(SUB_COMP_PATH + 'task-lister-desc.vue'),
    images: httpVueLoader(SUB_COMP_PATH + 'task-lister-images.vue'),
    add_classes: {'last': true},
  },
  ]
}},

components: {'gen-project': httpVueLoader('/app/components/GenProject.vue')},

}
</script>
