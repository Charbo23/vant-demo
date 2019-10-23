import router from './index';
router.afterEach((to) => {
  const metaTitle = to.meta.title || to.matched[0].meta.title;
  document.title = metaTitle ? metaTitle + " - Vant Demo" : 'Vant Demo';
})