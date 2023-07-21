import schemas from '@/sanity/schemas'
import {defineConfig} from 'sanity'
import { deskTool } from 'sanity/desk'

const config = defineConfig({
  projectId: 'hzqcfsdq',
  dataset: 'production',
  title: 'Mi personal website',
  apiVersion: '19-07-2023',
  basePath: '/admin',
  plugins: [deskTool()],
  schema: { types: schemas }
})

export default config