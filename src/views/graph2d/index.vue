
<!--局部样式-->
<style scoped>
    .viewGraph2dIndex {
        position: absolute;
        top: 0px;
        left: 0px;
        right: 0px;
        bottom: 0px;
    }

    .zoomLayer {
        display: inline-block;
    }
</style>

<!--全局局部覆盖样式-->
<style>

</style>

<template>
    <div class="viewGraph2dIndex">
        <div class="zoomLayer">
            测试
        </div>
    </div>
</template>

<script>
    import * as d3 from "d3";

    export default {
        name: "viewGraph2dIndex",
        props: {

        },
        data () {
            return {
                //#region 页面对象
                    $d_graph: null,
                    $d_zoomLayer: null,
                    $d_g: null,

                    zoomX: 0,
                    zoomY: 0,
                    zoomK: 1,
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
                graphZoomed () {
                    let eventType = d3.event.sourceEvent.type;
                    if (eventType == "wheel") {
                        this.zoomK = d3.event.transform.k;
                    }
                    else if (eventType == "mousemove") {
                        this.zoomX = d3.event.transform.x;
                        this.zoomY = d3.event.transform.y;
                    }
                    this.$d_zoomLayer.attr("style", `
                        transform: scale(${ this.zoomK }) translate(${ this.zoomX / this.zoomK }px, ${ this.zoomY / this.zoomK }px);
                        transform-origin: 50% 50%;
                    `);
                },

                initGraph () {
                    let zoom = d3.zoom().on("zoom", this.graphZoomed);
                    // 修改缩放幅度
                    zoom.wheelDelta(() => {
                        return -d3.event.deltaY * (d3.event.deltaMode ? 120 : 1) / 1000;
                    });
                    this.$d_graph = d3.select(this.$el);
                    this.$d_zoomLayer = this.$d_graph.select(".zoomLayer");
                    this.$d_graph.call(zoom);
                    // this.$d_zoomLayer.selectAll("div").data([1, 2, 3]).enter().append("div").text(d => d);
                },
            //#endregion
        },
        created () {

        },
        mounted () {
            this.initGraph();
        },
        components: {

        },
    };
</script>

