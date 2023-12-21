"use strict";

angular.module('app', []).controller("myCtrl", function ($scope, $sce) {
  $scope.attachment = false;
  $scope.filterByGroup = {};
  $scope.searchText='';
  $scope.content = $sce.trustAsHtml("\n    <div id=\"carouselExampleControls\" style=\"margin: 0 auto\" class=\"carousel slide\" data-ride=\"carousel\">\n        <div class=\"carousel-inner\">\n          <div class=\"carousel-item active\">\n            <img class=\"img-fluid center-block\"  src=\"img/img1.png\" alt=\"First slide\">\n          </div>\n          <div class=\"carousel-item\">\n            <img class=\"img-fluid center-block\"  src=\"img/img2.png\" alt=\"Second slide\">\n          </div>\n          <div class=\"carousel-item\">\n            <img class=\"img-fluid center-block\" src=\"img/img3.png\" alt=\"Third slide\">\n          </div>\n          <div class=\"carousel-item\">\n          <img class=\"img-fluid center-block\" src=\"img/img4.png\" alt=\"Forth slide\">\n        </div>\n          <div class=\"carousel-item\">\n          <img class=\"img-fluid center-block\" src=\"img/img5.png\" alt=\"Fifth slide\">\n        </div>\n          <div class=\"carousel-item\">\n          <img class=\"img-fluid center-block\" src=\"img/img6.png\" alt=\"6 slide\">\n        </div>\n        </div>\n        <a class=\"carousel-control-prev\" href=\"#carouselExampleControls\" role=\"button\" data-slide=\"prev\">\n          <span class=\"carousel-control-prev-icon\" aria-hidden=\"true\"></span>\n          <span class=\"sr-only\">Previous</span>\n        </a>\n        <a class=\"carousel-control-next\" href=\"#carouselExampleControls\" role=\"button\" data-slide=\"next\">\n          <span class=\"carousel-control-next-icon\" aria-hidden=\"true\"></span>\n          <span class=\"sr-only\">Next</span>\n        </a>\n      </div>\n    ");

  $scope.reloadPage = function () {
    window.location.reload();
  };

  $scope.Dnl = function (ref) {
    $scope.ref = ref;
  };

  $scope.linkClicked = function (ref) {
    var html = "<iframe src='" + ref + "' width='100%' style='height: -webkit-fill-available;min-height: 500px;'>";
    $scope.content = $sce.trustAsHtml(html);
  };

  $scope.clearSearch = function () {
    var e = document.getElementById("searchText");
  
    e.value = "";
    var $e = angular.element(e);
    $e.triggerHandler('input');
    $scope.searchText='';
  };

  $scope.topics = [{
    title: "أساسيات البرمجة",
    sortOrder: 1,
    icon: "",
    dnload: "",
    dnloadText: "",
    subGroups: [{
      "sub-title": "الأنظمة العدديّة",
      items: [{
        "item-title": "النظام العشري والثنائي",
        "Vicon": "",
        "Dicon": "file-pdf-o",
        "Durl": "doc/PythonEbook-1-NumbSystem.pdf",
        "Vurl": ""
      }]
    },{
      "sub-title": "التخطيط لحلّ المسائل البرمجيّة",
      items: [{
        "item-title": "الخوارزميات Algorithms",
        "Vicon": "",
        "Dicon": "file-pdf-o",
        "Durl": "doc/PythonEbook-2-Algo.pdf",
        "Vurl": ""
      }, {
        "item-title": "الخرائط التدفقيّة Flowcharts",
        "Vicon": "",
        "Dicon": "file-pdf-o",
        "Durl": "doc/PythonEbook-4-Flowchart.pdf",
        "Vurl": ""
      }]
    }]
  },{
    title: "البرمجة بلغة PYTHON",
    sortOrder: 2,
    icon: "",
    dnload: "",
    dnloadText: "",
    subGroups: [{
      "sub-title": "أسلوب الكتابة في لغة بايثون",
      items: [{
        "item-title": "Python SYNTAX",
        "Vicon": "",
        "Dicon": "file-pdf-o",
        "Durl": "doc/PythonEbook-00-SYNTAX.pdf",
        "Vurl": ""
      }]
    },{
      "sub-title": "التعامل مع البيانات",
      items: [{
        "item-title": "أنواع البيانات",
        "Vicon": "",
        "Dicon": "file-pdf-o",
        "Durl": "doc/PythonEbook-5-DataTypes.pdf",
        "Vurl": ""
      }, {
        "item-title": "المتغيرات",
        "Vicon": "",
        "Dicon": "file-pdf-o",
        "Durl": "doc/PythonEbook-6-VarCons.pdf",
        "Vurl": ""
      }, {
        "item-title": "العوامل الحسابية والمنطقية والمقارنة",
        "Vicon": "",
        "Dicon": "file-pdf-o",
        "Durl": "doc/PythonEbook-7-Operators.pdf",
        "Vurl": ""
      }]
    },{
      "sub-title": "جمل الادخال والإخراج",
      items: [{
        "item-title": "إدخال البيانات وإخراج النتائج",
        "Vicon": "",
        "Dicon": "file-pdf-o",
        "Durl": "doc/PythonEbook-8-InputOutput.pdf",
        "Vurl": ""
      }]
    }, {
      "sub-title": "الدوال المضمّنة",
      items: [{
        "item-title": "أهمّ الدوال المضمّنة Buil-in Functions",
        "Vicon": "",
        "Dicon": "file-pdf-o",
        "Durl": "doc/PythonEbook-9-BuilFunc.pdf",
        "Vurl": ""
      }]
    }, {
      "sub-title": "الخوارزميات البرمجيّة",
      items: [{
        "item-title": "الجملة الشرطية",
        "Vicon": "",
        "Dicon": "file-pdf-o",
        "Durl": "doc/PythonEbook-10-ConditionalSt.pdf",
        "Vurl": ""
      }, {
        "item-title": "الجمل التكرارية",
        "Vicon": "",
        "Dicon": "file-pdf-o",
        "Durl": "doc/PythonEbook-Lesson-11-LoopSt.pdf",
        "Vurl": ""
      }, {
        "item-title": "بناء الدوال Functions",
        "Vicon": "",
        "Dicon": "file-pdf-o",
        "Durl": "doc/PythonEbook-Lesson-12-functions.pdf",
        "Vurl": ""
      }]
    },{
      "sub-title": "الأخطاء الشائعة",
      items: [{
        "item-title": "تتبّع الأخطاء وتصحيحها",
        "Vicon": "",
        "Dicon": "file-pdf-o",
        "Durl": "doc/",
        "Vurl": ""
      }]
    },{
      "sub-title": "بايثون والذكاء الاصطناعي",
      items: [{
        "item-title": "التعلّم الآلي",
        "Vicon": "",
        "Dicon": "file-pdf-o",
        "Durl": "doc/PythonEbook-5-AI.pdf",
        "Vurl": ""
      }]
    }]
  },{
    title: "التعليمات وملفات العمل",
    sortOrder: 0,
    icon: "book",
    dnload: "",
    dnloadText: "",
    subGroups: [{
      "sub-title": "تعليمات عامة",
      items: [{
        "item-title": "تعليمات عامة",
        "Vicon": "file-video-o",
        "Dicon": "file-pdf-o",
        "Durl": "doc/PythonEbook-0-prequisities.pdf",
        "Vurl": ""
      }]
    }]
  }];
});