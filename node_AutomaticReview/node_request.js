/**
 * Created by 13945 on 2016/7/9.
 */
var http = require("http");
var querystring = require("querystring");

var postData = querystring.stringify({
    'params.appId':'qing',
    'params.sourceName':'天涯随记',
    'params.useraction':'f172.1468025474181.52726,,u170.32.83,b171.4.4152,b173.5.27,d155.229.151,d156.229.174,d157.229.58,u158.90.19,u159.72.27,u160.73.66,d161.229.111,d162.229.49,u163.74.63,d164.229.13,u165.73.59,d166.229.110,u167.65.9,u168.79.126,d169.229.81|fd8c4beb054ede03cd6c1196af62eea4|4af845a4cd9b0c02721a8226c08d20cd|Mozilla/5.0 (Windows NT 10.0; WOW64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/51.0.2704.106 Safari/537.36|v2.3.10',
    'params.title':'',
    'params.body':'第三次光顾这个论坛，请多多指教'
});


var options = {
    hostname:'221.182.218.229',
    port:80,
    path:'/api/tw',
    method:"POST",
    headers:{
        'Accept':'application/json, text/javascript, */*; q=0.01',
        'Accept-Encoding':'gzip, deflate',
        'Accept-Language':'zh-CN,zh;q=0.8',
        'Connection':'keep-alive',
        'Content-Length':postData.length,
        'Content-Type':'application/x-www-form-urlencoded',
        'Cookie':'__cid=28; __guid=2006497185; __guid2=2006497185; bc_exp=10; bc_ids_m=1e; sso=r=777295656&sid=&wsid=BCB8B992DE94F58B424C837C4BA76E13; user=w=%u9c7cyxr&id=114858071&f=1; temp=k=585342944&s=&t=1468025474&b=f23a70b335ed3eacafd552466f01d258&ct=1468025474&et=1470617474; right=web4=n&portal=n; temp4=rm=00f911d5e989209a1c9d4487f13db6a5; time=ct=1468025470.835; __ptime=1468025471003; u_tip=; Hm_lvt_bc5755e0609123f78d0e816bf7dee255=1468025449; Hm_lpvt_bc5755e0609123f78d0e816bf7dee255=1468025472; ty_msg=1468025471606_114858071_2_0_0_0_0_0_2_0_0_0_0; bbs_msg=1468025471624_114858071_0_0_0_0; __u_a=v2.3.3',
        'Host':'www.tianya.cn',
        'Origin':'http://www.tianya.cn',
        'Referer':'http://www.tianya.cn/114858071',
        'User-Agent':'Mozilla/5.0 (Windows NT 10.0; WOW64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/51.0.2704.106 Safari/537.36',
        'X-Requested-With':'XMLHttpRequest'
    }
};



var req = http.request(options,function(res){
    console.log("Status: " + res.statusCode);
    console.log("headers: " + JSON.stringify(res.headers));
    res.on('data',function(chunk){
        console.log(Buffer.isBuffer(chunk));
        console.log(typeof chunk);
    });
    res.on('end',function(){
        console.log("评论结束");
    })

});
req.on('error',function(e){
    console.log("Error:" + e.message);
});
req.write(postData);
req.end();


























