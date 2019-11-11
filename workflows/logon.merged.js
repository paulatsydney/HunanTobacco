
// ----------------------------------------------------------------
//   Test menu for scenario Logon 
// ----------------------------------------------------------------
GLOBAL.events.START.on(function (ev) {
	if (ctx.options.isDebug) {
		// Add item in systray menu.
		systray.addMenu('', 'Logon', 'Test Logon', '', function (ev) {
			var rootData = ctx.dataManagers.rootData.create();
			
			// Initialize your data here.
			GLOBAL.scenarios.Logon.start(rootData);
		});
	}
});

//---------------------------------------------------
// Scenario Logon Starter ()
//---------------------------------------------------

// ----------------------------------------------------------------
//   Scenario: Logon
// ----------------------------------------------------------------
GLOBAL.scenario({ Logon: function(ev, sc) {
	var rootData = sc.data;

	sc.setMode(e.scenario.mode.clearIfRunning);
	sc.setScenarioTimeout(600000); // Default timeout for global scenario.
	sc.onError(function(sc, st, ex) { sc.endScenario(); }); // Default error handler.
	sc.onTimeout(30000, function(sc, st) { sc.endScenario(); }); // Default timeout handler for each step.
	sc.step(GLOBAL.steps.Start_SAPLogon750, GLOBAL.steps.pWindowSAPLogon75_man);
	sc.step(GLOBAL.steps.pWindowSAPLogon75_man, GLOBAL.steps.pSAP_management);
	sc.step(GLOBAL.steps.pSAP_management, null);
}}, ctx.dataManagers.rootData).setId('35b49d88-50a7-4109-a07c-2252ce3aa852') ;

// ----------------------------------------------------------------
//   Step: Start_SAPLogon750
// ----------------------------------------------------------------
GLOBAL.step({ Start_SAPLogon750: function(ev, sc, st) {
	var rootData = sc.data;
	ctx.workflow('Logon', '59e803c2-bd38-4109-9d59-07d26b8e3dcb') ;
	// Start 'SAPLogon750'
	SAPLogon750.start();
	sc.endStep(); // pWindowSAPLogon75_man
	return;
}});

// ----------------------------------------------------------------
//   Step: pWindowSAPLogon75_man
// ----------------------------------------------------------------
GLOBAL.step({ pWindowSAPLogon75_man: function(ev, sc, st) {
	var rootData = sc.data;
	ctx.workflow('Logon', '2f6b55fe-fa01-4c98-a5b0-135ce8efcd5e') ;
	// Wait until the Page loads
	SAPLogon750.pWindowSAPLogon75.wait(function(ev) {
		SAPLogon750.pWindowSAPLogon75.stQKXPUBLIC.clickDouble();
		sc.endStep(); // pSAP_management
		return;
	});
}});

// ----------------------------------------------------------------
//   Step: pSAP_management
// ----------------------------------------------------------------
GLOBAL.step({ pSAP_management: function(ev, sc, st) {
	var rootData = sc.data;
	ctx.workflow('Logon', '79f9ee9d-b68c-4ab8-a7d9-f6e540164247') ;
	// Wait until the Page loads
	SAPLogon750.pSAP.wait(function(ev) {
		
		ctx.cryptography.credentials.MyCredential.get(function(code, label, credential) {
			if (code == e.error.OK) {
				// get login/password from credential.userName and credential.password
				SAPLogon750.pSAP.edUser.set(credential.userName);
		SAPLogon750.pSAP.oPassword.set(credential.userName);
		SAPLogon750.pSAP.keyStroke(e.key.Enter);
			} else {
				ctx.log("Getting credential occurs error");
			}
		});
		

		sc.endStep(); // end Scenario
		return;
	});
}});
