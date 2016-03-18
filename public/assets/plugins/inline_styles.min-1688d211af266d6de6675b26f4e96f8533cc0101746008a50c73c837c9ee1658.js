/*!
 * froala_editor v1.2.8 (https://www.froala.com/wysiwyg-editor)
 * License https://www.froala.com/wysiwyg-editor/terms
 * Copyright 2014-2015 Froala Labs
 */
!function(t){t.Editable.prototype.refreshInlineStyles=function(){var e=this.getSelectionElements()[0],i=e.tagName.toLowerCase();this.$bttn_wrapper.find(".fr-block-style").empty();var n=this.options.blockStyles[i];if(void 0===n&&(n=this.options.defaultBlockStyle),void 0!==n){this.$bttn_wrapper.find('.fr-dropdown > button[data-name="blockStyle"].fr-trigger').removeAttr("disabled");for(var l in n){var a=n[l],r="";t(e).hasClass(l)&&(r=' class="active"'),this.$bttn_wrapper.find(".fr-block-style").append(t("<li"+r+">").append(t('<a href="#" data-text="true">').text(a).addClass(l)).attr("data-cmd","blockStyle").attr("data-val",l))}}},t.Editable.commands=t.extend(t.Editable.commands,{inlineStyle:{title:"Inline Style",icon:"fa fa-paint-brush",refreshOnShow:t.Editable.prototype.refreshInlineStyles,callback:function(t,e){this.applyInlineStyles(e)},callbackWithoutSelection:function(t,e){this.applyInlineStyles(e)}}}),t.Editable.DEFAULTS=t.extend(t.Editable.DEFAULTS,{inlineStyles:{"Big Red":"font-size: 20px; color: red;","Small Blue":"font-size: 14px; color: blue;"}}),t.Editable.prototype.command_dispatcher=t.extend(t.Editable.prototype.command_dispatcher,{inlineStyle:function(t){var e=this.buildDropdownInlineStyle(),i=this.buildDropdownButton(t,e);return i}}),t.Editable.prototype.buildDropdownInlineStyle=function(){var t='<ul class="fr-dropdown-menu fr-inline-style">';for(var e in this.options.inlineStyles)t+='<li data-cmd="inlineStyle" data-val="'+e+'"><a href="#" style="'+this.options.inlineStyles[e]+'">'+e+"</a></li>";return t+="</ul>"},t.Editable.prototype.applyInlineStyles=function(e){this.insertHTML(""!==this.text()?this.start_marker+'<span data-fr-verified="true" style="'+this.options.inlineStyles[e]+'">'+this.text()+"</span>"+this.end_marker:'<span data-fr-verified="true" style="'+this.options.inlineStyles[e]+'">'+this.markers_html+t.Editable.INVISIBLE_SPACE+"</span>"),this.restoreSelectionByMarkers(),this.triggerEvent("inlineStyle")},t.Editable.prototype.startInInlineStyles=function(t){for(var e in this.options.inlineStyles[t])this._startInFontExec(e.replace(/([A-Z])/g,"-$1").toLowerCase(),null,this.options.inlineStyles[t][e]);this.triggerEvent("inlineStyle")}}(jQuery);