import { createStore, applyMiddleware } from 'redux';
import { persistStore } from 'redux-persist'
import createSagaMiddleware from 'redux-saga';
import thunkMiddleware from 'redux-thunk';

import rootReducer from 'data/reducers';
import rootSaga from 'data/sagas';

/* Returns the store instance. It can  also take initialState argument when provided */
const configureStore = () => {

  const sagaMiddleware = createSagaMiddleware();

  const store = {
    ...createStore(rootReducer,
      applyMiddleware(
        sagaMiddleware,
        thunkMiddleware
      )
    ),
    runSaga: sagaMiddleware.run(rootSaga)
  }

  let persistor = persistStore(store)

  return {store, persistor};
};

export default configureStore;
