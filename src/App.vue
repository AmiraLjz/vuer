<template>
  <div>
    <vue-particles
      color="#dedede"
      :particleOpacity="0.7"
      :particlesNumber="80"
      shapeType="circle"
      :particleSize="4"
      linesColor="#dedede"
      :linesWidth="1"
      :lineLinked="true"
      :lineOpacity="0.4"
      :linesDistance="150"
      :moveSpeed="3"
      :hoverEffect="true"
      hoverMode="grab"
      :clickEffect="true"
      clickMode="push"
      class="particles"
    >
    </vue-particles>
    <div class="row">
      <div class="col-xs-offset-5 col-xs-3">
        <div class="page-header"><h2>个人简历</h2></div>
      </div>
    </div>

    <div class="row">
      <div class="col-xs-2">
        <div class="list-group">
          <!--生成路由链接-->
          <router-link to="/public" class="list-group-item">个人简介（Personal profile）</router-link>
          <router-link to="/list" class="list-group-item">专业技能（Master skill）</router-link>
          <router-link to="/case" class="list-group-item">实际案例（Demo）</router-link>
          <router-link to="/tspage" class="list-group-item">感谢（Thanks）</router-link>
        </div>
      </div>
      <div class="col-xs-1"></div>
      <div class="col-xs-5">
        <div class="panel">
          <div class="panel-body">
            <!--显示当前组件-->
            <keep-alive>
              <router-view></router-view>
            </keep-alive>
          </div>
        </div>
      </div>
    </div>
  </div>

</template>

<script>
  export default {}
</script>

<style>
  .page-header {
    border-bottom: 0;
  }

  h2 {
    color: springgreen;
    margin: 0 0 30px 650px;
    position: relative;
  }

  .particles {
    background-color: black;
    background-size: cover;
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
  }

  .panel {
    margin: 0 0 0 200px;
    border: 0;
    background: #f7ecb5;
    position: absolute;
    z-index: 3;
  }

 /* body {
    background: yellow;
  }*/
</style>
