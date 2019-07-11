module.exports = {
    title: 'Jenkins\'s blog',
    description: '我的个人网站',
    // port: "3000",// 默认8080
    base: "/",// 这是部署到github相关的配置
    //base: "/blog",
    //dest: "public",
    markdown: {
        externalLinks: {
            target: '_blank', rel: 'noopener noreferrer'
        }
    },
    locales: {
        "/": {
            lang: "zh-CN",
            title: "Jenkins's 博客",
            description: "我的个人网站"
        },
        // "/en/": {
        //     lang: "en-US",
        //     title: "Jenkins's blog",
        //     description: "My personal website"
        // }
    },
    head: [
        ["link", {rel: 'icon', href: '/favicon.ico'}],
        ['meta', { name: 'theme-color', content: '#3eaf7c' }],
        ['meta', { name: 'apple-mobile-web-app-capable', content: 'yes' }],
        ['meta', { name: 'apple-mobile-web-app-status-bar-style', content: 'black' }],
        ['link', { rel: 'apple-touch-icon', href: `/icons/apple-touch-icon-152x152.png` }],
        ['link', { rel: 'mask-icon', href: '/icons/safari-pinned-tab.svg', color: '#3eaf7c' }],
        ['meta', { name: 'msapplication-TileImage', content: '/icons/msapplication-icon-144x144.png' }],
        ['meta', { name: 'msapplication-TileColor', content: '#000000' }]
    ],
    // 主题配置
    themeConfig: {
        editLinks: true,
        sidebarDepth: 1, // 侧边栏显示层级
        // 默认主题多语言配置
        locales: {
            "/": {
                // 多语言下拉菜单的标题
                //selectText: '选择语言',
                // 该语言在下拉菜单中的标签
                //label: '简体中文',
                editLinkText: "在 GitHub 上编辑此页",
                lastUpdated: "上次更新",
                nav: [
                    {
                        text: "Home",
                        link: "/home/"
                    },
                    {
                        text: "Java",
                        link: "/java/"
                    },
                    {
                        text: "SpringBoot",
                        link: "/springboot/"
                    },
                    {
                        text: "SpringCloud",
                        link: "/springcloud/"
                    },
                    {
                        text: "Archives",
                        link: "/archives/"
                    },
                    {
                        text: "About",
                        link: "/about/"
                    },
                    {
                        text: "Ecology",
                        items: [
                            {
                                text: "spring-boot",
                                link: "https://gitee.com/wbc505357999/spring-boot-assembly"
                            }
                        ]
                    },
                    {
                        text: "Git",
                        items: [
                            {
                                text: "gitee",
                                link: "https://gitee.com/505357999"
                            },
                            {
                                text: "github",
                                link: "https://github.com/wbc505357999"
                            }
                        ]
                    }
                ],
                sidebar: {
                    "/home/": genHomeSlidebar(true),
                    "/java/": getJavaSlidebar(true),
                    "/springboot/": getSpringBootSlidebar(true),
                    "/springcloud/": getSpringCloudSlidebar(true)
                }
            },
            // '/en/': {
            //     selectText: 'Languages',
            //     label: 'English',
            //     editLinkText: 'Edit this page on GitHub',
            //     lastUpdated: "Last Updated",
            //     nav: [
            //         {
            //             text: "Home",
            //             link: "/"
            //         },
            //         {
            //             text: "Java",
            //             link: "/guide/"
            //         },
            //         {
            //             text: "SpringBoot",
            //             link: "/springboot/"
            //         },
            //         {
            //             text: "SpringCloud",
            //             link: "/springcloud/"
            //         },
            //         {
            //             text: "Archives",
            //             link: "/archives/"
            //         },
            //         {
            //             text: "About",
            //             link: "/about/"
            //         },
            //         {
            //             text: "Ecology",
            //             items: [
            //                 {
            //                     text: "spring-boot-assembly",
            //                     link: "https://gitee.com/geekidea/spring-boot-assembly"
            //                 }
            //             ]
            //         },
            //         {
            //             text: "Git",
            //             items: [
            //                 {
            //                     text: "gitee",
            //                     link: "https://gitee.com/505357999"
            //                 },
            //                 {
            //                     text: "github",
            //                     link: "https://github.com/wbc505357999"
            //                 }
            //             ]
            //         }
            //     ],
            //     sidebar: {
            //         "/en/home/": genEnSlidebar(true)
            //     }
            // }
        }
    }
};

// 获取首页侧边导航栏
function genHomeSlidebar() {
    return [
        {
            title: "Java",
            collapsable: false,
            children: ["", "quick-start"]
        },
        {
            title: "SpringBoot",
            collapsable: false,
            children: [
                "quick-start"
            ]
        },
        {
            title: "SpringCloud",
            collapsable: false,
            children: [
                "quick-start"
            ]
        },
        {
            title: "Archives",
            collapsable: false,
            children: [
                "quick-start"
            ]
        },
        {
            title: "About",
            collapsable: false,
            children: [
                "quick-start"
            ]
        }
    ]
}

// 获取英文侧边导航栏
function genEnSlidebar() {
    return [
        {
            title: "Java",
            collapsable: false,
            children: ["", "quick-start"]
        },
        {
            title: "SpringBoot",
            collapsable: false,
            children: getSpringBootSlidebar(true)
        },
        {
            title: "SpringCloud",
            collapsable: false,
            children: [
                "quick-start"
            ]
        },
        {
            title: "Archives",
            collapsable: false,
            children: [
                "quick-start"
            ]
        },
        {
            title: "About",
            collapsable: false,
            children: [
                "quick-start"
            ]
        },
        {
            title: "FAQ",
            collapsable: false,
            children: [
                "faq"
            ]
        }
    ]
}
// 获取java侧边导航栏
function getJavaSlidebar() {
    return [
        ["java-1","Java(一)：入门篇"],
        ["java-2","Java(二)：Web 综合开发"]
    ]
}

// 获取springboot侧边导航栏
function getSpringBootSlidebar() {
    return [
        {
            title: "SpringBoot教程",
            collapsable: false,
            children: [
                ["course/course-1","SpringBoot(一)：入门篇"],
                ["course/course-2","SpringBoot(二)：Web 综合开发"]
            ]
        },
        {
            title: "SpringBoot番外",
            collapsable: false,
            children: [
                ["extra/extra-1","SpringBoot(一)：入门篇"],
                ["extra/extra-2","SpringBoot(二)：Web 综合开发"]
            ]
        }
    ]
}

// 获取springcloud侧边导航栏
function getSpringCloudSlidebar() {
    return [
        ["springcloud-1","SpringCloud(一)：入门篇"],
        ["springcloud-2","SpringCloud(二)：Web 综合开发"]
    ]
}
