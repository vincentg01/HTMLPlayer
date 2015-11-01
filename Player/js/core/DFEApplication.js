/*
 * Responsible for initializing the
 * - controller/CourseController
 * Exposing API for communication with the PHP engine if required
 */
define([
    'controller/CourseController',
    'controller/NavController'
], function(CourseController, NavController){
    'use strict';

    function DFEApplication(){

    }

    DFEApplication.prototype.init = function(){
//        console.log('DFEAppliation.init() | ');
        NavController.intialize($('nav#nav_panel'));
        CourseController.init();
        CourseController.loadPage('splash');
    };

    return new DFEApplication();
});
