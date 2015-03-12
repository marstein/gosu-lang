package gw.sliu.test.reflectivePropertyAccess.res
/**
 * Created by Sky on 2015/01/29 with IntelliJ IDEA.
 */
class C1 {
  private var streetAddress : String as StreetAddress

  private var _field4 : String

  property get Field4() : String   {
    return _field4
  }
  property set Field4(str : String)   {
    _field4 = str
  }

}