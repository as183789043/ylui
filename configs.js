YL.static = {
  /** “关于”信息 */
  softwareName: 'Rick Win10 UI', //网站名。请在此处填写您自己的网站名，如王小明的博客。
  version: "1.0.0", // 网站版本号
  iconBtnStart: 'rocket', //主图标
  author: 'Rick Hsu',//作者
  contactInformation: 'as123789043@gmail.com',//联系方式
  officialWebsite: 'as183789043.github.io',//软件官网
  welcome: '本網站UI由YLUI提供',//加载完毕控制台提示信息
  copyrightDetail: 'Rick',//版权详细信息
  otherStatements: '',//其他信息（可留空）

  /**————————————————————————————————————————————————————————————————————————————————————————————*/
  /** YLUI基础设置 */
  lang: 'zh-tw', //语言
  localStorageName: "ylui-storage", //ls存储名
  lockedApps: ['yl-system', 'yl-color-picker', 'ylui-fa', 'yl-browser'], // 锁定的应用（不允许被脚本修改）
  trustedApps: [], // 受信任的应用（可以使用敏感API）
  debug: false,//启用更多调试信息
  beforeOnloadEnable: true,//启用关闭前询问（打包app时请关闭防止出错）
  WarningPerformanceInIE: true,//在IE下提示体验不佳信息
  languages: {}, //推荐留空，自动从文件加载
  changeable: true,//存档数据是否可被普通用户修改
  dataCenter: true,//是否展示数据管理中心

  /**————————————————————————————————————————————————————————————————————————————————————————————*/
  /** YLUI注册信息 */
  authorization: '個人版',//授权类型
  serialNumber: '1234567890',//序列号

};
