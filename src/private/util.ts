import { spawnSync, SpawnSyncOptions } from 'child_process';
import * as fs from 'fs';
import * as path from 'path';

export function getDotNetLambdaTools(): boolean {
  try {
    const dotnet = spawnSync('dotnet', ['lambda', '--help']);
    if (dotnet.status !== 0 || dotnet.error) {
      return false;
    }
    return true;
  } catch (err) {
    return false;
  }
}

export function exec(cmd: string, args: string[], options?: SpawnSyncOptions) {
  const proc = spawnSync(cmd, args, options);

  if (proc.error) {
    throw proc.error;
  }

  if (proc.status !== 0) {
    if (proc.stdout || proc.stderr) {
      throw new Error(
        `[Status ${proc.status}] stdout: ${proc.stdout
          ?.toString()
          .trim()}\n\n\nstderr: ${proc.stderr?.toString().trim()}`,
      );
    }
    throw new Error(`${cmd} exited with status ${proc.status}`);
  }

  return proc;
}

export function findUp(
  ext: string | string[],
  directory: string = process.cwd(),
): string | undefined {
  const absoluteDirectory = path.resolve(directory);
  const extensions = Array.isArray(ext) ? ext : [ext];

  const file = fs
    .readdirSync(absoluteDirectory)
    .find((f) => extensions.some((e) => f.endsWith(e)));
  if (file) {
    return path.join(absoluteDirectory, file);
  }

  const { root } = path.parse(absoluteDirectory);
  return absoluteDirectory == root
    ? undefined
    : findUp(ext, path.dirname(absoluteDirectory));
}

export function getLambdaToolsDefaults(projectDir: string): any {
  const lambdaToolsDefaultsFile = path.join(
    projectDir,
    'aws-lambda-tools-defaults.json',
  );
  if (fs.existsSync(lambdaToolsDefaultsFile)) {
    return JSON.parse(fs.readFileSync(lambdaToolsDefaultsFile, 'utf8'));
  }
  return undefined;
}
