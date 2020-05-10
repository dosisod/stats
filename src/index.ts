import { simpleBox } from "./draw/box.ts"
import { grab } from "./api/entry.ts"

simpleBox("Welcome to stats!")

const userName = "CHANGE THIS!"

const gitEvents = await grab(userName)

for (const gitEvent of gitEvents) {
  if (gitEvent["type"] == "PushEvent") {
    console.log(gitEvent["repo"]["name"].split("/")[1])
    for (const commit of gitEvent["payload"]["commits"].reverse()) {
      console.log("  " + commit["message"])
    }

    //add space between next commit
    console.log("")
  }
}
