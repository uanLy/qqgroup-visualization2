import Vue from "vue";
import Router from "vue-router";

Vue.use(Router);

export default new Router ({
    routes: [
        {
            path: "/",
            name: "viewHomeIndex",
            component: () => import("./views/home/"),
        },
        {
            path: "/2d",
            name: "viewGraph2dIndex",
            component: () => import("./views/graph2d"),
        },
        {
            path: "/3d",
            name: "viewGraph3dIndex",
            component: () => import("./views/graph3d"),
        },
        {
            path: "/table",
            name: "viewTableIndex",
            component: () => import("./views/table"),
        },
    ]
});
