import {SAVE_CURRENCY_YEN, CLEAR_CURRENCY_YEN} from '../actions/index.actions';

export default function currencyYen(state = 0, action) {
  switch (action.type) {
    case SAVE_CURRENCY_YEN: {
      return action.payload;
    }
    case CLEAR_CURRENCY_YEN: {
      return 0;
    }
    default: {
      return state;
    }
  }
}
