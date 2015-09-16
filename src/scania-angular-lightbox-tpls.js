/**
 * scania-angular-ui-tpls
 * https://github.com/scania-bootstrap/scania-angular-ui
 * License: MIT
 *
 *
 */

(function () {
    'use strict';

    /**
     * @ngdoc module
     * @name scania.angular.lightbox.tpls
     *
     * @description
     * Scania lightbox module including templates
     */
    angular.module('scania.angular.ui').run(["$templateCache", function ($templateCache) {
        $templateCache.put("template/scania-angular-upload.html",
            "<div flow-init=\"\" flow-name=\"lightbox.flow\" class=\"sc-angular-upload\" flow-file-added=\"!!{png:1,gif:1,jpg:1,jpeg:1}[$file.getExtension()]\" class=\"row ng-scope\">\n" +
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
    angular.module('scania.angular.ui').run(["$templateCache", function ($templateCache) {
        $templateCache.put("template/scania-angular-lightbox.html",
            "<div flow-init=\"\" class=\"lightbox\">\n" +
            "   <div class=\"modal-header\">\n" +
            "       <div class=\"pull-right\">\n" +
            "           <a ng-click=\"lightbox.deleteImage()\"><i class=\"text-muted icon-trash fa-2x icon-2x \"></i></a>\n" +
            "           <a ng-click=\"lightbox.modalInstance.dismiss('cancel')\"><i class=\"text-muted icon-remove-sign fa-2x icon-2x\"></i></a>\n" +
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
