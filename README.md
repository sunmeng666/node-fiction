# node-fiction
小说封面图片

2018.10.10
整理目前实现思路，总体目前构思分两步：
1.爬虫
a.nodejs爬虫，爬取主流小说的封面图片URL、小说名、作者三个字段，不入库先存本地json，fs写入；
b.写个定时任务，隔一定的时间进行爬取，本地json每次写入先清空，这样的话，如果断网，本地依然有一份json可以进行查询

2.查询
a.nodejs写查询接口，接收小说名、作者两个参数，根据这两个字段对本地json进行匹配，返回小说对应的URL






完成情况：
2018.10.10  手动加入了一个json，接口能正常返回一个URL，index.html页面能显示，但是还不能根据接收到的参数进行匹配
