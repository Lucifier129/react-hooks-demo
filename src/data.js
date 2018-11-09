export default {
  locales: ['en', 'cn'],
	type: 'Movies',
	title: 'Miyazaki Hayao',
	locale: 'USA',
	tips: 'view on desktop for mousemove',
	i18n: {
		CN: {
			title: '宫崎骏',
			type: '电影',
			tips: '在桌面电脑上移动鼠标查看',
			locale: '中国'
		}
	},
	list: [
		{
			name: 'Princess Mononoke',
			i18n: {
				CN: {
					name: '幽灵公主'
				}
			},
			image: 'https://s3-us-west-2.amazonaws.com/s.cdpn.io/62105/3dr_mono.png',
			imageStyle: {
				top: 14,
				right: -10,
				height: '110%'
			},
			background:
				'https://s3-us-west-2.amazonaws.com/s.cdpn.io/62105/3dr_monobg.jpg'
		},
		{
			name: 'Spirited Away',
			i18n: {
				CN: {
					name: '千与千寻'
				}
			},
			image:
				'https://s3-us-west-2.amazonaws.com/s.cdpn.io/62105/3dr_chihiro.png',
			imageStyle: {
				top: 25
			},
			background:
				'https://s3-us-west-2.amazonaws.com/s.cdpn.io/62105/3dr_spirited.jpg'
		},
		{
			name: "Howl's Moving Castle",
			i18n: {
				CN: {
					name: '哈尔的移动城堡'
				}
			},
			image:
				'https://s3-us-west-2.amazonaws.com/s.cdpn.io/62105/3dr_howlcastle.png',
			imageStyle: {
				top: 5,
				right: -4,
				height: '110%'
			},
			background:
				'https://s3-us-west-2.amazonaws.com/s.cdpn.io/62105/3dr_howlbg.jpg'
		}
	]
}
