package gw.sliu.test.others

class Class2 extends Class1 {

  function testMethod1(){
    final var localVar1 : int = 10
    var obj1 : Class1 = new Class1(){
      override function method1(){
        var insideOverrideVar1 : int = localVar1
        print("test")
//        assert(insideOverrideVar1 === localVar1)
//        if(insideOverrideVar1 === localVar1){
//          print("true")
//        }else{
//          print("false")
//        }

      }
    }

    obj1.method1()
  }

  static function main(args: String[]){
    new Class2().testMethod1()
  }


}