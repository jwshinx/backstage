import _ from 'lodash'
import React from 'react'

import { SortPropertyType } from '../types/item'

function SortInput<T>({
  objects,
  onSortPropertyClick,
}: {
  objects: Array<T>
  onSortPropertyClick: (propertyType: SortPropertyType<T>) => void
}): JSX.Element {
  if (objects === undefined || objects === null || _.isEmpty(objects)) {
    return <></>
  }

  const object = objects.length > 0 ? objects[0] : {}

  const onSelectChange = (object: string): void => {
    const values: Array<string> = object.split('-')
    if (values.length === 2) {
      onSortPropertyClick({
        property: values[0] as keyof T,
        isDescending: values[1] === 'true',
      })
    }
  }

  return (
    <div className="form-group">
      <select
        className="form-select mb-3"
        id="sorter"
        onChange={(event) => onSelectChange(event.target.value)}
      >
        {Object.keys(object).map((key): JSX.Element => {
          return (
            <React.Fragment key={key}>
              <option key={`${key}-true`} value={`${key}-true`}>
                Sort by {key} desc
              </option>
              <option key={`${key}-false`} value={`${key}-false`}>
                Sort by {key} asc
              </option>
            </React.Fragment>
          )
        })}
        ;
      </select>
    </div>
  )
}

export default SortInput
