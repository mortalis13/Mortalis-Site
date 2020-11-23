<template>
<div>
  <header id="header" class="section">
    <h2 class="name"><a href="http://mortalis.c1.biz" rel="home">Roman Hudz</a></h2>
    <h4 class="prof">Program Developer</h4>
  </header>

  <div id="content">
    <section id="contacts" class="section">
      <h3 class="text-center section-title"><span>[ </span>Contacts<span> ]</span></h3>

      <nav id="contacts-menu" class="contacts-menu clear">
        <div class="contacts-menu-container">
          <div class="menu-part-i">
            <ul id="menu-social-i" class="menu menu-social">
              <social-menu-item id="github"></social-menu-item>
              <social-menu-item id="firefox"></social-menu-item>
              <social-menu-item id="stackoverflow"></social-menu-item>
              <social-menu-item id="wordpress"></social-menu-item>
              <social-menu-item id="joomla" class="divider-menu"></social-menu-item>
            </ul>
          </div><!--
       --><div class="menu-part-ii">
            <ul id="menu-social-ii" class="menu menu-social">
              <social-menu-item id="email"></social-menu-item>
              <social-menu-item id="linkedin"></social-menu-item>
              <social-menu-item id="facebook"></social-menu-item>
              <social-menu-item id="tumblr"></social-menu-item>
              <social-menu-item id="soundcloud"></social-menu-item>
            </ul>
          </div>
        </div>
      </nav>
    </section>

    <nav id="projects-nav" data-spy="affix">
      <ul id="nav" class="nav">
        <li v-for="(item, index) in categories" :class="'menu-row-'+index">
          <router-link :to="item.link" @click.native="scrollToTop">{{item.title}} <span :class="'count-label '+item.count_class">x{{item.count}}</span></router-link>
          <ul class="projects-submenu">
            <li v-for="project in item.projects">
              <router-link :to="{hash: project.id}">{{project.name}}</router-link>
            </li>
          </ul>
          <svg class="active-indicator" height="12" width="12"><path d="M0 0 L5 6 L0 12 Z"/></svg>
        </li>
        <li class="menu-row-last">
      </ul>
      <div id="menu-wall"></div>
    </nav>

    <section id="projects" class="section">
      <h3 class="text-center section-title"><span>[ </span>Projects<span> ]</span></h3>
      <div id="projects-wrap">
        <router-view></router-view>
      </div>
    </section>
  </div>

  <footer id="footer">
    <div class="footer-content">
      <div class="footer-info col-xs-4 text-left">&copy; {{year}}</div>
      <div class="footer-info col-xs-4 text-center"></div>
      <div class="footer-info col-xs-4 text-right">
        <a href="https://github.com/mortalis13/Mortalis-Site" target="_blank">{{version}}</a>&nbsp;
        <a title="GitHub Source" class="github-source-icon hidden-xxs" target="_blank" href="https://github.com/mortalis13/Mortalis-Site"><span class="screen-reader-text">GitHub Source</span> <span class=""></span></a>
      </div>
    </div>
    <a href="#" id="go-to-top"></a>
  </footer>
<!-- <script src="js/main.min.js"></script> -->
</div>
</template>

<script>
let social_menu = {
  'github'        : {title: 'GitHub'         , url: 'https://github.com/mortalis13'},
  'firefox'       : {title: 'Firefox Addons' , url: 'https://addons.mozilla.org/en-US/firefox/user/mortalis/'},
  'stackoverflow' : {title: 'Stack Overflow' , url: 'http://stackoverflow.com/users/1106547/mortalis'},
  'wordpress'     : {title: 'Wordpress'      , url: 'https://profiles.wordpress.org/mortalis#content-plugins'},
  'joomla'        : {title: 'Joomla'         , url: 'http://extensions.joomla.org/profile/profile/details/260289'},
  'email'         : {title: 'E-Mail'         , url: 'mailto:aspirinumes@gmail.com'},
  'linkedin'      : {title: 'LinkedIn'       , url: 'https://www.linkedin.com/in/mortalis'},
  'facebook'      : {title: 'Facebook'       , url: 'https://www.facebook.com/mortalis13'},
  'tumblr'        : {title: 'Tumblr'         , url: 'https://mortalis13.tumblr.com'},
  'soundcloud'    : {title: 'SoundCloud'     , url: 'https://soundcloud.com/mortalis-music'},
}

