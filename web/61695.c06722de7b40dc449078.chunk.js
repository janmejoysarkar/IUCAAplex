"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[61695,7184,83518,9911,32292,65149,87530,99435,21816],{7184:function(a,t,e){e(89336),e(36947),e(95021),e(53819),Object.defineProperty(t,"__esModule",{value:!0}),t.default=function(a){return function(t){var e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{},i=e.width,n=i&&a.matchPatterns[i]||a.matchPatterns[a.defaultMatchWidth],r=t.match(n);if(!r)return null;var l,u=r[0],d=i&&a.parsePatterns[i]||a.parsePatterns[a.defaultParseWidth],s=Array.isArray(d)?function(a,t){for(var e=0;e<a.length;e++)if(a[e].test(u))return e}(d):function(a,t){for(var e in a)if(a.hasOwnProperty(e)&&a[e].test(u))return e}(d);return l=a.valueCallback?a.valueCallback(s):s,{value:l=e.valueCallback?e.valueCallback(l):l,rest:t.slice(u.length)}}},a.exports=t.default},83518:function(a,t,e){e(89336),e(36947),e(95021),e(53819),Object.defineProperty(t,"__esModule",{value:!0}),t.default=function(a){return function(t){var e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{},i=t.match(a.matchPattern);if(!i)return null;var n=i[0],r=t.match(a.parsePattern);if(!r)return null;var l=a.valueCallback?a.valueCallback(r[0]):r[0];return{value:l=e.valueCallback?e.valueCallback(l):l,rest:t.slice(n.length)}}},a.exports=t.default},61695:function(a,t,e){e(94),e(36947),e(96054);var i=e(96784).default;Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var n=i(e(83518)),r=i(e(7184)),l={ordinalNumber:(0,n.default)({matchPattern:/^(\d+)(th|st|nd|rd)?/i,parsePattern:/\d+/i,valueCallback:function(a){return parseInt(a,10)}}),era:(0,r.default)({matchPatterns:{narrow:/^(ق|ب)/i,abbreviated:/^(ق\.?\s?م\.?|ق\.?\s?م\.?\s?|a\.?\s?d\.?|c\.?\s?)/i,wide:/^(قبل الميلاد|قبل الميلاد|بعد الميلاد|بعد الميلاد)/i},defaultMatchWidth:"wide",parsePatterns:{any:[/^قبل/i,/^بعد/i]},defaultParseWidth:"any"}),quarter:(0,r.default)({matchPatterns:{narrow:/^[1234]/i,abbreviated:/^ر[1234]/i,wide:/^الربع [1234]/i},defaultMatchWidth:"wide",parsePatterns:{any:[/1/i,/2/i,/3/i,/4/i]},defaultParseWidth:"any",valueCallback:function(a){return Number(a)+1}}),month:(0,r.default)({matchPatterns:{narrow:/^[جفمأسند]/i,abbreviated:/^(جان|فيف|مار|أفر|ماي|جوا|جوي|أوت|سبت|أكت|نوف|ديس)/i,wide:/^(جانفي|فيفري|مارس|أفريل|ماي|جوان|جويلية|أوت|سبتمبر|أكتوبر|نوفمبر|ديسمبر)/i},defaultMatchWidth:"wide",parsePatterns:{narrow:[/^ج/i,/^ف/i,/^م/i,/^أ/i,/^م/i,/^ج/i,/^ج/i,/^أ/i,/^س/i,/^أ/i,/^ن/i,/^د/i],any:[/^جان/i,/^فيف/i,/^مار/i,/^أفر/i,/^ماي/i,/^جوا/i,/^جوي/i,/^أوت/i,/^سبت/i,/^أكت/i,/^نوف/i,/^ديس/i]},defaultParseWidth:"any"}),day:(0,r.default)({matchPatterns:{narrow:/^[حنثرخجس]/i,short:/^(أحد|اثنين|ثلاثاء|أربعاء|خميس|جمعة|سبت)/i,abbreviated:/^(أحد|اثن|ثلا|أرب|خمي|جمعة|سبت)/i,wide:/^(الأحد|الاثنين|الثلاثاء|الأربعاء|الخميس|الجمعة|السبت)/i},defaultMatchWidth:"wide",parsePatterns:{narrow:[/^ح/i,/^ن/i,/^ث/i,/^ر/i,/^خ/i,/^ج/i,/^س/i],wide:[/^الأحد/i,/^الاثنين/i,/^الثلاثاء/i,/^الأربعاء/i,/^الخميس/i,/^الجمعة/i,/^السبت/i],any:[/^أح/i,/^اث/i,/^ث/i,/^أر/i,/^خ/i,/^ج/i,/^س/i]},defaultParseWidth:"any"}),dayPeriod:(0,r.default)({matchPatterns:{narrow:/^(a|p|mi|n|(in the|at) (morning|afternoon|evening|night))/i,any:/^([ap]\.?\s?m\.?|midnight|noon|(in the|at) (morning|afternoon|evening|night))/i},defaultMatchWidth:"any",parsePatterns:{any:{am:/^a/i,pm:/^p/i,midnight:/^mi/i,noon:/^no/i,morning:/morning/i,afternoon:/afternoon/i,evening:/evening/i,night:/night/i}},defaultParseWidth:"any"})};t.default=l,a.exports=t.default}}]);