/**
 * @module       Systray and menu-bar management
 * @file         ctx/ctx.systray.js
 * @description
 * // :!: __Caution:__ this page is auto-generated from source code and should not be modified from wiki application.//
 * @author      SAP Intelligent RPA R&D team
 * 
 */

/**
 * @ignore
 * @summary   map of systrays and menubars
 * @path      ctx.systrays
 * @type      {Object}
 */
ctx.systrays = {};

/**
 * Class ctx.systray
 * @class        ctx.systray
 * @description  Class used to manage systray and menu bar\\
 *  \\
 *  <wrap help> //Example://</wrap>
 *  <code javascript>systray = ctx.systray( 'systray', GLOBAL );</code>
 *  For a general overview about 'Systray', see [[:pg:gui.systray|Systray and menu-bar management]].
 * @param       {string} [name] Systray name (by default, 'systray' is used)
 * @param       {ctx.application} [parentProcess] parent Process object (by default, 'GLOBAL' is used)
 * @return      {ctx.systrayClass} Systray object
 * @path        ctx.systray
 */
ctx.systray = function (name, parentProcess) {
  name = name || 'SYSTRAY1';
  if (!ctx.systrays[name])
    ctx.systrays[name] = new ctx.systrayClass(name, parentProcess); // create new
  return ctx.systrays[name];
}

/**
 * @class       ctx.systrayClass
 * @summary     Class implementing the systray or menu bar object
 * @description Class implementing the systray or menu bar object\\
 * \\
 * <wrap help> //Example://</wrap>
<code javascript>
ctx.systrays[name] = new ctx.systrayClass( name, parentProcess );
</code>
 * @path        ctx.systrayClass
 * @constructor
 * @advanced
 * @param       {string} name Systray name
 * @param       {ctx.application} [parentProcess] parent Process object (by default, 'GLOBAL' is used)
 */
