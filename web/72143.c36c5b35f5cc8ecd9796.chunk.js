"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[72143,94160,71779,49398,27017,4636,82255,59874],{94160:function(e,n,t){t(44962),t(36947),t(78557),t(82367),Object.defineProperty(n,"__esModule",{value:!0}),n.default=function(e){return function(n,t){var o;if("formatting"===(null!=t&&t.context?String(t.context):"standalone")&&e.formattingValues){var d=e.defaultFormattingWidth||e.defaultWidth,a=null!=t&&t.width?String(t.width):d;o=e.formattingValues[a]||e.formattingValues[d]}else{var r=e.defaultWidth,l=null!=t&&t.width?String(t.width):e.defaultWidth;o=e.values[l]||e.values[r]}return o[e.argumentCallback?e.argumentCallback(n):n]}},e.exports=n.default},72143:function(e,n,t){t(94),t(36947);var o=t(96784).default;Object.defineProperty(n,"__esModule",{value:!0}),n.default=void 0;var d=o(t(94160)),a={ordinalNumber:function(e,n){return Number(e)+"."},era:(0,d.default)({values:{narrow:["př. n. l.","n. l."],abbreviated:["př. n. l.","n. l."],wide:["před naším letopočtem","našeho letopočtu"]},defaultWidth:"wide"}),quarter:(0,d.default)({values:{narrow:["1","2","3","4"],abbreviated:["1. čtvrtletí","2. čtvrtletí","3. čtvrtletí","4. čtvrtletí"],wide:["1. čtvrtletí","2. čtvrtletí","3. čtvrtletí","4. čtvrtletí"]},defaultWidth:"wide",argumentCallback:function(e){return e-1}}),month:(0,d.default)({values:{narrow:["L","Ú","B","D","K","Č","Č","S","Z","Ř","L","P"],abbreviated:["led","úno","bře","dub","kvě","čvn","čvc","srp","zář","říj","lis","pro"],wide:["leden","únor","březen","duben","květen","červen","červenec","srpen","září","říjen","listopad","prosinec"]},defaultWidth:"wide",formattingValues:{narrow:["L","Ú","B","D","K","Č","Č","S","Z","Ř","L","P"],abbreviated:["led","úno","bře","dub","kvě","čvn","čvc","srp","zář","říj","lis","pro"],wide:["ledna","února","března","dubna","května","června","července","srpna","září","října","listopadu","prosince"]},defaultFormattingWidth:"wide"}),day:(0,d.default)({values:{narrow:["ne","po","út","st","čt","pá","so"],short:["ne","po","út","st","čt","pá","so"],abbreviated:["ned","pon","úte","stř","čtv","pát","sob"],wide:["neděle","pondělí","úterý","středa","čtvrtek","pátek","sobota"]},defaultWidth:"wide"}),dayPeriod:(0,d.default)({values:{narrow:{am:"dop.",pm:"odp.",midnight:"půlnoc",noon:"poledne",morning:"ráno",afternoon:"odpoledne",evening:"večer",night:"noc"},abbreviated:{am:"dop.",pm:"odp.",midnight:"půlnoc",noon:"poledne",morning:"ráno",afternoon:"odpoledne",evening:"večer",night:"noc"},wide:{am:"dopoledne",pm:"odpoledne",midnight:"půlnoc",noon:"poledne",morning:"ráno",afternoon:"odpoledne",evening:"večer",night:"noc"}},defaultWidth:"wide",formattingValues:{narrow:{am:"dop.",pm:"odp.",midnight:"půlnoc",noon:"poledne",morning:"ráno",afternoon:"odpoledne",evening:"večer",night:"noc"},abbreviated:{am:"dop.",pm:"odp.",midnight:"půlnoc",noon:"poledne",morning:"ráno",afternoon:"odpoledne",evening:"večer",night:"noc"},wide:{am:"dopoledne",pm:"odpoledne",midnight:"půlnoc",noon:"poledne",morning:"ráno",afternoon:"odpoledne",evening:"večer",night:"noc"}},defaultFormattingWidth:"wide"})};n.default=a,e.exports=n.default}}]);