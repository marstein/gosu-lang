package gw.sliu.test.tryCatch

uses java.lang.Exception
uses java.lang.OutOfMemoryError
uses java.lang.RuntimeException
uses gw.sliu.test.tryCatch.testingResource.MySpecialException

class BasicTest {

   function testMethod1(){
     try{

     }catch(e : Exception){

     }finally{
       break       // <- expected warning
       continue    // <- expected warning
       return      // <- warning should appear accourding to gosu doc
     }
   }

  function testMethod2(){
    try{
    }

      try{
        print("in try block")
        throw new RuntimeException()
      }catch(e : Exception){
        print("in catch block")
      }
  }

  function testMethod2_1(){
    try{
      print("in try block")
      throw new RuntimeException()
    }catch(e : OutOfMemoryError){
      print("in catch block")
    }

    try{
      print("in try block")
    }finally{
      print("in finally block")
    }
  }


  function testMethod3(){
      try{
        print("in try block")
        throw new RuntimeException()
      }finally{
        print("in finally block")
      }

      print("reach this line.")
  }


  function testMethod3_1(){
    try{
      print("in try block")
    }finally{
      print("in finally block")
      throw new RuntimeException()
    }

    print("reach this line.")         // <- should have 'unreachable statement' warning here
  }



  function testMethod4(){
      try{
        print("in try block")
        throw new RuntimeException()
      }catch(e : Exception){
        print("in catch block")
      }finally{
        print("in finally block")
      }

      print("reach this line.")
  }


  function testMethod5(){
    try{
      print("in try block")
    }catch(e : Exception){
      print("in catch block")
      throw new RuntimeException()
    }finally{
      print("in finally block")
    }

    print("reach this line.")
  }


  function testMethod7(){
    try{
      print("in try block")
    }catch(e : Exception){
      print("in catch block")
    }finally{
      print("in finally block")
      throw new RuntimeException()
    }

    print("reach this line.")              // <- should have 'unreachable statement' warning here
  }


  function testMethod8(){
    try{
      print("in try block")
      throw new RuntimeException()
    }catch(e : Exception){
      print("in catch block")
      throw new RuntimeException()
    }finally{
      print("in finally block")
    }

    print("reach this line.")
  }


  function testMethod9(){
    try{
      print("in try block")
      throw new RuntimeException()
    }catch(e : CatchClauseTest){         //  <-- (As expected) should flag if parameter type is not subclass of 'Throwable'
      print("in catch block")
      throw new RuntimeException()
    }finally{
      print("in finally block")
    }
  }

  function testMethod10(){
    try{
      print("in try block")
      throw new RuntimeException()
    }catch(e : MySpecialException<T>){    //  <-- (As expected) should flag if  if a type variable is used in the denotation of the type of an exception parameter.
      print("in catch block")
      throw new RuntimeException()
    }finally{
      print("in finally block")
    }
  }


  public static function main(arg : String[]){
    var o : BasicTest = new BasicTest()
    o.testMethod2_1();
    o.testMethod3_1();
    o.testMethod4();
    o.testMethod5();
    o.testMethod7();
  }


}