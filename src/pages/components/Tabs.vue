<template>
  <card class="tabwrapper">
    <tabs
      slot="raw-content"
      tab-content-classes="tab-content-padding text-center"
    >
      <tab-pane>
        <template slot="label">
          <i class="now-ui-icons objects_umbrella-13"></i> Map
        </template>
        <el-time-picker
          type="time"
          popper-class="time-picker time-picker-primary"
          placeholder="Date Time Picker"
          v-model="pickers.timePicker"
        >
        </el-time-picker>
        <vue-tree-list
          @click="onClick"
          @change-name="onChangeName"
          @delete-node="onDel"
          @add-node="onAddNode"
          :model="data"
          default-tree-node-name="new node"
          default-leaf-node-name="new leaf"
          v-bind:default-expanded="false"
        >
          <!-- <template v-slot:leafNameDisplay="slotProps">
            <span>
              {{ slotProps.model.name }} <span class="muted">#{{ slotProps.model.id }}</span>
            </span>
          </template> -->
          <span class="icon" slot="addTreeNodeIcon">📂</span>
          <span class="icon" slot="addLeafNodeIcon">＋</span>
          <span class="icon" slot="editNodeIcon">📃</span>
          <span class="icon" slot="delNodeIcon">✂️</span>
          <span class="icon" slot="leafNodeIcon">🍃</span>
          <span class="icon" slot="treeNodeIcon">🌲</span>
        </vue-tree-list>
        <!-- <button @click="getNewTree">Get new tree</button> -->
        <!-- <pre>
          {{newTree}}
        </pre> -->
      </tab-pane>
      <tab-pane>
        <template slot="label">
          <i class="now-ui-icons shopping_cart-simple"></i> Search
        </template>
          <fg-input
            addon-left-icon="now-ui-icons users_single-02"
            placeholder="Search"
          >
          </fg-input>
      </tab-pane>
      <tab-pane>
        <template slot="label">
          <i class="now-ui-icons shopping_shop"></i> Mode
        </template>
        <n-checkbox v-model="checkboxes.manual">Manual</n-checkbox>
        <n-checkbox v-model="checkboxes.machine">Machine</n-checkbox>
        <n-checkbox v-model="checkboxes.community">Community</n-checkbox>
        <n-checkbox v-model="checkboxes.mixed">Mixed</n-checkbox>
      </tab-pane>
      <tab-pane>
        <template slot="label">
          <i class="now-ui-icons ui-2_settings-90"></i> Preview
        </template>
        <p>
          I think that’s a responsibility that I have, to push possibilities, to show people, this is the level that things could be at.
        </p>
      </tab-pane>
    </tabs>
  </card>
</template>
<script>
import { Card, Tabs, TabPane } from '@/components';
import { TimePicker } from 'element-ui';
import { VueTreeList, Tree, TreeNode } from 'vue-tree-list'
import { FormGroupInput, Checkbox } from '@/components';

export default {
  components: {
    Card,
    Tabs,
    TabPane,
    [TimePicker.name]: TimePicker,
    VueTreeList,
    [FormGroupInput.name]: FormGroupInput,
    [Checkbox.name]: Checkbox,
  },
  data() {
    return {
      modals: {
        classic: false,
        mini: false
      },
      pickers: {
        timePicker: ''
      },
      newTree: {},
      checkboxes: {
        manual: false,
        machine: true,
        community: false,
        mixed: true
      },
      data: new Tree([
        {
          name: 'Node 1',
          id: 1,
          pid: 0,
          dragDisabled: true,
          addTreeNodeDisabled: true,
          addLeafNodeDisabled: true,
          editNodeDisabled: true,
          delNodeDisabled: true,
          disabled: true,
          children: [
            {
              name: 'Node 1-2',
              id: 2,
              isLeaf: true,
              pid: 1,
              disabled: true
            }
          ]
        },
        {
          name: 'Node 2',
          id: 3,
          pid: 0,
          disabled: true,
          children: [
            {
              name: 'Node 2-2',
              id: 2,
              isLeaf: true,
              pid: 1,
              disabled: true
            }
          ]
        },
        {
          name: 'Node 3',
          id: 4,
          pid: 0,
          disabled: true,
          children: [
            {
              name: 'Node 3-2',
              id: 2,
              isLeaf: true,
              pid: 1,
              disabled: true
            }
          ]
        }
      ])
    };
  },
  methods: {
    onDel(node) {
      console.log(node)
      node.remove()
    },

    onChangeName(params) {
      console.log(params)
    },

    onAddNode(params) {
      console.log(params)
    },

    onClick(params) {
      console.log(params)
    },

    addNode() {
      var node = new TreeNode({ name: 'new node', isLeaf: false })
      if (!this.data.children) this.data.children = []
      this.data.addChildren(node)
    },

    // getNewTree() {
    //   var vm = this
    //   function _dfs(oldNode) {
    //     var newNode = {}

    //     for (var k in oldNode) {
    //       if (k !== 'children' && k !== 'parent') {
    //         newNode[k] = oldNode[k]
    //       }
    //     }

    //     if (oldNode.children && oldNode.children.length > 0) {
    //       newNode.children = []
    //       for (var i = 0, len = oldNode.children.length; i < len; i++) {
    //         newNode.children.push(_dfs(oldNode.children[i]))
    //       }
    //     }
    //     return newNode
    //   }

    //   vm.newTree = _dfs(vm.data)
    // }
  }
};
</script>

<style lang="scss">
.tab-content.tab-content-padding {
  padding: 12px;
}
.tab-content.text-center{
  text-align: left !important;
}
.tabwrapper{
  height: 35vh;
}
</style>
