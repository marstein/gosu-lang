package gw.sliu.test.delegateTest.javaDelegate;

import gw.sliu.test.delegateTest.javaDelegate2.ZIClipboardPart;

/**
 * Created by sliu on 3/11/2015.
 */
class ZClipboardPart implements ZIClipboardPart {
    Object _myOwner;

    public ZClipboardPart(Object owner) {
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