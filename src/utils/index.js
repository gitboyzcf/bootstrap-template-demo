import mitt from 'mitt'
import NProgress from 'nprogress'
import 'nprogress/nprogress.css'

/**
 * 获取资源路径
 * @param {相对路径} relativePath
 *    如果要动态获取assets的文件文件夹下的images中的图片
 *      relativePath 传入 assets/images/name.png
 * @returns 文件所在路径
 */
const getStaticResource = (relativePath) => {
  return new URL(`../${relativePath}`, import.meta.url)
}

/**
 * 消息提示
 * @param {弹出消息类型=》 info error warning success loading } type
 * @param {弹出消息文本} text
 * @param {配置} config
 */
// const { message } = createDiscreteApi(['message'], {
//   messageProviderProps: { duration: 2000 }
// })
// const msg = (type, text) => {
//   message[type](text)
// }

/**
 * 模块话方式处理 默认处理 modules文件夹下的所有js文件 内容以export default导出的文件
 * @param { 模块内容集合 } moduleContext
 * @returns modules集合
 */
const modulesHandle = (moduleContext = {}) => {
  if (!Object.keys(moduleContext).length) return
  const modules = {}
  Object.keys(moduleContext).forEach((v) => {
    for (let key in moduleContext[v].default) {
      modules[key] = moduleContext[v].default[key]
    }
  })
  return modules
}

/**
 * 下载文件，基于a标签download下载
 * @param {接口方法体} api
 * @param {接口参数} params
 * @param {是否调用接口} isApi true 是  false 否
 */
const downLoadFile = async (api, params = {}, isApi = true, url) => {
  const a = document.createElement('a')
  if (isApi) {
    const res = await api(params)
    url = res.url
  }
  const urls = url.split('/')
  a.href = url
  a.target = '_blank'
  a.download = urls[urls.length - 1]
  a.style.display = 'none'
  document.body.appendChild(a)
  setTimeout(() => {
    a.click()
  }, 500)
  setTimeout(() => {
    document.body.removeChild(a)
  }, 1000)
  //   fetch(url)
}

/**
 * 
 * @returns 订阅/发布者对象
 */
export const $mitt = mitt()


export { getStaticResource, modulesHandle, downLoadFile, NProgress }
