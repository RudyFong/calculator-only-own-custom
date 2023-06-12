export default {
  container: {
    flexGrow: 1,
    paddingTop: 10,
    paddingBottom: 40
  },
  containercollcection:{
    paddingHorizontal: 15,
    borderRadius: 10, 
    borderWidth: 1, 
    margin: 10, 
    borderColor: 'white', 
    backgroundColor: 'white',
    shadowColor: 'black',
    shadowOpacity: 0.5,
    shadowRadius: 1,
    shadowOffset: {width: 0, height: 0.5},
    elevation:1,
    height: 110
  },
  containerCard:{
    flexDirection: 'row', 
    justifyContent:'space-between',
    paddingTop: 10,
    flex: 1
  },
  nickNameText:{
    fontSize: 20, 
    fontWeight: '600', 
    paddingBottom: 5
  },
  pokeNameText:{
    fontWeight: '500'
  },
  containerDeletePoke:{
    position: 'absolute', 
    left: 0, 
    bottom: 10
  },
  deletePoke:{
    height: 20, 
    width: 15
  },
  containerImage:{
    justifyContent: 'center'
  },
  imagePoke:{
    height: 75, 
    width: 75
  },
  containerNavigation:{
    padding: 10
  },
  navigationnText:{
    fontSize: 14, 
    fontWeight: '500'
  },
  containerTitle:{
    padding:10
  },
  titleText:{
    fontSize: 30, 
    fontWeight: '500'
  }
};
