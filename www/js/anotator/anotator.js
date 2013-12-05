goog.require('templates');
goog.require('goog.dom');
goog.require('goog.style');
goog.require('goog.ui.tree.TreeControl');
goog.require('goog.dom.ViewportSizeMonitor');
goog.require('goog.events');
goog.require('goog.events.EventType');
goog.require('goog.string');
goog.require('goog.ui.LabelInput');
goog.require('goog.events.KeyCodes');
goog.require('goog.ui.KeyboardShortcutHandler');
goog.require('goog.net.XhrIo');
goog.require('goog.dom.dataset');
goog.require('goog.string');
goog.require('goog.json');
goog.require('goog.ui.CharPicker');
goog.require('goog.i18n.CharPickerData');
goog.require('goog.i18n.uChar.LocalNameFetcher');


goog.provide('app.Anotator');

/**
 * @constructor
 */
app.Anotator = function() {

  this.dirty = false;

  var el = goog.dom.getElement("root");

  this.username = goog.dom.dataset.get(el, "username");
  this.dir = goog.dom.dataset.get(el, "dir");
  this.file = goog.dom.dataset.get(el, "file");

  this.exampleData = {
    "anotations": ["hello", "www", ["world", ["a","b","c","d","E"]],"XXXee"]
  };

  this.load();
};

app.Anotator.prototype.load = function() {
  var xhr = new goog.net.XhrIo();
  
  goog.events.listen(xhr, goog.net.EventType.COMPLETE, function(e) {
    if (e.target.getStatus() != 200){
      alert("Sorry, I cant't load this annotation. :(");
      return;
    }
    this.data = e.target.getResponseJson();;
    this.drawScheme(this.data);
  }, false, this);
  
  xhr.send("/api_get/" + this.dir + "/" + this.file);
}

/**
 * Create DIV, append as 1st into BODY and insert content from template
 */
app.Anotator.prototype.drawScheme = function(data) {
  var helloElement = goog.dom.createDom('div', {
    'id': 'container'
  });

  var url = "/img/" + this.dir + "/" + this.file;

  goog.soy.renderElement(helloElement, templates.anotation, {
    imageUrl: url,
    username: this.username,
    dir: this.dir,
    file: this.file,
    noText: this.data['noText'],
    dontUnderstandLanguage: this.data['dontUnderstandLanguage'],
    notes: this.data['notes'],
    saveTimes: [],
    position: ((this.data["prevAndNext"][2] + 1) + "/" + this.data["prevAndNext"][3])
  });

  goog.dom.insertChildAt(goog.dom.getDocument().body, helloElement, 0);

  var lhs = new goog.ui.Component();
  var rhs = new goog.ui.Component();

  // Set up splitpane with already existing DOM.
  var splitpane1 = new goog.ui.SplitPane(lhs, rhs,
      goog.ui.SplitPane.Orientation.HORIZONTAL);
  splitpane1.decorate(document.getElementById('split-container'));
  this.makeTree(data['anotations']);
  this.inputComponent();
  this.setHeight();
  this.globalShortcuts();


  var picker = new goog.ui.CharPicker(new goog.i18n.CharPickerData(),
        new goog.i18n.uChar.LocalNameFetcher(),
        ["\uD869\uDED6", "a", "b", "c"], 10, 1);
  var el = goog.dom.getElement('char-picker');
  picker.decorate(el);
  this.picker = picker;

  goog.events.listen(picker, 'action', this.getCharFromPicker, false, this);


  var myThis = this;
  this.startTime = Date.now();
  setInterval(
    function () {
      var time = Date.now() - myThis.startTime;
      var el = goog.dom.getElement("timer");

      var sec = Math.floor(time / 1000);
      var min = Math.floor(sec / 60);
      var hours = Math.floor(min / 60);

      goog.dom.setTextContent(el, hours + "h " + (min % 60) + "m " + (sec % 60) + "s");
    }
  ,200);

  var vsm = new goog.dom.ViewportSizeMonitor();
  goog.events.listen(vsm, goog.events.EventType.RESIZE, this.setHeight);

  var img = goog.dom.getElement("anotation-img");
  goog.events.listen(
    img,
    goog.events.EventType.CLICK,
    function (e) {
      goog.dom.classes.toggle(goog.dom.getElement("anotation-img"), "img-full");
    }
  );

  goog.events.listen(
    goog.dom.getElement("more-options-show"),
    goog.events.EventType.CLICK,
    function (e) {
      goog.dom.classes.toggle(goog.dom.getElement("more-options-show"), "hide");
      goog.dom.classes.toggle(goog.dom.getElement("more-options"), "hide");
    }
  );

  var saveEl = goog.dom.getElement("save");
  goog.events.listen(saveEl, goog.events.EventType.CLICK, this.saveHandler, false, this);

  goog.events.listen(goog.dom.getElement("prev"), goog.events.EventType.CLICK, this.saveHandler, false, this);
  goog.events.listen(goog.dom.getElement("next"), goog.events.EventType.CLICK, this.saveHandler, false, this);

  window.onbeforeunload = function(e) {
    if (myThis.dirty) {
      return "You have unsaved changes. Do you really want to leave this anotation?"
    } else {
      return;
    }
  };
};

