## Modules

<dl>
<dt><a href="#module_mockbot-element">mockbot-element</a></dt>
<dd><p>Module</p>
</dd>
<dt><a href="#module_mockbot-element-factory">mockbot-element-factory</a></dt>
<dd><p>Factory module</p>
</dd>
</dl>

<a name="module_mockbot-element"></a>

## mockbot-element
Module

**Properties**

| Name | Type | Description |
| --- | --- | --- |
| id | <code>String</code> | the id of the element |
| tagName | <code>String</code> | read-only tagName of element as uppercase (i.e. 'DIV') |


* [mockbot-element](#module_mockbot-element)
    * [.setAttribute(name, value)](#module_mockbot-element+setAttribute)
    * [.getAttribute(name)](#module_mockbot-element+getAttribute)
    * [.cloneNode(deep)](#module_mockbot-element+cloneNode) ⇒ <code>[mockbot-element](#module_mockbot-element)</code>

<a name="module_mockbot-element+setAttribute"></a>

### mockbot-element.setAttribute(name, value)
mock element.setAttribute

**Kind**: instance method of <code>[mockbot-element](#module_mockbot-element)</code>  

| Param | Type | Description |
| --- | --- | --- |
| name | <code>string</code> | attribute name |
| value | <code>string</code> | attribute value |

**Example** *(usage)*  
```js
el.setAttribute("width","5");
```
<a name="module_mockbot-element+getAttribute"></a>

### mockbot-element.getAttribute(name)
mock element.getAttribute

**Kind**: instance method of <code>[mockbot-element](#module_mockbot-element)</code>  

| Param | Type | Description |
| --- | --- | --- |
| name | <code>string</code> | attribute name |

**Example** *(usage)*  
```js
var w = el.getAttribute("width");
```
<a name="module_mockbot-element+cloneNode"></a>

### mockbot-element.cloneNode(deep) ⇒ <code>[mockbot-element](#module_mockbot-element)</code>
mock element.cloneNode

**Kind**: instance method of <code>[mockbot-element](#module_mockbot-element)</code>  

| Param | Type | Description |
| --- | --- | --- |
| deep | <code>boolean</code> | If true, clone children as well |

**Example** *(usage)*  
```js
var n = el.cloneNode();
```
<a name="module_mockbot-element-factory"></a>

## mockbot-element-factory
Factory module

<a name="module_mockbot-element-factory.create"></a>

### mockbot-element-factory.create(spec) ⇒ <code>[mockbot-element](#module_mockbot-element)</code>
Factory method 
It takes one spec parameter that must be an object with named parameters

**Kind**: static method of <code>[mockbot-element-factory](#module_mockbot-element-factory)</code>  

| Param | Type | Description |
| --- | --- | --- |
| spec | <code>Object</code> | Named parameters object |
| spec.tagName | <code>string</code> | required HTML tagName (a, div, x-thing, etc.) |
| spec.id | <code>string</code> | optional id attribute for HTML element |

**Example** *(Usage)*  
```js
var factory = require("mockbot-element");
var obj = factory.create({ tagName: "div" });
```
**Example** *(Usage with id)*  
```js
var factory = require("mockbot-element");
var obj = factory.create({ tagName: "div", id: "d1" });
```
