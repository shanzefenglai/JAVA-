<template>
  <div class="common-layout">
    <el-container>
        <el-header>
            <el-menu :default-ative="$route.path" mode="horizontal" router>
                <el-menu-item index="/home">首页</el-menu-item>
                <el-sub-menu index="/list">
                    <template #title>榜单</template>
                    <el-menu-item index="/list/latest">最新推荐</el-menu-item>
                    <el-menu-item index="/list/best">高分推荐</el-menu-item>
                </el-sub-menu>
                <el-menu-item index="/search">搜索</el-menu-item>
            </el-menu>
        </el-header>
        <el-main>
            <router-view/>
        </el-main>
    </el-container>
</div>
  
</template>
<script setup lang="ts">
  
</script>
<style scoped>
  .common-layout {
      width: 100%;
      height: 100%;
  }
</style>