app.Anotator.prototype.toggleCase = function() {
  var el = this.inputElement.getElement();
  var val = el.value;
  var up = val.toUpperCase();
  if (up == val) {
    up = val.toLowerCase();
  }
  el.value = up;
}

app.Anotator.prototype.getCharFromPicker = function(e) {
  var newChar = this.picker.getSelectedChar();
  var tmpVal = this.inputElement.getElement().value;
  this.inputElement.getElement().value = tmpVal + newChar;
  this.inputElement.getElement().focus();

}

app.Anotator.prototype.globalShortcuts = function() {
  var shortcutHandler = new goog.ui.KeyboardShortcutHandler(goog.dom.getElement("split-container"));
  
  shortcutHandler.registerShortcut('save', 'meta+S');
  shortcutHandler.registerShortcut('save', 'ctrl+S');

  shortcutHandler.registerShortcut('next', 'meta+shift+right');
  shortcutHandler.registerShortcut('next', 'ctrl+shift+right');

  shortcutHandler.registerShortcut('prev', 'meta+shift+left');
  shortcutHandler.registerShortcut('prev', 'ctrl+shift+left');

  goog.events.listen(
        shortcutHandler,
        goog.ui.KeyboardShortcutHandler.EventType.SHORTCUT_TRIGGERED, this.handleGlobalShortcuts,
        false, this
  );
}

app.Anotator.prototype.handleGlobalShortcuts = function(shortcut) {
  var el = goog.dom.getElement(shortcut.identifier);
  el.click();
  return false;
}

app.Anotator.prototype.makeTree = function(anotations) {
  var treeConfig = goog.ui.tree.TreeControl.defaultConfig;
  var tree = new goog.ui.tree.TreeControl('root', treeConfig);

  //var data = ["hello", "www", ["world", ["a","b","c","d","E"]],"XXX"];

  this.createTreeFromTestData(tree, anotations);

  tree.render(document.getElementById('tree-container'));
  tree.expandAll();
  this.tree = tree;

  var shortcutHandler = new goog.ui.KeyboardShortcutHandler(tree.getContentElement());
  shortcutHandler.registerShortcut('ESC', 'esc');
  shortcutHandler.registerShortcut('DELETE', 'delete');
  
  shortcutHandler.registerShortcut('UP', 'meta+up');
  shortcutHandler.registerShortcut('UP', 'ctrl+up');

  shortcutHandler.registerShortcut('DOWN', 'meta+down');
  shortcutHandler.registerShortcut('DOWN', 'ctrl+down');

  shortcutHandler.registerShortcut('LEFT', 'meta+left');
  shortcutHandler.registerShortcut('LEFT', 'ctrl+left');

  shortcutHandler.registerShortcut('RIGHT', 'meta+right');
  shortcutHandler.registerShortcut('RIGHT', 'ctrl+right');

  shortcutHandler.registerShortcut('CUT', 'meta+x');
  shortcutHandler.registerShortcut('CUT', 'ctrl+x');

  shortcutHandler.registerShortcut('PASTE', 'meta+v');
  shortcutHandler.registerShortcut('PASTE', 'ctrl+v');

  shortcutHandler.registerShortcut('EDIT', 'meta+e');
  shortcutHandler.registerShortcut('EDIT', 'ctrl+e');

  goog.events.listen(
        shortcutHandler,
        goog.ui.KeyboardShortcutHandler.EventType.SHORTCUT_TRIGGERED, this.handleTree,
        false, this
  );

  this.tree.getHandler().listen(
        goog.dom.getElement("tree-container"),
        goog.events.EventType.DBLCLICK, this.doubleClick,
        false, this
  );

}

app.Anotator.prototype.doubleClick = function() {
  var node = this.tree.getSelectedItem();
  if (node.getChildren().length != 0) {
    return;
  }
  var old = node.getText();
  var newVal = window.prompt("Set text value:",old);
  if (newVal.length > 0) {
    node.setText(newVal);
  }
}

