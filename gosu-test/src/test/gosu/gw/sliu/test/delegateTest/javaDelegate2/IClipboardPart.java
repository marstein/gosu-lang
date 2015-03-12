package gw.sliu.test.delegateTest.javaDelegate2;

/**
 * Created by Sky on 2015/03/11 with IntelliJ IDEA.
 */
public interface IClipboardPart {
    boolean canCopy();
    void copy();
    boolean canPaste();
    void paste();
}
