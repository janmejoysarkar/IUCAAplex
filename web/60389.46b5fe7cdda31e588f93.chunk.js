"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[60389,94160,71779,49398,27017,4636,82255,59874],{94160:function(e,n,t){t(44962),t(36947),t(78557),t(82367),Object.defineProperty(n,"__esModule",{value:!0}),n.default=function(e){return function(n,t){var a;if("formatting"===(null!=t&&t.context?String(t.context):"standalone")&&e.formattingValues){var i=e.defaultFormattingWidth||e.defaultWidth,r=null!=t&&t.width?String(t.width):i;a=e.formattingValues[r]||e.formattingValues[i]}else{var d=e.defaultWidth,o=null!=t&&t.width?String(t.width):e.defaultWidth;a=e.values[o]||e.values[d]}return a[e.argumentCallback?e.argumentCallback(n):n]}},e.exports=n.default},60389:function(e,n,t){t(36947);var a=t(96784).default;Object.defineProperty(n,"__esModule",{value:!0}),n.default=void 0;var i=a(t(94160)),r={ordinalNumber:function(e,n){return String(e)},era:(0,i.default)({values:{narrow:["B","คศ"],abbreviated:["BC","ค.ศ."],wide:["ปีก่อนคริสตกาล","คริสต์ศักราช"]},defaultWidth:"wide"}),quarter:(0,i.default)({values:{narrow:["1","2","3","4"],abbreviated:["Q1","Q2","Q3","Q4"],wide:["ไตรมาสแรก","ไตรมาสที่สอง","ไตรมาสที่สาม","ไตรมาสที่สี่"]},defaultWidth:"wide",argumentCallback:function(e){return e-1}}),month:(0,i.default)({values:{narrow:["ม.ค.","ก.พ.","มี.ค.","เม.ย.","พ.ค.","มิ.ย.","ก.ค.","ส.ค.","ก.ย.","ต.ค.","พ.ย.","ธ.ค."],abbreviated:["ม.ค.","ก.พ.","มี.ค.","เม.ย.","พ.ค.","มิ.ย.","ก.ค.","ส.ค.","ก.ย.","ต.ค.","พ.ย.","ธ.ค."],wide:["มกราคม","กุมภาพันธ์","มีนาคม","เมษายน","พฤษภาคม","มิถุนายน","กรกฎาคม","สิงหาคม","กันยายน","ตุลาคม","พฤศจิกายน","ธันวาคม"]},defaultWidth:"wide"}),day:(0,i.default)({values:{narrow:["อา.","จ.","อ.","พ.","พฤ.","ศ.","ส."],short:["อา.","จ.","อ.","พ.","พฤ.","ศ.","ส."],abbreviated:["อา.","จ.","อ.","พ.","พฤ.","ศ.","ส."],wide:["อาทิตย์","จันทร์","อังคาร","พุธ","พฤหัสบดี","ศุกร์","เสาร์"]},defaultWidth:"wide"}),dayPeriod:(0,i.default)({values:{narrow:{am:"ก่อนเที่ยง",pm:"หลังเที่ยง",midnight:"เที่ยงคืน",noon:"เที่ยง",morning:"เช้า",afternoon:"บ่าย",evening:"เย็น",night:"กลางคืน"},abbreviated:{am:"ก่อนเที่ยง",pm:"หลังเที่ยง",midnight:"เที่ยงคืน",noon:"เที่ยง",morning:"เช้า",afternoon:"บ่าย",evening:"เย็น",night:"กลางคืน"},wide:{am:"ก่อนเที่ยง",pm:"หลังเที่ยง",midnight:"เที่ยงคืน",noon:"เที่ยง",morning:"เช้า",afternoon:"บ่าย",evening:"เย็น",night:"กลางคืน"}},defaultWidth:"wide",formattingValues:{narrow:{am:"ก่อนเที่ยง",pm:"หลังเที่ยง",midnight:"เที่ยงคืน",noon:"เที่ยง",morning:"ตอนเช้า",afternoon:"ตอนกลางวัน",evening:"ตอนเย็น",night:"ตอนกลางคืน"},abbreviated:{am:"ก่อนเที่ยง",pm:"หลังเที่ยง",midnight:"เที่ยงคืน",noon:"เที่ยง",morning:"ตอนเช้า",afternoon:"ตอนกลางวัน",evening:"ตอนเย็น",night:"ตอนกลางคืน"},wide:{am:"ก่อนเที่ยง",pm:"หลังเที่ยง",midnight:"เที่ยงคืน",noon:"เที่ยง",morning:"ตอนเช้า",afternoon:"ตอนกลางวัน",evening:"ตอนเย็น",night:"ตอนกลางคืน"}},defaultFormattingWidth:"wide"})};n.default=r,e.exports=n.default}}]);