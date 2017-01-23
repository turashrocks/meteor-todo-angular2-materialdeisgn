import { Meteor } from 'meteor/meteor';
import './imports/publications/parties';
import {Parties} from '../both/collections/parties.collection';
import {Party} from "../both/models/party.model";

import './imports/publications/parties';
import './imports/publications/users'; 

Meteor.startup(() => {
});