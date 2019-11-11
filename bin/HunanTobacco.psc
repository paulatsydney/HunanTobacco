<?xml version="1.0" encoding="utf-8"?>
<ConteXtorStudio Version="Studio V3.0" xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance" xsi:noNamespaceSchemaLocation="XsdStudio.xsd">
	<UpdatePackages />
	<Evolutions>
		<Evolution Version="1.0" Date="11/11/2019"><![CDATA[Project creation]]></Evolution>
		<Evolution Version="..." Date="..."><![CDATA[...]]></Evolution>
	</Evolutions>
	<PROCESSUS>
		<PROCESS Name="GLOBAL" Key="NoKey" Comment="Global Processus" CtxtId="f8f9e567-d2ad-4c18-a67f-ea36442e5832">
			<_DECLAREVAR>
				<STRUCTUREDON Name="GLOBAL">
					<OBJDON Name="PrjVersion">1.0</OBJDON>
					<OBJDON Name="PrjClient"><![CDATA[Hunan Tobacco]]></OBJDON>
					<OBJDON Name="PrjName">HunanTobacco</OBJDON>
					<OBJDON Name="PrjDate">11/11/2019</OBJDON>
					<OBJDON Name="PrjLabel"><![CDATA[Hunan Tobacco Automation]]></OBJDON>
					<OBJDON Name="PrjComment"><![CDATA[]]></OBJDON>
					<OBJDON Name="LicenceURL" />
					<STRUCTUREDON Name="Xc_MessBoxHtml">
						<OBJDON Name="Style">style="font-size:12pt;font-family:'Arial'"</OBJDON>
						<OBJDON Name="ErrColor">white</OBJDON>
						<OBJDON Name="InfoColor">white</OBJDON>
						<OBJDON Name="ChoiceColor">white</OBJDON>
						<OBJDON Name="WarningColor">white</OBJDON>
						<OBJDON Name="ErrIcon">Critical.gif</OBJDON>
						<OBJDON Name="InfoIcon">Info.gif</OBJDON>
						<OBJDON Name="ChoiceIcon">Pencil.gif</OBJDON>
						<OBJDON Name="WarningIcon">Warning.gif</OBJDON>
						<OBJDON Name="StyleButton">style="font-size:12px;font-family:'Arial';width:80px"</OBJDON>
						<OBJDON Name="StyleText">style="font-size=11pt;font-family='Arial'"</OBJDON>
						<OBJDON Name="IconSize">32</OBJDON>
					</STRUCTUREDON>
				</STRUCTUREDON>
			</_DECLAREVAR>
			<SCRIPTS>
				<SCRIPT Name="Constants" Src="HunanTobacco.min.js" Folder="Framework" />
			</SCRIPTS>
			<RESOURCES>
				<RESOURCE Name="popup" Src="%sdk%\templates\resources\popup\" Dest="popup" />
				<RESOURCE Name="agent16px" Src="%sdk%\templates\resources\bmp\agent.png" Dest="bmp" />
				<RESOURCE Name="accept16px" Src="%sdk%\templates\resources\bmp\accept.png" Dest="bmp" />
				<RESOURCE Name="cancel16px" Src="%sdk%\templates\resources\bmp\cancel.png" Dest="bmp" />
				<RESOURCE Name="help16px" Src="%sdk%\templates\resources\bmp\help.png" Dest="bmp" />
				<RESOURCE Name="information16px" Src="%sdk%\templates\resources\bmp\information.png" Dest="bmp" />
				<RESOURCE Name="repeat16px" Src="%sdk%\templates\resources\bmp\repeat.png" Dest="bmp" />
				<RESOURCE Name="stop16px" Src="%sdk%\templates\resources\bmp\stop.png" Dest="bmp" />
				<RESOURCE Name="warning16px" Src="%sdk%\templates\resources\bmp\warning.png" Dest="bmp" />
				<RESOURCE Name="record16px" Src="%sdk%\templates\resources\bmp\record.png" Dest="bmp" />
				<RESOURCE Name="agent32px" Src="%sdk%\templates\resources\bmp32\agent.png" Dest="bmp32" />
				<RESOURCE Name="accept32px" Src="%sdk%\templates\resources\bmp32\accept.png" Dest="bmp32" />
				<RESOURCE Name="cancel32px" Src="%sdk%\templates\resources\bmp32\cancel.png" Dest="bmp32" />
				<RESOURCE Name="help32px" Src="%sdk%\templates\resources\bmp32\help.png" Dest="bmp32" />
				<RESOURCE Name="information32px" Src="%sdk%\templates\resources\bmp32\information.png" Dest="bmp32" />
				<RESOURCE Name="user32px" Src="%sdk%\templates\resources\bmp32\user.png" Dest="bmp32" />
				<RESOURCE Name="warning32px" Src="%sdk%\templates\resources\bmp32\warning.png" Dest="bmp32" />
				<RESOURCE Name="agent64px" Src="%sdk%\templates\resources\bmp64\agent.png" Dest="bmp64" />
				<RESOURCE Name="hello64px" Src="%sdk%\templates\resources\bmp64\hello.png" Dest="bmp64" />
				<RESOURCE Name="hello128px" Src="%sdk%\templates\resources\bmp64\hello128.png" Dest="bmp64" />
				<RESOURCE Name="gif" Src="%sdk%\templates\resources\gif\" Dest="gif" />
			</RESOURCES>
			<_ECRANS />
			<WORKFLOWS>
				<WORKFLOW Name="Logon" Src="%workflows%\Logon.xaml" CtxtId="35b49d88-50a7-4109-a07c-2252ce3aa852" DisplayName="Logon" StepTimeout="30" ScenarioTimeout="600" GeneratedScenarioName="Logon" />
				<WORKFLOW Name="InvoiceVerification" Src="%workflows%\InvoiceVerification.xaml" CtxtId="de531431-184c-4625-86dc-ff79ef17746f" DisplayName="InvoiceVerification" StepTimeout="30" ScenarioTimeout="600" GeneratedScenarioName="InvoiceVerification" />
			</WORKFLOWS>
			<ACTIONS />
			<EVENTS />
			<SCENARII>
				<Steps />
			</SCENARII>
		</PROCESS>
		<PROCESS Name="POPUPS" CtxtId="25a718d1-3a92-4950-a593-35242d439817" Nature="POPUP">
			<SCRIPTS />
			<SCENARII />
			<ACTIONS />
			<EVENTS />
			<_DECLAREVAR>
				<STRUCTUREDON Name="POPUPS" />
			</_DECLAREVAR>
			<_ECRANS />
		</PROCESS>
	</PROCESSUS>
	<APPLICATIONS>
		<APPLI Name="SAPLogon750" CtxtId="a42ee139-5efd-41c3-8966-1a7ae67eb458" Nature="UIAUTOMATION" TechnoSDK="V3" Sync="0" PendingDelay="0">
			<SCRIPTS />
			<CRITERE>
				<EXE Scan="Full"><![CDATA[SAPLOGON.EXE]]></EXE>
			</CRITERE>
			<_DECLAREVAR>
				<STRUCTUREDON Name="SAPLogon750" />
			</_DECLAREVAR>
			<_ECRANS>
				<PAGE Name="pWindowSAPLogon75" Comment="Window - SAP Logon 750" CtxtId="61d0fb62-1b13-4888-85a6-aa8282e00a3c" SubpagesType="Multiple" RefreshMode="Window">
					<CRITERE>
						<Name Scan="Full"><![CDATA[SAP Logon 750]]></Name>
					</CRITERE>
					<TRACK_EVENTS>
						<TRACK_EVENT Name="REFRESH(WINDOWOPENED(DESCENDANTS))" />
					</TRACK_EVENTS>
					<OBJETS>
						<OBJET Name="stQKXPUBLIC" CtxtId="e5da6bee-71e1-4863-ad06-c74c2d64addb" SpecIndex="1">
							<CRITERE>
								<TAG Name="Text" Scope="All" CapturedPos="1.R0R11R0R1R0R0R0R0R0R8R0">
									<ATT Name="Value">
										<VALUE Scan="Full"><![CDATA[QKX [PUBLIC]]]></VALUE>
									</ATT>
								</TAG>
							</CRITERE>
						</OBJET>
					</OBJETS>
				</PAGE>
				<PAGE Name="pSAP" Comment="GuiMainWindow - SAP" CtxtId="b1029b7e-a131-42fc-92ab-8e94403c1b7c" CustomType="GuiMainWindow" Nature="SAPGUI" SubpagesType="Multiple" RefreshMode="No">
					<CRITERE>
						<Text Scan="Full"><![CDATA[SAP]]></Text>
					</CRITERE>
					<OBJETS>
						<OBJET Name="edUser" CtxtId="26b8e37b-dd3a-4769-960d-38bbf8c08e9b" CustomType="GuiTextField" SpecIndex="1">
							<CRITERE>
								<TAG Name="GuiTextField" Scope="All" CapturedPos="2.R0R4R5">
									<ATT Name="Name">
										<VALUE Scan="Full"><![CDATA[RSYST-BNAME]]></VALUE>
									</ATT>
								</TAG>
							</CRITERE>
						</OBJET>
						<OBJET Name="oPassword" CtxtId="5ffaf575-7b63-4200-8fe2-a0e68b7b9dd6" CustomType="GuiPasswordField" SpecIndex="2">
							<CRITERE>
								<TAG Name="GuiPasswordField" Scope="All" CapturedPos="2.R0R4R7">
									<ATT Name="Name">
										<VALUE Scan="Full"><![CDATA[RSYST-BCODE]]></VALUE>
									</ATT>
								</TAG>
							</CRITERE>
						</OBJET>
					</OBJETS>
				</PAGE>
				<PAGE Name="pSAPEasyAccess" Comment="GuiMainWindow - SAP Easy Access" CtxtId="1375f5d2-7b40-4eba-a518-44f46ba0062a" CustomType="GuiMainWindow" Nature="SAPGUI" SubpagesType="Multiple" RefreshMode="No">
					<CRITERE>
						<Text Scan="Full"><![CDATA[SAP Easy Access]]></Text>
					</CRITERE>
					<OBJETS>
						<OBJET Name="oGuiOkCodeField" CtxtId="51dd43f9-7c64-4fcd-b6ee-9a8e36e766ae" CustomType="GuiOkCodeField">
							<CRITERE>
								<TAG Name="GuiOkCodeField" Scope="All" CapturedPos="3.R0R1R4">
									<ATT Name="Name">
										<VALUE Scan="Full"><![CDATA[okcd]]></VALUE>
									</ATT>
								</TAG>
							</CRITERE>
						</OBJET>
					</OBJETS>
				</PAGE>
				<PAGE Name="pEnterIncomingInvoic" Comment="GuiMainWindow - Enter Incoming Invoice: Company Code 0001" CtxtId="af0c6599-b078-4ba8-982a-b909eec27e78" CustomType="GuiMainWindow" Nature="SAPGUI" SubpagesType="Multiple" RefreshMode="No">
					<CRITERE>
						<Text Scan="Part"><![CDATA[Enter Incoming Invoice: Company Code]]></Text>
					</CRITERE>
					<OBJETS>
						<OBJET Name="edPostingDate" CtxtId="5b2d101e-301c-4898-adaf-078d4f5cd6b5" CustomType="GuiCTextField">
							<CRITERE>
								<TAG Name="GuiCTextField" Scope="All" CapturedPos="4.R0R4R9R0R0R0R5">
									<ATT Name="Name">
										<VALUE Scan="Full"><![CDATA[INVFO-BUDAT]]></VALUE>
									</ATT>
								</TAG>
							</CRITERE>
						</OBJET>
						<OBJET Name="edAmount" CtxtId="b19f454f-96f7-430c-bcc1-c411a8a74ab4" CustomType="GuiTextField">
							<CRITERE>
								<TAG Name="GuiTextField" Scope="All" CapturedPos="4.R0R4R9R0R0R0R7">
									<ATT Name="Name">
										<VALUE Scan="Full"><![CDATA[INVFO-WRBTR]]></VALUE>
									</ATT>
								</TAG>
							</CRITERE>
						</OBJET>
					</OBJETS>
				</PAGE>
				<PAGE Name="pEnterCompanyCode" Comment="GuiModalWindow - Enter Company Code" CtxtId="28a5de59-8c53-4d39-b95e-5e44298543e3" CustomType="GuiModalWindow" Nature="SAPGUI" SubpagesType="Multiple" RefreshMode="No">
					<CRITERE>
						<Text Scan="Full"><![CDATA[Enter Company Code]]></Text>
					</CRITERE>
					<OBJETS>
						<OBJET Name="edCompanyCode" CtxtId="93ac857d-f1c1-4d7e-9121-b8bce1cafacf" CustomType="GuiCTextField">
							<CRITERE>
								<TAG Name="GuiCTextField" Scope="All" CapturedPos="5.R0R1R1">
									<ATT Name="Name">
										<VALUE Scan="Full"><![CDATA[BKPF-BUKRS]]></VALUE>
									</ATT>
								</TAG>
							</CRITERE>
						</OBJET>
						<OBJET Name="btContinue" CtxtId="2598bc08-3b45-4c63-88c1-25495293b8e8" CustomType="GuiButton">
							<CRITERE>
								<TAG Name="GuiButton" Scope="All" CapturedPos="5.R0R0R0">
									<ATT Name="Text">
										<VALUE Scan="Full"><![CDATA[Continue]]></VALUE>
									</ATT>
								</TAG>
							</CRITERE>
						</OBJET>
					</OBJETS>
				</PAGE>
			</_ECRANS>
		</APPLI>
	</APPLICATIONS>
</ConteXtorStudio>