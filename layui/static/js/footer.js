layui.define('jquery', function (exports) {
    const $ = layui.jquery;
    let data = footer;
    let friendsArray = $('<p class="footer-web" />');
    friendsArray.append($('<a href="#">友情链接</a>'));
    for (friend of data.friends) {
        friendsArray.append($('<a />', {
            href: friend.url,
            text: friend.title
        }));
    }
    let copyright = $('<p class="footer-copyright"><span class="right">Copyright&nbsp;©&nbsp;' + data.copyright + '</span>');
    let div = $('<div />', {
        class: 'layui-container'
    });
    div.append(friendsArray);
    div.append(copyright);
    $('#footer').append(div);

    exports('footer');
});