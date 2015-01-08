package gw.sliu.test.tryCatch

uses java.lang.Exception
uses java.lang.RuntimeException
uses java.sql.SQLException

/**
 * Created by Sky on 2015/01/08 with IntelliJ IDEA.
 */
class TryCatchFinallyRuntimeTest {

  function testExceptionPropagation1(){
    print("test case #1")
    try{
      try{
        print("in try block")
        throw new RuntimeException("from test#1")
      }catch(e : Exception){
        print("in catch block")
      }finally{
        print("in finally block")
        throw new SQLException("from test#1")
      }
    }catch(e : Exception){
      e.printStackTrace()
    }
  }

  function testExceptionPropagation2(){
    print("test case #2")
    try{
      try{
        print("in try block")
        throw new RuntimeException("from test#2")
      }catch(e : Exception){
        print("in catch block")
        throw new SQLException("from test#2")
      }finally{
        print("in finally block")
      }
    }catch(e : Exception){
      e.printStackTrace()
    }
  }


  function testExceptionPropagation3(){
    print("test case #3")
    try{
      try{
        print("in try block")
        throw new RuntimeException("from test#3")
      }catch(e : Exception){
        print("in catch block")
        throw new SQLException("from test#3")
      }finally{
        print("in finally block")
        throw new RuntimeException("from test#3")
      }
    }catch(e : Exception){
      e.printStackTrace()
    }
  }


  function testExceptionPropagation4(){
    print("test case #4")
    try{
      try{
        print("in try block")
      }catch(e : Exception){
        print("in catch block")
      }finally{
        print("in finally block")
        throw new RuntimeException("from test#4")
      }
    }catch(e : Exception){
      e.printStackTrace()
    }
  }

  public static function main(args: String[]) {
    var o1 = new TryCatchFinallyRuntimeTest()
    o1.testExceptionPropagation1()
    o1.testExceptionPropagation2()

    var o2 = new TryCatchFinallyRuntimeTest()
    o2.testExceptionPropagation3()
    o2.testExceptionPropagation4()


  }
}