const cluster  = require('cluster');
const os = require('os'); // 获取内核数

// 如果是主进程
if (cluster.isPrimary) {
    for (let i = 0;i<os.cpus(),length;i++) {
        // 开启进程
        cluster.fork();
    }
} else {
    require('./index')
}

