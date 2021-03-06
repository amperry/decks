import { AppState } from './types';

export const VIEW_TRANSITION_TIME: number = 500;

export const INITIAL_APP_STATE: AppState = {
  darkMode: false,
  user: undefined,
  deckViewOn: true,
  deckViewExited: false,
  cardViewOn: false,
  cardViewExited: true,
  decks: [],
  cards: [],
  activeDeck: undefined,
  activeCards: [],
  activeCard: undefined,
  activeCardIndex: 0,
  deckReversed: false,
  deckStarred: false,
  cardFlipped: false,
  editMode: false,
};
