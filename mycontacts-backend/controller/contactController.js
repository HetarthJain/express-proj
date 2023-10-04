// THIS FILE controls all CRUD operations
// Simple middleware for handling exceptions inside of async express routes and passing them to your express error handlers.

const asyncHandler = require("express-async-handler")
const Contact = require("../models/contactModel")
const { constants } = require("../constants")

// @desc get all contacts
// @route GET /api/contacts
// @access public
const getContacts = asyncHandler(async (req, res) => {
	const contacts = await Contact.find()
	res.status(200).json(contacts)
})

// @desc create new contact
// @route POST /api/contacts
// @access public
const createContact = asyncHandler(async (req, res) => {
	console.log("The request body is : ",req.body)
	const { name, email, phone } = req.body
	if (!name || !email || !phone) {
		res.status(400)
		throw new Error("all  fields are mandatory")
	}
	const contact = await Contact.create({
		name,email,phone
	})
	res.status(201).json(contact)
})

// @desc get all contacts
// @route GET /api/contacts/:id
// @access public
const getContact = asyncHandler(async (req, res) => {
	// fetch contact
	const contact = await Contact.findById(req.params.id)
	if (!contact) {
		res.status(404)
		throw new Error("Contact not found")
	}
	res.status(200).json(contact)
})

// @desc update contacts
// @route PUT /api/contacts/:id
// @access public
const updateContact = asyncHandler(async (req, res) => {
	// fetch contact
	const contact = await Contact.findById(req.params.id)
	if (!contact) {
		res.status(404)
		throw new Error("Contact not found")
	}
	// update
	const updatedContact = await Contact.findByIdAndUpdate(
		req.params.id,
		req.body,
		{ new: true })
	res.status(200).json(updatedContact)
})

// @desc get all contacts
// @route DELETE /api/contacts/:id
// @access public 
const deleteContact = asyncHandler(async (req, res) => {
	// fetch contact
	const contact = await Contact.findById(req.params.id)
	if (!contact) {
		res.status(404)
		throw new Error("Contact not found")
	}
	console.log(req.params.id)
	await Contact.findByIdAndDelete(req.params.id);
	res.status(200).json(contact)
})

module.exports = {
	getContacts,
	createContact,
	getContact,
	updateContact,
	deleteContact
} 