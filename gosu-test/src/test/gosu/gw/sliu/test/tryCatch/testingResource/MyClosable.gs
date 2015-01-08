package gw.sliu.test.tryCatch.testingResource

uses java.io.Closeable

/**
 * Created by Sky on 2015/01/08 with IntelliJ IDEA.
 */
class MyClosable implements Closeable {
  override function close(){
    print("MyClosable closed!")
  }

  function doIt(){
    print("MyClosable doing it!")
  }
}