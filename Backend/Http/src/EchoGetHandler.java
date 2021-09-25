import java.io.File;
import java.io.FileOutputStream;
import java.io.IOException;
import java.io.OutputStream;
import java.io.UnsupportedEncodingException;
import java.net.URI;
import java.net.URLDecoder;
import java.sql.Connection;
import java.sql.SQLException;
import java.util.ArrayList;
import java.util.HashMap;
import java.util.List;
import java.util.Map;

import org.postgresql.copy.CopyManager;
import org.postgresql.core.BaseConnection;

import com.sun.net.httpserver.HttpExchange;
import com.sun.net.httpserver.HttpHandler;

public class EchoGetHandler implements HttpHandler {

    @Override

    public void handle(HttpExchange he) throws IOException {
    	String SQL = "SELECT id,username,item,price,quantity,address,date  FROM orders ORDER BY username";
    	try {
    		Connection connection= new ConnectionToDatabase().connect();
    		CopyManager copymanager=new CopyManager((BaseConnection)connection);
    		File file = new File("/home/pelatro/Website/E-Commerce-Website-master/Backend/Http/order.csv");
    		FileOutputStream fos=new FileOutputStream(file);
    		copymanager.copyOut("COPY (" + SQL + ") TO STDOUT WITH (FORMAT CSV, HEADER)",fos);
    		connection.close();
    	}catch(SQLException e) {
    		e.printStackTrace();
    	}
    String res="Exported";
    he.sendResponseHeaders(200, res.length());
    OutputStream os = he.getResponseBody();
    os.write(res.getBytes());
    os.close();
    	}}

	
