function AddressBook() {

	var contacts = [];
	var self = this;

	this.initialComplete = false;

	this.addContact = function(contact) {
		contacts.push(contact);
	}

	this.getContact = function(index) {
		return contacts[index];
	}

	this.deleteContact = function(index) {
		contacts.splice(index, 1);
	}

	this.getInitialContacts = function(callback) {
		setTimeout(function() {
			self.initialComplete = true;
			if (callback) {
				return callback();
			}
		}, 1);
	}
}
