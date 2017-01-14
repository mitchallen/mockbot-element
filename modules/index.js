/**
    Module: @mitchallen/mockbot-element
    Author: Mitch Allen
*/

/*jshint node: true */
/*jshint esversion: 6 */

"use strict";

/**
 * Module
 * @module mockbot-element
 */

/**
 * 
 * Factory module
 * @module mockbot-element-factory
 */

 /** 
 * Factory method 
 * It takes one spec parameter that must be an object with named parameters
 * @param {Object} options Named parameters object
 * @returns {module:mockbot-element}
 * @example <caption>Usage example</caption>
 * var factory = require("@mitchallen/mockbot-element");
 * var obj = factory.create({});
 */
module.exports.create = (spec) => {
    if(!spec) {
        return null;
    }
    // private 
    let _package = "@mitchallen/mockbot-element";
    return {
        // public
        /** Returns the package name
          * @function
          * @instance
          * @memberof module:mockbot-element
        */
        package: () => _package,
        /** Health check
          * @function
          * @instance
          * @memberof module:mockbot-element
          * @example <caption>Health check</caption>
          * obj.health.should.eql("OK");
        */
        health: () => "OK"
    };
};
