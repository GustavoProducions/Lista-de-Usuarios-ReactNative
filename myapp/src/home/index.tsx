import { StatusBar } from 'expo-status-bar';
import { Text, View, TextInput, TouchableOpacity } from 'react-native';
import { styles } from './style';
import { Participant } from '../components/Participant';

export function Home() {

  function handleAdd(){
    console.log('deu ce')
  }

  function remover(name : string){
    console.log(`remover o ${name}`)
  }

  return (
    <>
    <View style={styles.container}>
      <Text style={styles.text}>
        Nome do Evento
      </Text>
      <Text style={styles.text2}>
        Quarta-feira 18/09
      </Text>
      <View style={styles.form}>
      <TextInput 
      style={styles.input}
      placeholder='Novo Participante' 
      placeholderTextColor={"#fff"}
      />
      <TouchableOpacity 
      style={styles.button}
      onPress={handleAdd}
      >
        <Text style={styles.buttonText}>+</Text>
      </TouchableOpacity>
      </View>
      <Participant name="Gama" onRemove={() => remover("Gama")}/>
    </View>
    </>
  );
}