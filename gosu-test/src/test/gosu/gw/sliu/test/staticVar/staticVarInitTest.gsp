static var anotherVar : int = 109

static function testMethod1(){
  print(anotherVar);
}

testMethod1()           // it prints 0 instead of 109
print(anotherVar);      // it prints 0 instead of 109



var anotherVar1 : int = 109

function testMethod(){
  print(anotherVar1);
}

print(anotherVar1);
testMethod()