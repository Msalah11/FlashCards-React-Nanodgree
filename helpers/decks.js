import { AsyncStorage } from 'react-native';

export const FLASHCARDS_STORAGE_KEY = 'MobileFlashCards:Decks';

export function formatDeckResults(results) {
    return results === null
        ? setInitData()
        : JSON.parse(results);
}

function setInitData() {
    const initData = {
        ['React']: {
            title: 'React',
            questions: [
                {
                    question: `Do you use react?`,
                    answer: 'Yes'
                },
                {
                    question: `What is React?`,
                    answer: 'A JavaScript library for building user interfaces'
                },
            ]
        },
        ['Angular']: {
            title: 'Angular',
            questions: [
                {
                    question: `Do you use angular?`,
                    answer: 'Yes'
                },
                {
                    question: `What is Angular?`,
                    answer: 'Angular is a platform for building mobile and desktop web applications.'
                }
            ]
        }
    };

    AsyncStorage.setItem(FLASHCARDS_STORAGE_KEY, JSON.stringify(initData));

    return initData;
}
