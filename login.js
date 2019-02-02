$(window, document, undefined).ready(function() {
/*当元素失去焦点时发生 blur 事件。

blur() 函数触发 blur 事件，或者如果设置了 function 参数，该函数也可规定当发生 blur 事件时执行的代码*/
  $('input').blur(function() {
    var $this = $(this);
    if ($this.val())//表单是否填充
      $this.addClass('used');//有，动画固定
    else
      $this.removeClass('used');//没有，还原
  });
  /*
   * 都是获得当前Dom对象的value值（一般是表单元素）　　text radio checkbox select

　　基本没有什么区别，只是:

　　this.value是js的原生语法，使用this.value无需引入任何库文件

　　$(this).val()是jquery的语法，而$(this).val()则需要引入jquery库文件
   */

  var $ripples = $('.ripples');

  $ripples.on('click.Ripples', function(e) {

    var $this = $(this);
    /*
     * offset(): 获取匹配元素在当前视口的相对偏移。 返回的对象包含两个整形属性：top 和 left。此方法只对可见元素有效
     * offset()、position() 要放在 $(window).load() 中调用，否则会不精确。因为在 $(document).ready() 中调用，
     * 页面只是加载完 dom 节点，但是还未全部渲染完毕，导致获取的坐标有误差。
     */
    var $offset = $this.parent().offset();
    /*find() 方法获得当前元素集合中每个元素的后代，通过选择器、jQuery 对象或元素来筛选。*/
    var $circle = $this.find('.ripplesCircle');

    var x = e.pageX - $offset.left;
    var y = e.pageY - $offset.top;

    $circle.css({
      top: y + 'px',
      left: x + 'px'
    });

    $this.addClass('is-active');

  });
/*https://stackoverflow.com/questions/8930271/how-to-know-when-css3-animation-ends*/
  $ripples.on('animationend webkitAnimationEnd mozAnimationEnd oanimationend MSAnimationEnd', function(e) {
  	$(this).removeClass('is-active');
  });

});