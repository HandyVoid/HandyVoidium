export default function() {
  const router = useRouter(),
        regex = new RegExp(`^/(tools|:slug(.*)*|${useI18n().locales.value.map(({ code }) => code).join("|")})`)

  
  return router.options.routes.flatMap(({ path }) => {
    return regex.test(path) ? [] : path
  })
}