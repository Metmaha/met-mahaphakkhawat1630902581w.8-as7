import { createRouter, createWebHistory } from "vue-router";
import Home from "../pages/Home.vue"
import about from "../pages/about.vue"
import projects from"../pages/projects.vue"
import contact from"../pages/contact.vue"
const routes = [{
    path: "/", 
    component: Home,
    name: "Home",
},{
        path: "/about",
        component: about,
        name: "about",
    },{
        path: "/projects",
        component: projects,
        name: "projects",
    },{
        path: "/contact",
        component: contact,
        name: "contact",
    
}]
const router =createRouter({
    history: createWebHistory(),
    scrollBehavior(to, from, savedPositer) {
        if (to.hash){
            return {
                relector: to.hash,
                hehavior: 'smooth'
            };
        }
        return { x: 0, y: 0};
    },
    routes,
});
export default router;