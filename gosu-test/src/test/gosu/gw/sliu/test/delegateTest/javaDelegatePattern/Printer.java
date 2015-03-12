package gw.sliu.test.delegateTest.javaDelegatePattern;

/**
 * Created by sliu on 3/11/2015.
 */
public class Printer {
    RealPrinter p = new RealPrinter();	// create the delegate
    void print() {
        p.print();	// delegation
    }
}
