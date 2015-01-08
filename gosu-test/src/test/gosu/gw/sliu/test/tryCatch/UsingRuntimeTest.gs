package gw.sliu.test.tryCatch

uses java.io.FileInputStream
uses java.lang.Class
uses java.sql.Connection
uses java.sql.DriverManager
uses java.sql.ResultSet
uses java.sql.Statement
uses java.lang.Exception
uses gw.sliu.test.tryCatch.testingResource.MyClosable

class UsingRuntimeTest {

  public static function main(args: String[]) {
    var testObj = new UsingRuntimeTest ();

    testObj.testCustomClosable()

    testObj.dbConnectTryCatchFinally("jdbc:sqlserver://url;databaseName=DbName", "xxx", "yyy");

    testObj.dbConnectUsing_test1("jdbc:sqlserver://url;databaseName=DbName", "xxx", "yyy");
  }

  function testMethod2() {
    using (var input = new FileInputStream("file.txt")) {
      var data = input.read();
      while (data != - 1) {
        print(data as char);
        data = input.read();
      }
    }
  }

  public function dbConnectTryCatchFinally(db_connect_string: String, db_userid: String, db_password: String) {
    var conn = DriverManager.getConnection(db_connect_string, db_userid, db_password)
    try {
      Class.forName("com.microsoft.sqlserver.jdbc.SQLServerDriver");
      print("connected");
      var statement = conn.createStatement();
      var queryString = "select * from table;";
      var rs = statement.executeQuery(queryString);
      while (rs.next()) {
        print(rs.getString(1));
      }
    } catch (e: Exception) {
      e.printStackTrace();
    } finally {
      conn.close();
    }
  }

  public function dbConnectUsing_test1(db_connect_string: String, db_userid: String, db_password: String) {
    using (var conn = DriverManager.getConnection(db_connect_string, db_userid, db_password)) {
      Class.forName("com.microsoft.sqlserver.jdbc.SQLServerDriver");
      print("connected");
      var statement = conn.createStatement();
      var queryString = "select * from table;";
      var rs = statement.executeQuery(queryString);
      while (rs.next()) {
        print(rs.getString(1));
      }
    }
  }

  function testCustomClosable(){
    using(var obj = new MyClosable()){
      obj.doIt()
    }
  }


}