
/** 
 * @class       ctx.options.SAPScripting
 * @summary     Options for the 'ctx.SAPScripting' library
 * @path        ctx.options.SAPScripting
 * @struct
 */
ctx.options.SAPScripting = {
 /** 
  * @summary    Trace level (see [[lib:common:ctx.enum#etracelevel|e.trace.level]])
  * @property   {e.trace.level} traceLevel
  * @path       ctx.options.SAPScripting.traceLevel 
  */ 
  traceLevel: e.trace.level.None
};

/**
* Special keyboard keys (Shift, Ctrl, F1, F2, ...)
* @description
* __Ex.:__
<code javascript>
// send Enter shortcut
MyHllApiAppli.pSchedule.keyStroke(e.SAPScripting.key._Enter_);
</code>
* @enumeration e.SAPScripting.key
* @enum {string}
* @path e.SAPScripting.key
* @var _Enter_ 'Enter' key
* @var _F1 F1 key
* @var _F2 F2 key
* @var _F3 F3 key
* @var _F4 F4 key
* @var _F5 F5 key
* @var _F6 F6 key
* @var _F7 F7 key
* @var _F8 F8 key
* @var _F9 F9 key
* @var _F10 F10 key
* @var _Ctrl Ctrl keyS
* @var _F12 F12 key
* @var _Shift_F1 Shift + F1 key
* @var _Shift_F2 Shift + F2 key
* @var _Shift_F3 Shift + F3 key
* @var _Shift_F4 Shift + F4 key
* @var _Shift_F5 Shift + F5 key
* @var _Shift_F6 Shift + F6 key
* @var _Shift_F7 Shift + F7 key
* @var _Shift_F8 Shift + F8 key
* @var _Shift_F9 Shift + F9 key
* @var _Shift_Ctrl_0 Shift + Ctrl + 0 key
* @var _Shift_F11 Shift + F11 key
* @var _Shift_F12 Shift + F12 key
* @var _Ctrl_F1 Ctrl + F1 key
* @var _Ctrl_F2 Ctrl + F2 key
* @var _Ctrl_F3 Ctrl + F3 key
* @var _Ctrl_F4 Ctrl + F4 key
* @var _Ctrl_F5 Ctrl + F5 key
* @var _Ctrl_F6 Ctrl + F6 key
* @var _Ctrl_F7 Ctrl + F7 key
* @var _Ctrl_F8 Ctrl + F8 key
* @var _Ctrl_F9 Ctrl + F9 key
* @var _Ctrl_F10 Ctrl + F10 key
* @var _Ctrl_F11 Ctrl + F11 key
* @var _Ctrl_F12 Ctrl + F12 key
* @var _Ctrl_Shift_F1 Ctrl + Shift + F1 key
* @var _Ctrl_Shift_F2 Ctrl + Shift + F2 key
* @var _Ctrl_Shift_F3 Ctrl + Shift + F3 key
* @var _Ctrl_Shift_F4 Ctrl + Shift + F4 key
* @var _Ctrl_Shift_F5 Ctrl + Shift + F5 key
* @var _Ctrl_Shift_F6 Ctrl + Shift + F6 key
* @var _Ctrl_Shift_F7 Ctrl + Shift + F7 key
* @var _Ctrl_Shift_F8 Ctrl + Shift + F8 key
* @var _Ctrl_Shift_F9 Ctrl + Shift + F9 key
* @var _Ctrl_Shift_F10 Ctrl + Shift + F10 key
* @var _Ctrl_Shift_F11 Ctrl + Shift + F11 key
* @var _Ctrl_Shift_F12 Ctrl + Shift + F12 key
* @var _Ctrl_E Ctrl + E key
* @var _Ctrl_F Ctrl + F key
* @var _Ctrl_/ Ctrl + / key
* @var _Ctrl_\\\\ Ctrl + \\\\ key
* @var _Ctrl_N Ctrl + N key
* @var _Ctrl_O Ctrl + O key
* @var _Ctrl_X Ctrl + X key
* @var _Ctrl_C Ctrl + C key
* @var _Ctrl_V Ctrl + V key
* @var _Ctrl_Z Ctrl + Z key
* @var _Ctrl_PageUp Ctrl + PageUp key
* @var _PageUp PageUp key
* @var _PageDown PageDown key
* @var _Ctrl_PageDown Ctrl + PageDown key
* @var _Ctrl_G Ctrl + G key
* @var _Ctrl_R Ctrl + R key
* @var _Ctrl_P Ctrl + P key
* @readonly
*/
e.SAPScripting = {}

e.SAPScripting.property = {
	user: 'User',
	server : 'SystemName'
};

e.SAPScripting.key = {
	'_Enter_': 0,
	'_F1_': 1,
	'_F2_': 2,
	'_F3_': 3,
	'_F4_': 4,
	'_F5_': 5,
	'_F6_': 6,
	'_F7_': 7,
	'_F8_': 8,
	'_F9_': 9,
	'_F10_': 10,
	'_Ctrl_S': 11,
	'_F12_': 12,
	'_Shift__F1_': 13,
	'_Shift__F2_': 14,
	'_Shift__F3_': 15,
	'_Shift__F4_': 16,
	'_Shift__F5_': 17,
	'_Shift__F6_': 18,
	'_Shift__F7_': 19,
	'_Shift__F8_': 20,
	'_Shift__F9_': 21,
	'_Shift__Ctrl_0': 22,
	'_Shift__F11_': 23,
	'_Shift__F12_': 24,
	'_Ctrl__F1_': 25,
	'_Ctrl__F2_': 26,
	'_Ctrl__F3_': 27,
	'_Ctrl__F4_': 28,
	'_Ctrl__F5_': 29,
	'_Ctrl__F6_': 30,
	'_Ctrl__F7_': 31,
	'_Ctrl__F8_': 32,
	'_Ctrl__F9_': 33,
	'_Ctrl__F10_': 34,
	'_Ctrl__F11_': 35,
	'_Ctrl__F12_': 36,
	'_Ctrl__Shift__F1_': 37,
	'_Ctrl__Shift__F2_': 38,
	'_Ctrl__Shift__F3_': 39,
	'_Ctrl__Shift__F4_': 40,
	'_Ctrl__Shift__F5_': 41,
	'_Ctrl__Shift__F6_': 42,
	'_Ctrl__Shift__F7_': 43,
	'_Ctrl__Shift__F8_': 44,
	'_Ctrl__Shift__F9_': 45,
	'_Ctrl__Shift__F10_': 46,
	'_Ctrl__Shift__F11_': 47,
	'_Ctrl__Shift__F12_': 48,
	'_Ctrl_E': 70,
	'_Ctrl_F': 71,
	'_Ctrl_/': 72,
	'_Ctrl_\\\\': 73,
	'_Ctrl_N': 74,
	'_Ctrl_O': 75,
	'_Ctrl_X': 76,
	'_Ctrl_C': 77,
	'_Ctrl_V': 78,
	'_Ctrl_Z': 79,
	'_Ctrl__PageUp_': 80,
	'_PageUp_': 81,
	'_PageDown_': 82,
	'_Ctrl__PageDown_': 83,
	'_Ctrl_G': 84,
	'_Ctrl_R': 85,
	'_Ctrl_P': 86
};



/**
 * @class       ctx.SAPScripting
 * @summary     Class gathering a set of functions to manage SAP GUI Scripting
 * @constructor
 * @path        ctx.SAPScripting
 */
