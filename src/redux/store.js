import { configureStore } from '@reduxjs/toolkit';
import counter from './counter';

export const store = configureStore({
  reducer: {
    // counter: counter,
    counter, //если повторяющихся слова, можно оставить только одно в обьектах, где есть ключ и значение
  },
});
// в const store хранится все хранилище, оно пригодится чуть позже в проекте
