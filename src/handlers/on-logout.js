const { setQrCode } = require('../proxy/aibotk')

/**
 * 登出事件
 */
async function onLogout(user) {
  await setQrCode('qrcode', '6')
  console.log(`用户${user}已登出`)
}

module.exports = onLogout
