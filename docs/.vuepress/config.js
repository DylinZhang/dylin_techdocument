module.exports = {
	title: "dylin_blog",
	description: "个人技术文档，基于VuePress",
	head: [["link", { rel: "icon", href: "./img/logo.png" }]],
	// locales: {
	// 	// 键名是该语言所属的子路径
	// 	// 作为特例，默认语言可以使用 '/' 作为其路径。
	// 	"/": {
	// 		lang: "zh-CN",
	// 		title: "技术文档",
	// 		description: "个人技术文档，基于VuePress",
	// 	},
	// 	"/en/": {
	// 		lang: "en-US", // 将会被设置为 <html> 的 lang 属性
	// 		title: "dylin_blog",
	// 		description: "Personal technical documents, based on vuepress",
	// 	},
	// },
	themeConfig: {
		logo: "/img/logo.png",
		nav: [
			{ text: "首页", link: "/" },
			{
				text: "前端技术",
				ariaLabel: "Language Menu",
				items: [
					{ text: "已整理", link: "/clientDocument/" },
					{ text: "未整理", link: "/undivided/commitLint" },
				],
			},
			{ text: "服务端技术", link: "/serverDocument/index" },
			{ text: "如何更新？", link: "/undivided/updateDoc" },
			{ text: "关于我", link: "https://blog.csdn.net/baidu_39812199?spm=1001.2101.3001.5343" },
		],
		sidebar: {
			"/undivided/": [
				{
					title: "规范",
					collapsable: true,
					children: ["commitLint"],
				},
				"微前端",
				{
					title: "vue3.0",
					collapsable: true,
					children: ["CompositionAPI", "扩展"],
				},
				{
					title: "TS",
					collapsable: true,
					children: ["typeScript"],
				},
				{
					title: "ES6",
					collapsable: true,
					children: ["ES6"],
				},
				{
					title: "lodash",
					collapsable: true,
					children: ["lodash"],
				},
				"熟悉Webpack",
			],
			"/clientDocument/": [
				{
					title: "about", // 必要的
					children: ["index"],
				},
			],
			"/serverDocument/": [
				{
					title: "about", // 必要的
					collapsable: true, // 可选的, 默认值是 true,
					sidebarDepth: 1, // 可选的, 默认值是 1
					children: ["index"],
				},
			],
		},
		// // 侧边栏index
		// sidebar: [
		// 	{
		// 		title: "规范",
		// 		collapsable: true,
		// 		children: ["/pages/commitLint"],
		// 	},
		//   {
		//     title:"服务端技术"
		//   },
		// 	"pages/微前端",
		// 	{
		// 		title: "vue3.0",
		// 		collapsable: true,
		// 		children: ["/pages/CompositionAPI", "/pages/扩展"],
		// 	},
		// 	{
		// 		title: "TS",
		// 		collapsable: true,
		// 		children: ["/pages/typeScript"],
		// 	},
		// 	{
		// 		title: "ES6",
		// 		collapsable: true,
		// 		children: ["/pages/ES6"],
		// 	},
		// 	{
		// 		title: "lodash",
		// 		collapsable: true,
		// 		children: ["/pages/lodash"],
		// 	},
		// 	"pages/熟悉Webpack",
		// ],
		// locales: {
		// 	"/": {
		// 		// 多语言下拉菜单的标题
		// 		selectText: "选择语言",
		// 		// 该语言在下拉菜单中的标签
		// 		label: "简体中文",
		// 		// 编辑链接文字
		// 		editLinkText: "在 GitHub 上编辑此页",
		// 		// Service Worker 的配置
		// 		serviceWorker: {
		// 			updatePopup: {
		// 				message: "发现新内容可用.",
		// 				buttonText: "刷新",
		// 			},
		// 		},
		// 		// 当前 locale 的 algolia docsearch 选项
		// 		algolia: {},
		// 		nav: [{ text: "嵌套", link: "/zh/nested/" }],
		// 		sidebar: {
		// 			"/zh/": [
		// 				/* ... */
		// 			],
		// 			"/zh/nested/": [
		// 				/* ... */
		// 			],
		// 		},
		// 	},
		// 	"/en/": {
		// 		selectText: "Languages",
		// 		label: "English",
		// 		ariaLabel: "Languages",
		// 		editLinkText: "Edit this page on GitHub",
		// 		serviceWorker: {
		// 			updatePopup: {
		// 				message: "New content is available.",
		// 				buttonText: "Refresh",
		// 			},
		// 		},
		// 		algolia: {},
		// 		nav: [
		// 			{ text: "Nested", link: "/nested/", ariaLabel: "Nested" },
		// 		],
		// 		sidebar: {
		// 			"/": [
		// 				/* ... */
		// 			],
		// 			"/nested/": [
		// 				/* ... */
		// 			],
		// 		},
		// 	},
		// },
	},
};
