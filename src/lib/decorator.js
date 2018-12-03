function decorator (target) {
    let willUnmount = target.prototype.componentWillUnmount
    // 改装componentWillUnmount钩子函数
    // 在组件销毁的时候，开启一个开关
    target.prototype.componentWillUnmount =function(){
        if(willUnmount) willUnmount.call(this,...arguments);
        // this.unmount = true 说明这个时候组件已经销毁了
        this.unmount = true ;
    }
    let setState = target.prototype.setState;
    target.prototype.setState = function(){
        // 如果组件已经销毁了，那么不进行状态更新
        if(this.unmount) return ;
        setState.call(this,...arguments)
    }
}
export {decorator}