package gw.sliu.test.arrayExpansion_listExpansion

uses gw.sliu.test.arrayExpansion_listExpansion.res.C1

uses java.lang.Integer
uses java.util.ArrayList
uses java.lang.Iterable
uses java.util.Iterator
uses java.lang.Float

/**
 * Created by Sky on 2015/01/14 with IntelliJ IDEA.
 */
class Sky1 {

  static function main(arg : String[]){
    var obj = new Sky1()
    obj.test2DArraywithExpansionOperator()
//    obj.testFlattenedArrayExpansion()
//    obj.testArrayExpansionOnIterableType()
//    obj.testArrayExpansionOnIteratorType()
//    obj.testAssignValueToMemberOfExpandedArray()
  }

  // Assign value to the member of expanded array (ps. gosudoc says the expanded array elements are read-only
  function testAssignValueToMemberOfExpandedArray(){
    var strArray = {"test1", "test2", "test3"}

    var expandedArray = strArray*.toUpperCase()
    expandedArray[0] = "x"

    print(expandedArray)
  }


  // 1-D, 2-D, 3-D array to use array expansion operator
  function test2DArraywithExpansionOperator(){
    var int2DArray : int[][] = {{1, 2, 3}, {4, 5, 6}}
    print(int2DArray*.length)                       //error flag in IDEParser only, not in OSGosu Parser

    var str1DArray : String[] = {"test11", "test12"}
    print(str1DArray*.split("t"))
    print(str1DArray*.toUpperCase())
    print(str1DArray*.length)
    print(str1DArray*.length())

    var str2DArray : String[][] = {{"test1", "test2"}, {"test4", "test5"}}
    print(str2DArray*.split({"t"}))        // error flag in both parser
    print(str2DArray*.length)
    print(str2DArray*.concat({"t"}))
    print(str2DArray*.concat({"t"})*.toUpperCase())   //error flag in IDEParser only, not in OSGosu Parser
    print(str2DArray*.concat({"t"})*.length)
    print(str2DArray*.concat({"t"})*.length())        //error flag in IDEParser only, not in OSGosu Parser
    print(str2DArray*.toUpperCase())       // error flag in both parser


    var str3DArray : String[][][] = {{{"test1", "test2"}, {"test4", "test5"}},{{"test10" , "test11"},{"test12", "test13"}}}
    print(str3DArray*.length)
    print(str3DArray*.concat({{"x"},{"y"}})*.length)
    print(str3DArray*.concat({"x"})*.length)                  // error flag in both parser
    print(str3DArray*.concat({{"x"},{"y"}})*.length())        // error flag in both parser
    print(str3DArray*.concat({{"x"},{"y"}})*.toUpperCase())   // error flag in both parser
    print(str3DArray*.concat({{"x"},{"y"}})*.concat({"a"})*.toUpperCase())   //error flag in IDEParser only, not in OSGosu Parser
    print(str3DArray*.concat({{"x"},{"y"}})*.concat({"a"})*.length)          //error flag in IDEParser only, not in OSGosu Parser
    print(str3DArray*.concat({{"x"},{"y"}})*.concat({"a"})*.length())        //error flag in IDEParser only, not in OSGosu Parser
  }

  // Array of String
  function testArrayExpansionInStringArray(){
    var strArray = {"test1", "test2", "test3"}

    strArray*.split("test")
  }


  //List of Float
  function testArrayExpansionInFloatList(){
    var listFloat : List<Float> = new ArrayList<Float>({new Float(1.2), new Float(2.45)})

    listFloat*.toString()
  }


  //Array of Object (multiple types)
  function testArrayExpansionInObjectArray(){
    var objArray : Object[] = {"x", new Integer(1), 10, 3.1415926}

    objArray*.toString()
  }


  // the property that array expansion returns is an array  (Array flattening!!)
  function testFlattenedArrayExpansion(){
    var obj1 = new C1() { :Members = {"Peter", "Dave", "Scott"} }
    var obj2 = new C1() { :Members = {"Carson", "Gus", "Maureen"} }
    var c1List : List<C1> = {obj1, obj2}
    var allMembers = c1List*.Members

    print(allMembers)
  }

  // Array expansion can call a property or a method of the objects of the array
  function testArrayExpansionAccessingMethod(){
    var obj1 = new C1() { :Members = {"Peter", "Dave", "Scott"} }
    var obj2 = new C1() { :Members = {"Carson", "Gus", "Maureen"} }
    var c1Array : C1[] = {obj1, obj2}

    c1Array*.returnInteger()
  }

  // Iterable type
  function testArrayExpansionOnIterableType(){
    var strOfIterable : Iterable<String> = new ArrayList<String>({"test1", "test2", "test3"})

    print(strOfIterable*.toUpperCase())
  }

  // Iterator types
  function testArrayExpansionOnIteratorType(){
    var strList : List<String> = new ArrayList<String>({"test1", "test2", "test3"})
    var strIterator : Iterator<String> = strList.iterator()

    print(strIterator*.split("st"))
  }


}