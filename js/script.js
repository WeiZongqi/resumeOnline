// First, checks if it isn't implemented yet.
if (!String.prototype.format) {
  String.prototype.format = function() {
    var args = arguments;
    return this.replace(/{(\d+)}/g, function(match, number) { 
      return typeof args[number] != 'undefined'
        ? args[number]
        : match
      ;
    });
  };
}

// 在文档加载后激活下列函数
jQuery(document).ready(function($) {
    // 设置一些元素可编辑
    $(".left-label").attr('contenteditable', 'true');
    $(".label-value").attr('contenteditable', 'true');
    $(".info-title").attr('contenteditable', 'true');
    $("h3").attr('contenteditable', 'true');
    $("p").attr('contenteditable', 'true');
    $(".right-paragraph p").attr('contenteditable', 'true');
    $("#username").attr('contenteditable', 'true');
    $("#persona-tag").attr('contenteditable', 'true');
    // 在所有孩子的li后面添加"item-remove"的删除类
    $(".info-unit ul li").append('<span class="item-remove"><i class="iconfont icon-delete"></i></span>');
    // 判断是否存在ul，若存在则添加"item-add"增加孩子列表的类
    $(".info-unit").filter(function(index) {
        return ($(this).children('ul').length);
    }).children("h2").append('<span class="item-add"><i class="iconfont icon-playlistadd"></i></span>');
    // 在标题栏添加"item-remove"的删除类
    $(".info-unit h2").append('<span class="unit-remove"><i class="iconfont icon-delete"></i></span>');
    // 设置当鼠标移动到标题栏上，删除和增加的图标可见
    $('.info-header').hover(function() {
        /* Stuff to do when the mouse enters the element */
        $(this).children('.unit-remove').css('visibility', 'visible');
        $(this).children('.item-add').css('visibility', 'visible');
    // 当鼠标离开标题栏，删除和增加的图标隐藏
    }, function() {
        /* Stuff to do when the mouse leaves the element */
        $(this).children('.unit-remove').css('visibility', 'hidden');
        $(this).children('.item-add').css('visibility', 'hidden');
    });
    // 设置当鼠标移动到孩子标签上，删除的图标可见
    $('.info-unit ul li').hover(function() {
        /* Stuff to do when the mouse enters the element */
        $(this).children('.item-remove').css('visibility', 'visible');
    // 当鼠标离开孩子标签，删除的图标隐藏
    }, function() {
        /* Stuff to do when the mouse leaves the element */
        $(this).children('.item-remove').css('visibility', 'hidden');
    });
    // 定义点击标题栏删除图标的函数事件
    $('.unit-remove').click(function(event) {
        $(this).closest(".info-unit").remove();
    });
    // 定义点击孩子标签栏删除图标的函数事件
    $('.item-remove').click(function(event) {
        $(this).closest("li").remove();
    });
    // 定义点击标题栏增加孩子图标的函数事件
    $('.item-add').click(function(event) {
        var unit = $(this).closest(".info-unit");
        if (unit.children('ul')){
            // 获取第一个孩子的数值
            var list = unit.children('ul');
            var clone = list.children('li:first-child').clone(true);
            // 当所有孩子标签都被删除，则复制被隐藏的孩子标签
            clone.css('display','');
            list.append(clone);
        }

    });
});