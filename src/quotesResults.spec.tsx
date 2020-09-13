import React from "react"
import {shallow} from 'enzyme'

describe("QuotesResults", () => {
  beforeEach(() => {
    const mockRef = jest.fn().mockReturnValue({ snapshots: { val: jest.fn() } })
    const mockDatabase = jest.fn().mockReturnValue({ ref: mockRef })
    jest.mock('gatsby-plugin-firebase', () => ({ database: mockDatabase }))
  })

  it("renders a loading message", () => {
    const QuotesResults = require('./quotesResults').default
    const component = shallow(<QuotesResults />)
    expect(component.text()).toContain("Buscando")
  })
})
