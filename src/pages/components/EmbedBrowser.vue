<template>
  <div class="browserwrapper">
    <tabs
      slot="raw-content"
      tab-content-classes="tab-content-padding text-center"
    >
      <tab-pane v-for="(url, index) in getUrls" :key="index">
        <template slot="label">
          <i class="now-ui-icons objects_umbrella-13"></i> {{ url }}
        </template>
        <iframe :src="url" class="webframe"></iframe>
      </tab-pane>
    </tabs>
  </div>
</template>
<script>
import {  Tabs, TabPane } from '@/components';

export default {
  components: {
  
    Tabs,
    TabPane
  },
  computed: {
    getUrls() {
      console.log(this.$store.state.urls);
      return this.$store.state.urls;
    }
  }
};
</script>
<style lang="scss" scope>
.tab-content.tab-content-padding {
  padding: 10px;
}

.webframe{
  width: 100%;
  height: 75vh;
}
</style>
