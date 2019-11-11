// Desktop Studio
// Auto-generated declaration file : do not modify !



var POPUPS = POPUPS || ctx.addApplication('POPUPS');



var SAPLogon750 = ctx.addApplication('SAPLogon750', {"nature":"UIAUTOMATION","path":"C:\\Program Files (x86)\\SAP\\FrontEnd\\SAPgui\\saplogon.exe"});

SAPLogon750.pWindowSAPLogon75 = SAPLogon750.addPage('pWindowSAPLogon75', {"comment":"Window - SAP Logon 750"});
SAPLogon750.pWindowSAPLogon75.stQKXPUBLIC = SAPLogon750.pWindowSAPLogon75.addItem('stQKXPUBLIC');

SAPLogon750.pSAP = SAPLogon750.addPage('pSAP', {"comment":"GuiMainWindow - SAP","nature":"SAPGUI","customType":"GuiMainWindow"});
SAPLogon750.pSAP.edUser = SAPLogon750.pSAP.addItem('edUser', {"customType":"GuiTextField"});
SAPLogon750.pSAP.oPassword = SAPLogon750.pSAP.addItem('oPassword', {"customType":"GuiPasswordField"});

SAPLogon750.pSAPEasyAccess = SAPLogon750.addPage('pSAPEasyAccess', {"comment":"GuiMainWindow - SAP Easy Access","nature":"SAPGUI","customType":"GuiMainWindow"});
SAPLogon750.pSAPEasyAccess.oGuiOkCodeField = SAPLogon750.pSAPEasyAccess.addItem('oGuiOkCodeField', {"customType":"GuiOkCodeField"});

SAPLogon750.pEnterIncomingInvoic = SAPLogon750.addPage('pEnterIncomingInvoic', {"comment":"GuiMainWindow - Enter Incoming Invoice: Company Code 0001","nature":"SAPGUI","customType":"GuiMainWindow"});
SAPLogon750.pEnterIncomingInvoic.edPostingDate = SAPLogon750.pEnterIncomingInvoic.addItem('edPostingDate', {"customType":"GuiCTextField"});
SAPLogon750.pEnterIncomingInvoic.edAmount = SAPLogon750.pEnterIncomingInvoic.addItem('edAmount', {"customType":"GuiTextField"});

SAPLogon750.pEnterCompanyCode = SAPLogon750.addPage('pEnterCompanyCode', {"comment":"GuiModalWindow - Enter Company Code","nature":"SAPGUI","customType":"GuiModalWindow"});
SAPLogon750.pEnterCompanyCode.edCompanyCode = SAPLogon750.pEnterCompanyCode.addItem('edCompanyCode', {"customType":"GuiCTextField"});
SAPLogon750.pEnterCompanyCode.btContinue = SAPLogon750.pEnterCompanyCode.addItem('btContinue', {"customType":"GuiButton"});

GLOBAL.events.START.on(function(ev) { 
    GLOBAL.createExtendedConnector(e.extendedConnector.UIAutomation, '', '', '');
});
