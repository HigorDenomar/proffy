import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#8257E5',
    justifyContent: 'center',
    padding: 40
  },

  content: {
    flex: 1,
    justifyContent: 'center',
  },

  title: {
    fontFamily: 'Archivo_700Bold',
    color: '#FFF',
    fontSize: 32,
    lineHeight: 37,
    maxWidth: 180,
  },

  description: {
    fontFamily: 'Poppins_400Regular',
    color: '#D4C2FF',
    fontSize: 16,
    lineHeight: 26,
    marginTop: 24,
  },
  
  okButton: {
    marginVertical: 40,
    backgroundColor: '#04D361',
    height: 58,
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 8,
  },

  okButtonText: {
    fontFamily: 'Archivo_700Bold',
    color: '#FFF',
    fontSize: 16,
  }
});

export default styles;