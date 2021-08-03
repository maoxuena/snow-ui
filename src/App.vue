<template>
  <div id="app">
    <p class="title">button</p>
    <div class="wrap">
      <s-button :loading="loading" @click="loading = !loading">按钮</s-button>
      <s-button icon="settings" icon-position="left">按钮</s-button>
      <s-button icon="settings" icon-position="right">按钮</s-button>
      <s-button-group>
        <s-button icon="left" icon-position="left">向前</s-button>
        <s-button>中间</s-button>
        <s-button icon="right" icon-position="right">向后</s-button>
      </s-button-group>
    </div>
    <p class="title">icon</p>
    <div class="wrap">
      <s-icon name="download"></s-icon>
    </div>
    <p class="title">input</p>
    <div class="wrap">
      <s-input value="snow" @change="inputChange"></s-input>
      <s-input value="disabled" disabled></s-input>
      <s-input value="readonly" readonly></s-input>
      <s-input value="error" error="不能少于2个字"></s-input>
    </div>
    <p class="title">v-model</p>
    <div class="wrap">
      <s-input value="snow" v-model="message"></s-input>
      <s-button @click="message += 1">+1</s-button>
      <p>{{ message }}</p>
    </div>
    <p class="title">row col</p>
    <div class="wrap">
      <s-row gutter="20" align="center">
        <s-col
          span="24"
          :ipad="{ span: 12 }"
          :narrow-pc="{ span: 8 }"
          :pc="{ span: 6 }"
          :wide-pc="{ span: 4 }"
        >
          <div class="box">6</div>
        </s-col>
        <s-col
          span="22"
          offset="2"
          :ipad="{ span: 10 }"
          :narrow-pc="{ span: 14 }"
          :pc="{ span: 16 }"
          :wide-pc="{ span: 18 }"
        >
          <div class="box">16</div>
        </s-col>
      </s-row>
    </div>
    <div class="wrap">
      <s-row gutter="20" align="right">
        <s-col span="6">
          <div class="box">6</div>
        </s-col>
        <s-col span="2">
          <div class="box">2</div>
        </s-col>
        <s-col span="16">
          <div class="box">16</div>
        </s-col>
      </s-row>
    </div>
    <div class="wrap">
      <s-row gutter="20">
        <s-col span="8">
          <div class="box">8</div>
        </s-col>
        <s-col span="16">
          <div class="box">16</div>
        </s-col>
      </s-row>
    </div>
    <p class="title">layout</p>
    <div class="wrap">
      <s-layout style="height: 200px">
        <s-header>header</s-header>
        <s-content>content</s-content>
        <s-footer>footer</s-footer>
      </s-layout>
    </div>
    <div class="wrap">
      <s-layout style="height: 200px">
        <s-header>header</s-header>
        <s-layout>
          <s-sider>sider</s-sider>
          <s-content>content</s-content>
        </s-layout>
        <s-footer>footer</s-footer>
      </s-layout>
    </div>
    <div class="wrap">
      <s-layout style="height: 200px">
        <s-sider>sider</s-sider>
        <s-layout>
          <s-header>header</s-header>
          <s-content>content</s-content>
          <s-footer>footer</s-footer>
        </s-layout>
      </s-layout>
    </div>
    <p class="title">popover</p>
    <div class="wrap">
      <div
        @click="yyy"
        style="overflow: hidden; border: 2px solid red; padding: 50px 100px"
      >
        <s-popover position="bottom">
          <template slot="content">
            <div>
              po
              <s-button>关闭</s-button>
            </div>
          </template>
          <s-button>点击 bottom</s-button>
        </s-popover>
        <s-popover>
          <template slot="content" slot-scope="{ close }">
            <h6>title</h6>
            <div>
              popover内容popover内容popover内容popover内容popover内容popover内容popover内容popover内容
            </div>
            <s-button @click="close">关闭</s-button>
          </template>
          <s-button>点击 top</s-button>
        </s-popover>
        <s-popover position="left" trigger="hover">
          <template slot="content">
            <div>
              popoverpopoverpopoverpopover
              popover内容popover内容popover内容popover内容popover内容
            </div>
          </template>
          <s-button>上移 left</s-button>
        </s-popover>
        <s-popover position="right" trigger="hover">
          <template slot="content">
            <div>
              popoverpopoverpopoverpopover
              popover内容popover内容popover内容popover内容popover内容
            </div>
          </template>
          <s-button>上移 right</s-button>
        </s-popover>
      </div>
    </div>
    <p class="title">tabs</p>
    <div class="wrap">
      <!-- <s-tabs :selected="selectedTab" @update:selected="selectedTab = $event"> -->
      <s-tabs :selected.sync="selectedTab" @update:selected="yyy">
        <s-tabs-head>
          <template slot="actions">
            <button>设置</button>
          </template>
          <s-tabs-item name="tab1"
            ><s-icon name="settings"></s-icon>娱乐</s-tabs-item
          >
          <s-tabs-item name="tab2">游戏</s-tabs-item>
          <s-tabs-item name="tab3" disabled>美食</s-tabs-item>
        </s-tabs-head>
        <s-tabs-body>
          <s-tabs-pane name="tab1">娱乐相关</s-tabs-pane>
          <s-tabs-pane name="tab2">游戏相关</s-tabs-pane>
          <s-tabs-pane name="tab3">美食相关</s-tabs-pane>
        </s-tabs-body>
      </s-tabs>
    </div>
    <p class="title">collapse</p>
    <div class="wrap">
      <p>single 当前选中{{ selectedTabSingle }}</p>
      <s-collapse single :selected.sync="selectedTabSingle">
        <s-collapse-item title="标题1" name="1">内容1</s-collapse-item>
        <s-collapse-item title="标题2" name="2">内容2</s-collapse-item>
        <s-collapse-item title="标题3" name="3">内容3</s-collapse-item>
      </s-collapse>
      <p>not single</p>
      <s-collapse :selected.sync="selectedTabSingle">
        <s-collapse-item title="标题1" name="1">内容1</s-collapse-item>
        <s-collapse-item title="标题2" name="2">内容2</s-collapse-item>
        <s-collapse-item title="标题3" name="3">内容3</s-collapse-item>
      </s-collapse>
    </div>
    <p class="title">toast</p>
    <div class="wrap">
      <button @click="showToast('top')">show toast top</button>
      <button @click="showToast('middle')">show toast middle</button>
      <button @click="showToast('bottom')">show toast bottom</button>
    </div>
    <p class="title">cascader</p>
    <div class="wrap">
      <p>联级选择</p>
      <p>{{selected && selected[0] && selected[0].name || '空'}}</p>
      <p>{{selected && selected[1] && selected[1].name || '空'}}</p>
      <p>{{selected && selected[2] && selected[2].name || '空'}}</p>
      <s-cascader :source.sync="source" 
                  popover-height="200px" 
                  :selected.sync="selected"
                  :load-data="loadData"
                  @update:source="onUpdateSource"
                  @update:selected="onUpdateSelected"></s-cascader>
      <s-cascader :source.sync="source1" 
                  popover-height="200px" 
                  :selected.sync="selected1"
                  @update:source="onUpdateSource"
                  @update:selected="onUpdateSelected"></s-cascader>
      <!-- :selected.sync="selected" 等价于 :selected="selected" @update:selected="selected = $event" -->
      <p>联级选择</p>
    </div>
    <p class="title">button</p>
    <div class="wrap"></div>
  </div>
