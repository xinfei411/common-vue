import router from './index'
import config from '&/config'
router.beforeEach((to, from, next) => {
  document.title = to.meta.title || config.publicTitle;
  next();
})

export default router;