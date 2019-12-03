import navBar from './navBar.vue'
import screen from './screen.vue'
import screenContent from './screenContent.vue'
import tabBar from './tabBar.vue'

const components={
    navBar,
    screen,
    screenContent,
    tabBar
}

export default {
    install(Vue){
        Object.keys(components).map(key=>{
            const cp = components[key]
            Vue.component(cp.name,cp)

            //  Vue.component ( 组件名称 , 组件)
            //  这就是在声明组件时填写name的用处了
        })
    }
}
