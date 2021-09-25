import java.io.IOException;
import java.net.URI;

import org.apache.hadoop.conf.Configuration;
import org.apache.hadoop.fs.FileSystem;
import org.apache.hadoop.fs.Path;

//public class finals {
//
//	public static void main(String[] args) throws IOException {
//		String localPath="/home/pelatro/Website/E-Commerce-Website-master/Backend/Http/order.csv";
//		String uri="hdfs://localhost:9000";
//		//String hdfsDir= "hdfs://localhost:50070/work";
//		String hdfsDir= "hdfs://localhost:9000/OrdersData";
//		Configuration conf= new Configuration();
//		FileSystem fs =FileSystem.get(URI.create(uri),conf);
//	
//		//FileSystem fs=FileSystem.get(URI.create(uri),conf);
//		fs.copyFromLocalFile(new Path(localPath),new Path(hdfsDir));
//	}
//
//}
import java.io.IOException;
import java.net.URI;
import java.util.Timer;
import java.util.TimerTask;

 

import org.apache.hadoop.conf.Configuration;
import org.apache.hadoop.fs.FileSystem;
import org.apache.hadoop.fs.Path;

 


public class finals {
    
    public static void main(String[] args) throws IOException{
        // TODO Auto-generated method stub
        
          Timer timer = new Timer();
        TimerTask task = new Helper();
        timer.schedule(task, 2000, 100000);

 

    }

 

}