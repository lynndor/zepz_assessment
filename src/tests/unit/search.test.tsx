import { fireEvent, render } from '@testing-library/react';
import { describe, expect, it, vi } from 'vitest';
import { Search } from '../../components';

describe('Search input', () => {
  it('updates on change', () => {

    const setSearch = vi.fn((value) => {})

    const { queryByPlaceholderText } = render(
        <Search onInputChange={setSearch}/>
    );

    const searchInput = queryByPlaceholderText('Search for a user')
    fireEvent.change(searchInput, { target: { value: 'test' } })

    expect(searchInput.value).toBe('test')
  })
})
