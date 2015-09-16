# scania-angular-lightbox [![Join the chat at https://gitter.im/scania-bootstrap/scania-angular-lightbox](https://badges.gitter.im/Join%20Chat.svg)](https://gitter.im/scania-bootstrap/scania-angular-lightbox?utm_source=badge&utm_medium=badge&utm_campaign=pr-badge&utm_content=badge)

File upload and gallery extension on angularJs framework

scania-angular-lightbox is an extension for file upload and gallery on AngularJs framework. The ```-tpls``` file contains the templates bundled in JavaScript, include it if you want to use default templates we provide or load your custom templates.

###<a href="http://embed.plnkr.co/PlVBJeLgy5CgqED6rzQq/preview">Demo</a>

# Getting Started

##Requirements

<a href="http://getbootstrap.com/">Bootstrap</a><br/>
<a href="https://angularjs.org/">Angular animate</a><br/>
<a href="http://flowjs.github.io/ng-flow/">flow/ng-flow</a><br/>

## Installation

     bower install scania-angular-lightbox

#Usage


Add the following script to your index.html file and you are good to go :<br/>

    <link href="//maxcdn.bootstrapcdn.com/bootstrap/3.3.4/css/bootstrap.min.css" rel="stylesheet" type="text/css">
           or
    <link href="bower_components/scania-bootstrap-ui/css/scania-bootstrap.css" rel="stylesheet" type="text/css">
    <link rel="stylesheet" type="text/css"  href="/bower_components/scania-angular-lightbox/src/ui-bootstrap/ui-bootstrap-custom-0.13.4-csp.css">
    <link rel="stylesheet" type="text/css" href="bower_components/scania-angular-lightbox/css/scania-angular-lightbox.css" >

    <script src="bower_components/flow.js/dist/flow.js"></script>
     <script src="bower_components/scania-angular-ui/src/scania-angular-lightbox.js"></script>
    <script src="bower_components/scania-angular-lightbox/src/scania-angular-lightbox-tpls.js"></script> (if you want to use default templates bundled with scania-angular-lightbox)


Next inject the directive into your app

    angular.module('yourapp', ['scania.angular.lightbox']);

A complete example can be found <a href="http://embed.plnkr.co/PlVBJeLgy5CgqED6rzQq/preview">here</a>

# Examples

    <form method="post" id="uploadForm" enctype="multipart/form-data">
          <sc-lightbox size="lg" windowClass="modal-class" animation="true"></sc-lightbox>
    </form>