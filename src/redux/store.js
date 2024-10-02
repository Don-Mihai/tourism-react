import { configureStore } from '@reduxjs/toolkit';
import counter from './counter';
import user from './user';
import hotel from './hotel';

export const store = configureStore({
  reducer: {
    // counter: counter,
    counter, //если повторяющихся слова, можно оставить только одно в обьектах, где есть ключ и значение
    user,
    hotel,
  },
});
// в const store хранится все хранилище, оно пригодится чуть позже в проекте