ctx.systrayClass = function (name, parentProcess) {
 /**
  * @ignore
  * @const
  * @path ctx.systrayClass.ctxType
  * @property {string} ctxType  */ this.ctxType = 'ctx.systrayClass';
  /** @type {ctx.page} */ var _page = null; // embedded page object
  /** @type {ctx.application} */ var _parentProcess = (parentProcess || GLOBAL); // parent process
  /** systray name
  * @path ctx.systrayClass.name
  * @advanced
  * @property {string} name  */ this.name = name;
  /** @type {Object} */ var _items = {};
  /** @type {Object} */ var _images = {};
  /** @type {boolean} */ var _bCreated = false;
  /** @type {string} */ var _defaultIconId = '';
  /** @type {string} */ var _defaultLabel = '';
  /** @type {number} */ var _timerObj = 0;
  /** @type {boolean} */ var _alternativeIcon = false;
  /** @type {number} */ var _maxIdLength = 48;

 /**
  * Adds a menu in a systray or menu bar.
  * @method      addMenu
  * @description
  * <wrap help> //Example://</wrap>
<code javascript>
// *** syntax 1 : menu declaration and menu handler in two different functions ***
// menu declaration
systray.addMenu( "", "evVersion", GLOBAL.labels.menu.about + " (MESSBOX)", "about" );
} );
...
// menu handler
systray.on( 'evVersion', function ( ev ) {
  // add your code here...
} );

// *** syntax 2 : menu declaration and menu handler in a single function ***
systray.addMenu( "ScnAppMenu", "evScnAppStartScn", "Start data collect", "", function( ev ) {
  var scn = ScnApp.scenarios.scCollectData.start( );
} );
</code>
  *
  * <WRAP tip>You can use 'snippets' to accelerate development :
  *   * **systray.addMenu** + 'TAB' :
  *
<code javascript>
systray.addMenu( 'parent', 'event', 'text', 'image', function( ev ) {
  var data = { };
  ...
} );
</code>
  * </WRAP>
  * @path        ctx.systrayClass.addMenu
  * @param       {string} parentId Parent menu identifier (if empty, menu is a root menu)
  * @param       {string} id Event identifier (should be unique)
  * @param       {string} label Menu text
  * @param       {string|function(ctx.event)} [iconId] Icon identifier (loaded in ''ctx.systray.loadImage()''). If this parameter is a function, then icon is omitted and it represents the menu handler function
  * @param       {function(ctx.event)} [func] Menu handler function
  * @return      {*} Return value
  */
  this.addMenu = function (parentId, id, label, iconId, func) {
    var res = '';
    //this.items[id] = id;
    id = String(id).substring(0, _maxIdLength);
    if (typeof iconId === 'function') {
      // iconId omitted
      func = iconId;
      iconId = '';
    }

    // skip action if a menu with the same id and parent exists
    if (_items[id] && _items[id].created && (_items[id].parentId == parentId))
      return res;

    // memorize parameters for later creation (in case page not yet created)
    _items[id] = _items[id] || {};
    _items[id].parentId = parentId,
    _items[id].id = id,
    _items[id].label = label,
    _items[id].iconId = iconId,
    _items[id].created = false
    if (func) { _items[id].func = func; }
    if (_bCreated) {
      // page created : add menu
      var desc = _page.getObjectDescriptor();
      var evObj = {};
      evObj[id] = '';
      _page.addEvent(evObj);
      if ((!parentId) || (parentId === '') || (parentId === 'SYSTRAY1')){
        parentId = this.name; // give systray name to the root menu
      }
      res = ctx.actionApp(desc, 'addMenu', 'ADDMENUITEM', parentId, id, '', label, iconId);
      // if callback is defined, add a handler
      if (_items[id].func) {
        this.on(id, _items[id].func);
      }
      _items[id].created = true;
    }
    return res;
  }

 /**
  * @method      autoDisable
  * @summary     Auto-enables or auto-disables a menu item.
  * @description
  * <wrap help> //Example://</wrap>
<code javascript>
systray.autoDisable( "evMenu1", true );
</code>
  * @path        ctx.systrayClass.autoDisable
  * @param       {string} id Menu identifer
  * @param       {boolean} [bAutoDisable] Auto-disable if ''true'' (default), auto-enable if ''false''
  * @return      {*} Return value
  * @private
  */
  this.autoDisable = function (id, bAutoDisable) {
    id = String(id).substring(0, _maxIdLength);
    return this.setParam(id, (bAutoDisable === false) ? 'NOAUTODISABLE' : 'AUTODISABLE');
  }

 /**
  * @method      check
  * @summary     Checks or unchecks a menu item.
  * @description
  * <wrap help> //Example://</wrap>
<code javascript>
systray.check('evMenu1', true);
</code>
  * @path        ctx.systrayClass.check
  * @param       {string} id Menu identifer
  * @param       {boolean} [bCheck] Check if ''true'' (default), uncheck if ''false''
  * @return      {*} Return value
  */
  this.check = function (id, bCheck) {
    id = String(id).substring(0, _maxIdLength);
    return this.setParam(id, (bCheck === false) ? 'UNCHECK' : 'CHECK');
  }

 /**
  * @method      createBarMenu
  * @summary     Creates a menu bar.
  * @description
  *  <wrap help> //Example://</wrap>
  *  <code javascript>menuBar.createBarMenu( ctx.options.projectName, "ICON1" );</code>
  * @path        ctx.systrayClass.createBarMenu
  * @param       {string} label Tooltip
  * @param       {string} [iconId] Icon identifier (default is "ICON1")
  * @param       {string} [iconType] Resource type (executable icon (ICON (default)) or external bitmap file (FILE))
  * @param       {string} [filename] Resource name or icon file
  * @param       {ctx.systrayClass} [systray] Systray object on which route all events
  * @return      {*} Return value
  */
  this.createBarMenu = function (label, iconId, iconType, filename, systray) {
    // dynamically create the page from ExpBar2 extended pilot
    if (!_page)
    _page = _parentProcess.createExtendedConnector(e.extendedConnector.ExpBar, this.name);
    if (!_defaultIconId) _defaultIconId = iconId || 'ICON1';
    if (!_defaultLabel) _defaultLabel = label;

    _bCreated = true;
    this.loadImage(iconId, iconType, filename);
    var desc = _page.getObjectDescriptor();
    var res = ctx.actionApp(desc, 'createBarMenu', 'CREATEBAR', this.name, '', '', label, iconId);
    var it = null;
    // later create menu items
    for (var id in _items) {
      it = _items[id];
      if (it.id && !it.created) {
        this.addMenu(it.parentId, it.id, it.label, it.iconId, it.func);
        it.created = true;
      }
    }
    if (systray && (systray instanceof ctx.systrayClass)) {
      // route all events on the 'systray' object
      var evCallback = {};
      evCallback[ctx.anyEvent] = function(ev) { systray.notify(ev.name); }
      _page.addOn( evCallback);
    }
    return res;
  }

 /**
  * @method      createSystrayMenu
  * @summary     Creates a systray.
  * @description
  *  <wrap help> //Example://</wrap>
  *  <code javascript>systray.createSystrayMenu( ctx.options.projectName, "ICON1", "FILE", "/bmp/chart_pie.png" );</code>
  * @path        ctx.systrayClass.createSystrayMenu
  * @param       {string} label Tooltip text
  * @param       {string} [iconId] Icon identifier (default is "ICON1")
  * @param       {string} [iconType] Resource type (executable icon (ICON (default)) or external bitmap file (FILE))
  * @param       {string} [filename] Resource name or icon file
  * @param       {ctx.systrayClass} [systray] Systray object on which route all events
  * @return      {*} Return value
  */
  this.createSystrayMenu = function (label, iconId, iconType, filename, systray) {
    // dynamically create the page from ExpBar2 extended pilot
    if (!_page)
      _page = _parentProcess.createExtendedConnector(e.extendedConnector.ExpBar, this.name);
    if (!_defaultIconId) _defaultIconId = iconId || 'ICON1';
    if (!_defaultLabel) _defaultLabel = label;

    _bCreated = true;
    var it = null;
    // later load icons
    for (var id in _images) {
      it = _images[id];
      if (it.id && !it.created) {
        this.loadImage(it.id, it.type, it.filename);
        it.created = true;
      }
    }
     this.loadImage(iconId, iconType, filename);
    var desc = _page.getObjectDescriptor();
    var res = ctx.actionApp(desc, 'createSystrayMenu', 'CREATESYSTRAY', this.name, '', '', label, iconId);
    // later create menu items
    for (var id in _items) {
      it = _items[id];
      if (it.id && !it.created) {
        this.addMenu(it.parentId, it.id, it.label, it.iconId, it.func);
        it.created = true;
      }
    }
    if (systray && (systray instanceof ctx.systrayClass)) {
      // route all events on the 'systray' object
      var evCallback = {};
      evCallback[ctx.anyEvent] = function(ev) { systray.notify(ev.name); }
      _page.addOn( evCallback);
    }
    return res;
  }

 /**
  * Deletes a menu item.
  * @method      deleteMenu
  * @description
  * <wrap help> //Example://</wrap>
<code javascript>
systray.deleteMenu( "evMenu1" );
</code>
  * @path        ctx.systrayClass.deleteMenu
  * @param       {string} id Menu identifer
  * @return      {*} Return value
  */
  this.deleteMenu = function (id) {
    id = String(id).substring(0, _maxIdLength);
    var desc = _page.getObjectDescriptor();
    if (_items[id]) { delete _items[id]; }
    return ctx.actionApp(desc, 'deleteMenu', 'DELETE', id);
  }

 /**
  * @method      enable
  * @summary     Enables or disables a menu item.
  * @description
  * <wrap help> //Example://</wrap>
<code javascript>
systray.enable( "evMenu1", false );
</code>
  * @path        ctx.systrayClass.enable
  * @param       {string} id Menu identifer
  * @param       {boolean} [bEnable] Enable if ''true'' (default), disable if ''false''
  * @return      {*} Return value
  */
  this.enable = function (id, bEnable) {
    id = String(id).substring(0, _maxIdLength);
    return this.setParam(id, (bEnable === false) ? 'DISABLE' : 'ENABLE');
  }

 /**
  * @method      flashIcon
  * @summary     Triggers icon flashing.
  * @description
  * <wrap help> //Example://</wrap>
<code javascript>
systray.flashIcon( "ICON2" );
</code>
  * @path        ctx.systrayClass.flashIcon
  * @param       {string} iconId Alternative icon identifier
  * @param       {number} [timer] Timer in ms (default is 2000 ms)
  * @param       {boolean} [enable] Activates or disables the flash effect
  */
  this.flashIcon = function (iconId, timer, enable) {
    timer = timer || 2000;
    var sys = this;
    if (enable) {
      _timerObj = setInterval(function() {
        _alternativeIcon = !_alternativeIcon;
        sys.createSystrayMenu(_defaultLabel, (_alternativeIcon ? _defaultIconId : iconId));
      }, timer);
    } else {
      if (_timerObj)
        clearInterval(_timerObj);
      if (_alternativeIcon) {
        _alternativeIcon = false;
        sys.createSystrayMenu(_defaultLabel, _defaultIconId);
      }
    }
  }

 /**
  * @method      loadImage
  * @summary     Loads a bitmap to be later used as icon in the systray or menu bar.
  * @description
  * <wrap help> //Example://</wrap>
<code javascript>
// Load icon, associated with id 'about'
systray.loadImage( "about", "FILE", e.popup.icon16.help );
...
// Use icon in menu
systray.addMenu( "", "evVersion", GLOBAL.labels.menu.about + " (MESSBOX)", "about");
});
</code>
  * @path        ctx.systrayClass.loadImage
  * @param       {string} [id] Image identifier
  * @param       {string} [type] Type: "FILE" or "ICON"
  * @param       {string} [filename] Image filename
  * @return      {boolean} ''true'' for success, otherwise ''false''
  */
  this.loadImage = function (id, type, filename) {
    id = id || 'ICON1'; // default 'Interactive' icon
    type = type || 'ICON';
    if (_images[id] && _images[id].created)
      return true;
    if (filename && (!ctx.fso.isPathAbsolute(filename))) {
      if ((!filename.startsWith('/')) && (!filename.startsWith('\\')))
        filename = '\\' + filename;
      filename = ctx.options.path.resources + filename;
    }
   //this.images[id] = id;
    // page not yet created : just memorize parameters for later creation
    _images[id] = {
      id: id,
      type: type,
      created: false,
      filename: filename
    };
    if (_bCreated) {
      var desc = _page.getObjectDescriptor();
      var res = ctx.actionApp(desc, 'loadImage', 'LOADIMAGE', id, type, filename);
      _images[id].created = true;
      if (res != '')
        ctx.log('ctx.loadImage (' + id + '): ' + res, e.logIconType.Error);
      return (res == '');
    }
    return true;
  }

 /**
  * @method      notify
  * @summary     Triggers a menu action.
  * @description
  * <wrap help> //Example://</wrap>
<code javascript>
// Send an 'About...' menu notification
systray.notify( "evVersion" );
</code>
  * @path        ctx.systrayClass.notify
  * @param       {string} id Menu identifier
  * @return      {*} Action result
  */
  this.notify = function (id) {
    id = String(id).substring(0, _maxIdLength);
    return _page.notify(id);
  }

 /**
  * @method      on
  * @summary     Sets a callback handler on an menu action.
  * @description
  * <wrap help> //Example://</wrap>
<code javascript>
// 'About...' menu handler
systray.on( "evVersion", function ( ev ) {
  // add your code here
});
</code>
  * @path        ctx.systrayClass.on
  * @param       {string} id Menu identifer
  * @param       {function(ctx.event)} func Callback to be called on event reception
  * @return      {Object} Object to be provided to ''ctx.off()'' to disable listening
  */
  this.on = function (id, func) {
    // memorize parameters for later creation (in case page not yet created)
    id = String(id).substring(0, _maxIdLength);
    _items[id] = _items[id] || { };
    if (func) { _items[id].func = func; }
    if (_bCreated) {
      var evObj = {};
      evObj[id] = '';
      return ctx.on(_page.addEvent(evObj), func);
    }
    return null;
  }

 /**
  * @ignore
  * @method      setParam
  * @summary     Modifies a menu item (checks, disables, ...)
  * @description
  *  <wrap help> //Example://</wrap>
  *  <code javascript>systray.setParam( "evMenu1", "CHECK" );</code>
  * @private     internal use only!
  * @path        ctx.systrayClass.setParam
  * @param       {string} id Event id
  * @param       {string} state
  * @param       {string} [value]
  * @param       {string} [label]
  * @return      {*} Return value
  */
  this.setParam = function (id, state, value, label) {
    id = String(id).substring(0, _maxIdLength);
    var desc = _page.getObjectDescriptor();
    var evObj = {};
    evObj[id] = '';
    _page.addEvent(evObj);
    return ctx.actionApp(desc, 'setParam', 'SETPARAM', id, state, value, label);
  }

 /**
  * @method      setTitle
  * @summary     Updates the title in the systray or menu bar.
  * @description
  *  <wrap help> //Example://</wrap>
  *  <code javascript>systray.setTitle( "In progress..." );</code>
  * @path        ctx.systrayClass.setTitle
  * @param       {string} text Bar title
  * @return      {*} Return value
  */
  this.setTitle = function (text) {
    var desc = _page.getObjectDescriptor();
    return ctx.actionApp(desc, 'setTitle', 'SETTEXT', text);
  }

 /**
  * @method      show
  * @summary     Shows or hides the systray or menu bar.
  * @description
  *  <wrap help> //Example://</wrap>
  *  <code javascript>systray.show( false );</code>
  * @path        ctx.systrayClass.show
  * @param       {boolean} [bShow] Shows if ''true'' (default), hides if ''false''
  * @return      {*} Return value
  */
  this.show = function (bShow) {
    var desc = _page.getObjectDescriptor();
    return ctx.actionApp(desc, 'show', (bShow === false) ? 'HIDE' : 'SHOW');
  }

 /**
  * @method      showBalloon
  * @summary     Displays a balloon message on the systray or menu bar.
  * @description
  * <wrap help> //Example://</wrap>
<code javascript>
systray.showBalloon( ctx.options.projectLabel, "Ready for testing...", e.systray.iconType.Warning, 10000 );
</code>
  * @path        ctx.systrayClass.showBalloon
  * @param       {string} title Balloon title
  * @param       {string} text Balloon text
  * @param       {e.systray.iconType} iconType Icon type (see [[:lib:common:ctx.enum#enumeration_esystrayicontype|e.systray.iconType]])
  * @param       {number} duration Balloon display duration (in ms)
  * @return      {*} Return value
  */
  this.showBalloon = function (title, text, iconType, duration) {
    var desc = _page.getObjectDescriptor();
    return ctx.actionApp(desc, 'showBalloon', 'SHOWBALLOON', this.name, title, text, iconType, duration);
  }

 /**
  * @method      updateMenu
  * @summary     Updates an existing menu in the systray or menu bar.
  * @description
  *  <wrap help> //Example://</wrap>
  *  <code javascript>systray.updateMenu( "", "evVersion", GLOBAL.labels.menu.about, "about" );</code>
  *
  * <WRAP tip>You can use 'snippets' to accelerate development :
  *   * **systray.updateMenu** + 'TAB' :
  *
  *  <code javascript>systray.updateMenu( "", "event", "text", "image" );</code>
  * </WRAP>
  * @path        ctx.systrayClass.updateMenu
  * @param       {string} parentId Parent menu identifier (if empty, menu is a root menu)
  * @param       {string} id Event menu identifier (should be unique)
  * @param       {string} label Menu text
  * @param       {string} [iconId] Icon identifier (loaded in ''ctx.systray.loadImage()'')
  * @return      {*} Return value
  */
  this.updateMenu = function (parentId, id, label, iconId) {
    var res = '';
    id = String(id).substring(0, _maxIdLength);
    if ((!parentId) || (parentId === '')){
      parentId = this.name; // give systray name to the root menu
    }
    if (_bCreated) {
      var desc = _page.getObjectDescriptor();
      res = ctx.actionApp(desc, 'updateMenu', 'ADDMENUITEM', parentId, id, '', label, iconId);
    }
    return res;
  }

};
