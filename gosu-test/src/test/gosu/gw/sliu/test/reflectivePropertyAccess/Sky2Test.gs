package gw.sliu.test.reflectivePropertyAccess

uses gw.sliu.test.reflectivePropertyAccess.res.C2
uses gw.BaseVerifyErrantTest
uses gw.specification.expressions.elementAccessExpression.p0.MyClass
uses java.lang.Integer

/**
 * Created by Sky on 2015/03/03 with IntelliJ IDEA.
 */
class Sky2Test extends BaseVerifyErrantTest{

    function testBasic() {
      var i : int
      var x : char

      var j : dynamic.Dynamic = {1,2,3}
      i = j[0]
      j[0] = 8
      j[new Integer(0)] = 6
      var j1 : dynamic.Dynamic = {"A"-> 'a', "B"-> 'b', "C" -> 'c'}
      x = j1["A"]
      j1['A'] = 'x'                  // EvaluationException: The type, java.util.HashMap, is not coercible to an indexed-writable array.
      var j2 : dynamic.Dynamic = new MyClass()
      i = j2["A"] as int
      j2["A"] = 8                    // java.lang.ClassCastException: java.lang.String cannot be cast to java.lang.Integer
    }


}