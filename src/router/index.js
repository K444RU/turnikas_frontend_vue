import Vue from 'vue'
import VueRouter from 'vue-router'
import HomeView from '../views/HomeView.vue'
import LogInView from "@/views/LogInView"
import JoinView from "@/views/JoinView";
import TestView from "@/views/TestView";
import teamProfileView from "@/views/TeamProfileView";
import playerProfileView from "@/views/PlayerProfileView";
import tournamentListView from "@/views/TournamentListView";
import tournamentView from "@/views/TournamentView";
import tournamentRegistrationView from "@/views/admin/TournamentRegistrationView"
import newUserProfileView from "@/views/NewUserProfileView";
import UserProfileView from "@/views/UserProfileView";
import AdminView from "@/views/admin/AdminView";
import adminTournamentView from "@/views/admin/AdminTournamentView";

Vue.use(VueRouter)

const routes = [
    {
        path: '/',
        name: 'home',
        component: HomeView
    },
    {
        path: '/test',
        name: 'test',
        component: TestView
    },
// {
//     path: '/test2',
//     name: 'test2',
//     component: Test2View
//   },
    {
        path: '/login',
        name: 'login',
        component: LogInView
    },
    {
        path: '/user-profile',
        name: 'userProfileRoute',
        component: UserProfileView
    },
    {
        path: '/new-user-profile',
        name: 'newUserProfileRoute',
        component: newUserProfileView
    },
    {
        path: '/team-profile',
        name: 'teamProfileRoute',
        component: teamProfileView
    },
    {
        path: '/player-profile/:playerId',
        name: 'playerProfileRoute',
        component: playerProfileView
    },
    {
        path: '/tournament-list',
        name: 'tournamentListRoute',
        component: tournamentListView
    },
    {
        path: '/tournament',
        name: 'tournamentRoute',
        component: tournamentView
    },
    {
        path: '/tournament-registration',
        name: 'tournamentRegistrationRoute',
        component: tournamentRegistrationView
    },
    {
        path: '/admin',
        name: 'adminRoute',
        component: AdminView
    },
    {
        path: '/admin-tournament',
        name: 'adminTournamentRoute',
        component: adminTournamentView
    },
    {
        path: '/about',
        name: 'about',
        // route level code-splitting
        // this generates a separate chunk (about.[hash].js) for this route
        // which is lazy-loaded when the route is visited.
        component: function () {
            return import(/* webpackChunkName: "about" */ '../views/AboutView.vue')
        }
    },
    {
        path: '/join',
        name: 'join',
        component: JoinView
    }
]

const router = new VueRouter({
    routes
})

export default router
