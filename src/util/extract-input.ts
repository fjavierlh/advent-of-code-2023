import fs from "fs";

export function extractInput(filename: string): string[] {
  try {
    const data = fs.readFileSync("src/" + filename, "utf8");

    return data
      .toString()
      .split(/\n/)
      .map((line: string) => line.replace(/\n/, ""));
  } catch (e: any) {
    throw new Error(`Error: ${e.stack}`);
  }
}
