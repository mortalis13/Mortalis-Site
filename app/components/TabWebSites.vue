<template>
<div class="project-type" id="web-sites">
  <div class="type-title-wrap"><div class="type-title">Web Sites</div></div>
  <gen-project v-for="(project, index) in projects" :project="project" :key="index"></gen-project>
</div>
</template>

<script>
let ICONS_PATH = 'images/icons/';
let SUB_COMP_PATH = '/app/projects-websites/';

module.exports = {
  data() {
    return {
      projects: [
        {
          name: 'PC Advice',
          id: 'pcadvice',
          url: 'http://pcadvice.c1.biz',
          source_url: 'https://github.com/mortalis13/PCAdvice-site',
          short_description: 'Tricks and tutorials on different computer topics based on my own computer experience',
          
          description: httpVueLoader(SUB_COMP_PATH + 'pcadvice-desc.vue'),
          images: httpVueLoader(SUB_COMP_PATH + 'pcadvice-images.vue'),
        },
        {
          name: 'LocalShop',
          id: 'localshop',
          url: 'http://localshop.c1.biz',
          source_url: 'https://github.com/mortalis13/Localshop',
          short_description: 'An E-commerce template site based on a custom <a target="_blank" href="https://wordpress.org"><b>Wordpress</b></a> theme and the <a target="_blank" href="https://woocommerce.com"><b>WooCommerce</b></a> platform',
          
          description: httpVueLoader(SUB_COMP_PATH + 'localshop-desc.vue'),
          images: httpVueLoader(SUB_COMP_PATH + 'localshop-images.vue'),
        },
        {
          name: 'Simple Blog',
          id: 'simpleblog',
          url: 'http://simpleblog-site.c1.biz',
          source_url: 'https://github.com/mortalis13/simpleblog-site',
          short_description: 'A blog site based on the use of the <a target="_blank" href="https://www.joomla.org"><b>Joomla!</b></a> CMS',
          
          description: httpVueLoader(SUB_COMP_PATH + 'simpleblog-desc.vue'),
          images: httpVueLoader(SUB_COMP_PATH + 'simpleblog-images.vue'),
          add_classes: {'last': true},
        },
      ]
    }
  },
  
components: {'gen-project': httpVueLoader('/app/components/GenProject.vue')},

}
</script>
