package gw.sliu.test.delegateTest.javaDelegate;

/**
 * Created by Sky on 2015/03/11 with IntelliJ IDEA.
 */
public class ClipboardPart implements IClipboardPart{
    Object _myOwner;

    public ClipboardPart(Object owner) {
        _myOwner = owner;
        System.out.println(owner.toString());
    }

    // this is an ACTUAL implementation of these methods...

    @Override
    public boolean canCopy() {
        return true;
    }

    @Override
    public void copy() {
        System.out.println("Copied");
    }

    @Override
    public boolean canPaste() {
        return true;
    }

    @Override
    public void paste() {
        System.out.println("Pasted");
    }
}
