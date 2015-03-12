package gw.sliu.test.memberVisibilityByDefault.p0



/**
 * Created by sliu on 3/11/2015.
 */
enhancement I1Enh: I1 {

  function myMethod(): String {
    return "Secret message!"
  }

  property get myProperty() : String {
    return "length : "
  }

}
