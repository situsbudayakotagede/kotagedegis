// All material copyright ESRI, All Rights Reserved, unless otherwise specified.
// See http://js.arcgis.com/3.15/esri/copyright.txt and http://www.arcgis.com/apps/webappbuilder/copyright.txt for details.
//>>built
require({cache:{"url:widgets/BusinessAnalyst/CreateBuffersPage.html":'\x3cdiv\x3e\r\n\t\x3cdiv\x3e${nls.addRingsDtWt}\x3c/div\x3e\r\n\t\x3cbr\x3e\r\n    \x3cdiv style\x3d"width: 350 px; height: 110px"\x3e\r\n\t\t\x3cdiv data-dojo-attach-point\x3d"ringDtWtTabContainer" style\x3d"width: 100%; height: 110px;"\x3e\r\n\t\t\t\x3cdiv data-dojo-attach-point\x3d"ringsContentPane" title\x3d"${nls.rings}" style\x3d"margin-top: 15px;"\x3e\r\n\t\t\t\t${nls.radius}\r\n\t\t\t\t\x3cdiv data-dojo-type\x3d"dijit/form/TextBox" style\x3d"width: 42px;" data-dojo-props\x3d"value: 1" data-dojo-attach-point\x3d"ringsBufferRadii1"\x3e\x3c/div\x3e\r\n\t\t\t\t\x3cdiv data-dojo-type\x3d"dijit/form/TextBox" style\x3d"width: 42px;" data-dojo-props\x3d"value: 3" data-dojo-attach-point\x3d"ringsBufferRadii2"\x3e\x3c/div\x3e\r\n\t\t\t\t\x3cdiv data-dojo-type\x3d"dijit/form/TextBox" style\x3d"width: 42px;" data-dojo-props\x3d"value: 5" data-dojo-attach-point\x3d"ringsBufferRadii3"\x3e\x3c/div\x3e\r\n\t\t\t\t\x3cselect data-dojo-type\x3d"dijit/form/Select" data-dojo-attach-point\x3d"ringsBufferUnits"\x3e\r\n\t\t\t\t\t\x3coption value\x3d"esriMiles" selected\x3d"selected"\x3e${nls.miles}\x3c/option\x3e\r\n\t\t\t\t\t\x3coption value\x3d"esriKilometers"\x3e${nls.km}\x3c/option\x3e\r\n\t\t\t\t\x3c/select\x3e\r\n\t\t\t\t\x3cdiv data-dojo-attach-point\x3d"ringValidationErrorMessage" class\x3d"validationErrorMessage hidden"\x3e\x3c/div\x3e\r\n\t\t\t\t\x3ca href\x3d"https://doc.arcgis.com/en/arcgis-online/reference/credits.htm" target\x3d"_blank" class\x3d"esriFloatTrailing esriSmallFont" style\x3d"position: absolute; right: 0px; top: 94px;"\x3e${nls.creditInformation}\x3c/a\x3e\r\n\t\t\t\x3c/div\x3e\r\n\t\t\t\x3cdiv data-dojo-attach-point\x3d"driveTimeContentPane" title\x3d"${nls.driveTime}" style\x3d"margin-top: 15px;"\x3e\r\n\t\t\t\t${nls.time}\r\n\t\t\t\t\x3cdiv data-dojo-type\x3d"dijit/form/TextBox" style\x3d"width: 42px;" data-dojo-props\x3d"value: 5" data-dojo-attach-point\x3d"driveTimeBufferRadii1"\x3e\x3c/div\x3e\r\n\t\t\t\t\x3cdiv data-dojo-type\x3d"dijit/form/TextBox" style\x3d"width: 42px;" data-dojo-props\x3d"value: 10" data-dojo-attach-point\x3d"driveTimeBufferRadii2"\x3e\x3c/div\x3e\r\n\t\t\t\t\x3cdiv data-dojo-type\x3d"dijit/form/TextBox" style\x3d"width: 42px;" data-dojo-props\x3d"value: 15" data-dojo-attach-point\x3d"driveTimeBufferRadii3"\x3e\x3c/div\x3e\r\n\t\t\t\t\x3cselect data-dojo-type\x3d"dijit/form/Select" data-dojo-attach-point\x3d"driveTimeBufferUnits"\x3e\r\n\t\t\t\t\t\x3coption value\x3d"Minutes" selected\x3d"selected"\x3e${nls.minutes}\x3c/option\x3e\r\n\t\t\t\t\t\x3coption value\x3d"esriMiles"\x3e${nls.miles}\x3c/option\x3e\r\n\t\t\t\t\t\x3coption value\x3d"esriKilometers"\x3e${nls.km}\x3c/option\x3e\r\n\t\t\t\t\x3c/select\x3e\r\n\t\t\t\t\x3cdiv data-dojo-attach-point\x3d"driveTimeValidationErrorMessage" class\x3d"validationErrorMessage hidden"\x3e\x3c/div\x3e\r\n\t\t\t\t\x3ca href\x3d"https://doc.arcgis.com/en/arcgis-online/reference/credits.htm" target\x3d"_blank" class\x3d"esriFloatTrailing esriSmallFont" style\x3d"position: absolute; right: 0px; top: 94px;"\x3e${nls.creditInformation}\x3c/a\x3e\r\n\t\t\t\x3c/div\x3e\r\n\t\t\t\x3cdiv data-dojo-attach-point\x3d"walkTimeContentPane" title\x3d"${nls.walkTime}" style\x3d"margin-top: 15px;"\x3e\r\n\t\t\t\t${nls.time}\r\n\t\t\t\t\x3cdiv data-dojo-type\x3d"dijit/form/TextBox" style\x3d"width: 42px;" data-dojo-props\x3d"value: 5" data-dojo-attach-point\x3d"walkTimeBufferRadii1"\x3e\x3c/div\x3e\r\n\t\t\t\t\x3cdiv data-dojo-type\x3d"dijit/form/TextBox" style\x3d"width: 42px;" data-dojo-props\x3d"value: 10" data-dojo-attach-point\x3d"walkTimeBufferRadii2"\x3e\x3c/div\x3e\r\n\t\t\t\t\x3cdiv data-dojo-type\x3d"dijit/form/TextBox" style\x3d"width: 42px;" data-dojo-props\x3d"value: 15" data-dojo-attach-point\x3d"walkTimeBufferRadii3"\x3e\x3c/div\x3e\r\n\t\t\t\t\x3cselect data-dojo-type\x3d"dijit/form/Select" data-dojo-attach-point\x3d"walkTimeBufferUnits"\x3e\r\n\t\t\t\t\t\x3coption value\x3d"Minutes" selected\x3d"selected"\x3e${nls.minutes}\x3c/option\x3e\r\n\t\t\t\t\t\x3coption value\x3d"esriMiles"\x3e${nls.miles}\x3c/option\x3e\r\n\t\t\t\t\t\x3coption value\x3d"esriKilometers"\x3e${nls.km}\x3c/option\x3e\r\n\t\t\t\t\x3c/select\x3e\r\n\t\t\t\t\x3cdiv data-dojo-attach-point\x3d"walkTimeValidationErrorMessage" class\x3d"validationErrorMessage hidden"\x3e\x3c/div\x3e\r\n\t\t\t\t\x3ca href\x3d"https://doc.arcgis.com/en/arcgis-online/reference/credits.htm" target\x3d"_blank" class\x3d"esriFloatTrailing esriSmallFont" style\x3d"position: absolute; right: 0px; top: 94px;"\x3e${nls.creditInformation}\x3c/a\x3e\r\n\t\t\t\x3c/div\x3e\r\n\t\t\x3c/div\x3e\r\n\t\x3c/div\x3e\r\n\t\x3cdiv style\x3d"margin-top: 10px;" class\x3d"jimu-btn jimu-btn-vacation"  data-dojo-attach-point\x3d"backBtn" data-dojo-attach-event\x3d"onclick:backOnClick"\x3e${nls.back}\x3c/div\x3e\r\n\t\x3cdiv style\x3d"margin-top: 10px;" class\x3d"jimu-btn"  data-dojo-attach-point\x3d"createBufferBtn" data-dojo-attach-event\x3d"onclick:applyBuffer"\x3e${nls.apply}\x3c/div\x3e\r\n\r\n\t\x3cdiv data-dojo-attach-point\x3d"shelter" data-dojo-type\x3d"jimu/dijit/LoadingIndicator" data-dojo-props\x3d\'hidden:true\'\x3e\x3c/div\x3e\r\n\x3c/div\x3e'}});
define("dojo/_base/declare dijit/_TemplatedMixin dijit/_WidgetBase dijit/_WidgetsInTemplateMixin esri/dijit/geoenrichment/_WizardPage esri/geometry/Polygon esri/symbols/SimpleFillSymbol esri/symbols/SimpleLineSymbol esri/Color esri/graphic ./utils/GEUtil ./utils/TravelModeUtil ./utils/ValidationUtil dojo/text!./CreateBuffersPage.html jimu/dijit/TabContainer3 dijit/form/TextBox".split(" "),function(q,t,u,v,w,x,r,h,n,y,z,A,c,B,C){return q([u,t,w,v],{templateString:B,postCreate:function(){this.inherited(arguments);
this.tab=new C({tabs:[{title:this.nls.rings,content:this.ringsContentPane},{title:this.nls.driveTime,content:this.driveTimeContentPane},{title:this.nls.walkTime,content:this.walkTimeContentPane}],selected:this.nls.rings});this.tab.placeAt(this.ringDtWtTabContainer);this.tab.startup();this._setConfigDefaults()},startup:function(){this.inherited(arguments)},refresh:function(){this._showHideTabs()},_setConfigDefaults:function(){this._setRadii(this.config.ringDefaults,this.ringsBufferRadii1,this.ringsBufferRadii2,
this.ringsBufferRadii3);this.ringsBufferUnits.set("value",this.config.ringUnitDefault);this._setRadii(this.config.driveTimeDefaults,this.driveTimeBufferRadii1,this.driveTimeBufferRadii2,this.driveTimeBufferRadii3);this.driveTimeBufferUnits.set("value",this.config.driveTimeUnitDefault);this._setRadii(this.config.walkTimeDefaults,this.walkTimeBufferRadii1,this.walkTimeBufferRadii2,this.walkTimeBufferRadii3);this.walkTimeBufferUnits.set("value",this.config.walkTimeUnitDefault)},_showHideTabs:function(){this.config.ringDisabled&&
this.tab.removeTab(this.nls.rings);this.config.driveTimeDisabled&&this.tab.removeTab(this.nls.driveTime);this.config.walkTimeDisabled&&this.tab.removeTab(this.nls.walkTime);this.tab.getSelectedTitle()==this.nls.rings&&this.config.ringDisabled&&this.tab.selectTab(this.nls.driveTime);this.tab.getSelectedTitle()==this.nls.driveTime&&this.config.driveTimeDisabled&&this.tab.selectTab(this.nls.walkTime);this.tab.getSelectedTitle()==this.nls.walkTime&&this.config.walkTimeDisabled&&this.tab.selectTab(this.nls.driveTime)},
applyBuffer:function(){if(this._validateInput()){this.shelter.show();var a=this,c=[[16,59,143,1],[0,204,51,1],[204,51,0,1]],d=0,b={},l="",k="",f="";this.tab.getSelectedTitle()==this.nls.rings?(b.areaType="RingBuffer",b.bufferUnits=this.ringsBufferUnits.get("value"),f=this.ringsBufferUnits._getDisplayedValueAttr(),b.bufferRadii=this._getRadii(this.ringsBufferRadii1,this.ringsBufferRadii2,this.ringsBufferRadii3),l=this.nls.ring):this.tab.getSelectedTitle()==this.nls.driveTime?(b.areaType="NetworkServiceArea",
b.bufferUnits=this.driveTimeBufferUnits.get("value"),f=this.driveTimeBufferUnits._getDisplayedValueAttr(),b.bufferRadii=this._getRadii(this.driveTimeBufferRadii1,this.driveTimeBufferRadii2,this.driveTimeBufferRadii3),l=this.nls.driveTime,k="Driving "+("Minutes"==b.bufferUnits?"Time":"Distance")):(b.areaType="NetworkServiceArea",b.bufferUnits=this.walkTimeBufferUnits.get("value"),f=this.walkTimeBufferUnits._getDisplayedValueAttr(),b.bufferRadii=this._getRadii(this.walkTimeBufferRadii1,this.walkTimeBufferRadii2,
this.walkTimeBufferRadii3),l=this.nls.walkTime,k="Walking "+("Minutes"==b.bufferUnits?"Time":"Distance"));var q=[];A.getTravelMode(k).then(function(g){g&&(b.travelMode=g);z.createRingOrDriveTimes({geometry:a.wizard.selectedPoint.geometry,studyAreasOptions:b,sourceCountry:a.wizard.selectedCountryID}).then(function(g){a.wizard.clearSelectedPointBuffers();a.wizard.selectedPoint.areadesc2=l+a.nls.colon+" "+b.bufferRadii.join(", ")+" "+a.nls["headerDescription_"+f]+" "+a.nls.radii;g=g.results[0].value.FeatureSet[0].features.reverse();
var p=b.bufferRadii.reverse(),k;for(k in g){var m=new x({rings:[g[k].geometry.rings[0]],spatialReference:{wkid:102100}});if(a.tab.getSelectedTitle()==a.nls.rings)var e=new r(h.STYLE_SOLID,new h(h.STYLE_SOLID,new n(c[d]),2),new n([255,0,15,0]));else e=new n(c[d]),e.a=.5,e=new r(h.STYLE_SOLID,new h(h.STYLE_SOLID,new n(c[d]),2),e);m=new y(m,e);e={};e.graphic=m;e.name=a.wizard.selectedPoint.locationName+" - "+p[d]+" "+f;e.shortName=p[d]+" "+f;e.AREA_DESC=p[d]+" "+f;e.AREA_DESC2=l+a.nls.colon+" "+p[d]+
" "+a.nls["headerDescription_"+f]+" "+a.nls.radius_lowercase;a.wizard.selectedPoint.tradeAreas.push(e);a.map.graphics.add(m);q.push(m);d++}a.wizard.selectedPoint.tradeAreas=a.wizard.selectedPoint.tradeAreas.reverse();a.map.setExtent(a.wizard.selectedPoint.tradeAreas[a.wizard.selectedPoint.tradeAreas.length-1].graphic._extent);a.shelter.hide();a.onNext()},function(b){alert("Error: "+b);a.shelter.hide()})})}},backOnClick:function(){this.onBack()},_getRadii:function(a,c,d){a=a.get("value");c=c.get("value");
d=d.get("value");var b=[];""!=a&&b.push(a);""!=c&&b.push(c);""!=d&&b.push(d);return b},_setRadii:function(a,c,d,b){0<a.length?c.set("value",a[0]):c.set("value","");1<a.length?d.set("value",a[1]):d.set("value","");2<a.length?b.set("value",a[2]):b.set("value","")},_validateInput:function(){var a=!0,a=this.tab.getSelectedTitle()==this.nls.rings?c.validateInvalidValues(this.ringsBufferRadii1,this.ringsBufferRadii2,this.ringsBufferRadii3,this.ringValidationErrorMessage,this.nls.thisEntryIsNotValid):this.tab.getSelectedTitle()==
this.nls.driveTime?c.validateInvalidValues(this.driveTimeBufferRadii1,this.driveTimeBufferRadii2,this.driveTimeBufferRadii3,this.driveTimeValidationErrorMessage,this.nls.thisEntryIsNotValid):c.validateInvalidValues(this.walkTimeBufferRadii1,this.walkTimeBufferRadii2,this.walkTimeBufferRadii3,this.walkTimeValidationErrorMessage,this.nls.thisEntryIsNotValid);return a?(a=this.tab.getSelectedTitle()==this.nls.rings?c.validateMinMaxValues(this.ringsBufferRadii1,this.ringsBufferRadii2,this.ringsBufferRadii3,
c.MIN_RINGS_VALUE,c.MAX_RINGS_VALUE,this.ringValidationErrorMessage,this.nls.invalidValueRing):this.tab.getSelectedTitle()==this.nls.driveTime?c.validateMinMaxValues(this.driveTimeBufferRadii1,this.driveTimeBufferRadii2,this.driveTimeBufferRadii3,c.MIN_DTWT_VALUE,c.MAX_DTWT_VALUE,this.driveTimeValidationErrorMessage,this.nls.invalidValueDTWT):c.validateMinMaxValues(this.walkTimeBufferRadii1,this.walkTimeBufferRadii2,this.walkTimeBufferRadii3,c.MIN_DTWT_VALUE,c.MAX_DTWT_VALUE,this.walkTimeValidationErrorMessage,
this.nls.invalidValueDTWT))?!0:!1:!1}})});