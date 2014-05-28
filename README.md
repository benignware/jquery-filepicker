jquery-filepicker
=================

A customizable jquery filepicker component. 

* Works out-of-the-box with bootstrap and jquery-ui without the need of any further stylesheets

Basic usage
-----

```html
<input data-label="Upload" type="file"/>
```       
         
```js
$(function() {
  $("input[type='file']").filepicker();
})
```

If you don't use any of the supported frameworks you can go with the default markup style. 
Therefore you may want to add the corresponding css to your application: 

```html
<link rel="stylesheet" href="jquery-filepicker/css/filepicker.default.css">
```

Advanced usage
--------------

### Custom style example
Create a collapsible filepicker using bootstrap-collapse. 

```js
$("input[type='file']").filepicker({
  style: {
    ui: 
      '<div class="panel-group" id="<%= element.getAttribute("id") + "_panel_group" %>">' + 
        '<div class="panel panel-default">' + 
          '<div class="panel-heading">' + 
            '<h4 class="panel-title">' + 
              '<a ' + 
                'data-toggle="collapse" ' + 
                'data-parent="#<%= element.getAttribute("id") + "_panel_group" %>" ' + 
                'href="#<%= element.getAttribute("id") + "_panel_collapse" %>">' + 
                'Collapsible File Upload' + 
              '</a>' + 
            '</h4>' +
          '</div>' + 
          '<div id="<%= element.getAttribute("id") + "_panel_collapse" %>" class="panel-collapse collapse">' +
            '<div class="panel-body">' + 
              '<%= preview %><%= _build(input, {className: "form-control", placeholder: element.placeholder}) %>' + 
            '</div>' +
          '</div>' +  
        '</div>' + 
      '</div>', 
      thumbnail: {
        wrap: '<div class="thumbnail"></div>'
      }
    }
  });
});
```
For more information on the template-structure please refer to [mugine](http://github.com/rexblack/mugine.js).

### Control rendering using callbacks
Although recommended way of customizing markup is by using a style-template, you can handle rendering on your own by making use of the 'renderUI'- and 'renderPreview'-callbacks
      

```js
$(function() {
  $("input[type='file']").each(function() {
    
    var ui = null;
    $(this).filepicker({
      renderUI: function(element, button, input, preview) {
        if (!ui) {
          ui = document.createElement('div');
          ui.appendChild(button);
          // we don't want the input here
          //ui.appendChild(input);
          ui.appendChild(preview);
          element.parentNode.insertBefore(ui, element);
        }
        button.innerHTML = $(element).data('label');
        return false;
      }, 
      renderThumbnail: function(img, file) {
        $(img).wrap($('<div style="border: 1px solid #CCCCCC; border-radius: 4px; background: #F5F5F5; padding: 4px; margin: 4px 0;"></div>'));
        return false;
      }
    });
  });
});
```


Options
-------

#### options.style
Type: `String`
Default value: `auto`

Can be one of the following predefined styles `bootstrap`, `jquery-ui`, `default` or `auto`. You can also provide an object containing the properties `ui` and `thumbnail` as [mugine](http://github.com/rexblack/mugine.js)-templates.

#### options.renderUI
Type: `Function`
Default value: `null`

Override rendering ui by providing a callback function with the following arguments `element`, `button`, `input`, `preview`. Return `false` in order to prevent default style-rendering.

#### options.renderThumbnail
Type: `Function`
Default value: `null`

Override thumbnail rendering by providing a callback function with the following arguments `img`, `file`. Return `false` in order to prevent default style-rendering.

#### options.resize
Type: `Function`
Default value: `null`

This callback is fired when the component is resized. 

#### options.change
Type: `Function`
Default value: `null`

This callback is fired on file select. A list of all files is provided by the first argument. 
   