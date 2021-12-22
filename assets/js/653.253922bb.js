(window.webpackJsonp=window.webpackJsonp||[]).push([[653],{1056:function(e,n,s){"use strict";s.r(n);var t=s(30),a=Object(t.a)({},(function(){var e=this,n=e.$createElement,s=e._self._c||n;return s("ContentSlotsDistributor",{attrs:{"slot-key":e.$parent.slotKey}},[s("h1",{attrs:{id:"万人并发优化"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#万人并发优化"}},[e._v("#")]),e._v(" 万人并发优化")]),e._v(" "),s("blockquote",[s("p",[e._v("本文档是记录于2019年9月23日贵州电大项目万人并发中。"),s("br"),e._v("\n文档主要是讲解服务器配置，以及项目优化内容 ，以及优化测试所需要的分布式压测和服务器性能监听。")])]),e._v(" "),s("h4",{attrs:{id:"目录"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#目录"}},[e._v("#")]),e._v(" 目录")]),e._v(" "),s("ul",[s("li",[e._v("负载均衡slb配置")]),e._v(" "),s("li",[e._v("web服务器配置")]),e._v(" "),s("li",[e._v("mysql服务配置")]),e._v(" "),s("li",[e._v("软件项目优化配置")]),e._v(" "),s("li",[e._v("jmeter分布式压测配置")]),e._v(" "),s("li",[e._v("ansible自动化部署")]),e._v(" "),s("li",[e._v("zabbix监听仪表盘配置")])]),e._v(" "),s("h4",{attrs:{id:"服务硬件配置"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#服务硬件配置"}},[e._v("#")]),e._v(" 服务硬件配置")]),e._v(" "),s("p",[e._v("其中两台redis服务器，测试机为主控端，被控端共14台windows压侧机。\n")]),e._v(" "),s("h3",{attrs:{id:"本次性能调优涉及方面"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#本次性能调优涉及方面"}},[e._v("#")]),e._v(" 本次性能调优涉及方面")]),e._v(" "),s("h3",{attrs:{id:"_1-负载均衡slb配置"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#_1-负载均衡slb配置"}},[e._v("#")]),e._v(" 1. 负载均衡slb配置")]),e._v(" "),s("h4",{attrs:{id:"_1-1-nginx优化配置信息"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#_1-1-nginx优化配置信息"}},[e._v("#")]),e._v(" 1.1 nginx优化配置信息：")]),e._v(" "),s("div",{staticClass:"language- extra-class"},[s("pre",[s("code",[e._v("> /etc/ngin/nginx.conf\n... \nworker_processes auto;\nworker_rlimit_nofile 655350;\n\nevents {\n    worker_connections=102400\n}\n...\n#开启gzip压缩\ngzip on;\ngizp_comp_level 7;\n...\n")])])]),s("ul",[s("li",[e._v("最大连接数计算公式：")])]),e._v(" "),s("p",[s("code",[e._v("max_client = worker_connections * worker_processes / 4")]),s("br"),e._v("\nnginx一般会存在两个连接，一个接收，一个发送（http1.1协议）。此处是nginx反向代理所以还有与web服务器通信的连个连接。既一个用户访问nginx反向代理会占用4个连接。")]),e._v(" "),s("ul",[s("li",[e._v("worker_rlimit_nofile:")])]),e._v(" "),s("p",[s("code",[e._v("理论计算值 worker_rlimit_nofile = (ulimit -n) / worker_processes")]),s("br"),e._v("\n指定一个nginx进程可以打开的最多文件描述符数目，nginx打开最大数目也受linux 内核允许的最大文件打开数影响（ulimit -n）。")]),e._v(" "),s("h4",{attrs:{id:"_1-2-站点slb配置-非万人并发相关"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#_1-2-站点slb配置-非万人并发相关"}},[e._v("#")]),e._v(" 1.2 站点slb配置（非万人并发相关）：")]),e._v(" "),s("div",{staticClass:"language- extra-class"},[s("pre",[s("code",[e._v("> /etc/nginx/sites-enabled/edusoho\n...\n#代理优化配置\nproxy_buffer_size 128k;\nproxy_buffers 32 32k;\nproxy_temp_file_write_size 128k;\n...\n")])])]),s("ul",[s("li",[e._v("buffer 缓冲区"),s("br"),e._v("\nbuffer，即缓冲区，它在nginx上发挥的作用就是 启用一个缓冲区，先在这个缓冲区内进行存储，再把数据发送出去。开启后，nginx将会临时存储response到缓存区，然后慢慢发送数据到客户端。启用buffer的好处在于可以把数据一次性发送给客户端，相较于即使传输可以节约带宽。"),s("br"),e._v("\n开启buffer 建议关闭tcp_nodelay，因为tcp_nodelay 是尽快将数据发送出去。"),s("br"),e._v("\n参数针对是每一个http request，不是全局的。")])]),e._v(" "),s("h4",{attrs:{id:"_1-3-linux内核配置"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#_1-3-linux内核配置"}},[e._v("#")]),e._v(" 1.3 linux内核配置")]),e._v(" "),s("ul",[s("li",[s("p",[e._v("设置最大文件连接数,设置完需要重启linux。")]),e._v(" "),s("div",{staticClass:"language- line-numbers-mode"},[s("pre",{pre:!0,attrs:{class:"language-text"}},[s("code",[e._v("> /etc/security/limits.conf\n* soft nproc 1000000\n* hard nproc 1000000\n* soft nofile 1000000\n* hard nofile 1000000\nroot soft nproc 1000000\nroot hard nproc 1000000\nroot soft nofile 1000000\nroot hard nofile 1000000\n")])]),e._v(" "),s("div",{staticClass:"line-numbers-wrapper"},[s("span",{staticClass:"line-number"},[e._v("1")]),s("br"),s("span",{staticClass:"line-number"},[e._v("2")]),s("br"),s("span",{staticClass:"line-number"},[e._v("3")]),s("br"),s("span",{staticClass:"line-number"},[e._v("4")]),s("br"),s("span",{staticClass:"line-number"},[e._v("5")]),s("br"),s("span",{staticClass:"line-number"},[e._v("6")]),s("br"),s("span",{staticClass:"line-number"},[e._v("7")]),s("br"),s("span",{staticClass:"line-number"},[e._v("8")]),s("br"),s("span",{staticClass:"line-number"},[e._v("9")]),s("br")])])]),e._v(" "),s("li",[s("p",[e._v("设置linux内核网络状态设置(web服务如同)")]),e._v(" "),s("div",{staticClass:"language- line-numbers-mode"},[s("pre",{pre:!0,attrs:{class:"language-text"}},[s("code",[e._v("> /etc/sysctl.conf\n...\nfs.file-max = 1000000\nnet.ipv4.tcp_max_syn_backlog = 204800\nnet.ipv4.ip_local_port_range = 1024 65000\n#net.ipv4.tcp_max_tw_buckets = 5000\n#net.ipv4.tcp_syncookies = 1\nnet.ipv4.tcp_tw_reuse = 1\n#net.ipv4.tcp_tw_recycle = 1\nnet.core.netdev_max_backlog = 204800\nnet.ipv4.tcp_fin_timeout = 30\nnet.ipv4.tcp_keepalive_time = 1200\n")])]),e._v(" "),s("div",{staticClass:"line-numbers-wrapper"},[s("span",{staticClass:"line-number"},[e._v("1")]),s("br"),s("span",{staticClass:"line-number"},[e._v("2")]),s("br"),s("span",{staticClass:"line-number"},[e._v("3")]),s("br"),s("span",{staticClass:"line-number"},[e._v("4")]),s("br"),s("span",{staticClass:"line-number"},[e._v("5")]),s("br"),s("span",{staticClass:"line-number"},[e._v("6")]),s("br"),s("span",{staticClass:"line-number"},[e._v("7")]),s("br"),s("span",{staticClass:"line-number"},[e._v("8")]),s("br"),s("span",{staticClass:"line-number"},[e._v("9")]),s("br"),s("span",{staticClass:"line-number"},[e._v("10")]),s("br"),s("span",{staticClass:"line-number"},[e._v("11")]),s("br"),s("span",{staticClass:"line-number"},[e._v("12")]),s("br")])])])]),e._v(" "),s("h3",{attrs:{id:"_2-web服务器配置"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#_2-web服务器配置"}},[e._v("#")]),e._v(" 2. web服务器配置")]),e._v(" "),s("h4",{attrs:{id:"_2-1-nginx配置"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#_2-1-nginx配置"}},[e._v("#")]),e._v(" 2.1 nginx配置")]),e._v(" "),s("div",{staticClass:"language- extra-class"},[s("pre",[s("code",[e._v("> /etc/ngin/nginx.conf\n... \nworker_processes auto;\nworker_rlimit_nofile 655350;\n\nevents {\n    worker_connections=10240\n}\n...\n")])])]),s("p",[e._v("和负载均衡服务器相似，数值上相对设低。")]),e._v(" "),s("h4",{attrs:{id:"_2-2-php-fpm配置"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#_2-2-php-fpm配置"}},[e._v("#")]),e._v(" 2.2 php-fpm配置")]),e._v(" "),s("div",{staticClass:"language- extra-class"},[s("pre",[s("code",[e._v("> /etc/php/7.1/fpm/pool.d/www.conf\n...\npm.max_requests = 5000\n...\npm = static\npm.max_children = 1300\n...\n")])])]),s("ul",[s("li",[e._v("pm.max_requests\n理论上越高减少重启，但是要考虑到内存泄露的风险(这里设置5000应该是有问题的)")]),e._v(" "),s("li",[e._v("计算 pm.max_children的计算方式："),s("br"),e._v("\n预设每个PHP进程消耗40M"),s("br"),e._v("\n理论值 "),s("code",[e._v("pm.max_children = 机器内存 * 0.7 / 40")]),s("br"),e._v(" "),s("em",[e._v("设置max_children是为了避免服务器直接返回502，而不是提升性能")])])]),e._v(" "),s("blockquote",[s("p",[e._v("注意："),s("br"),e._v("\n虽然能在硬件配置高的情况下设置数值相对也较高,但是web服务器会随着fpm进程数上升导致TCP连接数上升，TCP连接数的上限是65535.所以在提升max_children时候也得适当通过zabbix监听tcp连接情况，找到php-fpm进程的最佳上限。1300是这次测出来tcp接近峰值数据。")])]),e._v(" "),s("blockquote",[s("p",[e._v("相关文章："),s("br"),e._v("\n1."),s("a",{attrs:{href:"https://www.cnblogs.com/adu0409/articles/3620748.html",title:"PHP的pm、pm.max_requests、memory_limit参数优化说明",target:"_blank",rel:"noopener noreferrer"}},[e._v("PHP的pm、pm.max_requests、memory_limit参数优化说明"),s("OutboundLink")],1),s("br"),e._v("\n2."),s("a",{attrs:{href:"https://www.jb51.net/article/157900.htm",title:"php-fpm中max_children的配置",target:"_blank",rel:"noopener noreferrer"}},[e._v("php-fpm中max_children的配置"),s("OutboundLink")],1),s("br"),e._v("\n3."),s("a",{attrs:{href:"https://q.cnblogs.com/q/62167/",title:"php-fpm.conf max_children 和 max_requests怎么配置",target:"_blank",rel:"noopener noreferrer"}},[e._v("php-fpm.conf max_children 和 max_requests怎么配置"),s("OutboundLink")],1)])]),e._v(" "),s("h3",{attrs:{id:"_3-mysql服务配置"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#_3-mysql服务配置"}},[e._v("#")]),e._v(" 3. mysql服务配置")]),e._v(" "),s("p",[e._v("查看最大连接数"),s("br"),e._v(" "),s("code",[e._v("show variables like '%max_connections%';")]),e._v("\n设置最大连接数,并重启mysql")]),e._v(" "),s("div",{staticClass:"language- extra-class"},[s("pre",[s("code",[e._v("> /etc/mysql/my.cnf\n...\n[mysqld]\nmax_connections=14*500   \n...\n")])])]),s("p",[e._v("查看最大使用连接数"),s("br"),e._v(" "),s("code",[e._v("show global status like 'Max_used_connections';")]),s("br"),e._v("\n当前连接数"),s("br"),e._v(" "),s("code",[e._v("show status like 'Threads_connected';")]),s("br"),e._v("\n详细连接信息"),s("br"),e._v(" "),s("code",[e._v("show full processlist\\G;")])]),e._v(" "),s("blockquote",[s("p",[e._v("相关文章："),s("br"),e._v("\n1."),s("a",{attrs:{href:"https://www.cnblogs.com/phpper/p/9570792.html",title:"Mysql 连接数,最大并发数设置",target:"_blank",rel:"noopener noreferrer"}},[e._v("Mysql 连接数,最大并发数设置"),s("OutboundLink")],1)])]),e._v(" "),s("h3",{attrs:{id:"_4-软件项目优化配置"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#_4-软件项目优化配置"}},[e._v("#")]),e._v(" 4. 软件项目优化配置")]),e._v(" "),s("ul",[s("li",[e._v("正规：twig可以静态的化的模块可以通过"),s("code",[e._v("{% cache 'name' time %}{% endceche %}")]),e._v("实现静态缓存，需要通过"),s("code",[e._v("/amdin/setting/performance")]),e._v("开启静态化。")]),e._v(" "),s("li",[e._v("非正规：关闭不关键的监听事件"),s("br"),e._v("\n例如：登录监听，mysql方面有锁控制方面关闭掉，特别是执行空锁。")])]),e._v(" "),s("h3",{attrs:{id:"_5-jmeter分布式压测配置"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#_5-jmeter分布式压测配置"}},[e._v("#")]),e._v(" 5. jmeter分布式压测配置")]),e._v(" "),s("p",[e._v("本次都是在windows环境下部署jmeter分布式压测。\n一台执行机，十台负载机。\n此时主控端设置进程数量是1000，十台并发则是10000。")]),e._v(" "),s("div",{staticClass:"language- extra-class"},[s("pre",[s("code",[e._v("> slave_jemeter/bin/jmeter.properties\n...\nserver_port=1088\nserver.rmi.localport=1088\nserver.rmi.ssl.disable=true\n\n> master_jemeter/bin/jmeter.properties\n...\nserver.rmi.ssl.disable=true\nremote_hosts=slave_IP1:1088,slave_IP2:1088..\n...\n")])])]),s("p",[e._v("每台slave负载机都需要开启jemeter-server.bat服务,此时就可以在执行机上运行了。")]),e._v(" "),s("h3",{attrs:{id:"_6-ansible自动化部署"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#_6-ansible自动化部署"}},[e._v("#")]),e._v(" 6. ansible自动化部署")]),e._v(" "),s("p",[e._v("当 Control Machine (主控端) 可以用 SSH 连上 Managed node，且被连上的机器里有预载 Python 时，Ansible 就可以运作")]),e._v(" "),s("h4",{attrs:{id:"_6-1-ansible安装"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#_6-1-ansible安装"}},[e._v("#")]),e._v(" 6.1 ansible安装")]),e._v(" "),s("ul",[s("li",[s("p",[e._v("Control Machine (主控端)安装")]),e._v(" "),s("p",[e._v("$ sudo apt-get install -y python-software-properties software-properties-common\n$ sudo add-apt-repository -y ppa:ansible/ansible; sudo apt-get update\n$ sudo apt-get install -y ansible")])]),e._v(" "),s("li",[s("p",[e._v("正常在 Managed Node 我们都会安装 OpenSSH server 和开通连线权限以便于远端管理")]),e._v(" "),s("p",[e._v("$ sudo apt-get install -y openssh-server python2.7")])])]),e._v(" "),s("p",[e._v("​")]),e._v(" "),s("h4",{attrs:{id:"_6-2-ansible-inventory配置"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#_6-2-ansible-inventory配置"}},[e._v("#")]),e._v(" 6.2 ansible Inventory配置")]),e._v(" "),s("div",{staticClass:"language- extra-class"},[s("pre",[s("code",[e._v("> /etc/ansible/hosts\n...\n[all:children]\ngroupname1\ngroupname2\n..\n\n[groupname1]\nIP1\nIP2\nIP\n..\n[groupname2]\n...\n")])])]),s("h4",{attrs:{id:"_6-3-running-command"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#_6-3-running-command"}},[e._v("#")]),e._v(" 6.3 Running Command")]),e._v(" "),s("div",{staticClass:"language- extra-class"},[s("pre",[s("code",[e._v("ansible -i ./hosts --connection=local local -m ping\n这里可以通过自己需要的命令来实现\n")])])]),s("blockquote",[s("p",[e._v("相关文章："),s("br"),e._v("\n1."),s("a",{attrs:{href:"https://blog.csdn.net/qq_43355223/article/details/88111875",title:"Ansible全套详细教程",target:"_blank",rel:"noopener noreferrer"}},[e._v("Ansible全套详细教程"),s("OutboundLink")],1)])]),e._v(" "),s("h3",{attrs:{id:"_7-zabbix监听"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#_7-zabbix监听"}},[e._v("#")]),e._v(" 7. zabbix监听")]),e._v(" "),s("div",{staticClass:"language- extra-class"},[s("pre",[s("code",[e._v("http://saas-jk.edusoho.com/zabbix/index.php\n")])])]),s("p",[e._v("登录进去匹配值仪表盘便于统一观察（一般开启cpu使用率，nginx活跃值，mysql的io，fpm活跃数和等待连接数，redis命中率，Tcp等待数量）")])])}),[],!1,null,null,null);n.default=a.exports}}]);