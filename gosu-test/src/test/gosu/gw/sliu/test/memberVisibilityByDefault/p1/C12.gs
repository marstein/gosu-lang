package gw.sliu.test.memberVisibilityByDefault.p1

uses gw.sliu.test.memberVisibilityByDefault.p0.C1

/**
 * Created by Sky on 2015/03/05 with IntelliJ IDEA.
 */
class C12 extends C1 {
  construct(){
    super.f10 = 11;
    super.f11 = 11;
//    super.f12
  }
}