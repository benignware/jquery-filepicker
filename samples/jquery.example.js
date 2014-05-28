+function ( $, window) {

  var mugine = window.mugine;

  var pluginName = 'example';
  
  var defaults = {
    name: '', 
    className: 'example'
  };
  
  function getLeadingWhiteSpaceCountWhile(string) {
    var result = 0, characterCode = string.charCodeAt(0);
    while (32 == characterCode || characterCode > 8 && characterCode < 14 && characterCode != 11 && characterCode != 12) {
      characterCode = string.charCodeAt(++result);
    }
    return result;
  }
  
  function fixIndent(string) {
    string = string.replace(/^\s*\n/gm, "");
    string = string.replace(/(\s+$)/gm, '');
    var lines = string.split("\n");
    var indent = 0;
    for (var i = 0, line; line = lines[i]; i++) {
      indent = getLeadingWhiteSpaceCountWhile(line);
      if (indent > 0) {
        if (i > 0) {
          indent-= 2;
        }
        break;
      }
    }
    for (var i = 0, line; line = lines[i]; i++) {
      if (i == 0 || i == lines.length - 1) {
        lines[i] = line.replace(/^\s+/, '');
      } else {
        var regexp = new RegExp("\^\\s\{" + indent + "\}");
        lines[i] = line.replace(regexp, "");
      }
    }
    string = lines.join("\n");
    return string;
  }
  
  function isCodeElement(elem) {
    return !!(["SCRIPT", "STYLE"].indexOf(elem.nodeName) + 1);
  }
  
  function isMarkupElement(elem) {
    return !$(elem).is('script') && !$(elem).is('style') && !isEmptyElement(elem);
  }
  
  function isEmptyElement(elem) {
    return !$(elem).html().trim();
  }
  
  function Example(element, options) {
    
    var $element = $(element);
    
    var htmlOption = $element.data('example-html');
    var insertOption = $element.data('example-insert');
    var name = options.name;
    
    if ($(element).parents().map(function() {
      return $(this).data('example');
    }).length > 0) return;
    
    var contentElem = $(element).find("*[data-example]:not(pre)")[0] || element;
    var $contentElem = $(contentElem);
    
    if (contentElem.tagName.toLowerCase() == "pre") {
      return;
    };
     
    var pre = $("pre[data-example='" + name + "']")[0];
    if (!pre) {
      pre = document.createElement('pre');
      var insertPreAt = element;
      var prev = $(element).prev();
      if (prev.data(pluginName) == name) {
        insertPreAt = prev;
      }
      if (insertOption == "before") {
        $(pre).insertAfter(insertPreAt);
      } else {
        $(pre).insertBefore(insertPreAt);
      }
    } else {
      $(pre).removeAttr('data-example');
    }
    pre.className = options.className;
    
    var clone = $(contentElem.cloneNode(true))
      .removeAttr('data-example')
      .removeAttr('data-example-html')
      .removeAttr('data-example-insert')
      .get(0);
      
      
    var code = isCodeElement(element);
    
    
    var string = typeof htmlOption != 'undefined' ? clone[htmlOption + "HTML"] : isCodeElement(element) ? clone.innerHTML : clone.outerHTML;
    
    string = fixIndent(string);
    
    pre.appendChild(document.createTextNode(string));
    
    
   
    this.toString = function() {
      return name;
    };
    
  }

  // register component as plugin
  var pluginClass = Example;
  
  $.fn[pluginName] = function(options) {
    return this.each(function() {
      if (!$(this).data(pluginName) || typeof $(this).data(pluginName) == 'string') {
          options = $.extend({}, defaults, options);
          options.name = $(this).data(pluginName);
          $(this).data(pluginName, new pluginClass(this, options));
      }
      return $(this);
    });
  };
  
  $.fn[pluginName].initOnReady = true;
  
  $(function() {
    if ($.fn[pluginName].initOnReady) {
      $('body').find('*[data-example]').example();
    }
  });

}( jQuery, window );