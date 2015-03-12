package gw.sliu.test.delegateTest.gosuDelegate

/**
 * Created by sliu on 3/11/2015.
 */
class MyWindow implements IClipboardPart {
  delegate _clipboardPart represents IClipboardPart

  construct() {
    _clipboardPart = new ClipboardPart( this )
  }

  public static function main(args : String[]){
    var a = new MyWindow()

    // call a method handled on the delegate
    a.paste()
  }


}