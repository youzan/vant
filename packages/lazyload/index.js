export default {
    install: function(Vue,options){
        options = options || {
            fade: false,
            nohori: false
        }
        // scroll结束的时候触发scrollend事件
        var timer = null;
        var topValue = 0;
        var bodyEle = document.body;

        var scrollEnd = document.createEvent('HTMLEvents');
        scrollEnd.initEvent('scrollEnd',true,false)            
        function enterFrame(){
            if(bodyEle.scrollTop == topValue){
                window.cancelAnimationFrame(timer);
                window.dispatchEvent(scrollEnd)
            } else {
                topValue = bodyEle.scrollTop;
            }
            requestAnimationFrame(enterFrame);
        }
        document.addEventListener('scroll',function(){
            if(!timer) {
                timer = window.requestAnimationFrame(enterFrame);
            }
        },true)

        //vue指令
        function update(value){
            if (!value) {
                return;
            }
            var isFadeIn = this.modifiers.fade || options.fade
            var isNoHori = this.modifiers.nohori || options.nohori
            // 用css3来控制过渡效果
            if(isFadeIn){
                this.el.style.opacity = 0
                this.el.style.transition = 'opacity .3s'
                this.el.style.webkitTransition = 'opacity .3s'
            }
            var compute = function(){
                if (this.el === null) {
                    return;
                }
                var rect = this.el.getBoundingClientRect();
                var vpWidth = document.head.parentNode.clientWidth
                var vpHeight = document.head.parentNode.clientHeight
                var loadImg = function(){
                    this.el.src = value
                    this.el.addEventListener('load',onloadEnd)
                    window.removeEventListener('scrollEnd',compute,true)
                    window.removeEventListener('resize',compute,true)
                    
                }.bind(this)
                if(this.el.src == value)return
                if(isNoHori){
                    if(rect.bottom >=0 && rect.top <= vpHeight){
                        loadImg()
                    }
                }else if(rect.bottom >=0 && rect.top <= vpHeight
                        && rect.right >= 0 && rect.left <= vpWidth){
                    loadImg()
                }
            }.bind(this)
            var onload = function(){
                compute();
                this.el && this.el.removeEventListener('load',onload)
                window.addEventListener('scrollEnd',compute,true)
                window.addEventListener('resize',compute,true)
            }.bind(this)
            var onloadEnd = function(){
                if (this.el === null) {return;}
                if(isFadeIn){
                    this.el.style.opacity = 1
                }
                this.el.removeEventListener('load',onloadEnd)
            }.bind(this)
            // 元素load触发事件
            this.el.addEventListener('load',onload)
        }
        Vue.directive('lazyload',update)
    }
};
