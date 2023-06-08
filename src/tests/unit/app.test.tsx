import { configureStore } from '@reduxjs/toolkit';
import { render } from '@testing-library/react';
import { Provider } from 'react-redux';
import { describe, expect, it } from 'vitest';
import App from '../../App';
import { usersApi } from '../../features/api/usersApi';

describe('App component', () => {
  it('renders without crashing', () => {
    const store = configureStore({
      reducer: {
        [usersApi.reducerPath]: usersApi.reducer
      },
      middleware: getDefaultMiddleware => getDefaultMiddleware().concat(usersApi.middleware)
    });

    const { container } = render(
      <Provider store={store}>
        <App />
      </Provider>
    );

    expect(container).toBeInTheDocument();
  })
})
