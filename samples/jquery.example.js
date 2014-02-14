+function ( $, window) {

  var mugine = window.mugine;

  var pluginName = 'example';
  
  var defaults = {
    property: 'example', 
    className: 'example'
  };
  
  function isCodeTag(elem) {
    return !!(["SCRIPT", "STYLE"].indexOf(elem.nodeName) + 1);
  }
  
  function fixIndent(string) {
    string = string.replace(/^\s*\n/gm, "") ;
    string = string.replace(/(\s+$)/g, '');
    var indent = string.search(/\S/);
    var lines = string.split("\n");
    for (var i = 0, line; line = lines[i]; i++) {
      var regexp = new RegExp("\^\\s\{" + indent + "\}");
      lines[i] = line.replace(regexp, "");
    }
    string = lines.join("\n");
    return string;
  }
  
  function Example(element, options) {
    
    if ($(element).parents().map(function() {
      return $(this).data('example');
    }).length > 0) return;
    
    var contentElem = $(element).find("*[data-example]")[0] || element;
    
    var pre = document.createElement('pre');
    pre.className = options.className;
    var clone = $(contentElem.cloneNode(true))
      .removeAttr('data-example')
      .get(0);
    
    var code = isCodeTag(element);
    
    var string = code ? clone.innerHTML : clone.outerHTML;
    string = fixIndent(string);
    
    pre.appendChild(document.createTextNode(string));
    
    var insertAt = element;
    
    var prev = $(element).prev();
    if (prev.data(pluginName)) {
      insertAt = prev;
    }
    
    $(pre).insertBefore(insertAt);

    if (code && $(clone).attr('type') != 'text/javascript') {
      $(clone).attr('type', 'text/javascript');
      $(clone).insertBefore(element);
      console.warn("CODE: ", element, clone);
    }
  }

  // register component as plugin
  var pluginClass = Example;
  $.fn[pluginName] = function(options) {
    options = $.extend({}, defaults, options);
    return this.each(function() {
      if (!$(this).data(pluginName)) {
          $(this).data(pluginName, new pluginClass(this, options));
      }
      return $(this);
    });
  };
  
  $.fn[pluginName].initOnReady = true;
  
  $(function() {
    if ($.fn[pluginName].initOnReady) {
      console.log("INIT ON READY");
      $('body').find('*[data-example]').example();
    }
  });

}( jQuery, window );