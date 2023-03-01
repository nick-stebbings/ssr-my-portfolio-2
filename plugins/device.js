/* eslint-disable import/first */
import Vue from 'vue'

export default (ctx, inject) => {
  const userAgent = ctx.req
    ? ctx.req.headers['user-agent']
    : navigator.userAgent
  const customIsTablet =
    ctx.isTablet || (userAgent && userAgent.includes('iPad'))

  inject('device', {
    env: ctx.isDev,
    isTablet: customIsTablet,
    isMobile: ctx.isMobile,
    isMobileOrTablet: ctx.isMobileOrTablet,
    isDesktop: !ctx.isMobileOrTablet,
    isIos: ctx.isIos,
    isWindows: ctx.isWindows,
    isMacOS: ctx.isMacOS,
    isDesktopOrTablet: !ctx.isMobile,
    isAndroid: ctx.isMobileOrTablet && !ctx.isIos,
  })
}
