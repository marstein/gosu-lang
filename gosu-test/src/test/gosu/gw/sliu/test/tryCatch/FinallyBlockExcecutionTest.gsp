uses java.lang.RuntimeException
uses java.lang.Exception
uses java.lang.OutOfMemoryError

static var i = 0;

function testMethod2_1(){
    try{
      print("in try block")
    }catch(e : OutOfMemoryError){
      print("in catch block")
    }finally{
      i++
      print(i + "in finally block\n")
    }
  }

  function testMethod3(){
    try{
      try{
        print("in try block")
        throw new RuntimeException()
      }finally{
              i++
        print(i + "in finally block\n")
      }
    }catch(e : Exception){}

      print("reach this line.")
  }


  function testMethod3_1(){
    try{
      try{
        print("in try block")
      }finally{
              i++
        print(i + "in finally block\n")
        throw new RuntimeException()
      }
    }catch(e:Exception){}
  }



  function testMethod4(){
      try{
        print("in try block")
        throw new RuntimeException()
      }catch(e : Exception){
        print("in catch block")
      }finally{
              i++
        print(i + "in finally block\n")
      }

      print("reach this line.")
  }


  function testMethod5(){
    try{
      try{
        print("in try block")
      }catch(e : Exception){
        print("in catch block")
        throw new RuntimeException()
      }finally{
              i++
        print(i + "in finally block\n")
      }
    }catch(e:Exception){}

    print("reach this line.")
  }


  function testMethod7(){
    try{
      try{
        print("in try block")
      }catch(e : Exception){
        print("in catch block")
      }finally{
              i++
        print(i + "in finally block\n")
        throw new RuntimeException()
      }
    }catch(e:Exception){}

    print("reach this line.")              // <- should have 'unreachable statement' warning here
  }


  function testMethod8(){
    try{
      try{
        print("in try block")
        throw new RuntimeException()
      }catch(e : Exception){
        print("in catch block")
        throw new RuntimeException()
      }finally{

              i++
        print(i + "in finally block\n")
      }
    }catch(e:Exception){}

    print("reach this line.")
  }


  function testMethod9(){
    try{
      try{
        print("in try block")
        return
      }catch(e : Exception){
        print("in catch block")
        throw new RuntimeException()
      }finally{

        i++
        print(i + "in finally block\n")
      }
    }catch(e:Exception){}

    print("reach this line.")
  }


function testMethod10(){
  try{
    try{
      print("in try block")
    }catch(e : Exception){
      print("in catch block")
      return
    }finally{
      i++
      print(i + "in finally block\n")
    }
  }catch(e:Exception){}

  print("reach this line.")
}


function testMethod11(){
  while(true){
    try{
      print("in try block")
      break
    }catch(e : Exception){
      print("in catch block")
    }finally{
      i++
      print(i + "in finally block\n")
    }
  }

  print("reach this line.")
}

function testMethod12(){
  while(true){
    try{
      print("in try block")
      throw new RuntimeException()
    }catch(e : Exception){
      print("in catch block")
      break
    }finally{
      i++
      print(i + "in finally block\n")
    }
  }

  print("reach this line.")
}

function testMethod13(){
    print("***in testMethod13***")
  var j = 0
  for(ij in 1..4){
    try{
      if(i % 2 == 0){
        continue
      }
      print("in try block")
    }catch(e : Exception){
      print("in catch block")
    }finally{
      i++
      print(i + "in finally block\n")
    }
  }

  print("reach this line.")
}

function testMethod14(){
  print("***in testMethod14***")
  var j = 0
  for(ij in 1..4){
    try{
      print("in try block")
      throw new RuntimeException()
    }catch(e : Exception){
      if(i % 2 == 0){
        continue
      }
      print("in catch block")
    }finally{
      i++
      print(i + "in finally block\n")
    }
  }

  print("reach this line.")
}

testMethod3()
testMethod2_1()
testMethod3_1()
testMethod4()
testMethod5()

testMethod7()
testMethod8()
testMethod9()
testMethod10()
testMethod11()

testMethod12()
testMethod13()
testMethod14()