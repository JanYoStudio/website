layui.define('jquery', function (exports) {
    const $ = layui.jquery;
    let onExpand = undefined;
    let onFold = undefined;
    let data = toolbar;
    $('#navLogo')
        .append($('<a />', {
            href: data.home.url
        }).append($('<img src="' + data.home.img + '" style="background-position: center" width="' + data.home.width + '" height="' + data.home.height + '" alt=""/>')));
    for (item of data.list) {
        let it = $('<li class="layui-nav-item" id="' + item.id + '"/>');
        it.append($('<a />', {
            href: item.url,
            text: item.title
        }));
        $('#navList').append(it);
    }

    const navIndex = $('.nav');
    //导航切换
    const btn = navIndex.find('.nav-list').children('button'),
        spa = btn.children('span'),
        ul = navIndex.find('.nav-list').children('.layui-nav');
    btn.on('click', function () {
        if (!$(spa[0]).hasClass('spa1')) {
            //展开
            spa[0].className = 'spa1';
            spa[1].style.display = 'none';
            spa[2].className = 'spa3';
            navIndex[0].style.height = 90 + ul[0].offsetHeight + 'px';
            if (onExpand !== undefined)
                onExpand();
        } else {
            //收起
            spa[0].className = '';
            spa[1].style.display = 'block';
            spa[2].className = '';
            navIndex[0].style.height = '80px';
            if (onFold !== undefined)
                onFold();
        }
    });

    exports('toolbar', {
        init: function (id, expand, fold) {
            onExpand = expand;
            onFold = fold;
            let node = $('#' + id);
            if (node.length > 0) {
                node.addClass('layui-this');
                $('#' + id + '>a')[0].href = '#';
            }
        }
    });
});