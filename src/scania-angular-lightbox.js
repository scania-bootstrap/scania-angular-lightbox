/**
 * scania-angular-lightbox
 * https://github.com/scania-bootstrap/scania-angular-lightbox
 * License: MIT
 *
 * @ngdoc directive
 * @name scLightbox
 * @module scania.directives
 *
 * @description file upload and gallery extension on angularJs framework
 */
(function () {
    'use strict';
    function scLightbox($animate, $modal) {
        return {
            restrict: 'AEC',
            templateUrl: 'template/lightbox/scania-angular-upload.html',
            controllerAs: 'lightbox',
            controller: function ($scope, $attrs) {
                $animate.enabled(false); // to solve the conflict between ngAnimate and ui-bootstrap animate
                var self = this;

                self.open = function (index) {
                    $scope.slides = self.flow.files;
                    $scope.slides[index].active = true;
                    self.activeImage = $scope.slides[index];

                    self.modalInstance = $modal.open({
                        animation: $attrs.animation,
                        templateUrl: 'template/lightbox/scania-angular-lightbox.html',
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
    /**
     * @ngdoc module
     * @name scania.directives
     *
     * @description Scania directives module
     */
    angular.module('scania.directives', []).directive('scLightbox', scLightbox);
})();