</template>

<script>
import Button from './button'
import ButtonGroup from './button-group'
import Icon from './icon'
import Input from './input'
import Row from './row'
import Col from './col'
import Layout from './layout'
import Header from './header'
import Sider from './sider'
import Content from './content'
import Footer from './footer'
import Popover from './popover'
import Tabs from './tabs'
import TabsBody from './tabs-body'
import TabsHead from './tabs-head'
import TabsItem from './tabs-item'
import TabsPane from './tabs-pane'
import Collapse from './collapse'
import CollapseItem from './collapse-item'
import Cascader from './cascader'

import db from './db'
function ajax1 (parentId = 0, success, fail ) {
  let result = db.filter((item) => item.parent_id == parentId)
  let id = setTimeout(()=>{
    success(result)
  }, 800)
  return id
}

function ajax2 (parentId = 0) {
    return new Promise((success, fail) => {
      setTimeout(() => {
        let result = db.filter((item) => item.parent_id == parentId)
        result.forEach(node=>{
          if(db.filter(item => item.parent_id === node.id).length > 0){
            node.isLeaf = false
          }else{
            node.isLeaf = true
          }
        })
        success(result)
      }, 800)
    })
  }

export default {
  name: 'App',
  components: {
    's-button': Button,
    's-button-group': ButtonGroup,
    's-icon': Icon,
    's-input': Input,
    's-row': Row,
    's-col': Col,
    's-layout': Layout,
    's-header': Header,
    's-sider': Sider,
    's-content': Content,
    's-footer': Footer,
    's-popover': Popover,
    's-tabs-body': TabsBody,
    's-tabs-head': TabsHead,
    's-tabs-item': TabsItem,
    's-tabs-pane': TabsPane,
    's-tabs': Tabs,
    's-collapse': Collapse,
    's-collapse-item': CollapseItem,
    's-cascader': Cascader
  },
  data () {
    return {
      loading: false,
      message: 'hi',
      selectedTab: 'tab1',
      selectedTabSingle: ['1', '3'],
      selected:[],
      selected1:[],
      source: [],
      source1:[
        {
          name: '浙江',
          children: [
            {
              name: '杭州',
              children: [{ name: '上城' }, { name: '下城' }, { name: '江干' }],
            },
            {
              name: '嘉兴',
              children: [{ name: '南湖' }, { name: '秀洲' }, { name: '嘉善' }],
            },
          ],
        },
        {
          name: '福建',
          children: [
            {
              name: '福州',
              children: [{ name: '鼓楼' }, { name: '台江' }, { name: '仓山' }],
            },
          ],
        }
      ]
    }
  },
  created(){
    // ajax1(0, (result)=>{
    //   this.source = result
    // })
    ajax2(0).then((result)=>{
      this.source = result
    })
  },
  methods: {
    loadData ({id}, updateSource) {
      ajax2(id).then(result => {
        updateSource(result) // 回调:把别人传给我的函数调用一下
      })
    },
    xxx(){
      ajax2(this.selected[0].id).then((result)=>{
        let lastLevelSelected = this.source.filter(item => item.id === this.selected[0].id)[0]
        this.$set(lastLevelSelected, 'children', result)
      })
    },
    onUpdateSource () {
    },
    onUpdateSelected () {
    },
    inputChange (e) {
      console.log(e.target.value)
    },
    yyy () {
      console.log('yyy')
    },
    showToast (position) {
      this.$toast('<p>show toast!</p><i>倾斜了</i>', {
        position,
        autoClose: 3,
        enableHtml: true,
        closeButton: {
          text: '知道了',
          callback(toast) {
            console.log(toast)
            console.log('ok')
          },
        },
      })
    }
  }
}
</script>

