import * as fs from 'fs'
import * as os from 'os'
import path from 'path'
import {APPLICATION_NAME} from '../application-constants'
import {rmRF} from '@actions/io'

export function cleanUrl(url: string): string {
  if (url && url.endsWith('/')) {
    return url.slice(0, url.length - 1)
  }
  return url
}

export async function createTempDir(): Promise<string> {
  const appPrefix = APPLICATION_NAME
  const tempDir = fs.mkdtempSync(path.join(os.tmpdir(), appPrefix))

  return tempDir
}

export async function cleanupTempDir(tempDir: string): Promise<void> {
  if (tempDir && fs.existsSync(tempDir)) {
    await rmRF(tempDir)
    /*.then(voidData => {
      debug('Cleaned temporary created directory')
    })*/
    // fs.rmSync(tempDir, {recursive: true})
  }
}
