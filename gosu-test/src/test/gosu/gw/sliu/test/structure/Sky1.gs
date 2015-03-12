package gw.sliu.test.structure

uses java.util.Comparator
uses java.awt.Point

/**
 * Created by Sky on 2015/03/10 with IntelliJ IDEA.
 */
class Sky1 {

  interface Coordinate {
    property get X() : double
    property get Y() : double
  }

  var coordSorter = new Comparator<Coordinate>() {
    override function compare( c1: Coordinate, c2: Coordinate ): int {
      var res = c1.Y == c2.Y ? c1.X - c2.X : c2.Y - c1.Y
      return res < 0 ? -1 : res > 0 ? 1 : 0;
    }
  }

  var points: List<Point> = {new(2, 1), new(3, 5), new(1, 1)}
  Collections.sort( points, coordSorter ) // Not cool

}