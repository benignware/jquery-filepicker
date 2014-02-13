+function ( $, window) {
  
  // mugine
  var Mugine = (function(){var d=document,F=window,q="div",f="wrap",e="push",u="join",l="data",w="split",n="object",I="string",M="replace",D="element",t="nodeType",J="innerHTML",r="attributes",j="childNodes",k="parentNode",x="firstChild",s="appendChild",E="insertBefore",C="replaceChild",y="setAttribute",L="createElement",a="data-variable",c="querySelectorAll",H="createDocumentFragment",m=(function(){var N={};return function(U,S,Q){Q=Q||{};for(var P in z){S["_"+P]=(function(V,W){return function(){V._data=W;var X=V.apply(this,arguments);delete V._data;return X}})(z[P],S)}var T=Q.tokens||{};T.buffer=T.buffer||"=";T.start=T.start||"<%";T.end=T.end||"%>";var R=N[U]=N[U]||new Function("obj","var p=[],print=function(){p.push.apply(p,arguments);};with(obj){p.push('"+U[M](/[\r\t\n]/g," ")[w](T.start)[u]("\t")[M](new RegExp("\\(\\(\\^\\|"+T.end+"\\)\\[\\^\t\\]\\*\\)","g"),"$1\r")[M](new RegExp("\t"+T.buffer+"(.*?)"+T.end,"g"),"',$1,'")[w]("\t")[u]("');")[w](T.end)[u]("p.push('")[w]("\r")[u]("\\'")+"');} p = p.filter(function(v) {return typeof v == 'string' ? v.replace(/^s+|s+$/g, '').length : true});for (var i = 0; i < p.length; i++) { var o = p[i]; if (o && o.outerHTML) p[i] = o.outerHTML; }return p.length > 1 ? p.join('') : typeof p[0] == 'undefined' ? '' : p[0];");var O=S?R(S):R;for(var P in z){delete S["_"+P]}return O}})();function p(ac,T,O){var R=h(T);for(var Q in R){var ab=R[Q];ab[t]?ab[y](a,Q):null}var U=m(ac,T,O);var ad=g(U);var X=ad[c]("*["+a+"]");var X=ad.querySelectorAll("*["+a+"]");for(var S=0,aa;aa=X[S];S++){var N=aa.getAttribute(a),ab=R[N];if(ab){if(ab[t]){for(var Y=0,V;V=aa[r][Y];Y++){ab[y](V.nodeName,V.nodeValue)}if(!ab[j].length){for(var W=0,P=aa[j];W<P.length;W++){ab[s](P[W--])}}aa[k][C](ab,aa)}else{if(typeof elem!="object"){var Z=ab;ab=aa;ab[J]=Z}}}}for(var Q in R){var ab=R[Q];ab[t]?ab.removeAttribute(a):null}return ad}var z={build:function(){return B.call(this,arguments[0],arguments[1],arguments.callee._data)}};function B(O,S,N){var V=null,N=N||{};if(typeof S=="string"){V=p(S,N,z)}else{if(S instanceof Array){V=O=O||d[H]();for(var P=0,U;U=S[P];P++){O[s](B.call(this,null,U,N))}}else{if(typeof S=="object"){var Q=S[D];V=O=O&&O[t]?O:Q&&Q[t]?Q:typeof Q=="string"?p(Q,N,z)[x]:d[L](S.nodeName||S.tagName||q);var T=S[f];for(var R in S[r]){O[y](b(R),m(S[r][R],N))}if(S[j]){B.call(this,O,S[j],N)}i(O,S,N);if(T){V=O=G(O,B.call(this,null,T,N))}}}}return V}var o=[];function A(P){for(var O=0,R;R=o[O];O++){if(R[D]==P){o.splice(O--,1);for(var N=0,Q;Q=R.markup[N];N++){Q[k][C](P,Q)}break}}}function v(S,V,R){R=R||{};A.call(this,S);var T=S.cloneNode(),U=S[k],P=T;U?U[E](T,S):null;var X=V[j];if(typeof V=="object"&&!(V instanceof Array)&&(!X||X.length==1)){V[D]=S}R[D]=R[D]||S;var Y=B.call(this,null,V,R);var O=[],W=Y[j];for(var Q=0,N;N=W[Q];Q++){O[e](N)}o[e]({element:S,markup:O});if(P){P[k][C](Y,P)}return Y}function K(){}K.prototype={render:function(O,P,S){var R=typeof O==I?d[c](O):O instanceof Array?O:[O];for(var N=0,Q;Q=R[N];N++){v.call(this,Q,P,S)}return R},clean:function(N){A.call(this,N)},helpers:z};function b(N){return N[M](/\W+/g,"-")[M](/([a-z\d])([A-Z])/g,"$1-$2")}function g(O){if(typeof O!="string"){return O}var Q,P=d[L](q),N=d[H]();P[J]=O;while(Q=P[x]){N[s](Q)}return N}function i(O,P,R){for(var N in P){if(!!([D,r,l,j,f].indexOf(N)+1)){continue}var Q=P[N];typeof Q==n&&!Q[t]?arguments.callee(O[N]||{},Q,R):O[N]=typeof Q==I?m(Q,R):Q}return O}function G(N,Q){if(!Q){return N}var O=N[k],P=N.nextSibling;Q=Q[t]===11?Q[x]:Q;Q[s](N);if(O){O[E](Q,P)}return Q}function h(R,Q,N){Q=Q||"",N=N||{};for(var P in R){var O=R[P],S=Q?Q+"["+P+"]":P;if(typeof O=="undefined"||O==null){continue}N[S]=O;if(typeof O==n&&!O.outerHTML){h(O,S,N)}}return N}if($=jQuery){$.fn.render=$.fn.render||function(N,O){return this.each(function(){F.mugine.render(this,N,O);return $(this)})}}F.Mugine=F.Mugine||K;F.mugine=F.mugine||new K();return K})();
  
  var $window = $(window);
  var pluginName = 'filepicker';
  
  var defaults = {
    style: 'bootstrap3'
  };
  
  var dataOptions = ['label'];
      
  function getFilename(url) {
    var match = /\/([^\\\/:*?\"<>|]+)$/i.exec(url);
    if (match) return match[1];
    return null;
  }
  
  function getFileExtension(url) {
    var match = /\.([0-9a-z]+)(?:[\?#]|$)/i.exec(url);
    if (match) return match[1];
    return null;
  }
  
  function Filepicker(element, options) {
    
    var $element = $(element);
    
    var instance = this;
    var files = [];
    var mugine = new Mugine();
    
    var $preview = $('<div></div>'), preview = $preview.get(0);
    var $input = $('<input/>'), input = $input.get(0);
    var $button = $('<button type="button"></button>'), button = $button.get(0);
      
    var style = $.fn.filepicker.getStyle(
      options.style == "auto" ? 
      // detect styles
      isBootstrap() ? 'bootstrap' : 
      isJQueryUI() ? 'jquery-ui' : 
      'default'
      // option value
       : options.style
    );
    
    $window
      .on('resize', function(e) {
        layout.call(instance);
      });
      
    $element
      .on('change', function(e) {
        handleFileSelect(e);
      });
      
    $button
      .on('click', function() {
        $element.trigger('click');
      });
    
    $input
      .on('click', function() {
        $element.trigger('click');
      })
      .on('focus', function() {
        $(this).blur();
      });
    
    function renderUI() {
      // render
      var result = mugine.render(element, style.ui, {
        button: button, 
        input: input, 
        preview: preview
      });
    }
    
    function changed() {
      // changed
    }
    
    function update() {
      // filenames
      var fileNames = $(files).map(function() {
        return this.name;
      }).get();
      $(input).prop('value', fileNames.join(", "));
    }
    
    function renderPreview() {

      $preview.html("");
      // Loop through the FileList and render image files as thumbnails.
      $(files).each(function() {
        if (!this.type.match('image.*')) {
          return;
        }
        var $thumbnail = $('<img src="' + this.src + '" title="' + this.name + '"/>');
        $preview.append($thumbnail);
        mugine.render($thumbnail.get(0), style.thumbnail, this);
      });
    }
    
    function layout() {
      $element.css({
        position: 'absolute', 
        visibility: 'hidden' 
      });
    }

    
    function handleFileSelect(evt) {
      files = evt.target.files; // FileList object
      
      for (var i = 0, file; file = files[i]; i++) {
  
        // Only process image files.
        if (!file.type.match('image.*')) {
          continue;
        }
  
        var reader = new FileReader();
  
        // Closure to capture the file information.
        reader.onload = (function(file) {
          return function(e) {
            file.src = e.target.result;
            renderPreview();
          };
        })(file);
  
        // Read in the image file as a data URL.
        reader.readAsDataURL(file);

      }
      
      update.call(instance);
    }
    
    function isBootstrap() {
      return $('<div></div>').addClass('pull-right').css('float') == "right";
    }
    
    function isJQueryUI() {
      // TODO: detection
      return $('body').hasClass('jquery-ui');
    }
  
    function init() {
    
      var value = $element.attr('value');
      var values = value ? value.split(",") : [];

      files = $(values).map(function() {
        var filename = getFilename(this);
        var fileExtension = getFileExtension(this);
        var type = "";
        if ($.inArray(fileExtension, ['jpg', 'jpeg', 'png', 'gif']) >= 0) {
          // image
          type = "image/" + fileExtension;
        }
        return {name: filename, type: type, src: this};
      }).get();
      
      renderUI.call(this);
      renderPreview.call(this);
      layout.call(this);
      update.call(this);
      
    }
    
    
    
    init.call(this);
    
    
  }
  
  var pluginClass = Filepicker;

  // register plugin
  $.fn[pluginName] = function(options) {
    options = $.extend({}, defaults, options);
    return this.each(function() {
      if (!$(this).data(pluginName)) {
          $(this).data(pluginName, new pluginClass(this, options));
      }
      return $(this);
    });
  };
  
  // default styles
  var _styles = {
    'default': {
      ui: [
        { element: '<%= preview %>', className: 'filepicker-preview'}, 
        { className: 'filepicker-ui', childNodes: [{ element: '<%= button %>', innerHTML: '<%= element.getAttribute("data-label") %>' }, { element: '<%= input %>' }]},  
        { element: '<%= element %>' }
      ], 
      thumbnail: {
        wrap: '<div style="margin-bottom: 20px; text-align: center; border-radius: 5px"></div>', 
        style: "max-width: 100%"
      }
    }, 
    'bootstrap': {
      ui: [
        { element: '<%= preview %>' }, 
        {
          className: 'input-group', 
          childNodes: [{
            element: '<%= button %>', 
            className: 'btn btn-default', 
            wrap: '<div class="input-group-btn"></div>', 
            innerHTML: '<i class="glyphicon glyphicon-upload"></i> <%= element.getAttribute("data-label") %>'
          }, {
            element: '<%= input %>',  
            className: 'form-control', 
            placeholder: '<%= element.placeholder %>'
          }]
        }, { element: '<%= element %>' }
      ], 
      thumbnail: {
        wrap: '<div class="thumbnail"></div>'
      }
    }, 
    'jquery-ui': {
      ui: [{
        element: '<%= preview %>'
      }, {
        className: 'ui-buttonset', 
        childNodes: [
          {
            element: '<%= button %>',  
            className: 'ui-button ui-state-default ui-corner-left <% if (!element.getAttribute("data-label")) { %> ui-button-icon-only<% } else { %> ui-button-text-icon-primary<% } %>', 
            innerHTML: '<span class="ui-button-icon-primary ui-icon  ui-icon-document"></span><span class="ui-button-text"><%= element.getAttribute("data-label") || "&nbsp;" %></span>'
          }, 
          {
            element: '<%= input %>',  
            className: 'ui-button ui-state-default ui-corner-right', 
            placeholder: '<%= element.placeholder %>'
          }, 
          { 
            element: '<%= element %>' 
          }
        ]
      }], 
      thumbnail: {
        wrap: '<div style="padding: 5px; margin-bottom: 20px; text-align: center" class="ui-widget ui-widget-content ui-helper-clearfix ui-corner-all"></div>', 
        style: {
          maxWidth: '100%'
        }
      }
    }
  };
  
  $.fn[pluginName].registerStyle = function(name, json) {
    _styles[name] = json;
  };
  
  $.fn[pluginName].getStyle = function(name) {
    return _styles[name];
  };
  
  

}( jQuery, window );