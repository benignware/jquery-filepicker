jquery-filepicker
=================

A customizable jquery filepicker component. 

* Works out-of-the-box with bootstrap and jquery-ui without the need of any further stylesheets

Usage
-----

```
$("input[type='file'].default").filepicker();
```

If you don't use any of the supported frameworks you can go with the default markup style. 
Therefore you may want to add the corresponding css to your application: 

```
<link rel="stylesheet" href="jquery-filepicker/css/filepicker.default.css">
```

Options
-------
<table>
  <tr>
    <th>Name</th><th>Description</th><th>Default</th>
  </tr>
  <tr>
    <td>style</td><td>'bootstrap', 'jquery-ui', 'default' or 'auto'</td><td>auto</td>
  </tr>
</table>