ctx.SAPScripting = (function() {
  /** @type {Object} */ var _options = ctx.options.SAPScripting;
	/** @type {SAPScriptingInstance} */ var _sapgui = null;
	/** @type {ctx.SAPComponent} */ var _application = null;
	/** @type {boolean} */ var _recordingEnabled = false;
	var _onChangeCallback = null;

	var _SAPGUItypes = {
		GuiUnknown: {
			id: -1
		},
		GuiComponent: {
			id: 0
		},
		GuiVComponent: {
			id: 1,
			parents: [
				'GuiComponent'
			],
			map: {
				dump: {
					name: 'DumpState',
					type: 'method',
					input: [
						'string'
					],
					output: 'object'
				},
				showContextMenu: {
					name: 'ShowContextMenu',
					type: 'method'
				},
				exist: {
					name: 'Exist',
					type: 'attribute',
					output: 'boolean'
				},
				setFocus: {
					name: 'SetFocus',
					type: 'method'
				},
				get: {
					name: 'Text',
					type: 'attribute',
					output: 'string'
				},
				set: {
					name: 'Text',
					type: 'attribute',
					input: [
						'string'
					],
					output: 'string'
				},
				getIconName: {
					name: 'get_IconName',
					type: 'attribute',
					output: 'string'
				}
			}
		},
		GuiVContainer: {
			id: 2,
			parents: [
				'GuiVComponent'
			],
			map: {
				findById: {
					name: 'FindById',
					type: 'method',
					input: [
						'string'
					],
					output: 'object'
				},
				findByName: {
					name: 'FindByName',
					type: 'method',
					input: [
						'string'
					],
					output: 'object'
				},
				findByNameEx: {
					name: 'FindByNameEx',
					type: 'method',
					input: [
						'string'
					],
					output: 'object'
				},
				findAllByName: {
					name: 'FindAllByName',
					type: 'method',
					input: [
						'string'
					],
					output: 'object'
				},
				findAllByNameEx: {
					name: 'FindAllByNameEx',
					type: 'method',
					input: [
						'string'
					],
					output: 'object'
				}
			}
		},
		GuiApplication: {
			id: 10,
			parents: [
				'GuiComponent',
				'GuiContainer'
			]
		},
		GuiConnection: {
			id: 11,
			parents: [
				'GuiComponent',
				'GuiContainer'
			]
		},
		GuiSession: {
			id: 12,
			parents: [
				'GuiComponent',
				'GuiContainer'
			],
			map: {
				findByPosition: {
					name: 'FindByPosition',
					type: 'method'
				}
			}
		},
		GuiFrameWindow: {
			id: 20,
			prefix: 'wnd',
			parents: [
				'GuiVContainer'
			],
			map: {
				hwnd: {
					name: 'Handle',
					type: 'attribute',
					output: 'number'
				},
				wait: {
					name: 'Wait',
					type: 'method'
				},
				iconify: {
					name: 'Iconify',
					type: 'method'
				},
				keyStroke: {
					name: 'SendVKey',
					type: 'method',
					input: ['number']
				},
				screenshot: {
					name: 'HardCopy',
					type: 'method',
					input: [
						'string',
						'number'
					],
					output: 'string'
				},
				restore: {
					name: 'Restore',
					type: 'method'
				},
				minimize: {
					name: 'Iconify',
					type: 'method'
				},
				maximize: {
					name: 'Maximize',
					type: 'method'
				},
				close: {
					name: 'Close',
					type: 'method'
				}
			}
		},
		GuiMainWindow: {
			id: 21,
			prefix: 'wnd',
			parents: [
				'GuiFrameWindow'
			],
			map: {
				setAutomationConnection: {
					name: 'SETAUTOMATIONCONNECTION',
					type: 'method'
				}
			}
		},
		GuiModalWindow: {
			id: 22,
			prefix: 'wnd',
			parents: [
				'GuiFrameWindow'
			]
		},
		GuiMessageWindow: {
			id: 23
		},
		GuiLabel: {
			id: 30,
			prefix: 'lbl',
			parents: [
				'GuiVComponent'
			]
		},
		GuiTextField: {
			id: 31,
			prefix: 'txt',
			parents: [
				'GuiVComponent'
			],
			map: {
				setCaretPosition: {
					name: 'CaretPosition',
					type: 'attribute',
					input: [
						'number'
					]
				}
			}
		},
		GuiCTextField: {
			id: 32,
			prefix: 'ctxt',
			parents: [
				'GuiTextField'
			]
		},
		GuiPasswordField: {
			id: 33,
			prefix: 'pwd',
			parents: [
				'GuiTextField'
			]
		},
		GuiComboBox: {
			id: 34,
			prefix: 'cmb',
			parents: [
				'GuiVComponent'
			],
			map: {
				get: {
					name: 'Key',
					type: 'attribute',
					output: 'string'
				},
				set: {
					name: 'Key',
					type: 'attribute',
					input: [
						'string'
					],
					output: 'string'
				}
			}
		},
		GuiOkCodeField: {
			id: 35,
			prefix: 'okcd',
			parents: [
				'GuiVComponent'
			]
		},
		GuiButton: {
			id: 40,
			parents: [
				'GuiVComponent'
			],
			map: {
				click: {
					name: 'Press',
					type: 'asyncmethod'
				}
			}
		},
		GuiRadioButton: {
			id: 41,
			prefix: 'rad',
			parents: [
				'GuiVComponent'
			],
			map: {
				click: {
					name: 'Select',
					type: 'method'
				}
			}
		},
		GuiCheckBox: {
			id: 42,
			prefix: 'chk',
			parents: [
				'GuiVComponent'
			],
			map: {
				check: {
					name: 'Selected',
					type: 'attribute',
					input: [
						'boolean'
					],
					output: 'boolean'
				},
				get: {
					name: 'Selected',
					type: 'attribute',
					output: 'boolean'
				},
				set: {
					name: 'Selected',
					type: 'attribute',
					input: [
						'boolean'
					],
					output: 'boolean'
				}
			}
		},
		GuiStatusPane: {
			id: 43,
			prefix: 'pane',
			parents: [
				'GuiVComponent'
			]
		},
		GuiCustomControl: {
			id: 50,
			prefix: 'cntl',
			parents: [
				'GuiVContainer'
			]
		},
		GuiContainerShell: {
			id: 51,
			prefix: 'shellcont',
			parents: [
				'GuiVContainer'
			]
		},
		GuiBox: {
			id: 62,
			prefix: 'btn',
			parents: [
				'GuiVComponent'
			]
		},
		GuiContainer: {
			id: 70,
			parents: [
				'GuiComponent'
			],
			map: {
				findById: {
					name: 'FindById',
					type: 'method',
					input: [
						'string'
					],
					output: 'object'
				}
			}
		},
		GuiSimpleContainer: {
			id: 71,
			prefix: 'sub',
			parents: [
				'GuiVContainer'
			]
		},
		GuiScrollContainer: {
			id: 72,
			prefix: 'ssub',
			parents: [
				'GuiVContainer'
			]
		},
		GuiListContainer: {
			id: 73
		},
		GuiUserArea: {
			id: 74,
			prefix: 'usr',
			parents: [
				'GuiVContainer'
			]
		},
		GuiSplitterContainer: {
			id: 75,
			prefix: 'splitcont',
			parents: [
				'GuiVContainer'
			]
		},
		GuiTableControl: {
			id: 80,
			prefix: 'tbl',
			parents: [
				'GuiVContainer'
			],
			map: {
				cols: {
					name: 'Columns',
					type: 'attribute',
					output: 'object'
				},
				rows: {
					name: 'Rows',
					type: 'attribute',
					output: 'object'
				}
			}
		},
		GuiTableColumn: {
			id: 81,
			prefix: 'col',
			parents: [
				'GuiComponentCollection'
			]
		},
		GuiTableRow: {
			id: 82,
			prefix: 'row',
			parents: [
				'GuiComponentCollection'
			]
		},
		GuiTabStrip: {
			id: 90,
			prefix: 'tabs',
			parents: [
				'GuiVContainer'
			],
			map: {
				get: {
					name: 'SelectedTab',
					type: 'attribute',
					output: 'object'
				}
			}
		},
		GuiTab: {
			id: 91,
			prefix: 'tabp',
			parents: [
				'GuiVContainer'
			],
			map: {
				scrollToLeft: {
					name: 'ScrollToLeft',
					type: 'method'
				},
				click: {
					name: 'Select',
					type: 'method'
				}
			}
		},
		GuiScrollbar: {
			id: 100,
			prefix: 'scroll',
			parents: [
				'GuiVComponent'
			]
		},
		GuiToolbar: {
			id: 101,
			prefix: 'tbar',
			parents: [
				'GuiVContainer'
			]
		},
		GuiTitlebar: {
			id: 102,
			prefix: 'titl',
			parents: [
				'GuiVContainer'
			]
		},
		GuiStatusbar: {
			id: 103,
			parents: [
				'GuiVComponent'
			]			
		},
		GuiMenu: {
			id: 110,
			prefix: 'menu',
			parents: [
				'GuiVContainer'
			],
			map: {
				click: {
					name: 'Select',
					type: 'method'
				}
			}
		},
		GuiMenubar: {
			id: 111,
			prefix: 'mbar',
			parents: [
				'GuiVContainer'
			]
		},
		GuiCollection: {
			id: 120,
			parents: []
		},
		GuiSessionInfo: {
			id: 121
		},
		GuiShell: {
			id: 122,
			prefix: 'shell',
			parents: [
				'GuiVContainer'
			],
			subType: '',
			map: {
				hwnd: {
					name: 'Handle',
					type: 'attribute',
					output: 'number'
				},
				getCell: {
					name: 'GetCellValue',
					type: 'method'
				}
			}
		},
		GuiGOSShell: {
			id: 123,
			prefix: 'shell',
			parents: [
				'GuiVContainer'
			]
		},
		GuiSplitterShell: {
			id: 124,
			prefix: 'split',
			subType: 'Splitter',
			parents: [
				'GuiVContainer'
			]
		},
		GuiDialogShell: {
			id: 125,
			prefix: 'shellcont',
			parents: [
				'GuiVContainer'
			]
		},
		GuiDockShell: {
			id: 126,
			prefix: 'dock',
			parents: [
				'GuiContainerShell'
			]
		},
		GuiContextMenu: {
			id: 127,
			prefix: 'mnu',
			parents: [
				'GuiMenu'
			]
		},
		GuiComponentCollection: {
			id: 128,
			parents: [
				'GuiCollection'
			]
		},
		GuiCtrlGridView: {
			id: 0,
			prefix: 'grid',
			parents: [
				'GuiShell'
			],
			subType: 'GridView',
			map: {
				clickToolbar: {
					name: 'PressToolbarButton',
					type: 'method',
					input: ['string']
				},
				clickToolbarMenuButtonByPosition:{
					name: 'clickToolbarMenuButtonByPosition',
					type: 'method',
					input: ['string', 'string']
				},
				clickToolbarMenuButtonByText:{
					name: 'clickToolbarMenuButtonByText',
					type: 'method',
					input: ['string', 'string']
				},
				clickToolbarMenuButtonByFunCode:{
					name: 'clickToolbarMenuButtonByFunCode',
					type: 'method',
					input: ['string', 'string']
				},
				selectContextMenuItem: {
					name: 'SelectContextMenuItem',
					type: 'method',
					input: ['string']
				},
				pressToolbarContextButton:{
					name: 'PressToolbarContextButton',
					type: 'method',
					input: ['string']
				},
				selectContextMenuItemByText: {
					name: 'SelectContextMenuItemByText',
					type: 'method',
					input: ['string']
				},
				selectContextMenuItemByPosition: {
					name: 'SelectContextMenuItemByPosition',
					type: 'method',
					input: ['string']
				},
				getToolbar: {
					name: 'get_ToolbarButtonCount',
					type: 'attribute',
					output: 'number'
				},
				getToolbarButtonEnabled: {
					name: 'GetToolbarButtonEnabled',
					type: 'method',
					input: ['number'],
					output: 'boolean'
				},
				getToolbarButtonId: {
					name: 'GetToolbarButtonId',
					type: 'method',
					input: ['number'],
					output: 'string'
				},
				getToolbarButtonText: {
					name: 'GetToolbarButtonText',
					type: 'method',
					input: ['number'],
					output: 'string'
				},
				getToolbarButtonTooltip: {
					name: 'GetToolbarButtonTooltip',
					type: 'method',
					input: ['number'],
					output: 'string'
				},				
				getToolbarButtonType: {
					name: 'GetToolbarButtonType',
					type: 'method',
					input: ['number'],
					output: 'string'
				},
				getColumns: {
					name: 'get_ColumnOrder',
					type: 'attribute',
					output: 'object'
				},	
				getRowCount: {
					name: 'get_RowCount',
					type: 'attribute',
					output: 'number'
				},							
				selectedRow: {
					name: 'get_CurrentCellRow',
					type: 'attribute',
					output: 'number'
				},
				selectRow: {
					name: 'set_CurrentCellRow',
					type: 'attribute',
					input: ['number'],
					output: 'number'
				},
				selectedCol: {
					name: 'get_CurrentCellColumn',
					type: 'attribute',
					output: 'string'
				},
				selectCol: {
					name: 'set_CurrentCellColumn',
					type: 'attribute',
					input: ['string'],
					output: 'string'
				},
				selectCell: {
					name: 'SetCurrentCell',
					type: 'method',
					input: ['number', 'string']
				},				
				getFirstVisibleRow: {
					name: 'get_FirstVisibleRow',
					type: 'attribute',
					output: 'number'
				},
				setFirstVisibleRow: {
					name: 'set_FirstVisibleRow',
					type: 'attribute',
					input: ['number'],
					output: 'number'
				},
				getCellValue: {
					name: 'GetCellValue',
					type: 'method',
					input: [
						'number',
						'string'
					],
					output: 'string'
				},
				setCell: {
					name: 'ModifyCell',
					type: 'method',
					input: [
						'number',
						'string',
						'string'
					],
					output: 'string'
				},
				clickDoubleCell: {
					name: 'DoubleClick',
					type: 'method',
					input: [
						'number',
						'string'
					]
				},				
				pressEnter: {
					name: 'PressEnter',
					type: 'method'
				}
			}
		},
		GuiCtrlToolbar: {
			id: 0,
			prefix: 'tool',
			parents: [
				'GuiVContainer'
			],
			subType: '',
			map: {
				clickToolbar: {
					name: 'PressButton',
					type: 'method',
					input: [
						'string'
					]
				},
				clickMenu: {
					name: 'PressContextButton',
					type: 'method',
					input: [
						'string'
					]
				},
				selectMenu: {
					name: 'SelectMenuItem',
					type: 'method',
					input: [
						'string'
					]
				},
				selectMenuItemByText: {
					name: 'selectMenuItemByText',
					type: 'method',
					input: [
						'string'
					]
				}
			}
		},
		GuiCtrlTextEdit: {
			id: 0,
			prefix: 'edit',
			parents: [
				'GuiVContainer'
			],
			subType: 'TextEdit',
			map: {
				contextMenu: {
					name: 'ContextMenu',
					type: 'method'
				},
				doubleClick: {
					name: 'DoubleClick',
					type: 'method'
				}
			}
		},
		GuiCtrlTree: {
			id: 0,
			prefix: 'tree',
			parents: [
				'GuiVContainer'
			],
			subType: 'Tree',
			map: {
				select: {
					name: 'SelectNode',
					type: 'method',
					input: ['string'],
					output: 'string'
				},
				unselect: {
					name: 'UnselectNode',
					type: 'method',
					input: ['string'],
					output: 'string'
				},				
				selected: {
					name: 'GetFocusedNodeKey',
					type: 'method',
					output: 'string'
				},							
				getNodeTextByKey: {
					name: 'GetNodeTextByKey',
					type: 'method',
					input: ['string'],
					output: 'string'
				},
				selectItem: {
					name: 'SelectItem',
					type: 'method',
					input: ['string', 'string']
				},
				ensureVisibleHorizontalItem: {
					name: 'EnsureVisibleHorizontalItem',
					type: 'method',
					input: ['string', 'string']
				},
				contextMenu: {
					name: 'NodeContextMenu',
					type: 'method',
					input: ['string']
				},
				selectContextMenuItem: {
					name: 'SelectContextMenuItemByText',
					type: 'method',
					input: ['string']
				},
				expand: {
					name: 'ExpandNode',
					type: 'method',
					input: ['string']
				},
				collapse: {
					name: 'CollapseNode',
					type: 'method',
					input: ['string']
				},				
				clickDoubleNode: {
					name: 'DoubleClickNode',
					type: 'method',
					input: ['string']
				}
			}
		},
		GuiCtrlHTMLViewer: {
			id: 0,
			prefix: 'html',
			parents: [
				'GuiVContainer'
			],
			subType: 'HTMLViewer',
			map: {
				contextMenu: {
					name: 'ContextMenu',
					type: 'method'
				}
			}
		},
		GuiCtrlCalendar: {
			id: 0,
			prefix: 'cal',
			parents: [
				'GuiVContainer'
			],
			subType: 'Calendar'
		}
	};

	var self = 
  	/** @lends ctx.SAPScripting*/
  	{};
	
	/** @type {Object} */ self.items = {};
	/** @type {ctx.application} */ self.winApp = null;

		
  // TODO: cleanup
 /**
  * @ignore
  * @method      enableRecording
  * @summary     ...
  * @description
  * __Ex.:__
<code javascript>
</code>
  * @throws {Error}
  * @path ctx.SAPScripting.enableRecording
  * @param {boolean} [enable]
  * @return {boolean} ... 
  */
	self.enableRecording = function(enable) {
		//ctx.notifyAction('ctx.SAPScripting.enableRecording');
		var res = false;
		_recordingEnabled = (enable === false ? false : true);
		res = true;
		return res;
	}
	
	self.isRecordingEnabled = function() {
		return _recordingEnabled;
	}
	
	
 /**
  * @ignore
  * @method getType
  * @summary     ...
  * @description
  * __Ex.:__
<code javascript>
</code>
  * @path ctx.SAPScripting.getType
  * @param {number} typeAsNumber
  * @return {string} ... 
  */
	self.getType = function(typeAsNumber) {
		var type = '';
		for (var id in _SAPGUItypes) {
			if (_SAPGUItypes[id].id === typeAsNumber) { type = id; break; } 
		}
		return type;
	}
	
 /**
  * @ignore
  * @method getTypeAsNumber
  * @summary     ...
  * @description
  * __Ex.:__
<code javascript>
</code>
  * @path ctx.SAPScripting.getTypeAsNumber
  * @param {string} type
  * @return {number} ... 
  */
	self.getTypeAsNumber = function(type) {
		var id = 0;
		if (_SAPGUItypes[type]) id = _SAPGUItypes[type].id	|| 0;
		return id;
	}
	
/**
  * @ignore
  * @method getSAPGuiFunction
  * @summary     ...
  * @description
  * __Ex.:__
<code javascript>
</code>
  * @throws {Error}
  * @path ctx.SAPScripting.getSAPGuiFunction
  * @param {string} sVerb
  * @param {string} sType
  * @return {*} ... 
  */
	self.getSAPGuiFunction = function (sVerb, sType) {

		var getSAPGuiMethod = function (verb, type) {

			if (!_SAPGUItypes[type]) {
				ctx.log('ctx.SAPScripting.getSAPGuiMethod: unknown type: ' + type, e.logIconType.Warning);
				return {};
			}

			if (_SAPGUItypes[type].map) {
				var map = _SAPGUItypes[type].map;
				if (map[verb]) {
					return map[verb];
				}
			}

			if (_SAPGUItypes[type].parents) {
				for (var id in _SAPGUItypes[type].parents) {
					// search in parents
					var parentMethod = getSAPGuiMethod(verb, _SAPGUItypes[type].parents[id]);
					if (parentMethod.name) {
						return parentMethod;
					}
				}
			}
			return {};
		}

		var fnResult = function (oMapValue, verb) {

			var sName;
			if (oMapValue.type === 'attribute') {
				if ('get' === verb || 'set' === verb) {
					sName = verb + '_' + oMapValue.name;
				} else {
					sName = oMapValue.name;
				}
			} else if (oMapValue.type === 'method') {
				sName = 'exec_' + oMapValue.name
			} else if (oMapValue.type === 'asyncmethod') {
				sName = 'asyncexec_' + oMapValue.name
			} else {
				throw new Error('Verb not "' + verb + '" found' + JSON.stringify(oMapValue,null,2));
			}

			var aSerializers = [];
			var i;
			if (oMapValue.input) {
				for (i = 0; i < oMapValue.input.length; i++) {
					switch (oMapValue.input[i]) {
						case 'string':
							aSerializers.push(function (oValue) {
								return e.prefix.string + oValue;
							});
							break;
						case 'number':
							aSerializers.push(function (oValue) {
								return e.prefix.number + oValue;
							});
							break;
						case 'boolean':
							aSerializers.push(function (oValue) {
								return e.prefix.bool + (oValue ? true : false);
							});
							break;
						default:
							aSerializers.push(function (oValue) {
								return '';
							});
							break;
					}
				}
			}

			var fnReader;
			switch (oMapValue.output) {
				case 'boolean':
					fnReader = function (sValue) { return sValue.toLowerCase() === 'true' };
					break;
				case 'number':
					fnReader = function (sValue) { return Number(sValue); };
					break;
				case 'string':
					fnReader = function (sValue) { return sValue.toString(); };
					break;
				case 'object':
					fnReader = function (sValue) { return JSON.parse(sValue); };
					break;
				default:
					fnReader = function (sValue) { };
					break;
			}
			return {
				name: sName,
				serializers: aSerializers,
				resultReader: fnReader
			}
		}

		var oMethod = getSAPGuiMethod(sVerb, sType);
		return fnResult(oMethod, sVerb);
	}

		
	/**
	 * @ignore
	  * ...
	  * @method executeSAPGuiFunction
	  * @summary     ...
	  * @description
	  * __Ex.:__
	<code javascript>
	</code>
	  * @throws {Error}
	  * @path ctx.SAPScripting.executeSAPGuiFunction
	  * @param {ctx.descriptor} oDesc
	  * @param {string} sType
	  * @param {string} sVerb
	  * @param {*} p1
	  * @param {*} p2
	  * @param {*} p3
	  * @param {*} p4
	  * @return {number|string|boolean} ... 
	  */
	self.executeSAPGuiFunction = function (oDesc, sType, sVerb, p1, p2, p3, p4) {

		var i, oParam, fnSerializer;
		//var oMethod = getSAPGuiMethod(sVerb, sType);
		var oSapFunc = self.getSAPGuiFunction(sVerb, sType);
		var aParam = ['', '', '', ''];
		for (i = 0; i < oSapFunc.serializers.length; i++) {
			oParam = arguments[i + 3];
			fnSerializer = oSapFunc.serializers[i];
			aParam[i] = fnSerializer(oParam);
		}
		ctx.noNotify = true;
		var sRes = ctx.actionApp(oDesc, sVerb, oSapFunc.name, oDesc.itemFullName, aParam[0], aParam[1], aParam[2], aParam[3]);
		return oSapFunc.resultReader(sRes);
	}

 /**
  * @ignore
  * @method      getInfos
  * @summary     ...
  * @description
  * __Ex.:__
<code javascript>
</code>
  * @throws {Error}
  * @path ctx.SAPScripting.getInfos
  * @return {Object} ... 
  */
	self.getInfos = function() {
		ctx.notifyAction('ctx.SAPScripting.getInfos');
		var infos = {};
		if (_application && _application.control) {
			infos.version = {
				major: _application.control.majorVersion(),
				minor: _application.control.minorVersion(),
				revision: _application.control.revision(),
				patchlevel: _application.control.patchlevel()
			};
		}
		return infos;
	}

	return self;
})();


