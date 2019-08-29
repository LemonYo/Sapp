<template>
  <div class="transform-module">
    <Draggable v-model="list" tag="ul" class="components-list">
      <li v-for="item in components" :key="item.id" @click="slectComponent(item.id)">
        <component :is="item.name" v-bind="item.options"></component>
        <div class="select-box-active" :class="{'active': item.id === selectId}">
          <div class="action-btns" v-if="item.id === selectId">
            <van-icon name="cross" size="16" color="#fff"></van-icon>
          </div>
        </div>
      </li>
    </Draggable>
  </div>
</template>
<script>
import Draggable from "vuedraggable";
import { Search, NavBar, Icon } from "vant";

export default {
  data() {
    return {
      disabled: false,
      sortOptions: {
        animation: 150,
        ghostClass: "sortable-ghost",
        chosenClass: "sortable-chosen",
        dragClass: "sortable-drag"
      },
      selectId: null,
      designData: [
        {
          name: "van-search",
          id: "a-1",
          options: {
            placeholder: "请输入搜索关键词",
            shape: "round"
          }
        },
        {
          name: "van-nav-bar",
          id: "a-2",
          options: {
            placeholder: "请输入搜索关键词",
            shape: "round"
          }
        }
      ]
    };
  },
  computed: {
    list: {
      get() {
        return this.designData || [];
      },
      set(value) {
        this.designData = value;
        console.log(value);
        // this.notifyReact();
      }
    },
    components() {
      return this.mapToComponents(this.list);
    }
  },
  components: {
    Draggable,
    [Search.name]: Search,
    [NavBar.name]: NavBar,
    [Icon.name]: Icon
  },
  created() {
    console.log("1");
  },
  methods: {
    // 组件点击
    slectComponent(id) {
      this.selectId = id;
    },
    // 组件处理
    mapToComponents(list) {
      return list;
    }
  }
};
</script>
<style lang="scss" scoped>
.transform-module {
  min-height: 100%;
  width: 100%;
  overflow-x: hidden;
  .components-list {
    display: block;
    li {
      position: relative;
      .select-box-active {
        z-index: 100000;
        position: absolute;
        background-color: transparent;
        top: 0;
        left: 0;
        right: 0;
        bottom: 0;
        border: 1px dashed transparent;
        z-index: 9999;
        &:hover {
          background-color: rgba(255, 0, 0, 0.03);
        }
        &.active {
          border: 1px dashed red;
          background-color: rgba(255, 0, 0, 0.1);
        }
        .action-btns {
          position: absolute;
          bottom: 0;
          right: 0;
          padding: 3px 5px;
          color: #fff;
          background: red;
        }
      }
    }
  }
}
</style>

