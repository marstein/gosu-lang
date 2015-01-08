package gw.sliu.test.generic

uses java.util.ArrayList
uses java.lang.Integer


class ExampleGenericClass<T> {

  var t : T;

  public function add(t1 : T) {
    this.t = t1;
  }

  public function get() : T {
    return t;
  }

  public static function main(args : String[]) {
    var integerList = new ArrayList<Integer>();
    var stringList = new ArrayList<String>();

    integerList.add(new Integer(10));
    stringList.add(new String("Hello World"));

  }
}