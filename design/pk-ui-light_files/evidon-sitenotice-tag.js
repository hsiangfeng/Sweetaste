(function(){if(!Object.keys){Object.keys=(function(){var ar=Object.prototype.hasOwnProperty,aq=!({toString:null}).propertyIsEnumerable("toString"),ao=["toString","toLocaleString","valueOf","hasOwnProperty","isPrototypeOf","propertyIsEnumerable","constructor"],ap=ao.length;return function(au){if(typeof au!=="function"&&(typeof au!=="object"||au===null)){throw new TypeError("Object.keys called on non-object")}var aw=[],av,at;for(av in au){if(ar.call(au,av)){aw.push(av)}}if(aq){for(at=0;at<ap;at++){if(ar.call(au,ao[at])){aw.push(ao[at])}}}return aw}}())}if(!Array.prototype.indexOf){Array.prototype.indexOf=(function(ar,ap,aq){return function ao(aw,at){if(this===null||this===undefined){throw TypeError("Array.prototype.indexOf called on null or undefined")}var ax=ar(this),av=ax.length>>>0,au=aq(at|0,av);if(au<0){au=ap(0,av+au)}else{if(au>=av){return -1}}if(aw===void 0){for(;au!==av;++au){if(ax[au]===void 0&&au in ax){return au}}}else{if(aw!==aw){for(;au!==av;++au){if(ax[au]!==ax[au]){return au}}}else{for(;au!==av;++au){if(ax[au]===aw){return au}}}}return -1}})(Object,Math.max,Math.min)}if(!Array.isArray){Array.isArray=function(ao){return Object.prototype.toString.call(ao)==="[object Array]"}}var o='//wwwimages2.adobe.com/etc/beagle/public/globalnav/privacy-files',ak=o+"/sitenotice/",r=ak+window.evidon.id,b=1,a=2,x=1,v=2,w=3,K=1,J=2,L=3,s="_evidon_consent_cookie",t="_evidon_consent_ls_",am="_evidon_suppress_notification_cookie",ae="//l.betrad.com/site/v3/",ab="https://optoutapi.evidon.com/site/",O="https://l3.evidon.com/site/",E="https://l3.evidon.com/dataRequest/",d="evidon-banner.js",e="evidon-barrier.js",I="evidon-gdpr-overlay.js",q="evidon-cmp.js",p="//iabmap.evidon.com/iabevidonmapping.js",l=1,F=2,B=3,G=4,ac="_evidon-overlay",N="_evidon-l3",ai=30,an="evidonConsentGiven",j="_evh-button",U="_evh-link",aa="_evh-newvendor-indicator",n="_evidon-button-text",X="_evidon-link-text",T="evidon-notice-link",Y=800;var Q="evidon-consent-link",W="evidon-consent-link-text",V="evidon-consent-link-image",g="evidon-consent-button",m="evidon-consent-button-text",k="evidon-consent-button-image";var ah=1,af=17,aj=20,ad=21,Z=22,c=26,M=6,H=7,y=23;var S=2,i=3,R=15,h=16;var z="{company}",u="{consentToolUrl}",ag="{privacyPolicy}";var D={BANNER_SCRIPT:"fallback-banner.js",BARRIER_SCRIPT:"fallback-barrier.js",L2_SCRIPT:"fallback-gdpr-overlay.js"};var C=[3247];var f=function(){var aq=null,ao=false,ar=false,ap=false,aw=this;function at(){window.evidon.notice.dropPixel(h);window.evidon.notice.showOptions()}function av(aB,ay){var az=aB.indexOf(ay);if(az===-1){return null}var aA=aB.substr(az);az=aA.indexOf(":");aA=aA.substr(az+1);az=aA.indexOf(";");if(az===-1){return aA}else{return aA.substr(0,az)}}function ax(aC){var aB=aC.split(";");var ay={};for(var az=0;az<aB.length;az++){var aA=aB[az].split(":");if(aA.length!==2){continue}ay[aA[0]]=aA[1]}return ay}function au(){if(ao||!aq){return}var az=document,aG=window.evidon.notice.isMobile(),ay=az.createElement("div");ay.id=j;ay.className=g;ay.innerHTML="<style> @media print {#_evh-ric,#_evh-link { display:none !important; } } </style>";var aJ=(aG)?aq.mobileButtonStyle:aq.buttonStyle;var aH=az.createElement("a");aH.id=U;aH.style.cssText=aJ;var aK=(aG)?aq.mobileShowIcon:aq.showIcon;if(aK){var aD=az.createElement("img");aD.src=aq.buttonIcon;aD.className=k;var aM="border:0;display:inline;vertical-align:middle;margin-right:10px;";var aB=av(aq.buttonStyle,"height");if(aB){var aA=parseFloat(aB);var aP=aB.replace(aA,"");aA=parseInt(aA*0.6,10);aM+="height:"+aA+aP+";"}aD.style.cssText=aM;aH.appendChild(aD)}var aL=(aG)?aq.mobileShowText:aq.showText;if(aL){var aN=az.createElement("span");aN.id=n;aN.className=m;aN.style.cssText="vertical-align:middle !important;";aH.appendChild(aN)}aH.onclick=at;var aI=ax(aJ);var aC=aI.left===undefined?"left":"right";var aQ=aI.top===undefined?"top":"bottom";var aF="display: none; position: absolute;"+aC+":-10px;"+aQ+":-10px;width: 23px; height: 23px;";var aE=document.createElement("img");aE.id=aa;aE.src="//c.evidon.com/sitenotice/images/evidon-change-alert.png";aE.style.cssText=aF;aH.appendChild(aE);ay.appendChild(aH);document.body.appendChild(ay);var aO=window.evidon.notice.getTranslations();if(aO){aw.setButtonText(aO)}if(aG){aw.scaleForMobile()}ao=true}window.onbeforeprint=function(){var ay=document.getElementById(j);ay.style.display="none"};window.onafterprint=function(){var ay=document.getElementById(j);ay.style.display=""};this.scaleForMobile=function(){if(window.innerHeight<Y&&window.innerWidth<Y){return}var ay=document.getElementById(j),az=Math.max(window.innerWidth/screen.width,window.innerHeight/screen.height);if(ay&&(ay.style.zoom!==undefined)){ay.style.cssText+="zoom: "+(az<=2?az:2)+"!important;"}};this.setButtonText=function(aA){if(!aA){return}window.evidon.notice.dropPixel(i);var az=window.evidon.notice.isMobile();if(ao){var ay=document.getElementById(n);if(ay){ay.innerHTML=(az)?aA.mobileButtonText:aA.buttonText;ar=true}}};this.createButton=function(ay){if(!ay){aq=window.evidon.notice.getButtonStyle()}else{aq=ay}if(aq){au()}};this.showNewVendorIndicator=function(){var ay=document.getElementById(aa);if(!ay){return}ay.style.display="";this._isNewVendorIndicatorShown=true};this.hideNewVendorIndicator=function(){var ay=document.getElementById(aa);if(!ay){return}ay.style.display="none";this._isNewVendorIndicatorShown=false}};var P=function(){var ap=null,ao=false,at=this;function aq(){if(ao||!ap){return}var aw=document,az=window.evidon.notice.isMobile(),aA=aw.createElement("a");aA.href="#";aA.className=Q;var aB=aw.createElement("span");aB.id=X;aB.className=W;if(az&&ap.mobileShowIcon&&ap.mobileLinkIcon){var ay=aw.createElement("img");ay.src=ap.mobileLinkIcon;ay.style.cssText="vertical-align:bottom;";ay.className=V;aA.appendChild(ay);aB.style.cssText="margin-left: 6px;"}else{if(!az&&ap.showIcon&&ap.linkIcon){var ay=aw.createElement("img");ay.src=ap.linkIcon;ay.className=V;ay.style.cssText="vertical-align:bottom;";aA.appendChild(ay);aB.style.cssText="margin-left: 6px;"}}aA.appendChild(aB);if(az){aA.style.cssText=ap.mobileLinkStyle}else{aA.style.cssText=ap.linkStyle}var av=[];if(aw.getElementsByClassName!==undefined){av=aw.getElementsByClassName(T)}else{av=aw.querySelectorAll("."+T)}if(av.length===0){console.log("Evidon -- "+T+" not found on page, cant display the consent link.")}for(var ax=0;ax<av.length;ax++){var au=aA.cloneNode(true);au.onclick=ar;av[ax].appendChild(au)}ao=true;var aC=window.evidon.notice.getTranslations();if(aC){at.setLinkText(aC)}}function ar(){window.evidon.notice.dropPixel(R);window.evidon.notice.showOptions()}this.setLinkText=function(az){if(!ao||!az){return}window.evidon.notice.dropPixel(S);var aw=window.evidon.notice.isMobile();var ax=null,au=document,ay=(aw)?az.mobileLinkText:az.linkText;if(au.getElementsByClassName!==undefined){ax=au.getElementsByClassName(W)}else{ax=au.querySelectorAll("."+W)}if(ay){for(var av=0;av<ax.length;av++){ax[av].innerText=ay}}};this.createLink=function(au){if(au){ap=au}else{ap=window.evidon.notice.getLinkStyle()}if(!ap){return}aq()}};var al=function(){this.translations={};this.country=null;this.themes=null;this.languageCode=null;this.languageRoot=null;this.companyId=window.evidon.id;this.activeTranslations=null;this.activeTranslationId=0;this.settings=null;this.domain=null;this.path=null;this.activeSettings=null,this.consentTypeId=0,this.privacyAccessTypeId=0,this.consentRequired=false,this.consentDuration=13,this.consentIsGiven=false,this.L2Enabled=false,this.gdprEnabled=false,this.rightsLink="",this.scrollConsentEnabled=false,this.pageclickConsentEnabled=false,this.navigationConsentEnabled=false;this.activeVendorId=-1;this.activeDomain=null;this.pixelsDropped=[];this.scriptsLoaded=[];this.tagManagerEventFired=false;this.consentCallbackExecuted=false;this.closeCallbackExecuted=false;this.declineCallbackExecuted=false;this.navigationStack=[];this.blockDomainCheck=false;this.shouldSupportAmp=false;this.customerUserId=null;var at=this;this._getAttributeValue=function(az,aB){var ay=az.attributes,aC=null;for(var aA=0;aA<ay.length;aA++){if(ay[aA].localName==aB){aC=ay[aA].value;break}}return aC};var aw=document.getElementById("evidon-notice");if(aw){var ax=aw.src;var av=ax.indexOf(".com");if(av!==-1){ax=ax.substr(0,av+4);o='//wwwimages2.adobe.com/etc/beagle/public/globalnav/privacy-files';ak=o+"/sitenotice/";r=ak+window.evidon.id}var ao=this._getAttributeValue(aw,"data-options");if(ao){if(ao.indexOf("block-domain-check")>-1){this.blockDomainCheck=true}if(ao.indexOf("amp-support")>-1){this.shouldSupportAmp=true}}}var ar=(window.navigator.languages&&window.navigator.languages.length>0)?window.navigator.languages[0]:(window.navigator.userLanguage||window.navigator.language);if(ar){this.activateTranslations(ar.toLowerCase())}if(!this.blockDomainCheck){this.setDomain(null)}if(this._isConsentGiven()){this._runConsentCallback()}this._trackScrolling=function(){if(!at.scrollConsentEnabled){return}else{var ay=window.pageYOffset||(document.documentElement||document.body.parentNode||document.body).scrollTop;if(ay===0||ay>ai){at.consentGiven(true);at.dropPixel(aj)}}};this._trackClicking=function(ay){if(!at.pageclickConsentEnabled){return}if(!ay||!ay.target){return}if(!window.evidon.banner){return}if(window.evidon.banner.isOnBanner(ay.target)){return}if(window.evidon.gdprL2&&window.evidon.gdprL2.isOnBanner(ay.target)){return}at.consentGiven(true);at.dropPixel(ad)};this._hookConsentEvents=function(){if(document.readyState=="complete"){setTimeout(function(){if(window.addEventListener){window.addEventListener("scroll",at._trackScrolling,false);window.addEventListener("click",at._trackClicking,false)}else{window.attachEvent("onscroll",at._trackScrolling);window.attachEvent("onclick",at._trackClicking)}},500)}else{if(window.addEventListener){window.addEventListener("load",at._hookConsentEvents,false)}else{window.attachEvent("onload",at._hookConsentEvents)}}};this._detachEventTracking=function(){at.pageclickConsentEnabled=false;at.scrollConsentEnabled=false;try{if(window.removeEventListener!==undefined){window.removeEventListener("click",at._trackClicking,false)}else{window.detachEvent("onclick",at._trackClicking,false)}if(window.removeEventListener!==undefined){window.removeEventListener("scroll",at._trackScrolling,false)}else{window.detachEvent("onscroll",at._trackScrolling,false)}}catch(ay){}};if(window.addEventListener){window.addEventListener("resize",function(){at.showNotice()})}else{window.attachEvent("onresize",function(){at.showNotice()})}this._isDomReady=function(){if(document.readyState=="loading"){console.log("dom not ready, setting event");document.addEventListener("DOMContentLoaded",function(){console.log("dom ready, triggering load");try{document.removeEventListener("DOMContentLoaded")}catch(ay){}at.showNotice()},false);return false}else{return true}};var aq=window.addEventListener?"addEventListener":"attachEvent";var ap=window[aq];var au=aq=="attachEvent"?"onmessage":"message";ap(au,function(az){var aA=az.message?"message":"data";var ay=az[aA];if(ay=="acceptclicked"){at._closeL3()}},false)};al.prototype._isScriptLoaded=function(ap){for(var ao=0;ao<this.scriptsLoaded.length;ao++){if(this.scriptsLoaded[ao]==ap){return true}}return false};al.prototype._getRootDomain=function(ao){var ar=ao;var aq=ar.split(".");if(aq.length===2){ar=aq[0]}else{if(aq.length>=3){var ap=aq[aq.length-2];if(ap==="com"||ap==="co"){ar=aq[aq.length-3]}else{ar=ap}}}return ar};al.prototype._getTLD=function(ao){var aq=ao.split("."),ar="";if(aq&&aq.length>1){var ar=aq[aq.length-1];if(aq.length>=3){var ap=aq[aq.length-2];if(ap=="com"||ap=="co"){ar=ap+"."+ar}}}return ar};al.prototype.appendScript=function(aw,ao){var ar,av=document.createElement("script"),au=aq();function aq(){return document.getElementsByTagName("script")[0]||document.getElementsByTagName("head")[0]}function at(){av.onload=av.onreadystatechange=null;ao()}if(this._isScriptLoaded(aw)){if(ao){ao()}}else{av.async=true;av.src=aw;if(ao){av.onreadystatechange=function(){if(!ar&&(this.readyState=="loaded"||this.readyState=="complete")){ar=true;at()}};av.onload=at}try{au.parentElement.insertBefore(av,au);this.scriptsLoaded.push(aw)}catch(ap){console.log(ap)}}};al.prototype._getSettings=function(){var ay=this;if(!this.domain){return null}function aq(aH,aI){if(!aH||!aI){return false}else{return aH.substr(aH.length-aI.length)===aI}}function at(aH){var aL=[];for(var aI in ay.settings){aI=aI.toLowerCase();var aJ=aI.split("|")[0];if(!aq(aJ,"/")){aJ+="/"}var aK=aH.toLowerCase();if(!aq(aK,"/")){aK+="/"}if(aJ.indexOf(aK)===0){aL.push(aI)}}return aL}var ax=at(this.domain),aD=ay._getRootDomain(ay.domain),aG=ay._getTLD(this.domain);var aE=ay.domain.substr(0,ay.domain.indexOf(aD))+aD+".*";ax=ax.concat(at(aE));ax=ax.concat(at(aD+"."+aG));ax=ax.concat(at(aD+".*"));if(ax.length===1){ay.activeDomain=ax[0].split("|")[0];return this.settings[ax[0]]}else{if(ax.length>1){ax.sort(function(aH,aI){return(aI.length-aH.length)});var av=ay.domain+this.path,aB=[];for(var au=0;au<ax.length;au++){var aw=ax[au];if(aw.indexOf("|")!==-1){aw=aw.substr(0,aw.indexOf("|"))}if(aw.indexOf("*")!==-1){aw=aw.replace("*",aG)}if(av.indexOf(aw)!==-1){aB.push(ax[au])}}if(aB.length===0){return null}else{if(aB.length===1){ay.activeDomain=aB[0].split("|")[0];return ay.settings[aB[0]]}else{var ao=ay.country.id,aF=null;var ar=[];if(!aq(av,"/")){av+="/"}for(var au=0;au<aB.length;au++){var az=aB[au];var aA=az.split("|")[0];if(!aq(aA,"/")){aA+="/"}if(av.indexOf(aA)===0&&aA.length===av.length){ar.push(az)}}if(ar.length===1){aF=ay.settings[ar[0]];ay.activeDomain=ar[0].split("|")[0]}else{if(ar.length>1){aB=ar}}if(!aF){for(var au=0;au<aB.length;au++){if(ay.settings[aB[au]].countries.hasOwnProperty(ao)){aF=ay.settings[aB[au]];ay.activeDomain=aB[au].split("|")[0];break}}}if(!aF){var ap=0;for(var au=0;au<aB.length;au++){var aC=ay.settings[aB[au]];if(aC.hasOwnProperty("defaultCountry")){if(aC.defaultCountry!=0){ap=aC.defaultCountry;break}}}if(ap!==0){for(var au=0;au<aB.length;au++){var aC=ay.settings[aB[au]];if(aC.countries.hasOwnProperty(ap)){aF=aC;ay.activeDomain=aB[au].split("|")[0]}}}}if(!aF){aF=ay.settings[aB[0]];ay.activeDomain=aB[0].split("|")[0]}return aF}}}}return null};al.prototype._getDefaultConsentCookieData=function(){var ap=this.activeSettings,aq={};var ao=ap.countries.hasOwnProperty(this.activeCountryId)?ap.countries[this.activeCountryId]:null;if(ao&&ap.vendors&&ap.vendors.hasOwnProperty(ao.vendor)){aq[this.activeCountryId]=ap.vendors[ao.vendor]}return{vendors:aq,consent_date:new Date().toISOString()}};al.prototype._getConsentCookieExpDate=function(ap){var ao=ap?new Date(ap):new Date();var aq=(this.consentDuration>0)?this.consentDuration:12;ao.setMonth(ao.getMonth()+aq);return ao};al.prototype._getConsentCookieDomainPath=function(){var ap="/";var ar=this.activeSettings;var ao=ar.hasOwnProperty("includeSubdomains")?ar.includeSubdomains:0;if(ao===2){ap=this.activeDomain;if(!ap){console.error("Attempted to set a cookie without a valid settings object");return}var aq=ap.indexOf("/");if(aq!==-1){ap=ap.substring(aq)}ap=window.location.pathname.substr(0,ap.length)}return ap};al.prototype._getConsentCookieDomain=function(){var ap=this.activeSettings;var ao=ap.hasOwnProperty("includeSubdomains")?ap.includeSubdomains:0;if(ao===1){return"."+this._getRootDomain(this.domain)+"."+this._getTLD(this.domain)}return null};al.prototype._isConsentGiven=function(){var ao=this._getConsentCookie();return(null!==ao)};al.prototype._deleteConsentCookie=function(){var ao=this._getConsentCookieDomain();var aq=this._getConsentCookieDomainPath();var ap=new Date(1970,1,1);this._removeLocalStorageItem(t+this.activeSettings.id);this._writeCookie(s,"",ap.toUTCString(),aq,ao)};al.prototype._getConsentCookie=function(){return this._getCookie(s)};al.prototype._setConsentCookie=function(at){var ao=this._getDefaultConsentCookieData();var aq=this._getConsentCookieExpDate(at);var ar=this._getConsentCookieDomainPath();var ap=this._getConsentCookieDomain();if(at){ao.consent_date=at.toISOString()}if(this._writeLocalStorage(t+this.activeSettings.id,JSON.stringify(ao))){delete (ao.vendors)}if(!this._writeCookie(s,JSON.stringify(ao),aq.toUTCString(),ar,ap)){return false}return ao};al.prototype._updateConsentedVendors=function(){var ap=this.getActiveVendors();var ao=this._getConsentedVendors();var au=this._getNewVendors(ap,ao);var aq=this._getConsentCookie().value;aq.vendors={};var at=this._getConsentCookieExpDate(new Date(aq.consent_date));var av=this._getConsentCookieDomainPath();var ar=this._getConsentCookieDomain();aq.vendors[this.activeCountryId]=ao.concat(au);if(this._writeLocalStorage(t+this.activeSettings.id,JSON.stringify(aq))){delete (aq.vendors)}this._writeCookie(s,JSON.stringify(aq),at.toUTCString(),av,ar)};al.prototype._getSuppressionCookie=function(){return this._getCookie(am)};al.prototype._triggerTagManagerEvent=function(){if(this.tagManagerEventFired){return}try{var ao=window.dataLayer||[];ao.push({event:an})}catch(ap){}try{if(window.utag){window.utag.link({event_name:an})}}catch(ap){}this.tagManagerEventFired=true};al.prototype._runConsentCallback=function(){this.consentIsGiven=true;if(this.consentCallbackExecuted&&!this.shouldSupportAmp){return}if(window.evidon&&window.evidon.priorConsentCallback){window.evidon.priorConsentCallback()}if(window.evidon&&window.evidon.cmp){window.evidon.cmp.consentGiven()}else{if(window.__cmp){window.__cmp("consentGiven",null,null)}}this.consentCallbackExecuted=true;this._triggerTagManagerEvent()};al.prototype._runCloseCallback=function(){this.consentIsGiven=false;if(this.closeCallbackExecuted&&!this.shouldSupportAmp){return}if(window.evidon&&window.evidon.closeCallback){window.evidon.closeCallback()}if(window.evidon&&window.evidon.cmp){window.evidon.cmp.consentClosed()}this.closeCallbackExecuted=true};al.prototype._runDeclineCallback=function(){this.consentIsGiven=false;if(this.declineCallbackExecuted&&!this.shouldSupportAmp){return}if(window.evidon&&window.evidon.consentDeclinedCallback){window.evidon.consentDeclinedCallback()}if(window.evidon&&window.evidon.cmp){window.evidon.cmp.consentDeclined()}this.declineCallbackExecuted=true};al.prototype._getLegacyNoticeType=function(){if(this.consentTypeId==x){if(this.privacyAccessTypeId==b){return 0}else{if(this.privacyAccessTypeId==a){return l}}}else{if(this.consentTypeId==v){if(this.privacyAccessTypeId==b){return G}else{if(this.privacyAccessTypeId==a){return F}}}else{if(this.consentTypeId==w){return B}}}return 0};al.prototype._closeL3=function(){var ao=document.getElementById(ac);var ap=document.getElementById(N);if(ao){ao.style.display="none";ao.style.opacity="0";setTimeout(function(){try{ao.parentElement.removeChild(ao)}catch(aq){console.log(aq)}},200)}if(ap){ap.style.display="none";ap.style.opacity=0;setTimeout(function(){try{ap.parentElement.removeChild(ap)}catch(aq){console.log(aq)}},200)}};al.prototype._navigationConsentGiven=function(){if(!this.navigationConsentEnabled){return false}var ap=document.referrer;var ao=document.location.hostname;if(ap&&ap!=document.URL&&ap.indexOf(ao)>-1){this.dropPixel(Z);return true}else{return false}};al.prototype._setTranslationValues=function(ar,at){for(var aq in ar){var ao=ar[aq];if(typeof ao==="object"){var ap=ao.id;ar[aq]=at[ap]}}return ar};al.prototype._setActiveTranslations=function(){if(!this.languageRoot||!this.translations){return}if(!this.activeSettings){if(!this.translations.hasOwnProperty(this.languageRoot)){this.activateTranslations(this.languageCode||this.languageRoot)}}else{var ar=this.activeSettings;if(ar.translations.hasOwnProperty(this.languageRoot)){if(this.translations.hasOwnProperty(this.languageRoot)){var at=ar.translations[this.languageRoot];var ap=0;if(at.hasOwnProperty(this.languageCode)){ap=at[this.languageCode]}else{if(at.hasOwnProperty(this.languageRoot)){ap=at[this.languageRoot]}else{if(this.languageRoot=="en"&&at.hasOwnProperty("en-us")){ap=at["en-us"]}else{function ao(av){for(var au in av){return au}}var aq=ao(at);if(aq){ap=at[aq]}}}}if(ap){this.activeTranslationId=ap;var at=this.translations[this.languageRoot];if(at.hasOwnProperty("items")){this.activeTranslations=this._setTranslationValues(at[ap],at.items)}else{this.activeTranslations=at[ap]}}}else{this.activateTranslations(this.languageCode||this.languageRoot)}}else{this.activateTranslations(ar.defaultTranslation.code)}}};al.prototype.dropPixel=function(ao,ar){var aq=window.evidon.id;var au=this.activeSettings.id;var ap=this.activeCountryId;var av=ae;if(av.substr(av.length-1)!=="/"){av+="/"}av+=aq+"/"+au+"/"+ap+"/"+ao+"/"+this.consentTypeId+"/"+this.privacyAccessTypeId;if(this.activeTranslationId!=0){av+="/"+this.activeTranslationId}if(this.pixelsDropped.indexOf(av)===-1||ar){this.pixelsDropped.push(av);av+="?consent="+((this.consentIsGiven)?"1":"0");if(this.customerUserId){av+="&user="+encodeURI(this.customerUserId)}var at=new Image(0,0);at.style.display="none";at.src=av}};al.prototype.consentGiven=function(ao){var ap=false;if(!this._isConsentGiven()&&!this.shouldSupportAmp){ap=this._setConsentCookie()}else{ap=this._isConsentGiven()}this._runConsentCallback();this._detachEventTracking();if(!this.shouldSupportAmp){if(window.evidon.banner){window.evidon.banner.destroyNotice()}if(window.evidon.barrier){window.evidon.barrier.destroyNotice()}}if(ap){if(ao===undefined||ao===false){this.dropPixel(c)}this.navigationStack=[];this.showNotice()}else{if(this.shouldSupportAmp){}else{console.error("Unable to set ConsentCookie")}}};al.prototype.closeGiven=function(){this._runCloseCallback();this._detachEventTracking();if(!this.shouldSupportAmp){if(window.evidon.banner){window.evidon.banner.destroyNotice()}if(window.evidon.barrier){window.evidon.barrier.destroyNotice()}}};al.prototype.declineGiven=function(){this._runDeclineCallback();this._detachEventTracking();if(!this.shouldSupportAmp){if(window.evidon.banner){window.evidon.banner.destroyNotice()}if(window.evidon.barrier){window.evidon.barrier.destroyNotice()}}};al.prototype.getConsentUrl=function(){var ao=window.evidon.id;var ar=this.activeSettings.id;var ap=this.activeCountryId;var aq=this.languageCode;return O+ao+"/"+ar+"/"+ap+"?lang="+aq};al.prototype.getGDPRRequestUrl=function(){var ao=window.evidon.id;var aq=this.activeSettings.id;var ap=this.activeCountryId;return E+ao+"/"+aq+"/"+ap};al.prototype.getPrivacyPolicyLink=function(){if(!this.activeCountryId){return"#"}var ap=this.activeSettings;var ao=ap.countries[this.activeCountryId];if(ao&&ap.privacyLinks&&ap.privacyLinks.hasOwnProperty(ao.privacyLinkId)){return this.activeSettings.privacyLinks[ao.privacyLinkId]}return"#"};al.prototype.showOptionPanel=function(ap){var ao=this;if(!window.evidon.gdprL2){if(C.indexOf(this.companyId)>-1){this.appendScript(ak+D.L2_SCRIPT,function(){ao.showOptionPanel(ap)})}else{this.appendScript(ak+I,function(){ao.showOptionPanel(ap)})}this.dropPixel(H)}else{window.evidon.gdprL2.showOverlay(ap)}};al.prototype.showOptions=function(ao){if(this.L2Enabled){this.showOptionPanel(ao)}else{this.showConsentTool(ao)}};al.prototype.showConsentTool=function(au){var aq=(this.activeSettings.consentDisplayType===undefined)?1:(this.activeSettings.consentDisplayType||1);var av=(aq==K||(aq==L&&window.location.protocol.indexOf("https")===-1));if(av){var ao=document.createElement("div");ao.style.cssText="background-color: #000000; opacity:.7; position:fixed;top:0;left:0;bottom:0;right:0; z-index:2147483640;";ao.id=ac;document.body.appendChild(ao);var ar=document.createElement("div");ar.id=N;if(this.isMobile()){ar.style.cssText="position:absolute; top:0;left:0; bottom:0; right:0;;z-index:2147483647; padding: 28px 0 0 0;overflow:auto;-webkit-overflow-scrolling:touch;overflow-y:scroll;"}else{ar.style.cssText="position:fixed; top: 10%;left:20%; width:60%;height:80%;z-index:2147483647; padding: 28px 0 0 0;"}var ap=document.createElement("button");ap.style.cssText="position:absolute; top:4px;right:8px;color:white; background:transparent;font-size:12px;border:0; psdding:4px;cursor:pointer;padding:0;";ap.innerHTML=this.activeTranslations.gdprl2Close+"&nbsp; &#x2716;";ap.onclick=this._closeL3;ar.appendChild(ap);var at=document.createElement("iframe");at.id="_evidon-consent-frame";at.scrolling="yes";at.seamless="seamless";at.frameBorder="0";at.src=this.getConsentUrl();at.style.cssText="width:100%; height:100%;";at.onload=function(){document.getElementById(N).style.position="fixed"};ar.appendChild(at);document.body.appendChild(ar)}else{window.open(this.getConsentUrl(),"L3")}this.dropPixel(M);if(window.evidon.button&&window.evidon.button._isNewVendorIndicatorShown){this._updateConsentedVendors();window.evidon.button.hideNewVendorIndicator()}};al.prototype.isMobile=function(){var ao=navigator.userAgent;return(/ip(hone|od)|(android).+mobile|opera m(ob|in)i/i).test(ao)||(/Android/).test(ao)||(/iPhone/).test(ao)||(/iPad/).test(ao)};al.prototype.showNotice=function(){if(!this.settings){return}if(!this.country){if(window.evidon.location){this.country=window.evidon.location}}if(!this.country){return}this.activeSettings=this._getSettings();if(!this.activeSettings){return}if(!this._isDomReady()){return}if(!this.themes){this.themes=(window.evidon.themes||null)}if(!this.themes){return}var at=this.country.id;var ar=null;if(this.activeSettings.countries.hasOwnProperty(at)){ar=this.activeSettings.countries[at];this.activeCountryId=at}else{ar=this.activeSettings.countries[this.activeSettings.defaultCountry];this.activeCountryId=this.activeSettings.defaultCountry}if(!ar){console.log("No consent settings found for the country: "+at);return}var ao="";if(ar.hasOwnProperty("consentTemplate")&&window.evidon.consentTemplates){var ap=ar.consentTemplate;var aq=window.evidon.consentTemplates[ap];this.iabEnabled=aq.iabEnabled||false;this.consentTypeId=aq.consentid;this.privacyAccessTypeId=aq.accessid;this.consentRequired=(aq.consentRequired===undefined?aq.duration>0:aq.consentRequired);this.consentDuration=aq.duration;this.L2Enabled=(aq.l2enabled===undefined)?false:aq.l2enabled;this.gdprEnabled=(aq.gdprEnabled===undefined)?false:aq.gdprEnabled;ao=(aq.consentactions===undefined)?"":aq.consentactions}else{this.iabEnabled=ar.iabEnabled||false;this.consentTypeId=ar.consentid;this.privacyAccessTypeId=ar.accessid;this.consentRequired=(ar.consentRequired===undefined?ar.duration>0:ar.consentRequired);this.consentDuration=ar.duration;this.L2Enabled=(ar.l2enabled===undefined)?false:ar.l2enabled;this.gdprEnabled=(ar.gdprEnabled===undefined)?false:ar.gdprEnabled;ao=ar.consentactions}var au=(ar.rightslinkId===undefined)?0:ar.rightslinkId;if(au===0){this.rightsLink=""}else{if(this.activeSettings.hasOwnProperty("rightsLinks")){if(this.activeSettings.rightsLinks.hasOwnProperty(au)){this.rightsLink=this.activeSettings.rightsLinks[au]}else{this.rightsLink=""}}else{this.rightsLink=""}}if(ao&&this.consentRequired){this.scrollConsentEnabled=(ao.indexOf("s")!==-1);this.navigationConsentEnabled=(ao.indexOf("n")!==-1);this.pageclickConsentEnabled=(ao.indexOf("p")!==-1)}else{this.scrollConsentEnabled=false;this.navigationConsentEnabled=false;this.pageclickConsentEnabled=false}this.activeVendorId=ar.vendor;this._setActiveTranslations();if(!this._isConsentGiven()&&this._navigationConsentGiven()){this.consentGiven(true)}else{if(this.consentRequired==false){this._runConsentCallback()}}this.dropPixel(ah);var ax=this._isConsentGiven();var aw=this._getSuppressionCookie();if(this.iabEnabled){this.appendScript(p);this.appendScript(ak+q);if(window.__cmp){window.__cmp("setGDPRApplies",this.consentRequired);window.__cmp("setSuppression",aw!==null)}else{console.error("unable to find __cmp stub")}}if(this.consentTypeId!=x&&!ax&&!aw){if(this.consentTypeId===v){if(C.indexOf(this.companyId)>-1){this.appendScript(ak+D.BANNER_SCRIPT)}else{this.appendScript(ak+d)}this._hookConsentEvents();if(this.activeTranslations&&window.evidon.banner){window.evidon.banner.setTextValues(this.activeTranslations)}}else{if(this.consentTypeId===w){if(C.indexOf(this.companyId)>-1){this.appendScript(ak+D.BARRIER_SCRIPT)}else{this.appendScript(ak+e)}if(this.activeTranslations&&window.evidon.barrier){window.evidon.barrier.setTextValues(this.activeTranslations)}}}}else{if(!aw){this._runConsentCallback()}if(this.privacyAccessTypeId==a){var av=this.getButtonStyle();if(av&&window.evidon.button){window.evidon.button.createButton(av);if(this.activeTranslations){window.evidon.button.setButtonText(this.activeTranslations)}}}this.checkConsentedVendors()}if(this.privacyAccessTypeId==b){av=this.getLinkStyle();if(av&&window.evidon.link){window.evidon.link.createLink(av);if(this.activeTranslations){window.evidon.link.setLinkText(this.activeTranslations)}}}};al.prototype.checkConsentedVendors=function(){var ap=this.getActiveVendors();var ao=this._getConsentedVendors();var aq=this._getNewVendors(ap,ao);if(aq.length>0&&typeof this.newVendorCallback==="function"){this.newVendorCallback(aq)}};al.prototype.getActiveVendors=function(){if(!this.activeSettings||!this.activeSettings.hasOwnProperty("vendors")){return}var ao=this.activeVendorId;if(ao===-1||!this.activeSettings.vendors.hasOwnProperty(ao)){return null}return this.activeSettings.vendors[ao]};al.prototype._getConsentedVendors=function(){var ao=this._getVendorsFromLocalStorage();if(!ao){ao=this._getVendorsFromConsentCookie()}if(!ao){return[]}return ao};al.prototype._getVendorsFromLocalStorage=function(){var ao=this._readLocalStorage(t+this.activeSettings.id);if(!ao){return null}ao=JSON.parse(ao);if(ao.hasOwnProperty("vendors")&&ao.vendors.hasOwnProperty(this.activeCountryId)){return ao.vendors[this.activeCountryId]}return null};al.prototype._getVendorsFromConsentCookie=function(){var ao=this._getConsentCookie();if(!ao||!ao.value){return null}var aq=ao.value;if(typeof aq==="string"){var ap=new Date(unescape(aq));aq=this._setConsentCookie(ap)}else{if(typeof aq==="object"){if(aq.vendors){this._setConsentCookie(new Date(aq.consent_date))}}}if(aq.hasOwnProperty("vendors")&&aq.vendors.hasOwnProperty(this.activeCountryId)){return aq.vendors[this.activeCountryId]}return null};al.prototype._getNewVendors=function(ap,ao){if(!ap||!ao){return[]}var ar=[];for(var aq=0;aq<ap.length;aq++){var at=ap[aq];if(ao.indexOf(at)===-1){ar.push(at)}}return ar};al.prototype.setLocation=function(ao){this.country=ao;if(!this.langaugeRoot){this.activateTranslations(ao.defaultLanguage)}this.showNotice()};al.prototype.setThemes=function(ao){this.themes=ao;this.showNotice()};al.prototype.activateTranslations=function(ao){if(ao===undefined||!ao){return}this.languageCode=ao;this.languageRoot=ao;var ap=this.languageCode.indexOf("-");if(ap!==-1){this.languageRoot=this.languageCode.substr(0,ap)}if(this.translations.hasOwnProperty(this.languageRoot)){this._setActiveTranslations();this.showNotice()}else{var aq=r+"/translations/"+this.languageRoot+".js";this.appendScript(aq);this.activeTranslations=null}};al.prototype.setDomain=function(ao,ar){if(!ao){this.domain=window.location.hostname.toLowerCase();this.path=window.location.pathname.toLowerCase()}else{ao=ao.toLowerCase();var ap=ao.indexOf("://");if(ap!==-1){ao=ao.substr(ap+3)}ap=ao.indexOf("/");if(ap===-1){this.domain=ao;this.path="/"}else{this.domain=ao.substr(0,ap);ao=ao.substr(ap);ap=ao.indexOf("?");if(ap!==-1){ao=ao.substr(0,ap)}this.path=ao}}if(ar===undefined||!ar){var aq=this._getRootDomain(this.domain);aq=aq.replace(".","");var at=r+"/"+aq+"/settings.js";this.appendScript(at)}this.showNotice()};al.prototype.addTranslation=function(ao,ap){this.translations[ao]=ap;this.showNotice()};al.prototype.loadSettings=function(ao){this.settings=ao;this.showNotice()};al.prototype.getBannerStyle=function(){if(this.consentTypeId!==v){return null}if(!this.themes){this.themes=window.evidon.themes}if(!this.themes){return null}if(this.themes.hasOwnProperty(this.activeSettings.themeId)){return this.themes[this.activeSettings.themeId].banner}else{return null}};al.prototype.getConsentTypeStyle=function(){var ao=this.getBarrierStyle();if(!ao){ao=this.getBannerStyle()}return ao};al.prototype.getBarrierStyle=function(){if(this.consentTypeId!==w){return null}if(!this.themes){this.themes=window.evidon.themes}if(!this.themes){return null}if(this.themes.hasOwnProperty(this.activeSettings.themeId)){return this.themes[this.activeSettings.themeId].barrier}else{return null}};al.prototype.getButtonStyle=function(){if(this.privacyAccessTypeId!==a){return null}if(!this.themes){this.themes=window.evidon.themes}if(!this.themes){return null}if(this.themes.hasOwnProperty(this.activeSettings.themeId)){return this.themes[this.activeSettings.themeId].button}else{return null}};al.prototype.getLinkStyle=function(){if(this.privacyAccessTypeId!==b){return null}if(!this.themes){this.themes=window.evidon.themes}if(!this.themes){return null}if(this.themes.hasOwnProperty(this.activeSettings.themeId)){return this.themes[this.activeSettings.themeId].link}else{return null}};al.prototype.getL2Style=function(){if(!this.L2Enabled){return}if(!this.themes){this.themes=window.evidon.themes}if(!this.themes){return null}if(this.themes.hasOwnProperty(this.activeSettings.themeId)){return this.themes[this.activeSettings.themeId].l2}else{return null}};al.prototype.getTranslations=function(){return this.activeTranslations};al.prototype.formatTranslation=function(av){var at=new RegExp(z,"g"),ar=new RegExp(u,"g"),au=new RegExp(ag,"g"),ao=this.getConsentUrl(),aq=this.getPrivacyPolicyLink(),ap=this.activeSettings.division||"";av=av.replace(at,ap).replace(ar,ao).replace(au,aq);return av};al.prototype.dropSuppressionCookie=function(ar,au){var ao={date:new Date()};var aq=new Date();aq.setDate(aq.getDate()+ar);var at=this._getConsentCookieDomainPath();var ap=this._getConsentCookieDomain();this._writeCookie(am,JSON.stringify(ao),aq.toUTCString(),at,ap);return ao};al.prototype._getCookie=function(ar){var ap=this._readCookies();for(var aq=0;aq<ap.length;aq++){var ao=ap[aq];if(ao.name===ar){return ao}}return null};al.prototype._readCookies=function(){var ap=document.cookie.split(";");var aq=[];for(var at=0;at<ap.length;at++){var av=ap[at];var au=av.slice(0,av.indexOf("=")).replace(/^\s+|\s+$/g,"");var aw=av.slice(av.indexOf("=")+1);var ao={name:au};try{ao.value=JSON.parse(aw)}catch(ar){ao.value=aw}aq.push(ao)}return aq};al.prototype._writeCookie=function(at,av,ar,au,aq){var ap=[at+"="+av];if(typeof ar==="string"){ap.push("expires="+ar)}ap.push("path="+au);if(typeof aq==="string"){ap.push("domain="+aq)}var ao=ap.join("; ");document.cookie=ao;return(document.cookie.indexOf(at)>-1)};al.prototype._readLocalStorage=function(ap){try{if(!window.localStorage){return false}}catch(ao){return false}return window.localStorage.getItem(ap)};al.prototype._writeLocalStorage=function(ap,aq){try{if(!window.localStorage){return false}}catch(ao){return false}window.localStorage.setItem(ap,aq);return window.localStorage.getItem(ap)!==null};al.prototype._removeLocalStorageItem=function(ao){if(!window.localStorage){return}window.localStorage.removeItem(ao)};al.prototype.withdrawConsent=function(){this._deleteConsentCookie();this.consentIsGiven=false;this.dropPixel(y);if(window.evidon.consentWithdrawnCallback){window.evidon.consentWithdrawnCallback()}};al.prototype.newVendorCallback=function(ao){if(window.evidon.button){window.evidon.button.showNewVendorIndicator()}if(window.evidon.cmp){window.evidon.cmp.newVendorCallback(ao)}};al.prototype.getOptOutApiUrl=function(){return ab};al.prototype.pushNavigationScreen=function(ao){this.navigationStack.push(ao)};al.prototype.popNavigationScreen=function(){if(this.navigationStack.length<1){return null}var ao=this.navigationStack.pop();return ao};al.prototype.getNavigationScreenStackCount=function(){return this.navigationStack.length};al.prototype.setUserIdentifier=function(ao){this.customerUserId=ao};var A=function(){this.subscriptions={};this.subscribe=function(ap,ao,aq){if(!this.subscriptions.hasOwnProperty(ap)){this.subscriptions[ap]=[]}if(!aq){aq=-1}this.subscriptions[ap].push({callback:ao,limit:aq})};this._fireEvent=function(ap,ao){if(!this.subscriptions.hasOwnProperty(ap)){return}var at=this.subscriptions[ap];for(var aq=0;aq<at.length;aq++){var ar=at[aq];if(ar.callback&&typeof ar.callback==="function"){ar.callback.call(null,ao);if(ar.limit===-1){continue}ar.limit--;if(ar.limit===0){at.splice(aq,1);aq--}}}}};if(!window.evidon.events){window.evidon.events=new A()}if(!window.evidon.notice){window.evidon.notice=new al()}if(!window.evidon.button){window.evidon.button=new f()}if(!window.evidon.link){window.evidon.link=new P()}})();