import React, { useState, useEffect } from 'react'
import useDebounce from '../hooks/useDebounce'

// import classes from './SearchInput.module.css';

interface SearchInputProps {
  setSearchQuery: (searchQuery: string) => void
  placeholderText: string
}

export function SearchInput(props: SearchInputProps) {
  // console.log("+++> SearchInput 0");
  const { setSearchQuery, placeholderText } = props
  const [query, setQuery] = useState<string>('')
  const debouncedQuery = useDebounce(query, 500)

  useEffect(() => {
    // console.log("+++> SearchInput 1 useEffect!");
    setSearchQuery(debouncedQuery)
  }, [debouncedQuery, setSearchQuery])

  return (
    <div className="form-group">
      <input
        id="search"
        type="search"
        className="form-control"
        placeholder={placeholderText}
        onChange={(event) => setQuery(event.target.value)}
      />
      <small id="emailHelp" className="form-text text-muted"></small>
    </div>
  )
}
