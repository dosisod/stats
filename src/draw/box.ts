import * as Color from "https://deno.land/std/fmt/colors.ts"

const MAX_WIDTH = 80

export function simpleBox(str: string, text=Color.white, border=Color.white): void {
  printHeader(border)
  innerBox(str, text, border)
  printFooter(border)
}

function innerBox(str: string, text=Color.white, border=Color.white): void {
  console.log(
    border("│") +
    text(str.slice(0, MAX_WIDTH - 2)) +
    " ".repeat(MAX_WIDTH - 2 - Math.min(MAX_WIDTH - 2, str.length)) +
    border("│")
  )

  if (str.length > (MAX_WIDTH - 2)) {
    innerBox(str.slice(MAX_WIDTH - 2))
  }
}

function printHeader(border=Color.white): void {
  console.log(border("╭" + horizontalBar(border) + "╮"))
}

function printFooter(border=Color.white): void {
  console.log(border("╰" + horizontalBar(border) + "╯"))
}

function horizontalBar(border=Color.white): string {
  return border("─".repeat(MAX_WIDTH - 2))
}