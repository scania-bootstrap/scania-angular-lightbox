# scania-angular-lightbox
File upload and gallery extension on angularJs framework

Scania angular-lightbox is an extension for file upload and gallery on AngularJs framework.

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


Next inject the directive into your app

    angular.module('yourapp', ['scania.directives']);

A complete example can be found <a href="http://embed.plnkr.co/PlVBJeLgy5CgqED6rzQq/preview">here</a>

# Examples

    <form method="post" id="uploadForm" enctype="multipart/form-data">
          <sc-lightbox size="lg" windowClass="modal-class" animation="true"></sc-lightbox>
    </form>