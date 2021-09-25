import java.io.BufferedReader;
import java.io.IOException;
import java.io.InputStreamReader;
import java.net.HttpURLConnection;
import java.net.InetSocketAddress;
import java.net.URI;
import java.net.URL;


import java.nio.charset.MalformedInputException;
import java.util.Timer;
import java.util.TimerTask;
import com.sun.net.httpserver.HttpServer;
public class Main {	    
	public static void main(String[] args) throws IOException {
		int port = 9400;
		HttpServer server = HttpServer.create(new InetSocketAddress(port), 0);
		System.out.println("server started at " + port);
		server.createContext("/getOrders", new EchoGetHandler());
		
		server.setExecutor(null);
		server.start();
		new Timer().scheduleAtFixedRate(new TimerTask(){
		    @Override
		    public void run(){
		    	BufferedReader reader;
				String line;
				StringBuffer responseContent=new StringBuffer();
		    	HttpURLConnection connection = null;
		    	try {
		    	URL url=new URL("http://localhost:9400/getOrders");
				connection=(HttpURLConnection) url.openConnection();
				connection.setRequestMethod("GET");
				connection.setConnectTimeout(5000);
				connection.setReadTimeout(5000);
				reader=new BufferedReader(new InputStreamReader(connection.getInputStream()));
				while((line=reader.readLine())!=null) {
					responseContent.append(line);
				}
				reader.close();	
		    }catch(Exception e) {e.printStackTrace();}
		    	connection.disconnect();}

		},0,5000);
	}



	}

	
	
	


