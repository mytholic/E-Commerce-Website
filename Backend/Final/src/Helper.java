import java.io.IOException;
import java.net.URI;
import java.util.TimerTask;

 

import org.apache.hadoop.conf.Configuration;
import org.apache.hadoop.fs.FileSystem;
import org.apache.hadoop.fs.Path;

 

public class Helper extends TimerTask {

 

    @Override
    public void run() {
        // TODO Auto-generated method stub
    	String localPath="/home/pelatro/Website/E-Commerce-Website-master/Backend/Http/order.csv";
	   String uri="hdfs://localhost:9000";
//	//String hdfsDir= "hdfs://localhost:50070/work";
		String hdfsDir= "hdfs://localhost:9000/OrdersData";
        Configuration conf= new Configuration();
        FileSystem fs=null;
        try {
            fs = FileSystem.get(URI.create(uri),conf);
        } catch (IOException e) {
            // TODO Auto-generated catch block
            e.printStackTrace();
        }
          try {
            fs.copyFromLocalFile(new Path(localPath),new Path(hdfsDir));
        } catch (IllegalArgumentException | IOException e) {
            // TODO Auto-generated catch block
            e.printStackTrace();
        }

 

    }}

 