/**
* ctx.SAPComponent class
* @class ctx.SAPComponent
* @path ctx.SAPComponent
* @constructor
* @advanced
* @param {Object} params item definitions
* @param {ctx.item|ctx.page} [itemOrPage] 
* @param {Object} [control] page, item or SAP native control to be wrapped in 'ctx.SAPComponent' object
* @param {Object} [session] optional session object containing the control
* @param {boolean} [addChildren] optional flag to include children nodes
* @param {boolean} [verbose] optional flag to include detailed information
* @param {number} [hwnd] handle of the parent window
*/
ctx.SAPComponent = function (params, itemOrPage, control, session, addChildren, verbose, hwnd) {

	if ( !(this instanceof ctx.SAPComponent) ) {
	  return new ctx.SAPComponent(params, itemOrPage, control, session, addChildren, verbose, hwnd); // in case 'new' was not used		
	}
	//params = params || {};
	var _component = this;
	
	/** 
	* ===== Properties =====
	*/
	/** class type
	* @ignore
	* @const 
	* @path ctx.SAPComponent.ctxType
	* @property {string} ctxType  */ this.ctxType = 'ctx.SAPComponent';

	/** Component alias 
	* @path ctx.SAPComponent.alias
	* @property {string} alias  */ this.alias = '';

	/** Component criteria
	* @path ctx.SAPComponent.criteria
	* @property {Object} criteria  */ this.criteria = {};

	/** Component items
	* @path ctx.SAPComponent.items
	* @property {Object} items  */ this.items = {};
	
	/** Component items
	* @path ctx.SAPComponent.itemOrPage
	* @property {ctx.item|ctx.page} itemOrPage  */ this.itemOrPage = itemOrPage;

	/** Component id (relative to the containing window)
	* @path ctx.SAPComponent.id
	* @property {string} id  */ this.id = '';

	/** Component name
	* @path ctx.SAPComponent.name
	* @property {string} name  */ this.name = '';

	/** Parent Component
	* @path ctx.SAPComponent.parent
	* @property {ctx.SAPComponent} parent */ this.parent = null;
	if (itemOrPage && itemOrPage.parent && itemOrPage.parent.component)
		 this.parent = itemOrPage.parent.component;

	/** Component session native object
	* @path ctx.SAPComponent.session
	* @property {Objet} session  */ this.session = null;

	/** Component session id
	* @path ctx.SAPComponent.sessionId
	* @property {Objet} sessionId  */ this.sessionId = '';

	/** Component window id
	* @path ctx.SAPComponent.windowId
	* @property {Objet} windowId  */ this.windowId = '';

	/** Component type
	* @path ctx.SAPComponent.type
	* @property {string} type  */ this.type = '';

	/** Component typeAsNumber
	* @path ctx.SAPComponent.typeAsNumber
	* @property {number} typeAsNumber  */ this.typeAsNumber = 0;

	/** Component text
	* @path ctx.SAPComponent.text
	* @property {string} text  */ this.text = '';

	/** Associated Windows application
	* @ignore
	* @path ctx.SAPComponent.winApp
	* @property {ctx.application} text  */ this.winApp = null;

	/** Session current page
	* @ignore
	* @path ctx.SAPComponent.currentPage
	* @property {ctx.application} text  */ this.currentPage = null;
	
	/** Component control
	* @path ctx.SAPComponent.control
	* @property {Object} control  */ this.control = null;

	/**
	 * @ignore
	* __Ex.:__
<code javascript>
</code>
	* @method init
	* @ignore
	* @path ctx.SAPComponent.init
	* @param {Object} params item definitions
*/
	this.init = function (params) {
		try {
			params = params || {};

			if (!params.typeAsNumber) params.typeAsNumber = ctx.SAPScripting.getTypeAsNumber(params.type);
			
			ctx.each(params, function(id, value) {
				_component[id] = value;
			});
			
		} catch (ex) {		}
	}

	/**
	* __Ex.:__
<code javascript>
</code>
	* @method getAlias
	* @ignore
	* @path ctx.SAPComponent.getAlias
	* @return {string} verb
*/
	this.getAlias = function() {
		var alias = this.alias;
		if (this.parent && this.parent.getAlias) alias =  this.parent.getAlias() + '.' + alias;
		return alias;
	}
	
	/**
	* __Ex.:__
<code javascript>
</code>
	* @method init
	* @ignore
	* @path ctx.SAPComponent.has
	* @param {string} verb
*/
	this.has = function(verb) {
		
		try {
			var sName = ctx.SAPScripting.getSAPGuiFunction(verb, this.type).name;
			return sName !== '';
		} catch(oErr) {
			
		}
		return false;
	}
	
	/** 
	* ===== Methods =====
	*/

	this.init(params);
	

	/** 
	* Returns object descriptor for the page
	* @description
	* __Ex.:__
	<code javascript>
	var desc = MyAppli.MyPage.getObjectDescriptor();
	</code>
  * @ignore [internal use]
  * @method getObjectDescriptor
  * @path ctx.SAPComponent.getObjectDescriptor
	* @param {ctx.descriptor} [desc] initial descriptor object to be completed (if omitted, a new descriptor object is created)
  * @return {ctx.descriptor} page object descriptor
  */
	this.getObjectDescriptor = function (desc) {
		desc = this.itemOrPage.getObjectDescriptor(desc);
    	return desc;
	}

	// *** custom methods on pages and items ***
	if (!((itemOrPage instanceof ctx.item) || (itemOrPage instanceof ctx.page))) {
		return; // no associated page/item
	}
	
	if (_component.has('setAutomationConnection')) {
		/**
	  * @summary Limits automation only on current's page connection 
	  * @description 
		* __Ex.:__
		<code javascript>
		// Wait until the Login Page loads
		SAPLogon750.pSAP.wait(function(ev) {
		
			// Limits automation only on "SAP Connection" of SAPLogon750.pSAP page
			SAPLogon750.pSAP.setAutomationConnection();
			
			// Fill user password etc ...
			SAPLogon750.pSAP.edMandant.set(rootData.SAPLogon750Data.pSAPData.edMandant);
			SAPLogon750.pSAP.edUtilisateur.set(rootData.SAPLogon750Data.pSAPData.edUtilisateur);
			SAPLogon750.pSAP.oMotPasse.set(rootData.SAPLogon750Data.pSAPData.oMotPasse);
			SAPLogon750.pSAP.edLangueDeTravail.set(rootData.SAPLogon750Data.pSAPData.edLangueDeTravail);
			SAPLogon750.pSAP.keyStroke(e.SAPScripting.key._Enter_);
			sc.endStep(); // end Scenario
			return;
		});
		</code>
		* @method setAutomationConnection
		* @path ctx.SAPComponent.setAutomationConnection
		* @return {*} result 
		*/
		itemOrPage.setAutomationConnection = function () {
      var desc = itemOrPage.getObjectDescriptor();
			ctx.notifyAction('setAutomationConnection', '', desc);
			return ctx.SAPScripting.executeSAPGuiFunction(desc, _component.type, 'setAutomationConnection','','','','');	
		}
	}

	if (_component.has('click')) {
		/**
	  * @summary Executes a 'click' on the item
	  * @description 
		* __Ex.:__
<code javascript>
// click on button
SAPLogon750App.pSAPEasyAccess.btExit.click ();
</code>
		* @method click
		* @path ctx.SAPComponent.click
		* @return {*} result 
		*/
		itemOrPage.click = function () {
      		var desc = itemOrPage.getObjectDescriptor();
			ctx.notifyAction('click', '', desc);
			return ctx.SAPScripting.executeSAPGuiFunction(desc, _component.type, 'click','','','','');	
		}
	}

	if (_component.has('clickDoubleCell')) {
		/**
	  * @summary Executes double click on a cell
	  * @description Available on Grid View Control
		* __Ex.:__
<code javascript>
		// To simulate a double click on 2nd cell of first row
		
		// Retrieve All columns 
		var aColumns = SAPLogon750.pTCURRDisplayOfEnt.oSAPGUIGridViewCtrl1.getColumns();

		// Double click on cell
		var nRow = 0;
		var sCol = aColumns[1];
		SAPLogon750.pTCURRDisplayOfEnt.oSAPGUIGridViewCtrl1.clickDoubleCell(nRow, sCol);

</code>
		* @method clickDoubleCell
		* @path ctx.SAPComponent.clickDoubleCell
		* @param {number} row Row index
		* @param {string} col Column key
		* @return {*} 
		*/
		itemOrPage.clickDoubleCell = function (row, col) {
			var desc = itemOrPage.getObjectDescriptor();
			ctx.notifyAction('clickDoubleCell', '', desc);
			return ctx.SAPScripting.executeSAPGuiFunction(desc, _component.type, 'clickDoubleCell',row, col,'','');	
		}
	}

	if (_component.has('clickDoubleNode')) {
		/**
	  * @summary Executes double click on a node
	  * @description Available on Tree View Control
		* __Ex.:__
<code javascript>
		// Double click on node
		var sNodeKey = '0000000004';
		SAPLogon750.pSAPEasyAccess.oSAPTableTreeControl.clickDoubleNode(sNodeKey);

		// Question: How to know the node's key ?
		// Response: 
		//    * In the SAP Gui Application select the node
		//    * Launch the project in Desktop Studio
		//    * In code tester, execute SAPLogon750.pSAPEasyAccess.oSAPTableTreeControl.selected()
</code>
		* @method clickDoubleNode
		* @path ctx.SAPComponent.clickDoubleNode
		* @param {*} key Node key
		* @return {*} 
		*/
		itemOrPage.clickDoubleNode = function (key) {
			var desc = itemOrPage.getObjectDescriptor();
			ctx.notifyAction('clickDoubleNode', '', desc);

			var res = false;
			if (!key) {
				key = ctx.SAPScripting.executeSAPGuiFunction(desc, _component.type, 'selected','','','','');	
			} else {
				ctx.SAPScripting.executeSAPGuiFunction(desc, _component.type, 'select', key, '','','');
			}
			if (key) {
				ctx.SAPScripting.executeSAPGuiFunction(desc, _component.type, 'clickDoubleNode', key,'','','');
				res = true;
			}
			return res;		
		}
	}

	if (_component.has('clickMenu')) {
		/**
	  * @summary 
	  * @description
		* __Ex.:__
	<code javascript>
	</code>
		* @method clickMenu
		* @path ctx.SAPComponent.clickMenu
		* @param {string} command
		* @return {*} result 
		*/
		itemOrPage.clickMenu = function (buttonName, command) {
	    	var desc = itemOrPage.getObjectDescriptor();
			ctx.notifyAction('clickMenu', '', desc);

			var oSapFunc, sButtonName, sHierarchy, sCommand;
			
			oSapFunc = ctx.SAPScripting.getSAPGuiFunction('setFocus', _component.type);	
			ctx.noNotify = true;
			ctx.actionApp (desc, 'setFocus', oSapFunc.name, desc.itemFullName);

			oSapFunc = ctx.SAPScripting.getSAPGuiFunction('selectItem', _component.type);	
			sButtonName = oSapFunc.serializers[0](buttonName);
			sHierarchy = oSapFunc.serializers[1]('&Hierarchy');
			ctx.noNotify = true;
			ctx.actionApp (desc, 'selectItem', oSapFunc.name, desc.itemFullName, sButtonName, sHierarchy);

			oSapFunc = ctx.SAPScripting.getSAPGuiFunction('ensureVisibleHorizontalItem', _component.type);	
			sButtonName = oSapFunc.serializers[0](buttonName);
			sHierarchy = oSapFunc.serializers[1]('&Hierarchy');
			ctx.noNotify = true;
			ctx.actionApp (desc, 'ensureVisibleHorizontalItem', oSapFunc.name, desc.itemFullName, sButtonName, sHierarchy);

			oSapFunc = ctx.SAPScripting.getSAPGuiFunction('itemContextMenu', _component.type);	
			sButtonName = oSapFunc.serializers[0](buttonName);
			sHierarchy = oSapFunc.serializers[1]('&Hierarchy');
			ctx.noNotify = true;
			ctx.actionApp (desc, 'itemContextMenu', oSapFunc.name, desc.itemFullName, sButtonName, sHierarchy);

			oSapFunc = ctx.SAPScripting.getSAPGuiFunction('selectContextMenuItem', _component.type);	
			sCommand = oSapFunc.serializers[0](command);
			ctx.noNotify = true;
			ctx.actionApp (desc, 'selectContextMenuItem', oSapFunc.name, desc.itemFullName, sCommand);

			return true;
		}
	}

	if (_component.has('clickToolbar')) {
		/**
	  * @summary Click on toolbar button
	  * @description Available on GridView and ToolBar controls
		* __Ex.:__
<code javascript>
		// Click on 'Find' button of tool bar
		var sButtonId = '&FIND';
		SAPLogon750.pTCURRDisplayOfEnt.oSAPGUIGridViewCtrl1.clickToolbar(sButtonId)
</code>
		* @method clickToolbar
		* @path ctx.SAPComponent.clickToolbar
	  * @param {string}  buttonId Id of the button  (see [[:lib:sap:sapscripting#ctx_sapcomponent_gettoolbar| getToolbar]] method) 
		* @return {*} result
		*/
		itemOrPage.clickToolbar = function (buttonId) {
      		var desc = itemOrPage.getObjectDescriptor();
			ctx.notifyAction('clickToolbar', '', desc);
			return ctx.SAPScripting.executeSAPGuiFunction(desc, _component.type, 'clickToolbar',buttonId,'','','');
		}
	}

	if (_component.has('close')) {
		/**
	  * @summary Close Window
	  * @description Available on GuiFrameWindow
		* __Ex.:__
<code javascript>
</code>
		* @method close
		* @path ctx.SAPComponent.close
		* @return {*} result
		*/
		itemOrPage.close = function () {
      		var desc = itemOrPage.getObjectDescriptor();
			ctx.notifyAction('close', '', desc);
			return ctx.SAPScripting.executeSAPGuiFunction(desc, _component.type, 'close','','','','');
		}
	}

	if (_component.has('collapse')) {
		/**
	  * @summary Collapses a node
	  * @description Available on Tree View Control
		* __Ex.:__
<code javascript>
		// Collapse node
		var sNodeKey = '0000000004';
		SAPLogon750.pSAPEasyAccess.oSAPTableTreeControl.collapse(sNodeKey);

		// Question: How to know the node's key ?
		// Response: 
		//    * In the SAP Gui Application select the node
		//    * Launch the project in Desktop Studio
		//    * In code tester, execute SAPLogon750.pSAPEasyAccess.oSAPTableTreeControl.selected()
</code>
		* @method collapse
		* @path ctx.SAPComponent.collapse
		* @param {string} key Node's key
		* @return {*} result
		*/
		itemOrPage.collapse = function (key) {
      		var desc = itemOrPage.getObjectDescriptor();
			ctx.notifyAction('collapse', '', desc);
			return ctx.SAPScripting.executeSAPGuiFunction(desc, _component.type, 'collapse',key,'','','');
		}
	}
	
	if (_component.has('expand')) {
		/**
	  * @summary Expands a node
	  * @description Available on Tree View Control
		* __Ex.:__
<code javascript>
		// Expands node
		var sNodeKey = '0000000004';
		SAPLogon750.pSAPEasyAccess.oSAPTableTreeControl.expand(sNodeKey);

		// Question: How to know the node's key ?
		// Response: 
		//    * In the SAP Gui Application select the node
		//    * Launch the project in Desktop Studio
		//    * In code tester, execute SAPLogon750.pSAPEasyAccess.oSAPTableTreeControl.selected()
</code>
		* @method expand
		* @path ctx.SAPComponent.expand
		* @param {string} key
		* @return {*} result
		*/
		itemOrPage.expand = function (key) {
      		var desc = itemOrPage.getObjectDescriptor();
			ctx.notifyAction('expand', '', desc);
			return ctx.SAPScripting.executeSAPGuiFunction(desc, _component.type, 'expand',key,'','','');
		}
	}

	if (_component.has('get')) {
		/**
		* @method get
	  * @summary Gets item value
	  * @description
		* __Ex.:__
<code javascript>
</code>
		* @path ctx.SAPComponent.get
		* @return {*} result string containing value in Xml format
		*/
		itemOrPage.get = function () {
			var desc = itemOrPage.getObjectDescriptor();
			ctx.notifyAction('get', '', desc);
			return ctx.SAPScripting.executeSAPGuiFunction(desc, _component.type, 'get', '','','','');
		}
	}

	if (_component.has('getCell')) {
		/**
		* @method getCell
	  * @summary Gets cell value
	  * @description Available on Grid View Control
		* __Ex.:__
<code javascript>

		// Retrieves All columns 
		var aColumns = SAPLogon750.pTCURRDisplayOfEnt.oSAPGUIGridViewCtrl1.getColumns();

		// Get value of 2nd cell of first row
		var nRow = 0;
		var sCol = aColumns[1];
		SAPLogon750.pTCURRDisplayOfEnt.oSAPGUIGridViewCtrl1.getCell(nRow, sCol);
</code>
		* @path ctx.SAPComponent.getCell
		* @param {number} row Row index
		* @param {number} col Column key
		* @return {*} Cell value
		*/
		itemOrPage.getCell = function (row, col) {

			var desc = itemOrPage.getObjectDescriptor();
			ctx.notifyAction('getCell', '', desc);

			ctx.SAPScripting.executeSAPGuiFunction(desc, _component.type, 'selectCell', row,col,'','');
			var oCellValue = ctx.SAPScripting.executeSAPGuiFunction(desc, _component.type, 'getCellValue', row,col,'','');
			return oCellValue;
		}
	}

	if (_component.has('getColumns')) {
		/**
		* @method getColumns
	  * @summary Gets column keys
	  * @description Available on Grid View Control
		* __Ex.:__
<code javascript>
		var aColumns = SAPLogon750.pTCURRDisplayOfEnt.oSAPGUIGridViewCtrl1.getColumns();
</code>
		* @path ctx.SAPComponent.getColumns
		* @return {*} ...
		*/
		itemOrPage.getColumns = function () {

			var desc = itemOrPage.getObjectDescriptor();
			ctx.notifyAction('getColumns', '', desc);
			var oColumns = ctx.SAPScripting.executeSAPGuiFunction(desc, _component.type, 'getColumns', '','','','');
			return oColumns;
		}
	}

	if (_component.has('getRowCount')) {
		/**
		* @method getRow
	  * @summary Returns row values
	  * @description Available on Grin View Control
		* __Ex.:__
<code javascript>
		var aRow = SAPLogon750.pTCURRDisplayOfEnt.oSAPGUIGridViewCtrl1.getRow(2);
</code>
		* @path ctx.SAPComponent.getRow
		* @param {number} row Row index
		* @return {*} ...
		*/
		itemOrPage.getRow = function (row) {

			var desc = itemOrPage.getObjectDescriptor();
			ctx.notifyAction('getRow', '', desc);
			
			// Get Columns
			ctx.noNotify = true;
			var aColumns = ctx.SAPScripting.executeSAPGuiFunction(desc, _component.type, 'getColumns', '','','','');

			// Set row on top
			ctx.noNotify = true;
			var firstVisible = ctx.SAPScripting.executeSAPGuiFunction(desc, _component.type, 'setFirstVisibleRow', row,'','','');

			var aResult = [];
			var i, count = aColumns.length;
			var cVal;
			for(i = 0; i<count; i++) {
				ctx.noNotify = true;
				cVal = this.getCell(row, aColumns[i]);
				aResult.push(cVal);
			}
			return aResult;
		}
	}

	if (_component.has('getRowCount')) {
		/**
		* @method getRowCount
	  * @summary Gets row count
	  * @description Available on Grid View Control
		* __Ex.:__
<code javascript>
</code>
		* @path ctx.SAPComponent.getRowCount
		* @return {*} ...
		*/
		itemOrPage.getRowCount = function () {

			var desc = itemOrPage.getObjectDescriptor();
			ctx.notifyAction('getRowCount', '', desc);
			var count = ctx.SAPScripting.executeSAPGuiFunction(desc, _component.type, 'getRowCount', '','','','');
			return count;
		}
	}

	if (_component.has('getIconName')) {
		/**
	  * @summary Gets icon name
	  * @description
		* __Ex.:__
	<code javascript>
	</code>
		* @method getIconName
		* @path ctx.SAPComponent.getIconName
		* @return {*} result string containing value in Xml format
		*/
		itemOrPage.getIconName = function () {
      		var desc = itemOrPage.getObjectDescriptor();
			ctx.notifyAction('getIconName', '', desc);
			return ctx.SAPScripting.executeSAPGuiFunction(desc, _component.type, 'getIconName', '','','','');
		}
	}

		/**
		* @method getProperty
	  * @summary Gets property value
	  * @description Properties are those of SAP GUI Scipring API Objects (eg: GUIGutton, GuiTree etc ...)
		* __Ex.:__
<code javascript>
		// Retrieve Button size
		var sH = SAPLogon750.pTCURRDisplayOfEnt.btExit.getProperty('Height');
		var sW = SAPLogon750.pTCURRDisplayOfEnt.btExit.getProperty('Width');
</code>
		* @path ctx.SAPComponent.getProperty
		* @param {string} property
		* @return {*} result string containing value in Xml format
		*/
		itemOrPage.getProperty = function (property) {
			var desc = itemOrPage.getObjectDescriptor();
			ctx.notifyAction('getProperty', '', desc);
			var sSapFunc = 'get_' + property;
			var sRes = ctx.actionApp(desc, 'getProperty', sSapFunc, desc.itemFullName, '', '', '', '');
			return sRes;
		}
		
	if (_component.has('clickToolbarMenuButtonByText')) {
		/**
		* @method clickToolbarMenuButtonByText
	  * @summary click on a toolbar button type menu, 
	  * @description Available on Grid View Control
		* __Ex.:__
<code javascript>
		SAPLogon750.pTCURRDisplayOfEnt.oSAPGUIGridViewCtrl1.clickToolbarMenuButtonByText('DETAIL_MENU', 'Table Definition');
</code>
		
		* @path ctx.SAPComponent.clickToolbarMenuButtonByText
		* @param {string} buttonId
		* @param {string} text
		* @return {*} ...
		*/
		itemOrPage.clickToolbarMenuButtonByText = function (buttonId, text) {

			var desc = itemOrPage.getObjectDescriptor();
			ctx.notifyAction('clickToolbarMenuButtonByText', '', desc);
			ctx.SAPScripting.executeSAPGuiFunction(desc, _component.type, 'pressToolbarContextButton', buttonId,'','','');
			return ctx.SAPScripting.executeSAPGuiFunction(desc, _component.type, 'selectContextMenuItemByText', text,'','','');
		}
	}
	
	if (_component.has('clickToolbarMenuButtonByPosition')) {
		/**
		* @method clickToolbarMenuButtonByPosition
	  * @summary click on a toolbar button type menu, 
	  * @description Available on Grid View Control
		* __Ex.:__
<code javascript>
		SAPLogon750.pTCURRDisplayOfEnt.oSAPGUIGridViewCtrl1.clickToolbarMenuButtonByPosition('DETAIL_MENU', '2');
</code>
		
		* @path ctx.SAPComponent.clickToolbarMenuButtonByPosition
		* @param {string} buttonId
		* @param {string} Position
		* @return {*} ...
		*/
		itemOrPage.clickToolbarMenuButtonByPosition = function (buttonId, pos) {

			var desc = itemOrPage.getObjectDescriptor();
			ctx.notifyAction('clickToolbarMenuButtonByPosition', '', desc);
			ctx.SAPScripting.executeSAPGuiFunction(desc, _component.type, 'pressToolbarContextButton', buttonId,'','','');
			return ctx.SAPScripting.executeSAPGuiFunction(desc, _component.type, 'selectContextMenuItemByPosition', pos,'','','');
		}
	}
	if (_component.has('clickToolbarMenuButtonByFunCode')) {
		/**
		* @method clickToolbarMenuButtonByFunCode
	  * @summary click on a toolbar button type menu, 
	  * @description Available on Grid View Control
		* __Ex.:__
<code javascript>
		SAPLogon750.pTCURRDisplayOfEnt.oSAPGUIGridViewCtrl1.clickToolbarMenuButtonByFunCode('DETAIL_MENU', 'TABLDEFI');
</code>
		
		* @path ctx.SAPComponent.clickToolbarMenuButtonByFunCode
		* @param {string} buttonId
		* @param {string} FunctionCode 
		* @return {*} ...
		*/
		itemOrPage.clickToolbarMenuButtonByFunCode = function (buttonId, functionCode ) {

			var desc = itemOrPage.getObjectDescriptor();
			ctx.notifyAction('clickToolbarMenuButtonByFunCode', '', desc);
			ctx.SAPScripting.executeSAPGuiFunction(desc, _component.type, 'pressToolbarContextButton', buttonId,'','','');
			return ctx.SAPScripting.executeSAPGuiFunction(desc, _component.type, 'selectContextMenuItem', functionCode,'','','');
		}
	}
	if (_component.has('getToolbar')) {
		/**
	  * @summary Get Component's Toolbar
	  * @description Available on Grid View Control
		* __Ex.:__
	<code javascript>
		var oToolbar = SAPLogon750.pTCURRDisplayOfEnt.oSAPGUIGridViewCtrl1.getToolbar();
	</code>
		* @method getToolbar
		* @path ctx.SAPComponent.getToolbar
		* @return {*} result string containing value in JSON format
		*/
		itemOrPage.getToolbar = function () {
      		var desc = itemOrPage.getObjectDescriptor();
			ctx.notifyAction('getToolbar', '', desc);
			
			var aToolbar = [];
			var i, sText, sId, bEnabled, sTooltip, sType;
			var count = ctx.SAPScripting.executeSAPGuiFunction(desc, _component.type, 'getToolbar','','','','');
			for (i = 0; i < count; i++) {
				sText = ctx.SAPScripting.executeSAPGuiFunction(desc, _component.type, 'getToolbarButtonText', i, '','','');
				bEnabled = ctx.SAPScripting.executeSAPGuiFunction(desc, _component.type, 'getToolbarButtonEnabled', i, '','','');
				sId = ctx.SAPScripting.executeSAPGuiFunction(desc, _component.type, 'getToolbarButtonId', i, '','','');
				sTooltip = ctx.SAPScripting.executeSAPGuiFunction(desc, _component.type, 'getToolbarButtonTooltip', i, '','','');
				sType = ctx.SAPScripting.executeSAPGuiFunction(desc, _component.type, 'getToolbarButtonType', i, '','','');
				aToolbar.push({
					index: i,
					id: sId,
					text: sText,
					tooltip: sTooltip,
					enabled: bEnabled,
					type: sType
				});
			}
			return aToolbar;
		}
	}

	if (_component.has('iconify')) {
		/**
	  * @summary Minimize Frame window in background
	  * @description Available on any window
		* __Ex.:__
<code javascript>
</code>
		* @method iconify
		* @path ctx.SAPComponent.iconify
		* @return {*} result
		*/
		itemOrPage.iconify = function () {
      		var desc = itemOrPage.getObjectDescriptor();
			ctx.notifyAction('iconify', '', desc);
			return ctx.SAPScripting.executeSAPGuiFunction(desc, _component.type, 'iconify','','','','');
		}
	}

	if (_component.has('keyStroke')) {
		/**
		* Sends a sequence of keys
		* @description
		* __Ex.:__
		<code javascript>
		// set address, then send 'Enter key' 
		MyAppli.MyPage.edSearch.keyStroke(e.key.Enter);
		</code>
		* @method keyStroke
		* @path ctx.SAPComponent.keyStroke
		* @param {*} command key sequence or text to be sent (see [[lib:sap:sapscripting#esapscriptingkey|e.SAPScripting.key]])
		* @return {boolean} result 
		*/
	  itemOrPage.keyStroke = function (command) {
	    	var desc = itemOrPage.getObjectDescriptor();
			ctx.notifyAction('keyStroke', '', desc);
			ctx.SAPScripting.executeSAPGuiFunction(desc, _component.type, 'keyStroke',command,'','','');
			return true;
		}
	}

	if (_component.has('maximize')) {
		/**
	  * @summary Maximize Frame window
	  * @description Available on any window
		* __Ex.:__
<code javascript>
</code>
		* @method maximize
		* @path ctx.SAPComponent.maximize
		* @return {*} result
		*/
		itemOrPage.maximize = function () {
      		var desc = itemOrPage.getObjectDescriptor();
			ctx.notifyAction('maximize', '', desc);
			return ctx.SAPScripting.executeSAPGuiFunction(desc, _component.type, 'maximize','','','','');
		}
	}

	if (_component.has('minimize')) {
		/**
	  * @summary Minimize Frame window
	  * @description Available on any window
		* __Ex.:__
<code javascript>
</code>
		* @method minimize
		* @path ctx.SAPComponent.minimize
		* @return {*} result
		*/
		itemOrPage.minimize = function () {
      		var desc = itemOrPage.getObjectDescriptor();
			ctx.notifyAction('minimize', '', desc);
			return ctx.SAPScripting.executeSAPGuiFunction(desc, _component.type, 'minimize','','','','');
		}
	}
	
	if (_component.has('restore')) {
		/**
	  * @summary Restore a window from its iconified state
	  * @description Available on any window
		* __Ex.:__
<code javascript>
</code>
		* @method restore
		* @path ctx.SAPComponent.restore
		* @return {*} result
		*/
		itemOrPage.restore = function () {
      		var desc = itemOrPage.getObjectDescriptor();
			ctx.notifyAction('ctx.SAPComponent.restore', '', desc);
			return ctx.SAPScripting.executeSAPGuiFunction(desc, _component.type, 'restore','','','','');
		}
	}

	if (_component.has('screenshot')) {
		/**
		* Makes a screenshot of the window (in PNG format)
		* @description
		* __Ex.:__
		<code javascript>
		</code>
		* @method screenshot
		* @path ctx.SAPComponent.screenshot
		* @param {string} filename file name
		* @return {*} result 
		*/
	  itemOrPage.screenshot = function (filename) {
	    var desc = itemOrPage.getObjectDescriptor();
			ctx.notifyAction('screenshot', '', desc);
			return ctx.SAPScripting.executeSAPGuiFunction(desc, _component.type, 'screenshot', filename, 2,'','');
		}
	}

	if (_component.has('select')) {
		/**
	  * @summary Selects/Unselect a node
	  * @description Available on Tree View Control
		* __Ex.:__
	<code javascript>
	</code>
		* @method select
		* @path ctx.SAPComponent.select
		* @param {boolean} bSelection If true, set node as selected
		* @param {*} key Node's key
		* @return {*} ...
		*/
		itemOrPage.select = function (bSelection, key) {
			var desc = itemOrPage.getObjectDescriptor();
			ctx.notifyAction('select', '', desc);

			if (!key) {
				// get select item index
				key = itemOrPage.selected();
			}

			var oRes = '';
			if (key) {
				var sFunctionName = bSelection ? 'select' : 'unselect';
				oRes = ctx.SAPScripting.executeSAPGuiFunction(desc, _component.type, sFunctionName, key, '','','');
			}
			return oRes;
		}
	}
	
	if (_component.has('selectCell')) {
		/**
	  * @summary Select a cell
	  * @description Availavle on Grid View Control
		* __Ex.:__
	<code javascript>
	</code>
		* @method selectCell
		* @path ctx.SAPComponent.selectCell
		* @param {*} row Row index
		* @param {*} col Column key
		* @return {*} ...
		*/
		itemOrPage.selectCell = function (row, col) {
			var desc = itemOrPage.getObjectDescriptor();
			ctx.notifyAction('selectCell', '', desc);
			return ctx.SAPScripting.executeSAPGuiFunction(desc, _component.type, 'selectCell', row, col,'','');
		}
	}
	
	if (_component.has('selectContextMenuItem')) {
		/**
	  * TBC
	  * @summary TBC
	  * @description
		* __Ex.:__
	<code javascript>
	</code>
		* @method selectContextMenuItem
		* @path ctx.SAPComponent.selectContextMenuItem
		* @param {string} command
		* @return {boolean} result 
		*/
		itemOrPage.selectContextMenuItem = function (command) {
	    var desc = itemOrPage.getObjectDescriptor();
			ctx.notifyAction('selectContextMenuItem', '', desc);

			ctx.noNotify = true;
			var sSelected = this.selected();
			if (sSelected) {
				ctx.SAPScripting.executeSAPGuiFunction(desc, _component.type, 'contextMenu', sSelected, '','','');
				ctx.SAPScripting.executeSAPGuiFunction(desc, _component.type, 'selectContextMenuItem', command, '','','');
				return true;
			}
			return false;
		}
	}
	
	if (_component.has('selected')) {
		/**
	  * @summary Gets the selected item
	  * @description 
		* __Ex.:__
	<code javascript>
	</code>
		* @method selected
		* @path ctx.SAPComponent.selected
		* @return {*} ...
		*/
		itemOrPage.selected = function () {
			var desc = itemOrPage.getObjectDescriptor();
			ctx.notifyAction('selected', '', desc);
			var res = ctx.SAPScripting.executeSAPGuiFunction(desc, _component.type, 'selected', '','','','');
			if (_component.type === 'GuiCtrlTree') {
				res = '"' + res + '"';
			}
			return res;
		}
	}
	
	if (_component.has('selectedCol')) {
		/**
	  * @summary Gets the selected column
	  * @description Available on Grid View Control
		* __Ex.:__
	<code javascript>
	</code>
		* @method selectedCol
		* @path ctx.SAPComponent.selectedCol
		* @return {*} ...
		*/
		itemOrPage.selectedCol = function () {
			var desc = itemOrPage.getObjectDescriptor();
			ctx.notifyAction('selectedCol', '', desc);
			return ctx.SAPScripting.executeSAPGuiFunction(desc, _component.type, 'selectedCol','','','','');
		}
	}

	if (_component.has('selectMenu')) {
		/**
	  * TBC
		* @ignore
	  * @summary TBC
	  * @description
		* __Ex.:__
	<code javascript>
	</code>
		* @method selectMenu
		* @path ctx.SAPComponent.selectMenu
		* @param {string} command
		* @return {*} result 
		*/
		itemOrPage.selectMenu = function (command, byText) {
	    	var desc = itemOrPage.getObjectDescriptor();
			ctx.notifyAction('selectMenu', '', desc);

			var oSapFunc, sCommand;
			if (byText) {
				oSapFunc = ctx.SAPScripting.getSAPGuiFunction('selectMenuItemByText', _component.type);	
				sCommand = oSapFunc.serializers[0](command);
				ctx.actionApp (desc, 'selectMenuItemByText', oSapFunc.name, desc.itemFullName, sCommand);
			} else {
				oSapFunc = ctx.SAPScripting.getSAPGuiFunction('selectMenu', _component.type);	
				sCommand = oSapFunc.serializers[0](command);
				ctx.actionApp (desc, 'selectMenu', oSapFunc.name, desc.itemFullName, sCommand);
			}
			return true;
		}
	}
	
	if (_component.has('selectedRow')) {
		/**
	  * @summary Gets the selected row
	  * @description Available on Grid View Control
		* __Ex.:__
	<code javascript>
	</code>
		* @method selectedRow
		* @path ctx.SAPComponent.selectedRow
		* @return {*} ...
		*/
		itemOrPage.selectedRow = function () {
			var desc = itemOrPage.getObjectDescriptor();
			ctx.notifyAction('selectedRow', '', desc);
			return ctx.SAPScripting.executeSAPGuiFunction(desc, _component.type, 'selectedRow','','','','');
		}
	}

	if (_component.has('set')) {
		/**
	  * @summary Sets value of an item
	  * @description
		* __Ex.:__
	<code javascript>
	</code>
		* @method set
		* @path ctx.SAPComponent.set
		* @param {string|number} value
		* @return {*} ...
		*/
		itemOrPage.set = function (value) {
	    var desc = itemOrPage.getObjectDescriptor();
			ctx.notifyAction('set', '', desc);
			return ctx.SAPScripting.executeSAPGuiFunction(desc, _component.type, 'set',value,'','','');
		}
	}

	if (_component.has('setCaretPosition')) {
		/**
	  * @summary Sets the caret position within a text field
	  * @description Available on Text Field Control
		* __Ex.:__
	<code javascript>
	</code>
		* @method setCaretPosition
		* @path ctx.SAPComponent.setCaretPosition
		* @param {number} value Caret position
		* @return {*} ...
		*/
		itemOrPage.setCaretPosition = function (value) {
			var desc = itemOrPage.getObjectDescriptor();
			ctx.notifyAction('setCaretPosition', '', desc);
			return ctx.SAPScripting.executeSAPGuiFunction(desc, _component.type, 'setCaretPosition', value, '', '', '');
		}
	}

	if (_component.has('setCell')) {
		/**
	  * @summary Sets cell value
	  * @description Available on Grid View Control
		* __Ex.:__
	<code javascript>
	</code>
		* @method setCell
		* @path ctx.SAPComponent.setCell
		* @param {string} value
		* @param {number} row
		* @param {number} col
		* @return {boolean} ...
		*/
		itemOrPage.setCell = function (value, row, col) {
			var desc = itemOrPage.getObjectDescriptor();
			ctx.notifyAction('setCell', '', desc);
			ctx.SAPScripting.executeSAPGuiFunction(desc, _component.type, 'selectCell', row, col, '', '');
			ctx.SAPScripting.executeSAPGuiFunction(desc, _component.type, 'setFirstVisibleRow', row, '', '', '');
			ctx.SAPScripting.executeSAPGuiFunction(desc, _component.type, 'setCell', row, col, value, '');
			return true;
		}
	}

	if (_component.has('setFocus')) {
		/**
	  * @summary Sets focus on a item
	  * @description
		* __Ex.:__
	<code javascript>
	</code>
		* @method setFocus
		* @path ctx.SAPComponent.setFocus
		* @return {*} ...
		*/
		itemOrPage.setFocus = function () {
			var desc = itemOrPage.getObjectDescriptor();
			ctx.notifyAction('setFocus', '', desc);
			return ctx.SAPScripting.executeSAPGuiFunction(desc, _component.type, 'setFocus', '', '', '', '');
		}
	}
}

/** Custom Types for SAPGUI Scripting objects 
* @ignore
* @method ctx.customTypes.SAP
* @path ctx.customTypes.SAP
*/
ctx.customTypes.SAPGUI = function(itemOrPage, customType) {
	itemOrPage.component = new ctx.SAPComponent({ type: customType }, itemOrPage);
}


/** Description */
GLOBAL.events.START.on(function(ev) {
	var data = {};
});
