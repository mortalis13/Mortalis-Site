<template>
<div class="project-type" id="joomla">
  <div class="type-title-wrap"><div class="type-title">Joomla</div></div>
  <gen-project v-for="(project, index) in projects" :project="project" :key="index"></gen-project>
</div>
</template>

<script>
let ICONS_PATH = 'images/icons/';
let SUB_COMP_PATH = '/app/projects-joomla/';

module.exports = {
  data() {
    return {
      projects: [
        {
          name: 'Advanced Admin Menu',
          id: 'advanced-admin-menu',
          url: 'http://extensions.joomla.org/extensions/extension/administration/admin-navigation/advanced-admin-menu',
          source_url: 'https://github.com/mortalis13/mod_menu_adv',
          short_description: 'A plugin which adds an advanced menu for the <a target="_blank" href="https://www.joomla.org"><b>Joomla 3</b></a> Admin side',
          
          description: httpVueLoader(SUB_COMP_PATH + 'advanced-admin-menu-desc.vue'),
          images: httpVueLoader(SUB_COMP_PATH + 'advanced-admin-menu-images.vue'),
        },
        {
          name: 'Menu With Login',
          id: 'menu-with-login',
          url: 'http://extensions.joomla.org/extensions/extension/structure-a-navigation/menu-systems/menu-with-login',
          source_url: 'https://github.com/mortalis13/mod_menu_login',
          short_description: 'A plugin which adds a menu module with the inline login form on the right side',
          
          description: httpVueLoader(SUB_COMP_PATH + 'menu-with-login-desc.vue'),
          images: httpVueLoader(SUB_COMP_PATH + 'menu-with-login-images.vue'),
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
