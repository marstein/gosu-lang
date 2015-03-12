package gw.sliu.test.delegateTest.gosuDelegate

/**
 * Created by sliu on 3/11/2015.
 */
interface IClipboardPart {
  function canCopy() : boolean
  function copy() : void
  function canPaste() : boolean
  function paste() : void
}