app.Anotator.prototype.handleTree = function(shortcut) {
  switch (shortcut.identifier){
    case "EDIT":
      this.doubleClick();
      break;
    case "ESC":
      this.inputElement.getElement().focus();
      break;
    case "DELETE":
      if (this.tree.getSelectedItem().getParent()){
        this.tree.getSelectedItem().getParent().removeChild(this.tree.getSelectedItem());
      }
      this.dirty = true;
      break;
    case "UP":
      var node = this.tree.getSelectedItem();
      if (node.getChildren().length != 0) {
        return;
      }
      var parent = node.getParent();

      var prev = node.getPreviousShownNode();
      if (!prev) {
        return;
      }


      if (node.getPreviousShownNode().getParent() == parent) {
        var index = parent.indexOfChild(node);
        parent.removeChild(node);
        parent.addChildAt(node, index - 1);
        this.tree.setSelectedItem(node);
      } else {
        var newNode = node;
        while (true){
          newNode = newNode.getPreviousShownNode();
          if (! newNode){
            return;
          }
          if (! newNode.getFirstChild()){
            break;
          }
        }
        var newParent = newNode.getParent();
        if (! newParent) {
          return;
        }

        node.getParent().removeChild(node);
        var index = newParent.indexOfChild(newNode);
        newParent.addChildAt(node, index + 1);
        this.tree.setSelectedItem(node);

      }

      this.dirty = true;
      break;
    
    case "DOWN":
      var node = this.tree.getSelectedItem();
      if (node.getChildren().length != 0) {
        return;
      }
      var parent = node.getParent();
      var next = node.getNextShownNode();
      if (!next) {
        return;
      }
      if (next.getParent() == parent && ! next.hasChildren()) {
        var index = parent.indexOfChild(node);
        parent.removeChild(node);
        parent.addChildAt(node, index + 1);
        this.tree.setSelectedItem(node);
      } else {
        var newNode = node;
        while (true){
          newNode = newNode.getNextShownNode();
          if (! newNode.getFirstChild()){
            break;
          }
        }
        var newParent = newNode.getParent();
        if (! newParent) {
          return;
        }

        var index = newParent.indexOfChild(newNode);
        node.getParent().removeChild(node);
        newParent.addChildAt(node, index);
        this.tree.setSelectedItem(node);

      }
      this.dirty = true;
      break;

    case "RIGHT":
      var node = this.tree.getSelectedItem();
      if (node.hasChildren()) {
        return;
      }
      var newNode = node.getTree().createNode(node.getText());
      node.setHtml('&nbsp;&nbsp;&nbsp;&nbsp');
      node.add(newNode);
      this.tree.setSelectedItem(newNode);
      this.dirty = true;
      break;

    case "RIGHT_OLD":
      return;
      var node = this.tree.getSelectedItem();
      if (node.getChildren().length != 0) {
        return;
      }
      var text = node.getText();
      node.setHtml("&nbsp;&nbsp;&nbsp;&nbsp");
      var newNode = node.getTree().createNode('');
      node.getParent().removeChild(node);
      node.add(newNode);
      this.dirty = true;
      break;
    case "LEFT":
      var node = this.tree.getSelectedItem();
      var parent = node.getParent();
      var grandParent = parent.getParent();
      if (!grandParent) {
        return;
      }
      parent.removeChild(node);
      grandParent.add(node);
      this.tree.setSelectedItem(node);
      this.dirty = true;
      break;
    case "CUT":
      if (this.tree.getSelectedItem()) {
        this.clipboardNode = this.tree.getSelectedItem();
        if (this.clipboardNode.getParent()) {
          this.clipboardNode.getParent().remove(this.clipboardNode);
        }
      }
      this.dirty = true;
      break;

    case "PASTE":
      if (this.tree.getSelectedItem() && this.clipboardNode) {
        var node = this.tree.getSelectedItem();
        if (!node.getFirstChild()){
          node = node.getParent();
        }
        node.add(this.clipboardNode);
        this.clipboardNode = null;
      }
      this.dirty = true;
      break;
  }
  this.tree.expandAll();
  this.refresh();
}

app.Anotator.prototype.refresh = function(){
  this.tree.setShowLines(false);
  this.tree.setShowLines(true);
}

app.Anotator.prototype.getAnotations = function() {
  var node = this.tree.getSelectedItem();
  while (node.getParent()){
    node = node.getParent();
  }
  var ret = this.getNodeAnotations(node);
  if (goog.isArrayLike(ret)) {
    return ret;
  } else {
    return [];
  }
}

app.Anotator.prototype.getNodeAnotations = function(node) {
  var children = node.getChildren();
  if (children.length > 0) {
    var ret = [];
    goog.array.forEach(children, function(item) {
      ret.push(this.getNodeAnotations(item));
    }, this);
    return ret;
  } else {
    return node.getText();
  }
}

app.Anotator.prototype.createTreeFromTestData = function(node, data) {
  node.setHtml("&nbsp;&nbsp;&nbsp;&nbsp;");
  if (data.length > 0) {
    var children = data;
    for (var i = 0; i < children.length; i++) {
      var child = children[i];
      var childNode = node.getTree().createNode('');

      node.add(childNode);

      if (goog.isArrayLike(data[i])){
        this.createTreeFromTestData(childNode, data[i]);
      } else {
        childNode.setText(data[i]);
      }

    }
  }
}

