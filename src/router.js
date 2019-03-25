import Vue from 'vue'
import Router from 'vue-router'
import Home from './views/Home.vue'
import Blog from './views/Blog.vue'
import Post from './views/Post.vue'
import PostEdit from './views/PostEdit.vue'

Vue.use(Router)

export default new Router({
  mode: 'history',
  base: process.env.BASE_URL,
  routes: [
    {
      path: '/',
      name: 'home',
      component: Home
    },
    {
      path: '/blog',
      name: 'blog',
      component: Blog,
      props: true
    },
    {
      path: '/blog/new',
      name: 'post-new',
      component: Blog
    },
    {
      path: '/blog/edit/:id',
      name: 'post-edit',
      component: PostEdit
    },
    {
      path: '/blog/:id',
      name: 'post-single',
      component: Post
    },
    {
      path: '/about',
      name: 'about',
      // route level code-splitting
      // this generates a separate chunk (about.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import(/* webpackChunkName: "about" */ './views/About.vue')
    }
  ]
})
