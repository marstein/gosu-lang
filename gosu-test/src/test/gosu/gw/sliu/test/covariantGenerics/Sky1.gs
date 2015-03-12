package gw.sliu.test.covariantGenerics
/**
 * Created by Sky on 2015/01/16 with IntelliJ IDEA.
 */
class Sky1 {
  static class Animal {}
  static class Dog extends Animal {}
  static class Cat extends Animal {}
  function foo() {
    var dogs = new List<Dog>()
    var animals : List<Animal> = dogs
    animals.add(new Cat())
    var dog : Dog = animals.get(0) as Dog

  }

  static function main(s : String[] ) {
   /* var dogs  = new Dog[2]

    dogs[0] = new Dog()
    var animals : Animal[] = dogs
    animals[1] = new Cat()
    var dog : Dog = animals[1] as Dog */
    var dogs = new List<Dog>()
    var animals : List<Animal> = dogs
    animals.add(new Cat())
    var dog : Dog = animals.get(0) as Dog

  }
}