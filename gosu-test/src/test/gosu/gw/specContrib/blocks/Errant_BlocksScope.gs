package gw.specContrib.blocks

uses java.lang.Double

class Errant_BlocksScope {

  //Variable Scope
  function testVariableScope() {
    var captured = 10
    var addTo10 = \x: Double -> captured + x
    var myresult = addTo10(10)


    var myblock111 = \x: Double -> x + captured + BlockInterface.BLOCKCONST1
    var result1111 = myblock111(5)
    captured = 15
    result1111 = myblock111(5)
  }

}