package gw.sliu.test.delegateTest.javaDelegate;

/**
 * Created by sliu on 3/11/2015.
 */
public interface IClipboardPart {
   boolean canCopy();
   void copy();
   boolean canPaste();
   void paste();

}
