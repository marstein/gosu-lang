package gw.sliu.test.delegateTest.javaDelegate;

/**
 * Created by sliu on 3/11/2015.
 */
public class MyWindow implements IClipboardPart{

//    public static void main(String[] args){
//        ClipboardPart b = new ClipboardPart("String");
//        b.paste();
//    }


    IClipboardPart _clipboardPart;  //represents IClipboardPart

    public MyWindow(){
        _clipboardPart = new ClipboardPart( this );
    }



    public static void main(String[] args){
        MyWindow a = new MyWindow();
        a.paste();

        ClipboardPart b = new ClipboardPart("String");
        b.paste();
    }

    @Override
    public boolean canCopy() {
       return  _clipboardPart.canCopy();
    }

    @Override
    public void copy() {
        _clipboardPart.paste();
    }

    @Override
    public boolean canPaste() {
        return _clipboardPart.canPaste();
    }

    @Override
    public void paste() {
        _clipboardPart.paste();
    }
}
