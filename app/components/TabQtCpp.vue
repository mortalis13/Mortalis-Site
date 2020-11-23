<template>
<div class="project-type" id="qt-cpp">
  <div class="type-title-wrap"><div class="type-title">Qt / C++</div></div>
  <gen-project v-for="(project, index) in projects" :project="project" :key="index"></gen-project>
</div>
</template>

<script>
let ICONS_PATH = 'images/icons/';
let SUB_COMP_PATH = '/app/projects-qtcpp/';

module.exports = {
  data() {
    return {
      projects: [
        {
          name: 'QtColorPicker',
          id: 'qtcolorpicker',
          icon: ICONS_PATH + 'qtcolorpicker-48.png',
          url: 'https://github.com/mortalis13/Qt-Color-Picker-Qt/releases',
          source_url: 'https://github.com/mortalis13/Qt-Color-Picker-Qt',
          short_description: 'Color selector with <b>HSV, RGB, CMYK and Hex</b> color models',
          
          description: httpVueLoader(SUB_COMP_PATH + 'qtcolorpicker-desc.vue'),
          images: httpVueLoader(SUB_COMP_PATH + 'qtcolorpicker-images.vue'),
        },
        {
          name: 'List Folders',
          id: 'list-folders',
          icon: ICONS_PATH + 'listfolders-48.png',
          url: 'https://github.com/mortalis13/List-Folders-Qt/releases',
          source_url: 'https://github.com/mortalis13/List-Folders-Qt',
          short_description: 'Saves a tree structure of subfolders and files to external storage',
          
          description: httpVueLoader(SUB_COMP_PATH + 'list-folders-desc.vue'),
          images: httpVueLoader(SUB_COMP_PATH + 'list-folders-images.vue'),
        },
        {
          name: 'Android Manager',
          id: 'android-manager',
          icon: ICONS_PATH + 'android-manager-48.png',
          url: 'https://github.com/mortalis13/Android-Manager-Qt/releases',
          source_url: 'https://github.com/mortalis13/Android-Manager-Qt',
          short_description: 'Android file manager for Windows',
          
          description: httpVueLoader(SUB_COMP_PATH + 'android-manager-desc.vue'),
          images: httpVueLoader(SUB_COMP_PATH + 'android-manager-images.vue'),
        },
        {
          name: 'File Splitter',
          id: 'file-splitter',
          icon: ICONS_PATH + 'file-splitter-50.png',
          url: 'https://github.com/mortalis13/File-Splitter-Qt/releases',
          source_url: 'https://github.com/mortalis13/File-Splitter-Qt',
          short_description: 'Splits text files by lines',
          
          description: httpVueLoader(SUB_COMP_PATH + 'file-splitter-desc.vue'),
          images: httpVueLoader(SUB_COMP_PATH + 'file-splitter-images.vue'),
        },
        {
          name: 'Path Edit',
          id: 'path-edit',
          icon: ICONS_PATH + 'path-edit-48.png',
          url: 'https://github.com/mortalis13/Path-Edit-Qt/releases',
          source_url: 'https://github.com/mortalis13/Path-Edit-Qt',
          short_description: 'Live editing of the Path Environment Variable',
          
          description: httpVueLoader(SUB_COMP_PATH + 'path-edit-desc.vue'),
          images: httpVueLoader(SUB_COMP_PATH + 'path-edit-images.vue'),
        },
        {
          name: 'C++ Custom Native Libraries',
          id: 'cpp-native-libraries',
          url: 'https://github.com/mortalis13/NativeLibraries',
          short_description: 'Libraries used in Android projects as <b>NDK</b> modules',
          description: httpVueLoader(SUB_COMP_PATH + 'cpp-native-libraries-desc.vue'),
          add_classes: {'text-only': true},
        },
        {
          name: 'Ported Libraries for Android',
          id: 'android-jni-libraries',
          short_description: 'External <b>C</b> libraries adapted for use with <b>Android NDK</b> modules',
          description: httpVueLoader(SUB_COMP_PATH + 'android-jni-libraries-desc.vue'),
          add_classes: {'text-only': true},
        },
        {
          name: 'Dictionary Converters',
          id: 'dictionary-converters',
          short_description: 'Command line tools that convert dictionaries to <a target="_blank" href="http://lingvo.helpmax.net/en/troubleshooting/dsl-compiler/dsl-dictionary-structure"><b>DSL</b></a> format',
          description: httpVueLoader(SUB_COMP_PATH + 'dictionary-converters-desc.vue'),
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
