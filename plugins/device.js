/* eslint-disable import/first */
export default (ctx, inject) => {
  const userAgent = ctx.req
    ? ctx.req.headers['user-agent']
    : navigator.userAgent
  const customIsTablet =
    ctx.$device.isTablet || (userAgent && userAgent.includes('iPad'))

    console.log('ctx :>> ', ctx);
  inject('device', {
    env: ctx.isDev,
    isTablet: customIsTablet,
    isMobile: ctx.$device.isMobile,
    isMobileOrTablet: ctx.$device.isMobileOrTablet,
    isDesktop: !ctx.$device.isMobileOrTablet,
    isIos: ctx.$device.isIos,
    isWindows: ctx.$device.isWindows,
    isMacOS: ctx.$device.isMacOS,
    isDesktopOrTablet: !ctx.$device.isMobile,
    isAndroid: ctx.$device.isMobileOrTablet && !ctx.$device.isIos,
  })
}
