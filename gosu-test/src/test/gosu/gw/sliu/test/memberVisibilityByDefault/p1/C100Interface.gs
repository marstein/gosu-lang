package gw.sliu.test.memberVisibilityByDefault.p1

uses gw.sliu.test.memberVisibilityByDefault.p0.C10Interface

/**
 * Created by sliu on 3/11/2015.
 */
class C100Interface {
  class ImplC1innerInterface1 implements C10Interface.i1 {}        // showing error in OSGosu. C1.i1 inner interface only has internal access
  class ImplC1innerInterface2 implements C10Interface.i2 {}        // showing error in OSGosu. C1.i2 inner interface only has internal access

}