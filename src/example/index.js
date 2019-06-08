/* eslint-disable import/no-unresolved */
import React from 'react'
import ReactDOM from 'react-dom'
import { Editor } from 'slate'
import { compose, withState, withHandlers } from 'recompose'
import { handlers } from './handlers'
import { prop } from 'ramda'
import countriesAutoCompletePlugin from './countries-auto-complete-plugin'

const plugins = [countriesAutoCompletePlugin]

const Example = ({ value, onChange }) => (
  <React.Fragment>
    <Editor
      value={value}
      plugins={plugins}
      onChange={onChange}
    />
    {plugins.filter(({ component }) => !!component).map(({ component: Comp }, index) => <Comp key={index} />)}
  </React.Fragment>
)

export default compose(withState('value', 'setValue', prop('value')), withHandlers(handlers))(Example)

const example = <Example />
const root = document.body.querySelector('main')
ReactDOM.render(example, root)
