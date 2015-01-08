package gw.sliu.test.tryCatch

uses java.io.FileInputStream
uses java.lang.Class
uses java.sql.Connection
uses java.sql.DriverManager
uses java.sql.ResultSet
uses java.sql.Statement
uses java.lang.Exception


class UsingOSParserTest {

  function testMethod1(){
    try(var input = new FileInputStream("file.txt")) {
      var data = input.read();
      while(data != -1){
        print(data as char);
        data = input.read();
      }
    }
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


  public function dbConnectUsing_test2(db_connect_string: String, db_userid: String, db_password: String) {
    var conn = DriverManager.getConnection(db_connect_string, db_userid, db_password)
    using (var str = "test") {
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

  public function fileInputStreamUsing_test1() {
    using (var input = new FileInputStream("file.txt")) {
      var data = input.read()
      while(data != -1){
        print(data as char)
        data = input.read()
      }
    }
  }

  function multipleResourcesUsing_test2(db_connect_string: String, db_userid: String, db_password: String){
    using(var input = new FileInputStream("file.txt");
          var conn = DriverManager.getConnection(db_connect_string, db_userid, db_password)){
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


}