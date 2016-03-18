/*!
 * froala_editor v1.2.8 (https://www.froala.com/wysiwyg-editor)
 * License https://www.froala.com/wysiwyg-editor/terms
 * Copyright 2014-2015 Froala Labs
 */

!function(a){a.Editable.DEFAULTS=a.extend(a.Editable.DEFAULTS,{colors:["#61BD6D","#1ABC9C","#54ACD2","#2C82C9","#9365B8","#475577","#CCCCCC","#41A85F","#00A885","#3D8EB9","#2969B0","#553982","#28324E","#000000","#F7DA64","#FBA026","#EB6B56","#E25041","#A38F84","#EFEFEF","#FFFFFF","#FAC51C","#F37934","#D14841","#B8312F","#7C706B","#D1D5D8","REMOVE"],colorsStep:7,colorGroups:[{text:"Text",cmd:"foreColor"},{text:"Background",cmd:"backColor"}],defaultColorGroup:"foreColor"}),a.Editable.prototype.refreshColors=function(){var a=this.getSelectionElement();this.$editor.find(".fr-color-picker button.fr-color-bttn").removeClass("active"),this.refreshColor(a,"background-color","backColor"),this.refreshColor(a,"color","foreColor")},a.Editable.prototype.refreshColor=function(b,c,d){for(;a(b).get(0)!=this.$element.get(0);){if("transparent"!==a(b).css(c)&&"rgba(0, 0, 0, 0)"!==a(b).css(c)){this.$editor.find('.fr-color-picker button.fr-color-bttn[data-param="'+d+'"][data-val="'+a.Editable.RGBToHex(a(b).css(c))+'"]').addClass("active");break}b=a(b).parent()}},a.Editable.commands=a.extend(a.Editable.commands,{color:{icon:"fa fa-tint",title:"Color",refreshOnShow:a.Editable.prototype.refreshColors,callback:function(a,b,c){this[c].apply(this,[b])},callbackWithoutSelection:function(b,c,d){"backColor"===d&&(d="background-color"),"foreColor"===d&&(d="color"),this._startInFontExec(d,b,c),"#123456"===c&&""===this.text()&&(this.cleanify(!0,!1),this.$element.find("span").each(function(b,c){var d=a(c),e=d.css("background-color");("#123456"===e||"#123456"===a.Editable.RGBToHex(e))&&d.css("background-color",""),e=d.css("color"),("#123456"===e||"#123456"===a.Editable.RGBToHex(e))&&d.css("color","")}))},undo:!0}}),a.Editable.prototype.command_dispatcher=a.extend(a.Editable.prototype.command_dispatcher,{color:function(a){var b=this.buildDropdownColor(a),c=this.buildDropdownButton(a,b,"fr-color-picker");return c}}),a.Editable.prototype.buildColorList=function(a,b){for(var c=this.options.defaultColorGroup==a?"block":"none",d='<div class="fr-color-set fr-'+a+'" style="display: '+c+'">',e=0;e<b.length;e++){var f=b[e];d+="REMOVE"!==f?'<button type="button" class="fr-color-bttn" data-val="'+f+'" data-cmd="color" data-param="'+a+'" style="background: '+f+';">&nbsp;</button>':'<button type="button" class="fr-color-bttn" data-val="#123456" data-cmd="color" data-param="'+a+'" style="background: #FFF;"><i class="fa fa-eraser"></i></button>',e%this.options.colorsStep==this.options.colorsStep-1&&e>0&&(d+="<hr/>",e!=this.options.colorsStep-1&&e!=2*this.options.colorsStep-1||!this.options.colorsTopChoices||(d+='<div class="separator"></div>'))}return d+="</div>"},a.Editable.prototype.buildDropdownColor=function(){for(var b="",c='<div class="fr-dropdown-menu">',d=0;d<this.options.colorGroups.length;d++)c+=this.buildColorList(this.options.colorGroups[d].cmd,this.options.colorGroups[d].colors||this.options.colors);for(c+="<p>",d=0;d<this.options.colorGroups.length;d++)b=this.options.defaultColorGroup==this.options.colorGroups[d].cmd?"active":"",c+='<span class="fr-choose-color '+b+'" data-text="true" data-param="'+this.options.colorGroups[d].cmd+'" style="width: '+100/this.options.colorGroups.length+'%;">'+this.options.colorGroups[d].text+"</span>";c+="</p></div>",this.$bttn_wrapper.on(this.mousedown,".fr-choose-color",function(a){return a.preventDefault(),a.stopPropagation(),"mousedown"===a.type&&1!==a.which?!0:void 0});var e=this;return this.$bttn_wrapper.on(this.mouseup,".fr-choose-color",function(b){if(b.preventDefault(),b.stopPropagation(),"mouseup"===b.type&&1!==b.which)return!0;var c=a(this);c.siblings().removeClass("active"),c.addClass("active"),c.parents(".fr-dropdown-menu").find("button").attr("data-param",c.attr("data-param")),c.parents(".fr-dropdown-menu").find(".fr-color-set").hide(),c.parents(".fr-dropdown-menu").find(".fr-color-set.fr-"+c.attr("data-param")).show(),e.refreshColors()}),c},a.Editable.prototype.backColor=function(b){this.inlineStyle("background-color","backColor",b),this.saveSelectionByMarkers(),this.$element.find("span").each(function(b,c){var d=a(c),e=d.css("background-color");("#123456"===e||"#123456"===a.Editable.RGBToHex(e))&&(d.css("background-color",""),d.find("span").each(function(b,c){var d=a(c);d.css("background-color",""),""!==d.attr("style")||d.hasClass("f-marker")||d.replaceWith(d.contents())})),""!==d.attr("style")||d.hasClass("f-marker")||d.replaceWith(d.contents())}),this.restoreSelectionByMarkers(),this.cleanify();var c=this.$editor.find('button.fr-color-bttn[data-cmd="backColor"][data-val="'+b+'"]');c.addClass("active"),c.siblings().removeClass("active")},a.Editable.prototype.foreColor=function(b){this.inlineStyle("color","foreColor",b),this.saveSelectionByMarkers(),this.$element.find("span").each(function(b,c){var d=a(c),e=d.css("color");("#123456"===e||"#123456"===a.Editable.RGBToHex(e))&&(d.css("color",""),d.find("span").each(function(b,c){var d=a(c);d.css("color",""),""!==d.attr("style")||d.hasClass("f-marker")||d.replaceWith(d.contents())})),""!==d.attr("style")||d.hasClass("f-marker")||d.replaceWith(d.contents())}),this.restoreSelectionByMarkers(),this.cleanify();var c=this.$editor.find('button.fr-color-bttn[data-cmd="foreColor"][data-val="'+b+'"]');c.addClass("active"),c.siblings().removeClass("active")}}(jQuery);
