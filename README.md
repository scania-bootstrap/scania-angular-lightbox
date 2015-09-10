# scania-angular-lightbox [![Join the chat at https://gitter.im/scania-bootstrap/scania-angular-lightbox](https://badges.gitter.im/Join%20Chat.svg)](https://gitter.im/scania-bootstrap/scania-angular-lightbox?utm_source=badge&utm_medium=badge&utm_campaign=pr-badge&utm_content=badge)

File upload and gallery extension on angularJs framework

scania-angular-lightbox is an extension for file upload and gallery on AngularJs framework. The ```-tpls``` file contains the templates bundled in JavaScript, include it if you want to use default templates we provide or load your custom templates.

###<a href="http://embed.plnkr.co/PlVBJeLgy5CgqED6rzQq/preview">Demo</a>

# Getting Started

##Requirements

<a href="http://getbootstrap.com/">Bootstrap</a><br/>
<a href="https://angularjs.org/">Angular animate</a><br/>
<a href="http://flowjs.github.io/ng-flow/">flow/ng-flow</a><br/>
<a href="https://angular-ui.github.io/bootstrap/">UI Bootstrap</a><br/>

## Installation

     bower install scania-angular-lightbox

#Usage


Add the following script to your index.html file and you are good to go :<br/>

    <link href="//maxcdn.bootstrapcdn.com/bootstrap/3.3.4/css/bootstrap.min.css" rel="stylesheet" type="text/css">
    <link href="https://static.scania.com/development/global/css/scania-bootstrap.css" rel="stylesheet" type="text/css">
    <link href="scania-angular-lightbox.css"  rel="stylesheet" type="text/css">

    <script src="bower_components/flow.js/dist/flow.js"></script>
    <script src="bower_components/ng-flow/dist/ng-flow.js"></script>(is you want to provide your own templates)
    <script src="bower_components/scania-angular-lightbox/src/scania-angular-lightbox-tpls.js"></script> (if you want to use default templates)


Next inject the directive into your app

    angular.module('yourapp', ['scania.angular.lightbox']);

A complete example can be found <a href="http://embed.plnkr.co/PlVBJeLgy5CgqED6rzQq/preview">here</a>

# Examples

    <form method="post" id="uploadForm" enctype="multipart/form-data">
          <sc-lightbox size="lg" windowClass="modal-class" animation="true"></sc-lightbox>
    </form>