import fs from "fs";

export function extractInput(filename: string): string[] {
  try {
    return fs
      .readFileSync("src/input/" + filename, "utf8")
      .toString()
      .split(/\n/);
  } catch (e: any) {
    throw new Error(`Error: ${e.stack}`);
  }
}
