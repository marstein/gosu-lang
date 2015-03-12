package gw.sliu.test.memberVisibilityByDefault.p1

uses gw.sliu.test.memberVisibilityByDefault.p0.C1
uses gw.sliu.test.memberVisibilityByDefault.p0.JavaClass1
//uses gw.sliu.test.memberVisibilityByDefault.p0.C1.Transformer1
//uses gw.sliu.test.memberVisibilityByDefault.p0.C1.Transformer2

/**
 * Created by Sky on 2015/03/05 with IntelliJ IDEA.
 */
class C11 {

//  class ImplC1innerInterface1 implements C1.i1{}        // showing error in OSGosu. C1.i1 inner interface only has internal access
//  class ImplC1innerInterface2 implements C1.i2{}        // showing error in OSGosu. C1.i2 inner interface only has internal access

  var x = C1.enumX.TEST
  var y = C1.enumY.TEST
  //  var obj2 = (new C1()).new innerC1()    // Gosu doesn't support instantiation of an 'instance inner class'
  var obj3 = new C1.innerC2()
  var obj1 = new C1()
  var prop1 = obj1.Prop1

  var int1 = obj1.m1()

  class ClassTransformer{
    function transform(){}
  }
//  var struct1 : C1.Transformer1 =  new ClassTransformer()
//  var struct2 : C1.Transformer2 =  new ClassTransformer()

  var prop3 = obj1.p3
  function test1(){
    obj1.p3 = 10
  }

  var prop4 = obj1.p4
  var prop5 = C1.p4


  function test3(){
    var obj4 = new C1();
    var obj5 = new C1("Good");

    obj4.myMethod()
    var str1 = obj4.myProperty
  }

  static function main(args : String[]){
    var newObj = new C11()
    newObj.test3()

    var anotherObj = new JavaClass1();
    JavaClass1.innerClass1;

  }

  var x10 = C1.MyAnno
  var x12 = C1.MyAnno1



}