const fs = require('fs-extra')
const matter = require('gray-matter')
const dayjs = require('dayjs')

const updateFrontmatter = () => {
  const [, , ...mdFilePaths] = process.argv

  for (const path of mdFilePaths) {
    const file = matter.read(path)
    const { data: frontmatter } = file
    const newFrontmatter = {
      ...frontmatter,
      updatedOn: dayjs().format('YYYY-MM-DD HH:mm')
    }
    const updatedFileContent = matter.stringify(file.content, newFrontmatter)
    fs.outputFileSync(path, updatedFileContent)
  }
}

updateFrontmatter()
