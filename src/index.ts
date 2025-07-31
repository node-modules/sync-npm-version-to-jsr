import { statSync } from 'node:fs';
import { readFile, writeFile } from 'node:fs/promises';
import path from 'node:path';

export default async function sync(cwd: string): Promise<void> {
  const jsrJSONPath = path.join(cwd, 'jsr.json');
  const packageJsonPath = path.join(cwd, 'package.json');

  const jsrJSONStat = statSync(jsrJSONPath, { throwIfNoEntry: false });
  if (!jsrJSONStat) {
    return;
  }

  const jsrJSON = await readFile(jsrJSONPath, 'utf8');
  const jsrJSONData = JSON.parse(jsrJSON);

  const packageJson = await readFile(packageJsonPath, 'utf8');
  const packageJsonData = JSON.parse(packageJson);

  if (jsrJSONData.version === packageJsonData.version) {
    return;
  }

  jsrJSONData.version = packageJsonData.version;

  await writeFile(jsrJSONPath, JSON.stringify(jsrJSONData, null, 2) + '\n');
  console.log(`${jsrJSONPath} version updated to ${packageJsonData.version}`);
}