<style lang="scss">
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}

*::-webkit-scrollbar {
  /*滚动条整体样式*/
  width : 10px;  /*高宽分别对应横竖滚动条的尺寸*/
  height: 1px;
}

*::-webkit-scrollbar-thumb {
  /*滚动条里面小方块*/
  border-radius: 10px;
  box-shadow   : inset 0 0 5px rgba(0, 0, 0, 0.2);
  background   : #b1b1b1;
}

*::-webkit-scrollbar-track {
  /*滚动条里面轨道*/
  box-shadow   : inset 0 0 5px rgba(0, 0, 0, 0.1);
  // border-radius: 10px;
  background   : #ededed;
}

:root {
  --font-size: 14px;
}

body {
  font-size: var(--font-size);
}

#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #2c3e50;
  margin-top: 60px;

  .title {
    background-color: #e1e1e1;
    border-left: 5px solid rgb(16, 113, 204);
    padding: 5px;
    line-height: 1.5em;
    font-size: 18px;
    font-weight: bold;
  }

  .wrap {
    padding-bottom: 20px;
    border-bottom: 1px solid #e1e1e1;
  }

  .box {
    border: 1px solid rgb(16, 113, 204);
  }

  .layout {
    .header {
      background-color: #7dbcea;
    }
    .sider {
      background-color: #3ba0e9;
      width: 200px;
    }
    .content {
      background-color: #108ee9;
    }
    .footer {
      background-color: #7dbcea;
    }
  }
}
</style>
