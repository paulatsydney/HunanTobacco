
/** main process start handler */
GLOBAL.events.START.on(function (ev) {

	systray.addMenu('', 'MainMenu', GLOBAL.labels.menu.main);
	systray.addMenu('MainMenu', 'evMenu1', 'Menu 1', '', function(ev) {
		// add code here
	});
	systray.addMenu('MainMenu', 'evMenu2', 'Menu 2', '', function(ev) {
		// add code here
	});
	// *** menus displayed in test mode only ***
	if (ctx.options.isDebug) {
		systray.addMenu('', 'TestMenu', GLOBAL.labels.menu.test);
		systray.addMenu('TestMenu', 'evTest1', 'Test 1', '', function(ev) {
			// add code here
		});
		systray.addMenu('TestMenu', 'evTest2', 'Test 2', '', function(ev) {
			// add code here
		});
	}
});

/** main process stop handler */
GLOBAL.events.QUIT.on(function(ev) {
	// add code here
});
