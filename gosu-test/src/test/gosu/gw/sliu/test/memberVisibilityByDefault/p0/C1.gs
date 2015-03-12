package gw.sliu.test.memberVisibilityByDefault.p0

uses java.lang.Runnable
uses java.lang.Comparable
uses java.lang.Integer

/**
 * Created by Sky on 2015/03/05 with IntelliJ IDEA.
 */
 class C1 implements Runnable, Comparable<Integer>{
   // To-Do
   // * access Java field/method   (done)

  // instance members
  var f1 = 1
  function m1() : int {return 0}
  var p1 :int as Prop1 = 10
  construct() {print("test")}
  construct(str : String) {print(str)}
  class innerC1{}             // this inner class is an instance member
  property get p3() : int {return 1}
  property set p3(o : int){p3 = o}
  delegate d represents Runnable = \  -> {  }



  // class members
  public static var f2 : int = 2
  static var p2 : int as Prop2
  static function m2() : int {return 0}

  enum enumX {TEST}          // 'inner enum' is actually a class member according to bytecode (i.e. static innerClass)
  static enum enumY {TEST}

  interface i1{}             // 'inner interface' is actually a class member according to bytecode (i.e. "static abstract INNERCLASS")
  static interface i2{}

  static class innerC2{}     // this inner class is a class member

  structure Transformer1 { function transform() }              // this 'structure' is actually a class member according to bytecode (i.e. "static abstract INNERCLASS")
  static structure Transformer2 { function transform() }

  static property get p4() : int {return 1}
  static property set p4(o : int){p4 = o}

   annotation MyAnno {}            // this 'annotation' is actually a class member according to bytecode (i.e. "static abstract INNERCLASS")
   static annotation MyAnno1 {}

   override function compareTo(o: Integer): int {  return 0  }
   override function run() {}
}