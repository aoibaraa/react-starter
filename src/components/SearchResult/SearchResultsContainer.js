import { connect } from 'react-redux';
import Search from './SearchResults';
import {
  getSearchString,
  countVisibleCards,
  countAllCards,
  createAction_SEARCH,
  getVisibleCards,
} from '../../redux/searchStringRedux';

const mapStateToProps = (state) => ({
  searchString: getSearchString(state),
  countVisible: countVisibleCards(state),
  countAll: countAllCards(state),
  cards: getVisibleCards(state), 
});

const mapDispatchToProps = (dispatch) => ({
  changeSearchString: newSearchString => dispatch(createAction_SEARCH(newSearchString)),
});

export default connect(mapStateToProps, mapDispatchToProps)(Search); 