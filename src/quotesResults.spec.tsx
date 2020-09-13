import React from "react"
import {shallow, mount} from 'enzyme'

describe("QuotesResults", () => {
  const mockUseListVals = jest.fn()
  
  beforeEach(() => {
    const mockDatabase = jest.fn().mockReturnValue({ ref: jest.fn() })
    jest.mock('gatsby-plugin-firebase', () => ({ database: mockDatabase }))
    jest.mock('react-firebase-hooks/database', () => ({ useListVals: mockUseListVals }))
  })

  it("renders a loading message", () => {
    mockUseListVals.mockReturnValue([false, true, false])
    const QuotesResults = require('./quotesResults').default
    const component = shallow(<QuotesResults />)
    expect(component.text()).toContain("Buscando")
  })

  it("renders filtered list by sentence", () => {
    mockUseListVals.mockReturnValue([[
      {value: 'Primeira frase', labels: ['familia']},
      {value: 'Segunda frase', labels: ['familia']},
    ], false, false])

    const QuotesResults = require('./quotesResults').default
    const component = mount(<QuotesResults searchTerms="Primeira" />)
    expect(component.text()).toContain("Primeira frase")
    expect(component.text()).not.toContain("Segunda frase")
  })

  it("renders filtered list by labels", () => {
    mockUseListVals.mockReturnValue([[
      {value: 'Primeira frase', labels: ['outro']},
      {value: 'Segunda frase', labels: ['familia']},
    ], false, false])

    const QuotesResults = require('./quotesResults').default
    const component = mount(<QuotesResults searchTerms="outro" />)
    expect(component.text()).toContain("Primeira frase")
    expect(component.text()).not.toContain("Segunda frase")
  })

  it("renders error", () => {
    mockUseListVals.mockReturnValue([false, false, "Some error"])

    const QuotesResults = require('./quotesResults').default
    const component = mount(<QuotesResults searchTerms="outro" />)
    expect(component.text()).toContain("Erro: Some error")
  })
})
