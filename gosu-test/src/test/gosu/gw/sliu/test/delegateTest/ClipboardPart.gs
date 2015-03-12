package gw.sliu.test.delegateTest

/**
 * Created by sliu on 3/11/2015.
 */
class ClipboardPart implements IClipboardPart {
  var _myOwner : Object

  construct(owner : Object) {
    _myOwner = owner
  }

  // this is an ACTUAL implementation of these methods...
  override function canCopy() : boolean { return true }
  override function copy() : void { print("Copied!")}
  override function canPaste() : boolean { return true }
  override function paste() : void { print("Pasted!") }
  function foo() : void { print("Pasted!") }

}