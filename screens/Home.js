import { StatusBar } from 'expo-status-bar';
import { Text, View } from 'react-native';
import { StyleSheet } from "react-native";
import { useState } from 'react';
import { useEffect } from 'react';
import { TouchableOpacity } from 'react-native';

export default function Home() {
    const styles = StyleSheet.create({
        container: {
            flex: 1,
            width: '100%',
            backgroundColor: '#c11a2b',
            alignItems: 'center',
            justifyContent: 'center'
        },
        title: {
            color: '#616161',
            fontSize: 24,
            textAlign: 'center',
            fontWeight: 'bold',
        },
        block: {
            width: '90%',
            backgroundColor: '#fff',
            borderRadius: 20,
            padding: 20
        },
        info: {
            color: '#969696',
            fontSize: 14,
            textAlign: 'center',
            lineHeight: 22,
            letterSpacing: 1.2,
            marginBottom: 10
        },
        note: {
            textAlign: 'right',
            fontSize: 14,
            color: '#000',
            fontStyle: 'italic'
        },
        button: {
            borderRadius: 20,
            backgroundColor: '#c11a2b',
            padding: 20,
            width: '100%',
            alignSelf: 'center'
        },
        quote: {
            marginTop: 20,
            marginBottom: 20
        },
        buttonText: {
            color: '#fff',
            textAlign: 'center',
            fontWeight: 'bold',
            fontSize: 16
        }
    });

    const [quote, setQuote] = useState([])
    const [quoteLoading, setQuoteLoading] = useState(false)
    useEffect(() => {
        randomQuote()
    }, [])

    function randomQuote() {
        setQuoteLoading(false)
        fetch("https://api.quotable.io/random")
            .then(response => response.json())
            .then(data => {
                setQuote(data)
                setQuoteLoading(true)
            })
    }

    return (
        <View style={styles.container}>
            <StatusBar style='light' />
            <View style={styles.block}>
                {
                    quoteLoading ?
                        (
                            quote ?
                            (
                                <>
                                    <Text style={styles.title}>Quote of the day</Text>
                                    <View style={styles.quote}>
                                        <Text style={styles.info}>{quote.content}</Text>
                                        <Text style={styles.note}>{`-${quote.author}`}</Text>
                                    </View>
                                    <TouchableOpacity style={styles.button} onPress={() => randomQuote()}>
                                        <Text style={styles.buttonText}>New Quote</Text>
                                    </TouchableOpacity>
                                </>
                            )
                            :
                            (
                                <Text style={styles.title}>Error, try to reload the app</Text>
                            )
                        )
                        :
                        <Text style={styles.title}>Loading...</Text>
                }
            </View>
        </View>
    )
}