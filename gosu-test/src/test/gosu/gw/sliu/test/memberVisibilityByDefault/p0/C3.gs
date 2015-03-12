package gw.sliu.test.memberVisibilityByDefault.p0
/**
 * Created by Sky on 2015/03/09 with IntelliJ IDEA.
 */
class C3 {
  // To-Do
  // * constructor
  // * access Java field/method

  // instance members
  var f1 = 1
  function m1(){}
  var p1 :int as Prop1
  construct(){}




  // class members
  static var f2 = 2
  static var p2 : int as Prop2
  static function m2(){}

  enum enumX {TEST}          // 'enum' is essentially final static innerClass according to bytecode
  static enum enumY {TEST}

  interface i1{}             // 'interface' inside a class is essentially "static abstract INNERCLASS" according to bytecode
  static interface i2{}

  class innerC1{}           // this inner class is an instance member
  static class innerC2{}    // this inner class is a class member

}
