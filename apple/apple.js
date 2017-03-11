/**
 * Created by lenovo on 2017/1/9.
 */
//var oBtn=document.getElementById("btn");
//var oNav1=document.getElementById("nav1");
//var oNav2=document.getElementById("nav2");
//oBtn.onclick=function(){
//
//};
$(function () {
    $('#nav2 .btnn').on('click', function () {
        $('#nav1').toggleClass('pad');
      /*  $('#head').slideToggle(50);*/
    });
});
