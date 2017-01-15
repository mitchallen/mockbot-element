mockbot-element
==
mock html dom element
--

<p align="left">
  <a href="https://travis-ci.org/mitchallen/mockbot-element">
    <img src="https://img.shields.io/travis/mitchallen/mockbot-element.svg?style=flat-square" alt="Version">
  </a>
  <a href="https://codecov.io/gh/mitchallen/mockbot-element">
    <img src="https://codecov.io/gh/mitchallen/mockbot-element/branch/master/graph/badge.svg" alt="Coverage Status">
  </a>
  <a href="https://npmjs.org/package/mockbot-element">
    <img src="http://img.shields.io/npm/dt/mockbot-element.svg?style=flat-square" alt="Downloads">
  </a>
  <a href="https://npmjs.org/package/mockbot-element">
    <img src="http://img.shields.io/npm/v/mockbot-element.svg?style=flat-square" alt="Version">
  </a>
  <a href="https://npmjs.com/package/mockbot-element">
    <img src="https://img.shields.io/npm/l/mockbot-element.svg?style=flat-square" alt="License"></a>
  </a>
</p>


## Installation

    $ npm init
    $ npm install mockbot-element --save-dev
    
* * * 

## Usage

With tools like __browserify__, it's easy to create client side code in node.js. But, when testing with tools like __mocha__, code that references browser elements or the document object will throw an error.

This can be worked around by creating a mock object that simulates the browser object:

    var elementFactory = require('mockbot-element');

    var testAttr = "alpha",
        testValue = "zorro",
        el = elementFactory.create({});
        
    el.setAttribute(testAttr,testValue);
    var result = el.getAttribute(testAttr);
  
* * *

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
    * [.getAttribute(options)](#module_mockbot-element+getAttribute)
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

### mockbot-element.getAttribute(options)
mock element.getAttribute

**Kind**: instance method of <code>[mockbot-element](#module_mockbot-element)</code>  

| Param | Type | Description |
| --- | --- | --- |
| options | <code>Object</code> | Named parameters object |

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

### mockbot-element-factory.create(options) ⇒ <code>[mockbot-element](#module_mockbot-element)</code>
Factory method 
It takes one spec parameter that must be an object with named parameters

**Kind**: static method of <code>[mockbot-element-factory](#module_mockbot-element-factory)</code>  

| Param | Type | Description |
| --- | --- | --- |
| options | <code>Object</code> | Named parameters object |

**Example** *(Usage example)*  
```js
var factory = require("mockbot-element");
var obj = factory.create({});
```


* * *

## Testing

To test, go to the root folder and type (sans __$__):

    $ npm test
   
* * *
 
## Repo(s)

* [bitbucket.org/mitchallen/mockbot-element.git](https://bitbucket.org/mitchallen/mockbot-element.git)
* [github.com/mitchallen/mockbot-element.git](https://github.com/mitchallen/mockbot-element.git)

* * *

## Contributing

In lieu of a formal style guide, take care to maintain the existing coding style.
Add unit tests for any new or changed functionality. Lint and test your code.

* * *

## Version History

#### Version 0.1.4

* added tagName property

#### Version 0.1.3

* added id property
* cleaned up documentation
* updated methods to simulate real methods

#### Version 0.1.2

* removed gitlab from package.json list

#### Version 0.1.1

* changed license to MIT
* integrated travis-ci and codecov.io

#### Version 0.1.0 

* initial release

* * *
