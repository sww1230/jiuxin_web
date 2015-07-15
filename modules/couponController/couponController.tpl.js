/**
 * Created by jinguangguo on 2015/6/24.
 */

var html = {
    container:
        ['<div id="couponPageModule" class="coupon_page_module">',
            '<div class="box">',
                '<h2>我的红包</h2>',
                '<div class="operate">',
                    '<div class="operate_category">',
                        '<div class="category">',
                            '<div class="category_select">全部券</div>',
                            '<ul class="category_list">',
                                '<li class="category_item" data-type="ALL">',
                                    '<a href="javascript:void(0);" class="category_item_link">全部券</a>',
                                '</li>',
                                '<li class="category_item" data-type="INTEREST">',
                                    '<a href="javascript:void(0);" class="category_item_link">加息券</a>',
                                '</li>',
                                '<li class="category_item" data-type="PRINCIPAL">',
                                    '<a href="javascript:void(0);" class="category_item_link">增值券</a>',
                                '</li>',
                                '<li class="category_item" data-type="REBATE">',
                                    '<a href="javascript:void(0);" class="category_item_link">返现券</a>',
                                '</li>',
                            '</ul>',
                        '</div>',
                        '<!--',
                        '<select name="category">',
                            '<option value ="ALL" selected="selected">全部券</option>',
                            '<option value ="INTEREST">加息券</option>',
                            '<option value="PRINCIPAL">增值券</option>',
                            '<option value="REBATE">返现券</option>',
                        '</select>',
                        '-->',
                    '</div>',
                    '<div class="operate_date">',
                        '<a href="javascript:void(0);" class="date_type" data-status="PLACED">未使用</a>',
                        '<a href="javascript:void(0);" class="date_type" data-status="USED">已使用</a>',
                        '<a href="javascript:void(0);" class="date_type" data-status="EXPIRED">已过期</a>',
                    '</div>',
                '</div>',
                '<div id="list" class="list">',
                    '<div class="loading">',
                        '<img src="static/pc/lib/img/loading.gif" width="40" height="40">',
                    '</div>',
                    '<!-- list begin here -->',
                '</div>',
                '<div id="page" class="page">',
                '</div>',
            '</div>',
        '</div>'].join(''),
    list:
        [
            '<% if (list.length > 0) { %>',
            '<ul class="list_box clearfix">',
                '<% $.each(list, function(index, item) { %>',
                    '<% if ((index + 1) % 3 !== 0) { %>',
                    '<li class="item item_<%- item.type %> item_<%- item.status %>">',
                    '<% } else { %>',
                    '<li class="item item_<%- item.type %> item_<%- item.status %> item_last">',
                    '<% } %>',
                        '<div class="item_left">',
                            '<div class="item_left_info">',
                                '<p class="title ellipsis">投资满<%- formatPrice(item.minAmount) %>元可用</p>',
                                '<% if (item.timeEnd === null) { %>',
                                '<p class="time ellipsis">到期时间：永不过期</p>',
                                '<% } else { %>',
                                '<p class="time ellipsis">到期时间：<%- formatTime(item.timeEnd, "Y-M-D") %></p>',
                                '<% } %>',
                                '<% if (item.type === "INTEREST") { %>',
                                '<p class="detail">加息券</p>',
                                '<% } else if (item.type === "PRINCIPAL") { %>',
                                '<p class="detail">增值券</p>',
                                '<% } else if (item.type === "REBATE") { %>',
                                '<p class="detail">返现券</p>',
                                '<% } else if (item.type === "CASH") { %>',
                                '<p class="detail">现金券</p>',
                                '<% } %>',
                            '</div>',
                        '</div>',
                        '<div class="item_right">',
                            '<p class="price"><span class="price_lable">￥</span><span class="price_num"><%- formatPrice(item.price) %></span></p>',
                            '<% if (item.status === "USED") { %>',
                                '<p class="use">已使用</p>',
                            '<% } else if (item.status === "EXPIRED") { %>',
                                '<p class="use">已过期</p>',
                            '<% } else { %>',
                                '<p class="use">已兑现</p>',
                            '<% } %>',
                        '</div>',
                    '</li>',
                '<% }); %>',
            '</ul>',
            '<% } else { %>',
            '<div class="no-data">没有数据</div>',
            '<% } %>'
        ].join('')
};

module.exports = html;