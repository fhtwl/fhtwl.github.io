const modelName = 'z16' //z16,haru_1
const selectId = 'z16'
let jsonPath = `/live2dw/live2d-widget-model-${modelName}/assets/${selectId}.model.json`

window.onload = function () {
    window.L2Dwidget
        .on('*', (name,data) => {
            console.log('%c EVENT ' + '%c -> ' + name, 'background: #222; color: yellow', 'background: #fff; color: #000')
        })
        .init({
            // pluginRootPath: 'live2dw/',
            // pluginJsPath: 'lib/',
            // pluginModelPath,
            // tagMode: false,
            // debug: false,
            model: { jsonPath },
            display: { position: 'left', width: 150, height: 300,hOffset: 50 },//位置 ,hOffset:水平便宜
            mobile: { show: true,scale: 0.5 }, //移动端适配
            // log: false,
            dialog: {
                // 开启对话框
                enable: true,
                script: {
                    // 每空闲 10 秒钟，显示一条一言
                    'every idle 10s': '$hitokoto$',
                    // 当触摸到角色身体
                    'tap body': '哎呀！别碰我！',
                    // 当触摸到角色头部
                    'tap face': '人家已经不是小孩子了！'
                }
            }
        })
}
// 官方配置文档 https://l2dwidget.js.org/docs/class/src/index.js~L2Dwidget.html