'use strict';

const humbergerMenu = document.querySelector('.humberger-menu');

const navi = document.getElementById('humberger-navigation');

const humbergerMenuSections = document.querySelectorAll('.humberger-menu-section');

const bg = document.querySelector('.bg');

humbergerMenu.addEventListener('click', function () {
  humbergerMenu.classList.toggle('active');
  navi.classList.toggle('active');
  bg.classList.toggle('active');
});

humbergerMenuSections.forEach((humbergerMenuSection) => {
  humbergerMenuSection.addEventListener('click', function () {
    humbergerMenu.classList.remove('active');
    navi.classList.remove('active');
    bg.classList.remove('active');
  });
});

$(function(){
  $('a[href^="#"]').click(function() {
  var speed = 500;
  var href = $(this).attr("href");
  var target = $(href == "#" || href == "" ? 'html' : href);
  var position = target.offset().top;
  $('body,html').animate({scrollTop:position}, speed, 'swing');
  return false;
  });
});


var fadeConts = document.querySelectorAll('.fadeConts'); // フェードさせる要素の取得
var fadeContsRect = []; // 要素の位置を取得するための配列
var fadeContsTop = []; // 要素の位置を取得するための配列
var windowY = window.pageYOffset; // ウィンドウのスクロール位置
var windowH = window.innerHeight; // ウィンドウの高さ
var remainder = 100; // ちょっとはみ出させる部分
// 要素の位置を取得
for (var i = 0; i < fadeConts.length; i++) {
  fadeContsRect.push(fadeConts[i].getBoundingClientRect());
}
for (var i = 0; i < fadeContsRect.length; i++) {
  fadeContsTop.push(fadeContsRect[i].top + windowY);
}
// ウィンドウがリサイズされたら、ウィンドウの高さを再取得
window.addEventListener('resize', function () {
  windowH = window.innerHeight;
});
// スクロールされたら
window.addEventListener('scroll', function () {
  // スクロール位置を取得
  windowY = window.pageYOffset;
  
  for (var i = 0; i < fadeConts.length; i++) {
    // 要素が画面の下端にかかったら
    if(windowY > fadeContsTop[i] - windowH + remainder) {
      // .showを付与
      fadeConts[i].classList.add('show');
    }
  }
});

// $(function() {
//   $('.slider').not('.slick-initialized').slick(); 
// });

// $('.slider').slick({
//   slidesToShow: 3,
// });

// if (window.matchMedia('(max-width: 900px)'.matches)){
//   $('.slider').not('.slick-initialized').slick({
//     slidesToShow: 1,
//     responsive: [
//       {
//         breakpoint: 768,
//         settings: {
//           // centerPadding: '50px',
//           slidesToShow: 1
//         }
//       }
//     ]
//   });
// };

// $('.slider').not('.slick-initialized').slick({
//   nextArrow: '<button type="button" class="slick-next"></button>',
// });


$(function(){
  /*=================================================
  // カルーセル用 jQueryプラグイン「slick」
  // マニュアル：https://kenwheeler.github.io/slick/
  ===================================================*/
  $('#slider').slick({
    autoplay: false,                         // 自動再生オン
    autoplaySpeed: 3000,                    // スライドを3秒で切り替え
    arrows: false,                           // 左右の矢印を表示
    dots: false,                             // ドット（ページ送り）を表示
    slidesToShow: 3,                        // スライドを1枚表示（※centerModeをtrueにすると両端に2枚見切れた状態になる）
    centerMode: true,                       // センターモード（両端が見切れた状態になる）
    centerPadding: '10%',                   // 見切れたコンテンツの幅を18%に設定
    prevArrow:'<div class="prev"></div>',   // 前へ矢印のHTMLを変更する
    nextArrow:'<div class="next"></div>',   // 次へ矢印のHTMLを変更する
    responsive: [              // レスポンシブの設定
      {
        breakpoint: 900,       // 900px以下の場合に適用
        settings: {
          // centerMode: false    // センターモードをオフにする

          slidesToShow: 1,
          
        }
      }
    ]
  });
});