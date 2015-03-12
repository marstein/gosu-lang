package gw.sliu.test.memberVisibilityByDefault.p1

uses gw.sliu.test.memberVisibilityByDefault.p0.C10Structure

class C100Structure {

  class ClassTransformer{
    function transform(){}
  }
  var struct1 : C10Structure.Transformer1 =  new ClassTransformer()   // showing error in OSGosu. It says C1.Transformer1 only has internal access
  var struct2 : C10Structure.Transformer2 =  new ClassTransformer()   // showing error in OSGosu. It says C1.Transformer2 only has internal access


}