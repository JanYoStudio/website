const toolbar = {
    home: {
        img: '/img/logo.svg',
        width: 200,
        height: 40,
        url: '/'
    },
    list: [{
            id: 'product',
            title: '作品',
            url: '/product.html'
        },
        {
            id: 'about',
            title: '关于',
            url: '/about.html'
        }
    ]
};

const footer = {
    friends: [{
            title: 'Trace.moe',
            url: 'https://trace.moe'
        }
    ],
    copyright: '2015-2020'
};

layui.config({
    base: '/layui/static/js/',
    version: 20200720
});