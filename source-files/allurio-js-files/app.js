// ------------------------------------------------
// Project Name: Allurio - Coming Soon & Portfolio Template
// Project Description: Allurio - versatile and trendy coming soon & portfolio template to kick-start your project
// Tags: mix_design, allurio, coming soon, under construction, template, coming soon page, landing page, one page, html5, css3
// Version: 2.0.1
// Build Date: September 2019
// Last Update: November 2022
// This product is available exclusively on Themeforest
// Author: mix_design
// Author URI: https://themeforest.net/user/mix_design
// File name: app.js
// ------------------------------------------------

// ------------------------------------------------
// Table of Contents
// ------------------------------------------------
//
//  1. SVG Fallback
//  2. Chrome Smooth Scroll
//  3. Images Moving Ban
//  4. PhotoSwipe Gallery Images Replace
//  5. Header Collapse & Scroll To Top Button
//  6. Main Menu, Sections & Popup Behavior
//  7. Smooth Scrolling
//
// ------------------------------------------------
// Table of Contents End
// ------------------------------------------------

$(function() {

  // SVG Fallback
  if(!Modernizr.svg) {
    $("img[src*='svg']").attr("src", function() {
      return $(this).attr("src").replace(".svg", ".png");
    });
  };

  // Chrome Smooth Scroll
  try {
    $.browserSelector();
    if($("html").hasClass("chrome")) {
      $.smoothScroll();
    }
  } catch(err) {
  };

  // Images Moving Ban
  $("img, a").on("dragstart", function(event) { event.preventDefault(); });

  // Header Collapse & Scroll To Top Button
  var header        = $(".header"),
      offsetTop     = 300,
      offsetOpacity = 1200,
      toTop         = $('.to-top');

  $(window).on("scroll", function() {

    // Header collapse
    if (header.offset().top > 50) {
      header.addClass("reduced");
    } else {
      header.removeClass("reduced");
    };

    // Scroll to top button
    ( $(this).scrollTop() > offsetTop ) ? toTop.addClass('is-visible') : toTop.removeClass('is-visible fade-out');
    if( $(this).scrollTop() > offsetOpacity ) {
      toTop.addClass('fade-out');
    };

  });

  // Main Menu, Sections & Popup Behavior
  // Declaring Variables
  var menuTrigger        = $('#menu-trigger'),
      menuClose          = $('#menu-close'),
      menu               = $('#menu'),
      notifyTrigger      = $('#notify-trigger'),
      notifyClose        = $('#notify-close'),
      notify             = $('#notify');

      // Menu Open
      menuTrigger.on('click', function(event){
        event.preventDefault();
        $('body').addClass('overflow-hidden');
        menu.addClass('animate-in');
        setTimeout(function(){
          menuClose.addClass('is-visible');
        }, 1600);
      });

      // Menu Close
      menuClose.on('click', function(event){
        event.preventDefault();
        menu.addClass('animate-out');
        menuClose.removeClass('is-visible');
        setTimeout(function(){
          menu.removeClass('animate-in animate-out');
          $('body').removeClass('overflow-hidden');
        }, 2000);
      });

      $('.navigation li a').on('click', function(event){
        menu.addClass('animate-out');
        menuClose.removeClass('is-visible');
        setTimeout(function(){
          menu.removeClass('animate-in animate-out');
          $('body').removeClass('overflow-hidden');
        }, 2000);
      });

      // Notify Popup Open
      notifyTrigger.on('click', function(event){
        event.preventDefault();
        $('body').addClass('overflow-hidden');
        notify.addClass('animate-in');
        setTimeout(function(){
          notifyClose.addClass('is-visible');
        }, 1200);
      });

      // Notify Popup Close
      notifyClose.on('click', function(event){
        event.preventDefault();
        notify.addClass('animate-out');
        notifyClose.removeClass('is-visible');
        setTimeout(function(){
          notify.removeClass('animate-in animate-out');
          $('body').removeClass('overflow-hidden');
        }, 1600);
      });

  // Smooth Scrolling
  // Select all links with hashes
  $('a[href*="#"]')
  // Remove links that don't actually link to anything
  .not('[href="#"]')
  .not('[href="#0"]')
  .click(function(event) {
    // On-page links
    if (
      location.pathname.replace(/^\//, '') == this.pathname.replace(/^\//, '')
      &&
      location.hostname == this.hostname
    ) {
      // Figure out element to scroll to
      var target = $(this.hash);
      target = target.length ? target : $('[name=' + this.hash.slice(1) + ']');
      // Does a scroll target exist?
      if (target.length) {
        // Only prevent default if animation is actually gonna happen
        event.preventDefault();
        $('html, body').animate({
          scrollTop: target.offset().top
        }, 1000, function() {
          // Callback after animation
          // Must change focus!
          var $target = $(target);
          $target.focus();
          if ($target.is(":focus")) { // Checking if the target was focused
            return false;
          } else {
            $target.attr('tabindex','-1'); // Adding tabindex for elements not focusable
            $target.focus(); // Set focus again
          };
        });
      }
    }
  });

});
