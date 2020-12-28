const modelName = 'haru_1'
let jsonPath = `/live2dw/live2d-widget-model-haru_1/assets/haru01.model.json`
let pluginModelPath = `live2d-widget-model-haru_1/assets/`
window.L2Dwidget.init({
    pluginRootPath: 'live2dw/',
    pluginJsPath: 'lib/',
    pluginModelPath,
    tagMode: false,
    debug: false,
    model: { jsonPath },
    display: { position: 'left', width: 150, height: 300 },//位置
    mobile: { show: true }, //是否盯着鼠标看
    log: false
})