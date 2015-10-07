package gw.internal.gosu.ir.compiler.bytecode;

import gw.lang.ir.IRElement;
import gw.lang.ir.expression.IRConditionalAndExpression;
import gw.lang.ir.expression.IRConditionalOrExpression;
import gw.lang.ir.expression.IRNotExpression;

import java.util.ArrayDeque;
import java.util.Deque;

public final class BooleanResultManager
{
  private Deque<IRElement> _owner;

  public BooleanResultManager()
  {
    _owner = new ArrayDeque<>();
  }

  public boolean isOwner( IRElement whoIsAsking )
  {
    return !_owner.isEmpty() && _owner.peekFirst() == whoIsAsking;
  }

  public void popOwner( IRElement whoIsAsking )
  {
    assert _owner.peekFirst() == whoIsAsking : "Only the right owner can give up his ownership";
    _owner.removeFirst();
  }

  private void checkForEmptyOwner( IRElement whoIsAsking )
  {
    if( _owner.isEmpty() || !(_owner.peekFirst() instanceof IRConditionalAndExpression ||
                              _owner.peekFirst() instanceof IRConditionalOrExpression ||
                              _owner.peekFirst() instanceof IRNotExpression) )
    {
      _owner.addFirst( whoIsAsking );
    }
  }

  public void maybeSetOwner( IRElement whoIsAsking )
  {
    checkForEmptyOwner( whoIsAsking );
  }

  public void pushOwner( IRElement whoIsAsking )
  {
    _owner.addFirst( whoIsAsking );
  }
}