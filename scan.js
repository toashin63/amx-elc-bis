import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import * as Permissions from 'expo-permissions'
import {BarCodeScanner} from 'expo-barcode-scanner'

export default class ScanScreen extends React.Component{
    
    constructor(){
        super()
        this.state = {
            hcp:null,
            scanned:null,
            scannedData:'',
            buttonState:'normal'
        }
    }
    gcp=async()=>{
        const {status}=await Permissions.askAsync(Permissions.CAMERA)
        this.setState({
            hcp: status==="granted",
buttonState:"clicked",
scanned:false
        })
    }
    hbs=async({type,data})=>{
        this.setState({
            scanned:true,
            sd:data,
            buttonState:'normal'
        })
    }
    render(){
        const hcp=this.state.hcp
        const scaned=this.state.scanned
        const buttonState=this.state.buttonState
        if(buttonState==="clicked"&&hcp){
    return(
        
        <BarCodeScanner onBarCodeScanned={scaned?undefined:this.hasBarcodeScanned}
        style={StyleSheet.absoluteFillObject}></BarCodeScanner>
    )
    
        }
        else if(buttonState==="normal"){
        return(
            <View>
                <Text>{hcp===true?this.state.scanedData:"requestcamerpermission"}</Text>
                <TouchableOpacity style={{
                    backgroundColor:"blue",
                    borderRadius:50,
                    width:70,
                    height:20,
                    alignSelf:"center",
                    marginTop:50,
                    alignItems:"center"
                }} 
                onPress={()=>{this.hcp()}}>
                    <Text style={{color:"white",fontStyle:18,}}>scan</Text>
                </TouchableOpacity>
                <Text>hi </Text>
                <TextInput 
                placeholder={"htjb"}
                style={{width:200,height:30,borderWidth:3}}
                onChangeText={(text)=>{this.setState({
                    studentId:text
                })}}
                />
    
                <TextInput 
                style={{width:200,height:30,borderWidth:3}}
                placeholder={"trtr"}
                onChangeText={(text)=>{this.setState({
                    bookId:text
                })}}/>
                <TouchableOpacity style=
                {{width:200,height:30,backgroundColor:"orange",alignSelf:"center",alignItem:"center"}}
                onPress={()=>{
               
                }}
                >
                    <Text>Issue</Text>
                </TouchableOpacity>
                </View>
        )
            }
    }
    
}