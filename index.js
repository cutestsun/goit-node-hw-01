const fs = require("fs/promises");
const path = require("path");
const argv = require("yargs").argv;
const {
  listContacts,
  getContactById,
  removeContact,
  addContact,
} = require("./contacts.js");

const invokeAction = async ({ action, id, name, email, phone }) => {
  switch (action) {
    case "list":
      const list = await listContacts();
      console.table(list);
      break;

    case "get":
      const contact = await getContactById(id);
      console.log(contact);
      break;

    case "add":
      const newContact = await addContact(name, email, phone);
      console.log(newContact);
      break;

    case "remove":
      const removedContact = await removeContact(id);
      console.log(removedContact);
      break;

    default:
      console.warn("\x1B[31m Unknown action type!");
  }
};

invokeAction(argv);
