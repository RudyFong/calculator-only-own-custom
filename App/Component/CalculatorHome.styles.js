export default {
  container: {
    flex: 1
  },
  bottomContainer:{
    paddingBottom: 10,
    paddingTop:10
  },
  containercollcection:{
    justifyContent: 'center', 
    padding: 15, 
    borderRadius: 10, 
    borderWidth: 1, 
    margin: 10, 
    borderColor: 'white', 
    backgroundColor: 'white',
    shadowColor: 'black',
    shadowOpacity: 0.5,
    shadowRadius: 1,
    shadowOffset: {width: 0, height: 0.5},
    elevation:1
  },
  containerNavigation:{
    flexDirection:'row', 
    padding: 10, 
    justifyContent: 'space-between'
  },
  navigation:{
    fontSize: 14,
    fontWeight: '500'
  },
  containerSearch:{
    padding: 10
  },
  containerSearchText:{
    paddingVertical: 5
  },
  searchText:{
    fontSize: 14,
    fontWeight: '500'
  },
  textBoxSearch:{ 
    paddingLeft: 10,
    height: 50, 
    // borderColor: 'black', 
    // borderWidth: 1 , 
    fontSize: 20,
    alignSelf: 'center',
    color: 'black',
    flex: 1
  },
  containerPokeTitle:{
    padding: 10
  },
  pokeDexTitle:{
    fontSize: 30, 
    fontWeight: '500'
  },
  pokeName:{
    fontSize: 16,
    fontWeight: '500'
  },
  containerButtonShow:{
    padding: 10, 
    justifyContent: 'center'
  },
  buttonShowMore:{
    padding: 20, 
    borderRadius: 20, 
    backgroundColor: 'blue', 
    justifyContent: 'center'
  },
  showmoreText:{
    color: 'white', 
    alignSelf: 'center',
    fontSize: 14,
    fontWeight: '500'
  },
  pokeImage:{  
    height: 75, 
    width: 75
  },
  cardPokedex:{
    flexDirection: 'row', 
    justifyContent:'space-between'
  }
};
