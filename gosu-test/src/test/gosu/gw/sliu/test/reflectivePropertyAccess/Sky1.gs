package gw.sliu.test.reflectivePropertyAccess

uses gw.sliu.test.reflectivePropertyAccess.res.C1
uses java.lang.Deprecated
uses java.lang.Integer

/**
 * Created by Sky on 2015/01/29 with IntelliJ IDEA.
 */
class Sky1 {

  static class A{}
  static class B extends A{}


  static class A1 {}
  static class B1 extends A1 { function bar() {}}
  static class C1 {
    @Deprecated
    property get myB() : A1 { return new B1()}
  }

  function foo() {

  }

  static function main(arg : String[]){

    var obj : A = new B()

    var obj2 =  obj as B


    var dd = {1, 2}.countWhere( \ elt -> true)

    print("original: " + obj.IntrinsicType)
    print(obj.toString())
    print(typeof(obj2))
    print(typeof(obj))
    print("xxxxxxxxxxxxxxxxxxxxxxxxxxx")
    if(obj typeis B){
      print("typeis B: " + ((B) obj).IntrinsicType + "xxxxxx" + obj.IntrinsicType)
    }

    if (typeof obj == B){
      print("test1")
    }
    if (typeof obj == A){
      print("test2")
    }

    if(obj typeis A){
      print("typeis A: " +obj.IntrinsicType)
    }

    var x : Object = "nice"
    var strlen = 0
    print(x.Class)

    if( x typeis String ) {
      print(x.Class)
      strlen = x.length
    }


    var h = new C1()
    print(h.myB.IntrinsicType)
    if(h.myB typeis B1) { // Deprecation warning
      h.myB.bar()      //this should work despite @Deprecated
      print(h.myB.toString())
    }


    //    var c1 = new C11()
    //    c1.StreetAddress = "111 1st Street, San Francisco, CA"
    //    c1["StreetAddress"] = "1001 E. Hillsdale Blvd, Foster City, CA"
    //    print(c1.StreetAddress)
    //
    //    c1.Field4 = "test"
    //    c1["Field4"] = "test1"
    //    print(c1.Field4)
  }
}