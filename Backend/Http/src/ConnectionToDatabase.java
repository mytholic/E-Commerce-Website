import java.sql.Connection;
import java.sql.DriverManager;
import java.sql.SQLException;

public class ConnectionToDatabase {
	 private final String url = "jdbc:postgresql://localhost:5432/Registrationdb?useSSL=false";
	 private final String user = "postgres";
	 private final String password = "postgres";
	public Connection connect() throws SQLException 
	{
	        return DriverManager.getConnection(url, user, password);
	}
}
