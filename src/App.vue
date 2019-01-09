
<!--局部样式-->
<style scoped>
    #app {
        width: 100%;
        height: 100%;
    }
    .myHeader {
        padding: 0px 30px 0px 30px;
        background-color: #333;
        color: white;
        display: flex;
        justify-content: space-between;
        align-items: center;
    }
    .myHeader > span {
        font-size: 24px;
    }
    .myMain {
        position: relative;
        padding: 0px!important;
    }
</style>

<!--全局局部覆盖样式-->
<style>
    html, body {
        margin: 0px;
        padding: 0px;
        width: 100%;
        height: 100%;
    }
</style>

<template>
    <el-container id="app">
        <el-header height="50px" class="myHeader">
            <span>Test</span>
        </el-header>
        <el-main class="myMain">
            <router-view></router-view>
        </el-main>
    </el-container>
</template>

<script>
    export default {
        name: "",
        props: {

        },
        data () {
            return {
                //#region 页面对象
                //#endregion

                //#region 页面内容绑定数据
                //#endregion

                //#region 页面样式绑定数据
                //#endregion
            };
        },
        watch: {

        },
        computed: {
            //#region 常量计算属性
            //#endregion

            //#region 数据转换计算属性
            //#endregion

            //#region 样式计算属性
            //#endregion
        },
        methods: {
            //#region 页面事件方法
            //#endregion

            //#region 业务逻辑方法
            //#endregion

            //#region 接口访问方法
            //#endregion

            //#region 数据转换方法
            //#endregion

            //#region 自动样式方法
            //#endregion

            //#region 其他方法
            //#endregion
        },
        created () {

        },
        mounted () {

        },
        components: {

        },
    };
</script>

