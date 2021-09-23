import { RouteInfo } from './sidebar.metadata';

export const ROUTES: RouteInfo[] = [
  {
    path: '/dashboard',
    title: 'SIDEBAR.DASHBOARD',
    moduleName: 'dashboard',
    icon: 'menu-icon ti-home',
    class: '',
    groupTitle: false,
    submenu: []
  },

  {
    path: '/hrdepartment',
    title: 'SIDEBAR.HR',
    moduleName: 'hrdepartment',
    icon: 'menu-icon ti-briefcase ',
    class: '',
    groupTitle: false,
    submenu: []
  },

  {
    path: '/badepartment',
    title: 'SIDEBAR.BA',
    moduleName: 'badepartment',
    icon: 'menu-icon ti-menu ',
    class: '',
    groupTitle: false,
    submenu: []
  },
  {
    path: '/qadepartment',
    title: 'SIDEBAR.QA',
    moduleName: 'qadepartment',
    icon: 'menu-icon ti-user',
    class: '',
    groupTitle: false,
    submenu: []
  },
  {
    path: '/dddepartment',
    title: 'SIDEBAR.DA',
    moduleName: 'clips',
    icon: 'menu-icon ti-ticket ',
    class: '',
    groupTitle: false,
    submenu: []
  },

  {
    path: '/mddepartment',
    title: 'SIDEBAR.MD',
    moduleName: 'sponser',
    icon: 'menu-icon ti-gift ',
    class: '',
    groupTitle: false,
    submenu: []
  },
  {
    path: '/chat-results',
    title: 'SIDEBAR.CR',
    moduleName: 'chat-results',
    icon: 'menu-icon ti-github',
    class: '',
    groupTitle: false,
    submenu: []
  }



];