app.Anotator.prototype.inputComponent = function() {
  this.inputElement = new goog.ui.LabelInput();
  var inputElement = this.inputElement;
  inputElement.decorate(goog.dom.getElement('main-input'));
  inputElement.focusAndSelect();

  var shortcutHandler = new goog.ui.KeyboardShortcutHandler(inputElement.getContentElement());
  shortcutHandler.registerShortcut('ESC', 'esc');
  shortcutHandler.registerShortcut('ENTER', 'enter');
  shortcutHandler.registerShortcut('CMD_ENTER', 'meta+enter');
  shortcutHandler.registerShortcut('CMD_ENTER', 'ctrl+enter');

  shortcutHandler.registerShortcut('CASE', 'meta+k');
  shortcutHandler.registerShortcut('CASE', 'ctrl+k');

  goog.events.listen(
        shortcutHandler,
        goog.ui.KeyboardShortcutHandler.EventType.SHORTCUT_TRIGGERED, this.handleInput,
        false, this
  );
}

app.Anotator.prototype.handleInput = function(shortcut) {

  if (shortcut.identifier == "ENTER") {
    var value = this.inputElement.getValue();
    value = goog.string.trim(value);
    if (value == "") {
      alert("Can't add empty string!");
      return;
    }

    var node = this.tree.getSelectedItem();
    if (!node.getFirstChild() && node.getParent()){
      node = node.getParent();
    }
    var newNode = node.getTree().createNode(value);
    node.add(newNode);
    this.inputElement.clear();
    this.dirty = true;
  } else if (shortcut.identifier == "CMD_ENTER") {
    var value = this.inputElement.getValue();
    value = goog.string.trim(value);
    if (value == "") {
      alert("Can't add empty string!");
      return;
    }

    var node = this.tree.getSelectedItem();

    if (!node.getFirstChild()  && node.getParent()){
      node = node.getParent();
    }

    var newNodeFolder = node.getTree().createNode("&nbsp;&nbsp;&nbsp;&nbsp;");
    var newNode = node.getTree().createNode(value);
    node.add(newNodeFolder);
    newNodeFolder.add(newNode);
    this.inputElement.clear();
    this.tree.expandAll();
    this.tree.setSelectedItem(newNodeFolder);
    this.dirty = true;
  } else if (shortcut.identifier == "CASE") {
    this.toggleCase();
  } else {
    this.tree.getElement().focus();
  }
}

app.Anotator.prototype.setHeight = function() {
  var height = goog.dom.getViewportSize().height;
  var container;

  container =  goog.dom.getElementByClass('goog-splitpane-first-container');
  goog.style.setHeight(container, height);

  container =  goog.dom.getElementByClass('goog-splitpane-second-container');
  goog.style.setHeight(container, height);

  container =  goog.dom.getElementByClass('goog-splitpane-handle');
  goog.style.setHeight(container, height);

  container =  goog.dom.getElement('split-container');
  goog.style.setHeight(container, height);
}

app.Anotator.prototype.saveHandler = function(event) {

  var value = this.inputElement.getValue();
  value = goog.string.trim(value);
  if (value != "") {
    alert("You have nonempty string in input box. Add it into annotation tree or delete it before saving.");
    return;
  }


  this.dirty = false;

  goog.style.setElementShown(goog.dom.getElement("save-buttons"), false);

  this.lastSaveAction = event.target.id;


  this.data['anotations'] = this.getAnotations();

  this.data['noText'] = goog.dom.getElement("noText").checked;
  this.data['dontUnderstandLanguage'] = goog.dom.getElement("dontUnderstandLanguage").checked;

  this.data['notes'] = goog.dom.getElement("notes").value;


  var xhr = new goog.net.XhrIo();
  
  goog.events.listen(xhr, goog.net.EventType.COMPLETE, function(e) {
    goog.style.setElementShown(goog.dom.getElement("save-buttons"), true);
    if (e.target.getStatus() != 200){
      alert("Sorry, I cant't save that :(");
      return;
    } else {

      switch (this.lastSaveAction){
        case "save":
          alert("Saved");
          break;
        case "prev":
          window.location = "/anotate/" + this.data['dir'] + "/" + this.data["prevAndNext"][0];
          break;
        case "next":
          window.location = "/anotate/" + this.data['dir'] + "/" + this.data["prevAndNext"][1];
          break;
      }
    }

  }, false, this);
  
  var str = this.data;

  //JSON.stringify(

  str = goog.json.serialize(str);
  str = goog.string.urlEncode(str);

  xhr.send("/api_save/" + this.dir + "/" + this.file, "POST", str);
}
