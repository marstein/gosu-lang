package gw.sliu.test.memberVisibilityByDefault.p0

/**
 * Created by sliu on 3/11/2015.
 */
class C10Interface {
  interface i1{}             // 'inner interface' is a class member according to bytecode (i.e. "static abstract INNERCLASS")
  static interface i2{}

}