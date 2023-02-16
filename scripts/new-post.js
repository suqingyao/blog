const fs = require('fs-extra')
const path = require('path')
const dayjs = require('dayjs')
const pangu = require('pangu')

// npm run new:post name [tag1] [tag2] ...
const createPost = async () => {
  const [, , filename] = process.argv

  await fs.outputFile(
    path.resolve(
      process.cwd(),
      `./posts/${dayjs().format('YYYY-MM-DD')}-${filename}.mdx`
    ),
    `
    ---
      title: '${pangu.spacing(filename)}'
      date: '${dayjs().format('YYYY-MM-DD HH:mm:ss')}'
    ---
    `
  )
}

createPost()
