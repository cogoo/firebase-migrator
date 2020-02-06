import { main } from "../src/firebase-migrator"

describe("Firebase Migrator", () => {
  it("works if true is truthy", () => {
    expect(true).toBeTruthy()
  })

  it("Main is a function", () => {
    expect(typeof main).toEqual('function')
  })
})
