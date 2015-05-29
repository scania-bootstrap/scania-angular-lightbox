/**
 * scania-angular-lightbox
 * https://github.com/scania-bootstrap/scania-angular-lightbox
 * License: MIT
 *
 */
(function () {
    'use strict';

    /**
     * @ngdoc module
     * @name scania.angular.lightbox.tpls
     *
     * @description Scania lightbox module
     */
    angular.module('scania.angular.lightbox.tpls', ['flow', 'template/scania-angular-upload.html', 'template/scania-angular-lightbox.html']).directive('scLightbox', ['$animate', '$modal', scLightbox]);

    /**
     * @ngdoc directive
     * @name scLightbox
     * @module scania.directives
     *
     * @description file upload and gallery extension on angularJs framework
     *
     *
     * @param $animate
     * @param $modal
     * @returns {{restrict: string, templateUrl: string, controllerAs: string, controller: Function}}
     */
    function scLightbox($animate, $modal) {
        return {
            restrict: 'AEC',
            templateUrl: 'template/scania-angular-upload.html',
            controllerAs: 'lightbox',
            controller: function ($scope, $attrs) {
                $animate.enabled(false); // to solve the conflict between ngAnimate and ui-bootstrap animate
                var self = this;

                self.interval = $attrs.interval;
                self.open = function (index) {
                    $scope.slides = self.flow.files;
                    $scope.slides[index].active = true;
                    self.activeImage = $scope.slides[index];

                    self.modalInstance = $modal.open({
                        animation: $attrs.animation,
                        templateUrl: 'template/scania-angular-lightbox.html',
                        size: $attrs.size,
                        windowClass: $attrs.windowclass,
                        scope: $scope,
                        resolve: {
                            slides: function () {
                                return $scope.slides;
                            }
                        },
                        controller: function ($scope) {
                            $scope.setAsActive = function (slide) {
                                if (slide.active) {
                                    self.activeImage = slide;
                                }
                            };
                        }
                    });
                };
                self.deleteImage = function () {
                    self.activeImage.cancel();
                    if ($scope.slides.length === 0) {
                        self.modalInstance.dismiss();
                    }
                };
            }
        };
    }

    angular.module("template/scania-angular-upload.html", []).run(["$templateCache", function($templateCache) {
        $templateCache.put("template/scania-angular-upload.html",
            "<div flow-init=\"\" flow-name=\"lightbox.flow\" class=\"row sc-angular-upload\" flow-file-added=\"!!{png:1,gif:1,jpg:1,jpeg:1}[$file.getExtension()]\">\n" +
            "  <div class=\"btn btn-default icon-upload-alt\" flow-btn=\"\">\n" +
            "       <input type=\"file\" multiple=\"multiple\" style=\"visibility: hidden; position: absolute;\">\n" +
            "  </div>\n" +
            "  <div class=\"form-group\">\n" +
            "       <div ng-repeat=\"file in $flow.files\" class=\"gallery-box ng-scope image-with-delete-icon\">\n" +
            "	        <a ng-click=\"lightbox.open($index)\">\n" +
            "               <img class=\"thumbnail img-responsive\" flow-img=\"file\"/>\n" +
            "           </a>\n" +
            "       </div>\n" +
            "  </div>\n" +
            "</div>\n" +
            "");
    }]);
    angular.module("template/scania-angular-lightbox.html", []).run(["$templateCache", function($templateCache) {
        $templateCache.put("template/scania-angular-lightbox.html",
            "<div flow-init=\"\" class=\"lightbox\">\n" +
            "   <div class=\"modal-header\">\n" +
            "       <div class=\"pull-right\">\n" +
            "           <a ng-click=\"lightbox.deleteImage()\"><i class=\"text-muted icon-trash icon-2x type--padding-right\"></i></a>\n" +
            "           <a ng-click=\"lightbox.modalInstance.dismiss('cancel')\"><i class=\"text-muted icon-remove-sign icon-2x\"></i></a>\n" +
            "       </div>\n" +
            "   </div>\n" +
            "   <div class=\"modal-body\">\n" +
            "       <carousel interval=\"lightbox.interval\">\n" +
            "           <slide ng-repeat=\"slide in slides\" active=\"slide.active\">\n" +
            "                <img class=\"img-responsive\" ng-attr-flow-img=\"slide\" ng-bind=\"setAsActive(slide)\"/>\n" +
            "           </slide>\n" +
            "       </carousel>\n" +
            "    </div>\n" +
            " </div>\n" +
            "");
    }]);
})();
