angular
  .module('app', [])
  .controller("myCtrl", function ($scope, $sce) {
    $scope.attachment = false;
    $scope.filterByGroup={};
    $scope.searchText='';
    $scope.content =$sce.trustAsHtml(`
    <div id="carouselControls" style="margin: 0 auto" class="carousel slide" data-ride="carousel">
        <div class="carousel-inner">
          <div class="carousel-item active">
            <img class="img-fluid center-block"  src="img/img1.png" alt="First slide">
          </div>
          <div class="carousel-item">
            <img class="img-fluid center-block"  src="img/img2.png" alt="Second slide">
          </div>
          <div class="carousel-item">
            <img class="img-fluid center-block" src="img/img3.png" alt="Third slide">
          </div>
          <div class="carousel-item">
          <img class="img-fluid center-block" src="img/img4.png" alt="Forth slide">
        </div>
        </div>
        <a class="carousel-control-prev" href="#carouselControls" role="button" data-slide="prev">
          <span class="carousel-control-prev-icon" aria-hidden="true"></span>
          <span class="sr-only">Previous</span>
        </a>
        <a class="carousel-control-next" href="#carouselControls" role="button" data-slide="next">
          <span class="carousel-control-next-icon" aria-hidden="true"></span>
          <span class="sr-only">Next</span>
        </a>
      </div>
    `);
    $scope.reloadPage = function(){
      window.location.reload();
    }

    $scope.Dnl = function (ref) {
      $scope.ref = ref;
    }

    $scope.linkClicked=function (ref) {

      var html="<iframe src='" + ref + "' width='100%' style='height: -webkit-fill-available;min-height: 500px;'>";
      $scope.content =$sce.trustAsHtml(html);
    }
   
    $scope.clearSearch = function() {
      $scope.searchText='';
      var e = document.getElementById("searchText");
      e.value = "";
      var $e = angular.element(e);
      $e.triggerHandler('input');
  }

    $scope.topics = [{
      title: "البحث",
      sortOrder: 1,
      icon: "book",
      dnload: "WorkingFiles/01Srarch.zip",
      subGroups: [{
        "sub-title": "استكشاف كائنات واجهة برمجية الابحار",
        items: [{
          "item-title": "عرض واخفاء أشرطة الأدوات",
          "Vicon": "file-video-o",
          "Dicon": "file-pdf-o",
          "Durl": "doc/01ShowHideToolbars.pdf",
          "Vurl": "doc/01ShowHideToolbars.mp4"
        }, {
          "item-title": "تغيير حجم الخط",
          "Vicon": "file-video-o",
          "Dicon": "file-pdf-o",
          "Durl": "doc/02ChangeIEFont.pdf",
          "Vurl": "doc/02ChangeIEFont.mp4"
        }]
      },{
        "sub-title": "إدارة قائمة عناوين المواقع",
        items: [{
          "item-title": "حفظ موقع في المفضلة",
          "Vicon": "file-video-o",
          "Dicon": "file-pdf-o",
          "Durl": "doc/03addToFavorites.pdf",
          "Vurl": "doc/03addToFavorites.mp4"
        }, {
          "item-title": "إنشاء مجلد وحفظ موقع به",
          "Vicon": "file-video-o",
          "Dicon": "file-pdf-o",
          "Durl": "doc/04CreateFolderInFavorite.pdf",
          "Vurl": "doc/04CreateFolderInFavorite.mp4"
        }, {
          "item-title": "إعادة تسمية مجلد في المفضلة",
          "Vicon": "file-video-o",
          "Dicon": "file-pdf-o",
          "Durl": "doc/05RenFolderFavorite.pdf",
          "Vurl": "doc/05RenFolderFavorite.mp4"
        }, {
          "item-title": "حذف عنوان موقع/مجلد من المفضلة",
          "Vicon": "file-video-o",
          "Dicon": "file-pdf-o",
          "Durl": "doc/06DelFoldFavorite.pdf",
          "Vurl": "doc/06DelFoldFavorite.mp4"
        }]
      }]
    },{
      title: "برنامج معالجة النصوص",
      sortOrder: 2,
      icon: "keyboard-o",
      dnload: "WorkingFiles/02Word.zip",
      subGroups: [{
        "sub-title": "كتابة النصوص",
        items: [{
          "item-title": "البحث في المستند",
          "Vicon": "file-video-o",
          "Dicon": "file-pdf-o",
          "Durl": "doc/07wfind.pdf",
          "Vurl": "doc/07wfind.mp4"
        }, {
          "item-title": "استبدال بعض الكلمات",
          "Vicon": "file-video-o",
          "Dicon": "file-pdf-o",
          "Durl": "doc/08wrepalce.pdf",
          "Vurl": "doc/08wrepalce.mp4"
        },{
          "item-title": "التدقيق الإملائي",
          "Vicon": "file-video-o",
          "Dicon": "file-pdf-o",
          "Durl": "doc/09wspelling.pdf",
          "Vurl": "doc/09wspelling.mp4"
        }]
      }, {
        "sub-title": "إدراج جدول وتنسيقه",
        items: [{
          "item-title": "إدراج الجداول",
          "Vicon": "file-video-o",
          "Dicon": "file-pdf-o",
          "Durl": "doc/10winsert_table.pdf",
          "Vurl": "doc/10winsert_table.mp4"
        },{
          "item-title": "تحديد أجزاء من الجدول(خلية)",
          "Vicon": "file-video-o",
          "Dicon": "file-pdf-o",
          "Durl": "doc/11wtable_selectcell.pdf",
          "Vurl": "doc/11wtable_selectcell.mp4"
        },{
          "item-title": "تحديد أجزاء من الجدول(عمود)",
          "Vicon": "file-video-o",
          "Dicon": "file-pdf-o",
          "Durl": "doc/12wtable_selectcolumn.pdf",
          "Vurl": "doc/12wtable_selectcolumn.mp4"
        }, {
          "item-title": "تحديد أجزاء من الجدول(صف)",
          "Vicon": "file-video-o",
          "Dicon": "file-pdf-o",
          "Durl": "doc/13wtable_selectrows.pdf",
          "Vurl": "doc/13wtable_selectrows.mp4"
        }, {
          "item-title": "تحديد أجزاء من الجدول(جدول)",
          "Vicon": "file-video-o",
          "Dicon": "file-pdf-o",
          "Durl": "doc/14wtable_selecttable.pdf",
          "Vurl": "doc/14wtable_selecttable.mp4"
        }, {
          "item-title": "إدراج الأعمدة",
          "Vicon": "file-video-o",
          "Dicon": "file-pdf-o",
          "Durl": "doc/15winsert_columns.pdf",
          "Vurl": "doc/15winsert_columns.mp4"
        }, {
          "item-title": "إدراج الصفوف",
          "Vicon": "file-video-o",
          "Dicon": "file-pdf-o",
          "Durl": "doc/16winsert_rows.pdf",
          "Vurl": "doc/16winsert_rows.mp4"
        }, {
          "item-title": "حذف الصفوف والأعمدة",
          "Vicon": "file-video-o",
          "Dicon": "file-pdf-o",
          "Durl": "doc/17wdelete_columnsrows.pdf",
          "Vurl": "doc/17wdelete_columnsrows.mp4"
        }, {
          "item-title": "تغيير عرض الأعمدة وارتفاع الصفوف",
          "Vicon": "file-video-o",
          "Dicon": "file-pdf-o",
          "Durl": "doc/18wchange_columnsrows.pdf",
          "Vurl": "doc/18wchange_columnsrows.mp4"
        }, {
          "item-title": "حدود الجدول",
          "Vicon": "file-video-o",
          "Dicon": "file-pdf-o",
          "Durl": "doc/19wtable_borders.pdf",
          "Vurl": "doc/19wtable_borders.mp4"
        }, {
          "item-title": "تظليل الجدول",
          "Vicon": "file-video-o",
          "Dicon": "file-pdf-o",
          "Durl": "doc/20wtable_shading.pdf",
          "Vurl": "doc/20wtable_shading.mp4"
        }]
      },{
        "sub-title": "إدراج كائنات وتنسيقها",
        items: [{
          "item-title": "صور من ملف",
          "Vicon": "file-video-o",
          "Dicon": "file-pdf-o",
          "Durl": "doc/21winsert_picfromfile.pdf",
          "Vurl": "doc/21winsert_picfromfile.mp4"
        },{
          "item-title": "صور من ClipArt",
          "Vicon": "file-video-o",
          "Dicon": "file-pdf-o",
          "Durl": "doc/22winsert_clipart.pdf",
          "Vurl": "doc/22winsert_clipart.mp4"
        },{
          "item-title": "تنسيق الصور (التخطيط)",
          "Vicon": "file-video-o",
          "Dicon": "file-pdf-o",
          "Durl": "doc/23wpicture_layout.pdf",
          "Vurl": "doc/23wpicture_layout.mp4"
        },{
          "item-title": "تنسيق الصور (الموقع)",
          "Vicon": "file-video-o",
          "Dicon": "file-pdf-o",
          "Durl": "doc/24wpicture_position.pdf",
          "Vurl": "doc/24wpicture_position.mp4"
        },{
          "item-title": "تنسيق الصور (الحجم)",
          "Vicon": "file-video-o",
          "Dicon": "file-pdf-o",
          "Durl": "doc/25wpicture_size.pdf",
          "Vurl": "doc/25wpicture_size.mp4"
        },{
          "item-title": "حدود الصورة",
          "Vicon": "file-video-o",
          "Dicon": "file-pdf-o",
          "Durl": "doc/26wpicture_borders.pdf",
          "Vurl": "doc/26wpicture_borders.mp4"
        },{
          "item-title": "إدراج الرموز",
          "Vicon": "file-video-o",
          "Dicon": "file-pdf-o",
          "Durl": "doc/27winsert_symbols.pdf",
          "Vurl": "doc/27winsert_symbols.mp4"
        },{
          "item-title": "مربع النص",
          "Vicon": "file-video-o",
          "Dicon": "file-pdf-o",
          "Durl": "doc/28winsert_textbox.pdf",
          "Vurl": "doc/28winsert_textbox.mp4"
        },{
          "item-title": "الأشكال التلقائية",
          "Vicon": "file-video-o",
          "Dicon": "file-pdf-o",
          "Durl": "doc/29winsert_autoshapes.pdf",
          "Vurl": "doc/29winsert_autoshapes.mp4"
        },{
          "item-title": "تنسيق الأشكال التلقائية (الحدود)",
          "Vicon": "file-video-o",
          "Dicon": "file-pdf-o",
          "Durl": "doc/30wshapes_borders.pdf",
          "Vurl": "doc/30wshapes_borders.mp4"
        },{
          "item-title": "تنسيق الأشكال التلقائية (التعبئة)",
          "Vicon": "file-video-o",
          "Dicon": "file-pdf-o",
          "Durl": "doc/31wshapes_fill.pdf",
          "Vurl": "doc/31wshapes_fill.mp4"
        },{
          "item-title": "تنسيق الأشكال التلقائية (تأثيرات الشكل)",
          "Vicon": "file-video-o",
          "Dicon": "file-pdf-o",
          "Durl": "doc/32wshapes_effects.pdf",
          "Vurl": "doc/32wshapes_effects.mp4"
        },{
          "item-title": "تنسيق الأشكال التلقائية (التنسيق التلقائي)",
          "Vicon": "file-video-o",
          "Dicon": "file-pdf-o",
          "Durl": "doc/33wshapes_autoformat.pdf",
          "Vurl": "doc/33wshapes_autoformat.mp4"
        },{
          "item-title": "تغيير اتجاه النص",
          "Vicon": "file-video-o",
          "Dicon": "file-pdf-o",
          "Durl": "doc/34wshapes_textdirection.pdf",
          "Vurl": "doc/34wshapes_textdirection.mp4"
        },{
          "item-title": "استدارة الكائنات",
          "Vicon": "file-video-o",
          "Dicon": "file-pdf-o",
          "Durl": "doc/35wshapes_rotate.pdf",
          "Vurl": "doc/35wshapes_rotate.mp4"
        },{
          "sub-title": "إعداد الصفحة والطباعة",
          items: [{
            "item-title": "حدود الصفحة",
            "Vicon": "file-video-o",
            "Dicon": "file-pdf-o",
            "Durl": "doc/36wpage_borders.pdf",
            "Vurl": "doc/36wpage_borders.mp4"
          }, {
            "item-title": "تنسيق الصفحة (الهامش)",
            "Vicon": "file-video-o",
            "Dicon": "file-pdf-o",
            "Durl": "doc/37wpage_margins.pdf",
            "Vurl": "doc/37wpage_margins.mp4"
          }, {
            "item-title": "تنسيق الصفحة (الحجم)",
            "Vicon": "file-video-o",
            "Dicon": "file-pdf-o",
            "Durl": "doc/38wpage_size.pdf",
            "Vurl": "doc/38wpage_size.mp4"
          }, {
            "item-title": "رأس وتذييل الصفحة",
            "Vicon": "file-video-o",
            "Dicon": "file-pdf-o",
            "Durl": "doc/39wherder_footer.pdf",
            "Vurl": "doc/39wherder_footer.mp4"
          }]
        }]
      }]
    }, {
      title: "التواصل",
      sortOrder: 3,
      icon: "laptop",
      dnload: "WorkingFiles/03Communication.zip",
      subGroups: [{
        "sub-title": "إدارة قائمة العناوين الإلكترونية",
        items: [{
          "item-title": "تجميع العناوين الإلكترونية",
          "Vicon": "file-video-o",
          "Dicon": "file-pdf-o",
          "Durl": "doc/40GroupContacts.pdf",
          "Vurl": "doc/40GroupContacts.mp4"
        }, {
          "item-title": "إضافة عناوين إلكترونية",
          "Vicon": "file-video-o",
          "Dicon": "file-pdf-o",
          "Durl": "doc/41AddContacts.pdf",
          "Vurl": "doc/41AddContacts.mp4"
        }, {
          "item-title": "تعديل عناوين إلكترونية وحذفها",
          "Vicon": "file-video-o",
          "Dicon": "file-pdf-o",
          "Durl": "doc/42EditRemoveContact.pdf",
          "Vurl": "doc/42EditRemoveContact.mp4"
        }]
      }]
    }, {
      title: "معالجة الوسائط المتعددة",
      sortOrder: 4,
      icon: "paint-brush",
      dnload: "WorkingFiles/04Multimedia.zip",
      subGroups: [{
        "sub-title": "معالجة الرسومات",
        items: [{
          "item-title": "أنواع ملفات الصور",
          "Vicon": "file-video-o",
          "Dicon": "file-pdf-o",
          "Durl": "doc/43image_file_types.pdf",
          "Vurl": "doc/43image_file_types.mp4"
        }, {
          "item-title": "دمج أجزاء من رسومات متعددة",
          "Vicon": "file-video-o",
          "Dicon": "file-pdf-o",
          "Durl": "doc/44merge_part_of_images.pdf",
          "Vurl": "doc/44merge_part_of_images.mp4"
        }, {
          "item-title": "تدوير الرسومات",
          "Vicon": "file-video-o",
          "Dicon": "file-pdf-o",
          "Durl": "doc/45image_rotation.pdf",
          "Vurl": "doc/45image_rotation.mp4"
        }, {
          "item-title": "تغيير ألوان الصورة",
          "Vicon": "file-video-o",
          "Dicon": "file-pdf-o",
          "Durl": "doc/46change_image_colors.pdf",
          "Vurl": "doc/46change_image_colors.mp4"
        }, {
          "item-title": "تغيير درجة إضاءة الصورة",
          "Vicon": "file-video-o",
          "Dicon": "file-pdf-o",
          "Durl": "doc/47change_image_brightness.pdf",
          "Vurl": "doc/47change_image_brightness.mp4"
        }]
      },{
        "sub-title": "إضافة المؤثرات",
        items: [{
          "item-title": "تسجيل الأصوات وحفظها",
          "Vicon": "file-video-o",
          "Dicon": "file-pdf-o",
          "Durl": "doc/48record_sound_file.pdf",
          "Vurl": "doc/48record_sound_file.mp4"
        }, {
          "item-title": "أنواع الملفات الصوتية",
          "Vicon": "file-video-o",
          "Dicon": "file-pdf-o",
          "Durl": "doc/49open_sound_file_types.pdf",
          "Vurl": "doc/49open_sound_file_types.mp4"
        }]
      }]
    },{
      title: "برنامج العروض التقديمية",
      sortOrder: 4,
      icon: "paint-brush",
      dnload: "WorkingFiles/04Multimedia.zip",
      subGroups: [{
        "sub-title": "إثراء الشرائح",
        items: [{
          "item-title": "تحديد قالب التصميم",
          "Vicon": "file-video-o",
          "Dicon": "file-pdf-o",
          "Durl": "doc/50Ptheme slide.pdf",
          "Vurl": "doc/50Ptheme slide.mp4"
        }, {
          "item-title": "تحديد تخطيط",
          "Vicon": "file-video-o",
          "Dicon": "file-pdf-o",
          "Durl": "doc/51Playout.pdf",
          "Vurl": "doc/51Playout.mp4"
        }, {
          "item-title": "إدراج أشكال تلقائية والكتابة",
          "Vicon": "file-video-o",
          "Dicon": "file-pdf-o",
          "Durl": "doc/52Pinsert_autoshapes.pdf",
          "Vurl": "doc/52Pinsert_autoshapes.mp4"
        }, {
          "item-title": "تنسيق مربع نص والاشكال التلقائية (الحدود)",
          "Vicon": "file-video-o",
          "Dicon": "file-pdf-o",
          "Durl": "doc/53Pautoshape_border.pdf",
          "Vurl": "doc/53Pautoshape_border.mp4"
        }, {
          "item-title": "تنسيق مربع نص والاشكال التلقائية (التعبئة)",
          "Vicon": "file-video-o",
          "Dicon": "file-pdf-o",
          "Durl": "doc/54Pfill_autoshape.pdf",
          "Vurl": "doc/54Pfill_autoshape.mp4"
        }, {
          "item-title": "تنسيق مربع نص والاشكال التلقائية (تأثيرات الشكل)",
          "Vicon": "file-video-o",
          "Dicon": "file-pdf-o",
          "Durl": "doc/55Padd_effect_autoshape.pdf",
          "Vurl": "doc/55Padd_effect_autoshape.mp4"
        }, {
          "item-title": "تنسيق مربع نص والاشكال التلقائية (التنسيق التلقائي)",
          "Vicon": "file-video-o",
          "Dicon": "file-pdf-o",
          "Durl": "doc/56Pautoformat_autoshape.pdf",
          "Vurl": "doc/56Pautoformat_autoshape.mp4"
        }, {
          "item-title": "تنسيق WordArt (الحدود)",
          "Vicon": "file-video-o",
          "Dicon": "file-pdf-o",
          "Durl": "doc/57Pwordart_border.pdf",
          "Vurl": "doc/57Pwordart_border.mp4"
        }, {
          "item-title": "تنسيق WordArt (التعبئة)",
          "Vicon": "file-video-o",
          "Dicon": "file-pdf-o",
          "Durl": "doc/58Pwordart_fill.pdf",
          "Vurl": "doc/58Pwordart_fill.mp4"
        }, {
          "item-title": "تنسيق WordArt (التأثير)",
          "Vicon": "file-video-o",
          "Dicon": "file-pdf-o",
          "Durl": "doc/59Pwordart_effect.pdf",
          "Vurl": "doc/59Pwordart_effect.mp4"
        }, {
          "item-title": "تنسيق WordArt (التنسيق التلقائي)",
          "Vicon": "file-video-o",
          "Dicon": "file-pdf-o",
          "Durl": "doc/60Pwordart_autoformat.pdf",
          "Vurl": "doc/60Pwordart_autoformat.mp4"
        }, {
          "item-title": "تغيير خلفية الشريحة",
          "Vicon": "file-video-o",
          "Dicon": "file-pdf-o",
          "Durl": "doc/61Pbackground.pdf",
          "Vurl": "doc/61Pbackground.mp4"
        }, {
          "item-title": "إدراج تأثيرات حركية للكائنات",
          "Vicon": "file-video-o",
          "Dicon": "file-pdf-o",
          "Durl": "doc/62Panimation.pdf",
          "Vurl": "doc/62Panimation.mp4"
        }, {
          "item-title": "إدراج تأثيرات صوتية للكائنات",
          "Vicon": "file-video-o",
          "Dicon": "file-pdf-o",
          "Durl": "doc/63Padd_effect_sound.pdf",
          "Vurl": "doc/63Padd_effect_sound.mp4"
        }]
      }]
    },{
      title: "برنامج الجداول الالكترونية",
      sortOrder: 5,
      icon: "paint-brush",
      dnload: "WorkingFiles/04Multimedia.zip",
      subGroups: [{
        "sub-title": "إدخال البيانات وتنسيقها",
        items: [{
          "item-title": "تغيير اتجاه ورقة العمل",
          "Vicon": "file-video-o",
          "Dicon": "file-pdf-o",
          "Durl": "doc/64epage_direction.pdf",
          "Vurl": "doc/64epage_direction.mp4"
        }, {
          "item-title": "إدخال بيانات متنوعة",
          "Vicon": "file-video-o",
          "Dicon": "file-pdf-o",
          "Durl": "doc/65einsert_data.pdf",
          "Vurl": "doc/65einsert_data.mp4"
        }, {
          "item-title": "تنسيق محتوى الخلايا (الطريقة الأولى)",
          "Vicon": "file-video-o",
          "Dicon": "file-pdf-o",
          "Durl": "doc/66eformat_data.pdf",
          "Vurl": "doc/66eformat_data.mp4"
        }, {
          "item-title": "تنسيق محتوى الخلايا (الطريقة الثانية)",
          "Vicon": "file-video-o",
          "Dicon": "file-pdf-o",
          "Durl": "doc/67eformat_cells.pdf",
          "Vurl": "doc/67eformat_cells.mp4"
        }]
      },{
        "sub-title": "تنسيق الجداول",
        items: [{
          "item-title": "تنسيق الخلايا (المحاذاة الأفقية والعمودية)",
          "Vicon": "file-video-o",
          "Dicon": "file-pdf-o",
          "Durl": "doc/68etext_align.pdf",
          "Vurl": "doc/68etext_align.mp4"
        }, {
          "item-title": "تنسيق الخلايا (اتجاه النص والتفافه)",
          "Vicon": "file-video-o",
          "Dicon": "file-pdf-o",
          "Durl": "doc/69etext_oriencontrol.pdf",
          "Vurl": "doc/69etext_oriencontrol.mp4"
        }, {
          "item-title": "إدراج صفوف وأعمدة",
          "Vicon": "file-video-o",
          "Dicon": "file-pdf-o",
          "Durl": "doc/70einsert_rowcol.pdf",
          "Vurl": "doc/70einsert_rowcol.mp4"
        }, {
          "item-title": "تحديد عرض العمود وارتفاع الصف",
          "Vicon": "file-video-o",
          "Dicon": "file-pdf-o",
          "Durl": "doc/71ecolrow_size.pdf",
          "Vurl": "doc/71ecolrow_size.mp4"
        }, {
          "item-title": "البحث",
          "Vicon": "file-video-o",
          "Dicon": "file-pdf-o",
          "Durl": "doc/72efind.pdf",
          "Vurl": "doc/72efind.mp4"
        }, {
          "item-title": "الاستبدال",
          "Vicon": "file-video-o",
          "Dicon": "file-pdf-o",
          "Durl": "doc/73ereplace.pdf",
          "Vurl": "doc/73ereplace.mp4"
        }, {
          "item-title": "احتواء تلقائي للصفوف والأعمدة",
          "Vicon": "file-video-o",
          "Dicon": "file-pdf-o",
          "Durl": "doc/74eauto_colrow.pdf",
          "Vurl": "doc/74eauto_colrow.mp4"
        }, {
          "item-title": "تنسيق الحدود ",
          "Vicon": "file-video-o",
          "Dicon": "file-pdf-o",
          "Durl": "doc/75eformat_border.pdf",
          "Vurl": "doc/75eformat_border.mp4"
        }, {
          "item-title": "تعبئة الخلايا",
          "Vicon": "file-video-o",
          "Dicon": "file-pdf-o",
          "Durl": "doc/76efill_color.pdf",
          "Vurl": "doc/76efill_color.mp4"
        }]
      },{
        "sub-title": "إنجاز المعادلات",
        items: [{
          "item-title": "المعادلات الحسابية",
          "Vicon": "file-video-o",
          "Dicon": "file-pdf-o",
          "Durl": "doc/77eformulla_plus.pdf",
          "Vurl": "doc/77eformulla_plus.mp4"
        }, {
          "item-title": "نسخ المعادلات",
          "Vicon": "file-video-o",
          "Dicon": "file-pdf-o",
          "Durl": "doc/78eformula_dragcol.pdf",
          "Vurl": "doc/78eformula_dragcol.mp4"
        }]
      },{
        "sub-title": "إعداد الصفحة والطباعة",
        items: [{
          "item-title": "تحديد هوامش الصفحة",
          "Vicon": "file-video-o",
          "Dicon": "file-pdf-o",
          "Durl": "doc/79epage_margins.pdf",
          "Vurl": "doc/79epage_margins.mp4"
        }, {
          "item-title": "تحديد اتجاه الصفحة",
          "Vicon": "file-video-o",
          "Dicon": "file-pdf-o",
          "Durl": "doc/80epage_orientation.pdf",
          "Vurl": "doc/80epage_orientation.mp4"
        }, {
          "item-title": "حفظ المستند",
          "Vicon": "file-video-o",
          "Dicon": "file-pdf-o",
          "Durl": "doc/81esave.pdf",
          "Vurl": "doc/81esave.mp4"
        }, {
          "item-title": "معاينة المستند وطباعته",
          "Vicon": "file-video-o",
          "Dicon": "file-pdf-o",
          "Durl": "doc/82eprint_ppreview.pdf",
          "Vurl": "doc/82eprint_ppreview.mp4"
        }]
      }]
    }];

  });