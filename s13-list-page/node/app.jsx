const React = require('react') // ！很容易忽略，因为jsx编译会编译成react.creactElement，造成了react的引用
const Container = require('../component/container.jsx')

module.exports = function (reactData) {
    return <Container
        columns={reactData}
        filt={() => { }}
        sort={() => { }}
    />
}
