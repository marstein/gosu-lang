package gw.sliu.test.delegateTest
/**
 * Created by Sky on 2015/03/11 with IntelliJ IDEA.
 */
interface IClipboardPart2 {
  function canCopy() : boolean
  function copy() : void
  function canPaste() : boolean
  function paste() : void
  function foo() : void
}