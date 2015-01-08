package gw.sliu.test.tryCatch

uses java.lang.Exception

class NestedTryCatchTest {

     function test2LayerNestedTryCatchFinallyStatement(){
       try {
         print( "Outer TRY running..." )
         try {
           print( "Nested TRY running..." )
           throw "an error"
         }
             catch(e : Exception) {
               print( "Nested CATCH caught "+e )
               throw e + " rethrown"
             }
             finally { print( "Nested FINALLY running..." ) }
       }
           catch(e : Exception) { print( "Outer CATCH caught " + e ) }
           finally { print( "Outer FINALLY running" ) }
     }


  function test3LayerNestedTryCatchFinallyStatement(){
    try {
      print( "Outer TRY running..." )
      try {
        print( "Nested TRY running..." )
        throw "an error"
      }
          catch(e : Exception) {
            try{
              print( "Nested CATCH caught "+e )
              throw e + " rethrown"
            }catch(e1 : Exception){
               throw e1
            }finally{
              print("In the inner-most layer of nested 'finally' block")
            }

          }
          finally { print( "Nested FINALLY running..." ) }
    }
        catch(e : Exception) { print( "Outer CATCH caught " + e ) }
        finally { print( "Outer FINALLY running" ) }
  }


  static function main(arg : String[]){
    var o = new NestedTryCatchTest()
    o.test2LayerNestedTryCatchFinallyStatement()
    o.test3LayerNestedTryCatchFinallyStatement()

  }
}