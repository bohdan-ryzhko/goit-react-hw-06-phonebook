import { createSlice } from "@reduxjs/toolkit";

export const contactsReducer = createSlice({
	name: "contacts",
	initialState: {
		contactsList: [],
	},
	reducers: {
		addContact(state, action) {
			state.contactsList.push(action.payload);
		},
		removeContact(state, action) {
			const index = state.contactsList.findIndex(task => task.id === action.payload);
			state.contactsList.splice(index, 1);
		},
	}
});

export const { addContact, removeContact } = contactsReducer.actions;
export default contactsReducer.reducer;
