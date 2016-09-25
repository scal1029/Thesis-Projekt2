'use strict';

/**
 * Module dependencies.
 */
var mongoose = require('mongoose'),
  Schema = mongoose.Schema;

/**
 * Article Schema
 */
var ArticleSchema = new Schema({
  created: {
    type: Date,
    default: Date.now
  },
  periode: {
    type: String,
    default: 'Okt 16',
    trim: true,
    required: 'Periode ist ein Pflichtfeld'
  },
  projekt: {
    type: String,
    default: '',
    trim: true,
    required: 'Projekt ist ein Pflichtfeld'
  },
  verkaufsprojekt: {
    type: String,
    default: '',
    trim: true,
    required: 'Verkaufsprojekt ist ein Pflichtfeld'
  },
  aktivitaet: {
    type: String,
    default: '',
    trim: true,
    required: 'Aktivität ist ein Pflichtfeld'
  },
  typ: {
    type: String,
    default: '',
    trim: true,
    required: 'Typ ist ein Pflichtfeld'
  },
  projektaufgabe: {
    type: String,
    default: '',
    trim: true,
    required: 'Aufgabe ist ein Pflichtfeld'
  },
  mitarbeiter: {
    type: Schema.ObjectId,
    ref: 'User'
  },
  datum: {
    type: Date,
    default: Date.now,
    required: 'Datum ist ein Pflichtfeld'
  },
  stunden: {
    type: Number,
    min: [0, 'Keine negativen Stunden'],
    max: [24, 'Nicht mehr als 24 Stunden pro Tag']
  },
  kommentar: {
    type: String,
    default: '',
    trim: true
  },
  oppty: {
    type: String,
    default: '',
    trim: true,
    required: 'Oppty ist ein Pflichtfeld'
  },
  einsatzort: {
    type: String,
    default: 'Office',
    enum: ['Office','Homeoffice','Kunde'],
    trim: true,
    required: 'Einsatzort ist ein Pflichtfeld und kann nur Office, Homeoffice oderr Kunde sein'
  },
  fakultierbar: {
    type: Boolean
  },
  user: {
    type: Schema.ObjectId,
    ref: 'User'
  }
});

mongoose.model('Article', ArticleSchema);
