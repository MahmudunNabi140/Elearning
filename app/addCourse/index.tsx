import { View, Text, StyleSheet, TextInput, Pressable } from 'react-native';
import React, { useState } from 'react';
import Colors from '@/constent/Colors';
import Button from '../components/Share/Button';
import { GenerateTopicsAIModel } from '../../config/AiModel';
import prompt from '../../constent/prompt';

export default function AddCourse() {
    const [loading, setLoading] = useState(false);
    const [userInput, setUserInput] = useState('');
    const [topics, setTopics] = useState<string[]>([]); // Ensure it's always an array

    const onGenerateTopic = async () => {
        setLoading(true);

        try {
            // Generate prompt
            const PROMPT = userInput + prompt.IDEA;
            const aiResp = await GenerateTopicsAIModel.sendMessage(PROMPT);

            // Debugging: Check raw response before parsing
            const responseText = await aiResp.response.text();

            // Parse response
            const parsedResponse = JSON.parse(responseText);

            // Ensure the response contains an array
            if (parsedResponse.course_titles && Array.isArray(parsedResponse.course_titles)) {
                setTopics(parsedResponse.course_titles); // ✅ Extract correct array
            } else {
                console.error('Unexpected response structure:', parsedResponse);
                setTopics([]); // Fallback to empty array
            }
        } catch (error) {
            console.error('Error generating topics:', error);
            setTopics([]); // Prevent crashes
        } finally {
            setLoading(false);
        }
    };

    return (
        <View
            style={{
                padding: 20,
                backgroundColor: Colors.white,
                flex: 1,
            }}
        >
            <Text style={{ fontFamily: 'outfit-bold', fontSize: 30 }}>Create New Course</Text>
            <Text style={{ fontFamily: 'outfit', fontSize: 30, marginTop: 10 }}>
                What do you want to learn today?
            </Text>
            <Text style={{ fontFamily: 'outfit', fontSize: 20, marginTop: 10, color: Colors.gray }}>
                Write what course you want to create (e.g., React Native, Node.js, etc.).
            </Text>

            <TextInput
                placeholder="Ex. Learn Python, Learn 12th Chemistry"
                style={styles.TextInput}
                onChangeText={(value) => setUserInput(value)}
            />

            <Button text={'Generate Topic'} type={'outline'} onPress={onGenerateTopic} loading={loading} />

            <View style={{ marginTop: 15 }}>
                <Text style={{ fontFamily: 'outfit', fontSize: 20 }}>
                    Select all topics you want to add to the course
                </Text>
                <View style={{ display:'flex',
                    flexDirection:'row',
                    flexWrap:'wrap',
                    gap:10,
                    marginTop:6,
                 }}>
                    {topics.length > 0 ? (
                        topics.map((item, index) => (
                            <Pressable key={index} >
                                <Text style={styles.topicItem}>{item}</Text>
                            </Pressable>
                        ))
                    ) : (
                        <Text>No topics generated yet.</Text>
                    )}
                </View>
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    TextInput: {
        padding: 15,
        borderWidth: 1,
        borderRadius: 10,
        marginTop: 20,
        height: 50,
        fontSize: 18,
        alignItems: 'flex-start',
    },
    topicItem: {
        padding:7,
        borderWidth: 0.4,
        borderRadius: 99,
        borderColor:Colors.primary,
        paddingHorizontal:15,
    },
});
