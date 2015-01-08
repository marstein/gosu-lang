package gw.sliu.test.tryCatch

uses java.lang.RuntimeException
uses java.lang.Exception
uses java.lang.OutOfMemoryError


class CatchClauseTest {

  final enum x2 {TEST1, TEST2}

  function testMultiCatch(){
    try{
      throw new RuntimeException()
    }catch(e1 : RuntimeException | OutOfMemoryError){
      print("in multi catch clause")
    }
  }


  function testMultiParameterInCatch(){
    try{
      throw new RuntimeException()
    }catch(e1 : RuntimeException, e2 : OutOfMemoryError){
      print("in multi-parameter catch clause")
    }
  }


  function testMultiCatchClause1(){
    try{
      var e = "test"
      throw new RuntimeException()
    }catch(e : RuntimeException){
      print("RuntimeException")
    }catch(e : OutOfMemoryError){
      print("OutOfMemmoryError")
    }catch(e : Exception){
      print("Exception")
    }
  }

  function testMultiCatchClause2(){
    try{
      throw new RuntimeException()
    }catch(e : Exception){
      print("Exception")
    }catch(e : RuntimeException){    // <-- Error flag should be shown here
      print("RuntimeException")
    }
  }

}