<template>
  <div>
    <div class="container-fluid main-container">
      <div class="row">
        <div class="col-md-4 col-xl-4 ">
          <tabs-section></tabs-section> 
          <sky-section></sky-section>
        </div>
        <div class="col-md-8 col-xl-8 ">
          <embed-browser></embed-browser>            
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import TabsSection from './components/Tabs';
import SkySection from './components/Sky';
import EmbedBrowser from './components/EmbedBrowser';

export default {
  name: 'index',
  bodyClass: 'index-page',
  components: {
    TabsSection,
    SkySection,
    EmbedBrowser,
  }
};
</script>
<style lang="scss" scope>
.main-container{
  margin-top: 10px;
}

</style>