Vue.component('social-menu-item', {
  template: `<li :class="'menu-item item-' + id"><a :title="item.title" rel="tooltip" data-toggle="tooltip" data-placement="top" target="_blank" :href="item.url"><span class="screen-reader-text">{{item.title}}</span></a></li>`,
  props: ['id'],
  data() { return {
    item: social_menu[this.id]
  }}
});

// ---------------------------
let projects = {
  'android': [
    {name: 'Home Dictionary', id: 'home-dictionary'},
    {name: 'Metronomix', id: 'metronomix'},
    {name: 'Wrap Keyboard', id: 'wrap-keyboard'},
    {name: 'Plain Alarm', id: 'plain-alarm'},
    {name: 'Quick Info', id: 'quick-info'},
    {name: 'Verb Conjugator', id: 'verb-conjugator'},
    {name: 'Kodi Control', id: 'kodi-control'},
    {name: 'Task Lister', id: 'task-lister'},
  ],
  'qtcpp': [
    {name: 'QtColorPicker', id: 'qtcolorpicker'},
    {name: 'List Folders', id: 'list-folders'},
    {name: 'Android Manager', id: 'android-manager'},
    {name: 'File Splitter', id: 'file-splitter'},
    {name: 'Path Edit', id: 'path-edit'},
    {name: 'C++ Native Libraries', id: 'cpp-native-libraries'},
    {name: 'Libraries for Android', id: 'android-jni-libraries'},
    {name: 'Dictionary Converters', id: 'dictionary-converters'},
  ],
  'web-sites': [
    {name: 'PC Advice', id: 'pcadvice'},
    {name: 'LocalShop', id: 'localshop'},
    {name: 'Simple Blog', id: 'simpleblog'},
  ],
  'wordpress': [
    {name: 'Starter Point', id: 'stater-point'},
    {name: 'HTML Post Editor', id: 'html-post-editor'},
    {name: 'TinyMCE Code Formatting', id: 'tinymce-code-formatting'},
  ],
  'joomla': [
    {name: 'Advanced Admin Menu', id: 'advanced-admin-menu'},
    {name: 'Menu With Login', id: 'menu-with-login'},
  ],
  'firefox-addons': [
    {name: 'Close Tabs Shortcuts', id: 'close-tabs-shortcuts'},
    {name: 'Bookmark Shortcuts', id: 'bookmark-shortcuts'},
    {name: 'Open Last Download', id: 'open-last-download'},
    {name: 'Tabs Export/Import', id: 'tabs-export-import'},
    {name: 'Bookmarks Sidebar Button', id: 'bookmarks-sidebar-button-pr'},
    {name: 'Regex Find', id: 'regex-find-pr'},
    {name: 'Toggle Images and JS', id: 'toggle-images-js'},
    {name: 'Copy Paste Location', id: 'copy-paste-location'},
  ],
  'misc': [
    {name: 'Double Commander', id: 'double-commander'},
    {name: '7-Zip', id: '_7zip'},
    {name: 'ADBView', id: 'adbview'},
    {name: 'Number Converter', id: 'number-converter'},
    {name: 'Offline \'cplusplus.com\'', id: 'cplusplus-reference'},
    {name: 'Python Scripts', id: 'python-scripts'},
    {name: 'Sublime Plugins', id: 'sublime-plugins'},
    {name: 'Norber Theme', id: 'norber-theme'},
  ],
}

module.exports = {
data() { return {
  version: 'v1.4.0',
  year: 2020,
  
  categories: [
    {title: 'Android'        , link: 'android'        , count: 8 , count_class: 'green', projects: projects['android']},
    {title: 'Qt / C++'       , link: 'qtcpp'          , count: 8 , count_class: 'green', projects: projects['qtcpp']},
    {title: 'Web Sites'      , link: 'web-sites'      , count: 3 , count_class: 'beige', projects: projects['web-sites']},
    {title: 'Wordpress'      , link: 'wordpress'      , count: 3 , count_class: 'beige', projects: projects['wordpress']},
    {title: 'Joomla'         , link: 'joomla'         , count: 2 , count_class: 'red',   projects: projects['joomla']},
    {title: 'Firefox Addons' , link: 'firefox-addons' , count: 8 , count_class: 'green', projects: projects['firefox-addons']},
    {title: 'Misc'           , link: 'misc'           , count: 8 , count_class: 'green', projects: projects['misc']},
  ],
}},
methods: {
  scrollToTop() {
    window.scrollTo(0,0);
  }
},
mounted() {
  // let js_src = 'js/main.js'
  let js_src = 'js/main.min.js'
  
  let externalScript = document.createElement('script')
  externalScript.setAttribute('src', js_src)
  document.head.appendChild(externalScript)
}}
</script>