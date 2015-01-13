package gw.sliu.test.statements.forLoop

uses java.util.ArrayList
uses java.util.Arrays

/**
 * Created by Sky on 2015/01/12 with IntelliJ IDEA.
 */
class ForLoopBasicTest {
  function testMethod(){
      for(j in 0..10){}

    for (var i in 0..5 ) {   // Range from 0 through 5
//      print(i) // Prints 0-5
    }

    // Range from 0 up to 5
    for ( i in 0..|5 ) {
//      print (i) // Prints 0-4
    }

    // Range from 1 up to 5
    for ( i in 0|..|5 ) {
      print ( i ) // Prints 1-4
//      print("test")
    }

    for(1..5){
      print("test")
    }

     for(i in 100){
       print(i + " of 100")
     }
  }


  function testForLoopWithIterator(){
    var testScores = new Number[] {91, 75, 97, 100, 89, 99}
    var highIndex = 0

    for( score in testScores index i ) {
      if( score > testScores[highIndex] ) { highIndex = i }
    }
  }

  function testForEachLoopArray(){
    var array = {1,4,5,7}
    for (x in array){
      print(x)
    }

    for ( name in  {"John" , "Mary", "David"} ){
      print(name)
    }
  }

  function testForEachLoopList(){
    var testList = new ArrayList<String>(Arrays.asList({"x", "y", "z"}))
    var testList1 = new ArrayList<String>({"x","y","z"})

    for (i in testList1){
      print(i)
    }

  }

  function testForEachLoopMap(){
    var mapColorsByName = new java.util.HashMap()

    mapColorsByName.put( new java.awt.Color( 1, 0, 0 ), "red" )
    mapColorsByName.put( new java.awt.Color( 0, 1, 0 ), "green" )
    mapColorsByName.put( new java.awt.Color( 0, 0, 1 ), "blue" )

    for( color in mapColorsByName.values().iterator() ) {
      print( color )
    }

  }

  function testForLoopExampleInGosuDoc(){
    // Example 1: Prints all the letters with the index.
    for( var letter in "a b c d e".split(" ") index i ) {
      print( "Letter " + i + ": " + letter )
    }

    // Example 3: Prints numbers 0 - 99 using simple iteration.
    for( i in 100 ) {


      print( i + " of 100" )
    }
  }


}