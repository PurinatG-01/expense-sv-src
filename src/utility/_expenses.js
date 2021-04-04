import { db } from '../config/firebase/firebase';

export const _addExpensesList = (data) => {
    db.collection('expenses').add(data)
}

export const _removeExpensesList = (id) => {
    db.collection('expenses').doc(id).delete()
}

export const _updateExpensesList = (id, data) => {
    db.collection('expenses').doc(id).update({ 
        expenses: data,
    });
}