<template>
  <card class="skywrapper">
    <v-stage :config="configStage">
      <v-layer>
        <v-image :config="configImg" @click="imageClick"></v-image>
      </v-layer>
    </v-stage>
  </card>
</template>
<script>
import { Card } from '@/components';
import Vue from 'vue';
import VueKonva from 'vue-konva';
import skyjson from '@/assets/sky.json'

Vue.use(VueKonva);

let stageSize = {
  width: 100,
  height: 100
}
let imgSize = {
  width: 1437,
  height: 1207
}
export default {
  components: {
    Card,
  },
  data() {
    return {
      configStage: stageSize,
      stardata: skyjson,
      configImg: {},
    };
  },
  mounted() {
    const container = document.querySelector(".skywrapper");
    const observer = new ResizeObserver(() => {
      stageSize.width = container.offsetWidth;
      stageSize.height = container.offsetHeight;
    });
    observer.observe(container);
  },
  created() {
    const image = new Image();
    image.src = require("@/assets/images/sky.png");
    image.onload = () => {
      // set image only when it is loaded
      this.configImg = {
        x: -200,
        y: -200,
        image: image,
        width: imgSize.width,
        height: imgSize.height,
        draggable: true,
        dragBoundFunc: function(pos) {
          let newX = (pos.x <= 0 && pos.x+imgSize.width > stageSize.width) ? pos.x : pos.x > 0 ? 0 : stageSize.width-imgSize.width;
          let newY = (pos.y <= 0 && pos.y+imgSize.height > stageSize.height) ? pos.y : pos.y > 0 ? 0 : stageSize.height-imgSize.height;
          return {
            x: newX,
            y: newY,
          };
        }
      }
    };
  },
  methods: {
    imageClick(e) {
      const x = e.evt.layerY-e.target.attrs.y;
      const y = e.evt.layerX-e.target.attrs.x;

      console.log("y:",y);
      console.log("x:",x);
      
      let urls = [];
      
      this.stardata.forEach(item => {
        if(y>item.location[0] && y<item.location[2] && x>item.location[1] && x<item.location[3]){
          urls = item.urls;
        }
      });

      console.log('urls', urls);
      this.$store.dispatch('saveUrls', urls);
    }
  }  
};
</script>
<style lang="scss">
.skywrapper{
  min-height:50vh;
}
.card{
  margin-bottom: 10px !important;
}
.card-body{
  padding: 0 !important;
} 
</style>
