package gw.sliu.test.compound

uses java.util.Set
uses java.lang.Runnable
uses java.util.LinkedList

/**
 * Created by Sky on 2015/01/16 with IntelliJ IDEA.
 */
class Sky1 {
  var x = {0, 3.4}                                                // Ctrl+Shift+G should give type 'java.util.ArrayList<java.lang.Comparable<java.lang.Object> & java.lang.Number>'
  var y = {1.2, 4, "test"}                                        // Ctrl+Shift+G should give type 'java.util.ArrayList<java.io.Serializable & java.lang.Comparable<java.lang.Object>>'
  var numbers = {0 -> 1, 3 -> 3.4}                                // Ctrl+Shift+G should give type 'java.util.HashMap<java.lang.Integer, java.lang.Comparable<java.lang.Object> & java.lang.Number>
  var strings = {"a" -> 1.3, "b" -> "test"}                       // Ctrl+Shift+G should give type 'java.util.HashMap<java.lang.String, java.io.Serializable & java.lang.Comparable<java.lang.Object>>
  var set1 : Set = {1.2, 4, "test"}
  var set2 : List & Runnable  = null

}