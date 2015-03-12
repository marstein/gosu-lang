package gw.sliu.test.memberVisibilityByDefault.p0

class C10Structure {
  structure Transformer1 { function transform() }              // this 'structure' is actually a class member according to bytecode
  static structure Transformer2 { function transform() }


}