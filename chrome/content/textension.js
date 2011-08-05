var orgArgeeCodeTextension = {}

// Debug flag.
orgArgeeCodeTextension.debugMode = true;
// Conflict free jQuery.
orgArgeeCodeTextension.$ = jQuery.noConflict();

/**
 * shortcutListener
 *
 * Everyday I'm hustlin'
 **/
orgArgeeCodeTextension.shortcutListener = 
{
	invoke: function(){
		var app = orgArgeeCodeTextension;
		// Textension was invoked on a page!
		app.debugMessage("Textension invoked from shortcut.");
		// Start a dialog with all the controls
		app.dialogMaker.execute(gBrowser.contentDocument);
	}
}

/**
 * dialogMaker
 *
 * Little boxes on the website, little boxes all the same.
 **/
orgArgeeCodeTextension.dialogMaker =
{
	createEmptyBox: function(){
		var container = this.app.getHtml("div","textension-container");
		this.app.$("body",this.document).append(container);
		this.app.debugMessage("Created empty container.");
	},
	createTopLevel: function(){
		var controlTypes = ["font-size","color-style","space-case","sliders"];
		for(var i=0; i<controlTypes.length; i++){
			var controls = this.app.getHtml("div",controlTypes[i]);
			this.app.$("#textension-container",this.document).append(controls);
		}
		this.app.debugMessage("Created top level control containers.");
	},
	execute: function(document){
		this.app = orgArgeeCodeTextension;
		this.app.debugMessage("Executing Dialog Maker.");
		this.document = document;
		this.createEmptyBox();
		this.createTopLevel();
	}
}

/**
 * getHtml
 *
 * He could stream quicktime, he could code in flash.
 **/
orgArgeeCodeTextension.getHtml =
function(type, id, classes){
	var el = '<'+type+' id="'+id+'"';
	el += '></'+type+'>';
	return el;
}

/**
 * debugMessage
 *
 * If you got a problem, yo I'll solve it.
 **/
orgArgeeCodeTextension.debugMessage =
function(mesg){
	// Let's get a console service for company.
	var console = Components
					.classes["@mozilla.org/consoleservice;1"]
                    .getService(Components.interfaces.nsIConsoleService);
	// Are we debugging?
	if(orgArgeeCodeTextension.debugMode){
		// Tell the console what's up
		console.logStringMessage(mesg);
	}
}
