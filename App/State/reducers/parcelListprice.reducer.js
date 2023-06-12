import {SAVE_CURRENCY_PARCEL, CLEAR_CURRENCY_PARCEL} from '../actions/index.actions';

export default function parcelPrice(state = 0, action) {
  switch (action.type) {
    case SAVE_CURRENCY_PARCEL: {
      return action.payload;
    }
    case CLEAR_CURRENCY_PARCEL: {
      return 0;
    }
    default: {
      return state;
    }
  }
}
