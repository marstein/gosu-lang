package gw.sliu.test.memberVisibilityByDefault.p0

/**
 * Created by sliu on 3/11/2015.
 */
enhancement C1Enh: C1 {

  function myMethod(): String {
    return "Secret message!"
  }

  property get myProperty() : String {
    return "length : "
  }
}
