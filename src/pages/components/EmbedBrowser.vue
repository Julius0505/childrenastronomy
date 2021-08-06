<template>
  <div class="browserwrapper">
    <tabs
      slot="raw-content"
      tab-content-classes="tab-content-padding text-center"
    >
      <tab-pane v-for="(url, index) in getUrls" :key="index" :id="url">
        <template slot="label" :class="`label_${index}`">
          <i class="now-ui-icons objects_umbrella-13"></i> {{ url }}
        </template>
        <iframe :src="url" class="webframe"></iframe>
      </tab-pane>
    </tabs>
  </div>
</template>
<script>
import { Tabs, TabPane } from '@/components';

export default {
  components: {
    Tabs,
    TabPane
  },
  computed: {
    getUrls() {
      this.$forceUpdate();
      return this.$store.state.urls;
    }
  }
};
</script>
<style lang="scss">
.webframe{
  width: 100%;
  height: 75vh;
}
</style>
