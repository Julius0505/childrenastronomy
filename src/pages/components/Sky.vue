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
      skyImg: new Image(imgSize.width, imgSize.height),
      configStage: stageSize
    };
  },
  mounted() {
    this.skyImg.src = require("@/assets/images/sky.png");
    const container = document.querySelector(".skywrapper");
    const observer = new ResizeObserver(() => {
      stageSize.width = container.offsetWidth;
      stageSize.height = container.offsetHeight;
    });
    observer.observe(container);
  },
  computed: {
    configImg: function() {
      return {
        x: 0,
        y: 0,
        image: this.skyImg,
        width: this.skyImg.width,
        height: this.skyImg.height,
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
    },
  },
  methods: {
    imageClick(e) {
      const x = e.evt.layerY-e.target.attrs.y;
      const y = e.evt.layerX-e.target.attrs.x;

      console.log("y:",y);
      console.log("x:",x);
      const stardata = [
        {
          name: "jupiter",
          location:[0,0,100,100],
          urls:[
            "https://www.google.com/sky",
            "https://snakeomatic.com",
          ]
        },
        {
          name: "jupiter",
          location:[0,100,100,200],
          urls:[
            "https://wedo.lu",
            "https://www.google.com/sky",
          ]
        }
      ];
      let urls = [];
      stardata.forEach(item => {
        if(x>item.location[0] && x<item.location[2] && y>item.location[1] && y<item.location[3]){
          urls = item.urls;
        }
      });

      console.log('urls', urls);
      this.$store.dispatch('saveUrls', urls);

      // var parser = require('fast-xml-parser');
      // var he = require('he');

      // // var xmlData = require("@/assets/sky.xml");
      // var options = {
      //     attributeNamePrefix : "@_",
      //     attrNodeName: "attr", //default is 'false'
      //     textNodeName : "#text",
      //     ignoreAttributes : true,
      //     ignoreNameSpace : false,
      //     allowBooleanAttributes : false,
      //     parseNodeValue : true,
      //     parseAttributeValue : false,
      //     trimValues: true,
      //     cdataTagName: "__cdata", //default is 'false'
      //     cdataPositionChar: "\\c",
      //     parseTrueNumberOnly: false,
      //     arrayMode: false, //"strict"
      //     attrValueProcessor: (val, attrName) => he.decode(val, {isAttributeValue: true}),//default is a=>a
      //     tagValueProcessor : (val, tagName) => he.decode(val), //default is a=>a
      //     stopNodes: ["parse-me-as-string"]
      // };

      // if( parser.validate(xmlData) === true) { //optional (it'll return an object in case it's not valid)
      //     var jsonObj = parser.parse(xmlData,options);
      // }

      // // Intermediate obj
      // var tObj = parser.getTraversalObj(xmlData,options);
    }
  }  
};
</script>
<style lang="scss" scope>
.tab-content.tab-content-padding {
  padding: 20px;
}
.skywrapper{
  height:50vh;
}
.section-tabs{
  background-color: transparent !important;
  padding: 0 !important
}
.card{
  margin-bottom: 10px !important;
}
.card-body{
  padding: 1px !important;
} 
</style>
