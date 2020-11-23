<template>
<div class="project-type" id="firefox-addons">
  <div class="type-title-wrap"><div class="type-title">Firefox Addons</div></div>
  <div class="type-description">
    <p>The addons are small plugins for the <b>Firefox</b> browser that give additional functionality to the default browser features.</p>
    <p>The source code uses mainly JavaScript, CSS, <a href="https://developer.mozilla.org/en-US/docs/Mozilla/Add-ons/WebExtensions" target="_blank"><b>WebExtensions API</b></a> and <a target="_blank" href="https://developer.mozilla.org/en-US/docs/Mozilla/Tech/XUL"><b>XUL</b></a> markup for legacy code (prior to Firefox&nbsp;~v55).</p>
  </div>
  <gen-project v-for="(project, index) in projects" :project="project" :key="index"></gen-project>
</div>
</template>

<script>
let ICONS_PATH = 'images/icons/';
let SUB_COMP_PATH = '/app/projects-firefox/';

module.exports = {
  data() {
    return {
      projects: [
        {
          name: 'Close Tabs Shortcuts',
          id: 'close-tabs-shortcuts',
          url: 'https://addons.mozilla.org/en-US/firefox/addon/close-tabs-shortcuts',
          source_url: 'https://github.com/mortalis13/Close-Tabs-Shortcuts-XPI',
          short_description: 'The addon provides additional keyboard shortcuts to close unneeded browser tabs',
          description: httpVueLoader(SUB_COMP_PATH + 'close-tabs-shortcuts-desc.vue'),
          add_classes: {'text-only': true},
        },
        {
          name: 'Bookmark Shortcuts',
          id: 'bookmark-shortcuts',
          url: 'https://addons.mozilla.org/en-US/firefox/addon/bookmark-shortcuts',
          source_url: 'https://github.com/mortalis13/Bookmark-Shortcuts',
          short_description: 'Adds shortcuts for the bookmarks in the Bookmarks Toolbar',
          description: httpVueLoader(SUB_COMP_PATH + 'bookmark-shortcuts-desc.vue'),
          add_classes: {'text-only': true},
        },
        {
          name: 'Open Last Download',
          id: 'open-last-download',
          url: 'https://addons.mozilla.org/en-US/firefox/addon/open-last-download',
          source_url: 'https://github.com/mortalis13/Open-Last-Download-XPI',
          short_description: 'Opens the last downloaded file from the browser',
          
          description: httpVueLoader(SUB_COMP_PATH + 'open-last-download-desc.vue'),
          images: httpVueLoader(SUB_COMP_PATH + 'open-last-download-images.vue'),
          add_classes: {'min-separator': true},
        },
        {
          name: 'Tabs Export',
          name2: 'Tabs Import',
          id: 'tabs-export-import',
          url: 'https://addons.mozilla.org/en-US/firefox/addon/tabs-export',
          url2: 'https://addons.mozilla.org/en-US/firefox/addon/tabs-import',
          source_url: 'https://github.com/mortalis13/Tabs-Export-XPI-Android',
          source_url2: 'https://github.com/mortalis13/Tabs-Import-XPI-Android',
          short_description: 'Addons for Firefox for Android which add the <b><i>Export/Import Tabs</i></b> menu items',
          description: httpVueLoader(SUB_COMP_PATH + 'tabs-export-desc.vue'),
          add_classes: {'text-only': true},
        },
        {
          name: 'Bookmarks Sidebar Button',
          id: 'bookmarks-sidebar-button-pr',
          url: 'https://github.com/mortalis13/Bookmarks-Sidebar-Button',
          short_description: 'Adds a Bookmarks sidebar button to the <b>Toolbar Palette</b>',
          
          description: httpVueLoader(SUB_COMP_PATH + 'bookmarks-sidebar-button-pr-desc.vue'),
          images: httpVueLoader(SUB_COMP_PATH + 'bookmarks-sidebar-button-pr-images.vue'),
          add_classes: {'min-separator': true},
        },
        {
          name: 'Regex Find',
          id: 'regex-find-pr',
          url: 'https://github.com/mortalis13/Regex-Find',
          short_description: 'Adds a <b>Regex</b> checkbox to the findbar',
          
          description: httpVueLoader(SUB_COMP_PATH + 'regex-find-pr-desc.vue'),
          images: httpVueLoader(SUB_COMP_PATH + 'regex-find-pr-images.vue'),
          add_classes: {'min-separator': true},
        },
        {
          name: 'Toggle Images and JS',
          id: 'toggle-images-js',
          url: 'https://github.com/mortalis13/Toggle-Images-and-JS',
          short_description: 'Adds buttons to the Toolbar that toggle <b>Images</b> and <b>JavaScript</b> loading for all the pages',
          
          description: httpVueLoader(SUB_COMP_PATH + 'toggle-images-js-desc.vue'),
          images: httpVueLoader(SUB_COMP_PATH + 'toggle-images-js-images.vue'),
          add_classes: {'min-separator': true},
        },
        {
          name: 'Copy Paste Location [Android]',
          id: 'copy-paste-location',
          url: 'https://github.com/mortalis13/Copy-Paste-Location',
          short_description: 'Adds the Copy/Paste buttons to the URL bar',
          
          description: httpVueLoader(SUB_COMP_PATH + 'copy-paste-location-desc.vue'),
          add_classes: {'text-only': true, 'last': true},
        },
      ]
    }
  },
  
  components: {
    'gen-project': httpVueLoader('/app/components/GenProject.vue')
  }
}
</script>
