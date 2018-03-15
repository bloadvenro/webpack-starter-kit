import { join } from 'path'
import { readdirSync, statSync } from 'fs'

namespace destinations {
  export namespace directories {
    export const root = join(__dirname, '..', '..')
    export const source = join(root, 'source')
    export const output = join(root, 'output')
    export const assets = {
      templates: join(source, 'templates'),
      scripts: join(source, 'scripts')
    }
  }
  export namespace templates {
    export const templatesList = readdirSync(directories.assets.templates)
      .map(entry => join(directories.assets.templates, entry))
      .filter(pathname => statSync(pathname).isFile()) // Ignore subdirectories.
  }
}

export default destinations
