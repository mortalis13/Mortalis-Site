<template>
<div class="project" :class="project.add_classes" :id="project.id">
<div class="project-header">
  <div v-if="project.icon" class="project-icon"><img :src="project.icon" alt=""></div>
  <div class="project-info">
    <div class="title">
      <a v-if="project.url" :href="project.url" target="_blank">{{project.name}}</a>
      <span v-else><b>{{project.name}}</b></span>
      <a v-if="project.source_url" title="GitHub Source" class="github-source-icon" target="_blank" :href="project.source_url"><span class="screen-reader-text">GitHub Source</span></a>
      
      <span v-if="project.url2">,
      <a v-if="project.url2" :href="project.url2" target="_blank">{{project.name2}}</a>
      <a v-if="project.source_url2" title="GitHub Source" class="github-source-icon" target="_blank" :href="project.source_url2"><span class="screen-reader-text">GitHub Source</span></a>
      </span>
    </div>
    <div v-if="project.short_description" class="short-description" v-html="project.short_description"></div>
  </div>
</div>

<div class="description clearfix">
  <component :is="project.description"></component>
</div>
<div v-if="project.images" class="images">
  <component :is="project.images"></component>
</div>
<div class="project-separator-div"><div class="inner"></div></div>
</div>
</template>

<script>
module.exports = {
  props: ['project']
}
</script>