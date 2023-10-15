import { MenuItem } from "../interfaces/appInterface";

export const menuItem: MenuItem[] = [
    {
        name: "Animation 01",
        icon: 'cube-outline',
        component: 'Animation101Screen'
    },
    {
        name: "Animation 02",
        icon: 'cube-outline',
        component: 'Animation102Screen'
    },
    {
        name: "Switch",
        icon: 'toggle-outline',
        component: 'SwitchScreen'
    },
    {
        name: "Alerts",
        icon: 'alert-circle-outline',
        component: 'AlertScreen'
    },
    {
        name: "TextInputs",
        icon: 'document-text-outline',
        component: 'TextInputScreen'
    },
    {
        name: "Pull To refresh",
        icon: 'refresh-outline',
        component: 'PullToRefreshScreen'
    },
    {
        name: "Section List",
        icon: 'list-outline',
        component: 'CustomSectionListScreen'
    },
    {
        name: "Modal Section",
        icon: 'copy-outline',
        component: 'ModalScreen'
    },
    {
        name: "Infinite Scroll",
        icon: 'download-outline',
        component: 'InfiniteScrollScreen'
    },
    {
        name: "Slides",
        icon: 'flower-outline',
        component: 'SlidesScreen'
    },
    {
        name: "Theme",
        icon: 'flask-outline',
        component: 'ChangeThemeScreen'
    }
    
]