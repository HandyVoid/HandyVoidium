export default function() {
  const router = useRouter()
  

  return router.options.routes.flatMap(({ path }) => {
    const toolsPath = "/tools/"
    return path.startsWith(toolsPath) ? path.replace(toolsPath, "") : []
  })
}