/*
This file is for the customization on the site. thanks bye.
*/

localstorageGet()
        function localstorageGet() {
          if (localStorage.getItem('fontweight')) {
            $('style').append('body { font-weight:' + localStorage.getItem('fontweight') + " !important" + '}');
          }
          if (localStorage.getItem('fontfamily')) {
            $('style').append('body { font-family:' + localStorage.getItem('fontfamily') + " !important" + '}');
          }
          if (localStorage.getItem('odospeed')) {
            $('style').append('.odometer.odometer-auto-theme.odometer-animating-up .odometer-ribbon-inner, .odometer.odometer-theme-default.odometer-animating-up .odometer-ribbon-inner { -webkit-transition: -webkit-transform ' + localStorage.getItem('odospeed') + 's;-moz-transition: -moz-transform ' + localStorage.getItem('odospeed') + 's;-ms-transition: -ms-transform ' + localStorage.getItem('odospeed') + 's;-o-transition: -o-transform ' + localStorage.getItem('odospeed') + 's;transition: transform ' + localStorage.getItem('odospeed') + 's;}');
            $('style').append('.odometer.odometer-auto-theme.odometer-animating-down.odometer-animating .odometer-ribbon-inner, .odometer.odometer-theme-default.odometer-animating-down.odometer-animating .odometer-ribbon-inner { -webkit-transition: -webkit-transform ' + localStorage.getItem('odospeed') + 's;-moz-transition: -moz-transform ' + localStorage.getItem('odospeed') + 's;-ms-transition: -ms-transform ' + localStorage.getItem('odospeed') + 's;-o-transition: -o-transform ' + localStorage.getItem('odospeed') + 's;transition: transform ' + localStorage.getItem('odospeed') + 's;}');
      
          }
          if (localStorage.getItem('ododownclr')) {
            $('style').append('.odometer.odometer-auto-theme.odometer-animating-down.odometer-animating .odometer-ribbon-inner, .odometer.odometer-theme-default.odometer-animating-down.odometer-animating .odometer-ribbon-inner { color:' + localStorage.getItem('ododownclr') + " !important" + '}');
      
          }
          if (localStorage.getItem('odoupclr')) {
            $('style').append('.odometer.odometer-auto-theme.odometer-animating-up .odometer-ribbon-inner, .odometer.odometer-theme-default.odometer-animating-up .odometer-ribbon-inner { color:' + localStorage.getItem('odoupclr') + " !important" + '}');
      
          }
          if (localStorage.getItem('boxclr')) {
            $('style').append('#countbox,.diffrne,.countbox3,#graph,.buttosn,.about,#embedstuff { background:' + localStorage.getItem('boxclr') + " !important" + '}');
          }
          if (localStorage.getItem('backclr')) {
            $('style').append('body { background:' + localStorage.getItem('backclr') + " !important" + '}');
          }
          if (localStorage.getItem('textclr')) {
            $('style').append('body { color:' + localStorage.getItem('textclr') + " !important" + '}');
          }
          //fontweight fontfamily odospeed ododownclr odoupclr boxclr backclr textclr 
        }
        $('#submitbutton5').click(function () {
          setTimeout(function () {
            if (document.getElementById('textclr').value == '') {
              //Dont
              console.log("No1")
            } else {
              $('style').append('body { color:' + document.getElementById('textclr').value + " !important" + '}');
              console.log('#bodi { color:' + document.getElementById('textclr').value + " !important" + '}')
              localStorage.setItem('textclr', document.getElementById('textclr').value);
            }
            if (document.getElementById('backclr').value == '') {
              //Dont
              console.log("No2")
            } else {
              $('style').append('body { background:' + document.getElementById('backclr').value + " !important" + '}');
              console.log('#bodi { background:' + document.getElementById('backclr').value + " !important" + '}')
              localStorage.setItem('backclr', document.getElementById('backclr').value);
            }
            if (document.getElementById('boxclr').value == '') {
              //Dont
              console.log("No3")
            } else {
              $('style').append('#countbox,.diffrne, .countbox3,#graph,.buttosn,.about,#embedstuff { background:' + document.getElementById('boxclr').value + " !important" + '}');
              console.log('.boxerino,.justbox,.graphbox { background:' + document.getElementById('boxclr').value + " !important" + '}')
              localStorage.setItem('boxclr', document.getElementById('boxclr').value);
            }
            if (document.getElementById('odoupclr').value == '') { } else {
              $('style').append('.odometer.odometer-auto-theme.odometer-animating-up .odometer-ribbon-inner, .odometer.odometer-theme-default.odometer-animating-up .odometer-ribbon-inner { color:' + document.getElementById('odoupclr').value + " !important" + '}');
      
              localStorage.setItem('odoupclr', document.getElementById('odoupclr').value);
            }
            if (document.getElementById('ododownclr').value == '') { } else {
              $('style').append('.odometer.odometer-auto-theme.odometer-animating-down.odometer-animating .odometer-ribbon-inner, .odometer.odometer-theme-default.odometer-animating-down.odometer-animating .odometer-ribbon-inner { color:' + document.getElementById('ododownclr').value + " !important" + '}');
      
              localStorage.setItem('ododownclr', document.getElementById('ododownclr').value);
            }
            if (document.getElementById('odospeedclr').value == '') { } else {
              $('style').append('.odometer.odometer-auto-theme.odometer-animating-up .odometer-ribbon-inner, .odometer.odometer-theme-default.odometer-animating-up .odometer-ribbon-inner { -webkit-transition: -webkit-transform ' + document.getElementById('odospeedclr').value + 's;-moz-transition: -moz-transform ' + document.getElementById('odospeedclr').value + 's;-ms-transition: -ms-transform ' + document.getElementById('odospeedclr').value + 's;-o-transition: -o-transform ' + document.getElementById('odospeedclr').value + 's;transition: transform ' + document.getElementById('odospeedclr').value + 's;}');
              $('style').append('.odometer.odometer-auto-theme.odometer-animating-down.odometer-animating .odometer-ribbon-inner, .odometer.odometer-theme-default.odometer-animating-down.odometer-animating .odometer-ribbon-inner { -webkit-transition: -webkit-transform ' + document.getElementById('odospeedclr').value + 's;-moz-transition: -moz-transform ' + document.getElementById('odospeedclr').value + 's;-ms-transition: -ms-transform ' + document.getElementById('odospeedclr').value + 's;-o-transition: -o-transform ' + document.getElementById('odospeedclr').value + 's;transition: transform ' + document.getElementById('odospeedclr').value + 's;}');
      
              localStorage.setItem('odospeed', document.getElementById('odospeedclr').value);
            }
            if (document.getElementById('fontfamilyclr').value == '') { } else {
              $('style').append('body { font-family:' + document.getElementById('fontfamilyclr').value + " !important" + '}');
              localStorage.setItem('fontfamily', document.getElementById('fontfamilyclr').value);
            }
            if (document.getElementById('fontweightclr').value == '') { } else {
              $('style').append('body { font-weight:' + document.getElementById('fontweightclr').value + " !important" + '}');
              localStorage.setItem('fontweight', document.getElementById('fontweightclr').value);
      
            }
          }, 1000);
      
      
        });
        $('#submitbutton6').click(function () {
          setTimeout(function () {
            localStorage.removeItem('fontweight');
            localStorage.removeItem('fontfamily');
            localStorage.removeItem('odospeed');
            localStorage.removeItem('ododownclr');
            localStorage.removeItem('odoupclr');
            localStorage.removeItem('boxclr');
            localStorage.removeItem('backclr');
            localStorage.removeItem('textclr');
            location.reload();
          }, 1000);
      
      
        });