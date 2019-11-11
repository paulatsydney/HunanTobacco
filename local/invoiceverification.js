
// ----------------------------------------------------------------
//   Test menu for scenario InvoiceVerification 
// ----------------------------------------------------------------
GLOBAL.events.START.on(function (ev) {
	if (ctx.options.isDebug) {
		// Add item in systray menu.
		systray.addMenu('', 'InvoiceVerification', 'Test InvoiceVerification', '', function (ev) {
			var rootData = ctx.dataManagers.rootData.create();
			
			// Initialize your data here.
			GLOBAL.scenarios.InvoiceVerification.start(rootData);
		});
	}
});

//---------------------------------------------------
// Scenario InvoiceVerification Starter ()
//---------------------------------------------------

// ----------------------------------------------------------------
//   Scenario: InvoiceVerification
// ----------------------------------------------------------------
GLOBAL.scenario({ InvoiceVerification: function(ev, sc) {
	var rootData = sc.data;

	sc.setMode(e.scenario.mode.clearIfRunning);
	sc.setScenarioTimeout(600000); // Default timeout for global scenario.
	sc.onError(function(sc, st, ex) { sc.endScenario(); }); // Default error handler.
	sc.onTimeout(30000, function(sc, st) { sc.endScenario(); }); // Default timeout handler for each step.
	sc.step(GLOBAL.steps.Start_Logon, GLOBAL.steps.pSAPEasyAccess_manage);
	sc.step(GLOBAL.steps.pSAPEasyAccess_manage, GLOBAL.steps.pEnterCompanyCode_man);
	sc.step(GLOBAL.steps.pEnterCompanyCode_man, GLOBAL.steps.pEnterIncomingInvoic_);
	sc.step(GLOBAL.steps.pEnterIncomingInvoic_, null);
}}, ctx.dataManagers.rootData).setId('de531431-184c-4625-86dc-ff79ef17746f') ;

// ----------------------------------------------------------------
//   Step: Start_Logon
// ----------------------------------------------------------------
GLOBAL.step({ Start_Logon: function(ev, sc, st) {
	var rootData = sc.data;
	ctx.workflow('InvoiceVerification', '48388fee-4e14-4eb5-b217-1b8f739ea381') ;
	// Start 'Logon'
	GLOBAL.scenarios.Logon.start().onEnd( function() { 
		sc.endStep(); // pSAPEasyAccess_manage
		return;
	});
}});

// ----------------------------------------------------------------
//   Step: pSAPEasyAccess_manage
// ----------------------------------------------------------------
GLOBAL.step({ pSAPEasyAccess_manage: function(ev, sc, st) {
	var rootData = sc.data;
	ctx.workflow('InvoiceVerification', '0d621fe2-a270-4bb7-b821-510a5e3ffa3d') ;
	// Wait until the Page loads
	SAPLogon750.pSAPEasyAccess.wait(function(ev) {
		
			SAPLogon750.pSAPEasyAccess.oGuiOkCodeField.set('/nmiro');
			SAPLogon750.pSAPEasyAccess.keyStroke(e.SAPScripting.key._Enter_);
		sc.endStep(); // pEnterCompanyCode_man
		return;
	});
}});

// ----------------------------------------------------------------
//   Step: pEnterCompanyCode_man
// ----------------------------------------------------------------
GLOBAL.step({ pEnterCompanyCode_man: function(ev, sc, st) {
	var rootData = sc.data;
	ctx.workflow('InvoiceVerification', 'a910b425-f522-41e7-b180-5cbaeaa5c617') ;
	// Wait until the Page loads
	SAPLogon750.pEnterCompanyCode.wait(function(ev) {
		SAPLogon750.pEnterCompanyCode.edCompanyCode.set('0001');
		SAPLogon750.pEnterCompanyCode.btContinue.click();
		sc.endStep(); // pEnterIncomingInvoic_
		return;
	});
}});

// ----------------------------------------------------------------
//   Step: pEnterIncomingInvoic_
// ----------------------------------------------------------------
GLOBAL.step({ pEnterIncomingInvoic_: function(ev, sc, st) {
	var rootData = sc.data;
	ctx.workflow('InvoiceVerification', '2214516a-1ad5-4588-abba-2b21becc58e6') ;
	// Wait until the Page loads
	SAPLogon750.pEnterIncomingInvoic.wait(function(ev) {
		ctx.log("Get amount value: "+SAPLogon750.pEnterIncomingInvoic.edPostingDate.get());
		SAPLogon750.pEnterIncomingInvoic.edAmount.set(12345.00);
		sc.endStep(); // end Scenario
		return;
	});
}});
