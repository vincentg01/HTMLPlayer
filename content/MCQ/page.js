define([
	"jquery",
	"x2js",
	"framework/MCQPanel",
	"framework/EventDispatcher"
	],function($, X2JS,MCQPanel,EventDispatcher){
		
		var Page = function(p_$pageHolder, p_cssData, p_domView, p_xmlData)
		{
			EventDispatcher.call(this);
			var $pageContainer	= $("<section><style>"+p_cssData+"</style>"+p_domView+"</section>");
			$pageContainer.attr("id","page");
			p_$pageHolder.append($pageContainer).scrollTop(0);
			this.$view		= p_$pageHolder.find("#page");


			var oX2JS 				= new X2JS()
			this.jsonXMLData	= oX2JS.xml2json(p_xmlData	);
			
			this.panel = null;
			
			this.showSolution = this.showSolution.bind(this);
			return this;
			
		}
		
		Page.prototype						= Object.create(EventDispatcher.prototype);
		Page.prototype.constructor			= Page;
		
		Page.prototype.setContent = function(){
			var data = this.jsonXMLData.data.text;
		    for(var i = 0; i<data.length;i++){
		    	var oText = data[i];
	    		if(oText._id && oText._id != undefined){
					this.$view.find("#"+ oText._id).html(oText.__cdata)    			
	    		}else if(this.jsonXMLoText._class && this.jsonXMLoText._class != undefined){
					this.$view.find("."+ oText._id).html(oText.__cdata)    			
		    	}
			}
		}
		
		Page.prototype.init = function(){
			this.setContent();
			this.panel = new MCQPanel();
			this.panel.addEventListener("SHOW_SOLUTION_CLICKED", this.showSolution);
			this.panel.init($("#panel"));
		};
		
		Page.prototype.showSolution = function(){
			this.$view.addClass("show-result");
		};
		
		return Page;
	})
