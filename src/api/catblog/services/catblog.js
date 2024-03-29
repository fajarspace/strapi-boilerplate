'use strict';

/**
 * catblog service
 */

const { createCoreService } = require('@strapi/strapi').factories;

module.exports = createCoreService('api::catblog.catblog');
