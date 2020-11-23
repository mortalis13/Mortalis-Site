<template>
<div class="project-type" id="wordpress">
  <div class="type-title-wrap"><div class="type-title">Wordpress</div></div>
  <gen-project v-for="(project, index) in projects" :project="project" :key="index"></gen-project>
</div>
</template>

<script>
let ICONS_PATH = 'images/icons/';
let SUB_COMP_PATH = '/app/projects-wordpress/';

module.exports = {
  data() {
    return {
      projects: [
        {
          name: 'Starter Point',
          id: 'stater-point',
          url: 'https://github.com/mortalis13/Starter-Point/releases',
          source_url: 'https://github.com/mortalis13/Starter-Point',
          short_description: 'A simple responsive <a href="http://wordpress.org" target="_blank"><b>Wordpress</b></a> theme',
          
          description: httpVueLoader(SUB_COMP_PATH + 'stater-point-desc.vue'),
          images: httpVueLoader(SUB_COMP_PATH + 'stater-point-images.vue'),
        },
        {
          name: 'HTML Post Editor',
          id: 'html-post-editor',
          url: 'https://wordpress.org/plugins/html-post-editor-new',
          source_url: 'https://github.com/mortalis13/html-post-editor-wp',
          short_description: 'A plugin which adds the <b>HTML</b> tab to the post editor to show the raw source of the page',
          
          description: httpVueLoader(SUB_COMP_PATH + 'html-post-editor-desc.vue'),
          images: httpVueLoader(SUB_COMP_PATH + 'html-post-editor-images.vue'),
        },
        {
          name: 'TinyMCE Code Formatting',
          id: 'tinymce-code-formatting',
          url: 'https://wordpress.org/plugins/tinymce-code-formatting/',
          source_url: 'https://github.com/mortalis13/tinymce-code-formatting-wp',
          short_description: 'A plugin which adds the <b>Pre</b> and <b>Code</b> buttons to the <a href="https://codex.wordpress.org/TinyMCE" target="_blank"><b>TinyMCE</b></a> post editor toolbar',
          
          description: httpVueLoader(SUB_COMP_PATH + 'tinymce-code-formatting-desc.vue'),
          images: httpVueLoader(SUB_COMP_PATH + 'tinymce-code-formatting-images.vue'),
          add_classes: {'last': true},
        },
      ]
    }
  },
  
  components: {
    'gen-project': httpVueLoader('/app/components/GenProject.vue')
  }
}
</script>
