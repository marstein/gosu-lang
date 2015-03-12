package gw.sliu.test.covariantGenerics;

import java.util.LinkedList;
import java.util.List;

/**
 * Created by Sky on 2015/01/19 with IntelliJ IDEA.
 */
public class FooBar {
    class Animal {}
    class Dog extends Animal {}
    class Cat extends Animal {}
//    void hello() {
//        // Illegal code - because otherwise life would be Bad
//        List<Dog> dogs = new LinkedList<Dog>();
//        List<Animal> animals = dogs; // Awooga awooga
//        animals.add(new Cat());
//        Dog dog = dogs.get(0); // This should be safe, right?
//    }
}
