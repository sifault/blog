module.exports = {
    title: 'Jenkins\'s blog',
    description: 'Talk is cheap. Show me the code',
    // port: "3000",// 默认8080
    //base: "/",// 这是部署到github相关的配置
    base: "/blog/",
    dest: "dist",
    markdown: {
        lineNumbers: true, // 代码块显示行号
        externalLinks: {
            target: '_blank', rel: 'noopener noreferrer'
        }
    },
    locales: {
        "/": {
            lang: "zh-CN",
            title: "Jenkins's 博客",
            description: "Talk is cheap. Show me the code"
        },
        // "/en/": {
        //     lang: "en-US",
        //     title: "Jenkins's blog",
        //     description: "My personal website"
        // }
    },
    head: [
        ["link", {rel: 'icon', href: '/favicon.ico'}]
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
                // lastUpdated: "上次更新",
                nav: [
                    {
                        text: "我的主页",
                        link: "/"
                    },
                    {
                        text: "技术笔记",
                        items: [
                            {
                                text: "Java",
                                link: "/Java/"
                            },
                            {
                                text: "SpringBoot",
                                link: "/springboot/"
                            },
                            {
                                text: "SpringCloud",
                                link: "/springcloud/"
                            }
                        ]
                    },
                    {
                        text: "开源项目",
                        items: [
                            {
                                text: "SpringBoot2.x教程",
                                link: "https://github.com/wbc505357999/SpringBootTutorial"
                            }
                        ]
                    },
                    {
                        text: "关于博客",
                        link: "/about/"
                    },
                    {
                        text: "开源地址",
                        items: [
                            {
                                text: "Gitee",
                                link: "https://gitee.com/505357999"
                            },
                            {
                                text: "Github",
                                link: "https://github.com/wbc505357999"
                            }
                        ]
                    }
                ],
                sidebar: {
                    "/opensource/": getOpensourceSlidebar(),
                    "/java/": getJavaSlidebar(),
                    "/springboot/": getSpringBootSlidebar(),
                    "/springcloud/": getSpringCloudSlidebar()
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
// 获取java侧边导航栏
function getJavaSlidebar() {
    return [
        {
            title: "Java",
            collapsable: false,
            children: [
                {
                    title: "基础",
                    collapsable: false,
                    children: [
                        ["base/java-1","HashMap和HashSet区别"],
                        ["base/java-2","HashMap遍历的四种方法"],
                        ["base/java-3","final、finally和finalize的区别"]
                    ]
                }
            ]
        }
    ]
}

// 获取SpringBoot侧边导航栏
function getSpringBootSlidebar() {
    return [
        {
            title: "SpringBoot",
            collapsable: false,
            children: [
                {
                    title: "SpringBoot教程",
                    collapsable: false,
                    children: [
                        ["course/chapter1","第一章：快速入门"],
                        ["course/chapter2","第二章：Web 综合开发"]
                    ]
                },
                {
                    title: "SpringBoot番外",
                    collapsable: false,
                    children: [
                        ["extra/extra1","使用IDEA创建SpringBoot项目"],
                        ["extra/extra2","第二章：测试2"]
                    ]
                }
            ]
        }
    ]
}

// 获取SpringCloud侧边导航栏
function getSpringCloudSlidebar() {
    return [
        ["springcloud-1","SpringCloud(一)：入门篇"],
        ["springcloud-2","SpringCloud(二)：Web 综合开发"]
    ]
}

// 获取Opensource侧边导航栏
function getOpensourceSlidebar() {
    return [
        {
            title: "开源项目",
            collapsable: false,
            children: [
                ["1","SpringBoot集成MyBatisPlus"],
                ["2","基于SpringBoot + Shiro + MyBatisPlus的权限管理框架"],
                ["3","自制spring boot starter for fastjson"]
            ]
        }
    ]
}
