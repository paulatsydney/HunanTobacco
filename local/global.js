
// *** Choose language (en|fr|de) ***
GLOBAL.labels.setLanguage(e.language.English);

// Global Systray object
var systray = ctx.systray();

// standard About popup declaration
ctx.popup({ pCtxtAbout: {
	template: e.popup.template.Ok,
	title:  GLOBAL.labels.aboutPopup.title,
	CX: 500,
	CY: 200,
	icon: e.popup.icon64.hello128
}});

// standard Shutdown/Restart/Update popup declaration
ctx.popup({ pCtxtShutdown: {
	template: e.popup.template.YesNo,
	title: GLOBAL.labels.stopPopup.title,
	CX: 500,
	CY: 200,
	message: '<br/><b>' + GLOBAL.labels.stopPopup.label + '</b><br/>', 
	icon: e.popup.icon64.hello
}});

/** Show diagnostic popup */
GLOBAL.addOn({ evShowDiagnostic: function(ev) {
	ctx.diagnostic.showSubmitPopup();
}});

/** Show diagnostic recorder popup */
GLOBAL.addOn({ evShowDiagRecorder: function(ev) {
	ctx.diagnostic.showRecordInitPopup();
}});

/** main process start handler */
GLOBAL.events.START.on(function (ev) {

	// *** Create Systray ***
	systray.loadImage('stop', 'FILE', e.popup.icon16.stop);
	systray.loadImage('restart', 'FILE', e.popup.icon16.repeat);
	systray.loadImage('about', 'FILE', e.popup.icon16.help);
	systray.createSystrayMenu(ctx.options.projectName, 'ICON1');

	/** 'About...' menu handler */
	systray.addMenu('', 'evCtxtAbout', GLOBAL.labels.menu.about, 'about', function (ev) {
		var label = "<H4>" + ctx.options.projectLabel + "</H4>" 
			+ GLOBAL.labels.aboutPopup.projectVersion + ": <b>" + ctx.options.projectVersion + "</b>&nbsp; (<b>" + ctx.options.projectDate + "</b>)<br/>" 
			+ GLOBAL.labels.aboutPopup.productVersion + ": <b>" + ctx.options.productVersion + "</b><br/>" 
			+ GLOBAL.labels.aboutPopup.frameworkVersion + ": <b>" + ctx.options.frameworkVersion + "</b><br/>";
		if (ctx.options.productVersions && ctx.options.productVersions['UnifiedStudio'])
			label += GLOBAL.labels.aboutPopup.studioVersion + ": <b>" + ctx.options.productVersions['UnifiedStudio'] + "</b><br/>" 
		if (ctx.options.serverVersion)
			label += GLOBAL.labels.aboutPopup.galaxyVersion + ": <b>" + ctx.options.serverVersion + "</b><br/>" 
		if (ctx.options.env != e.env.prod)
			label += GLOBAL.labels.aboutPopup.environment + ": <b>" + GLOBAL.labels.env[ctx.options.env] + "</b><br/>";
		if (ctx.options.m2m.root)
			label += GLOBAL.labels.aboutPopup.galaxyURL + ": <b>" + ctx.options.m2m.root + "</b><br/>";

		ctx.popups.pCtxtAbout.open({
			message: label
		});
	});
	
	/** Stop menu handler */
	systray.addMenu('', 'evCtxtShutdownRestart', GLOBAL.labels.menu.stopRestart, 'stop', function(ev) {
		ctx.switchOrShutdown();
	});	

	systray.loadImage('record', 'FILE', e.popup.icon16.record);
	/** Diagnostic */
	ctx.regHotKey(e.key.Ctrl + e.key.Shift + 'D', GLOBAL.events.evShowDiagnostic);	// shortcut Ctrl+Shift+D to display diagnostic
	systray.addMenu('', 'evReportBug', GLOBAL.labels.menu.reportIncident + ' (Ctrl+Shift+D)', 'record', function(ev) {
		GLOBAL.notify(GLOBAL.events.evShowDiagnostic);
	});

	/** Trace recorder */
	ctx.regHotKey(e.key.Ctrl + e.key.Shift + 'R', GLOBAL.events.evShowDiagRecorder);  // shortcut Ctrl+Shift+R to display recorder
	systray.addMenu('', 'evRecordTraces', GLOBAL.labels.menu.recordTraces + ' (Ctrl+Shift+R)', 'record', function(ev) {
		GLOBAL.notify(GLOBAL.events.evShowDiagRecorder);
	});
});

/** Auto-update menu handler */
GLOBAL.events.UPDATECTX.on(function(ev) {
	ctx.shutdownAgent(true, true, (ctx.options.restartConfirmation ? GLOBAL.labels.updatePopup.label : null), GLOBAL.labels.updatePopup.title);
});


/** Description */
ctx.cryptography.credential({ MyCredential1: {
	key: ctx.cryptography.keys.none,
	comment: "MyCredential",
	server: false
}});



