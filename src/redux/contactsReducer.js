import { createSlice } from "@reduxjs/toolkit";
import { notificationAlready } from "services/notificationAlready";
import { isRepeatName } from "services/isRepeatName";
import { getFindIndex } from "services/getFindIndex";

export const contactsReducer = createSlice({
	name: "contacts",
	initialState: {
		contactsList: [],
	},
	reducers: {
		addContact({ contactsList }, { payload }) {
			const repeatName = isRepeatName(payload.name, contactsList);
			if (repeatName) return notificationAlready(payload.name);
			contactsList.push(payload);
		},
		removeContact({ contactsList }, { payload }) {
			const removedIndex = getFindIndex(payload, contactsList);
			contactsList.splice(removedIndex, 1);
		},
	}
});

export const { addContact, removeContact } = contactsReducer.actions;
export default contactsReducer.reducer;
