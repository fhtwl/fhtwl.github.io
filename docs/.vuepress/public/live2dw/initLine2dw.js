const modelName = 'z16' //z16
const selectId = 'z16'
let jsonPath = `/live2dw/live2d-widget-model-${modelName}/assets/${selectId}.model.json`
// let pluginModelPath = `live2d-widget-model-z16/assets/`
window.onload = function () {
    window.L2Dwidget
        .on('*', (name,data) => {
            console.log('%c EVENT ' + '%c -> ' + name, 'background: #222; color: yellow', 'background: #fff; color: #000')
            const dialogOptions = [
                {
                    'name': 'face',
                    'msg': '人家已经不是小孩子了！'
                },
                {
                    'name': 'body',
                    'msg': '哎呀！别碰我！'
                }
            ]
            let msg
            for(let i = 0;i<dialogOptions.length;i++) {
                if(name == dialogOptions[i].name) {
                    msg = dialogOptions[i].msg
                    break
                }
            }
            // L2Dwidget.dialog(msg)
        })
        .init({
            // pluginRootPath: 'live2dw/',
            // pluginJsPath: 'lib/',
            // pluginModelPath,
            // tagMode: false,
            // debug: false,
            model: { jsonPath },
            display: { position: 'right', width: 150, height: 300 },//位置
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