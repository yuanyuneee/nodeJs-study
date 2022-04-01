const user = {
    name: '<script />'
}
const result = `<h2>${user.name}</h2>`
const vm = require('vm');
// console.log( vm.runInNewContext('`<h2>${_(user.name)}</h2>`', {
//     user,
//     _: function(markup) {
//     if (!markup) return '';
//     return String(markup)
//         .replace(/&/g, '&amp;')
//         .replace(/</g, '&lt;')
//         .replace(/>/g, '&gt;')
//         .replace(/'/g, '&#39;')
//         .replace(/"/g, '&quot;')
//     }
// }))

// 模板对象
const templateMap = {
    templateA: '`<h2>${include("templateB")}</h2>`',
    templateB: '`<p>hahahaha</p>`'
}

// helper方法
const context = {
    // 执行方法，获取模板字符串
    include(name) {
        return templateMap[name]()
    },

    // ssr过滤
    _: function(markup) {
        if (!markup) return '';
        return String(markup)
            .replace(/&/g, '&amp;')
            .replace(/</g, '&lt;')
            .replace(/>/g, '&gt;')
            .replace(/'/g, '&#39;')
            .replace(/"/g, '&quot;')
    }
}

// 遍历对象，包装成函数
Object.keys(templateMap).forEach(key=> {
    const temp = templateMap[key];

    templateMap[key] = vm.runInNewContext(`
        (function() {return ${temp}})
    `, context/*传入helper函数*/);
})

console.log(templateMap['templateA']());


// const template = '<h2><%= user.name %></h2>';
// ejs.render(template, user);
